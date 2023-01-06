import { Button, Col, Row, Space, Typography } from "antd";
import LandingCarousel from "../components/Home/LandingCarousel/LandingCarousel";
import PlayfulBanner from "../components/Home/LandingCarousel/PlayfulBanner";
import classes from "../styles/home.module.css";

const { Title } = Typography;
export const Home = () => {
  return (
    <div>
      <LandingCarousel />
      <div style={{ height: "50vh", backgroundColor: "whitesmoke" }}></div>

      <section className={classes["caurosel-container"]}>
        <Row style={{ height: "100%" }}>
          <Col
            xs={24}
            sm={24}
            md={16}
            lg={16}
            xl={16}
            className={classes["important-news"]}
          >
            <Space direction="vertical">
              <Space>
                <span className={classes["blockquote-big"]}>"</span>
                <Title level={3} style={{ color: "white" }}>
                  Empowering students to reach their full potential Inspiring
                  minds, shaping the future Where education meets opportunity
                  Nurturing creativity and critical thinking
                </Title>
              </Space>
              <Title level={5} style={{ color: "rgb(139, 139, 139)" }}>
                Students to reach their full potential Inspiring minds, shaping
                the future Where education meets opportunity Nurturing
                creativity and critical thinking
              </Title>
            </Space>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}
            className={classes["application-notifications"]}
          >
            <Space direction="vertical">
              <Title level={3}>
                Applications for the academic year{" "}
                <span style={{ fontWeight: "900", fontSize: "3.6rem" }}>
                  2022-2023{" "}
                </span>{" "}
                are open ...
              </Title>
              <Button className={classes["outline-button"]}>Contact Us</Button>
            </Space>
          </Col>
        </Row>
      </section>
      <div style={{ height: "50vh", backgroundColor: "black" }}></div>
      <div style={{ height: "40vh", backgroundColor: "white" }}></div>

      <PlayfulBanner />
    </div>
  );
};
