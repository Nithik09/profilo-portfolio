import { useState } from "react";
import styles from "./EducationSection.module.css";

const educationItems = [
  {
    id: "ms-ai",
    degree: "MS in Artificial Intelligence",
    school: "Illinois Institute of Technology",
    location: "Chicago, USA",
    years: "Jan 2024 - Dec 2025",
    highlights: [
      "Advanced work across machine learning, deep learning, and NLP with production-minded projects.",
      "Built cloud-ready data and MLOps pipelines for scalable model training and inference.",
    ],
    icon: "fa-solid fa-brain",
    level: "Graduate",
  },
  {
    id: "btech",
    degree: "B.Tech in Computer Science Engineering",
    school: "Vel Tech",
    location: "Chennai, India",
    years: "2019 - 2023",
    highlights: [
      "Strong CS fundamentals - algorithms, systems, databases, and software engineering projects.",
      "Early machine learning exposure and backend development practice across team builds.",
    ],
    icon: "fa-solid fa-laptop-code",
    level: "Undergraduate",
  },
  {
    id: "high-school",
    degree: "High School",
    school: "Velammal",
    location: "Surapet, Chennai, India",
    years: "Graduated 2019",
    highlights: [
      "Grounded in math, physics, and early programming that shaped analytical thinking.",
      "Built discipline through competitive academics and problem-based learning.",
    ],
    icon: "fa-solid fa-graduation-cap",
    level: "Secondary",
  },
];

export default function EducationSection() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="education" className={styles.sectionShell}>
      <div className={styles.watermark} aria-hidden="true">
        EDUCATION
      </div>
      <div className={styles.spine} aria-hidden="true" />

      <div className={styles.headingBlock}>
        <p className={styles.kicker}>Learning journey</p>
        <h1 className={styles.title}>Education</h1>
        <p className={styles.subtitle}>
          AI-first perspective built on solid computer science fundamentals and disciplined study.
        </p>
      </div>

      <div className={styles.list}>
        {educationItems.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`${styles.row} ${isEven ? "" : styles.reverse}`}
              style={{ animationDelay: `${0.08 * (idx + 1)}s` }}
            >
              <article className={`${styles.card} ${styles.summaryCard}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBadge} aria-hidden="true">
                    <i className={item.icon} />
                  </div>
                  <div className={styles.cardHeadings}>
                    <h2 className={styles.degree}>{item.degree}</h2>
                    <p className={styles.school}>{item.school}</p>
                    <p className={styles.location}>{item.location}</p>
                  </div>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.pill}>{item.level}</span>
                  <span className={styles.dates}>{item.years}</span>
                  <button
                    type="button"
                    className={styles.readMore}
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-details`}
                  >
                    {isOpen ? "Close" : "Read more"}
                  </button>
                </div>
              </article>

              <article
                id={`${item.id}-details`}
                className={`${styles.card} ${styles.detailCard} ${isOpen ? styles.open : styles.collapsed}`}
                aria-hidden={!isOpen}
              >
                <h3 className={styles.detailTitle}>Highlights</h3>
                <ul className={styles.highlightList}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className={styles.highlightItem}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
