import React from 'react';
import "./Footer.css";

import Contact from "./Contact";

export default (props) => {
    return (
        <footer>
            <div className="contact">
                <figure className="logo-white">
                    <img alt="Steady Study logo white" src={require("../assets/logo-white.svg")} />
                </figure>

                <div className="contact-form">
                    <h3>Be the first to know when we launch!</h3>

                    <Contact suffix="footer" dark />
                </div>
            </div>

            <div className="sponsors">
                <h4>Brought to you by</h4>

                <div className="sponsors-logo">
                    <a href="http://nus.edu.sg" target="_blank" rel="noreferrer noopener">
                        <img alt="NUS logo" src={require("../assets/nus-logo-white.png")} />
                    </a>

                    <a href="https://www.cs3216.com" target="_blank" rel="noreferrer noopener">
                        <img alt="CS3216 logo" src={require("../assets/cs3216-logo-white.png")} />
                    </a>
                </div>
            </div>

            <p class="copyright">
                Graphic of person studying on a desk and girl studying in library are created by <a href="https://stories.freepik.com/home" target="_blank" rel="noreferrer noopener">Freepik Stories</a>.<br/><br/>
                Graphic of cat silhouettes are attributed to: <a href="https://www.freepik.com/vectors/party">Party vector created by freepik - www.freepik.com</a>.
            </p>
        </footer>
    )
}