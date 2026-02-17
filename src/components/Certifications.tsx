import { useEffect, useMemo, useState } from "react";
import styles from "./Certifications.module.css";
import CertificateModal from "./CertificateModal";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  description: string;
  image: string;
  verifyUrl?: string;
};

const CERTIFICATES: Certificate[] = [
  {
    id: "google",
    title: "Google AI Essentials",
    issuer: "Google",
    issued: "Issued: Sep 2025",
    description: "Foundations in ML concepts and responsible AI practices.",
    image: "/certs/google.png",
    verifyUrl: "#"
  },
  {
    id: "awsai",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    issued: "Issued: Aug 2025",
    description: "Validated expertise in cloud AI/ML workflows and services.",
    image: "/certs/awsai.png",
    verifyUrl: "#"
  },
  {
    id: "awstraining",
    title: "AWS Educate – Introduction to Generative AI",
    issuer: "Amazon Web Services",
    issued: "Issued: Aug 2025",
    description: "Hands-on understanding of generative models and real use-cases.",
    image: "/certs/Awstraining.png",
    verifyUrl: "#"
  },
  {
    id: "ibm",
    title: "Real-Time Communication System Powered by AI",
    issuer: "ICT Academy / IBM Developer Skills Network",
    issued: "Issued: Feb 2023",
    description: "Built AI-powered accessibility and communication system.",
    image: "/certs/ibm.png",
    verifyUrl: "#"
  },
  {
    id: "journay",
    title: "MENTIES Report Generating System (JETIR)",
    issuer: "Journal of Emerging Technologies and Innovative Research",
    issued: "Issued: May 2023",
    description: "Automated report generation research publication.",
    image: "/certs/journay.png",
    verifyUrl: "#"
  },
  {
    id: "hackton",
    title: "Python (HackerRank)",
    issuer: "HackerRank",
    issued: "Issued: Feb 2025",
    description: "Strong Python problem-solving and algorithms.",
    image: "/certs/hackton python.png",
    verifyUrl: "#"
  },
  {
    id: "blockchain",
    title: "Blockchain A–Z",
    issuer: "Udemy",
    issued: "Issued: Jan 2025",
    description: "Built blockchain apps, smart contracts, decentralized systems.",
    image: "/certs/blockchain.png",
    verifyUrl: "#"
  }
];

export default function Certifications() {
  const [active, setActive] = useState<Certificate | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.matchMedia("(max-width: 720px)").matches);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const certificates = useMemo(() => CERTIFICATES, []);

  return (
    <section className={styles.section} id="certifications">
      <header className={styles.headerBlock}>
        <span className={styles.overline}>Certifications</span>
        <h2 className={styles.title}>Proof of Practice</h2>
        <p className={styles.subtitle}>
          Credentials backing my AI, cloud, and engineering work. Tap a card to preview and verify.
        </p>
      </header>

      <div className={styles.grid}>
        <aside className={styles.avatarColumn}>
          <div className={styles.avatarCard}>
            <img src="/ava3.png" alt="Portrait" loading="lazy" />
          </div>
        </aside>

        <div className={styles.carouselColumn}>
          <div className={isMobile ? styles.slider : styles.carousel}>
            <div className={isMobile ? styles.sliderTrack : styles.carouselTrack}>
              {certificates.map((cert) => (
                <article
                  key={cert.id}
                  className={`${styles.card} ${styles.cardFlat}`}
                  onClick={() => setActive(cert)}
                >
                  <div className={styles.preview}>
                    <img src={cert.image} alt={`${cert.title} preview`} loading="lazy" />
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.cardTitle}>{cert.title}</h3>
                      <span className={styles.cardIssuer}>{cert.issuer}</span>
                      <span className={styles.cardDuration}>{cert.issued}</span>
                    </div>
                    <p className={styles.cardDescription}>{cert.description}</p>
                    <div className={styles.buttonRow}>
                      <button
                        type="button"
                        className={styles.viewButton}
                        onClick={() => setActive(cert)}
                      >
                        View
                      </button>
                      <a
                        className={styles.verifyButton}
                        href={cert.verifyUrl ?? "#"}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Verify
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.spacer} aria-hidden="true" />
      </div>

      <CertificateModal
        open={Boolean(active)}
        certificate={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
