import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = ["home", "skills", "projects", "about", "contact"];

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-6 left-6 z-[10000]">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-white font-poppins"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-2xl capitalize hover:text-cyan-300 transition"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed top-10 left-1/2 -translate-x-1/2 z-[10000] px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg gap-10 text-white text-lg font-poppins">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="capitalize hover:text-cyan-300 transition duration-300"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}