import {
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  mysql,
  git,
  html,
  css, // ✅ added CSS
  javascript,
  mongodb,
  reactjs,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  ezzy,
  // Skills icons
  python,
  java,
  c,
  cplusplus,
  pandas,
  numpy,
  sklearn,
  pytorch,
  vscode,
  visualstudio,
  eclipse,
  jupyter,
  arduino,
  postman,
  firebase,
} from "../assets";

// Company logos
import kodnest from "../assets/kodnest.png";
import iisc from "../assets/Iisc.png";

// Navigation links
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// Services section
const services = [
  { title: "Full-Stack Developer", icon: web },
  { title: "Web Developer", icon: creator },
  { title: "Mobile App Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
];

// Web techs & databases
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "MongoDB", icon: mongodb },
  { name: "MySql", icon: mysql },
  { name: "git", icon: git },
];

// Skills section (names will be hidden in frontend)
const skills = [
  {
    category: "Languages & Programming",
    items: [
      { name: "Python", icon: python },
      { name: "Java", icon: java },
      { name: "C", icon: c },
      { name: "C++", icon: cplusplus },
    ],
  },
  {
    category: "Web Technologies & Databases",
    items: [
      { name: "HTML 5", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "React JS", icon: reactjs },
      { name: "MySql", icon: mysql },
      { name: "MongoDB", icon: mongodb },
    ],
  },
  {
    category: "Data Science & Machine Learning",
    items: [
      { name: "Pandas", icon: pandas },
      { name: "NumPy", icon: numpy },
      { name: "Scikit-learn", icon: sklearn },
      { name: "PyTorch", icon: pytorch },
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "VS Code", icon: vscode },
      { name: "Visual Studio", icon: visualstudio },
      { name: "Jupyter", icon: jupyter },
      { name: "Eclipse", icon: eclipse },
      { name: "Arduino", icon: arduino },
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "Postman", icon: postman },
      { name: "Firebase", icon: firebase },
    ],
  },
];

// Experiences section
const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Kodnest Technologies",
    icon: kodnest,
    iconBg: "#383E56",
    date: "May 2025 – Present",
    points: [
      "Developing real-time projects using Java, Python, React, SQL and MongoDB.",
      "Implementing version control using Git and collaborating on team-based projects.",
      "Conducting manual testing and API testing with Postman to ensure software reliability.",
      "Gaining hands-on exposure to full-stack development and deployment practices.",
    ],
  },
  {
    title: "Embedded Systems Developer Intern",
    company_name: "Indian Institute of Science",
    icon: iisc,
    iconBg: "#E6DEDD",
    date: "Nov 2023 – Nov 2023",
    points: [
      "Built and tested real-time embedded systems using C/C++, Arduino UNO and sensor modules.",
      "Designed and programmed hardware-software integrations for microcontroller-based projects.",
      "Debugged and optimized system performance through rigorous testing.",
      "Collaborated with researchers to implement sensor-driven automation solutions.",
    ],
  },
];

// Projects section
const projects = [
  {
    name: "AI-Chatbot using NLP and DL",
    description:
      "Built an AI chatbot using NLP and deep learning with 90% intent recognition accuracy. Deployed via Flask API on Render and Vercel, handling 1000+ queries daily.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "nltk", color: "green-text-gradient" },
      { name: "flask", color: "pink-text-gradient" },
      { name: "neuralnetwork", color: "white-text-gradient" },
    ],
    image: p1,
    source_code_link: "https://github.com/sandhyaasingh/AI-Chatbot",
  },
  {
    name: "AI-Powered Stock Price Prediction System",
    description:
      "Developed a stock price prediction system using an LSTM neural network, achieving 85% accuracy. Preprocessed data with Pandas, NumPy and trained the model to forecast future stock prices.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "numpy", color: "green-text-gradient" },
      { name: "pandas", color: "pink-text-gradient" },
      { name: "lstm", color: "white-text-gradient" },
    ],
    image: p2,
    source_code_link:
      "https://github.com/sandhyaasingh/AI-Based-Stock-Prediction-System",
  },
  {
    name: "Smart Task Manager App",
    description:
      "Built a full-featured mobile app with user authentication, CRUD task management, repeat schedules, local notifications and persistent cloud storage via Firebase.",
    tags: [
      { name: "reactnative", color: "blue-text-gradient" },
      { name: "expo", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
      { name: "javascript", color: "white-text-gradient" },
    ],
    image: p3,
    source_code_link:
      "https://github.com/sandhyaasingh/Smart-Task-Manager-App",
  },
  {
    name: "E-Commerce Website",
    description:
      "Developed a fully responsive e-commerce website using HTML, CSS, JavaScript and MySQL. Designed an interactive product catalog, navigation and checkout system for a seamless user experience.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "mysql", color: "white-text-gradient" },
    ],
    image: p4,
    source_code_link:
      "https://github.com/sandhyaasingh/E-Commerce-Website",
  },
  {
    name: "Real-Time Face Recognition Attendance Tracking System",
    description:
      "Built an AI-powered face recognition attendance system with 99% accuracy using OpenCV and Computer Vision. Implemented automated authentication and secure facial verification for efficient tracking.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "computerVision", color: "pink-text-gradient" },
    ],
    image: p5,
    source_code_link:
      "https://github.com/sandhyaasingh/Real-Time-Face-Recognition-Attendance-Tracking-System",
  },
  {
    name: "Real-Time Biofeedback System for Anxiety Monitoring",
    description:
      "Developed a biofeedback system that monitors physiological variations and delivers real-time feedback via a mobile app, enhancing anxiety management efficiency by 30% compared to traditional methods.",
    tags: [
      { name: "iot", color: "blue-text-gradient" },
      { name: "sensorIntegration", color: "green-text-gradient" },
    ],
    image: p6,
    source_code_link:
      "https://github.com/sandhyaasingh/Biofeedback-Loop-System-for-Anxiety-Management-in-Real-Time",
  },
  {
    name: "Bluetooth Controlled Obstacle Avoiding Robot",
    description:
      "Developed a versatile robot using Arduino with autonomous, Bluetooth and voice control, achieving 95% navigation accuracy. Integrated ultrasonic sensors for real-time obstacle detection and path adjustment.",
    tags: [
      { name: "arduino", color: "blue-text-gradient" },
      { name: "ultrasonicsensors", color: "green-text-gradient" },
      { name: "bluetooth", color: "pink-text-gradient" },
    ],
    image: ezzy,
    source_code_link:
      "https://github.com/sandhyaasingh/Bluetooth-Voice-Controlled-Obstacle-Avoiding-Car",
  },
];

export { services, technologies, skills, experiences, projects };
