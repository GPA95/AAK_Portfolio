import "./Education.css";
import SchoolCard from "./SchoolCard.jsx";
import CollegeCard from "./CollegeCard.jsx";

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container-centered">
        <h2>EDUCATION</h2>
        <CollegeCard />
        <SchoolCard />
      </div>
    </section>
  );
}
