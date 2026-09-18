import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import siteConfig from "../data/siteConfig.js";
import "./Hero.css";

const quickStats = [
  { value: "3+", label: "Years building" },
  { value: "20+", label: "Projects shipped" },
  { value: "100%", label: "Focus on quality" },
];

function Hero() {
  const [firstName, ...rest] = siteConfig.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__small">Hello, I&apos;m</p>

        <h1 className="hero__name">
          {firstName} <span>{lastName}</span>
        </h1>

        <h2 className="hero__role">{siteConfig.role}</h2>

        <p className="hero__description">
          I build responsive, scalable, and user-friendly web applications that
          balance strong design with performance and maintainability.
        </p>

        <div className="hero__buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a
            href={siteConfig.resumePath}
            download
            className="btn btn-secondary"
          >
            Download Resume
          </a>
        </div>

        <div className="hero__stats" aria-label="Quick summary">
          {quickStats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero__socials">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FiGithub />
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Send an email">
            <FiMail />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to About section"
      >
        <FiArrowDown />
      </a>
    </section>
  );
}

export default Hero;
