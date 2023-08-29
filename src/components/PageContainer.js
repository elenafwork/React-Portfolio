import React, { useState } from "react";
import Header from "./Header";
//import Navigation from './Navigation';
import Footer from "./Footer";
import About from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/ContactMe";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  function renderPage() {
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
      {renderPage()}
      <Footer />
    </>
  );
}
