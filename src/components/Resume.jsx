import { FiEye, FiDownload } from "react-icons/fi";
import siteConfig from "../data/siteConfig.js";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <div className="section-title">
          <span>MY QUALIFICATION</span>
          <h2>Resume</h2>
        </div>

        <div className="resume__container">
          <p className="resume__text">
            Want to know more about my education, skills and experience?
          </p>

          <div className="resume__buttons">
            <a  href="src/images/Shubham_Kamble_Resume_Revised.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <FiEye /> View Resume
            </a>
            <a href="src/images/Shubham_Kamble_Resume_Revised.pdf" download className="btn btn-primary">
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
