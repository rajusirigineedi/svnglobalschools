import { Button, Col, Row, Space, Typography } from "antd";
import LandingCarousel from "../components/Home/LandingCarousel/LandingCarousel";
import PlayfulBanner from "../components/Home/LandingCarousel/PlayfulBanner";
import { AchievementBanner } from "../components/HomePageBanners/AchievementBanner";
import { EventsBanner } from "../components/HomePageBanners/EventsBanner";
import { NumbersBanner } from "../components/HomePageBanners/NumbersBanner";
import classes from "../styles/home.module.css";

const { Title } = Typography;
export const Home = () => {
  return (
    <div>
      <LandingCarousel />
      <div style={{ height: "40vh", backgroundColor: "whitesmoke" }}>
        <NumbersBanner />
      </div>

      <section className={classes["caurosel-container"]}>
        <Row style={{ height: "100%" }}>
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            lg={{ span: 16, order: 1 }}
            md={{ span: 16, order: 1 }}
            xl={{ span: 16, order: 1 }}
            className={classes["important-news"]}
          >
            <Space
              direction="vertical"
              className={classes["important-news--box"]}
            >
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
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            lg={{ span: 8, order: 2 }}
            md={{ span: 8, order: 2 }}
            xl={{ span: 8, order: 2 }}
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
      <div style={{ height: "60vh", backgroundColor: "black" }}>
        <AchievementBanner />
      </div>
      <div style={{ height: "60vh", backgroundColor: "black" }}>
        <EventsBanner />
      </div>
      <div style={{ height: "60vh", backgroundColor: "whitesmoke" }}></div>
      <PlayfulBanner />
      <div style={{ height: "60vh", backgroundColor: "whitesmoke" }}></div>
    </div>
  );
};
