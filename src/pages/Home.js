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

                <h1>Because your time is for studying, not finding seats.</h1>

                <p>
                    The first platform organising study spaces at NUS, helping you finding seats faster and smarter.
                </p>

                <h3>Be the first to know when Steady Study launches!</h3>

                <Contact suffix="hero" />
            </div>

            <figure className="hero-illustration">
                <img alt="Person studying" src={require("../assets/studying.svg")} />

                <div className="badges">
                    <a href="https://apple.com" target="_blank" rel="noreferrer noopener">
                        <img alt="Pre-order on App Store" src={require("../assets/badge-pre-order-apple.svg")} />
                    </a>

                    <a href="https://play.google.com" target="_blank" rel="noreferrer noopener">
                        <img alt="Pre-register on Play Store" src={require("../assets/badge-pre-register-play-store.png")} />
                    </a>
                </div>
            </figure>
        </section>

        <Feature
            title="A smarter way to study on campus."
            description={<>
                Steady Study provides you with real-time seat availabilities, floor maps, and bookings information for the study spaces at NUS. You can view available seats before taking that long travel to campus.<br/><br/>
                
                You can also make bookings at least a day before, so you can study without worrying that your seat might be taken.
            </>}
            grey
            illustration={require("../assets/studying-girl.svg")}
            alt="Girl studying"
            direction="right"
            type="graphic"
        />

        <Feature
            title="Robust check-in system."
            description={<>
                After Steady Study officially launches, QR codes will be pasted on seats in select study spaces across campus. A simple 3-second scan entitles you to the seat, or starts your booking.<br/><br/>
            </>}
            illustration={require("../assets/steady-study-qr-table.png")}
            alt="QR code on table"
            direction="left"
            type="photo"
        />

        <Feature
            title="Fair spaces for all."
            description={<>
                The Steady Study cat comes and sleeps on lonely taken-but-unoccupied seats. With Steady Study, seats are organised, and these seats will be opened for endeavouring students like you!<br/><br/>
                
                <span style={{ fontSize: "11pt" }}>(and prevent the cat from getting fat from sleeping all the time)</span>
            </>}
            grey
            illustration={require("../assets/lonely-cat.svg")}
            alt="Lonely cat"
            direction="right"
            type="graphic"
        />

        <Footer />
    </>);
}