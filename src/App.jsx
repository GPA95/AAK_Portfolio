import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"; // Import global styles

function App() {
  return (
    <div className="app">
      <Navbar />
      <Intro />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
