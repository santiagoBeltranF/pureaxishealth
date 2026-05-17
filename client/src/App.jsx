import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Peptides from './pages/Peptides';

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen">
        {/* El Navbar siempre estará arriba */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peptides" element={<Peptides />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;