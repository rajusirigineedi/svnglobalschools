import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={classes["header"]}>
        <div>Srivani Global Schools</div>
        <div>
          <ul>
            <li>
              <Link className={classes["Link"]} to="/">Home</Link>
            </li>
            <li>
              <Link className={classes["Link"]} to="/academics">Academics</Link>
            </li>
            <li>
              <Link className={classes["Link"]} to="/about">About</Link>
            </li>
            <li>
              <Link className={classes["Link"]} to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link className={classes["Link"]} to="/events">Events</Link>
            </li>
            <li>
              <Link className={classes["Link"]} to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
