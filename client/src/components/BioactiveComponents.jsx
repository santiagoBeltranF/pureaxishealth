import React from 'react';

export default function BioactiveComponents() {
  // 1. Añadimos el 'icon' (código SVG) a cada producto para que salgan los dibujos
  const features = [
    { 
      title: "Secretory Factors", 
      desc: "Formulated to support cellular signaling and biologic activity.",
      icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
    },
    { 
      title: "Precision Components", 
      desc: "Includes extracellular vesicles, growth-supporting proteins, peptides, and liposomal carriers.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158A6 6 0 018 15v2a2 2 0 00-2 2v2a2 2 0 002 2h8a2 2 0 002-2v-1.127a2 2 0 00-.572-1.445z"
    },
    { 
      title: "Bioactive Innovation", 
      desc: "Preparations designed for professional application within clinical settings.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    }
  ];

  return (
    /* ESTA ES TU LÍNEA INTACTA: bg-white y z-20 garantizan que NUNCA desaparezca */
    <section className="relative z-20 bg-gray-50 py-24 px-6 shadow-[0_-20px_50px_rgba(255,255,255,1)]">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Título Principal */}
        <h2 className="text-[#1a2e3a] text-3xl md:text-4xl font-bold mb-6">
          Advanced Bioactive Components
        </h2>
        
        {/* Párrafo que estaba en tu imagen debajo del título */}
        <p className="text-gray-600 text-lg font-light mb-16 max-w-4xl mx-auto leading-relaxed">
          PureAxis delivers strategic access to advanced biologic solutions aligning science, 
          compliance awareness, and operational integrity for forward-thinking providers.
        </p>
        
        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              /* Borde dorado fino (border-[#cba864]/40) idéntico a tu foto */
              className="border border-[#cba864]/40 rounded-[20px] p-10 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* EL ICONO DORADO SE RENDERIZA AQUÍ */}
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#cba864]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>

              <h3 className="text-[#1a2e3a] text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}