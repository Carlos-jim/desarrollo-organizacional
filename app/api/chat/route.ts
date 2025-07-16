import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages = body.messages;
  const URL = "https://api-inference.huggingface.co/models/gpt2"
  
  if (!messages || !Array.isArray(messages)) {
    return NextResponse.json(
      { error: "Invalid request, 'messages' field is required." },
      { status: 400 }
    );
  }

  // Concatenamos el contexto para enviar a GPT-2 (que no maneja mensajes formateados)
  // Puedes adaptar esto para otros modelos que manejen chat.
  const prompt = messages
    .filter(m => m.role !== "system") // excluir system si quieres
    .map(m => (m.role === "user" ? "User: " : "Assistant: ") + m.content)
    .join("\n") + "\nAssistant:";


  try {
    const res = await fetch(
      URL,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 150,
            temperature: 0.7,
            top_p: 0.9,
          },
        }),
      }
    );

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json(error, { status: res.status });
    }

    const data = await res.json();

    // La respuesta de HF para texto es un array [{generated_text: "..."}]
    const generatedText = data[0]?.generated_text || "";

    // Extraemos la respuesta del assistant del texto generado quitando el prompt
    const answer = generatedText.slice(prompt.length).trim();

    return NextResponse.json({
      choices: [{ message: { role: "assistant", content: answer } }],
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error connecting to Hugging Face API", details: error },
      { status: 500 }
    );
  }
}
