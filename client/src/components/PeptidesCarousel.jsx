import { useRef, useState, useEffect } from 'react';

export default function PeptidesCarousel({ productsList, title }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const[isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Triplicamos para efecto infinito
  const products = [...productsList, ...productsList, ...productsList];

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 768 ? 260 + 24 : 320 + 32;
      scrollRef.current.scrollLeft = cardWidth * productsList.length;
    }
  }, [productsList]);

  const handleScroll = () => {
    const current = scrollRef.current;
    if (!current) return;
    const cardWidth = window.innerWidth < 768 ? 260 + 24 : 320 + 32;
    const totalContentWidth = cardWidth * productsList.length;
    let newIndex = Math.round((current.scrollLeft % totalContentWidth) / cardWidth);
    if (newIndex >= productsList.length) newIndex = 0;
    setActiveIndex(prev => prev !== newIndex ? newIndex : prev);
    if (current.scrollLeft >= totalContentWidth * 2 - 10) current.scrollLeft = totalContentWidth;
    if (current.scrollLeft <= 10) current.scrollLeft = totalContentWidth;
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
    const walk = (x - startX) * 2.5; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-gradient-to-b from-[#0a192f] to-[#020813] py-20 relative z-20 overflow-hidden select-none">
      <h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-16 tracking-wide">{title}</h2>
      <div className="max-w-[1920px] mx-auto w-full relative px-12 md:px-24">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          className={`flex space-x-6 md:space-x-8 overflow-x-auto py-8 px-2 scrollbar-hide snap-x snap-mandatory ${isDragging ? '!snap-none cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((p, index) => (
            <div key={`${p.id}-${index}`} className="flex flex-col items-center flex-shrink-0 snap-center group">
              <div className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-[40px] overflow-hidden shadow-2xl border border-white/5 bg-[#e5e7eb] transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${p.img}')` }}></div>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold mt-6 md:mt-8 tracking-wide group-hover:text-[#cba864] transition-colors">{p.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-3 mt-12 md:mt-16">
        {productsList.map((_, idx) => (
          <div key={idx} className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-[#cba864]' : 'w-2.5 bg-white/30'}`}></div>
        ))}
      </div>
    </section>
  );
}