import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/green.png";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <img className="navbar-brand" src={logo} width="80" height="60" alt="logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link fw-bold" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/about">About</NavLink>
                        </li>
                        
                    </ul>
                   
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;