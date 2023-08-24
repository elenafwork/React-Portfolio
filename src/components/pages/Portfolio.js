import React from 'react';
import PortfolioCard from '../PortfolioCard';
import {projects} from '../../data/projects';

export default function Portfolio() {
    console.log('PROJECTS', {projects});
    
    return (
        <div className='main-container'>
        <h2>My Projects</h2>
         
            {projects.map((project) =>
            <PortfolioCard className="list-projects-item" key={project.id} project={project}
             />
             )}

        
      
        </div>
    )
} ; 