import { useEffect, useRef } from "react";
import styles from "./Certifications.module.css";
import type { Certificate } from "./Certifications";

type Props = {
  open: boolean;
  certificate: Certificate | null;
  onClose: () => void;
};

export default function CertificateModal({ open, certificate, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return undefined;
    const originalBody = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = originalBody;
    };
  }, [open, onClose]);

  if (!open || !certificate) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      className={styles.modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-label="Certificate preview"
      onClick={handleOverlayClick}
    >
      <div className={styles.modalCard}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className={styles.modalImageWrap}>
          <img src={certificate.image} alt={certificate.title} />
        </div>

        <div className={styles.modalMeta}>
          <h3>{certificate.title}</h3>
          <span>{certificate.issuer}</span>
          <span>{certificate.issued}</span>
        </div>

        <div className={styles.modalActions}>
          <a
            href={certificate.image}
            download
            className={styles.downloadButton}
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
          <button className={styles.modalSecondary} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
