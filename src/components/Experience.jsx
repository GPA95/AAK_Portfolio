import React from "react";
import "./Experience.css";
import Sabudh from "../assets/sabudh.jpg";
import STPI from "../assets/STPI.jpg";
import edunetLogo from "../assets/edunet.jpg";
import ibmLogo from "../assets/ibm_logo.png";
import aicteLogo from "../assets/AICTE.png";
import irlLogo from "../assets/irl_logo.png";

const Experience = () => {
  const experiences = [
    {
      title: "Sabudh Foundation (STPI Program)",
      role: "Part-Time Data Science Intern",
      sub: "Machine Learning & Natural Language Processing",
      time: "January 2026 – Present",
      bullets: [
        "Engaged in hands-on application of Machine Learning and Natural Language Processing using Python and its core data science libraries.",
        "Strengthening understanding of data science workflows, model training, and analytical problem-solving during a 6-month internship."
      ],
      images: [Sabudh, STPI], // multiple logos here
    },
    {
      title: "Edunet Foundation - AICTE Internship (with IBM SkillsBuild)",
      role: "Artificial Intelligence Intern",
      sub: "Artificial Intelligence & Cloud Technologies",
      time: "September 2025 – October 2025",
      bullets: [
        "Developed an AI-Powered academic assistant for simplified learning and concept understanding.",
        "Gained expertise in GenAI, Prompt Engg., ML, DL, NLP, and CV, through IBM courses."
      ],
      images: [edunetLogo, aicteLogo, ibmLogo], // multiple logos here
    },
    {
      title: "Integral Robotics Lab (IRL), Integral University Lucknow",
      role: "Student Intern",
      sub: "Robotics",
      time: "August 2024 – November 2024",
      bullets: [
        "Prototyped and simulated robotics systems using Arduino, NodeMCU, MATLAB, and Simulink in a pendulum‑driven spherical robot project.",
        "Learnt hardware‑software integration and basic control systems."
      ],
      images: [irlLogo],
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-logos">
              {exp.images.map((img, i) => (
                <div key={i} className="logo-wrapper">
                  <img src={img} alt={`${exp.title} logo ${i + 1}`} />
                </div>
              ))}
            </div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>Role: {exp.role}</h4>
              <h4>{exp.sub}</h4>
              <span className="timeline-time">{exp.time}</span>
              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default Experience;
