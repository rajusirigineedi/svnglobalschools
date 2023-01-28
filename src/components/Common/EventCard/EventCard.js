import React from "react";
import classes from "./EventCard.module.css";
import b1 from "../../../images/IntroImages/block1.png";

import { Button, Space } from "antd";

export const EventCard = (props) => {
  const { type } = props;
  return (
    <div className={classes["achievmentCard"]}>
      <img src={b1} alt={"some pic"} />
      {/* <Space direction="vertical" size={"middle"}>
        <h2>2nd prize in Spell Bee</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          possimus saepe quos, neque quibusdam distinctio ab laudantium unde
          accusamus repellendus tempore iusto quasi eum reiciendis ipsum ipsa
          rerum, quae molestiae?
        </p>
      </Space> */}
    </div>
  );
};
