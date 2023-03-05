import React from 'react';
import { NavLink } from 'react-router-dom';

//TODO add styling and classes

function Header() {
    return (
        <nav>
            <NavLink 
            to="/"
            className="nav-link name">
                Hayley Blackburn
            </NavLink>
            
            <ul>
                <li>
                    <NavLink 
                    to="/projects"
                    className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                        Projects
                    </NavLink>
                </li>

                <li>
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