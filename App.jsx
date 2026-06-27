import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Flavors from './pages/Flavors.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Footer from './pages/Footer.jsx';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar onOpenLogin={() => setShowLogin(true)} />
      
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/flavors" element={<Flavors />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;