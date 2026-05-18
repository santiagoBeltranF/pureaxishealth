import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importación de las páginas
import Home from './pages/Home';
import Peptides from './pages/Peptides';
import Pharmacy503 from './pages/Pharmacy503'; 
import ExosomeStemCell from './pages/ExosomeStemCell'; // <-- Asegúrate de que esta línea esté aquí

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen">
        
        {/* Fondo Global (Video) - Recuerda que solo se ve en Home porque las otras vistas lo tapan */}
        <div className="fixed inset-0 z-0 bg-white">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-110 opacity-75">
            <source src="/background-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Capa de Contenido */}
        <div className="relative z-10 w-full flex flex-col">
          <Navbar />
          
          <Routes>
            {/* AQUÍ ESTÁN LAS RUTAS. Si falta una, sale el error que enviaste */}
            <Route path="/" element={<Home />} />
            <Route path="/peptides" element={<Peptides />} />
            <Route path="/503-pharmacy" element={<Pharmacy503 />} /> {/* <-- Esta es la ruta que faltaba */}
            <Route path="/exosome-stem-cell" element={<ExosomeStemCell />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;