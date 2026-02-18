import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page experience-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      <header className="experience-header">
        <motion.div
          className="experience-logo"
          layoutId="hero-logo"
          onClick={() => navigate("/intro")}
          style={{ cursor: "pointer" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          NR
        </motion.div>
        <button
          className="experience-back"
          type="button"
          aria-label="Go back"
          onClick={() => navigate(-1)}
        >
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
        </button>
        <div className="experience-spacer" aria-hidden="true" />
      </header>

      <div className="experience-watermark" aria-hidden="true">
        EXPERIENCE
      </div>

      <div className="experience-line" aria-hidden="true" />

      <main className="experience-content">
        <div className="experience-list">
          <div className="experience-row">
            <section className="experience-card">
              <h2>Automation Rabbit</h2>
              <h3>AI Engineer</h3>
              <p className="experience-date">Oct 2025 - Present</p>
              <p className="experience-location">Remote</p>
              <span className="experience-pill">FULL TIME</span>

              <div className="experience-tags">
                <span>LLMs</span>
                <span>RAG</span>
                <span>FastAPI</span>
                <span>Python</span>
                <span>Vector DBs</span>
                <span>REST APIs</span>
                <span>Docker</span>
                <span>Cloud (AWS/GCP)</span>
                <span>Async Workers</span>
                <span>CI/CD</span>
              </div>
            </section>

            <section className="experience-card detail">
              <h4>Role Focus</h4>
              <p>
                Building production-ready AI systems with a strong emphasis on
                automation, reliability, and real-world deployment.
              </p>

              <h4>What I Do (Advanced and Impactful)</h4>
              <ul>
                <li>
                  Designed and deployed end-to-end AI automation workflows
                  using LLMs, RAG pipelines, and API-driven orchestration.
                </li>
                <li>
                  Built LLM-powered agents for document understanding, task
                  automation, and decision support with prompt engineering,
                  tool calling, and memory.
                </li>
                <li>
                  Implemented Retrieval-Augmented Generation systems using
                  vector databases for accurate, context-aware responses.
                </li>
                <li>
                  Developed FastAPI-based microservices for AI inference,
                  workflow triggers, and system integrations.
                </li>
                <li>
                  Integrated event-driven automation using queues and
                  background workers to handle large-scale async processing.
                </li>
                <li>
                  Optimized latency and cost by tuning prompts, batching
                  requests, and caching embeddings.
                </li>
                <li>
                  Deployed AI services on cloud infrastructure (AWS/GCP) with
                  Docker, CI/CD, and environment-based configuration.
                </li>
                <li>
                  Monitored system performance, failures, and model behavior
                  to ensure production reliability.
                </li>
                <li>
                  Collaborated closely with product and engineering teams to
                  ship features fast - often taking ideas from concept to
                  deployment in days, not weeks.
                </li>
              </ul>
            </section>
          </div>

          <div className="experience-row">
            <section className="experience-card">
              <h2>McCormick Market</h2>
              <h3>AI Engineer / Full-Stack Developer</h3>
              <p className="experience-date">May 2024 - Present</p>
              <p className="experience-location">Chicago, IL</p>
              <span className="experience-pill">REAL-WORLD PROJECT</span>

              <div className="experience-tags">
                <span>LLMs</span>
                <span>NLP</span>
                <span>AI Automation</span>
                <span>FastAPI</span>
                <span>React</span>
                <span>JavaScript</span>
                <span>REST APIs</span>
                <span>Cloud Deployment</span>
              </div>
            </section>

            <section className="experience-card detail">
              <h4>What I Built and Owned</h4>
              <ul>
                <li>
                  Designed and launched a production-grade website for a live
                  retail business, focused on performance, usability, and real
                  customer workflows.
                </li>
                <li>
                  Integrated AI-powered features to support business
                  operations, customer interaction, and internal automation.
                </li>
                <li>
                  Built LLM-based systems for smart responses, content
                  generation, and decision support (NLP-driven).
                </li>
                <li>
                  Developed backend APIs to power dynamic content, AI
                  interactions, and automation pipelines.
                </li>
                <li>
                  Implemented end-to-end AI workflows, reducing manual effort
                  and improving operational efficiency.
                </li>
                <li>
                  Deployed and maintained the application on the cloud,
                  ensuring reliability, scalability, and fast iteration.
                </li>
                <li>
                  Took full ownership from requirements to build to deploy to
                  iterate, working with real feedback from a running business.
                </li>
              </ul>

              <h4>Impact</h4>
              <ul>
                <li>
                  Transformed a traditional retail website into an AI-enabled,
                  modern business platform.
                </li>
                <li>
                  Shipped usable features within 3-4 days per iteration while
                  keeping clean, maintainable code.
                </li>
                <li>
                  Built real, deployable AI systems used by real customers,
                  not demos or academic projects.
                </li>
              </ul>
            </section>
          </div>

          <div className="experience-row">
            <section className="experience-card">
              <h2>IEEE Web Developer</h2>
              <h3>Illinois Institute of Technology - Internship</h3>
              <p className="experience-date">Oct 2025 - Jan 2026</p>
              <p className="experience-location">Chicago, IL - On-site</p>
              <span className="experience-pill">INTERNSHIP</span>

              <div className="experience-tags">
                <span>JavaScript</span>
                <span>React</span>
                <span>Web Engineering</span>
                <span>API Integration</span>
                <span>UI Systems</span>
                <span>Git</span>
                <span>Performance Optimization</span>
              </div>
            </section>

            <section className="experience-card detail">
              <h4>What I Do</h4>
              <ul>
                <li>
                  Build and maintain production-ready web applications
                  supporting IEEE initiatives, with a strong focus on
                  reliability, performance, and clean engineering.
                </li>
                <li>
                  Develop modern, responsive frontends using reusable
                  components and scalable UI patterns.
                </li>
                <li>
                  Integrate and consume backend APIs and data services,
                  ensuring secure and efficient data flow.
                </li>
                <li>
                  Collaborate closely with technical and non-technical
                  stakeholders to deliver features on tight timelines.
                </li>
                <li>
                  Optimize UI performance, improve maintainability, and follow
                  industry-standard engineering practices.
                </li>
                <li>
                  Apply real-world software engineering discipline - version
                  control, reviews, and testing - to ship usable systems, not
                  prototypes.
                </li>
              </ul>
            </section>
          </div>

          <div className="experience-row">
            <section className="experience-card">
              <h2>CGI</h2>
              <h3>Software Engineer</h3>
              <p className="experience-date">Jul 2021 - Dec 2023</p>
              <p className="experience-location">Chennai, India</p>
              <span className="experience-pill">FULL TIME</span>

              <div className="experience-tags">
                <span>Backend Development</span>
                <span>APIs</span>
                <span>Data Processing</span>
                <span>SQL</span>
                <span>Dashboards</span>
                <span>Automation</span>
                <span>Enterprise Systems</span>
              </div>
            </section>

            <section className="experience-card detail">
              <h4>What I Worked On</h4>
              <ul>
                <li>
                  Built and maintained scalable backend and data-driven
                  systems used in real production environments.
                </li>
                <li>
                  Worked across software engineering, data processing, and
                  analytics workflows, supporting large-scale enterprise
                  applications.
                </li>
                <li>
                  Developed and optimized APIs, data pipelines, and internal
                  tools to improve system reliability and performance.
                </li>
                <li>
                  Collaborated closely with cross-functional teams
                  (engineering, data, and business) to deliver features on
                  time.
                </li>
                <li>
                  Created dashboards and reports to track system health,
                  performance metrics, and operational insights.
                </li>
                <li>
                  Improved automation and reporting workflows, reducing manual
                  effort and increasing delivery speed.
                </li>
                <li>
                  Gained strong experience working in enterprise-grade
                  systems, focusing on clean code, documentation, and
                  long-term maintainability.
                </li>
              </ul>

              <h4>Impact</h4>
              <ul>
                <li>
                  Supported large-scale, real-world applications with
                  measurable business impact.
                </li>
                <li>
                  Built a strong foundation in engineering discipline,
                  ownership, and delivery consistency.
                </li>
                <li>
                  Learned how to ship reliable software in production
                  environments, not just prototypes.
                </li>
              </ul>
            </section>
          </div>

          <div className="experience-row">
            <section className="experience-card">
              <h2>CGI</h2>
              <h3>Software Engineer Intern</h3>
              <p className="experience-date">Jan 2021 - Jul 2021</p>
              <p className="experience-location">Chennai, India</p>
              <span className="experience-pill">INTERNSHIP</span>

              <div className="experience-tags">
                <span>Backend Development</span>
                <span>SQL</span>
                <span>APIs</span>
                <span>Automation</span>
                <span>Debugging</span>
                <span>Enterprise Systems</span>
              </div>
            </section>

            <section className="experience-card detail">
              <h4>What I Worked On</h4>
              <ul>
                <li>
                  Assisted in building and maintaining backend components and
                  internal tools used in enterprise applications.
                </li>
                <li>
                  Worked with SQL and structured data to support reporting,
                  validation, and data consistency checks.
                </li>
                <li>
                  Contributed to API development and testing, ensuring reliable
                  data flow between services.
                </li>
                <li>
                  Supported automation and documentation tasks, improving
                  development and delivery workflows.
                </li>
                <li>
                  Collaborated with senior engineers to understand production
                  systems, code standards, and best practices.
                </li>
                <li>
                  Gained hands-on exposure to real-world software engineering
                  processes, including code reviews, debugging, and
                  deployments.
                </li>
              </ul>

              <h4>Outcome</h4>
              <ul>
                <li>
                  Built a strong foundation in software engineering
                  fundamentals.
                </li>
                <li>
                  Learned how professional teams design, test, and ship
                  production-ready code.
                </li>
                <li>
                  Developed discipline around clean code, timelines, and
                  ownership early in my career.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <footer className="experience-footer">
        <div className="socials experience-socials">
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
    </motion.div>
  );
}
