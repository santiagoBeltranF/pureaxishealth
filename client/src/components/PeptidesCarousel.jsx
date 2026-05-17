import { useRef, useState, useEffect } from 'react';

export default function PeptidesCarousel() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Estados para la lógica de arrastre
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Lista de 12 productos
  const productsList = [
    { id: 1, name: "CJC", img: "/cjc.jpg" },
    { id: 2, name: "TESEMORELIN", img: "/tesamorelin.jpg" },
    { id: 3, name: "MOTS-C", img: "/mots-c.jpg" },
    { id: 4, name: "NAD", img: "/nad.jpg" },
    { id: 5, name: "GHK-CU", img: "/ghk-cu.jpg" },
    { id: 6, name: "GLOW", img: "/glow.jpg" },
    { id: 7, name: "AOD", img: "/aod.jpg" },
    { id: 8, name: "SEMAGLUTIDE", img: "/semaglutide.jpg" },
    { id: 9, name: "TIRZEPATIDE", img: "/tirzepatide.jpg" },
    { id: 10, name: "RETATRUTIDE", img: "/retatrutide.jpg" },
    { id: 11, name: "BPC", img: "/bpc.jpg" },
    { id: 12, name: "WOLVERINE", img: "/wolverine.jpg" }
  ];

  // Triplicamos para el loop infinito
  const products = [...productsList, ...productsList, ...productsList];

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 768 ? 260 + 24 : 320 + 32;
      scrollRef.current.scrollLeft = cardWidth * productsList.length;
    }
  }, [productsList.length]);

  const handleScroll = () => {
    const current = scrollRef.current;
    if (!current) return;

    const cardWidth = window.innerWidth < 768 ? 260 + 24 : 320 + 32;
    const totalContentWidth = cardWidth * productsList.length;

    let newIndex = Math.round((current.scrollLeft % totalContentWidth) / cardWidth);
    if (newIndex >= productsList.length) newIndex = 0;
    
    // SOLUCIÓN AL LAG: Solo actualiza el estado si el índice realmente cambió
    setActiveIndex(prev => prev !== newIndex ? newIndex : prev);

    // Scroll infinito sin interrupciones
    if (current.scrollLeft >= totalContentWidth * 2 - 10) {
      current.scrollLeft = totalContentWidth;
    }
    if (current.scrollLeft <= 10) {
      current.scrollLeft = totalContentWidth;
    }
  };

  // --- LÓGICA DE ARRASTRE TIPO "LLANTA" ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2.5; // Multiplicador de velocidad de arrastre
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => setIsDragging(false);

  const scrollByButton = (direction) => {
    const amt = window.innerWidth < 768 ? 260 + 24 : 320 + 32;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amt : amt, behavior: 'smooth' });
  };

  const scrollToDot = (index) => {
    const cardWidth = window.innerWidth < 768 ? 260 + 24 : 320 + 32;
    const targetScroll = (productsList.length + index) * cardWidth;
    scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-b from-[#0a192f] to-[#020813] py-20 relative z-20 overflow-hidden select-none min-h-[90vh] flex flex-col justify-center">
      
      <h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-16 tracking-wide">
        Products
      </h2>

      <div className="max-w-[1920px] mx-auto w-full relative px-12 md:px-24">
        
        {/* FLECHA IZQUIERDA */}
        <button 
          onClick={() => scrollByButton('left')} 
          className="absolute left-2 md:left-6 top-[40%] -translate-y-1/2 z-40 text-white hover:text-[#cba864] hover:scale-125 transition-all hidden md:block"
        >
          <svg className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* CONTENEDOR DEL CARRUSEL */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          /* !snap-none desactiva el ajuste automático MIENTRAS arrastras, para que ruede libremente */
          className={`flex space-x-6 md:space-x-8 overflow-x-auto py-8 px-2 scrollbar-hide snap-x snap-mandatory ${isDragging ? '!snap-none cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((p, index) => (
            <div key={`${p.id}-${index}`} className="flex flex-col items-center flex-shrink-0 snap-center group">
              
              <div className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 bg-[#e5e7eb] transition-transform duration-500 group-hover:-translate-y-2">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${p.img}')` }}
                ></div>
              </div>

              <h3 className="text-white text-xl md:text-2xl font-bold mt-6 md:mt-8 tracking-wide transition-colors group-hover:text-[#cba864]">
                {p.name}
              </h3>
              
            </div>
          ))}
        </div>

        {/* FLECHA DERECHA */}
        <button 
          onClick={() => scrollByButton('right')} 
          className="absolute right-2 md:right-6 top-[40%] -translate-y-1/2 z-40 text-white hover:text-[#cba864] hover:scale-125 transition-all hidden md:block"
        >
          <svg className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>

      {/* PUNTOS (DOTS) */}
      <div className="flex justify-center space-x-3 mt-12 md:mt-16">
        {productsList.map((_, idx) => (
          <div 
            key={idx} 
            onClick={() => scrollToDot(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-[#cba864]/70 ${
              activeIndex === idx ? 'w-8 bg-[#cba864]' : 'w-2.5 bg-white/30'
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
}