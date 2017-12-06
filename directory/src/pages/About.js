import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () =>
  <div>
    <Hero backgroundImage="https://gdb.voanews.com/7416C155-56BB-404D-A11C-E74E130DA0FC_cx0_cy4_cw0_w1023_r1_s.jpg">
      <h1>New York Time Search</h1>
      <h2>Search and Save New York Times Articles</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To The New York Times Search!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
           This application allows you to search the New York Times' for Articles in their Archives.
           It also allows you to save those articles to read later. T
          </p>
        </Col>
      </Row>
    </Container>
  </div>;

export default About;
