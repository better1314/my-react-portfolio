import React from 'react';
import profile from '../Asset/cropped.jpg';
import '../App.css';

function Banner(){
    return(
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                    <div className="wrapper">
                        <div className="img-area">
                            <div className="inner-area">
                                <img src={profile} />
                            </div>
                        </div>
                        <div className="icon arrow"><i className="fas fa-arrow-left"></i></div>
                        <div className="icon dots"><i className="fas fa-ellipsis-v"></i></div>
                        <div className="name">Gan Zhi Kiat</div>
                        <div className="about">1998.08.23</div>
                        <div className="about">Bachelor Degree in Information Technology</div>
                        <div className="about">Tunku Abdul Rahman University College</div>
                        <div className="about">CGPA <b>3.63</b></div>
                        <div className="about">Founder of <b>casenations.com</b></div>
                        <div className="social-icons">
                        <a href="https://www.facebook.com/zhikiat.gan/" className="fb"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/in/zhikiatgan/" className="twitter"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/zhikiat_gan/" className="insta"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.casenations.com" className="mywebsite"><i className="fa fa-briefcase"></i></a>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;