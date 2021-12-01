import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/green.png";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className="fw-monospace sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <img className="navbar-brand" src={logo} width="80" height="60" alt="logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item text-center">
                            <NavLink style={isActive => ({
                                color: isActive ? "#8CBE46" : "white"
                            })} className="nav-link fw-bold" aria-current="page" to="/home">HOME</NavLink>
                            </li>
                            <li className="nav-item text-center">
                                <NavLink style={isActive => ({
                                    color: isActive ? "#8CBE46" : "white"
                                })} className="nav-link fw-bold" to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item text-center">
                                <NavLink style={isActive => ({
                                    color: isActive ? "#8CBE46" : "white"
                                })} className="nav-link fw-bold" to="/blog">BLOG</NavLink>
                            </li>
                            <li className="nav-item  text-center">
                                <HashLink className="nav-link fw-bold" to="/home#contact">CONTACT</HashLink>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;