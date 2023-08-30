import React from 'react';
import "react-bootstrap";
import PortfolioCard from '../PortfolioCard';
import projects from '../../data/projects';
//import images from "../../images/portfolio-face.JPG";
export default function Portfolio() {
    console.log('PROJECTS', {projects});
    
    return (
        <div className='main-container' >
        <h1 className='p-3'>Featuring projects</h1>
            <div className='row col-12 p-3 '>
                {projects.map((project) =>
            <PortfolioCard className="list-projects-item" key={project.id} project={project}
             />
             )}
            </div>
            

        
      
        </div>
    )
} ; 