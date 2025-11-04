import React from "react";
import "./Experience.css";
import edunetLogo from "../assets/edunet.jpg";
import ibmLogo from "../assets/ibm_logo.png";
import aicteLogo from "../assets/AICTE.png";
import irlLogo from "../assets/irl_logo.png";

const Experience = () => {
  const experiences = [
    {
      title: "Edunet Foundation - AICTE Internship (with IBM SkillsBuild)",
      role: "Artificial Intelligence Intern",
      sub: "Artificial Intelligence & Cloud Technologies",
      time: "September 2025 – October 2025",
      description:
        "Developed an AI-powered Study Buddy, gaining hands-on expertise in Generative AI, Prompt Engineering, Machine Learning, NLP, and Cloud Computing with IBM Watson Studio.",
      images: [edunetLogo, aicteLogo, ibmLogo], // multiple logos here
    },
    {
      title: "Integral Robotics Lab (IRL), Integral University Lucknow",
      role: "Student Intern",
      sub: "Robotics",
      time: "August 2024 – November 2024",
      description:
        "Worked on the Pendulum-Driven Spherical Robot (PDSR) project, focusing on system integration, motion control, and documentation for research and experimental validation.",
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
