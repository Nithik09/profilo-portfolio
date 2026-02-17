import { useEffect, useRef } from "react";
import styles from "./CertificateModal.module.css";

export default function CertificateModal({ open, certificate, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [open, onClose]);

  if (!open || !certificate) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      onClick={handleOverlayClick}
    >
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close certificate preview"
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>

        <header className={styles.header}>
          <h2 id="certificate-modal-title" className={styles.title}>
            {certificate.title}
          </h2>
          {certificate.year ? (
            <span className={styles.year}>{certificate.year}</span>
          ) : null}
        </header>

        <div className={styles.preview}>
          <div className={styles.previewFrame}>
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate mockup`}
            />
          </div>
        </div>

        {certificate.description ? (
          <p className={styles.description}>{certificate.description}</p>
        ) : null}

      </div>
    </div>
  );
}
