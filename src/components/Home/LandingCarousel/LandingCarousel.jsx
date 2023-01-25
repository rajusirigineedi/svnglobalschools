import { Button, Col, Row, Typography } from "antd";
import React from "react";
import classes from "./landingCarousel.module.css";
import "./landingCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Title } = Typography;
const LandingCarousel = () => {
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
              <div className={classes["school-name-logo"]}>
                <img alt="school" src="logo.png" height={100} />
                <h2>
                  Srivani Global
                  <br /> Schools
                </h2>
              </div>
            </Col>
            <Col
              className={classes["block-up--2"]}
              xs={14}
              sm={14}
              md={12}
              lg={12}
            >
              <Slider
                {...{
                  infinite: true,
                  speed: 2000,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 200,
                  // vertical: true,
                }}
                className={classes["what"]}
              >
                <div className={`${classes["as"]} ${classes["as--1"]}`}></div>
                <div className={`${classes["as"]} ${classes["as--2"]}`}></div>
                <div className={`${classes["as"]} ${classes["as--3"]}`}></div>
              </Slider>
            </Col>
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
              xs={14}
              sm={14}
              md={12}
              lg={12}
            >
              <Slider
                {...{
                  infinite: true,
                  slidesToShow: 1,
                  fade: true,
                  speed: 500,
                  autoplaySpeed: 1500,
                  slidesToScroll: 1,
                  autoplay: true,
                  // verticalSwiping: true,
                  // vertical: true,
                }}
                className={classes["what"]}
              >
                <div className={`${classes["as"]} ${classes["as--1"]}`}></div>
                <div className={`${classes["as"]} ${classes["as--2"]}`}></div>
                <div className={`${classes["as"]} ${classes["as--3"]}`}></div>
              </Slider>
            </Col>
            <Col
              className={classes["block-down--2"]}
              xs={10}
              sm={10}
              md={8}
              lg={8}
            >
              <Title level={4}>Join us for a Tour</Title>
            </Col>
            <Col
              className={classes["block-down--3"]}
              xs={0}
              sm={0}
              md={4}
              lg={4}
            >
              {/* <div
                style={{
                  backgroundColor: "green",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Slider
                  {...{
                    infinite: true,
                    speed: 1500,
                    rtl: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 800,
                    // vertical: true,
                  }}
                  className={classes["what"]}
                >
                  <div className={`${classes["as"]} ${classes["as--1"]}`}></div>
                  <div className={`${classes["as"]} ${classes["as--2"]}`}></div>
                  <div className={`${classes["as"]} ${classes["as--3"]}`}></div>
                </Slider>
              </div> */}
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
