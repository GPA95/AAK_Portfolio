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
            CS Sophomore | Data Science & AI Enthusiast | Aspiring Engineer
          </p>
          <p className="bio">
          As a 2nd-year Computer Science and Engineering student at Integral University, Lucknow, I am passionate about solving real-world problems through AI, Data Science, and Software Engineering. My academic foundation includes Python, SQL, Java, and C, along with growing expertise in Web Development and Robotics Software.
          </p>
          <div className="cta-buttons">
          <a href="https://drive.google.com/file/d/1CArcs9lTdvF49ipr7LiceO_GhonXILQ7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline">📄 View My CV</a>

            <a href="https://www.linkedin.com/in/ammaar-ahmad-khan-0044b9320/" target="_blank" className="btn btn-outline">
              🔗 View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;