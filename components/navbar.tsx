"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Desarrollo Organizacional
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href={"/"}>
                <button>Inicio</button>
              </Link>
              <Link href="/nucleos-tematicos">
                <button>Núcleos Temáticos</button>
              </Link>
              <Link href={"/evaluacion"}>
                <button>Evaluación</button>
              </Link>
              <Link href={"/recursos"}>
                <button>Recursos</button>
              </Link>
              <Link href={"/contacto"}>
                <button>Contacto</button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
