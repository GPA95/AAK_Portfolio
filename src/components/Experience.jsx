import React, { useState } from "react";
import "./Experience.css";
import Sabudh from "../assets/sabudh.jpg";
import STPI from "../assets/STPI.jpg";
import edunetLogo from "../assets/edunet.jpg";
import ibmLogo from "../assets/ibm_logo.png";
import aicteLogo from "../assets/AICTE.png";
import irlLogo from "../assets/irl_logo.png";
import flyrankLogo from "../assets/flyrank.png";
import TedxLogo from "../assets/tedxintegraluniversity_logo.jpg";

const experiences = [
  {
    title: "FlyRank AI",
    role: "Backend AI Engineering Intern",
    sub: "Backend Development",
    time: "July 2026 – Present",
    bullets: [
      "Building RAG system, agentic workflows and APIs for AI-powered content features, integrating databases with LLMs.",
    ],
    images: [flyrankLogo],
  },
  {
    title: "Sabudh Foundation (STPI Program)",
    role: "Part-Time Data Science Intern",
    sub: "Data Science (DL & Dataiku)",
    time: "July 2026 – Present",
    bullets: [
      "Focusing on Deep Learning workflows, experimenting with neural network models for tabular and text data.",
      "Exploring end-to-end data pipelines and model deployment using Dataiku, combining data preparation, experimentation and reporting in a unified platform.",
    ],
    images: [Sabudh, STPI],
  },
  {
    title: "TEDxIntegralUniversity 2026",
    role: "Web Development Volunteer",
    sub: "Website Development",
    time: "April 2026 – Present",
    bullets: [
      "Contributing to the TEDxIntegralUniversity 2026 website in collaboration with the organizing team.",
    ],
    images: [TedxLogo],
  },
  {
    title: "Sabudh Foundation (STPI Program)",
    role: "Part-Time Data Science Intern",
    sub: "Data Science (ML & NLP)",
    time: "January 2026 – June 2026",
    bullets: [
      "Gained hands-on experience applying Machine Learning and Natural Language Processing with Python and core data science libraries.",
      "Strengthened understanding of data science workflows, model training, and analytical problem-solving through structured coursework and practical assignments.",
    ],
    images: [Sabudh, STPI],
  },
  {
    title: "Edunet Foundation - AICTE Internship (with IBM SkillsBuild)",
    role: "AI & Cloud Intern",
    sub: "AI & Cloud Technologies",
    time: "September 2025 – October 2025",
    bullets: [
      "Developed an AI-Powered academic assistant for easier learning and concept understanding.",
      "Learnt about AI Ethics, GenAI, Prompt Engg., ML, DL, NLP and CV through IBM SkillsBuild.",
    ],
    images: [edunetLogo, aicteLogo, ibmLogo],
  },
  {
    title: "Integral Robotics Lab, Integral University Lucknow",
    role: "Robotics Intern",
    sub: "Robotics",
    time: "August 2024 – November 2024",
    bullets: [
      "Contributed to the stable motion control and WiFi-connected teleoperation of the Pendulum‑Driven Spherical Robot project.",
      "Presented the project during the NBA accreditation visit, after which the department received accreditation for 2025–2028.",
    ],
    images: [irlLogo],
  },
];

/* ── Desktop: compact strip card ─────────────────────────────────────── */
const ExperienceStripCard = ({ exp, isActive, onClick }) => (
  <button
    className={`exp-strip-card${isActive ? " exp-strip-card--active" : ""}`}
    onClick={onClick}
    role="tab"
    aria-selected={isActive}
    aria-label={`${exp.title} – ${exp.role}`}
  >
    <div className="exp-strip-logo-row">
      {exp.images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${exp.title} logo`}
          className="exp-strip-logo"
        />
      ))}
    </div>
    <p className="exp-strip-title">{exp.title}</p>
    <p className="exp-strip-role">{exp.role}</p>
    <span className="exp-strip-sub">{exp.sub}</span>
    <span className="exp-strip-time">{exp.time}</span>
  </button>
);

/* ── Desktop: expanded detail card (first logo only) ─────────────────── */
const ExperienceDetail = ({ exp }) => (
  <div className="exp-detail-card">
    <div className="exp-detail-header">
      <div className="exp-detail-logo-wrapper">
        <img src={exp.images[0]} alt={`${exp.title} logo`} />
      </div>
      <div className="exp-detail-meta">
        <h3 className="exp-detail-title">{exp.title}</h3>
        <h4 className="exp-detail-role">{exp.role}</h4>
        <span className="exp-detail-sub">{exp.sub}</span>
        <span className="exp-detail-time">{exp.time}</span>
      </div>
    </div>
    <ul className="exp-detail-bullets">
      {exp.bullets.map((bullet, idx) => (
        <li key={idx}>{bullet}</li>
      ))}
    </ul>
  </div>
);

/* ── Mobile: collapsible vertical card ───────────────────────────────── */
const MobileExperienceCard = ({ exp }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`timeline-item${open ? " timeline-item--open" : ""}`}>
      <div className="timeline-logos">
        {exp.images.map((img, i) => (
          <div key={i} className="logo-wrapper">
            <img src={img} alt={`${exp.title} logo ${i + 1}`} />
          </div>
        ))}
      </div>
      <div
        className="timeline-content"
        onClick={() => setOpen((o) => !o)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen((o) => !o)}
        aria-expanded={open}
      >
        <h3>{exp.title}</h3>
        <h4>Role: {exp.role}</h4>
        <h4>{exp.sub}</h4>
        <span className="timeline-time">{exp.time}</span>
        <span className="mobile-toggle-hint">
          {open ? "▲ Hide details" : "▼ Show details"}
        </span>
        <ul className={`timeline-bullets${open ? " bullets--visible" : ""}`}>
          {exp.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ── Main Experience Component ───────────────────────────────────────── */
const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      {/* ── DESKTOP: master-detail layout ── */}
      <div className="exp-desktop" aria-label="Experience gallery">

        {/* Backbone line + strip wrapper */}
        <div className="exp-strip-track">
          <div className="exp-backbone">
            <span className="exp-backbone-label exp-backbone-label--now">Now</span>
            <div className="exp-backbone-line">
              <span className="exp-backbone-arrow">&#9664;</span>
            </div>
            <span className="exp-backbone-label exp-backbone-label--then">Then</span>
          </div>
          <div className="exp-strip" role="tablist" aria-label="Experience list">
            {experiences.map((exp, index) => (
              <ExperienceStripCard
                key={index}
                exp={exp}
                isActive={activeIndex === index}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Detail panel: only shown when a card is selected */}
        {activeIndex !== null && (
          <div className="exp-detail-area" role="tabpanel">
            <ExperienceDetail exp={experiences[activeIndex]} />
          </div>
        )}
      </div>

      {/* ── MOBILE: vertical timeline with collapsible bullets ── */}
      <div className="timeline exp-mobile">
        {experiences.map((exp, index) => (
          <MobileExperienceCard key={index} exp={exp} />
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default Experience;
