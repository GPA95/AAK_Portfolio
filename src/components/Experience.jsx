import React from "react";
import "./Experience.css";
import ibmLogo from "../assets/ibm_logo.png"; // replace with actual logo path
import irlLogo from "../assets/irl_logo.png"; // replace with actual logo path

const Experience = () => {
  const experiences = [
    {
      title: "Student Intern — IBM SkillsBuild – AICTE Virtual Internship in Artificial Intelligence & Cloud Computing",
      time: "September 2025 – October 2025",
      description:
        "Developed an AI-powered Study Buddy, gaining hands-on expertise in Generative AI, Prompt Engineering, Machine Learning, NLP, and Cloud Computing with IBM Watson Studio.",
      image: ibmLogo,
    },
    {
      title: "Student Intern — Integral Robotics Lab (IRL), Integral University Lucknow",
      time: "August 2024 – November 2024",
      description:
        "Worked on the Pendulum-Driven Spherical Robot (PDSR) project, focusing on system integration, motion control, and documentation for research and experimental validation.",
      image: irlLogo,
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-logo">
              <img src={exp.image} alt={`${exp.title} logo`} />
            </div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span className="timeline-time">{exp.time}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default Experience;
