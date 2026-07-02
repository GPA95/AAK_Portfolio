import React from "react";
import "./Skills.css";
import skillCategories from "../data/skillsData.js";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>SKILLS</h2>
      <p>Explore my technical and creative abilities categorized below.</p>

      <div className="skill-categories">
        {skillCategories.map((category, index) => (
          <div className="skills-category" key={index}>
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div className="skill-pill" key={skill.name}>
                  <img src={skill.image} alt={skill.name} />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;