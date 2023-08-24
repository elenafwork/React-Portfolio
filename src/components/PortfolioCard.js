import React from 'react';


export default function PortfolioCard(props){
    const pageLink=`${props.project.page}`;
    const gitHubLink=`${props.project.gitHubRepo}`;
    
    
    return (
         <div className="card" >
     <div className="card-body">
       <h5 className="card-title">{props.project.name}</h5>
      <p className="card-text">{props.project.description}</p>
       <a href={pageLink} className="card-link">Project </a>
       <a href={gitHubLink} className="card-link">Project on GitHub</a>
     </div>
   </div>
    );
}

