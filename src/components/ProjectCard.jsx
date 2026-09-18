import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { title, description, tech, githubUrl, demoUrl, icon: Icon, image } = project;

  return (
    <div className="project-card">
      <div className="project-card__media">
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <Icon size={44} aria-hidden="true" />
        )}
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tech">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <FiGithub /> GitHub
          </a>
          <a href={demoUrl} target="_blank" rel="noreferrer">
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
