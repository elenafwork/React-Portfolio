import React, { useState } from "react";
//import gaming from '../images/Gaming-cuate.png';
//import '../../images/gaming-styles.css'
import { Image, Col, Row, Container } from "react-bootstrap";
import {motion,} from 'framer-motion';
const styles={
    img: {
        height: '50wv',
        width: '50wh'
    }
}
export default function HomeImage() {
    const [rotate,setRotate]=useState(false)
    return(
        <>
        <motion.img src='https://i.imgur.com/zC60Bm5.png' alt="gaming-girl" className="w-100 "
        animate={{ x: [0,100], scale:1}} initial={{scale:0}}
        transition={{duration:3}}
        
        />
        </>
        
    )
}