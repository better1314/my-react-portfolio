import React from 'react';
import profile from '../Asset/cropped.jpg';
import '../App.css';

function Banner(){
    return(
        <section class="about" id="about">
            <div class="max-width">
                <h2 class="title">About me</h2>
                <div class="about-content">
                    <div class="wrapper">
                        <div class="img-area">
                            <div class="inner-area">
                                <img src={profile} />
                            </div>
                        </div>
                        <div class="icon arrow"><i class="fas fa-arrow-left"></i></div>
                        <div class="icon dots"><i class="fas fa-ellipsis-v"></i></div>
                        <div class="name">Gan Zhi Kiat</div>
                        <div class="about">1998.08.23</div>
                        <div class="about">Bachelor Degree in Information Technology</div>
                        <div class="about">Tunku Abdul Rahman University College</div>
                        <div class="about">CGPA <b>3.63</b></div>
                        <div class="about">Founder of <b>casenations.com</b></div>
                        <div class="social-icons">
                        <a href="https://www.facebook.com/zhikiat.gan/" class="fb"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/in/zhikiatgan/" class="twitter"><i class="fab fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/zhikiat_gan/" class="insta"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.casenations.com" class="mywebsite"><i class="fa fa-briefcase"></i></a>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;