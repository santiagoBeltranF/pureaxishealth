import React from 'react';
import PeptidesHero from '../components/PeptidesHero';
import ManufacturingControls from '../components/ManufacturingControls';
import StrategicSourcing from '../components/StrategicSourcing';
import AdvancedProtocols from '../components/AdvancedProtocols';
import PeptidesCarousel from '../components/PeptidesCarousel';

export default function Peptides() {
  const peptidesList =[
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

  return (
    <main className="relative w-full min-h-screen bg-white">
      <PeptidesHero />
      <ManufacturingControls />
      <StrategicSourcing />
      <AdvancedProtocols />
      <PeptidesCarousel title="Products" productsList={peptidesList} />
    </main>
  );
}