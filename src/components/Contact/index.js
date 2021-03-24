import React from "react";
import "./style.css";

function Contact() {
    return(
        <div>
            <div className="ch-resume">
                <img id="ch-resume-bg" src="images/background/ch-resume-bg.png" alt="resume bg"/>
                <div id="resume-content">
                    <h1 className="mb-2 text-center text-light ch-section-title">RESUME</h1>
                    <div className="text-center">
                        <form method="get" action="/docs/CH-Resume.pdf" target="_blank">
                            <button type="submit" className="btn submitBtn">Download Resume Here!</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="ch-section" id="ch-contact">
                <div className="container-fluid">
                
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            <h1 className="mb-4 ch-section-title">CONTACT ME</h1>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center">

                        <div className="col-12 col-xl-4 mx-3" id="formCol">

                            <h3 className="text-center form-msg">SEND ME A MESSAGE</h3>

                            <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8"
                                action="https://formspree.io/f/mvovalyy" method="post">

                                <fieldset id="fs-frm-inputs">
                                    <input className="ch-form form-control h-75 my-2 fullNameBox" type="text" name="name"
                                        id="full-name" placeholder="Full Name" required="" />
                                    <input className="ch-form form-control h-75 my-2 emailBox" type="email" name="_replyto"
                                        id="email-address" placeholder="Email Address" required="" />
                                    <textarea className="ch-form form-control h-75 my-2 msgBox" rows="5" name="message" id="message"
                                        placeholder="Your Message" required=""></textarea>
                                    <input className="ch-form form-control h-75 mt-2" type="hidden" name="_subject"
                                        id="email-subject" value="Contact Form Submission" />
                                </fieldset>
                                <input type="submit" className="btn btn-lg submitBtn" value="Submit" />

                            </form>

                        </div>

                        <div className="col-12 col-xl-4 mx-3" id="linksCol">
                            <a href="tel:+12108230745">
                                <button
                                    className="btn btn-lg contact-btn justify-content-center align-items-center mt-5 mb-4 callBtn">
                                    <i className="fas fa-phone text-left shadow-none"></i>
                                    +1 2108230745
                                </button>
                            </a><br />
                            <a href="mailto: calebhopkins@outlook.com">
                                <button className="btn btn-lg contact-btn align-items-center emailBtn">
                                    <i className="fas fa-envelope text-left shadow-none"></i>
                                    calebhopkins@outlook.com
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;