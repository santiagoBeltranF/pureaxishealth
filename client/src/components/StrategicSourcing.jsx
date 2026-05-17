import React from 'react';

export default function StrategicSourcing() {
  return (
    <section className="relative z-20 bg-[#f8f9fa] py-20 md:py-32 px-6 overflow-hidden">
      
      {/* max-w-7xl da suficiente espacio para que el texto se estire y las fotos queden a la derecha */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* LADO IZQUIERDO: TEXTO (Liberamos el ancho a 650px para que el título se vea a lo largo) */}
        <div className="w-full lg:w-[650px] shrink-0 text-left">
          <h2 className="text-[#1a2e3a] text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight tracking-tight uppercase">
            Strategic Sourcing & Governance
          </h2>
          
          <h3 className="text-gray-500 text-xs md:text-sm font-bold mb-6 uppercase tracking-[0.3em] leading-tight">
            Professional Procurement Oversight
          </h3>
          
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light max-w-lg">
            Through disciplined supplier vetting and structured procurement oversight, 
            PureAxis provides providers with access to high-quality peptide solutions 
            while maintaining clear separation between sourcing coordination and 
            regulated clinical execution.
          </p>
        </div>

        {/* LADO DERECHO: IMÁGENES (Mantienen su alineación al borde derecho) */}
        <div className="w-full lg:w-auto flex flex-col md:flex-row items-center md:items-center justify-end gap-6 ml-auto">
          
          {/* Imagen 1: La Botella */}
          <div className="w-full max-w-[280px]">
            <div 
              className="rounded-[35px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[6px] border-white transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] duration-500"
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
          <div className="w-full max-w-[380px]">
            <div 
              className="rounded-[35px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[6px] border-white transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] duration-500"
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