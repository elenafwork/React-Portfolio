import React, {useState} from 'react';

import Navigation from './Navigation';


export default function Header({currentPage, handlePageChange}){
 
    return (
        <header>
            <h1> Elena Fadeeva</h1>
            <Navigation currentPage={currentPage}  handlePageChange={handlePageChange} />
        </header>
    )
}