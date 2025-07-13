"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardHeader, Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactoPage() {
  return (
    <>

       <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Contacto</h2>
              <p className="text-xl text-gray-600">¿Tienes preguntas o necesitas apoyo? Estamos aquí para ayudarte</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                  <CardDescription>Ponte en contacto con el equipo docente</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-600">desarrollo.organizacional@universidad.edu</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-medium">Oficina</p>
                      <p className="text-sm text-gray-600">Edificio Académico, Piso 3, Oficina 301</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Horarios de Atención</CardTitle>
                  <CardDescription>Disponibilidad para consultas y asesorías</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Lunes - Viernes</span>
                      <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sábados</span>
                      <span className="text-gray-600">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Domingos</span>
                      <span className="text-gray-600">Cerrado</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-3">
                      Para consultas urgentes fuera del horario de atención, utiliza el formulario de contacto en línea.
                    </p>
                    <Button className="w-full">Agendar Cita</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Equipo Docente */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8">Equipo Docente</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">DR</span>
                    </div>
                    <h4 className="font-semibold mb-1">Dr. María González</h4>
                    <p className="text-sm text-gray-600 mb-2">Profesora Principal</p>
                    <p className="text-xs text-gray-500">Especialista en Cambio Organizacional</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">MG</span>
                    </div>
                    <h4 className="font-semibold mb-1">Mg. Carlos Rodríguez</h4>
                    <p className="text-sm text-gray-600 mb-2">Profesor Asociado</p>
                    <p className="text-xs text-gray-500">Consultor Organizacional</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">LC</span>
                    </div>
                    <h4 className="font-semibold mb-1">Lic. Ana Martínez</h4>
                    <p className="text-sm text-gray-600 mb-2">Asistente de Cátedra</p>
                    <p className="text-xs text-gray-500">Especialista en Recursos Humanos</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
