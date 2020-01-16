import React from 'react';
import './button.css';

const styles = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
    //"disabled"
];


const sizes = [
    "btn--medium",
    "btn--small",
];





export const Button =  ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
}) => {

    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];

    //const disabled = styles.includes("disabled") ? "disabled" :"";

    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];
    return (
        <button className = {`btn ${checkButtonStyle} ${checkButtonSize} `} onClick={onClick} type={type}>
            {children}
        </button>
    )
}