import React from 'react';
import { Image, Card} from "react-bootstrap";
const styles = {
  card: {
    background: "rgb(216, 231, 244",
    flexWrap: "wrap",
    justifyContent: "spaceAround",
    width: '18rem'
    
  },
  p: {
    color: "black",
  }
};

export default function PortfolioCard(props){
    const pageLink=`${props.project.page}`;
    const gitHubLink=`${props.project.gitHubRepo}`;
    const progectImg=`${props.project.imgLink}`
    
    return (
      <Card border="primary"style={styles.card}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.project.name}</Card.Title>
        <Card.Text>
        {props.project.description}
        </Card.Text>
        <Card.Link href={pageLink}>Project </Card.Link>
        <Card.Link href={gitHubLink}>Project on GitHub</Card.Link>
      </Card.Body>
    </Card>
        
      
     
   
    );
}

