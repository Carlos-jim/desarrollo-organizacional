"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Play,
  FileText,
  MessageSquare,
  Users,
  Brain,
  CheckCircle,
  Clock,
  Star,
  BookOpen,
  Video,
  Headphones,
  PresentationIcon as PresentationChart,
  ExternalLink,
  Download,
  Share2,
} from "lucide-react"

interface NucleoDetalleProps {
  nucleoId: string
  onBack: () => void
  nucleosData: any[]
}

export default function NucleoDetalle({ nucleoId, onBack, nucleosData }: NucleoDetalleProps) {
  const [activeTab, setActiveTab] = useState("contenido")
  const [completedActivities, setCompletedActivities] = useState<string[]>([])

  const nucleo = nucleosData.find((n) => n.id === nucleoId)
  if (!nucleo) return null

  const contenidoPorNucleo = {
    introduccion: {
      titulo: "Introducción al Desarrollo Organizacional",
      descripcion: "Fundamentos teóricos y conceptuales del desarrollo organizacional como disciplina",
      objetivos: [
        "Comprender los conceptos fundamentales del DO",
        "Identificar los principios básicos de la disciplina",
        "Reconocer la importancia del DO en las organizaciones modernas",
      ],
      actividades: [
        {
          id: "mapa-conceptual-do",
          tipo: "Mapa Conceptual",
          titulo: "Conceptos Fundamentales del DO",
          descripcion: "Crear un mapa conceptual que relacione los conceptos básicos del desarrollo organizacional",
          duracion: "45 min",
          dificultad: "Básico",
        },
        {
          id: "cuestionario-intro",
          tipo: "Cuestionario",
          titulo: "Evaluación de Conceptos Básicos",
          descripcion: "Cuestionario de 15 preguntas sobre los fundamentos del DO",
          duracion: "20 min",
          dificultad: "Básico",
        },
        {
          id: "foro-definiciones",
          tipo: "Foro de Discusión",
          titulo: "¿Qué es el Desarrollo Organizacional?",
          descripcion: "Debate sobre diferentes definiciones y enfoques del DO",
          duracion: "Continuo",
          dificultad: "Intermedio",
        },
        {
          id: "video-interactivo",
          tipo: "Video Interactivo",
          titulo: "Historia y Evolución del DO",
          descripcion: "Video con preguntas intercaladas sobre la evolución histórica",
          duracion: "30 min",
          dificultad: "Básico",
        },
      ],
      casosEstudio: [
        {
          titulo: "Transformación Digital en Empresa Tradicional",
          descripcion:
            "Análisis de cómo una empresa centenaria implementó procesos de DO para su transformación digital",
          preguntas: [
            "¿Cuáles fueron los principales desafíos identificados?",
            "¿Qué principios del DO se aplicaron?",
            "¿Cuáles fueron los resultados obtenidos?",
          ],
          recursos: ["Documento PDF", "Video testimonial", "Infografía"],
        },
        {
          titulo: "Startup en Crecimiento Acelerado",
          descripcion:
            "Estudio de caso sobre la implementación de estructuras organizacionales en una startup tecnológica",
          preguntas: [
            "¿Cómo se adaptaron los principios del DO a una organización joven?",
            "¿Qué desafíos únicos enfrentaron?",
            "¿Qué lecciones se pueden extraer para otras startups?",
          ],
          recursos: ["Entrevista en podcast", "Presentación", "Artículo académico"],
        },
      ],
      recursos: {
        libros: [
          "Organization Development and Change - Cummings & Worley",
          "Organizational Development - French & Bell",
          "The Theory and Practice of Change Management - Hayes",
        ],
        articulos: [
          "The Evolution of Organization Development - Academy of Management",
          "Modern Approaches to OD - Harvard Business Review",
          "Foundations of Organizational Development - MIT Sloan",
        ],
        sitiosWeb: [
          "Organization Development Network (ODN)",
          "International OD Association",
          "OD Practitioner Journal",
        ],
      },
    },
    cambio: {
      titulo: "Cambio Organizacional",
      descripcion: "Procesos, modelos y estrategias para la gestión efectiva del cambio en las organizaciones",
      objetivos: [
        "Analizar los diferentes modelos de cambio organizacional",
        "Identificar resistencias al cambio y estrategias para superarlas",
        "Desarrollar planes de gestión del cambio",
      ],
      actividades: [
        {
          id: "simulacion-cambio",
          tipo: "Simulación",
          titulo: "Gestión de Crisis Organizacional",
          descripcion: "Simulación interactiva donde debes liderar un proceso de cambio en una crisis",
          duracion: "60 min",
          dificultad: "Avanzado",
        },
        {
          id: "modelo-kotter",
          tipo: "Actividad Práctica",
          titulo: "Aplicación del Modelo de Kotter",
          descripcion: "Diseñar un plan de cambio usando los 8 pasos de Kotter",
          duracion: "90 min",
          dificultad: "Intermedio",
        },
        {
          id: "debate-resistencia",
          tipo: "Debate",
          titulo: "Resistencia al Cambio: ¿Obstáculo u Oportunidad?",
          descripcion: "Debate estructurado sobre diferentes perspectivas de la resistencia",
          duracion: "45 min",
          dificultad: "Intermedio",
        },
      ],
      casosEstudio: [
        {
          titulo: "Fusión de Dos Culturas Corporativas",
          descripcion: "Análisis del proceso de cambio durante la fusión de dos empresas con culturas muy diferentes",
          preguntas: [
            "¿Qué estrategias se utilizaron para integrar las culturas?",
            "¿Cómo se manejó la resistencia de los empleados?",
            "¿Qué factores determinaron el éxito del proceso?",
          ],
          recursos: ["Estudio longitudinal", "Entrevistas", "Datos cuantitativos"],
        },
      ],
      recursos: {
        libros: [
          "Leading Change - John Kotter",
          "Switch: How to Change Things When Change Is Hard - Heath Brothers",
          "The Heart of Change - Kotter & Cohen",
        ],
        articulos: [
          "Why Transformation Efforts Fail - Harvard Business Review",
          "The Hard Side of Change Management - McKinsey Quarterly",
          "Change Management Best Practices - Prosci Research",
        ],
        sitiosWeb: [
          "Change Management Institute",
          "Prosci Change Management",
          "Association of Change Management Professionals",
        ],
      },
    },
    // Agregar contenido similar para los otros núcleos...
  }

  const contenido = contenidoPorNucleo[nucleoId] || contenidoPorNucleo.introduccion

  const toggleActivityCompletion = (activityId: string) => {
    setCompletedActivities((prev) =>
      prev.includes(activityId) ? prev.filter((id) => id !== activityId) : [...prev, activityId],
    )
  }

  const progressPercentage = (completedActivities.length / contenido.actividades.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header del Núcleo */}
      <div className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${nucleo.color} rounded-full flex items-center justify-center`}>
                  <nucleo.icono className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{contenido.titulo}</h1>
                  <p className="text-gray-600">{contenido.descripcion}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <p className="text-sm text-gray-600">Progreso</p>
                <p className="font-semibold">{Math.round(progressPercentage)}%</p>
              </div>
              <Progress value={progressPercentage} className="w-24" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="contenido">Contenido</TabsTrigger>
            <TabsTrigger value="actividades">Actividades</TabsTrigger>
            <TabsTrigger value="casos">Casos de Estudio</TabsTrigger>
            <TabsTrigger value="evaluacion">Evaluación</TabsTrigger>
            <TabsTrigger value="metodologia">Metodología</TabsTrigger>
            <TabsTrigger value="recursos">Recursos</TabsTrigger>
          </TabsList>

          {/* Contenido Principal */}
          <TabsContent value="contenido" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Objetivos de Aprendizaje</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {contenido.objetivos.map((objetivo, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{objetivo}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contenido Teórico</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        Este núcleo temático aborda los aspectos fundamentales de {contenido.titulo.toLowerCase()},
                        proporcionando una base sólida para comprender los conceptos, teorías y aplicaciones prácticas
                        en el contexto organizacional moderno.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <Video className="w-8 h-8 text-blue-600 mb-2" />
                        <h4 className="font-semibold mb-1">Video Conferencia</h4>
                        <p className="text-sm text-gray-600">Presentación magistral del tema (45 min)</p>
                        <Button size="sm" className="mt-2">
                          <Play className="w-4 h-4 mr-1" />
                          Reproducir
                        </Button>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <FileText className="w-8 h-8 text-green-600 mb-2" />
                        <h4 className="font-semibold mb-1">Material de Lectura</h4>
                        <p className="text-sm text-gray-600">Documentos y artículos complementarios</p>
                        <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                          <Download className="w-4 h-4 mr-1" />
                          Descargar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Resumen Rápido</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Duración estimada</span>
                      <Badge variant="secondary">4-6 horas</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Nivel de dificultad</span>
                      <div className="flex space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 text-gray-300" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Actividades</span>
                      <Badge>{contenido.actividades.length}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Casos de estudio</span>
                      <Badge>{contenido.casosEstudio.length}</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Share2 className="w-4 h-4 mr-2" />
                      Compartir Núcleo
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar Material
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Hacer Pregunta
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Actividades Interactivas */}
          <TabsContent value="actividades" className="space-y-6">
            <div className="grid gap-6">
              {contenido.actividades.map((actividad, index) => {
                const isCompleted = completedActivities.includes(actividad.id)
                const IconComponent =
                  actividad.tipo === "Mapa Conceptual"
                    ? Brain
                    : actividad.tipo === "Cuestionario"
                      ? MessageSquare
                      : actividad.tipo === "Simulación"
                        ? Play
                        : actividad.tipo === "Foro de Discusión"
                          ? Users
                          : actividad.tipo === "Video Interactivo"
                            ? Video
                            : FileText

                return (
                  <Card
                    key={actividad.id}
                    className={`transition-all ${isCompleted ? "bg-green-50 border-green-200" : ""}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              isCompleted ? "bg-green-500" : "bg-blue-500"
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle className="w-6 h-6 text-white" />
                            ) : (
                              <IconComponent className="w-6 h-6 text-white" />
                            )}
                          </div>
                          <div>
                            <CardTitle className="flex items-center space-x-2">
                              <span>{actividad.titulo}</span>
                              <Badge variant="outline">{actividad.tipo}</Badge>
                            </CardTitle>
                            <CardDescription className="mt-1">{actividad.descripcion}</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {actividad.duracion}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {actividad.dificultad}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => toggleActivityCompletion(actividad.id)}
                          className={isCompleted ? "bg-green-600 hover:bg-green-700" : ""}
                        >
                          {isCompleted ? "Completado" : "Iniciar Actividad"}
                        </Button>
                        <Button variant="outline">Ver Detalles</Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* Casos de Estudio */}
          <TabsContent value="casos" className="space-y-6">
            {contenido.casosEstudio.map((caso, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{caso.titulo}</CardTitle>
                  <CardDescription>{caso.descripcion}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Preguntas para Análisis:</h4>
                    <ul className="space-y-2">
                      {caso.preguntas.map((pregunta, pIndex) => (
                        <li key={pIndex} className="flex items-start space-x-2">
                          <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                            {pIndex + 1}
                          </span>
                          <span>{pregunta}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Recursos Disponibles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {caso.recursos.map((recurso, rIndex) => (
                        <Badge key={rIndex} variant="outline">
                          {recurso}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2 pt-4">
                    <Button>Analizar Caso</Button>
                    <Button variant="outline">Descargar Recursos</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Evaluación */}
          <TabsContent value="evaluacion" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Autoevaluación</CardTitle>
                  <CardDescription>Evalúa tu comprensión del tema</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Quiz de Conceptos Básicos</span>
                      <Badge variant="secondary">10 preguntas</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Evaluación Práctica</span>
                      <Badge variant="secondary">5 ejercicios</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Reflexión Personal</span>
                      <Badge variant="secondary">Ensayo corto</Badge>
                    </div>
                  </div>
                  <Button className="w-full">Iniciar Evaluación</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Retroalimentación</CardTitle>
                  <CardDescription>Tu progreso en este núcleo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Actividades Completadas</span>
                        <span className="text-sm">
                          {completedActivities.length}/{contenido.actividades.length}
                        </span>
                      </div>
                      <Progress value={progressPercentage} />
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-1">Próximo Paso</h4>
                      <p className="text-sm text-blue-700">
                        Completa las actividades pendientes para desbloquear la evaluación final
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Metodología */}
          <TabsContent value="metodologia" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Estrategias Metodológicas</CardTitle>
                  <CardDescription>Enfoques pedagógicos utilizados en este núcleo</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="estudios-caso">
                      <AccordionTrigger>Estudios de Caso</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-gray-600 mb-3">
                          Análisis detallado de situaciones reales organizacionales para aplicar conceptos teóricos.
                        </p>
                        <ul className="text-sm space-y-1">
                          <li>• Casos reales de empresas reconocidas</li>
                          <li>• Análisis grupal e individual</li>
                          <li>• Aplicación de marcos teóricos</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="aprendizaje-colaborativo">
                      <AccordionTrigger>Aprendizaje Colaborativo</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-gray-600 mb-3">
                          Construcción colectiva del conocimiento a través del trabajo en equipo.
                        </p>
                        <ul className="text-sm space-y-1">
                          <li>• Foros de discusión temáticos</li>
                          <li>• Proyectos grupales</li>
                          <li>• Peer review y retroalimentación</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="abp">
                      <AccordionTrigger>Aprendizaje Basado en Problemas</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-gray-600 mb-3">
                          Resolución de desafíos organizacionales complejos y realistas.
                        </p>
                        <ul className="text-sm space-y-1">
                          <li>• Problemas auténticos del DO</li>
                          <li>• Investigación autodirigida</li>
                          <li>• Soluciones creativas e innovadoras</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estrategias de Evaluación</CardTitle>
                  <CardDescription>Métodos de evaluación aplicados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <PresentationChart className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold">Presentaciones</h4>
                      </div>
                      <p className="text-sm text-gray-600">Exposición oral de análisis y propuestas (30%)</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <FileText className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold">Proyectos Escritos</h4>
                      </div>
                      <p className="text-sm text-gray-600">Informes y ensayos analíticos (40%)</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        <h4 className="font-semibold">Participación</h4>
                      </div>
                      <p className="text-sm text-gray-600">Debates y actividades colaborativas (20%)</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Video className="w-5 h-5 text-red-600" />
                        <h4 className="font-semibold">Recursos Multimedia</h4>
                      </div>
                      <p className="text-sm text-gray-600">Videos y presentaciones creativas (10%)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Recursos */}
          <TabsContent value="recursos" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Libros Recomendados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {contenido.recursos.libros.map((libro, index) => (
                      <li key={index} className="p-3 border rounded-lg">
                        <p className="font-medium text-sm">{libro}</p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="outline">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Ver
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Artículos Académicos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {contenido.recursos.articulos.map((articulo, index) => (
                      <li key={index} className="p-3 border rounded-lg">
                        <p className="font-medium text-sm">{articulo}</p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="outline">
                            <Download className="w-3 h-3 mr-1" />
                            PDF
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Sitios Web Especializados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {contenido.recursos.sitiosWeb.map((sitio, index) => (
                      <li key={index} className="p-3 border rounded-lg">
                        <p className="font-medium text-sm">{sitio}</p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="outline">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Visitar
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Recursos Multimedia Adicionales */}
            <Card>
              <CardHeader>
                <CardTitle>Recursos Multimedia</CardTitle>
                <CardDescription>Contenido audiovisual complementario</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <Video className="w-8 h-8 mx-auto mb-2 text-red-600" />
                    <h4 className="font-semibold text-sm">Videos Educativos</h4>
                    <p className="text-xs text-gray-600 mt-1">12 videos disponibles</p>
                    <Button size="sm" className="mt-2">
                      Ver Lista
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <Headphones className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <h4 className="font-semibold text-sm">Podcasts</h4>
                    <p className="text-xs text-gray-600 mt-1">8 episodios</p>
                    <Button size="sm" className="mt-2">
                      Escuchar
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <PresentationChart className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold text-sm">Presentaciones</h4>
                    <p className="text-xs text-gray-600 mt-1">15 slides disponibles</p>
                    <Button size="sm" className="mt-2">
                      Descargar
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <FileText className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <h4 className="font-semibold text-sm">Infografías</h4>
                    <p className="text-xs text-gray-600 mt-1">6 recursos visuales</p>
                    <Button size="sm" className="mt-2">
                      Ver
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
