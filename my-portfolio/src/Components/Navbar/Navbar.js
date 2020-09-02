import React from 'react';
import "./Navbar.css";
const Navbar = () =>{
    return(
        <div id="navi" className="fixed-top">
            <ul className="navi nav">
                <ul className="nav-item">
                    <a className="nav-link color" style={{ textDecoration: 'none' }} href="#about-me">About Me</a>
                </ul>
                <ul className="nav-item">
                    <a className="nav-link color" style={{ textDecoration: 'none' }} href="#projects">Projects</a>
                </ul>
                <ul className="nav-item">
                    <a className="nav-link color" style={{ textDecoration: 'none' }} href="#resume">Resume</a>
                </ul>
                <ul className="nav-item">
                    <a className="nav-link color" style={{ textDecoration: 'none' }} href="#connect">Contact</a>
                </ul>
            </ul>
        </div>
    );
}

export default Navbar;