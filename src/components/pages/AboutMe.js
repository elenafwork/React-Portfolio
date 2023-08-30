import React from "react";

import { Image, Col, Row, Container } from "react-bootstrap";
const style = {
  container: {
    background: "rgb(216, 231, 244",
    flexWrap: "wrap",
    justifyContent: "spaceAround",
    
    
  },
  p: {
    color: "black",
  }
};

export default function About() {
  return (
    <Container style={style.container}>
      <Row className="py-3 my-3">
        <Col xs={6} md={4}>
          <Image src="https://i.imgur.com/gTgpSup.jpg" rounded className="w-100 " />
        </Col>
        <Col xs={6} md={4}>
          <h1>About</h1>
          <hr />
          <p style={style.p}>
            Former Oilfield Engineer with MS in Chemical Engineering,
            self-taught in Fine Arts and with a huge passion in Web Developing.
            I'm artist and creator and Coding is both art and technology where
            we can create and see a final product of our labor.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
