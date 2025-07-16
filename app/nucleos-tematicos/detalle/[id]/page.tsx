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
  const nucleo = nucleosTematicos.find((n) => n.id === nucleoId);

  if (!nucleo)
    return <div className="text-center py-10">Núcleo no encontrado</div>;

  const IconComponent = nucleo.icono;

  const extractYouTubeId = (url: string): string | null => {
    const youtubeRegex =
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(youtubeRegex);
    return match ? match[1] : null;
  };

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
              {nucleo.actividades?.map((actividad, index) => {
                const contenido = actividad.contenido;
                const youtubeId =
                  typeof contenido === "string"
                    ? extractYouTubeId(contenido)
                    : null;

                return (
                  <div
                    key={index}
                    className="border rounded p-4 bg-white shadow mb-4"
                  >
                    <h4 className="text-lg font-bold mb-2">{actividad.tipo}</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {actividad.descripcion}
                    </p>

                    {typeof contenido === "string" &&
                      (contenido.endsWith(".png") ||
                        contenido.endsWith(".jpg")) && (
                        <Image
                          src={contenido}
                          alt={actividad.tipo}
                          width={960}
                          height={720}
                        />
                      )}

                    {typeof contenido === "string" &&
                      contenido.endsWith(".mp4") && (
                        <video controls className="w-full">
                          <source src={contenido} type="video/mp4" />
                        </video>
                      )}

                    {typeof contenido === "string" && youtubeId && (
                      <div className="w-full aspect-[16/9] h-[600px]">
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}`}
                          title="YouTube video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    )}

                    {Array.isArray(contenido) && (
                      <ul className="list-disc list-inside text-sm mt-2">
                        {contenido.map((q, i) => (
                          <li key={i}>{q}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}