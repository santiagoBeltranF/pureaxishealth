import React from 'react';

export default function PharmacyHero() {
  return (
    <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-24 flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. FONDO FIJO (Se queda quieto al hacer scroll) */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/503-bg.jpg')", 
          filter: "brightness(1.05)" 
        }}
      >
        {/* Capa blanca translúcida para que la imagen se vea perfecta */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      </div>

      {/* 2. TEXTO DEL HERO */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <h1 className="text-[#1a2e3a] text-4xl md:text-[54px] font-bold mb-6 tracking-tight leading-tight">
          503 Pharmacy Sourcing & Compounded Solutions
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
          Access compliant pharmaceutical compounding through structured, accountable sourcing.
        </p>
      </div>

      {/* 3. Gradiente inferior para conectar suavemente con lo que sigue */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
      
    </section>
  );
}