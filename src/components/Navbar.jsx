import React from 'react'
import logo from '/logo.png'
import "./nav.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md sticky-top" style={{backgroundColor: '#065658'}}>
        <div class="container-fluid">

            <Link to={"/"} class="navbar-brand">
                <img src={logo} alt="Logo San Francisco del Chañar" width="auto" height="40"/>
            </Link>

            <button class="navbar-toggler hamburger" style={{border:"none"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" style={{filter: "invert(100%)"}}></span>
            </button>

            <div class="offcanvas offcanvas-start h-50" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

              <div class="offcanvas-header">
                <img src={logo} alt="Logo San Francisco del Chañar" width="auto" height="40"/>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <div class="offcanvas-body d-flex flex-column align-items-center justify-content-evenly">
               <Link to={"/"} class="navbar-brand">Inicio</Link>
               <Link to={"/nuestropueblo"} class="navbar-brand">Nuestro pueblo</Link>
               <Link to={"/atractvos"} class="navbar-brand">¿Que visitar?</Link>
               <Link to={"/fechaslocales"} class="navbar-brand">Fechas especiales</Link>
               <Link to={"/"} class="navbar-brand">Servicios a vecinos</Link>
               <Link to={"/gobierno/intendencia"} class="navbar-brand">¿Quienes somos?</Link>
              </div>

           </div>
        </div>
    </nav>
    
    
  )
}

export default Navbar