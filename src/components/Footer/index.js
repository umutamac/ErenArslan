import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="page-footer valign-wrapper">
            <div className="contact valign-wrapper">
                <div className="contact-left">
                    <p>If you have any questions, or just want to say hello, you can always reach out to me using:
                    </p>
                </div>
                <div className="icons-container-right flex-container">
                    <a href="https://www.linkedin.com/in/umutalptekin" target="_blank" rel="noopener noreferrer">
                        <div className="icon icon-linkedin hoverable"></div>
                    </a>
                    <a href="https://github.com/umutamac" target="_blank" rel="noopener noreferrer">
                        <div className="icon icon-github hoverable"></div>
                    </a>
                    <a href="mailto:amacalptekin@gmail.com" target="_blank" >
                        <div className="icon icon-email hoverable"></div>
                    </a>
                </div>
            </div>

            <div id="attributeArea">
                <span>
                    Background vector created by pikisuperstar - <a href="https://www.freepik.com/vectors/background" target="_blank" rel="noopener noreferrer">www.freepik.com</a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;