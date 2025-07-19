import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Chatbot from "@/components/chatbot";

export const metadata: Metadata = {
  title: "Desarrollo Organizacional",
  description: "Desarrollo Organizacional",
  generator: "CR",
};

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <main className="flex-grow">{children}</main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}

