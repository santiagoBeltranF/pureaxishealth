import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 'px-4' será para celulares, 'md:px-8' y 'lg:px-16' para pantallas más grandes
    <nav className="absolute top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
      
      {/* 1. Logo */}
      <div className="flex-shrink-0">
        <img 
          src="/PNG-LOGO-SMALL-1.png" 
          alt="Logo" 
          // Logo más pequeño en celular y más grande desde tablet
          className="h-16 w-16 md:h-24 md:w-24 lg:h-40 lg:w-40 object-contain" 
        />
      </div>

      {/* 2. Menú Hamburguesa (visible solo en celulares/tablets pequeñas) */}
      <div className="lg:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 text-[#1a2e3a] focus:outline-none focus:ring-2 focus:ring-[#cba864] rounded-md"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>
      </div>

      {/* 3. Menú de navegación (Oculto en móvil, visible en escritorio) */}
      <div className="hidden lg:flex space-x-6 xl:space-x-12 text-[#1a2e3a] font-bold text-lg xl:text-xl items-center">
        <a href="#" className="hover:text-blue-900 transition-colors">Home</a>
        <a href="#" className="hover:text-blue-900 transition-colors">Peptides</a>
        <a href="#" className="hover:text-blue-900 transition-colors">503 A & 503B</a>
        <a href="#" className="hover:text-blue-900 transition-colors">Exosome & Stem Cell</a>
        <a href="#" className="hover:text-blue-900 transition-colors">About Us</a>
        <a href="#" className="hover:text-blue-900 transition-colors">Store</a>
      </div>

      {/* 4. Botón y Perfil (Ocultos en móvil, o podrías ajustarlos) */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <button className="bg-[#cba864] text-white px-6 py-2 rounded-xl font-bold text-sm lg:text-base hover:bg-[#b89758] transition-colors shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-[#cba864]">
          Contact Us
        </button>
        <div className="w-10 h-10 rounded-full bg-[#cba864] flex items-center justify-center text-white cursor-pointer hover:bg-[#b89758] transition-colors shadow-md">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
           </svg>
        </div>
      </div>

      {/* 5. Menú Desplegable (Móvil) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg lg:hidden flex flex-col items-center py-6 space-y-4 text-[#1a2e3a] font-bold text-lg transition-all duration-300">
           <a href="#" className="hover:text-[#cba864] transition">Home</a>
           <a href="#" className="hover:text-[#cba864] transition">Peptides</a>
           <a href="#" className="hover:text-[#cba864] transition">503 A & 503B</a>
           <a href="#" className="hover:text-[#cba864] transition">Exosome & Stem Cell</a>
           <a href="#" className="hover:text-[#cba864] transition">About Us</a>
           <a href="#" className="hover:text-[#cba864] transition">Store</a>
           {/* Incluir los botones aquí si lo deseas en móvil */}
           <button className="w-3/4 mt-4 bg-[#cba864] text-white px-6 py-3 rounded-xl font-bold shadow-md">Contact Us</button>
        </div>
      )}

    </nav>
  );
}