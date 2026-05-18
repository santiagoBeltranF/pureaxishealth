import React from 'react';
import PharmacyHero from '../components/PharmacyHero';
import PharmacyCards from '../components/PharmacyCards';
import PeptidesCarousel from '../components/PeptidesCarousel'; // Importamos el carrusel reutilizable

export default function Pharmacy503() {
  
  // Lista específica para la sección Pharmacy 503
  const pharmacyProducts =[
    { id: 1, name: "SEMAGLUTIDE", img: "/semaglutide.jpg" },
    { id: 2, name: "TIRZEPATIDE", img: "/tirzepatide.jpg" },
    { id: 3, name: "RETATRUTIDE", img: "/retatrutide.jpg" },
    { id: 4, name: "NAD", img: "/nad.jpg" },
    { id: 5, name: "B-12", img: "/lipo-slinm-shot.jpg" },
    { id: 6, name: "GLUTATHIONE", img: "/glutathione.jpg" }
  ];

  return (
    <main className="relative w-full min-h-screen">
      <PharmacyHero />

      <div className="relative z-20 bg-[#fafbfc] w-full min-h-screen">
        <PharmacyCards />
        
        {/* Aquí insertamos el carrusel reutilizado con sus propias imágenes */}
        <PeptidesCarousel 
           title="Pharmacy Products" 
           productsList={pharmacyProducts} 
        />
      </div>
    </main>
  );
}