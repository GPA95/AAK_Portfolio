import React, { useState } from 'react';
import './Projects.css';
import projects from '../data/projectsData';

function Projects() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const renderProject = (project, index) => (
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
  );

  return (
    <section id="projects" className="projects">
      <h2>PROJECTS</h2>
      <p className="projects-subtitle">Check out my work below.</p>
      <div className="projects-grid">
        {projects.slice(0, 3).map(renderProject)}
        <button
          type="button"
          className="btn btn-outline projects-toggle"
          aria-expanded={showMoreProjects}
          aria-controls="additional-projects"
          onClick={() => setShowMoreProjects((isExpanded) => !isExpanded)}
        >
          {showMoreProjects ? 'Show Less Projects' : 'View More Projects'}
          <span className="projects-toggle-icon" aria-hidden="true">
            {showMoreProjects ? '▲' : '▼'}
          </span>
        </button>
        <div
          id="additional-projects"
          className={`projects-more${showMoreProjects ? ' is-open' : ''}`}
        >
          {projects.slice(3).map((project, index) => renderProject(project, index + 3))}
        </div>
      </div>
      <a href="https://github.com/GPA95" target="_blank" rel="noopener noreferrer" className="btn btn-outline view-all-btn">
        📂 View All Projects on GitHub
      </a>
    </section>
  );
}

export default Projects;
