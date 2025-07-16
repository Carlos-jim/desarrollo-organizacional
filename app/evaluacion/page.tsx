"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { nucleosTematicos } from "@/data/nucleos-tematicos";
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

export default function EvaluacionPage() {
  const [activeSection, setActiveSection] = useState("inicio");
  return (
    <>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Centro de Evaluación</h2>
            <p className="text-xl text-gray-600">
              Evalúa tu progreso y recibe retroalimentación personalizada
            </p>
          </div>

          <Tabs defaultValue="autoevaluacion" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="autoevaluacion">Autoevaluación</TabsTrigger>
              <TabsTrigger value="proyectos">Proyectos</TabsTrigger>
              <TabsTrigger value="retroalimentacion">
                Retroalimentación
              </TabsTrigger>
            </TabsList>

            <TabsContent value="autoevaluacion" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 w-5 h-5" />
                    Cuestionarios por Núcleo Temático
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {nucleosTematicos.slice(0, 4).map((nucleo, index) => (
                    <div
                      key={nucleo.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 ${nucleo.color} rounded-full flex items-center justify-center mr-3`}
                        >
                          <nucleo.icono className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium">{nucleo.titulo}</span>
                      </div>
                      <Link href={`/evaluacion/${nucleo.url}`}>
                        <Button size="sm">Iniciar Evaluación</Button>
                      </Link>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="proyectos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Proyectos de Aplicación</CardTitle>
                  <CardDescription>
                    Desarrolla proyectos prácticos aplicando los conceptos
                    aprendidos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Diagnóstico Organizacional
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Realiza un diagnóstico completo de una organización real
                        o ficticia
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge>En Progreso</Badge>
                        <Button size="sm" variant="outline">
                          Continuar
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Plan de Intervención
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Diseña un plan de intervención para el cambio
                        organizacional
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary">Pendiente</Badge>
                        <Button size="sm" variant="outline">
                          Iniciar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="retroalimentacion" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Retroalimentación y Progreso</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">
                          Progreso General
                        </span>
                        <span className="text-sm text-gray-600">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">
                          Fortalezas
                        </h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Excelente comprensión de conceptos básicos</li>
                          <li>• Participación activa en discusiones</li>
                          <li>• Aplicación práctica efectiva</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          Áreas de Mejora
                        </h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Profundizar en técnicas de diagnóstico</li>
                          <li>• Mejorar análisis de casos complejos</li>
                          <li>• Desarrollar habilidades de consultoría</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
