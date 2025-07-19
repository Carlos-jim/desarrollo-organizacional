// hooks/useChatbot.ts
import { useState, useEffect, useRef } from "react";

export function useChatbot() {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
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
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Hubo un error al conectar con la API." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    input,
    loading,
    bottomRef,
    setInput,
    sendMessage,
  };
}
