import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import '../../styles/components/layout/Nav.css';

const Nav = (props) =>{
    return (
        <nav>
        <div className="holder">
            <ul>
                <li><NavLink activeClassName="activo" exact to="/"><i class="fas fa-laptop-house"></i>Home</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/empresa"><i class="fas fa-building"></i>Empresa</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/servicios"><i class="fab fa-usps"></i>Servicios</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/productos"><i class="fas fa-car"></i>Productos</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/novedades"><i class="fas fa-newspaper"></i>Novedades</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/contacto"><i class="fas fa-mail-bulk"></i>Contacto</NavLink></li>
            </ul>

        </div>
        </nav>
    );
}

export default Nav;