import React from 'react';
import '../App.css';

function Contact(){
    return(
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact Me</h2>
                <div className="contact-content">
                        <div className="text">Get in Touch</div>
                        <p>Want to know more about me? drop me an email or whatsapp~</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Gan Zhi Kiat</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fa fa-phone"></i>
                                <div className="info">
                                    <div className="head">Phone</div>
                                    <div className="sub-title">012-9338220</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">zhikiatgan@hotmail.com</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Tangkak, Johor Malaysia.</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;