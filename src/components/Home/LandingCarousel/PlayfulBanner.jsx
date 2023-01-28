import React from "react";
import classes from "./PlayfulBanner.module.css";
import { Row, Col } from "antd";

const PlayfulBanner = (props) => {
  return (
    <div className={classes["playful-banner"]}>
      <Row style={{ height: "100%", padding: "0rem 8rem" }} align="middle">
        <Col xs={24} sm={24} md={10} lg={10}>
          <p className={classes["success-story-title"]}>Our success stories</p>
        </Col>
        <Col xs={24} sm={24} md={14} lg={14}>
          <div className={classes["success-story"]}>
            <div className={classes["success-story-class"]}>
              <h1>VII</h1>
              <h5>std</h5>
            </div>
            <div className={classes["story-matter"]}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  hic nam repellendus esse in ipsum pariatur, temporibus
                  reiciendis est quae natus eveniet perspiciatis illo sed
                  tempora! Repudiandae epellendus esse in ipsum pariatur,
                  temporibus reiciendis est quae natus eveniet perspiciatis illo
                  sed tempora! Repudiandae in hic corporis. andh asdi ekkd ap
                </p>
              </div>
              <p className={classes["story-author"]}>KS. chatianlly</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PlayfulBanner;
