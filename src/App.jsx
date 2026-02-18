import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Intro from "./pages/Intro.jsx";
import Landing from "./pages/Landing.jsx";
import Skills from "./pages/Skills.jsx";
import Certificates from "./pages/Certificates.jsx";
import Projects from "./pages/Projects.jsx";
import FuturisticCursor from "./components/FuturisticCursor.jsx";

export default function App() {
  const location = useLocation();

  const pathname = location.pathname;
  const smokeEnabled = pathname === "/" || pathname === "/intro";
  const dragonEnabled = false;

  return (
    <>
      <FuturisticCursor enableSmoke={smokeEnabled} enableDragon={dragonEnabled} />
      <div className="app-shell">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}
