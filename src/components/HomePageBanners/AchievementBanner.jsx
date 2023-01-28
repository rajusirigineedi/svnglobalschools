import React from "react";
import { EventCard } from "../Common/EventCard/EventCard";
import classes from "./AchievementBanner.module.css";
import { Row, Col, Image } from "antd";
import { RoundButtons } from "../Common/RoundButtons/RoundButtons";
import b1 from "../../images/IntroImages/block1.png";
import b2 from "../../images/IntroImages/block2.jpg";
import b3 from "../../images/IntroImages/block3.jpg";
import { EventImage } from "../Common/EventImage";
import { EventImageHolder } from "../Common/EventImageHolder/EventImageHolder";

export const AchievementBanner = () => {
  return (
    <Row className={classes["achievmentBanner"]}>
      <Col
        // span={2}
        xs={4}
        sm={4}
        lg={2}
        style={{ backgroundColor: "black", paddingTop: "18rem" }}
      >
        <div className={classes["achievmentBanner-name"]}>
          <h1>Achievments</h1>
        </div>
      </Col>
      <Col
        className={classes["achievmentBanner-gallery"]}
        xs={16}
        sm={16}
        lg={20}
        // span={22}
      >
        <Row
          style={{
            height: "100%",
            padding: "4rem 0rem",
          }}
          align="bottom"
          gutter={[0, 16]}
        >
          <Col
            // span={6}
            xs={24}
            sm={24}
            lg={6}
            style={{
              height: "30%",
            }}
          >
            <div className={classes["hash-text"]}>
              <h2>View all</h2>
              <h1>
                <span>#</span>Achievements
              </h1>
            </div>
            <div className={classes["navigation-buttons"]}>
              <RoundButtons bgColor={"red"} />
              <RoundButtons bgColor={"red"} bordered={true} />
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            lg={18}
            style={{
              height: "70%",
              paddingLeft: "3rem",
            }}

            // span={18}
          >
            <EventImageHolder b1={b3} b2={b2} b3={b1} rightBordered={true} />
          </Col>
        </Row>
      </Col>
      <Col xs={4} sm={4} lg={2} style={{ backgroundColor: "black" }}></Col>
    </Row>
  );
};
