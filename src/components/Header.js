import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <NavLink 
                    to="/"
                    className="nav-link navbar-brand">
                        Hayley Blackburn
                    </NavLink>

            <ul className="nav">
                <li className="nav-item">
                    <NavLink 
                    to="/projects"
                    className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                        Projects
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/contact"
                    className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                        Contact
                    </NavLink>
                </li>
            </ul>

            </div>
        </nav>
    )
}

export default Header;