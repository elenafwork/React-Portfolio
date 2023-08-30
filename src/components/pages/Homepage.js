import React from "react";
import gaming from '../../images/Gaming-cuate.png';
//import '../../images/gaming-styles.css'
import { Image, Col, Row, Container } from "react-bootstrap";
import {motion} from 'framer-motion';
import HomeImage from "../HomeImage"
const style = {
    container: {
      
      flexWrap: "wrap",
      justifyContent: "spaceAround",
      
      
    },
    p: {
      color: "black",
    }
  };
export default function Home(){
    //console.log({svgAnimation});
    
    return (
        <>
        <Container style={style.container}>
      <Row className="py-3 my-3">
        <Col xs={10} md={4}>
        <HomeImage className="w-100 "/>
        </Col>
        <Col xs={6} md={4}>
          <h1>Hi there!</h1>
          <hr />
          <p style={style.p}>
            
          </p>
        </Col>
      </Row>
    </Container>
        </>
    )
}