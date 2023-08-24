import React from 'react';
export default function Navigation ({currentPage, handlePageChange}){
    return(
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  href="about"
                  onClick={() => handlePageChange('About')}
                  //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
        
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                  //  TODO: Add a comment explaining what this logic is doing
        
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                  Portfolio
                </a>
              </li>
              
              <li className="nav-item">
                <a
                  href="contact"
                  //  TODO: Add a comment explaining what this logic is doing
        
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Contact
                </a>
              </li>
            </ul>
    )
}