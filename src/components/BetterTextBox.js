import React, { useState } from 'react';
import "./BetterTextBox.css";

export default (props) => {
    const {
        id,
        placeholder,
        value,
        onChange,
        type,
        icon
    } = props;

    const [appendedClasses, setAppendedClasses] = useState("");

    return (
        <div className={`textbox-container ${appendedClasses}`}>
            {icon || null}

            <input
                id={id}
                name={id}
                type={type || "text"}
                className="textbox"
                placeholder={placeholder}
                onChange={(event) => onChange(event.target.value)}
                onFocus={() => setAppendedClasses("active")}
                onBlur={() => setAppendedClasses(value !== "" ? "filled" : "")}
            />
        </div>
    );
}