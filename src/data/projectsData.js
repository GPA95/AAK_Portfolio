import React from "react";
import ESHOP from "../assets/ESHOP.png";
import TDA from "../assets/TDA2.png";
import APW from "../assets/APW2.jpg";
import PDSR from "../assets/PDSR.jpg";
import SAW from "../assets/SAW3.jpg";
import DVBI from "../assets/Graphs.png";
import SGPAI from "../assets/SGPAI.png";
import KaggleF1 from "../assets/KaggleF1.png";
import FPG from "../assets/FPG.png";

const projects = [
    {
        title: "F1 Pitstop Predictor",
        problem: "Race strategy teams need to anticipate when a driver will pit in order to optimize tyre strategy and track position.",
        solution: "A LightGBM-based binary classification model that predicts whether an F1 driver will pit on the next lap using tabular race telemetry and strategy features.",
        tech: "Python, Pandas, Scikit-learn, LightGBM",
        outcome: "Achieved 0.9454 ROC AUC on the public leaderboard in Kaggle’s Playground Series S6E5 with a validated baseline pipeline.",
        image: KaggleF1,
        githubLink: "https://github.com/GPA95/F1_Pitstop_Predictor",
    },
    {
        title: "Study Guide & Personal Assistant",
        problem: "Students struggle to organize and summarize scattered study materials for exam prep, and require personalized assistance.",
        solution: "An AI-driven web app that explains concepts, extracts content from PDFs, and generates quizzes through a clean chat interface.",
        tech: "Python, Streamlit, Gemini API, PyPDF2",
        outcome: "Used by 100+ students for centralized exam preparation.",
        image: SGPAI,
        githubLink: "https://github.com/GPA95/SGPA",
    },
    {
        title: "Tourism Dataset Analytics",
        problem: "Tourism businesses need to understand seasonal trends and traveler behavior from raw data.",
        solution: "Exploratory analysis and visualization of a hypothetical tourism dataset to identify key patterns.",
        tech: "Python, Pandas, Matplotlib, Seaborn",
        outcome: "Data cleaning, EDA, and building clear visual narratives.",
        image: TDA,
        githubLink: "https://github.com/GPA95/tourism-dataset-analytics",
    },
    {
        title: "Online Retail Business Insights",
        problem: "Raw retail data is difficult for stakeholders to interpret without visual aids.",
        solution: "Preprocessed retail data and built interactive Tableau dashboards to deliver insights on sales and segmentation.",
        tech: "Python, Pandas, Tableau",
        outcome: "Translating raw data into actionable business intelligence.",
        image: DVBI,
        githubLink: "https://github.com/GPA95/Online_Retail_Data_Viz",
    },
    {
        title: "Front-Page Generator",
        problem: "Students need a consistent, easy way to generate front pages for assignments and lab reports with correct format and metadata.",
        solution: "Contributed features to an open‑source static front‑page generator: theme toggle, an Academic Session field, client‑side validation and a JSON‑driven catalog.",
        tech: "JavaScript, CSS, Git, PDF generation",
        outcome: "Improved template robustness and UX of website; contribution merged into the main project.",
        image: FPG,
        githubLink: "https://github.com/GPA95/GPA95_FPG/",
    },
    {
        title: "Pendulum-Driven Spherical Robot",
        problem: "Traditional wheeled robots struggle with agile, omnidirectional navigation in tight spaces.",
        solution: "A self-balancing spherical robot featuring PID-controlled motion, obstacle avoidance, and wireless app control.",
        tech: "MATLAB, Simulink, NodeMCU, C++",
        outcome: "Achieved agile, precise navigation and dynamic stabilization.",
        image: PDSR,
        githubLink: "https://github.com/abdulmalik812/Spherical_Robot",
    },
    {
        title: "Personal Portfolio Website",
        problem: "I needed a professional online presence to showcase my skills.",
        solution: "My modern, responsive personal portfolio website featuring a dynamic theme toggle and project galleries.",
        tech: "HTML, CSS, JavaScript, React, Netlify",
        outcome: "Practiced responsive web design and React component architecture.",
        image: APW,
        githubLink: "https://github.com/GPA95/AAK_Portfolio",
    },
    {
        title: "E-SHOP Departmental Store",
        problem: "Local stores need digital systems to manage products and process orders efficiently.",
        solution: "A backend e-commerce system that handles product listing, user authentication, shopping carts, and order processing.",
        tech: "Python, SQL, Numpy, Pandas, Matplotlib",
        outcome: "Practiced Python programming and SQL database operations.",
        image: ESHOP,
        githubLink: "https://github.com/GPA95/ESHOP",
    },
    {
        title: "Student Academic Workspace",
        problem: "Students lack an integrated tool to manage courses, exams, assignments, and timetables.",
        solution: "An all-in-one Notion dashboard designed with static and database-driven modules for academic planning.",
        tech: "Notion (Databases, Formulas, Rollups)",
        outcome: "System design for personal productivity and academic tracking.",
        image: SAW,
        githubLink: "https://github.com/GPA95/Student_Academic_Workspace_Notion",
    },
];

export default projects;