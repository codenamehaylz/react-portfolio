import React from 'react';
import { NavLink } from 'react-router-dom';

//TODO must be rendered across entire site
//TODO must contain navbar

function Header() {
    return (
        <nav>
            <div>
                Hayley Blackburn
            </div>

            <ul>
                <li>
                    <NavLink 
                    to="/"
                    className={isActive => isActive ? "nav-link active" : "nav-link"}>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/projects"
                    className={isActive => isActive ? "nav-link active" : "nav-link"}>
                        Projects
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact"
                    className={isActive => isActive ? "nav-link active" : "nav-link"}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header;