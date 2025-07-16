"use client";

import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = (
    <>
      <Link href="/" onClick={closeMenu}><button>Inicio</button></Link>
      <Link href="/nucleos-tematicos" onClick={closeMenu}><button>Núcleos Temáticos</button></Link>
      <Link href="/evaluacion" onClick={closeMenu}><button>Evaluación</button></Link>
      <Link href="/recursos" onClick={closeMenu}><button>Recursos</button></Link>
      <Link href="/contacto" onClick={closeMenu}><button>Contacto</button></Link>
    </>
  );

  return (
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
            {navLinks}
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 flex flex-col space-y-4 bg-white border rounded-lg p-4"
            >
              {navLinks}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
