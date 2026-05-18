import React from 'react';

export default function StrategicSourcing() {
  return (
    <section className="relative z-20 bg-[#f8f9fa] py-16 md:py-24 px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* LADO IZQUIERDO: TEXTO */}
        <div className="w-full lg:w-[450px] shrink-0 text-left">
          <h2 className="text-[#1a2e3a] text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight uppercase">
            Strategic Sourcing & Governance
          </h2>
          <h3 className="text-gray-500 text-xs md:text-sm font-bold mb-6 uppercase tracking-[0.3em] leading-tight">
            Professional Procurement Oversight
          </h3>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
            Through disciplined supplier vetting and structured procurement oversight, 
            PureAxis provides providers with access to high-quality peptide solutions 
            while maintaining clear separation between sourcing coordination and 
            regulated clinical execution.
          </p>
        </div>

        {/* LADO DERECHO: IMÁGENES (Ahora con flex-wrap para que nunca se oculten) */}
        <div className="w-full lg:w-auto flex flex-wrap items-center justify-center gap-6">
          
          {/* Imagen 1: La Botella */}
          <div className="flex-none">
            <div 
              className="rounded-[35px] overflow-hidden shadow-2xl border-4 border-white bg-white transition-transform duration-500"
              style={{ width: '280px', height: '350px' }}
            >
              <img 
                src="/vial-detail.jpg" 
                alt="Peptide Vial" 
                className="w-full h-full object-cover object-right"
              />
            </div>
          </div>

          {/* Imagen 2: El Equipo Médico */}
          <div className="flex-none">
            <div 
              className="rounded-[35px] overflow-hidden shadow-2xl border-4 border-white bg-white transition-transform duration-500"
              style={{ width: '380px', height: '350px' }}
            >
              <img 
                src="/lab-team.jpg" 
                alt="Strategic Lab Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}