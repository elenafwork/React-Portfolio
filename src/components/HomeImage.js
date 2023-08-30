import React, { useState } from "react";
import gaming from '../images/Gaming-cuate.png';
//import '../../images/gaming-styles.css'
import { Image, Col, Row, Container } from "react-bootstrap";
import {motion,} from 'framer-motion';
const styles={
    img: {
        height: '20wv',
        width: '20wh'
    }
}
export default function HomeImage() {
    const [rotate,setRotate]=useState(false)
    return(
        <>
        <motion.img src={gaming} alt="gaming-girl" className="w-100 "
        animate={{rotate: rotate ?360 : 0}}
        onClick={()=> {setRotate(!rotate)}}
        />
        </>
        
    )
}