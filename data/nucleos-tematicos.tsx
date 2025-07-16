import {
  BookOpen,
  Users,
  TrendingUp,
  History,
  Target,
  Lightbulb,
  Search,
  UserCheck,
} from "lucide-react";

export const nucleosTematicos = [
  {
    id: "introduccion",
    titulo: "Introducción al Desarrollo Organizacional",
    icono: BookOpen,
    descripcion:
      "Fundamentos y conceptos básicos del desarrollo organizacional",
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
      "Clima y cultura organizacional.",
    ],
    actividades: [
      {
        tipo: "Diagrama o imagen referencial",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/Introduccion-al-desarrollo-organizacional.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "¿Qué es el desarrollo organizacional (DO) y cuál es su principal objetivo?",
          "¿Por qué los valores como la colaboración y el respeto son esenciales en el DO?",
          "¿Cómo contribuye el DO a la mejora de la eficiencia en una empresa?",
          "¿Por qué es importante que el DO sea un proceso continuo y no un evento aislado?",
          "¿De qué manera la tecnología impacta en las estrategias de DO?",
          "Justifique la importancia del DO en un entorno empresarial competitivo.",
          "¿Cómo puede el DO mejorar el clima laboral en una empresa?",
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
    competencias: [
      "Relacionar el cambio con el desarrollo organizacional a través de su manejo en las organizaciones.",
    ],
    contenido_programatico: [
      "Naturaleza de los cambios. y concepto.",
      "Cambios en el sistema orgánico.",
      "Cambios en el campo de fuerza.",
      "El proceso de cambio en las organizaciones.",
      "Fases del cambio.",
      "Ciclos del cambio en los sistemas abiertos.",
      "Cambios y comportamiento humano.",
      "Resistencia al cambio.",
      "Requisitos para el cambio planeado eficazmente.",
    ],
    actividades: [
      {
        tipo: "Diagrama o imagen referencial",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/gestion-del-cambio-en-las-organizaciones.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "¿Qué se entiende por cambio organizacional y cómo se relaciona con el desarrollo organizacional (DO)?",
          "Según el modelo de campo de fuerzas de Lewin, ¿qué son las fuerzas impulsoras y restrictivas? Dé un ejemplo de cada una",
          "numere las tres fases del cambio propuestas por Kurt Lewin y explique cada una",
          "¿Cómo influyen los sistemas abiertos en los ciclos de cambio de una organización?",
          "¿De qué manera el cambio organizacional afecta el comportamiento humano en el trabajo?",
          "Explique la importancia de la comunicación y la participación en el cambio organizacional.",
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
    competencias: [
      "Relacionar el cambio con el desarrollo organizacional a través de su manejo en las organizaciones.",
    ],
    contenido_programatico: [
      "Naturaleza de los cambios. y concepto.",
      "Cambios en el sistema orgánico.",
      "Cambios en el campo de fuerza.",
      "El proceso de cambio en las organizaciones.",
      "Fases del cambio.",
      "Ciclos del cambio en los sistemas abiertos.",
      "Cambios y comportamiento humano.",
      "Resistencia al cambio.",
      "Requisitos para el cambio planeado eficazmente.",
    ],
    actividades: [
      {
        tipo: "Diagrama o imagen referencial",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/fases-del-desarrollo-organizacional.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "¿Cómo se relaciona este cambio con el desarrollo organizacional? Explique desde la perspectiva de la naturaleza del cambio",
          "Identifique tres fuerzas impulsoras y tres restrictivas usando el modelo de campo de fuerzas de Lewin.",
          "¿Por qué el enfoque de sistemas abiertos es clave aquí? Relaciónelo con los ciclos de cambio.",
          "¿Cómo el manejo estratégico del cambio impulsa el desarrollo organizacional?",
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
    competencias: [
      "Describir el término de desarrollo organizacional y el papel del ejecutivo de talento humano a través de su historia.",
    ],
    contenido_programatico: [
      "Breve historia de la evolución del desarrollo organizacional.  de los cambios. y concepto.",
      "Entrenamiento en laboratorios de sensibilización.",
      "Los grupos “T”",
      "Tendencias del desarrollo organizacional.",
      "El papel del ejecutivo de talento humano.",
    ],
    actividades: [
      {
        tipo: "Diagrama o imagen referencial",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/historia-del-DO.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "Defina el concepto de Desarrollo Organizacional (DO) y mencione dos hitos históricos que marcaron su evolución.",
          "Explique el propósito de los laboratorios de sensibilización en el DO y su impacto en el comportamiento grupal.",
          "Compare el rol del ejecutivo de Talento Humano en el DO en los años 1960 vs. hoy. ¿Qué aspectos han cambiado?",
          "¿Por qué el enfoque sistémico sigue siendo relevante en el DO actual?",
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
    competencias: [
      "Describir los distintos enfoques clásicos del desarrollo organizacional considerando sus beneficios y contras en la actualidad.",
    ],
    contenido_programatico: [
      "El desarrollo organizacional desde el punto de vista sistémico.",
      "El desarrollo organizacional desde el punto de vista clásico. ",
      "Características de los enfoques del desarrollo organizacional.",
      "Ventajas y desventajas.",
    ],
    actividades: [
      {
        tipo: "Diagrama o imagen referencial",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/enfoques-desarrollo-organizacional.png",
      },
      {
        tipo: "Cuestionario",

        descripcion: "Preguntas básicas sobre el desarrollo organizacional",
        contenido: [
          "Compare el enfoque sistémico y el clásico del DO, destacando: Objetivo principal. Unidad de análisis (ej: individuo vs. sistema).",
          "Caso: Una PYME familiar quiere modernizarse pero conserva prácticas jerárquicas. ¿Qué limitaciones tendría al aplicar solo enfoques clásicos? Proponga una estrategia híbrida (clásico + sistémico) para su transformación.",
          "Justifique: ¿Por qué algunas empresas aún aplican principios clásicos en entornos modernos?",
          "Mencione un modelo o teoría representativa del DO clásico (ej: Lewin, Taylor) y explíquela brevemente.",
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
    competencias: [
      "Identificar las diferentes estrategias existentes para el trabajo en equipo en las organizaciones.",
    ],
    contenido_programatico: [
      "Estrategias dirigidas a los individuos.",
      "Estrategias dirigidas a grupos ( importancia, formación, creación y facilitación)",
      "Estrategias dirigidas a estructuras y al sistema total.",
    ],
    actividades: [
      {
        tipo: "Diagrama o imagen referencial",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/estrategias-del-DO.png",
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
    competencias: [
      "Análisis del desarrollo organizacional a través del diagnóstico, investigación e intervención que permitan medir la salud a la organización",
    ],
    contenido_programatico: [
      "Diagnóstico del desarrollo organizacional: Especificidad del tema. Características del tema.",
      "Naturaleza del tema.",
      "Justificación del tema.",
      "Desarrollo.",
      "Estudio de viabilidad.",
    ],
    actividades: [
      {
        tipo: "Diagrama o imagen referencial",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/diagnostico-organizacional.png",
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
    competencias: [
      "Relacionar el cambio con el desarrollo organizacional a través de su manejo en las organizaciones.",
    ],
    contenido_programatico: [
      "Naturaleza de los cambios. y concepto.",
      "Cambios en el sistema orgánico.",
      "Cambios en el campo de fuerza.",
      "El proceso de cambio en las organizaciones.",
      "Fases del cambio.",
      "Ciclos del cambio en los sistemas abiertos.",
      "Cambios y comportamiento humano.",
      "Resistencia al cambio.",
      "Requisitos para el cambio planeado eficazmente.",
    ],
    actividades: [
      {
        tipo: "Diagrama o imagen referencial",
        descripcion: "Mapa del concepto de desarrollo organizacional",
        contenido: "/images/Modelo-de-consultoria.png",
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
];
