import React from 'react';
import Form from '../Form';
import email from '../../images/icons8-email-64.png'
import gitHubIcon from '../../images/icons8-github-94.png';
import LinkdinIcon from '../../images/icons8-linkedin-64.png';
import instagram from '../../images/icons8-instagram-96.png';
const styles={
    
        height:'60px',
        width: '60px'
    
}
export default function Contact(){
    return (
        <div>
            <h1>Contact</h1>
            <Form/>
            <div className="content">
                
                    <ul>
                    <li><a href="mailto:elenaf.work@gmail.com"><img src={email} alt='email icon' style={styles} /></a></li>
                    <li><a href="https://github.com/elenafwork"><img src={gitHubIcon} alt='gitHub icon' style={styles} /></a></li>
                    <li> <a href="https://www.instagram.com/elenaf_art/" ><img src={LinkdinIcon} alt='linkdin icon' style={styles} /></a></li>
                    <li><a href="https://www.instagram.com/elenaf_art/"><img src={instagram} alt='instagram icon' style={styles} /></a></li>
                    </ul>
                
            </div>
        </div>
    )
}