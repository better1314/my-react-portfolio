import React from 'react';
import '../App.css';

function Header(){
    return(
        <div class="header">
        <a href="#default" class="logo">My Portfolio</a>
        <div class="header-right">
            <a class="active" href="#home">Home</a>
            <a href="#contact">Contact Me</a>
            <a href="#about">About Me</a>
        </div>
        </div>
    );
}

export default Header;