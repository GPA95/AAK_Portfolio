import "./EducationCard.css";
import IISJ from "../assets/IISJED.png";

export default function SchoolCard() {
  return (
    <div className="edu-card">
      <div className="edu-top">
        <div className="edu-left">
          <img src={IISJ} alt="School Logo" className="edu-logo" />
        </div>
        <div className="edu-right">
          <h3>International Indian School, Jeddah</h3>
          <p className="edu-subtitle">Senior Secondary (Class 11 & 12) – 2023</p>
        </div>
      </div>

      <div className="edu-bottom">
        <p><strong>Subjects:</strong> Mathematics, Physics, Chemistry, Informatics Practices, English</p>
        <p><strong>Percentge:</strong>
         <emphasize> Class 11:</emphasize>  88.4%
         <b> | </b>
         <emphasize> Class 12:</emphasize>  73.4%
        </p>
      </div>
    </div>
  );
}
