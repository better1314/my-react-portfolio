import React from 'react';
import Typed from 'react-typed';
import '../App.css';

function Banner(){
    return(
        <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">
                Hello, my name is</div>
                <div className="text-2">
                Gan Zhi Kiat</div>
                <div className="text-3">
                And I'm a <span className="typing"><Typed
                strings={['Degree Graduate','Developer','Business Owner']}
                typeSpeed={40}
                backSpeed={50}
                loop></Typed></span></div>
                </div>
            </div>
        </section>
    );
}

export default Banner;