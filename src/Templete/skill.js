import React from 'react';
import '../App.css';

function Skill(){
    return(
        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title">My Skills</h2>
                <div class="serv-content">
                    <div class="card">
                        <div class="box">
                            <i class="fas fa-code"></i>
                            <div class="text">Web & Mobile Application Development</div>
                            <p>Major in web application programming knowledge. For example, ASP.net, MVC, PHP, ReactJS and many more. 
                                Basic knowledge about mobile application programming knowledge. Used Kotlin for my FYP, and self-taught React Native for personal project.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <div class="text">E-commerce</div>
                                <p>Interested in Ecommerce industry. Self-taught on how to setup up and maintain an online e-commerce store.
                                     Experienced in digital marketing, SEO, dealing with customer and supplier and many more.</p>
                        </div>
                    </div>
                    <div class="card">
                            <div class="box">
                                    <i class="fa fa-cogs"></i>
                                    <div class="text">Others</div>
                                    <p>Experienced in Microsoft Office. Interpersonal Skills such as email writing skill and communication skill. APM Tools such as SPLUNK, Nagios and Dynatrace.</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;