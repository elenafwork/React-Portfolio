import React from 'react';
import { Card} from "react-bootstrap";
import image from "../images/imgProject/projectQuiz.png";


export default function PortfolioCard(props){
    const pageLink=`${props.project.page}`;
    const gitHubLink=`${props.project.gitHubRepo}`;
    const projectImg=`${image}`
    
    return (
      <Card border="primary" className="card col-lg-3 col-md-5 col-sm-10 m-3 ">
      <Card.Img variant="top" src={image} className='my-2'/>
      <Card.Body>
        <Card.Title >{props.project.name}</Card.Title>
        <Card.Text>
        {props.project.description}
        </Card.Text>
        <Card.Link href={pageLink}>Project </Card.Link>
        <Card.Link href={gitHubLink}>Project on GitHub</Card.Link>
      </Card.Body>
    </Card>
        
      
     
   
    );
}

