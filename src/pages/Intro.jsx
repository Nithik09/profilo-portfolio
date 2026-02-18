import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LogoButton from "../LogoButton.jsx";

const asset = (path) => {
  const cleaned = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${encodeURI(cleaned)}`;
};

export default function Intro() {
  const navigate = useNavigate();
  const [navTarget, setNavTarget] = useState(null);
  const timeoutRef = useRef();

  const handleBack = () => {
    navigate("/");
  };

  const handleNav = (e, target) => {
    e.preventDefault();
    if (navTarget) return;
    setNavTarget(target);
    timeoutRef.current = setTimeout(() => navigate(target), 600);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="page intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <header className="intro-header">
        <motion.div
          className="intro-logo"
          onClick={handleBack}
          layoutId="hero-logo"
          style={{ cursor: "pointer" }}
          animate={navTarget ? { scale: 1.1, rotate: 4, opacity: 0.9 } : { scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          NR
        </motion.div>
        <button
          className="intro-back"
          type="button"
          aria-label="Go back"
          onClick={handleBack}
        >
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
        </button>
        <a
          className="intro-hi say-hi"
          href="mailto:nithikroshan03@gmail.com"
        >
          Say hi..
        </a>
      </header>

      <div className="side-text side-text-left intro-left">
        <Link to="/experience">Experience</Link>
        <Link to="/projects" onClick={(e) => handleNav(e, "/projects")}>Projects</Link>
      </div>

      <div className="side-text side-text-right intro-right">
        <Link to="/certificates">Certificates</Link>
      </div>

      <section className="intro-card">
        <div className="intro-text">
          <h1>Hi,</h1>
          <h2>I'm Nithik Roshan Devaraj</h2>
          <h3>MS in Artificial Intelligence</h3>
          <p>
            I build real and practical AI products. I work on LLM and RAG
            systems, FastAPI APIs, and cloud deployments. I enjoy turning ideas
            into working tools like AI Helpdesk Automation and CreditSense AI,
            focusing on clean code, reliable systems, and real results.
          </p>
        </div>
        <div className="introRight">
          <div className="avatarFrame">
            <img src={asset("ava.png")} alt="Avatar" className="avatarImg" />
          </div>
        </div>
      </section>

      <div className="intro-bottom-text">
        <div className="intro-bottom-left">
          <Link
            className="intro-about"
            to="/about"
            onClick={(e) => handleNav(e, "/about")}
          >
            About
          </Link>
        </div>
        <Link
          className={`intro-education-center${navTarget === "/education" ? " intro-nav-active" : ""}`}
          to="/education"
          onClick={(e) => handleNav(e, "/education")}
        >
          <span className="intro-education-left">Educ</span>
          <span className="intro-education-right">ation</span>
        </Link>
        <div className="intro-bottom-right">
          <Link
            className="intro-skills"
            to="/skills"
            onClick={(e) => handleNav(e, "/skills")}
          >
            My Skills
          </Link>
        </div>
      </div>

      <footer className="intro-footer">
        <div className="socials intro-socials">
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
      </footer>

      <div className="intro-corner-logo">
        <LogoButton onClick={handleBack} variant="corner" />
      </div>
    </motion.div>
  );
}
