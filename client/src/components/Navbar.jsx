import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const[isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4 w-full">
        
        {/* 1. Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/PNG-LOGO-SMALL-1.png" 
            alt="Logo" 
            className="h-16 w-16 md:h-24 md:w-24 xl:h-40 xl:w-40 object-contain transition-all" 
          />
        </Link>

        {/* 2. Menú de enlaces */}
        <div className="flex items-center justify-center">
          
          {/* Botón Hamburguesa: Ahora aparece también en Tablets (xl:hidden) */}
          <button 
            className="xl:hidden text-[#1a2e3a] p-2 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             </svg>
          </button>

          {/* Enlaces: Solo visibles en pantallas muy grandes (xl) */}
          <div className="hidden xl:flex space-x-8 text-[#1a2e3a] font-bold text-lg transition-all">
            <Link to="/" className="hover:text-blue-900 transition whitespace-nowrap">Home</Link>
            <Link to="/peptides" className="hover:text-blue-900 transition whitespace-nowrap">Peptides</Link>
            <Link to="/503-pharmacy" className="hover:text-blue-900 transition whitespace-nowrap">503 A & 503B</Link>
            <Link to="exosome-stem-cell" className="hover:text-blue-900 transition whitespace-nowrap">Exosome & Stem Cell</Link>
            <Link to="#" className="hover:text-blue-900 transition whitespace-nowrap">About Us</Link>
            <Link to="#" className="hover:text-blue-900 transition whitespace-nowrap">Store</Link>
          </div>
        </div>

        {/* 3. Botón y Perfil */}
        <div className="flex items-center space-x-4">
          <button className="hidden sm:block bg-[#cba864] text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-[#b89758] transition shadow-md whitespace-nowrap">
            Contact Us
          </button>
          <div className="w-10 h-10 rounded-full bg-[#cba864] flex items-center justify-center text-white cursor-pointer hover:bg-[#b89758] transition shadow-md">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
             </svg>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE (Tablet y Móvil) */}
      <div className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/95 backdrop-blur-md ${isOpen ? 'max-h-[500px] border-b shadow-xl' : 'max-h-0'}`}>
        <div className="flex flex-col items-center py-8 space-y-6 text-[#1a2e3a] font-bold text-lg">
          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/peptides">Peptides</Link>
          <Link onClick={() => setIsOpen(false)} to="/503-pharmacy">503 A & 503B</Link>
          <Link onClick={() => setIsOpen(false)} to="/exosome-stem-cell">Exosome & Stem Cell</Link>
          <Link onClick={() => setIsOpen(false)} to="#">About Us</Link>
          <Link onClick={() => setIsOpen(false)} to="#">Store</Link>
        </div>
      </div>
    </nav>
  );
}