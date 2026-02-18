import { useEffect, useRef } from "react";

const asset = (path) => {
  const cleaned = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${encodeURI(cleaned)}`;
};

export default function FuturisticCursor({ enableSmoke = true, enableDragon = true }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pointerRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const lastTimeRef = useRef(performance.now());
  const reduceMotion = useRef(false);
  const dragonRef = useRef(null);
  const hueRef = useRef(0);
  const lastMoveRef = useRef(performance.now());

  const hsvToRgb = (h, s, v) => {
    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;
    let r = 0;
    let g = 0;
    let b = 0;

    if (h >= 0 && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h < 300) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }

    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255),
    };
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion.current = media.matches;
    const handleChange = (e) => {
      reduceMotion.current = e.matches;
    };
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!enableSmoke) return undefined;
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMove = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      lastMoveRef.current = performance.now();
    };

    const handleTouch = (event) => {
      if (!event.touches || !event.touches.length) return;
      const t = event.touches[0];
      targetRef.current.x = t.clientX;
      targetRef.current.y = t.clientY;
      lastMoveRef.current = performance.now();
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });

    const animate = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = now;

      // Smoothly advance hue over time even when the mouse is idle
      hueRef.current = (hueRef.current + dt * 40) % 360;
      const { r: cr, g: cg, b: cb } = hsvToRgb(hueRef.current, 0.9, 1);
      const pulse = 0.85 + 0.15 * Math.sin(now * 0.002);

      const pointer = pointerRef.current;
      const target = targetRef.current;

      pointer.x += (target.x - pointer.x) * 0.18;
      pointer.y += (target.y - pointer.y) * 0.18;

      const idleMs = now - lastMoveRef.current;
      const activity = Math.max(0, Math.min(1, 1 - idleMs / 900));

      if (dragonRef.current) {
        dragonRef.current.style.transform = `translate(${target.x}px, ${target.y}px)`;
        dragonRef.current.style.opacity = activity;
      }

      if (!reduceMotion.current) {
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "rgba(0,0,0,0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const baseRadius = 120;
        const px = pointer.x;
        const py = pointer.y;

        ctx.globalCompositeOperation = "lighter";

        if (activity > 0.02) {
          const gradient = ctx.createRadialGradient(px, py, 0, px, py, baseRadius);
          gradient.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${0.34 * pulse * activity})`);
          gradient.addColorStop(0.3, `rgba(${cr}, ${cg}, ${cb}, ${0.26 * pulse * activity})`);
          gradient.addColorStop(0.7, `rgba(${cr}, ${cg}, ${cb}, ${0.12 * pulse * activity})`);
          gradient.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(px, py, baseRadius, 0, Math.PI * 2);
          ctx.fill();

          for (let i = 0; i < 2; i += 1) {
            const wobble = Math.sin((now * 0.001 + i * 1.2)) * 18;
            const gx = px + wobble;
            const gy = py + Math.cos(now * 0.0014 + i) * 14;
            const r = baseRadius * 0.6;
            const g2 = ctx.createRadialGradient(gx, gy, 0, gx, gy, r);
            const hue2 = (hueRef.current + 30 + i * 25) % 360;
            const { r: r2, g: g2c, b: b2 } = hsvToRgb(hue2, 0.9, 1);
            g2.addColorStop(0, `rgba(${r2}, ${g2c}, ${b2}, ${0.18 * pulse * activity})`);
            g2.addColorStop(1, `rgba(${r2}, ${g2c}, ${b2}, 0)`);
            ctx.fillStyle = g2;
            ctx.beginPath();
            ctx.arc(gx, gy, r, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchstart", handleTouch);
      window.cancelAnimationFrame(rafRef.current);
    };
  }, [enableSmoke]);

  useEffect(() => {
    const body = document.body;
    if (!body) return undefined;
    if (enableSmoke) {
      body.classList.add("hide-system-cursor");
    } else {
      body.classList.remove("hide-system-cursor");
    }
    return () => {
      body.classList.remove("hide-system-cursor");
    };
  }, [enableSmoke]);

  return (
    <>
      {enableSmoke && <canvas ref={canvasRef} className="cursor-canvas" aria-hidden="true" />}
      {enableDragon && (
        <div ref={dragonRef} className="cursor-dragon" aria-hidden="true">
          <img src={asset("dg.png")} alt="" aria-hidden="true" />
        </div>
      )}
    </>
  );
}
