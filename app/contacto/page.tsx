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
            </div>

            {/* Equipo */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8">Equipo de desarrollo</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">CR</span>
                    </div>
                    <h4 className="font-semibold mb-1">Carlos Jimenez</h4>
                    <p className="text-sm text-gray-600 mb-2">Desarrollador</p>
                    <p className="text-xs text-gray-500">carlosmjimenezg@gmail.com</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">AR</span>
                    </div>
                    <h4 className="font-semibold mb-1">Antonia Romero</h4>
                    <p className="text-sm text-gray-600 mb-2">Desarrolladora</p>
                    <p className="text-xs text-gray-500">antoniachan2002@gmail.com</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">DZ</span>
                    </div>
                    <h4 className="font-semibold mb-1">Deivith Zanella</h4>
                    <p className="text-sm text-gray-600 mb-2">Desarrollador</p>
                    <p className="text-xs text-gray-500">correoserio29112002@gmail.com</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
