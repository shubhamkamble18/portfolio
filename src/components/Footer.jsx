import siteConfig from "../data/siteConfig.js";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  const firstName = siteConfig.name.split(" ")[0];

  return (
    <footer className="footer">
      <div className="container">
        <h3 className="footer__name">
          {firstName}
          <span>.</span>
        </h3>

        <p className="footer__tagline">{siteConfig.role} building modern web experiences.</p>

        <p className="footer__copyright">
          © {year} {siteConfig.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
