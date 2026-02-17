import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import EducationSection from "../components/EducationSection.jsx";
import styles from "../components/EducationSection.module.css";

export default function Education() {
  const navigate = useNavigate();

  return (
    <motion.div
      className={styles.educationPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <header className={styles.pageHeader}>
        <motion.div
          className={styles.logoMark}
          layoutId="hero-logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          NR
        </motion.div>
        <button
          className={styles.backButton}
          type="button"
          aria-label="Go back"
          onClick={() => navigate(-1)}
        >
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
        </button>
        <a className={styles.sayHi} href="mailto:nithikroshan03@gmail.com">
          Say hi..
        </a>
      </header>

      <motion.main
        className={styles.contentShell}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut", delay: 0.1 }}
      >
        <EducationSection />
      </motion.main>

      <footer className={styles.footer}>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/nithik-roshan-devarajraj-8783192aa"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Nithik09"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github" aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/roshan7.1?igsh=dW55bmRhY2Q2eHJw"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram" aria-hidden="true" />
          </a>
          <div className={styles.socialLine} aria-hidden="true" />
        </div>
      </footer>
    </motion.div>
  );
}
