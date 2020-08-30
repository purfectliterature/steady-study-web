import React, { useState } from 'react';
import "./TextBox.css";

export default (props) => {
    const {
        id,
        label,
        placeholder,
        value,
        onChange,
        multiline,
        type,
        dark
    } = props;

    // const [focused, setFocused] = useState(false);
    const [appendedClasses, setAppendedClasses] = useState("");

    const renderInputField = () => {
        if (multiline) {
            return (
                <textarea
                    id={id}
                    name={id}
                    placeholder={appendedClasses === "active" ? placeholder : ""}
                    className={`textbox ${appendedClasses}`}
                    onFocus={() => setAppendedClasses("active")}
                    onBlur={() => setAppendedClasses(value !== "" ? "filled" : "")}
                    onChange={(event) => onChange(event.target.value)}
                    style={{ minHeight: "5rem" }}
                ></textarea>
            );
        } else {
            return (
                <input
                    id={id}
                    name={id}
                    type={type || "text"}
                    placeholder={appendedClasses === "active" ? placeholder : ""}
                    className={`textbox ${appendedClasses}`}
                    onFocus={() => setAppendedClasses("active")}
                    onBlur={() => setAppendedClasses(value !== "" ? "filled" : "")}
                    onChange={(event) => onChange(event.target.value)}
                />
            );
        }
    }
    
    return (
        <div className={`textbox-container ${appendedClasses} ${dark ? "dark" : ""}`}>
            <label htmlFor={id} onClick={() => setAppendedClasses("active")}>{label}</label>
            {renderInputField()}
        </div>
    );
}