// import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";
import "./index.css"
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.css"
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume/Resume"
import "./components/Resume/Resume.css"


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const renderPage = () => {

    switch (currentPage) {
      case "about":
       return <About />
        

      case "contact":
        return <Contact />
        

      case "projects":
       return <Projects />
        

      case "resume":
        return <Resume />
       

      default:
        break
    }
  }
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
