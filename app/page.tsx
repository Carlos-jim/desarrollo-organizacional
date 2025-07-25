"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("inicio");

  return (
    <>
      {activeSection === "inicio" && (
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Desarrollo Organizacional
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Descubre el fascinante mundo del cambio y la transformación
                organizacional a través de una experiencia de aprendizaje
                interactiva y envolvente
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/nucleos-tematicos">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Explorar Contenido
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
