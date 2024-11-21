import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Atractivos from "./components/Atractvos.jsx"
import NuestroPueblo from "./components/NuestroPueblo.jsx"
import Intendencia from './components/gobierno/Intendencia.jsx';
import Secretarias from './components/gobierno/Secretarias.jsx';
import Consejo from './components/gobierno/Consejo.jsx';
import Tribunal from './components/gobierno/Tribunal.jsx';
import Fechaslocales from './components/Fechaslocales.jsx';
import Footer from './components/Footer.jsx';
import reclamos from "./assets/reclamos.png";



function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    // Función para actualizar el estado cuando cambia el tamaño de la ventana
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth < 768);
    };

    // Agregar listener al evento de redimensionamiento
    window.addEventListener("resize", handleResize);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
     <Router>
       <Navbar/>
       <Routes>  
            <Route path="/" element={<Home/>}/>
            <Route path="/atractivos" element={<Atractivos/>}/>
            <Route path="/nuestropueblo" element={<NuestroPueblo/>}/>
            <Route path="/fechaslocales" element={<Fechaslocales/>}/>
            <Route path="/gobierno/intendencia" element={<Intendencia/>}/>
            <Route path="/gobierno/organigrama" element={<Secretarias/>}/>
            <Route path="/gobierno/consejo" element={<Consejo/>}/>
            <Route path="/gobierno/tribunal" element={<Tribunal/>}/>

       </Routes>

       {isLargeScreen && (
        <a className='reclamosWpp'  href="https://wa.me/+5493522440078" target="_blank">
          <img src={reclamos} alt='logo'/>
        </a>
       )}
        <Footer/> 
      </Router>
    </>
  )
}

export default App
