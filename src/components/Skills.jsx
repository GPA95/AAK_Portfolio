import React, { useState } from "react";
import "./Skills.css";
import skillCategories from "../data/skillsData.js";

function Skills() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <p>Explore my technical and creative abilities categorized below.</p>

      <div className="skill-categories">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <button
              className={`category-button ${openCategory === index ? "open" : ""}`}
              onClick={() => toggleCategory(index)}
            >
              {category.title}
              <span className="dropdown-icon">{openCategory === index ? "▲" : "▼"}</span>
            </button>
            <ul className={`skills-list ${openCategory === index ? "open" : ""}`}>
              {category.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <img src={skill.image} alt={skill.name} className="skill-icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;