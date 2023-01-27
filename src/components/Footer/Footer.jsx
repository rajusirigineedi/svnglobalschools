import React from "react";
import classes from "./footer.module.css";
import { Col, Row } from "antd";
import {
  InstagramOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

{
  /* <Col
          type="flex"
          align="middle"
          span={12}
          className={classes["logoAlign"]}
        >
          <img src="logo.png" alt="school" height={100} />
        </Col> */
}

const Footer = (props) => {
  return (
    <Row
      className={classes["footer"]}
      // gutter={{ xs: 20, md: 20, lg: 40, xl: 40 }}
    >
      <Col xs={12} sm={12} md={14} lg={14} className={classes["copyright"]}>
        <div className={classes["copyright--text"]}>
          <div className={classes["copyright--icons"]}>
            <InstagramOutlined className={classes["iconSize"]} />
            <WhatsAppOutlined className={classes["iconSize"]} />
            <TwitterOutlined className={classes["iconSize"]} />
            <LinkedinOutlined className={classes["iconSize"]} />
            <YoutubeOutlined className={classes["iconSize"]} />
          </div>
          <h5>
            ©This website is subject to svg globals and it is under section 191c
            copyright policy copyright law, a copyright notice is a notice of
            statutorily prescribed form that informs users of the underlying
            claim to copyright ownership in a published work. Copyright is a
            form of protection provided by US law to authors of "original works
            of authorship".
          </h5>
        </div>
      </Col>
      <Col xs={12} sm={10} md={8} lg={8} className={classes["addressCenter"]}>
        <div className={classes["address-box"]}>
          <div>
            <h1>address</h1>
            <h3>magatapalli</h3>
            <h3>near sai baba temple</h3>
            <h4>east godavari</h4>
            <h5>phone no: 9632586323</h5>
            {/* <h5>email: svglobalschools@gmail.com</h5> */}
          </div>
        </div>
      </Col>
      <Col
        xs={0}
        sm={2}
        md={2}
        lg={2}
        className={classes["footer-lastblock"]}
      ></Col>
    </Row>
  );
};

export default Footer;
