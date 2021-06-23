import React from 'react';
import logo from '../images/logo-crop-transparent.png'
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container p-3" width="50%">
            <Link className="navbar-brand" to="/home">
                <img src={logo} width="50" height="50" alt="" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-50">
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/locations">Locations</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/production">Production</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                </ul>
            </div>
        </div>
    </nav>
)
}

export default Header;