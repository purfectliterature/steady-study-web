import React from 'react';
import "./Footer.css";

import Contact from "./Contact";

export default (props) => {
    return (
        <footer>
            <div class="contact">
                <figure class="logo-white">
                    <img alt="Steady Study logo white" src={require("../assets/logo-white.svg")} />
                </figure>

                <div class="contact-form">
                    <h3>Be the first to know when we launch!</h3>

                    <Contact suffix="footer" dark />
                </div>
            </div>

            <div class="sponsors">
                <h4>Brought to you by</h4>

                <div class="sponsors-logo">
                    <a href="http://nus.edu.sg" target="_blank" rel="noreferrer noopener">
                        <img alt="NUS logo" src={require("../assets/nus-logo-white.png")} />
                    </a>

                    <a href="https://www.cs3216.com" target="_blank" rel="noreferrer noopener">
                        <img alt="CS3216 logo" src={require("../assets/cs3216-logo-white.png")} />
                    </a>
                </div>
            </div>
        </footer>
    )
}