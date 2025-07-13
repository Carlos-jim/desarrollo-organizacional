"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lightbulb, Award } from "lucide-react";

export default function Recursos() {
  return (
    <>
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Recursos Adicionales</h2>
              <p className="text-xl text-gray-600">Amplía tu conocimiento con recursos cuidadosamente seleccionados</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Estrategias Metodológicas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 w-5 h-5" />
                    Estrategias Metodológicas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold">Estudios de Caso</h4>
                      <p className="text-sm text-gray-600">Análisis de situaciones reales organizacionales</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold">Aprendizaje Colaborativo</h4>
                      <p className="text-sm text-gray-600">Trabajo en equipo y construcción colectiva</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold">Aprendizaje Basado en Problemas</h4>
                      <p className="text-sm text-gray-600">Resolución de desafíos organizacionales</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold">Recursos Multimedia</h4>
                      <p className="text-sm text-gray-600">Videos, podcasts y contenido interactivo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Estrategias de Evaluación */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 w-5 h-5" />
                    Estrategias de Evaluación
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold">Proyectos Aplicados</h4>
                      <p className="text-sm text-gray-600">Desarrollo de soluciones organizacionales</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold">Presentaciones</h4>
                      <p className="text-sm text-gray-600">Exposición de análisis y propuestas</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold">Debates y Discusiones</h4>
                      <p className="text-sm text-gray-600">Argumentación y análisis crítico</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold">Portafolio Digital</h4>
                      <p className="text-sm text-gray-600">Compilación de trabajos y reflexiones</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Referencias y Enlaces */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Referencias Recomendadas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-semibold">Libros Fundamentales</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• "Organization Development" - French & Bell</li>
                      <li>• "Organizational Change" - Burke</li>
                      <li>• "The Practice of Management" - Drucker</li>
                    </ul>
                  </div>
                  <div className="p-3 border-l-4 border-green-500 bg-green-50">
                    <h4 className="font-semibold">Artículos Académicos</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Harvard Business Review</li>
                      <li>• MIT Sloan Management Review</li>
                      <li>• Academy of Management</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Organizaciones y Profesionales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                    <h4 className="font-semibold">Organizaciones Profesionales</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Organization Development Network (ODN)</li>
                      <li>• International Association of Facilitators</li>
                      <li>• Society for Human Resource Management</li>
                    </ul>
                  </div>
                  <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                    <h4 className="font-semibold">Sitios Web Especializados</h4>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• OD Practitioner</li>
                      <li>• Change Management Institute</li>
                      <li>• Organizational Dynamics</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    </>
  );
}
