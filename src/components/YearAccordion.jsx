import { useState } from "react";
import "./EducationCard.css";

export default function YearAccordion({ year, duration, sgpa1, sgpa2, oddSubjects, evenSubjects }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="year-accordion">
      <button className="year-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span>{year} ({duration})</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="year-content">
          <div className="semester-column">
            <h4>Odd Semester</h4>
            <p><emphasize>GPA: {sgpa1}</emphasize></p>
            <p><emphasize>Subjects:</emphasize></p>
            <ul>
              {oddSubjects.map((subj, i) => (
                <li key={i}>• {subj}</li>
              ))}
            </ul>
          </div>
          <div className="semester-column">
            <h4>Even Semester</h4>
            <p><emphasize>GPA: {sgpa2}</emphasize></p>
            <p><emphasize>Subjects:</emphasize></p>
            <ul>
              {evenSubjects.map((subj, i) => (
                <li key={i}>• {subj}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
