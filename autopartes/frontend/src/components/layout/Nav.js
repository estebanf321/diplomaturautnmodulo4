import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../../styles/components/layout/Nav.css';

const Nav = (props) =>{
    return (
        <nav>
        <div className="holder">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/empresa">Empresa</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/novedades">Novedades</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>

        </div>
        </nav>
    );
}

export default Nav;