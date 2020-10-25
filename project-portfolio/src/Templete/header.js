import React from 'react';
import '../App.css';

function Header(){
    return(
        <div className="header">
        <a href="#default" className="logo">Gan Zhi Kiat</a>
        <div className="header-right">
            <a href="#contact">Contact Me</a>
            <a className="active" href="#about">About Me</a>
        </div>
        </div>
    );
}

export default Header;