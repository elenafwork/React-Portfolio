import React from 'react';
//import Pdf from '../Documents/CV.pdf'

export default function Navigation ({currentPage, handlePageChange}){
    return(
          <nav>
            <ul className="nav ">
            <li className="nav-item">
                <a
                  // href="#Home"
                  onClick={() => handlePageChange('Home')}
                       
                  className={currentPage === 'Home' ? 'nav active' : 'nav'}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  // href="#about"
                  onClick={() => handlePageChange('About')}
                       
                  className={currentPage === 'About' ? 'nav active' : 'nav'}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  // href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                  
                  className={currentPage === 'Portfolio' ? 'nav active' : 'nav'}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
              <a href ='https://drive.google.com/file/d/1CKI52ef5Xs0dunyK7Btgq9PCg1ZE3Tcf/view?usp=sharing'>Resume</a>
              </li>
              <li className="nav-item">
                <a
                  // href="#contact"
                  
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav active' : 'nav'}
                >
                  Contact
                </a>
              </li>
            </ul>
           </nav> 
    )
}