import { EventImage } from "../EventImage";
import classes from "./EventImageHolder.module.css";

export function EventImageHolder({ b1, b2, b3, rightBordered }) {
  const borders = rightBordered
    ? {
        borderTopRightRadius: "3rem",
        borderBottomRightRadius: "3rem",
      }
    : {
        borderTopLeftRadius: "3rem",
        borderBottomLeftRadius: "3rem",
      };
  return (
    <div
      className={classes["event-image-holder"]}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: "1rem",
        ...borders,
        overflow: "hidden",
      }}
    >
      <EventImage b1={b1} />
      <EventImage b1={b2} />
      <EventImage b1={b3} />
    </div>
  );
}
