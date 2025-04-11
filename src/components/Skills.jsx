import React from "react";
import "./Skills.css";
import Python from "../assets/Python.png";
import SQL from "../assets/SQL.png";
import MSO from "../assets/msoffice.png";
import Canva from "../assets/Canva.png";
import YT from "../assets/youtube.png";
import Audacity from "../assets/audacity.png";

// Skill data
const skillsData = [
  { name: "Python", description: "Experienced in data analysis, scripting, and automation", image: Python },  
  { name: "SQL", description: "Proficient in database management and querying using MySQL", image: SQL },
  { name: "MS Office", description: "Skilled in Word, Excel, and PowerPoint for documentation and presentations", image: MSO },
  { name: "YouTube", description: "Content creation and video editing for Islamic videos", image: YT },
  { name: "Canva", description: "Graphic design for YouTube videos and presentations", image: Canva },
  { name: "Audacity", description: "Audio recording, editing & processing for high-quality sound production for Quran recitations", image: Audacity },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <p>Here are some of my technical and creative skills.</p>
      
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-item">
            <img src={skill.image} alt={skill.name} className="skill-icon" />
            <div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
