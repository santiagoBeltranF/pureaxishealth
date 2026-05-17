import React from 'react';

export default function ManufacturingControls() {
  return (
    /* Mantenemos el padding vertical para la elegancia */
    <section className="relative z-20 bg-white py-12 md:py-20 px-6">
      
      {/* 
          - max-w-6xl: Ampliamos un poco el ancho máximo para permitir la separación.
          - lg:gap-32: Aumentamos significativamente el espacio entre imagen y texto.
      */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-32">
        
        {/* LADO IZQUIERDO: IMAGEN */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative rounded-[35px] overflow-hidden shadow-2xl border border-gray-50">
            <img 
              src="/manufacturing-lab.jpg" 
              alt="Manufacturing" 
              className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover"
            />
          </div>
        </div>

        {/* LADO DERECHO: TEXTO */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-[#1a2e3a] text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight tracking-tight uppercase">
            Manufacturing &  <br className="hidden xl:block" /> Quality Controls
          </h2>

          <ul className="space-y-6">
            {/* Item 1 */}
            <li className="flex items-start gap-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <div className="mt-1.5 flex-shrink-0">
                <svg className="w-5 h-5 text-[#cba864]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>
                <span className="font-bold text-[#1a2e3a]">U.S.-Based Manufacturing:</span> Compounds sourced from vetted U.S.-based manufacturers.
              </p>
            </li>

            {/* Item 2 */}
            <li className="flex items-start gap-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <div className="mt-1.5 flex-shrink-0">
                <svg className="w-5 h-5 text-[#cba864]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>
                <span className="font-bold text-[#1a2e3a]">GMP Standards:</span> Operating under Good Manufacturing Practices (GMP) to ensure consistency and purity.
              </p>
            </li>

            {/* Item 3 */}
            <li className="flex items-start gap-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <div className="mt-1.5 flex-shrink-0">
                <svg className="w-5 h-5 text-[#cba864]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>
                <span className="font-bold text-[#1a2e3a]">Specialized Science:</span> Peptides represent a highly specialized category within modern biologic science.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}