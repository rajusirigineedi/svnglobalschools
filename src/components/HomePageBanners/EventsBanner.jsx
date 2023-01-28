import React from "react";
import { EventCard } from "../Common/EventCard/EventCard";
import classes from "./EventsBanner.module.css";
import { Row, Col } from "antd";
import { RoundButtons } from "../Common/RoundButtons/RoundButtons";
import { EventImage } from "../Common/EventImage";
import b1 from "../../images/IntroImages/block1.png";
import b2 from "../../images/IntroImages/block2.jpg";
import b3 from "../../images/IntroImages/block3.jpg";
import { EventImageHolder } from "../Common/EventImageHolder/EventImageHolder";

export const EventsBanner = () => {
  return (
    <Row className={classes["eventsBanner"]}>
      <Col xs={4} sm={4} lg={2} style={{ backgroundColor: "whitesmoke" }}></Col>

      <Col className={classes["eventsBanner-gallery"]} xs={16} sm={16} lg={20}>
        <Row
          style={{
            height: "100%",

            padding: "4rem 0rem",
          }}
          align="top"
          gutter={[0, 16]}
        >
          <Col
            xs={24}
            sm={24}
            lg={18}
            style={{
              height: "70%",

              paddingRight: "3rem",
            }}
          >
            <EventImageHolder b1={b1} b2={b2} b3={b3} />
          </Col>
          <Col xs={24} sm={24} lg={6} style={{ height: "30%" }}>
            <div className={classes["navigation-buttons"]}>
              <RoundButtons bgColor={"red"} />
              <RoundButtons bgColor={"red"} bordered={true} />
            </div>
            <div className={classes["hash-text"]}>
              <h2>View all</h2>
              <h1># Events </h1>
            </div>
          </Col>
        </Row>
      </Col>
      <Col
        xs={4}
        sm={4}
        lg={2}
        style={{ backgroundColor: "whitesmoke", paddingBottom: "18rem" }}
      >
        <div className={classes["eventsBanner-name"]}>
          <h1>Events</h1>
        </div>
      </Col>
    </Row>
  );
};
