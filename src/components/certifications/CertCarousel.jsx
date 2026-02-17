import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./CertCarousel.module.css";

const ROTATION_SPEED = 0.015; // degrees per millisecond

export default function CertCarousel({ certifications = [], onView }) {
  const [angle, setAngle] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const frameRef = useRef(null);
  const lastTimestampRef = useRef(0);

  const hasCertificates = certifications.length > 0;
  const orderedCertificates = useMemo(() => certifications, [certifications]);
  const angleStep = hasCertificates ? 360 / orderedCertificates.length : 0;

  useEffect(() => {
    if (!hasCertificates) {
      return undefined;
    }

    const tick = (timestamp) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }

      if (!isPaused) {
        const delta = timestamp - lastTimestampRef.current;
        setAngle((previous) => {
          const next = previous + delta * ROTATION_SPEED;
          const wrapped = next % 360;
          return Number.isFinite(wrapped) ? wrapped : 0;
        });
      }

      lastTimestampRef.current = timestamp;
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = null;
      lastTimestampRef.current = 0;
    };
  }, [hasCertificates, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setHoveredIndex(null);
    const now =
      typeof performance !== "undefined" && performance.now
        ? performance.now()
        : Date.now();
    lastTimestampRef.current = now;
  };

  const handleCardMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsPaused(true);
  };

  const handleCardMouseLeave = () => {
    setHoveredIndex(null);
    setIsPaused(false);
  };

  if (!hasCertificates) {
    return null;
  }

  return (
    <div
      className={`${styles.carousel} certs-carousel`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.track}>
        {orderedCertificates.map((certificate, index) => {
          const baseAngle = index * angleStep;
          const cardAngle = baseAngle + angle;
          const normalized = ((cardAngle % 360) + 360) % 360;
          const signedDelta = normalized > 180 ? normalized - 360 : normalized;
          const absDelta = Math.abs(signedDelta);
          const depth = Math.cos((normalized * Math.PI) / 180);

          const scale = 0.9 + Math.max(depth, 0) * 0.12;
          const opacity = 1;
          const zIndex = Math.round(100 + depth * 120);
          const pointerEvents = "auto";
          const isActive = hoveredIndex === index || absDelta <= angleStep / 2;

          return (
            <article
              key={certificate.id ?? certificate.title}
              className={[
                styles.card,
                isActive ? styles.cardActive : "",
                hoveredIndex === index ? styles.cardHovered : ""
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                "--card-transform": `rotateY(${cardAngle}deg) translateZ(var(--carousel-radius))`,
                "--card-inverse-rotation": `rotateY(${-cardAngle}deg) scale(${scale})`,
                opacity,
                zIndex,
                pointerEvents
              }}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className={styles.cardSurface}>
                <div className={styles.preview}>
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} preview`}
                    draggable="false"
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardBody}>
                  <header className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{certificate.title}</h3>
                    <span className={styles.cardIssuer}>Issuer: {certificate.issuer}</span>
                    <span className={styles.cardDuration}>{certificate.duration}</span>
                  </header>
                  <p className={styles.cardDescription}>{certificate.description}</p>
                  <div className={styles.buttonRow}>
                    <button
                      type="button"
                      className={styles.viewButton}
                      onClick={() => onView(certificate)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className={styles.shadowLayer} aria-hidden="true" />
    </div>
  );
}
