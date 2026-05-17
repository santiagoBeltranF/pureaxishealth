import Hero from '../components/Hero';
import ValuePropositions from '../components/ValuePropositions';
import ProductCarousel from '../components/ProductCarousel';
import JoinNetwork from '../components/JoinNetwork';

export default function Home() {
  return (
    <div className="relative w-full">
      {/* FONDO DE VIDEO (Solo para el Home) */}
      <div className="fixed inset-0 z-0 bg-white">
        <video 
          autoPlay loop muted playsInline 
          className="w-full h-full object-cover brightness-110 opacity-75"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10">
        <Hero />
        <ValuePropositions />
        <ProductCarousel />
        <JoinNetwork />
      </div>
    </div>
  );
}