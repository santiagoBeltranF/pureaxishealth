import React from 'react';
import PeptidesHero from '../components/PeptidesHero';
import ManufacturingControls from '../components/ManufacturingControls';
import StrategicSourcing from '../components/StrategicSourcing';
import AdvancedProtocols from '../components/AdvancedProtocols';
import PeptidesCarousel from '../components/PeptidesCarousel'; // Importamos el nuevo carrusel

export default function Peptides() {
  return (
    <main className="relative w-full min-h-screen">
      
      <PeptidesHero />
      <ManufacturingControls />
      <StrategicSourcing />
      <AdvancedProtocols />
      
      {/* NUEVO CARRUSEL TIPO TIENDA */}
      <PeptidesCarousel />
      
    </main>
  );
}