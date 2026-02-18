import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LogoButton from "../LogoButton.jsx";

export default function Landing() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/intro");
  };

  return (
    <div className="page landing">
      <header className="header">
        <div className="logo">NR</div>
        <button className="back-button" type="button" aria-label="Go back">
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
        </button>
        <a className="header-link say-hi" href="mailto:nithikroshan03@gmail.com">
          Say hi..
        </a>
      </header>

      <div className="side-text side-text-left">
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
      </div>

      <div className="side-text side-text-right">
        <Link to="/certificates">Certificates</Link>
      </div>

      <nav className="mobile-nav">
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/certificates">Certificates</Link>
      </nav>

      <motion.main
        className="centerpiece"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <motion.div
          layoutId="hero-logo"
          style={{ display: "grid", placeItems: "center" }}
        >
          <LogoButton onClick={handleLogoClick} />
        </motion.div>
        <button
          type="button"
          className="center-text center-text-button"
          onClick={handleLogoClick}
          aria-label="Open intro"
        >
          click here
        </button>
      </motion.main>

      <footer className="footer">
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/nithik-roshan-devarajraj-8783192aa"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Nithik09"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github" aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/roshan7.1?igsh=dW55bmRhY2Q2eHJw"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram" aria-hidden="true" />
          </a>
          <div className="social-line" aria-hidden="true" />
        </div>
        <div className="footer-center">
          <Link className="footer-link" to="/about">
            About
          </Link>
          <Link className="footer-link" to="/education">
            Education
          </Link>
          <Link className="footer-link" to="/skills">
            My Skills
          </Link>
        </div>
        <div className="footer-spacer" aria-hidden="true" />
      </footer>
    </div>
  );
}
