import React from 'react';

export default function ComplianceStandards() {
  return (
    <section className="relative z-20 bg-[#ffffff] py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* IMAGEN ALARGADA CON BORDES REDONDEADOS */}
        <div className="w-full mb-12">
          <div className="rounded-[40px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            <img 
              src="/compliance-bg.jpg" // Asegúrate de guardar tu imagen aquí
              alt="Compliance & Laboratory Standards" 
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>

        {/* TÍTULO Y TEXTO */}
        <h2 className="text-[#1a2e3a] text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Compliance & Laboratory Standards
        </h2>
        
        <h3 className="text-[#1a2e3a] font-bold text-lg mb-4 uppercase tracking-widest opacity-80">
          U.S. Laboratory Collaboration
        </h3>
        
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light max-w-3xl">
          Developed in collaboration with U.S.-based laboratories operating in accordance 
          with applicable FDA guidelines. These solutions support a broad range of 
          wellness and regenerative protocols where cellular communication and 
          tissue support are central considerations.
        </p>

      </div>
    </section>
  );
}