import { useState } from "react";
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from "react-icons/fi";
import siteConfig from "../data/siteConfig.js";
import "./Contact.css";

const initialForm = { name: "", email: "", subject: "", message: "" };

const contactInfo = [
  { icon: FiMail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: FiLinkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: siteConfig.linkedinUrl },
  { icon: FiGithub, label: "GitHub", value: "View my code", href: siteConfig.githubUrl },
  { icon: FiMapPin, label: "Location", value: siteConfig.location, href: null },
];

function validate(form) {
  const errors = {};

  if (!form.name.trim()) errors.name = "Name is required.";

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.subject.trim()) errors.subject = "Subject is required.";

  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No backend is wired up yet — replace this with an API call,
      // an email service (e.g. EmailJS/Formspree), or a serverless function.
      setStatus("success");
      setForm(initialForm);
    } else {
      setStatus(null);
    }
  };

  return (
    <section id="contact" className="section section-alt contact">
      <div className="container">
        <div className="section-title">
          <span>GET IN TOUCH</span>
          <h2>Contact Me</h2>
        </div>

        <p className="contact__intro">
          I'm currently open to new opportunities. Feel free to contact me for
          job opportunities, collaborations or projects.
        </p>

        <div className="contact-container">
          <div className="contact-info">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div className="contact-item" key={label}>
                <Icon />
                <div>
                  <h4>{label}</h4>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer">
                      {value}
                    </a>
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__field">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="contact-form__error">{errors.name}</p>}
            </div>

            <div className="contact-form__field">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="contact-form__error">{errors.email}</p>}
            </div>

            <div className="contact-form__field">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
              />
              {errors.subject && <p className="contact-form__error">{errors.subject}</p>}
            </div>

            <div className="contact-form__field">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="contact-form__error">{errors.message}</p>}
            </div>

            <button type="submit" className="btn btn-primary">
              <FiSend /> Send Message
            </button>

            {status === "success" && (
              <p className="contact-form__success" role="status">
                Thanks for reaching out — I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
