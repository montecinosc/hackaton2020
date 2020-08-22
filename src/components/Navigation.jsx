import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Navigation.css';

const Navigation = () => {
    return (
        <nav className="navContainer">
          <ul className='navBar'>
            <Link to="/inicio">
              <li className="navItem">Inicio</li>
            </Link>
            <Link to="/inicio">
              <li className="navItem" >Quienes somos</li>
            </Link>
            <Link  to="/atencion-medica">
              <li className="navItem">Atención médica</li>
            </Link>
            <Link  to="/inicio">
              <li className="navItem">Grupos de ayuda</li>
            </Link>
            <Link  to="/contenido">
              <li className="navItem">Contenido</li>
            </Link>
            <Link  to="/inicio">
              <li className="navItem">Actividades</li>
            </Link>
            <Link to="/contacto">
              <li className="navItem">Contacto</li>
            </Link>
          </ul>
        </nav>
    );
}

export default Navigation;