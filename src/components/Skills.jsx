import skills from "../data/skills.js";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="section section-alt skills">
      <div className="container">
        <div className="section-title">
          <span>MY EXPERTISE</span>
          <h2>Skills</h2>
        </div>

        <div className="skills__groups">
          {skills.map((group) => (
            <div className="skills__group" key={group.category}>
              <h3 className="skills__group-title">{group.category}</h3>
              <div className="skills-grid">
                {group.items.map(({ name, icon: Icon }) => (
                  <div className="skill-card" key={name}>
                    <div className="skill-icon">
                      <Icon />
                    </div>
                    <h4>{name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
