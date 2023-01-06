import { Button, Col, Image, Row, Typography } from "antd";
import React from "react";
// import classes from "../../../styles/home.module.css";
import classes from "./landingCarousel.module.css";

const { Title } = Typography;
const LandingCarousel = (props) => {
  return (
    <section className={classes["landing-carousel"]}>
      <Row
        style={{
          height: "100%",
        }}
      >
        <Col span={24} className={classes["block-up"]}>
          <Row style={{ height: "100%" }}>
            <Col
              className={classes["block-up--1"]}
              xs={10}
              sm={10}
              md={6}
              lg={6}
            >
              <h2>
                Srivani Global
                <br /> Schools
              </h2>
            </Col>
            <Col
              className={classes["block-up--2"]}
              xs={14}
              sm={14}
              md={12}
              lg={12}
            ></Col>
            <Col
              className={classes["block-up--3"]}
              xs={24}
              sm={24}
              md={6}
              lg={6}
            >
              <Title level={5}>
                The smartest way to use the Internet and the advanced features
                of www will always amuse me
              </Title>
              <Button className={classes["outline-button"]}>Contact Us</Button>
            </Col>
          </Row>
        </Col>
        <Col span={24} className={classes["block-down"]}>
          <Row style={{ height: "100%" }}>
            <Col
              className={classes["block-down--1"]}
              xs={18}
              sm={18}
              md={12}
              lg={12}
            >
              four
            </Col>
            <Col
              className={classes["block-down--2"]}
              xs={6}
              sm={6}
              md={6}
              lg={6}
            >
              <Title level={4}>Join us for a Tour</Title>
            </Col>
            <Col
              className={classes["block-down--3"]}
              xs={24}
              sm={24}
              md={6}
              lg={6}
            >
              six
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

// const LandingCarousel_v0 = (props) => {
//   return (
//     <section className={classes["intro-container"]}>
//       <h1 className={classes["school-title"]}>Srivani Global Schools</h1>
//     </section>
//   );
// };

export default LandingCarousel;
