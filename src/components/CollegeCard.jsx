import "./EducationCard.css";
import IUL from "../assets/IUL.jpg";
// import YearAccordion from "./YearAccordion.jsx";  // Comment out this import

export default function CollegeCard() {
  return (
    <div className="edu-card">
      <div className="edu-top">
        <div className="edu-left">
          <img src={IUL} alt="College Logo" className="edu-logo" />
        </div>
        <div className="edu-right">
          <h3>Integral University, Lucknow, Uttar Pradesh, India</h3>
          <p className="edu-subtitle">B.Tech – Computer Science and Engineering (2023–2027)</p>
          <p className="edu-subtitle">Ongoing 5th Semester</p>
        </div>
      </div>

      <div className="edu-bottom">
        <p><strong>CGPA:</strong> 8.0 (as of 5th Semester)</p>
        <p><strong>Relevant Coursework:</strong> Artificial Intelligence, Data Structures and Algorithms, Full-Stack Web Development, Database Management Systems, Cloud Computing, Operating Systems, Human Computer Interaction</p>

        {/* Commenting out YearAccordion components */}
        {/* 
        <YearAccordion year="Year #1" duration="2023–24" sgpa1="8.3" sgpa2="8.4"
          oddSubjects={[
            "Basic Electronics", "Basic Electrical Engineering", "Basic Professional Communication", "Engineering Mathematics-I", "Physics", "Electrical Engineering Lab", "Engineering Graphics", "Workshop Practice", "Physics Lab"
          ]}
          evenSubjects={[
            "Engineering Chemistry", "Computer Programming", "Environmental Studies", "Basic Mechanical Engineering", "Mathematics-2 (CSE)", "Engineering Chemistry Lab", "Computer Programming Lab", "Professional Communication Lab", "Mechanical Engineering Lab"
          ]}
        />
        <YearAccordion year="Year #2"  duration="2024–25" sgpa1="8.1" sgpa2="7.8"
          oddSubjects={[
            "Principles of Management and Engineering Economics", "Cyber Law and Information Security", "Data Structures using C", "Discrete Structures", "Software Engineering", "Object Oriented Concepts using Java", "Industrial Training/Internship/Apprenticeship", "Data Structures using C LAB", "Object Oriented Concepts using Java LAB", "Python Programming LAB", "Web Scripting LAB"
          ]}
          evenSubjects={[
            "Database Management System", "Computer Organization and Architecture", "Full-Stack Development - Front End", "Theory of Computation","Disaster Management", "Mathematical Analysis (CSE)" , "Comprehensive Annual Assessment - I" ,"DBMS Lab", "Advanced Java Programming Lab", "COA Lab", "Full-Stack Development - Front End Lab"
          ]}
        />
        <YearAccordion year="Year #3" duration="2025–26" sgpa1="Not Announced Yet" sgpa2="Not Announced Yet"
          oddSubjects={[
            "Design and Analysis of Algorithm", "Principles of Operating System", "Full-Stack Development-Backend", "Introduction to Artificial Intelligence", "Cloud Computing", "Data Compression", "Career Development Course", "Industrial Training - Internship - Apprenticeship - II", "Design and Analysis of Algorithm Lab", "Full-Stack Development-Backend Lab", "Mobile App Development Lab"
          ]}
          evenSubjects={[
            "Not Announced Yet"
          ]}
        />
        */}
      </div>
    </div>
  );
}
