import { useEffect, useRef } from "react";

export default function VantaNetBg() {
  const containerRef = useRef(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const loadVanta = async () => {
      const [{ default: NET }, THREE] = await Promise.all([
        import("vanta/dist/vanta.net.min"),
        import("three"),
      ]);

      if (cancelled || !containerRef.current) return;

      vantaRef.current = NET({
        el: containerRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x9b9b9b, // subtle grey lines/points
        backgroundColor: 0xf6f1eb, // light beige background
        points: 12.0,
        maxDistance: 18.0,
        spacing: 16.0,
        showDots: true,
      });
    };

    loadVanta();

    const handleResize = () => {
      if (vantaRef.current?.refresh) vantaRef.current.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", handleResize);
      if (vantaRef.current?.destroy) vantaRef.current.destroy();
      vantaRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="vanta-bg" aria-hidden="true" />;
}
