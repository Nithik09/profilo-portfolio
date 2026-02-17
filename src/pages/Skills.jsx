import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SkillsSection from "../components/skills/SkillsSection.jsx";

export default function Skills() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page skills-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <header className="skills-header">
        <motion.div
          className="skills-logo"
          layoutId="hero-logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          NR
        </motion.div>
        <button
          className="skills-back"
          type="button"
          aria-label="Go back"
          onClick={() => navigate(-1)}
        >
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
        </button>
        <a className="skills-contact" href="mailto:nithikroshan03@gmail.com">
          Say hi..
        </a>
      </header>

      <motion.main
        className="skills-content"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut", delay: 0.1 }}
      >
        <SkillsSection />
      </motion.main>
    </motion.div>
  );
}
