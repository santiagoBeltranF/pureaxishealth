import React from 'react';
import ExosomeHero from '../components/ExosomeHero';
import ComplianceStandards from '../components/ComplianceStandards';
import BioactiveComponents from '../components/BioactiveComponents';
import ProfessionalIntegrity from '../components/ProfessionalIntegrity'; // <-- Importamos lo nuevo

export default function ExosomeStemCell() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      
      {/* 1. Hero con fondo fijo */}
      <ExosomeHero />

      {/* 2. Capa sólida que sube por encima del fondo fijo */}
      <div className="relative z-20 bg-white">
        
        <ComplianceStandards />
        
        {/* LÍNEA DIVISORIA SUTIL Y ELEGANTE */}
        <div className="max-w-7xl mx-auto h-px bg-gray-100 my-4"></div>
        
        <BioactiveComponents />

        {/* 3. NUEVA SECCIÓN DE INTEGRIDAD (Fondo dividido) */}
        <ProfessionalIntegrity />
        
      </div>

    </main>
  );
}