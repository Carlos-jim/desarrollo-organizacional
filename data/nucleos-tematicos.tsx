import {
  BookOpen,
  Users,
  TrendingUp,
  History,
  Target,
  Lightbulb,
  Search,
  UserCheck,
} from "lucide-react"

export const nucleosTematicos = [
    { 
      id: "introduccion",
      titulo: "Introducción al Desarrollo Organizacional",
      icono: BookOpen,
      descripcion: "Fundamentos y conceptos básicos del desarrollo organizacional",
      color: "bg-blue-500",
      competencias: [
          "Distinguir el contexto del desarrollo organizacional basándose en fundamentos empresariales.",
      ],
      contenido_programatico: [
        "Definición y concepto.",
        "Perspectivas del desarrollo organizacional: premisas y valores.",
        "Objetivos básicos.",
        "Principios del desarrollo organizacional.",
        "Fuentes que inciden en el desarrollo organizacional.",
        "Características e importancia del desarrollo organizacional.",
        "Clima y cultura organizacional."
      ],
      actividades: [
      {
        tipo: "Mapa Conceptual",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/mapa-intro.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "¿Qué es el desarrollo organizacional?",
          "¿Cuál es su principal objetivo?",
        ],
      },
      {
        tipo: "Simulación",
        descripcion: "Caso interactivo introductorio",
        contenido: "/videos/simulacion-intro.mp4",
      },
    ],
    },
    {
      id: "cambio",
      titulo: "Cambio Organizacional",
      icono: TrendingUp,
      descripcion: "Procesos y gestión del cambio en las organizaciones",
      color: "bg-blue-500",
      actividades: [
      {
        tipo: "Mapa Conceptual",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/mapa-intro.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "¿Qué es el desarrollo organizacional?",
          "¿Cuál es su principal objetivo?",
        ],
      },
      {
        tipo: "Simulacion",
        descripcion: "Caso interactivo introductorio",
        contenido: "/videos/simulacion-intro.mp4",
      },
    ],
    },
    {
      id: "fases",
      titulo: "Fases del Desarrollo Organizacional",
      icono: Target,
      descripcion: "Etapas y metodologías del proceso de desarrollo",
      color: "bg-blue-500",
      actividades: [
      {
        tipo: "Mapa Conceptual",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/mapa-intro.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "¿Qué es el desarrollo organizacional?",
          "¿Cuál es su principal objetivo?",
        ],
      },
      {
        tipo: "Simulación",
        descripcion: "Caso interactivo introductorio",
        contenido: "/videos/simulacion-intro.mp4",
      },
    ],
    },
    {
      id: "historia",
      titulo: "Historia del Desarrollo Organizacional",
      icono: History,
      descripcion: "Evolución histórica y pioneros de la disciplina",
      color: "bg-blue-500",
      actividades: [
      {
        tipo: "Mapa Conceptual",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/mapa-intro.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "¿Qué es el desarrollo organizacional?",
          "¿Cuál es su principal objetivo?",
        ],
      },
      {
        tipo: "Simulación",
        descripcion: "Caso interactivo introductorio",
        contenido: "/videos/simulacion-intro.mp4",
      },
    ],
    },
    {
      id: "enfoques",
      titulo: "Enfoques Clásicos",
      icono: Lightbulb,
      descripcion: "Teorías y enfoques tradicionales del DO",
      color: "bg-blue-500",
      actividades: [
      {
        tipo: "Mapa Conceptual",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/mapa-intro.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "¿Qué es el desarrollo organizacional?",
          "¿Cuál es su principal objetivo?",
        ],
      },
      {
        tipo: "Simulación",
        descripcion: "Caso interactivo introductorio",
        contenido: "/videos/simulacion-intro.mp4",
      },
    ],
    },
    {
      id: "estrategias",
      titulo: "Estrategias del Desarrollo Organizacional",
      icono: Users,
      descripcion: "Técnicas y herramientas de intervención organizacional",
      color: "bg-blue-500",
      actividades: [
      {
        tipo: "Mapa Conceptual",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/mapa-intro.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "¿Qué es el desarrollo organizacional?",
          "¿Cuál es su principal objetivo?",
        ],
      },
      {
        tipo: "Simulación",
        descripcion: "Caso interactivo introductorio",
        contenido: "/videos/simulacion-intro.mp4",
      },
    ],
    },
    {
      id: "diagnostico",
      titulo: "Diagnóstico e Investigación",
      icono: Search,
      descripcion: "Métodos de diagnóstico y medición de la salud organizacional",
      color: "bg-blue-500",
      actividades: [
      {
        tipo: "Mapa Conceptual",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/mapa-intro.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "¿Qué es el desarrollo organizacional?",
          "¿Cuál es su principal objetivo?",
        ],
      },
      {
        tipo: "Simulación",
        descripcion: "Caso interactivo introductorio",
        contenido: "/videos/simulacion-intro.mp4",
      },
    ],
    },
    {
      id: "consultor",
      titulo: "Funciones del Consultor",
      icono: UserCheck,
      descripcion: "Roles y competencias del consultor en DO",
      color: "bg-blue-500",
      actividades: [
      {
        tipo: "Mapa Conceptual",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/mapa-intro.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "¿Qué es el desarrollo organizacional?",
          "¿Cuál es su principal objetivo?",
        ],
      },
      {
        tipo: "Simulación",
        descripcion: "Caso interactivo introductorio",
        contenido: "/videos/simulacion-intro.mp4",
      },
    ],
    },
  ]