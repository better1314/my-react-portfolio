import React from 'react';
import '../App.css';
import myresume from "../Asset/GanZhiKiat-Resume.pdf";

function Header(){
    return(
        <div className="header">
        <a href="#default" className="logo">My Portfolio.</a>
        <div className="header-right">
            <a className="active" href={myresume} target="_blank" rel="noopener noreferrer" download><i className="fas fa-download"/>Download CV</a>
        </div>
        </div>
    );
}

export default Header;