import React from "react";
import classes from "./NumbersBanner.module.css";
import { Row, Col } from "antd";

export const NumbersBanner = () => {
  return (
    <div className={classes["numbers-banner"]}>
      <Row style={{ height: "100%" }}>
        <Col
          className={classes["numbers-banner--cols"]}
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <div className={classes["numbers-banner--number"]}>
            <h1>
              <span>#</span>1
            </h1>
            <p>School in MKP powered by LEAD</p>
          </div>
        </Col>
        <Col
          className={classes["numbers-banner--cols"]}
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <div className={classes["numbers-banner--number"]}>
            <h1>
              <span>#</span>25
            </h1>
            <p>Qualified staff in various departments</p>
          </div>
        </Col>
        <Col
          className={classes["numbers-banner--cols"]}
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <div className={classes["numbers-banner--number"]}>
            <h1>
              <span>#</span>220+
            </h1>
            <p>Happy students and still counting</p>
          </div>
        </Col>
        <Col
          className={classes["numbers-banner--cols"]}
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <div className={classes["numbers-banner--number"]}>
            <h1>
              <span>#</span>10:1
            </h1>
            <p>Student to teacher ratio</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
