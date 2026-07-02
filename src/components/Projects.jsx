import React from 'react';
import './Projects.css';
import projects from '../data/projectsData';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>PROJECTS</h2>
      <p className="projects-subtitle">Check out my work below.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-text"><strong>Problem:</strong> {project.problem}</p>
              <p className="project-text"><strong>Solution:</strong> {project.solution}</p>
              <p className="project-text"><strong>Tech:</strong> {project.tech}</p>
              <p className="project-text"><strong>Focus/Impact:</strong> {project.outcome}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn project-btn">
                🔗 View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/GPA95" target="_blank" rel="noopener noreferrer" className="btn btn-outline view-all-btn">
        📂 View All Projects on GitHub
      </a>
    </section>
  );
}

export default Projects;
