import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  // Dark mode is the default (:root in index.css).
  // We only add .light-theme when the user explicitly requests light.
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
    }
    localStorage.setItem("theme", lightMode ? "light" : "dark");
  }, [lightMode]);

  return (
    <nav className="navbar">
      <h1 className="logo">GPAcer</h1>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#intro" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#featured" onClick={() => setMenuOpen(false)}>Featured</a></li>
        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      {/* Light / Dark Mode Toggle */}
      <button
        className="theme-toggle"
        onClick={() => setLightMode((v) => !v)}
        title={lightMode ? "Switch to dark mode" : "Switch to light mode"}
      >
        {lightMode ? "🌑" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;
