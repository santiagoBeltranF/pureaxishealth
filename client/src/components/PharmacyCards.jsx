import React from 'react';

export default function PharmacyCards() {
  return (
    <section className="w-full py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* =========================================
            TARJETA 1: 503A Patient Specific
        ========================================= */}
        <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden transition-transform duration-500 hover:-translate-y-2">
          
          {/* Imagen Superior con Difuminado */}
          <div className="relative w-full h-[280px] md:h-[320px]">
            <img 
              src="/503a-lab.jpg" // Guarda la foto de la doctora aquí
              alt="503A Patient Specific" 
              className="w-full h-full object-cover"
            />
            {/* Gradiente blanco que funde la imagen con la tarjeta */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
          </div>

          {/* Contenido de la Tarjeta */}
          <div className="px-8 md:px-16 pb-16 pt-2 text-center">
            <h2 className="text-[#1a2e3a] text-3xl md:text-4xl font-bold mb-4">
              503A: Patient Specific
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Custom formulations for individual patients.
            </p>

            <div className="space-y-8 text-[#1a2e3a]">
              <div>
                <h3 className="font-bold text-lg mb-1">Custom formulations</h3>
                <p className="text-gray-500 font-light">Customized preparations according to medical requirements.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-1">Any dosage or strength</h3>
                <p className="text-gray-500 font-light">Total flexibility in dosage for the patient.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-1">Individual prescription required</h3>
                <p className="text-gray-500 font-light">Each order is linked to a specific patient.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-1">Ships to patient's home</h3>
                <p className="text-gray-500 font-light">Direct delivery for greater patient convenience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            TARJETA 2: 503B Bulk & In-Office
        ========================================= */}
        <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden transition-transform duration-500 hover:-translate-y-2">
          
          {/* Imagen Superior con Difuminado */}
          <div className="relative w-full h-[280px] md:h-[320px]">
            <img 
              src="/503b-machine.jpg" // Guarda la foto de la máquina aquí
              alt="503B Bulk & In-Office" 
              className="w-full h-full object-cover"
            />
            {/* Gradiente blanco que funde la imagen con la tarjeta */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
          </div>

          {/* Contenido de la Tarjeta */}
          <div className="px-8 md:px-16 pb-16 pt-2 text-center">
            <h2 className="text-[#1a2e3a] text-3xl md:text-4xl font-bold mb-4">
              503B: Bulk & In-Office
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Standardized products for office use.
            </p>

            <div className="space-y-8 text-[#1a2e3a]">
              <div>
                <h3 className="font-bold text-lg mb-1">FDA-registered facilities:</h3>
                <p className="text-gray-500 font-light">Facilities that operate under federal manufacturing standards.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-1">Office-use vials & supplies:</h3>
                <p className="text-gray-500 font-light">Inventory ready for immediate application in the clinic.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-1">Volume pricing:</h3>
                <p className="text-gray-500 font-light">Cost optimization for large-scale orders.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-1">Ships to your practice:</h3>
                <p className="text-gray-500 font-light">Direct delivery to your medical center.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}