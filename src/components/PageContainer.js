import React, { useState } from "react";
import Header from "./Header";
//import Navigation from './Navigation';
import Footer from "./Footer";
import About from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/ContactMe";
import Home from './pages/Homepage'

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  function renderPage() {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main >
        {renderPage()}
      </main>
      
      <div>
            <ul>
                <li>
                    <a href="https://storyset.com/computer">Computer illustrations by Storyset</a>
                </li>
                <li>
                     <a target="_blank" href="https://icons8.com/icon/32323/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </li>
            </ul>
            
       </div>
      <Footer />
    </>
  );
}
