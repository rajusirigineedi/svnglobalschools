import React from "react";
import classes from './CustomButton.module.css';
const CustomButton = (props) => {
    return (
        <div>
            <button
                style={{
                    color: props.styles.color,
                    backgroundColor: props.styles.backgroundColor,
                    height: props.styles.height || "32px",
                    width: props.styles.width || "100%",
                    border: props.styles.border || "",
                    borderRadius: props.styles.borderRadius || "6px",
                    cursor:'pointer'
                }}
                onClick={props.onClick}
            >
                {props.children}</button>
        </div>
    );
};

export default CustomButton;