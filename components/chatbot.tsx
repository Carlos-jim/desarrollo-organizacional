"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useChatbot } from "@/hooks/useChatbot";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const {
    messages,
    input,
    loading,
    bottomRef,
    setInput,
    sendMessage,
  } = useChatbot();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {open && (
        <div className="w-80 sm:w-96 h-[500px] flex flex-col bg-white border shadow-xl rounded-xl overflow-hidden">
          <div className="flex justify-between items-center p-3 bg-blue-600 text-white text-sm font-semibold">
            Chatbot Organizacional
            <button onClick={() => setOpen(false)} className="hover:text-gray-200">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.filter((m) => m.role !== "system").map((msg, i) => (
              
              <div
                key={i}
                className={`text-sm whitespace-pre-wrap max-w-[80%] p-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-100 self-end ml-auto"
                    : "bg-gray-100 self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="bg-gray-100 text-sm px-3 py-2 rounded-lg max-w-[60%] animate-pulse">
                <span className="inline-block w-1.5 h-1.5 bg-gray-500 rounded-full mr-1 animate-bounce"></span>
                <span className="inline-block w-1.5 h-1.5 bg-gray-500 rounded-full mr-1 animate-bounce delay-150"></span>
                <span className="inline-block w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-300"></span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="flex p-2 border-t gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu pregunta..."
              className="flex-1 px-2 py-1 text-sm border rounded-md focus:outline-none"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "..." : "Enviar"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
