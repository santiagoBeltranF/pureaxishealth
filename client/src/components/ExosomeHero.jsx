import React from 'react';

export default function ExosomeHero() {
  return (
    /* Cambiamos a 'relative' para que fluya con el resto de la página */
    <section className="relative w-full pt-48 pb-32 flex flex-col items-center justify-center overflow-hidden">
      
      {/* FONDO: Imagen fija que se "desfumina" */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/microscope-bg.jpg')" }} 
      >
        {/* Capa blanca suave */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
      </div>

      {/* CONTENIDO (z-10 para que flote sobre el fondo) */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-[#1a2e3a] text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
          Exosome & Stem Cell–Derived Biologic Solutions.
        </h1>
        <h3 className="text-[#1a2e3a] text-xl md:text-2xl font-light mb-8 opacity-90">
          Welcome to the next evolution of regenerative biologics.
        </h3>
        <p className="text-gray-1000 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
          Our exosome and stem cell derived solutions are formulated using advanced secretory factors designed to support cellular signaling and biologic activity. These preparations may include exosomes, extracellular vesicles, growth-supporting proteins, peptides, liposomal carriers, and other bioactive components intended for professional application within clinical settings.
        </p>
      </div>

      {/* GRADIENTE DE DESVANECIMIENTO HACIA ARRIBA:
          Este es el efecto que pediste para que la imagen se "esfume" */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
    </section>
  );
}