import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleLogoClick = () => {
    if (isLeaving) return;
    setIsLeaving(true);
    timeoutRef.current = setTimeout(() => navigate("/about"), 650);
  };

  return (
    <motion.main
      className="page home-page"
      style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#faf7f2" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <motion.div
        style={{ display: "grid", placeItems: "center", gap: 18, textAlign: "center" }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.img
          src="/logo.png"
          alt="Logo"
          layoutId="hero-logo"
          onClick={handleLogoClick}
          style={{ width: "clamp(160px, 28vw, 220px)", cursor: "pointer", userSelect: "none" }}
          animate={
            isLeaving
              ? { scale: 6, rotate: 20, opacity: 0 }
              : { scale: 1, rotate: 0, opacity: 1 }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.p
          style={{ letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(0,0,0,0.6)", margin: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeInOut" }}
        >
          click to enter
        </motion.p>
      </motion.div>
    </motion.main>
  );
}
