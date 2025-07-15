"use client"

import { BookOpen } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900  text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold">Desarrollo Organizacional</span>
            </div>
            <p className="text-gray-400 text-sm">
              Plataforma educativa interactiva para el aprendizaje del desarrollo organizacional.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button>Inicio</button></li>
              <li><button>Núcleos Temáticos</button></li>
              <li><button>Evaluación</button></li>
              <li><button>Recursos</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Biblioteca Digital</li>
              <li>Casos de Estudio</li>
              <li>Videos Educativos</li>
              <li>Herramientas Interactivas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Centro de Ayuda</li>
              <li>Tutorías</li>
              <li>Foros de Discusión</li>
              <li>Contacto Técnico</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Desarrollo Organizacional. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

