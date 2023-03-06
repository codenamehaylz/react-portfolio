import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar">
            <NavLink 
                to="/"
                className="navbar-brand">
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

        </nav>
    )
}

export default Header;