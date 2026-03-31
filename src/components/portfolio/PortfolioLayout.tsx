import { useEffect, useState, useCallback } from "react";
import Sidebar from "./Sidebar";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

const sections = ["about", "experience", "projects"];

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  const [activeSection, setActiveSection] = useState("about");

  const handleScroll = useCallback(() => {
    for (const section of [...sections].reverse()) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) {
          setActiveSection(section);
          return;
        }
      }
    }
    setActiveSection("about");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Mouse-follow gradient
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="relative">
      {/* Subtle radial glow that follows cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(187 72% 55% / 0.06), transparent 80%)",
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:flex lg:gap-4 lg:px-24 lg:py-0">
        <Sidebar activeSection={activeSection} />
        <main className="lg:w-1/2 lg:py-24">{children}</main>
      </div>
    </div>
  );
};

export default PortfolioLayout;
