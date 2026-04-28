import "./Intro.css";
import profilePic from "../assets/ME.jpg"; 
import linkedinIcon from "../assets/linkedin.png";
import Git from "../assets/github.png";

function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro-content">
        {/* Profile Image FIRST */}
        <div className="intro-image">
          <img src={profilePic} alt="Profile" className="profile-img" />
        </div>

        {/* Text Content */}
        <div className="intro-text">
          <h1>
            Hey, I'm <span className="highlight">Ammaar Ahmad Khan</span>!
          </h1>
          <p className="headline">
            Computer Science Junior | AI & Data Science | Web Development
          </p>
          <p className="bio">
          I’m a third‑year CSE student exploring data science, AI, and full‑stack web development.
          I enjoy turning messy problems into usable tools, from assistants to dashboards and web apps, 
          while building foundations in computer science and AI through courses, internships, and hackathons.
          </p>
          <div className="cta-buttons">
            <a
              href="https://drive.google.com/file/d/1xXfnU3xjMk_IAhP-M9iInxPQQvgBe-Xk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              📄 View My Resume
            </a>

            <a
              href="https://www.linkedin.com/in/ammaar-ahmad-khan/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="btn-icon" />
              View LinkedIn
            </a>

            <a
              href="https://github.com/GPA95"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <img src={Git} alt="GitHub" className="btn-icon" />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;