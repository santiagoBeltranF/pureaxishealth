import React from 'react';

export default function ProfessionalIntegrity() {
  return (
    /* No usamos min-h-screen, así solo ocupa el espacio necesario (mitad de pantalla aprox) */
    <section className="relative z-20 w-full flex flex-col items-center">
      
      {/* FONDO DIVIDIDO (Azul oscuro arriba, Blanco abajo) */}
      <div className="absolute top-0 left-0 w-full h-[65%] bg-[#213340] z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-white z-0"></div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-16 pb-16">
        
        {/* TÍTULO */}
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide">
          Professional Integrity
        </h2>

        {/* CONTENEDOR DE TARJETAS */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          
          {/* Tarjeta 1 */}
          <div className="w-full md:w-1/2 bg-white rounded-[30px] border-[6px] border-[#213340] p-10 md:p-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-2 duration-300">
            <h3 className="text-[#1a2e3a] text-xl md:text-2xl font-medium mb-6">
              Licensed Professional Use:
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
              Access to high-end regenerative biologics backed by quality-focused sourcing standards.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="w-full md:w-1/2 bg-white rounded-[30px] border-[6px] border-[#213340] p-10 md:p-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-2 duration-300">
            <h3 className="text-[#1a2e3a] text-xl md:text-2xl font-medium mb-6">
              Structured Oversight
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
              Providing clinics with the stability and accountability needed to operate at the forefront of precision medicine.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}