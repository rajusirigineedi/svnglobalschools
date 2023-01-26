import React from "react";
import classes from "./AchievementBanner.module.css";

export const AchievementBanner = () => {
  return (
    <div className={classes["achievmentBanner"]}>
      <div style={{ backgroundColor: "black", paddingTop: "18rem" }}>
        <div className={classes["achievmentBanner-name"]}>
          <h1>Achievments</h1>
        </div>
      </div>
      <div className={classes["achievmentBanner-gallery"]}>block</div>
    </div>
  );
};
