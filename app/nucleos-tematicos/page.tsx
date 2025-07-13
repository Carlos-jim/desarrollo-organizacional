"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { nucleosTemáticos } from "@/data/nucleos-tematicos";

interface NucleosTematicosProps {
  onNavigate: (route: string) => void;
  onSelectNucleo: (id: string | number) => void;
}

export default function NucleosTematicos({
  onNavigate,
  onSelectNucleo,
}: NucleosTematicosProps) {

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Núcleos Temáticos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora cada área fundamental del desarrollo organizacional con
            contenido interactivo y casos de estudio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {nucleosTemáticos.map((nucleo) => {
            const IconComponent = nucleo.icono;
             console.log(nucleo.titulo, IconComponent); 
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
                      <span className="text-sm text-gray-600">
                        Casos de Estudio
                      </span>
                      <Badge variant="secondary">2</Badge>
                    </div>
                    <Link href={`/nucleos-tematicos/detalle/${nucleo.id}`}>
                      <Button
                        className="w-full mt-4 bg-transparent"
                        variant="outline"
                      >
                        Explorar Núcleo
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
