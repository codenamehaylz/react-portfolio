import React from 'react';
import { NavLink } from 'react-router-dom';
import cv from '../docs/HayleyBlackburnCV.pdf';

function Header() {
    return (
        <nav className="navbar">
            <NavLink 
                to="/react-portfolio"
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

                <li className="nav-item">
                    <a href={cv}
                    className="nav-link">
                        CV
                    </a>
                </li>
            </ul>

        </nav>
    )
}

export default Header;