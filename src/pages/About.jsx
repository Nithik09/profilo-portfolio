import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <header className="about-header">
        <motion.div
          className="about-logo"
          onClick={() => navigate("/")}
          layoutId="hero-logo"
          style={{ cursor: "pointer" }}
        >
          NR
        </motion.div>
        <button
          className="about-back"
          type="button"
          aria-label="Go back"
          onClick={() => navigate(-1)}
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
        <a className="about-hi" href="mailto:nithikroshan03@gmail.com">
          Say hi..
        </a>
      </header>

      <div className="about-watermark" aria-hidden="true">
        ABOUT
      </div>

      <main className="about-content">
        <section className="about-card">
          <p>
            I'm a builder who values consistency, speed, and ownership.
          </p>
          <p>
            When I take on a project, I move fast and finish strong - usually
            turning ideas into working products within 3-4 days. I focus on
            execution over perfection and believe real progress comes from
            shipping, learning, and iterating.
          </p>
          <p>
            I break complex problems into simple steps, build end-to-end
            systems, and improve them through feedback and refinement. I don't
            wait for motivation or ideal conditions - I rely on discipline and
            routine.
          </p>
          <p>
            I take full ownership of my work. I set deadlines, stick to them,
            and hold myself accountable. Whether I'm learning something new or
            building a product, I show up every day and make measurable
            progress.
          </p>
          <p>
            I'm driven by clarity, consistency, and results - not hype. Over
            time, this mindset has helped me build real projects, learn deeply,
            and grow as an engineer.
          </p>
          <p className="about-cta">
            If you're looking for someone who executes, delivers, and doesn't
            quit halfway, we'll get along well.
          </p>
        </section>

        <aside className="about-avatar">
          <img src="/ava2.png" alt="Avatar" />
        </aside>
      </main>

      <footer className="about-footer">
        <div className="socials about-socials">
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
          <div className="social-line" aria-hidden="true" />
        </div>
      </footer>
    </motion.div>
  );
}
