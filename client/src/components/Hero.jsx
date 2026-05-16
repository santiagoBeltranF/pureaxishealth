export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 pt-24 md:pt-32">
      
      {/* Caja con efecto cristal */}
      {/* 'p-6' móvil, 'md:p-10', 'lg:p-12' - padding adaptable */}
      <div className="w-full max-w-4xl bg-white/30 backdrop-blur-lg border border-white/40 p-6 md:p-10 lg:p-12 rounded-[30px] md:rounded-[50px] shadow-2xl text-center z-20 transition-all duration-300">
        
        {/* Tipografía que crece suavemente: 'text-base' a 'md:text-lg' y 'lg:text-2xl' */}
        <p className="text-[#1a2e3a] text-base md:text-lg lg:text-2xl leading-relaxed font-medium mb-8 lg:mb-10 text-balance">
          PureAxis Health is a provider-focused GPO and strategic sourcing platform 
          supporting licensed clinics with compliant access to peptides, advanced 
          biologics, and regenerative-support technologies through vetted U.S.-based 
          partners. All partners follow <span className="font-bold">Good Manufacturing</span> Practices 
          ensuring products are consistently produced and controlled to meet <span className="font-bold">quality and safety standards</span>.
        </p>
        
        <button className="bg-[#cba864] hover:bg-[#b89758] focus:ring-4 focus:ring-[#cba864]/50 focus:outline-none text-white px-8 md:px-12 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1">
          Register for account
        </button>
      </div>

    </section>
  );
}