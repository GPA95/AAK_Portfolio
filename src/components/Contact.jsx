import React, { useState } from "react";
import "./Contact.css";

// Import icons from assets folder
import whatsappIcon from "../assets/whatsapp.png";
import emailIcon from "../assets/gmail.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";

function Contact() {
  // State to store user input
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Function to generate WhatsApp link
  const handleWhatsAppClick = () => {
    const encodedName = encodeURIComponent(name);
    let encodedMessage = encodeURIComponent(message);
  
    // Fix emoji issue by replacing unsupported characters
    encodedMessage = encodedMessage.replace("👋", "%F0%9F%98%8A"); // Removes unwanted Unicode markers
  
    const whatsappMessage = `Hello, my name is ${encodedName}. ${encodedMessage}`;
    const whatsappURL = `https://wa.me/919120358789?text=${whatsappMessage}`;
    
    window.open(whatsappURL, "_blank");
  };  

  // Function to generate Email link
  const handleEmailClick = () => {
    const encodedSubject = encodeURIComponent(`Hello from ${name}`);
    const encodedBody = encodeURIComponent(message);
    
    // Force Gmail to open in a new tab
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=ammaarahmadkhan16@gmail.com&su=${encodedSubject}&body=${encodedBody}`;
    
    window.open(gmailURL, "_blank");
  };  

  // Function to open LinkedIn profile
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/ammaar-ahmad-khan-0044b9320/", "_blank");
  };

  // Function to open GitHub profile
  const handleGitHubClick = () => {
    window.open("https://github.com/GPA95", "_blank");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Fill in your details and reach out to me via WhatsApp or Email.</p>

      <div className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message (Optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div className="contact-buttons">
          <button onClick={handleWhatsAppClick} className="whatsapp-btn">
            <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
            Message on WhatsApp
          </button>
          <button onClick={handleEmailClick} className="email-btn">
            <img src={emailIcon} alt="Email" className="contact-icon" />
            Send an Email
          </button>
          <button onClick={handleLinkedInClick} className="linkedin-btn">
            <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
            Visit LinkedIn
          </button>
          <button onClick={handleGitHubClick} className="github-btn">
            <img src={githubIcon} alt="GitHub" className="contact-icon" />
            Visit GitHub
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;