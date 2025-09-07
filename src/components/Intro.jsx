import "./Intro.css";
import profilePic from "../assets/ME.jpg"; 

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
            Computer Science Junior | AI & Data Science Enthusiast | Concept to Creation
          </p>
          <p className="bio">
          I’m a third-year Computer Science student, passionate about solving real-world problems through Artificial Intelligence, Data Science, and Software Engineering. My experience spans across AI/ML, full-stack web development, data visualization, and robotics software. I’ve built projects ranging from responsive web apps and business dashboards to research-driven robotics. With certifications and hands-on hackathon experience, I actively pursue opportunities to apply my skills through impactful projects and internships.
          </p>
          <div className="cta-buttons">
          <a href="https://drive.google.com/file/d/1M6ItSGVehXU9Lx2JcuopREkY6nrHHf2h/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline">📄 View My CV</a>

          <a href="https://www.linkedin.com/in/ammaar-ahmad-khan-0044b9320/" target="_blank" className="btn btn-outline">🔗 View LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;