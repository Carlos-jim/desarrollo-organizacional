"use client";

import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "Eres un asistente experto en Desarrollo Organizacional. Solo responde preguntas relacionadas con ese tema. Si te preguntan otra cosa, responde educadamente que solo puedes hablar sobre Desarrollo Organizacional.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);
      const reply = data.choices?.[0]?.message;
      if (reply) {
        setMessages((prev) => [...prev, reply]);
      } else if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `Error: ${data.error.message || "No se recibió respuesta."}`,
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Hubo un error al conectar con la API.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="w-full max-w-xl mx-auto border rounded-xl shadow-md p-4 bg-white">
      <div className="h-96 overflow-y-auto space-y-4 mb-4 px-2 flex flex-col">
        {messages
          .filter((m) => m.role !== "system")
          .map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg max-w-[80%] whitespace-pre-wrap text-sm ${
                msg.role === "user"
                  ? "bg-blue-100 self-end ml-auto"
                  : "bg-gray-100 self-start"
              }`}
            >
              {msg.content}
            </div>
          ))}
        <div ref={bottomRef} />
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Haz una pregunta sobre Desarrollo Organizacional..."
          className="flex-grow px-3 py-2 border rounded-md text-sm focus:outline-none"
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}
