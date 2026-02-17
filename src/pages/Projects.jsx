import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import VantaNetBg from "../components/Background/VantaNetBg.jsx";

const projects = [
  {
    title: "AI Helpdesk Automation (RAG + n8n)",
    description:
      "Description: End-to-end AI-powered helpdesk system that validates users, retrieves knowledge using RAG (Qdrant + embeddings), and generates grounded LLM responses with citations. Includes ticket creation, escalation workflows, and PostgreSQL logging.",
    image: "/projects/p1.png",
    link: "https://github.com/Nithik09/ai-helpdesk-chatbot.git",
    tags: ["#RAG", "#Qdrant", "#LLM", "#n8n"],
  },
  {
    title: "AI Credit Risk Decision Engine",
    description:
      "Built a production-grade AI credit risk decision engine that delivers calibrated default probability, risk tiers, and explainable underwriting signals via a FastAPI backend and Next.js frontend.",
    image: "/projects/p2.png",
    link: "https://github.com/Nithik09/ai-credit-risk-decision-engine.git",
    tags: [
      "#CreditRisk",
      "#FinTech",
      "#MachineLearning",
      "#FastAPI",
      "#NextJS",
      "#ExplainableAI",
      "#FairnessAI",
      "#MLOps",
      "#RiskScoring",
      "#ProductionAI",
    ],
  },
  {
    title: "AI Engineer Portfolio Platform",
    description:
      "Designed and built a modular, animated AI engineer portfolio with infinite skill loops, custom UI components, and production-ready project architecture.",
    image: "/projects/p3.png",
    link: "https://github.com/Nithik09/profilo-portfolio.git",
    tags: [
      "#NextJS",
      "#React",
      "#FrontendArchitecture",
      "#UIEngineering",
      "#SystemDesign",
      "#Animation",
      "#Performance",
    ],
  },
  {
    title: "IntelliOps AI",
    description:
      "An enterprise AI decision intelligence platform designed to accelerate analytics, forecasting, and operational optimization through predictive modeling and natural language insights.",
    image: "/projects/p4.png",
    link: "https://github.com/AutomationRabbit/automationrabbit/blob/master/content/introducing-acme-ai.mdx",
    tags: [
      "#RAG",
      "#Qdrant",
      "#LLM",
      "#n8n",
      "#FastAPI",
      "#PostgreSQL",
      "#VectorSearch",
      "#MLOps",
    ],
  },
  {
    title: "LeadFlow AI - Intelligent Outreach Automation",
    description:
      "An AI-powered outreach automation system designed to generate personalized cold emails, manage prospect workflows, and automate follow-ups using LLM-driven content generation and pipeline logic.",
    image: "/projects/p5.png",
    link: "https://github.com/Nithik09/LeadFlow-AI---Intelligent-Outreach-Automation.git",
    tags: [
      "#LLM",
      "#Automation",
      "#EmailAI",
      "#WorkflowAutomation",
      "#LeadGeneration",
      "#FastAPI",
      "#B2B",
      "#GrowthTech",
    ],
  },
  {
    title: "Distributed Job Orchestration Engine",
    description:
      "Engineered a distributed task orchestration engine capable of scheduling and executing thousands of parallel compute jobs.",
    image: "/projects/p6.png",
    link: "https://github.com/Nithik09/Distributed-Job-Orchestration-Engine.git",
    tags: [
      "#SecurityEngineering",
      "#Authentication",
      "#Authorization",
      "#RBAC",
      "#OAuth",
      "#JWT",
      "#ZeroTrust",
      "#BackendSystems",
      "#EnterpriseSoftware",
      "#SystemArchitecture",
    ],
  },
  {
    title: "Secure Identity & Access Platform",
    description:
      "Designed a role-based authentication and authorization system with JWT, OAuth, and multi-tenant access control.",
    image: "/projects/p7.png",
    link: "https://github.com/Nithik09/Secure-Identity-Access-Platform.git",
    tags: [
      "#CloudNative",
      "#DevOps",
      "#Kubernetes",
      "#Docker",
      "#CICD",
      "#InfrastructureAsCode",
      "#CloudEngineering",
      "#ScalableSystems",
      "#SystemDesign",
      "#PlatformEngineering",
    ],
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const rowRef = useRef(null);
  const [activeTitle, setActiveTitle] = useState(projects[0]?.title ?? "");

  useEffect(() => {
    document.body.classList.add("projects-mesh");
    return () => {
      document.body.classList.remove("projects-mesh");
    };
  }, []);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let rafId = 0;
    const updateActive = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cards = Array.from(row.querySelectorAll(".project-card"));
        if (!cards.length) return;
        const centerX = row.scrollLeft + row.clientWidth / 2;
        let closestCard = cards[0];
        let closestDistance = Infinity;

        for (const card of cards) {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const distance = Math.abs(centerX - cardCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = card;
          }
        }

        const title = closestCard.dataset.title;
        if (title) setActiveTitle(title);
      });
    };

    const handleScroll = () => {
      const max = row.scrollWidth / 2;
      if (max <= 0) return;
      if (row.scrollLeft >= max) {
        row.scrollLeft -= max;
      } else if (row.scrollLeft <= 0) {
        row.scrollLeft += max;
      }
      updateActive();
    };

    updateActive();
    row.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      row.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActive);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <motion.div
      className="page projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <VantaNetBg />

      <motion.div
        layoutId="hero-logo"
        style={{
          position: "fixed",
          top: "18px",
          left: "22px",
          cursor: "pointer",
          color: "#000",
          fontWeight: 700,
          fontSize: "20px",
          zIndex: 12,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onClick={() => navigate("/intro")}
        aria-label="Go to intro"
      >
        NR
      </motion.div>

      <button
        type="button"
        aria-label="Go back"
        onClick={() => navigate(-1)}
        style={{
          position: "fixed",
          top: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          border: "1px solid #dcdcdc",
          background: "#fff",
          boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          zIndex: 12,
        }}
      >
        <i className="fa-solid fa-arrow-left" aria-hidden="true" />
      </button>

      <a
        className="projects-contact"
        href="mailto:nithikroshan03@gmail.com"
        style={{
          position: "fixed",
          top: "22px",
          right: "28px",
          zIndex: 12,
        }}
      >
        Say hi..
      </a>

      <div className="projects-watermark" aria-hidden="true">PROJECTS</div>

      <main className="projects-content">
        <div className="projects-row" role="list" ref={rowRef}>
          {[...projects, ...projects].map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="project-card"
              role="listitem"
              data-title={project.title}
            >
              <div className="project-card-inner">
                <div className="project-card-face project-card-front">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-card-face project-card-back">
                  <div className="project-card-media">
                    {project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <div className="project-image-placeholder" aria-hidden="true" />
                    )}
                  </div>
                  <div className="project-card-tags">
                    {(project.tags || []).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-card-actions">
                    {project.link ? (
                      <a
                        href={project.link}
                        className="project-visit"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit
                      </a>
                    ) : (
                      <span className="project-visit">Visit</span>
                    )}
                    <div className="project-github" aria-hidden="true">
                      <i className="fa-brands fa-github" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <div className="projects-bottom" aria-live="polite">
        <span className="projects-bottom-label">Project</span>
        <span className="projects-bottom-title">{activeTitle}</span>
      </div>
    </motion.div>
  );
}
