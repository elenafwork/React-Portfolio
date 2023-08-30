import React from 'react';
import { Image, Card} from "react-bootstrap";
import PortfolioCard from '../PortfolioCard';
import projects from '../../data/projects';

export default function Portfolio() {
    console.log('PROJECTS', {projects});
    
    return (
        <div className='main-container'>
        <h1>My Projects</h1>
            <div className='d-flex justify-content-around py-3'>
                {projects.map((project) =>
            <PortfolioCard className="list-projects-item" key={project.id} project={project}
             />
             )}
            </div>
            

        
      
        </div>
    )
} ; 