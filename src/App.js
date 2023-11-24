import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navigation";
import Intro from "./components/Intro/Intro";
import About from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/ContactMe/Contact";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/aboutMe" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;