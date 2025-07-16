"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { nucleosTematicos } from "@/data/nucleos-tematicos";
import Image from "next/image";
import Link from "next/link";

export default function NucleoDetalle() {
  const params = useParams();
  const nucleoId = params?.id as string;
  //console.log("Nucleo ID:", nucleoId);

  const nucleo = nucleosTematicos.find((n) => n.id === nucleoId);

  if (!nucleo)
    return <div className="text-center py-10">Núcleo no encontrado</div>;

  const IconComponent = nucleo.icono;

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <Link href="/nucleos-tematicos">
          <Button variant="ghost" className="mb-4">
            <ChevronRight className="mr-2 w-4 h-4 rotate-180" />
            Volver a Núcleos Temáticos
          </Button>
        </Link>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div
              className={`w-20 h-20 ${nucleo.color} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold">
              {nucleo.titulo}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {nucleo.descripcion}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Competencias</h3>
              <ul className="list-disc list-inside">
                {nucleo.competencias?.map((competencia, index) => (
                  <li key={index}>{competencia}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold">Contenido Programático</h3>
              <ul className="list-disc list-inside">
                {nucleo.contenido_programatico?.map((contenido, index) => (
                  <li key={index}>{contenido}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold">
                Actividades Interactivas
              </h3>
              {nucleo.actividades?.map((actividad, index) => (
                <div
                  key={index}
                  className="border rounded p-4 bg-white shadow mb-4"
                >
                  <h4 className="text-lg font-bold mb-2">{actividad.tipo}</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {actividad.descripcion}
                  </p>
                  {typeof actividad.contenido === "string" &&
                    (actividad.contenido.endsWith(".png") ||
                      actividad.contenido.endsWith(".jpg")) && (
                      <Image
                        src={actividad.contenido}
                        alt={actividad.tipo}
                        width={960}
                        height={720}
                      />
                    )}

                  {typeof actividad.contenido === "string" &&
                    actividad.contenido.endsWith(".mp4") && (
                      <video controls className="w-full">
                        <source src={actividad.contenido} type="video/mp4" />
                      </video>
                    )}
                  {Array.isArray(actividad.contenido) && (
                    <ul className="list-disc list-inside text-sm mt-2">
                      {actividad.contenido.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
