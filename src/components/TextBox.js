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
        dark,
        name,
        required
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
                    name={name}
                    type={type || "text"}
                    placeholder={appendedClasses === "active" ? placeholder : ""}
                    className={`textbox ${appendedClasses}`}
                    onFocus={() => setAppendedClasses("active")}
                    onBlur={() => setAppendedClasses(value !== "" ? "filled" : "")}
                    onChange={(event) => onChange(event.target.value)}
                    required={required || false}
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