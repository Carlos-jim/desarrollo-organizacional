import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages = body.messages;
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  if (!messages || !Array.isArray(messages)) {
    return NextResponse.json(
      { error: "Solicitud inválida, se requiere el campo 'messages'." },
      { status: 400 }
    );
  }

  if (!GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "Falta la clave de API de Gemini (GEMINI_API_KEY)" },
      { status: 500 }
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    //const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const chatMessages = messages
      .filter((m: any) => m.role === "user" || m.role === "assistant")
      .map((m: any) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      }));

    if (chatMessages.length === 0 || chatMessages[0].role !== "user") {
      return NextResponse.json(
        { error: "El primer mensaje del historial debe ser del usuario (role: 'user')." },
        { status: 400 }
      );
    }

    const chat = model.startChat({
      history: chatMessages,
      generationConfig: {
        maxOutputTokens: 1500,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    const lastUserMessage = [...messages].reverse().find((m: any) => m.role === "user");

    if (!lastUserMessage) {
      return NextResponse.json(
        { error: "No se encontró un mensaje de usuario en la solicitud." },
        { status: 400 }
      );
    }

    // Instrucción para mantener el enfoque en Desarrollo Organizacional
    const instruction = "Recuerda: solo puedes responder preguntas relacionadas con Desarrollo Organizacional. Si la pregunta no es sobre ese tema, responde educadamente que no puedes ayudar.";

    const result = await chat.sendMessage(instruction + "\n" + lastUserMessage.content);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      choices: [{ message: { role: "assistant", content: text } }],
    });
  } catch (error: any) {
    console.error("Error en el servidor al conectar con Gemini:", error);
    return NextResponse.json(
      {
        error: "Error al conectar con la API de Gemini",
        details: error.message,
        hint: "Asegúrate de que el modelo 'gemini-pro' está disponible para tu clave de API. Usa genAI.listModels() para verificar."
      },
      { status: 500 }
    );
  }
}
