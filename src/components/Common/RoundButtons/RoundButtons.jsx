import React from "react";
import classes from "./RoundButtons.module.css";

export const RoundButtons = (props) => {
  const { bgColor, bordered, text } = props;
  return (
    <div
      className={classes["round-button"]}
      style={
        bordered
          ? { border: `2px solid ${bgColor}`, color: bgColor }
          : { backgroundColor: bgColor }
      }
    >
      {text}
    </div>
  );
};
