import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValuePropositions from './components/ValuePropositions';
import ProductCarousel from './components/ProductCarousel';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      
      {/* 1. Video de fondo Global (Se queda fijo atrás) */}
      <div className="fixed inset-0 z-0 bg-white">
        <video 
          autoPlay loop muted playsInline
          className="w-full h-full object-cover brightness-110 opacity-75"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Contenido que hace Scroll (Navbar + Secciones) */}
      <div className="relative z-10 w-full flex flex-col">
        <Navbar />
        <Hero />
        <ValuePropositions />
        <ProductCarousel />
      </div>

    </div>
  );
}

export default App;