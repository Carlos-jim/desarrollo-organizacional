"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ContactoPage() {
  return (
    <motion.section
      className="py-16 px-4 "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contacto</h2>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Equipo de desarrollo
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                nombre: "Carlos Jimenez",
                iniciales: "CR",
                rol: "Desarrollador",
                correo: "carlosmjimenezg@gmail.com",
                color: "from-blue-500 to-purple-500",
              },
              {
                nombre: "Antonia Romero",
                iniciales: "AR",
                rol: "Desarrolladora",
                correo: "antoniachan2002@gmail.com",
                color: "from-green-500 to-teal-500",
              },
              {
                nombre: "Deivith Zanella",
                iniciales: "DZ",
                rol: "Desarrollador",
                correo: "correoserio29112002@gmail.com",
                color: "from-orange-500 to-red-500",
              },
            ].map((p, i) => (
              <motion.div
                key={p.nombre}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${p.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-xl">
                        {p.iniciales}
                      </span>
                    </div>
                    <h4 className="font-semibold mb-1">{p.nombre}</h4>
                    <p className="text-sm text-gray-600 mb-2">{p.rol}</p>
                    <p className="text-xs text-gray-500">{p.correo}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
