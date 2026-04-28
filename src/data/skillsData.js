import Python from "../assets/Python.png"
import C from "../assets/C.png";
import CPP from "../assets/C++.png";
import Java from "../assets/java.png";
import SQL from "../assets/SQL.png";
import JavaScript from "../assets/JS.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import Bootstrap from "../assets/Bootstrap.png";
import reactjs from "../assets/react.svg";
import NodeJS from "../assets/nodejs.png";
import ExpressJS from "../assets/expressjs.png";
import MongoDB from "../assets/mongodb.png";
import API from "../assets/API.png";
import Pandas from "../assets/pandas.png";
import SKL from "../assets/skl.png";
import Numpy from "../assets/numpylogo.svg";
import Matplotlib from "../assets/Matplotlib_icon.svg";
import Seaborn from "../assets/seaborn-1.svg";
import Plotly from "../assets/Plotly.svg";
import Streamlit from "../assets/streamlit.png";
import Git from "../assets/Git.svg";
import MATLAB from "../assets/matlab.svg";
import Simulink from "../assets/Simulink.png";
import VSCode from "../assets/VSC.png";
import Anaconda from "../assets/anaconda.png";
import Jupyter from "../assets/Jupyter.png";
import Arduino from "../assets/arduino.png";
import MySQL from "../assets/MySQL.png";
import Tableau from "../assets/tableau.png";
import Netlify from "../assets/netlify.png";
import Drive from "../assets/GDrive.png";
import MSO from "../assets/msoffice.png";
import Canva from "../assets/Canva.png";
import YT from "../assets/youtube.png";
import N from "../assets/Notion.png";
import Markdown from "../assets/markdown.png";
import MIT from "../assets/AI2_logo2.png";
import Audacity from "../assets/audacity.png";
import Team from "../assets/team2.png";
import Time from "../assets/time2.png";
import Content from "../assets/content.jpg";
import Communication from "../assets/comm.png";

// Skill data
const skillCategories = [
  {
    title: "💻 Programming Languages",
    skills: [
      { name: "Python", description: "Experienced in data analysis, scripting, and visualization", image: Python },
      { name: "SQL", description: "Proficient in database management and MySQL querying", image: SQL },
      { name: "JavaScript", description: "Frontend logic, dynamic UI interactions, and DOM manipulation", image: JavaScript },
      { name: "C", description: "Strong foundation in low-level programming and data structures", image: C },
      { name: "C++", description: "Object-oriented programming and competitive programming", image: CPP },
      { name: "Java", description: "Skilled in OOP and desktop/Android development basics", image: Java },
    ],
  },
  {
    title: "📊 Data & AI",
    skills: [
      { name: "Pandas", description: "Efficient data manipulation and preprocessing", image: Pandas },
      { name: "Scikit-Learn", description: "Machine learning library for data analysis and modeling", image: SKL },
      { name: "NumPy", description: "Array operations and numerical computing", image: Numpy },
      { name: "Matplotlib", description: "Data visualization through plots and charts", image: Matplotlib },
      { name: "Seaborn", description: "Statistical data visualization", image: Seaborn },
      { name: "Plotly", description: "Interactive and dynamic data visualizations", image: Plotly },
      { name: "Tableau", description: "Interactive dashboards and business data visualization", image: Tableau },
    ],
  },
  {
    title: "🌐 Web Development",
    skills: [
      { name: "HTML", description: "Markup language expertise for structuring webpages", image: HTML },
      { name: "CSS", description: "Design, layout, and responsiveness with custom styling", image: CSS },
      { name: "Bootstrap", description: "Responsive design with prebuilt components", image: Bootstrap },
      { name: "MongoDB", description: "NoSQL database for flexible, document-based data storage", image: MongoDB },
      { name: "Express.js", description: "Minimalist web framework for building REST APIs", image: ExpressJS },
      { name: "React", description: "Modern web development with reusable components", image: reactjs },
      { name: "Node.js", description: "Backend development with scalable, event-driven JavaScript runtime", image: NodeJS },
      { name: "API", description: "Interface enabling communication between web apps", image: API },
      { name: "Streamlit", description: "Rapidly building interactive web apps in Python", image: Streamlit },
    ],
  },
  {
    title: "🛠️ Tools & Technologies",
    skills: [
      { name: "Git", description: "Version control for efficient project collaboration", image: Git },
      { name: "MATLAB", description: "Numerical computing and data analysis for engineering", image: MATLAB },
      { name: "Simulink", description: "Graphical modeling and simulation of dynamic systems", image: Simulink },
      { name: "VS Code", description: "Primary development environment for various languages", image: VSCode },
      { name: "Anaconda", description: "Data science toolkit management", image: Anaconda },
      { name: "Jupyter", description: "Notebook-based code experimentation and reporting", image: Jupyter },
      { name: "Arduino IDE", description: "Microcontroller programming for hardware interfacing", image: Arduino },
      { name: "MySQL", description: "Structured data storage and query execution", image: MySQL },
      { name: "Netlify", description: "Deploying and scaling modern web applications", image: Netlify },
    ],
  },
  
  {
    title: "💼 Professional Skills",
    skills: [
      { name: "Team Collaboration", description: "Engaged in interdisciplinary projects and hackathons and always open to collaborating", image: Team },
      { name: "Time Management", description: "Strategically schedule studies, tasks, and activities into manageable phases and track daily progress consistently", image: Time },
      { name: "Content Creation", description: "Run my personal YouTube channels on Islamic as well as tech content, and regularly create documents, presentations, and spreadsheets for educational and productivity purposes", image: Content },
      { name: "Communication", description: "Value clear and consistent communication with peers; strong oral and written skills, including crafting well-structured educational content", image: Communication},
    ],
  },
];

export default skillCategories;