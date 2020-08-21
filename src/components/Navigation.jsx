import React from 'react'
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navContainer">
          <ul className='navBar'>
            <Link className="navItem" to="/">
              <li>Inicio</li>
            </Link>
            <Link className="navItem" to="/quienes-somos">
              <li>Quienes somos</li>
            </Link>
            <Link className="navItem" to="/atencion-medica">
              <li>Atencion medica</li>
            </Link>
            <Link className="navItem" to="/grupos-de-ayuda">
              <li>Grupos de ayuda</li>
            </Link>
            <Link className="navItem" to="/contenido">
              <li>Contenido</li>
            </Link>
            <Link className="navItem" to="/eventos">
              <li>Eventos</li>
            </Link>
            <Link className="navItem" to="/contacto">
              <li>Contacto</li>
            </Link>
          </ul>
        </nav>
    );
}
 
export default Navigation;