import React from "react";
import classes from "./footer.module.css";
import { Col, Row} from 'antd';
import {
  InstagramOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeOutlined
} from '@ant-design/icons';
import { Input } from 'antd';

const Footer = (props) => {
  return (
    <div className={classes["footer"]}>
      <Row>
        <Col type="flex" align="middle" span={12} className={classes["logoAlign"]}>
          <img src="logo.png" height={100}/>
        </Col>
        <Col span={12} className={classes["addressCenter"]}>
          <h1>address</h1>
          <h3>magatapalli</h3>  
          <h3>near sai baba temple</h3> 
          <h4>east godavari</h4>
          <h5>phone no: 9632586323</h5>
          <h5>email: svglobalschools@gmail.com</h5>       
        </Col>
      </Row>

      <Row>
        <Col type="flex" align="middle" span={12} className={classes["iconMargin"]}>
          <InstagramOutlined className={classes["iconSize"]}/>
          <WhatsAppOutlined className={classes["iconSize"]}/>
          <TwitterOutlined className={classes["iconSize"]}/>
          <LinkedinOutlined className={classes["iconSize"]}/>
          <YoutubeOutlined className={classes["iconSize"]}/>
        </Col>
        <Col>
        </Col>
      </Row>

      <Row>
        <Col type="flex" align="middle" span={10} className={classes["copyright"]}>
          <h5>©This website is subject to svg globals and it is under section 191c copyright policy copyright law, a copyright notice is a notice of statutorily prescribed form that informs users of the underlying claim to copyright ownership in a published work. Copyright is a form of protection provided by US law to authors of "original works of authorship".</h5>
        </Col>
        <Col span={9} type="flex" align="middle" className={classes["footerSvg"]}>
          <img src="undraw_family_vg76.svg" height={300} />
        </Col>
        <Col className={classes["inputAlign"]}>
          <h3>Enter your Email Id to subscribe:-</h3>
          <Input placeholder="Basic usage" />;
        </Col>
      </Row>
    </div>
  ) 
};

export default Footer;
