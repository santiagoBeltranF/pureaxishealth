export default function ValuePropositions() {
  const cards = [
    { 
      title: "Cost Savings", 
      description: "Leverage collective buying power to access premium peptides at reduced prices.", 
      image: "/cost-savings.jpg" 
    },
    { 
      title: "Verified Quality", 
      description: "Secure access to clinically vetted compounds through our network of FDA registered 503A and 503B compounding pharmacies, along with professional use peptides from vetted U.S. based GMP manufacturers and biologics sourced from U.S. laboratories operating in accordance with applicable FDA guidelines.", 
      image: "/verified-quality.jpg" 
    },
    { 
      title: "Cutting-Edge Access", 
      description: "Stay ahead with the latest formulations in cellular repair, metabolic health, and longevity.", 
      image: "/cutting-edge.jpg" 
    },
    { 
      title: "Exclusive Networks", 
      description: "Join a community of prestigious practices dedicated to high-grade patient care.", 
      image: "/exclusive-networks.jpg" 
    }
  ];

  return (
    <section className="bg-[#fcfcfd] w-full py-16 md:py-24 lg:py-32 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        
        {/* GRID: 1 columna en móvil, 2 columnas en pantallas grandes (lg:grid-cols-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LADO IZQUIERDO: Texto (Se queda fijo en escritorio con lg:sticky) */}
          <div className="relative lg:sticky top-auto lg:top-32 mb-12 lg:mb-0">
            <h2 className="text-[#1a2e3a] text-3xl md:text-5xl font-bold mb-4">Value Propositions</h2>
            <h3 className="text-gray-600 text-xl md:text-2xl mb-8 md:mb-10">Health & Wellness Solutions</h3>
            
            {/* AQUÍ ESTÁN TODOS LOS PÁRRAFOS COMPLETOS */}
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                At <span className="font-bold text-[#1a2e3a]">PureAxis Health & Wellness</span>, we bridge advanced biotechnology with responsible clinical application.
              </p>
              
              <p>
                Through strategic partnerships with FDA registered <span className="font-bold text-[#1a2e3a]">503A and 503B compounding</span> pharmacies, we support licensed providers with access to pharmaceutical-grade preparations for compliant clinical use.
              </p>
              
              <p>
                We also source professional-use <span className="font-bold text-[#1a2e3a]">peptides</span> from carefully vetted U.S.-based manufacturers operating under Good Manufacturing Practices (GMP) standards, ensuring quality, purity, and lot traceability.
              </p>
              
              <p>
                In the biologics space, we collaborate with U.S. laboratories that follow applicable FDA guidelines in the handling and processing of advanced regenerative products, including stem cell-derived and <span className="font-bold text-[#1a2e3a]">exosome-based solutions.</span>
              </p>
              
              <p>
                PureAxis functions as a strategic sourcing and governance partner aligning providers with high-quality inputs while maintaining clear regulatory separation, supply chain transparency, and operational integrity.
              </p>
            </div>
          </div>

          {/* LADO DERECHO: Tarjetas con Scroll */}
          <div className="flex flex-col space-y-8 mt-4 lg:mt-0">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 hover:shadow-2xl"
              >
                {/* Imagen de fondo de la tarjeta */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.image})`, backgroundColor: '#4a5568' }} 
                ></div>
                
                {/* Capa de gradiente oscuro para leer el texto blanco */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e3a]/95 via-[#1a2e3a]/40 to-transparent"></div>

                {/* Contenido de la tarjeta */}
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <h4 className="text-white text-2xl md:text-3xl font-bold mb-3 md:mb-4">{card.title}</h4>
                  <p className="text-white/90 text-sm md:text-lg leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}