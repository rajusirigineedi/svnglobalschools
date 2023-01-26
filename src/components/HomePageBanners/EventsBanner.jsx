import React from "react";
import classes from "./EventsBanner.module.css";

export const EventsBanner = () => {
  return (
    <div className={classes["eventsBanner"]}>
      <div className={classes["eventsBanner-gallery"]}>block</div>
      <div style={{ backgroundColor: "whitesmoke", paddingBottom: "0rem" }}>
        <div className={classes["eventsBanner-name"]}>
          <h1>Events & Activities</h1>
        </div>
      </div>
    </div>
  );
};
