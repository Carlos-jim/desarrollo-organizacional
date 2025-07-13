"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { nucleosTemáticos } from "@/data/nucleos-tematicos"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Users,
  TrendingUp,
  History,
  Target,
  Lightbulb,
  Search,
  UserCheck,
  ChevronRight,
  Play,
  FileText,
  MessageSquare,
  Award,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import HomePage from "@/page/home"
import Recursos from "@/page/recursos"
import ContactoPage from "@/page/contacto"
import EvaluacionPage from "@/page/evaluacion"

export default function DesarrolloOrganizacionalPortfolio() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [progress, setProgress] = useState(0)
  const [activeNucleo, setActiveNucleo] = useState(null)


  const actividades = [
    { tipo: "Mapa Conceptual", icono: FileText, descripcion: "Visualización de conceptos clave" },
    { tipo: "Cuestionario", icono: MessageSquare, descripcion: "Evaluación de conocimientos" },
    { tipo: "Simulación", icono: Play, descripcion: "Casos prácticos interactivos" },
    { tipo: "Foro de Discusión", icono: Users, descripcion: "Debate y análisis grupal" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header/Navigation */}
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
              <Button variant="ghost" onClick={() => setActiveSection("inicio")}>
                Inicio
              </Button>
              <Button variant="ghost" onClick={() => setActiveSection("nucleos")}>
                Núcleos Temáticos
              </Button>
              <Button variant="ghost" onClick={() => setActiveSection("evaluacion")}>
                Evaluación
              </Button>
              <Button variant="ghost" onClick={() => setActiveSection("recursos")}>
                Recursos
              </Button>
              <Button variant="ghost" onClick={() => setActiveSection("contacto")}>
                Contacto
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {activeSection === "inicio" && (
        <HomePage></HomePage>
      )}


      {activeSection === "nucleos" && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Núcleos Temáticos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explora cada área fundamental del desarrollo organizacional con contenido interactivo y casos de estudio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {nucleosTemáticos.map((nucleo, index) => {
                const IconComponent = nucleo.icono
                return (
                  <Card
                    key={nucleo.id}
                    className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white/70 backdrop-blur-sm"
                  >
                    <CardHeader className="text-center">
                      <div
                        className={`w-16 h-16 ${nucleo.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{nucleo.titulo}</CardTitle>
                      <CardDescription>{nucleo.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Actividades</span>
                          <Badge variant="secondary">4</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Casos de Estudio</span>
                          <Badge variant="secondary">2</Badge>
                        </div>
                        <Button
                          className="w-full mt-4 bg-transparent"
                          variant="outline"
                          onClick={() => {
                            setActiveSection("nucleo-detalle")
                            setActiveNucleo(nucleo.id)
                          }}
                        >
                          Explorar Núcleo
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Actividades Interactivas */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Actividades Interactivas</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {actividades.map((actividad, index) => {
                  const IconComponent = actividad.icono
                  return (
                    <div
                      key={index}
                      className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <IconComponent className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                      <h4 className="font-semibold mb-2">{actividad.tipo}</h4>
                      <p className="text-sm text-gray-600">{actividad.descripcion}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Núcleo Temático Individual */}
      {activeSection === "nucleo-detalle" && activeNucleo && (
        <NucleoDetalle
          nucleoId={activeNucleo}
          onBack={() => setActiveSection("nucleos")}
          nucleosData={nucleosTemáticos}
        />
      )}

      {/* Sección de Evaluación */}
      {activeSection === "evaluacion" && (
        <EvaluacionPage></EvaluacionPage>
      )}

      {/* Recursos Adicionales */}
      {activeSection === "recursos" && (
        <Recursos></Recursos>
      )}

      {/* Contacto */}
      {activeSection === "contacto" && (
        <ContactoPage></ContactoPage>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                <li>
                  <button onClick={() => setActiveSection("inicio")}>Inicio</button>
                </li>
                <li>
                  <button onClick={() => setActiveSection("nucleos")}>Núcleos Temáticos</button>
                </li>
                <li>
                  <button onClick={() => setActiveSection("evaluacion")}>Evaluación</button>
                </li>
                <li>
                  <button onClick={() => setActiveSection("recursos")}>Recursos</button>
                </li>
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
    </div>
  )
}

const NucleoDetalle = ({ nucleoId, onBack, nucleosData }) => {
  const nucleo = nucleosData.find((n) => n.id === nucleoId)

  if (!nucleo) {
    return <div>Núcleo no encontrado</div>
  }

  const IconComponent = nucleo.icono

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ChevronRight className="mr-2 w-4 h-4 rotate-180" />
          Volver a Núcleos Temáticos
        </Button>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className={`w-20 h-20 ${nucleo.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold">{nucleo.titulo}</CardTitle>
            <CardDescription className="text-gray-600">{nucleo.descripcion}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contenido del Núcleo</h3>
              <p>Aquí se mostrará el contenido detallado del núcleo temático.</p>
              <ul className="list-disc list-inside">
                <li>Lección 1: Introducción</li>
                <li>Lección 2: Conceptos Clave</li>
                <li>Lección 3: Aplicaciones Prácticas</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
