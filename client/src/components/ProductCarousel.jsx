import { useRef, useState, useEffect } from 'react';

export default function ProductCarousel() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- CONFIGURACIÓN MANUAL DE TUS PRODUCTOS ---
  const productsList = [
    { id: 1, img: "/skin.jpg" },
    { id: 2, img: "/glutathione.jpg" },
    { id: 3, img: "/cognitive.jpg" },
    { id: 4, img: "/lipo-slinm-shot.jpg" },
    { id: 5, img: "/recovery.jpg" },
    { id: 6, img: "/compounded-retatrutide.jpg" },
    { id: 7, img: "/performance.jpg" }, // Corregido el '/' inicial
    { id: 8, img: "/adipotide.jpg" },
    { id: 9, img: "/weight.jpg" },
    { id: 10, img: "/bpc-157.jpg" },
    { id: 11, img: "/longevity.jpg" },
    { id: 12, img: "/mots-c.jpg" },
  ];

  // Triplicamos para el efecto infinito
  const products = [...productsList, ...productsList, ...productsList];

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 283 + 20; 
      scrollRef.current.scrollLeft = cardWidth * productsList.length;
    }
  }, []);

  const handleInfiniteScroll = () => {
    const { current } = scrollRef;
    if (!current) return;
    const cardWidth = 283 + 20;
    const totalContentWidth = cardWidth * productsList.length;

    if (current.scrollLeft >= totalContentWidth * 2) {
      current.scrollLeft = totalContentWidth;
    }
    if (current.scrollLeft <= 0) {
      current.scrollLeft = totalContentWidth;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => setIsDragging(false);

  const scrollByButton = (direction) => {
    const amt = 283 + 20;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amt : amt, behavior: 'smooth' });
  };

  return (
    <section 
      className="relative py-20 z-20 overflow-hidden select-none bg-cover bg-center"
      /* AQUÍ PONES TU IMAGEN DE FONDO */
      style={{ backgroundImage: "url('/fondo-carrusel.jpg')" }} 
    >
      
      {/* CAPA OSCURA (OVERLAY): 
          Esto hace que el fondo se vea negro/oscuro pero deje ver la imagen sutilmente. 
          Puedes cambiar 'bg-black/70' por 'bg-black/40' si quieres que la imagen se vea más clara. */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="max-w-[1850px] mx-auto relative px-10 md:px-16 z-10">
        
        {/* FLECHAS */}
        <button onClick={() => scrollByButton('left')} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 text-[#cba864] hover:scale-110 transition-transform">
          <svg className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* CONTENEDOR */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onScroll={handleInfiniteScroll}
          className="flex space-x-[20px] overflow-x-auto py-8 px-2 scrollbar-hide cursor-default active:cursor-default"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((p, index) => (
            <div 
              key={`${p.id}-${index}`} 
              className="flex-shrink-0 w-[283px] h-[283px] rounded-[30px] relative overflow-hidden shadow-2xl border border-white/10 bg-[#e5e7eb]"
            >
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105" 
                style={{ backgroundImage: `url('${p.img}')` }}
              >
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => scrollByButton('right')} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 text-[#cba864] hover:scale-110 transition-transform">
          <svg className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </section>
  );
}