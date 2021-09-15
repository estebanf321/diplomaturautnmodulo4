import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import '../../styles/components/layout/Nav.css';

const Nav = (props) =>{
    return (
        <nav>
        <div className="holder">
            <ul>
                <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/empresa">Empresa</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/servicios">Servicios</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/productos">Productos</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/novedades">Novedades</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
            </ul>

        </div>
        </nav>
    );
}

export default Nav;