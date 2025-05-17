import Python from "../assets/Python.png";
import C from "../assets/C.png";
import CPP from "../assets/C++.png";
import Java from "../assets/java.png";
import SQL from "../assets/SQL.png";
import JavaScript from "../assets/JS.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import Bootstrap from "../assets/Bootstrap.png";
import reactjs from "../assets/react.svg";
import Pandas from "../assets/pandas.png";
import Numpy from "../assets/numpylogo.svg";
import Matplotlib from "../assets/Matplotlib_icon.svg";
import Seaborn from "../assets/seaborn-1.svg";
import Git from "../assets/Git.svg";
import MATLAB from "../assets/matlab.svg";
import Simulink from "../assets/Simulink.png";
import VSCode from "../assets/VSC.png";
import Anaconda from "../assets/anaconda.png";
import Jupyter from "../assets/Jupyter.png";
import Arduino from "../assets/arduino.png";
import MySQL from "../assets/MySQL.png";
import Vercel from "../assets/Vercel.png";
import Markdown from "../assets/markdown.png";
import MIT from "../assets/AI2_logo2.png";
import Drive from "../assets/GDrive.png";
import MSO from "../assets/msoffice.png";
import Canva from "../assets/Canva.png";
import YT from "../assets/youtube.png";
import Audacity from "../assets/audacity.png";
import Team from "../assets/team2.png";
import Time from "../assets/time2.png";
import Content from "../assets/content.jpg";
import Communication from "../assets/comm.png";

// Skill data
const skillCategories = [
  // 🟦 Programming Languages
  { name: "Python", description: "Experienced in data analysis, scripting, and automation", image: Python },
  { name: "C", description: "Strong foundation in low-level programming and data structures", image: C },
  { name: "C++", description: "Object-oriented programming and competitive programming", image: CPP },
  { name: "Java", description: "Skilled in OOP and desktop/Android development basics", image: Java },
  { name: "SQL", description: "Proficient in database management and MySQL querying", image: SQL },
  { name: "JavaScript", description: "Frontend logic, dynamic UI interactions, and DOM manipulation", image: JavaScript },

  // 🌐 Web Development
  { name: "HTML", description: "Markup language expertise for structuring webpages", image: HTML },
  { name: "CSS", description: "Design, layout, and responsiveness with custom styling", image: CSS },
  { name: "Bootstrap", description: "Responsive design with prebuilt components", image: Bootstrap },
  { name: "React", description: "Modern web development with reusable components", image: reactjs },

  // 📚 Libraries
  { name: "Pandas", description: "Efficient data manipulation and preprocessing", image: Pandas },
  { name: "NumPy", description: "Array operations and numerical computing", image: Numpy },
  { name: "Matplotlib", description: "Data visualization through plots and charts", image: Matplotlib },
  { name: "Seaborn", description: "Statistical data visualization", image: Seaborn },

  // 🛠️ Tools & Technologies
  { name: "Git", description: "Version control for efficient project collaboration", image: Git },
  { name: "MATLAB", description: "Numerical computing and data analysis for engineering", image: MATLAB },
  { name: "Simulink", description: "Graphical modeling and simulation of dynamic systems", image: Simulink },
  { name: "VS Code", description: "Primary development environment for various languages", image: VSCode },
  { name: "Anaconda", description: "Data science toolkit management", image: Anaconda },
  { name: "Jupyter", description: "Notebook-based code experimentation and reporting", image: Jupyter },
  { name: "Arduino IDE", description: "Microcontroller programming for hardware interfacing", image: Arduino },
  { name: "MySQL", description: "Structured data storage and query execution", image: MySQL },

  // 🧰 Additional Tools
  { name: "Markdown", description: "Lightweight markup for documentation", image: Markdown },
  { name: "MIT App Inventor", description: "Drag-and-drop Android app development", image: MIT },
  { name: "Google Drive", description: "Cloud-based document and resource management, especially for study materials", image: Drive },
  { name: "MS Office", description: "Proficient in Word, Excel, and PowerPoint", image: MSO },
  { name: "Canva", description: "Design tool for visual content and presentations", image: Canva },
  { name: "YouTube", description: "Content creation and editing for Islamic videos", image: YT },
  { name: "Audacity", description: "Audio recording and editing for Quran recitations", image: Audacity },

  // 💼 Professional Skills
  { name: "Team Collaboration", description: "Engaged in interdisciplinary projects and always open to collaborating on new and diverse initiatives", image: Team },
  { name: "Time Management", description: "Strategically schedule studies, tasks, and activities into manageable phases and track daily progress consistently", image: Time },
  { name: "Content Creation", description: "Run my personal Quran YouTube channel and regularly create documents, presentations, and spreadsheets for educational and productivity purposes", image: Content },
  { name: "Communication", description: "Value clear and consistent communication with peers; strong oral and written skills, including crafting well-structured educational content", image: Communication},
];

export default skillCategories;