import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-16 relative z-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* FILA SUPERIOR: Logo y Contacto */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex items-center gap-3">
             <img src="/PNG-LOGO-SMALL-1.png" alt="Logo" className="h-16 w-auto brightness-0 invert" />
             <span className="text-2xl font-bold tracking-tighter">PureAxis</span>
          </div>

          <a href="mailto:sales@pureaxishealth.com" className="flex items-center gap-3 group text-lg hover:text-[#cba864] transition-colors">
            <div className="p-2 bg-[#cba864]/10 rounded-lg group-hover:bg-[#cba864]/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#cba864]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            sales@pureaxishealth.com
          </a>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-white/10 mb-8"></div>

        {/* FILA CENTRAL: Navegación y Redes */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          
          {/* Menú de Navegación */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Peptides</a>
            <a href="#" className="hover:text-white transition-colors">503 A & 503B</a>
            <a href="#" className="hover:text-white transition-colors">Exosome & Stem Cell</a>
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Store</a>
          </nav>

          {/* Redes Sociales */}
          <div className="flex items-center gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#cba864] hover:text-white transition-all transform hover:-translate-y-1">
              <i className="fab fa-instagram text-xl"></i> {/* Usa FontAwesome o SVGs */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#cba864] hover:text-white transition-all transform hover:-translate-y-1">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#cba864] hover:text-white transition-all transform hover:-translate-y-1">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.732s.784-1.732 1.75-1.732 1.75.779 1.75 1.732-.784 1.732-1.75 1.732zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* FILA INFERIOR: Calidad y Copyright */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs">
          
          {/* Badge de Calidad mejorado */}
          <div className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-white/70 font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            US-Based Pharmaceutical Quality
          </div>

          <p>© 2026 PureAxis Health & Wellness. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}