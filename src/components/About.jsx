import profileImage from "../images/shubham.jpeg";
import siteConfig from "../data/siteConfig.js";
import "./About.css";

const infoRows = [
  { label: "Name", value: siteConfig.name },
  { label: "Role", value: siteConfig.role },
  { label: "Location", value: siteConfig.location },
  { label: "Availability", value: siteConfig.availability },
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <span>WHO I AM</span>
          <h2>About Me</h2>
        </div>

        <div className="about__grid">
          <div className="about__image-wrap">
            <div className="about__image">
              <img
                src={profileImage}
                alt={siteConfig.name}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = "/profile-placeholder.svg";
                }}
              />
            </div>
          </div>

          <div className="about__content">
            <h3>{siteConfig.role}</h3>

            <p>
              I'm a passionate developer focused on building modern, scalable,
              and user-centric web experiences. I enjoy turning ideas into
              polished products, improving performance, and creating interfaces
              that feel fast, intuitive, and professional.
            </p>

            <div className="about__badges" aria-label="Professional strengths">
              <span>Frontend UX</span>
              <span>React</span>
              <span>Problem Solving</span>
              <span>Clean Code</span>
            </div>

            <div className="about__info">
              {infoRows.map((row) => (
                <div key={row.label}>
                  <strong>{row.label}:</strong>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
