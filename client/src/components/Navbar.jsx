import { useState } from 'react';

export default function Navbar() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      
      {/* BARRA PRINCIPAL */}
      <div className="flex items-center justify-between px-6 md:px-16 py-4 w-full">
        
        {/* 1. Logo (Izquierda) */}
        <div className="flex items-center">
          <img 
            src="/PNG-LOGO-SMALL-1.png" 
            alt="Logo" 
            className="h-20 w-20 md:h-40 md:w-40 object-contain" 
          />
        </div>

        {/* 2. Centro: Menú Hamburguesa (Móvil) / Enlaces (Desktop) */}
        <div className="flex items-center justify-center">
          
          {/* Botón Hamburguesa (Solo visible en pantallas pequeñas) */}
          <button 
            className="lg:hidden text-[#1a2e3a] p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Ícono de "X" cuando el menú está abierto
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Ícono de Hamburguesa cuando está cerrado
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Enlaces de navegación (Solo visibles en Desktop) */}
          <div className="hidden lg:flex space-x-8 xl:space-x-12 text-[#1a2e3a] font-bold text-lg xl:text-xl">
            <a href="#" className="hover:text-blue-900 transition">Home</a>
            <a href="#" className="hover:text-blue-900 transition">Peptides</a>
            <a href="#" className="hover:text-blue-900 transition">503 A & 503B</a>
            <a href="#" className="hover:text-blue-900 transition">Exosome & Stem Cell</a>
            <a href="#" className="hover:text-blue-900 transition">About Us</a>
            <a href="#" className="hover:text-blue-900 transition">Store</a>
          </div>
        </div>

        {/* 3. Botón y Perfil (Derecha) */}
        <div className="flex items-center space-x-3 md:space-x-6">
          <button className="bg-[#cba864] text-white px-4 md:px-8 py-2 rounded-xl font-bold text-xs md:text-sm hover:bg-[#b89758] transition shadow-md">
            Contact Us
          </button>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#cba864] flex items-center justify-center text-white cursor-pointer hover:bg-[#b89758] transition shadow-md">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
             </svg>
          </div>
        </div>
        
      </div>

      {/* MENÚ DESPLEGABLE (MÓVIL) */}
      {/* Usamos max-h para que tenga una animación de caída suave */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 border-b border-gray-100 shadow-xl' : 'max-h-0'}`}>
        <div className="flex flex-col items-center bg-white/95 backdrop-blur-md py-6 space-y-6 text-[#1a2e3a] font-bold text-lg">
          <a href="#" className="hover:text-[#cba864] transition">Home</a>
          <a href="#" className="hover:text-[#cba864] transition">Peptides</a>
          <a href="#" className="hover:text-[#cba864] transition">503 A & 503B</a>
          <a href="#" className="hover:text-[#cba864] transition">Exosome & Stem Cell</a>
          <a href="#" className="hover:text-[#cba864] transition">About Us</a>
          <a href="#" className="hover:text-[#cba864] transition">Store</a>
        </div>
      </div>

    </nav>
  );
}