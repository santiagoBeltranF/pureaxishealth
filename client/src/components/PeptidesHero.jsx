import React from 'react';

export default function PeptidesHero() {
  return (
    <section className="relative w-full h-[600px] md:h-[750px] flex items-center justify-center pt-32 overflow-hidden">
      
      {/* 1. FONDO FIJO: Este es el que se queda quieto mientras haces scroll */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/peptides-bg.jpg')", 
          filter: "brightness(0.95)"
        }}
      >
        {/* Capa de color sutil */}
        <div className="absolute inset-0 bg-slate-50/40"></div>
      </div>

      {/* 2. CONTENIDO: El texto que flota sobre el fondo */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <h1 className="text-[#1a2e3a] text-4xl md:text-7xl font-bold mb-8 tracking-tight">
          Professional Use Peptide
        </h1>
        <p className="text-[#1a2e3a] text-lg md:text-2xl leading-relaxed font-medium opacity-90 max-w-4xl mx-auto">
          Welcome to the forefront of precision biologic innovation. Our portfolio is designed to support advanced clinical and wellness protocols through targeted amino acid sequences developed for specific physiologic pathways.
        </p>
      </div>

      {/* 3. GRADIENTE DE TRANSICIÓN: Ayuda al efecto de "desfuminado" al final de la sesión */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
    </section>
  );
}