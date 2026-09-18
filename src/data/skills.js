import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaFlask,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React.js", icon: FaReact },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Flask", icon: FaFlask },
      { name: "Node.js", icon: FaNodeJs },
    ],
  },
  {
    category: "Database",
    items: [{ name: "MySQL", icon: FaDatabase }],
  },
  {
    category: "Programming",
    items: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },
      { name: "Figma", icon: FaFigma },
    ],
  },
];

export default skills;
