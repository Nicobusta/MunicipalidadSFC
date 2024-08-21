import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './menugobierno.scss';

const MenuGobierno = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <section className="sidebar mx-auto">
        <h4 className='titulo py-2 ps-3'>Gobierno</h4>
        <ul>
          <li className={`py-2 pt-4 ps-3 ${isActive('/gobierno/intendencia') ? 'active' : ''}`}>
            <Link to="/gobierno/intendencia">Intendencia</Link>
          </li>
          <li className={`py-2 ps-3 ${isActive('/gobierno/organigrama') ? 'active' : ''}`}>
            <Link to="/gobierno/organigrama">Organigrama</Link>
          </li>
          <li className={`py-2 ps-3 ${isActive('/gobierno/tribunal') ? 'active' : ''}`}>
            <Link to="/gobierno/tribunal">Tribunal de cuentas</Link>
          </li>
          <li className={`py-2 ps-3 ${isActive('/gobierno/consejo') ? 'active' : ''}`}>
            <Link to="/gobierno/consejo">Consejo deliberante</Link>
          </li>
          <li className={`py-2 ps-3 ${isActive('/gobierno/como-pensamos') ? 'active' : ''}`}>
            <Link to="/gobierno/como-pensamos">Como pensamos</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default MenuGobierno;
