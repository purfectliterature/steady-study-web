import React, { useState } from 'react';
import SendIcon from "@material-ui/icons/Send";
import "./Contact.css";

import TextBox from "./TextBox";
import Button from './Button';

export default (props) => {
    const {
        dark,
        suffix
    } = props;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <form className="contact-form" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />

            <div className="form">
                <TextBox
                    id={`name-${suffix}`}
                    label="Name"
                    placeholder="e.g. Uncle Soo"
                    value={name}
                    onChange={setName}
                    type="text"
                    dark={dark || false}
                    name={"name"}
                />

                <TextBox
                    id={`email-${suffix}`}
                    label="Email address"
                    placeholder="e.g. sooyj@comp.nus.edu.sg"
                    value={email}
                    onChange={setEmail}
                    type="email"
                    dark={dark || false}
                    name={"email"}
                />
            </div>

            <Button
                caption="Subscribe"
                onClick={() => {}}
                icon={<SendIcon />}
                dark={dark || false}
                type="submit"
            />
        </form>
    );
}