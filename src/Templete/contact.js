import React from 'react';
import '../App.css';

function Contact(){
    return(
        <section class="contact" id="contact">
            <div class="max-width">
                <h2 class="title">Contact Me</h2>
                <div class="contact-content">
                        <div class="text">Get in Touch</div>
                        <p>Want to know more about me? drop me an email or whatsapp~</p>
                        <div class="icons">
                            <div class="row">
                                <i class="fas fa-user"></i>
                                <div class="info">
                                    <div class="head">Name</div>
                                    <div class="sub-title">Gan Zhi Kiat</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fa fa-phone"></i>
                                <div class="info">
                                    <div class="head">Phone</div>
                                    <div class="sub-title">012-9338220</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-envelope"></i>
                                <div class="info">
                                    <div class="head">Email</div>
                                    <div class="sub-title">zhikiatgan@hotmail.com</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="info">
                                    <div class="head">Address</div>
                                    <div class="sub-title">Tangkak, Johor Malaysia.</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;