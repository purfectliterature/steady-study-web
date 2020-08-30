import React from 'react';
import "./Feature.css";

export default (props) => {
    const {
        title,
        description,
        grey,
        illustration,
        alt,
        direction,
        type
    } = props;

    return (
        <div className={`feature-container ${grey ? "grey" : ""}`}>
            <section className={`feature ${direction}`}>
                <figure className={`illustration ${type}`}>
                    <img alt={alt} src={illustration} />
                </figure>

                <div className="content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </section>
        </div>
    )
}