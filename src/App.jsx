import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "./Hero_section";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import PageShell from "./PageShell";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function HomePage() {
  return (
    <PageShell>
      <PageTransition>
        <HeroSection />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </PageTransition>
    </PageShell>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/project/:slug"
          element={
            <PageShell>
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            </PageShell>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}