import React from 'react';
import Typed from 'react-typed';
import '../App.css';

function Banner(){
    return(
        <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">
                Hello, my name is</div>
                <div class="text-2">
                Gan Zhi Kiat</div>
                <div class="text-3">
                And I'm a <span class="typing"><Typed
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