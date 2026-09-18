import "./Education.css";

// Replace these placeholder values with your real education history.
const educationHistory = [
  {
    year: "2023-2026",
    degree: "Bachelor of Computer Applications",
    institution: "Sahyog college of mangenment and IT ",
    description: "Short description of coursework, achievements or focus area.",
  },

  {
    year: "2019-2020",
    degree: "Commerce",
    institution: "Laxman Devram college",
    description: "Short description of coursework, achievements or focus area.",
  },
];

function Education() {
  return (
    <section id="education" className="section section-alt education">
      <div className="container">
        <div className="section-title">
          <span>MY BACKGROUND</span>
          <h2>Education</h2>
        </div>

        <div className="timeline">
          {educationHistory.map((item, index) => (
            <div className="timeline-item" key={index}>
              <span>{item.year}</span>
              <h4>{item.degree}</h4>
              <p className="timeline-item__institution">{item.institution}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
