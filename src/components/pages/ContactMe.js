import React from 'react';
import Form from '../Form';

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
                    <li><a href="mailto:elenaf.work@gmail.com"><img src="https://i.imgur.com/bAYdVtT.png" alt='email icon' style={styles} /></a></li>
                    <li><a href="https://github.com/elenafwork"><img src="https://i.imgur.com/tryNfW0.png" alt='gitHub icon' style={styles} /></a></li>
                    <li> <a href="https://www.instagram.com/elenaf_art/" ><img src="https://i.imgur.com/XsH0KVA.png" alt='linkdin icon' style={styles} /></a></li>
                    <li><a href="https://www.instagram.com/elenaf_art/"><img src="https://i.imgur.com/3GSfTF5.png" alt='instagram icon' style={styles} /></a></li>
                    </ul>
                
            </div>
        </div>
    )
}