import React from 'react';
import './Featured.css';
import SGPA from '../assets/SGPA_2.png';

function Featured() {
  const highlights = [
    "TEDxIntegralUniversity – Web Development Volunteer",
    "Smart India Hackathon 2025 – Nominee",
    "Integral Prompt War - Third Place",
    "Cricket Analytics with AI • IITM Pravartak (AI for All)",
    "AI/ML using Python • IITM Pravartak (AI for All)",
    "Artificial Intelligence Fundamentals • IBM SkillsBuild",
    "Data Analytics in Python (Workshop) • Mindshare Yuva & IIT (BHU)",
    "Data Visualization: Empowering Business with Insights (Virtual Job Simulation) • Forage"
  ];

  return (
    <section id="featured" className="featured">
      <h2>FEATURED WORK</h2>

      <div className="featured-card">
        <div className="featured-content">
          <h3 className="featured-title">SGPA: Study Guide & Personal Assistant</h3>
          <p className="featured-problem">
            <strong>Problem:</strong> Students struggle to turn long notes, PDFs, and past questions
            into exam-ready understanding, and waste time finding clear explanations, summaries, and
            practice questions for multiple subjects.
          </p>
          <p className="featured-solution">
            <strong>Solution:</strong> A web application that acts as an AI-powered study companion
            that explains difficult concepts, summarizes notes/PDFs into exam-focused points, and
            provides a quiz workflow (generate–solve–evaluate) in a single chat-based interface.
          </p>

          <div className="tech-stack-chips">
            <span className="tech-chip">Python</span>
            <span className="tech-chip">Streamlit</span>
            <span className="tech-chip">Google Gemini 2.5 Flash API</span>
            <span className="tech-chip">PyPDF2</span>
          </div>

          <div className="featured-impact">
            <ul>
              <li>Used by 99+ unique students via the deployed app,
                helping classmates centralize concept explanations,
                summaries, and practice questions in one place.</li>
            </ul>
          </div>

          <div className="featured-links">
            <a href="https://sgpai-study-buddy.streamlit.app/" className="featured-link primary" onClick={(e) => e.preventDefault()}>Live Demo</a>
            <a href="https://github.com/GPA95/SGPA" className="featured-link secondary" onClick={(e) => e.preventDefault()}>GitHub Repo</a>
          </div>
        </div>

        <div className="featured-image-container">
          <img src={SGPA} alt="SGPA App" className="featured-image" />
        </div>
      </div>

      <div className="highlights-strip">
        <h4>Key Highlights</h4>
        <div className="highlights-marquee">
          {highlights.map((item, index) => (
            <span key={index} className="highlight-chip">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
