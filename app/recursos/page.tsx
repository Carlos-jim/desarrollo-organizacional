"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lightbulb, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Recursos() {
  return (
    <motion.section
      className="py-16 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Recursos Adicionales</h2>
          <p className="text-xl text-gray-600">
            Amplía tu conocimiento con recursos cuidadosamente seleccionados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {[{
            icon: <Lightbulb className="mr-2 w-5 h-5" />,
            title: "Estrategias Metodológicas",
            items: [
              ["Estudios de Caso", "Análisis de situaciones reales organizacionales"],
              ["Aprendizaje Colaborativo", "Trabajo en equipo y construcción colectiva"],
              ["Aprendizaje Basado en Problemas", "Resolución de desafíos organizacionales"],
              ["Recursos Multimedia", "Videos, podcasts y contenido interactivo"]
            ]
          }, {
            icon: <Award className="mr-2 w-5 h-5" />,
            title: "Estrategias de Evaluación",
            items: [
              ["Proyectos Aplicados", "Desarrollo de soluciones organizacionales"],
              ["Presentaciones", "Exposición de análisis y propuestas"],
              ["Debates y Discusiones", "Argumentación y análisis crítico"],
              ["Portafolio Digital", "Compilación de trabajos y reflexiones"]
            ]
          }].map(({ icon, title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">{icon}{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map(([h, p], idx) => (
                      <motion.div
                        key={h}
                        className="p-3 border rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <h4 className="font-semibold">{h}</h4>
                        <p className="text-sm text-gray-600">{p}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Referencias Recomendadas",
              blocks: [
                {
                  border: "border-blue-500 bg-blue-50",
                  heading: "Libros Fundamentales",
                  list: [
                    "“Desarrollo organizacional principio y aplicaciones” - Guizar Montufar, Rafael.",
                    "“La persona en el centro del desarrollo organizacional” - Antonio Aguelo y Teresa Coma",
                    "“Desarrollo organizacional: cultura y cambio” - Jose Ucero"
                  ]
                },
                {
                  border: "border-green-500 bg-green-50",
                  heading: "Artículos Académicos",
                  list: [
                    "Llamoga Cuenca, S & Morales Salazar, P. (2024). Desarrollo organizacional: una revisión sistemática para Latinoamérica. UCV-SCIENTIA",
                    "Henry Molina (2000). El desarrollo organizacional como facilitador del cambio",
                    "Alina Segrado (2015). Desarrollo organizacional. Una mirada desde el ambito academico",
                  ]
                }
              ]
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {card.blocks.map((block, j) => (
                    <motion.div
                      key={block.heading}
                      className={`p-3 border-l-4 ${block.border}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: j * 0.1 }}
                    >
                      <h4 className="font-semibold">{block.heading}</h4>
                      <ul className="text-sm mt-2 space-y-1">
                        {block.list.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
