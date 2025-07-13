"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { nucleosTemáticos } from "@/data/nucleos-tematicos"

interface NucleoDetalleProps {
  nucleoId: string
  onBack: () => void
  nucleosData: {
    id: string
    titulo: string
    descripcion: string
    icono: React.ElementType
    color: string
  }[]
}

export default function NucleoDetalle({
  nucleoId,
  onBack,
  nucleosData,
}: NucleoDetalleProps) {
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

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Actividades Interactivas</h3>
          <div className="">
            {nucleosTemáticos.map((actividad, index) => {
              const IconComponent = actividad.icono
              return (
                <div key={index} className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center mb-4">
                    <IconComponent className="w-10 h-10 mx-auto text-blue-600" />
                    <h4 className="font-semibold mt-2">{actividad.tipo}</h4>
                    <p className="text-sm text-gray-600">{actividad.descripcion}</p>
                  </div>
                  <div className="text-sm">{actividad.contenido}</div>
                </div>
              )
            })}
          </div>
        </div>
        </Card>
      </div>
    </section>
  )
}
