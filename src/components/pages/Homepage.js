import React from "react";
//import Gaming from "../../images/Gaming-cuate.png";
//import '../../images/gaming-styles.css'
import {Col, Row, Container } from "react-bootstrap";
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
    
    
    return (
        <>
        <Container style={style.container}>
      <Row className="py-3 my-3">
        <Col xs={10} md={4}>
        <HomeImage className="w-100 "/>
        </Col>
        <Col xs={6} md={4}>
          <motion.h1  
          animate={{ x: [-200,0,200,0]}} >
            Hi there!
            </motion.h1>
          <hr />
          
        </Col>
      </Row>
    </Container>
        </>
    )
}