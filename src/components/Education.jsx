import "./Education.css";

const educationHistory = [
  {
    year: "2023-2026",
    degree: "Bachelor of Computer Applications",
    institution: "Sahyog College of Management and IT",
    description:
      "Built a strong foundation in computer applications, programming, web development, databases, and software development. Developed practical projects using technologies such as React, JavaScript, Python, and Flask.",
  },

  {
    year: "2019-2020",
    degree: "Commerce",
    institution: "Laxman Devram College",
    description:
      "Developed a strong foundation in accounting, business studies, economics, and financial concepts while building analytical, communication, and problem-solving skills.",
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
