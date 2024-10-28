import {Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home"
import Atractvos from "./components/Atractvos"
import NuestroPueblo from "./components/NuestroPueblo"
import Intendencia from './components/gobierno/Intendencia';
import Secretarias from './components/gobierno/Secretarias';
import Consejo from './components/gobierno/Consejo';
import Tribunal from './components/gobierno/Tribunal';
import Fechaslocales from './Fechaslocales';
import Footer from './components/Footer';



function App() {

  return (
    <>
       <Navbar/>
       <Routes>  
            <Route path="/" element={<Home/>}/>
            <Route path="/atractvos" element={<Atractvos/>}/>
            <Route path="/nuestropueblo" element={<NuestroPueblo/>}/>
            <Route path="/fechaslocales" element={<Fechaslocales/>}/>
            <Route path="/gobierno/intendencia" element={<Intendencia/>}/>
            <Route path="/gobierno/organigrama" element={<Secretarias/>}/>
            <Route path="/gobierno/consejo" element={<Consejo/>}/>
            <Route path="/gobierno/tribunal" element={<Tribunal/>}/>

       </Routes>
        <Footer/> 
    </>
  )
}

export default App
