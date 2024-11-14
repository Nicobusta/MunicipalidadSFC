import React from 'react'
import logo from '/logo.png'
import "./nav.scss"
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isActiveGobierno = (path) => location.pathname.startsWith(path);

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor: '#065658'}}>
        <div className="container-fluid">

            <Link to={"/"} className=" ms-lg-4 navbar-brand">
                <img src={logo} alt="Logo San Francisco del Chañar" width="auto" height="40"/>
            </Link>

            <button className="navbar-toggler hamburger" style={{border:"none"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" style={{filter: "invert(100%)"}}></span>
            </button>

            <div className="offcanvas offcanvas-start h-50" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

              <div className="offcanvas-header">
                <img src={logo} alt="Logo San Francisco del Chañar" width="auto" height="40"/>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <div className="offcanvas-body d-flex flex-column align-items-center justify-content-evenly flex-lg-row d-lg-inline-block text-lg-end">
               <Link to={"/"} className={`${isActive('/') ? 'active' : ''} navbar-brand`}>Inicio</Link>
               <Link to={"/nuestropueblo"} className={`${isActive('/nuestropueblo') ? 'active' : ''} navbar-brand`}>Nuestro Pueblo</Link>
               <Link to={"/atractivos"} className={`${isActive('/atractivos') ? 'active' : ''} navbar-brand`}>¿Que Visitar?</Link>
               <Link to={"/fechaslocales"} className={`${isActive('/fechaslocales') ? 'active' : ''} navbar-brand`}>Fechas Tradicionales</Link>
               {/* <Link to={"/"} className={`${isActive('/gobierno/intendencia') ? 'active' : ''} navbar-brand`}>Servicios a vecinos</Link> */}
               <Link to={"/gobierno/intendencia"} className={`${isActiveGobierno('/gobierno') ? 'active' : ''} navbar-brand`}>¿Quienes Somos?</Link>
              </div>

           </div>
        </div>
    </nav>
    
    
  )
}

export default Navbar