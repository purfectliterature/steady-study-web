import React from 'react';
import "./Home.css";

import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default (props) => {
    return (<>
        <section className="hero">
            <div className="hero-content">
                <img alt="Steady Study logo" className="logo" src={require("../assets/logo-coloured.svg")} />

                <h1>When everybody is steady, you can study calmly.</h1>

                <p>
                    The first platform organising study spaces at NUS, saving you time and hassle. Coming real soon!
                </p>

                <h3>Be the first to know when we launch!</h3>

                <Contact suffix="hero" />
            </div>

            <figure className="hero-illustration">
                <img alt="Person studying" src={require("../assets/studying.svg")} />

                <div className="badges">
                    <a href="#" target="_blank" rel="noreferrer noopener">
                        <img alt="Pre-order on App Store" src={require("../assets/badge-pre-order-apple.svg")} />
                    </a>

                    <a href="#" target="_blank" rel="noreferrer noopener">
                        <img alt="Pre-register on Play Store" src={require("../assets/badge-pre-register-play-store.png")} />
                    </a>
                </div>
            </figure>
        </section>

        <Feature
            title="By students, for students."
            description="The first platform organising study spaces at NUS, saving you time and hassle. Coming real soon! The first platform organising study spaces at NUS, saving you time and hassle. Coming real soon!"
            grey
            illustration={require("../assets/studying-girl.svg")}
            alt="Girl studying"
            direction="right"
            type="graphic"
        />

        <Feature
            title="By students, for students."
            description="The first platform organising study spaces at NUS, saving you time and hassle. Coming real soon! The first platform organising study spaces at NUS, saving you time and hassle. Coming real soon!"
            illustration={require("../assets/steady-study-qr-table.png")}
            alt="QR code on table"
            direction="left"
            type="photo"
        />

        <Feature
            title="Fair spaces for all."
            description="The first platform organising study spaces at NUS, saving you time and hassle. Coming real soon! The first platform organising study spaces at NUS, saving you time and hassle. Coming real soon!"
            grey
            illustration={require("../assets/lonely-cat.svg")}
            alt="Lonely cat"
            direction="right"
            type="graphic"
        />

        <Footer />
    </>);
}