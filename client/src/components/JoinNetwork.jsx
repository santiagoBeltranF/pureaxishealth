import React from 'react';

export default function JoinNetwork() {
  return (
    <section className="bg-white py-12 md:py-24 px-4 md:px-10 relative z-20">
      
      {/* Contenedor Principal Dorado */}
      <div className="max-w-[1400px] mx-auto bg-[#cba864] rounded-[40px] md:rounded-[60px] p-8 md:p-20 shadow-2xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* LADO IZQUIERDO: TEXTO E INFORMACIÓN */}
          <div className="text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Join the <br className="hidden md:block" /> PureAxis Network
            </h2>
            
            <p className="text-lg md:text-2xl font-light mb-10 leading-relaxed opacity-95">
              Take your research or clinical practice to the next level with our leading GPO solutions. 
              By partnering with PureAxis, you gain exclusive access to:
            </p>

            <ul className="space-y-8">
              {/* Item 1 */}
              <li className="flex items-start gap-4">
                <div className="mt-1.5">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl font-light">
                  <span className="font-bold">Preferred Pricing:</span> Tiered discounts on high-purity peptides and compounding solutions.
                </p>
              </li>

              {/* Item 2 */}
              <li className="flex items-start gap-4">
                <div className="mt-1.5">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl font-light">
                  <span className="font-bold">Elite Support:</span> Direct communication with our strategic 503A & 503B partners.
                </p>
              </li>

              {/* Item 3 */}
              <li className="flex items-start gap-4">
                <div className="mt-1.5">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl font-light">
                  <span className="font-bold">Quality Assurance:</span> US-based materials sourced with the highest standards of purity.
                </p>
              </li>
            </ul>
          </div>

          {/* LADO DERECHO: FORMULARIO */}
          <form className="flex flex-col space-y-6">
            
            <div className="flex flex-col space-y-2">
              <label className="text-white font-medium text-sm ml-1">Name</label>
              <input 
                type="text" 
                className="w-full bg-white border-none rounded-xl p-4 text-[#1a2e3a] focus:ring-4 focus:ring-white/20 transition-all outline-none" 
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-white font-medium text-sm ml-1">Email</label>
              <input 
                type="email" 
                className="w-full bg-white border-none rounded-xl p-4 text-[#1a2e3a] focus:ring-4 focus:ring-white/20 transition-all outline-none" 
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-white font-medium text-sm ml-1">Phone Number</label>
              <input 
                type="tel" 
                className="w-full bg-white border-none rounded-xl p-4 text-[#1a2e3a] focus:ring-4 focus:ring-white/20 transition-all outline-none" 
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-white font-medium text-sm ml-1">Company</label>
              <input 
                type="text" 
                className="w-full bg-white border-none rounded-xl p-4 text-[#1a2e3a] focus:ring-4 focus:ring-white/20 transition-all outline-none" 
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-white font-medium text-sm ml-1">Company Website</label>
              <input 
                type="url" 
                className="w-full bg-white border-none rounded-xl p-4 text-[#1a2e3a] focus:ring-4 focus:ring-white/20 transition-all outline-none" 
              />
            </div>

            {/* BOTÓN SEND - Oscuro para resaltar */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="bg-[#1a2e3a] text-white font-bold py-4 px-14 rounded-xl text-lg hover:bg-[#0a1b24] transition-all shadow-lg transform active:scale-95"
              >
                Send
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}