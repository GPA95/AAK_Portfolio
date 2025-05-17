import React from "react";
import "./Projects.css";
import ESHOP from "../assets/ESHOP.png";
import TDA from "../assets/TDA2.png";
import APW from "../assets/APW2.jpg";
import PDSR from "../assets/PDSR.jpg";

function Projects() {
  const projects = [
    {
      title: "E-SHOP Departmental Store",
      description: "A Python-based e-commerce project that includes product listing, user authentication, shopping cart functionality, and order processing. It integrates with an SQL database, showcasing Python programming concepts and database integration.",
      image: ESHOP, // Make sure this image exists in src/assets
      githubLink: "https://github.com/GPA95/ESHOP",
    },
    {
      title: "Tourism Dataset Analytics",
      description: "This project, from a 'Data Analysis in Python' workshop organized by IIT BHU focuses on analyzing hypothetical tourism data to identify trends, relationships, and patterns while leveraging Python libraries for data analytics and visualization.",
      image: TDA, // Ensure this image exists
      githubLink: "https://github.com/GPA95/tourism-dataset-analytics",
    },
    {
      title: "Pendulum-Driven Spherical Robot",
      description: "A self-balancing spherical robot featuring PID-controlled motion, sensor-based obstacle avoidance, and wireless Android app control, developed with MATLAB, Simulink, and embedded systems for agile, precise navigation.",
      image: PDSR, // Ensure this image exists
      githubLink: "https://github.com/abdulmalik812/Spherical_Robot",
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive personal portfolio website built with React.js and Vite. It features a dynamic theme toggle, project showcase, and interactive skill highlights, providing a professional way to display my work and skills.",
      image: APW, // Ensure this image exists
      githubLink: "https://github.com/GPA95/AAK_Portfolio",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <p>Check out my work below.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
              🔗 View on GitHub
            </a>
          </div>
        ))}
      </div>
      <a href="https://github.com/GPA95" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
        📂 View All Projects on GitHub
      </a>
    </section>
  );
}

export default Projects;
