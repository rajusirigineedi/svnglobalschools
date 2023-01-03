import React from "react";
import classes from "./header.module.css";

export const Header = () => {
  return (
    <div className={classes["header"]}>
      <div>Srivani Global Schools</div>
      <div>
        <ul>
          <li>Home</li>
          <li>Academics</li>
          <li>About</li>
          <li>Admissions</li>
          <li>Events</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
