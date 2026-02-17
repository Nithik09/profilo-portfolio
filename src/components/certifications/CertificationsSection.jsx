import { useMemo, useState } from "react";
import CertCarousel from "./CertCarousel.jsx";
import CertificateModal from "./CertificateModal.jsx";
import styles from "./CertificationsSection.module.css";

const CERTIFICATION_DATA = [
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials",
    issuer: "Google",
    duration: "Issued: Sep 2025",
    description:
      "Strong foundation in machine learning concepts and responsible AI practices.",
    image: "/certs/google.png",
    verifyUrl: "#"
  },
  {
    id: "aws-ai-practitioner",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services (AWS)",
    duration: "Issued: Aug 2025",
    description:
      "Validated expertise in AI/ML workflows and cloud-based AI services.",
    image: "/certs/awsai.png",
    verifyUrl: "#"
  },
  {
    id: "aws-educate-generative-ai",
    title: "AWS Educate – Introduction to Generative AI",
    issuer: "Amazon Web Services (AWS)",
    duration: "Issued: Aug 2025",
    description:
      "Hands-on understanding of generative AI models and real-world use cases.",
    image: "/certs/Awstraining.png",
    verifyUrl: "#"
  },
  {
    id: "real-time-communication-ai",
    title: "Real-Time Communication System Powered by AI for Specially Abled",
    issuer: "ICT Academy (IBM Developer Skills Network)",
    duration: "Issued: Feb 2023",
    description:
      "Built an AI-powered system to enhance accessibility and real-time communication.",
    image: "/certs/ibm.png",
    verifyUrl: "#"
  },
  {
    id: "menties-report-system",
    title: "MENTIES Report Generating System (JETIR Publication)",
    issuer: "Journal of Emerging Technologies and Innovative Research",
    duration: "Issued: May 2023",
    description:
      "Designed and published an automated report generation research system.",
    image: "/certs/journay.png",
    verifyUrl: "#"
  },
  {
    id: "python-hackerrank",
    title: "Python (HackerRank)",
    issuer: "HackerRank",
    duration: "Issued: Feb 2025",
    description:
      "Demonstrated strong Python problem-solving and algorithmic skills.",
    image: "/certs/hackton python.png",
    verifyUrl: "#"
  },
  {
    id: "blockchain-az",
    title: "Blockchain A–Z: Build a Blockchain + Crypto + ChatGPT Prize",
    issuer: "Udemy",
    duration: "Issued: Jan 2025",
    description:
      "Built blockchain applications including smart contracts and decentralized systems.",
    image: "/certs/blockchain.png",
    verifyUrl: "#"
  }
];

export default function CertificationsSection() {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const isModalOpen = Boolean(activeCertificate);

  const certifications = useMemo(() => CERTIFICATION_DATA, []);

  const handleView = (certificate) => {
    setActiveCertificate(certificate);
  };

  const handleClose = () => {
    setActiveCertificate(null);
  };

  return (
    <section className={styles.section} id="certifications">
      <div className={`${styles.content} certs-stage`}>
        <header className={styles.headerBlock}>
          <span className={styles.overline}>Certifications</span>
          <h2 className={styles.title}>Proof of Practice</h2>
          <p className={styles.subtitle}>
            A rotating gallery featuring the credentials backing my AI and cloud
            work. Hover to explore specifics, pause the motion, and open the
            certificate preview when you want a closer look.
          </p>
        </header>

        <div className={styles.avatarWrap}>
          <div className={styles.avatarFrame}>
            <img src="/ava3.png" alt="Portrait" />
          </div>
        </div>

        <div className={styles.certStage}>
          <CertCarousel certifications={certifications} onView={handleView} />
        </div>
      </div>

      <CertificateModal
        open={isModalOpen}
        certificate={activeCertificate}
        onClose={handleClose}
      />
    </section>
  );
}
