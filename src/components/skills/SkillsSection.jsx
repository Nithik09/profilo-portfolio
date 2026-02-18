import { useMemo } from "react";
import SkillsMarqueeRow from "./SkillsMarqueeRow";
import styles from "./SkillsSection.module.css";

const skillRows = [
  {
    title: "AI / Machine Learning",
    skills: [
      { name: "Machine Learning", icon: "/skills/AI  Machine Learning/Machine learning.jpg" },
      { name: "Deep Learning", icon: "/skills/AI  Machine Learning/deep learning.png" },
      {
        name: "Natural Language Processing",
        icon: "/skills/AI  Machine Learning/Natural langauge processing.png",
      },
      { name: "Computer Vision", icon: "/skills/AI  Machine Learning/computer vision.png" },
      { name: "Transformers", icon: "/skills/AI  Machine Learning/Transformers.png" },
      {
        name: "Large Language Models",
        icon: "/skills/AI  Machine Learning/Large Language Models.jpg",
      },
      { name: "Prompt Engineering", icon: "/skills/AI  Machine Learning/Prompt Engineering.webp" },
      { name: "Vector Embeddings", icon: "/skills/AI  Machine Learning/Vector Embeddings.png" },
    ],
  },
  {
    title: "AI Systems & MLOps",
    skills: [
      { name: "Model Serving", icon: "/skills/AI Systems & MLOps/AI Systems & MLOps.jpg" },
      { name: "Inference Optimization", icon: "/skills/AI Systems & MLOps/Inference Optimization.png" },
      { name: "Feature Stores", icon: "/skills/AI Systems & MLOps/Feature Stores.jpg" },
      { name: "ML Pipelines", icon: "/skills/AI Systems & MLOps/ML Pipelines.png" },
      { name: "Model Monitoring", icon: "/skills/AI Systems & MLOps/Model Monitoring.png" },
      { name: "Experiment Tracking", icon: "/skills/AI Systems & MLOps/Experiment Tracking.jpg" },
      { name: "Model Registry", icon: "/skills/AI Systems & MLOps/Model Registry.jpg" },
      { name: "Data Validation", icon: "/skills/AI Systems & MLOps/Data Validation.jpg" },
    ],
  },
  {
    title: "Cloud / DevOps",
    skills: [
      { name: "Docker", icon: "/skills/Cloud  DevOps/Docker.jpg" },
      { name: "Kubernetes", icon: "/skills/Cloud  DevOps/Kubernetes.jpg" },
      { name: "CI/CD", icon: "/skills/Cloud  DevOps/CICD.png" },
      { name: "Infrastructure as Code", icon: "/skills/Cloud  DevOps/Infrastructure as Code.jpg" },
      { name: "AWS", icon: "/skills/Cloud  DevOps/AWS.png" },
      { name: "Azure", icon: "/skills/Cloud  DevOps/Azure.jpg" },
      { name: "GCP", icon: "/skills/Cloud  DevOps/GCP.png" },
      { name: "Observability", icon: "/skills/Cloud  DevOps/Observability.jpg" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: "/skills/Programming/cpp.png" },
      { name: "Java", icon: "/skills/Programming/java.png" },
      { name: "SQL", icon: "/skills/Programming/sql.png" },
      { name: "JSON", icon: "/skills/Programming/json.png" },
      { name: "YAML", icon: "/skills/Programming/yaml.png" },
      { name: "Python", icon: "/skills/Programming/python.png" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "jQuery", icon: "/skills/Frontend/jQuery.png" },
      { name: "HTML", icon: "/skills/Frontend/hTML.png" },
      { name: "CSS", icon: "/skills/Frontend/cSS.png" },
      { name: "SCSS", icon: "/skills/Frontend/sCSS.png" },
      { name: "Flutter", icon: "/skills/Frontend/flutter.png" },
      { name: "React", icon: "/skills/Frontend/react.js.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "REST API", icon: "/skills/Backend/restAPI.png" },
      { name: "GraphQL", icon: "/skills/Backend/graphQL.png" },
      { name: "gRPC", icon: "/skills/Backend/gRPC.png" },
      { name: "Redis", icon: "/skills/Backend/redis.png" },
      { name: "Protocol Buffers", icon: "/skills/Backend/protocol Buffers.png" },
      { name: "Node.js", icon: "/skills/Backend/node.js.png" },
    ],
  },
];

export default function SkillsSection() {
  const asset = (path) => {
    const cleaned = path.startsWith("/") ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${encodeURI(cleaned)}`;
  };

  const rows = useMemo(
    () =>
      skillRows.map((row) => ({
        ...row,
        skills: row.skills.map((skill) =>
          typeof skill === "string" ? skill : { ...skill, icon: asset(skill.icon) }
        ),
      })),
    []
  );

  return (
    <section className={styles.section} id="skills">
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.rows}>
        {rows.map((config) => (
          <SkillsMarqueeRow
            key={config.title}
            title={config.title}
            skills={config.skills}
          />
        ))}
      </div>
    </section>
  );
}
