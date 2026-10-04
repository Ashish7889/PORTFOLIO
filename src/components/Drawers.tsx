import { useEffect, useRef, useState } from "react";
import { X, ArrowUpRight, Check } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SvgIcons";

export type DrawerType = "ABOUT" | "EXPERIENCE" | "PROJECTS" | "CONTACT" | null;

interface DrawersProps {
  activeDrawer: DrawerType;
  onClose: () => void;
}

export function Drawers({ activeDrawer, onClose }: DrawersProps) {
  const [toastVisible, setToastVisible] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape & trap focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeDrawer) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDrawer, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (activeDrawer) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        drawerRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDrawer]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ashishbhosle7889@gmail.com");
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <>
      {/* Toast Notification */}
      {toastVisible && (
        <div
          role="status"
          className="fixed top-5 right-5 z-50 flex items-center gap-2.5 px-4 py-2.5 bg-black text-white text-xs font-medium rounded shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Email copied.</span>
        </div>
      )}

      {/* Backdrop */}
      {activeDrawer && (
        <div
          onClick={onClose}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300"
        />
      )}

      {/* Drawer Container */}
      <aside
        ref={drawerRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={activeDrawer || "Drawer"}
        className={`fixed top-0 bottom-0 right-0 z-50 w-full max-w-[var(--drawer-max)] bg-white border-l border-gray-200 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out focus:outline-none ${
          activeDrawer ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ padding: "var(--drawer-pad)" }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div>
            <h2 className="font-orbitron font-bold uppercase tracking-wider text-lg sm:text-xl text-black">
              {activeDrawer === "ABOUT" && "About"}
              {activeDrawer === "EXPERIENCE" && "Experience"}
              {activeDrawer === "PROJECTS" && "Projects"}
              {activeDrawer === "CONTACT" && "Contact"}
            </h2>
            {activeDrawer === "PROJECTS" && (
              <p className="text-[var(--micro)] uppercase tracking-widest text-gray-500 mt-0.5">
                Selected Work
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close drawer"
            className="p-1.5 rounded text-gray-500 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6 pr-1">
          {/* ABOUT DRAWER */}
          {activeDrawer === "ABOUT" && (
            <div className="space-y-4 text-[var(--body)] text-gray-700 leading-relaxed font-normal">
              <p>
                Computer Science graduate (B.Tech, REVA University, Bengaluru, 2026). I like getting services running reliably outside a laptop, tracing bugs to the root cause, and keeping systems predictable under real use. I work across the stack: APIs, auth, databases, deployment, and the LLM pipelines that sit on top.
              </p>
              <div className="pt-4 border-t border-gray-100 space-y-2 text-[var(--micro)] text-gray-500 uppercase tracking-widest font-mono">
                <div>FOCUS: BACKEND · DEVOPS · APIS · RAG</div>
                <div>LOCATION: BENGALURU, INDIA</div>
              </div>
            </div>
          )}

          {/* EXPERIENCE DRAWER */}
          {activeDrawer === "EXPERIENCE" && (
            <div className="space-y-6 text-black">
              {/* Internship */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between text-xs">
                  <h3 className="font-semibold text-sm text-black">
                    Navodita Infotech
                  </h3>
                  <span className="text-[var(--micro)] font-mono text-gray-500">2024 · Remote</span>
                </div>
                <div className="text-[var(--micro)] font-medium text-gray-600 uppercase tracking-wider">
                  AI / Software Engineering Intern
                </div>
                <ul className="list-disc pl-4 space-y-1.5 text-[var(--body)] text-gray-700 leading-normal pt-1">
                  <li>
                    Built a legal AI assistant for the Department of Justice using LangChain, RAG, FAISS and the Gemini API over real legal documents.
                  </li>
                  <li>
                    Built the backend integration layer so non-technical stakeholders could use the retrieval pipeline.
                  </li>
                  <li>
                    Tuned retrieval for reliable, traceable answers grounded in source text.
                  </li>
                  <li>
                    Co-authored an IEEE-formatted paper on the architecture with REVA University CS faculty.
                  </li>
                </ul>
              </div>

              {/* Certifications */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <div className="text-[var(--micro)] font-orbitron uppercase tracking-widest text-gray-500 font-bold">
                  Certifications
                </div>
                <ul className="space-y-1 text-[var(--body)] text-gray-800">
                  <li>Salesforce Certified Agentforce Specialist</li>
                  <li>Microsoft Azure Fundamentals (AZ-900)</li>
                  <li>IBM Cloud Computing Fundamentals</li>
                  <li>IBM Big Data 101</li>
                  <li>Advanced Python Programming (IBM)</li>
                </ul>
              </div>

              {/* Achievements */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <div className="text-[var(--micro)] font-orbitron uppercase tracking-widest text-gray-500 font-bold">
                  Achievements
                </div>
                <ul className="space-y-1 text-[var(--body)] text-gray-800">
                  <li>1st Place, AI Nexus Enigma Hackathon (20 teams)</li>
                  <li>Finalist, Avinaya Hackathon</li>
                </ul>
              </div>
            </div>
          )}

          {/* PROJECTS DRAWER */}
          {activeDrawer === "PROJECTS" && (
            <div className="space-y-5 text-black">
              {/* Project 1: 5G Core */}
              <div className="p-3.5 border border-gray-200 rounded-md space-y-2 hover:border-gray-400 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                    INFRASTRUCTURE
                  </span>
                  <a
                    href="https://github.com/Ashish7889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-600 hover:text-black flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <h3 className="font-semibold text-sm uppercase text-black">
                  5G Core Management Prototype
                </h3>
                <p className="text-[var(--body)] text-gray-700 leading-snug">
                  Multi-service prototype of 5G core control-plane functions, each service containerized and orchestrated with Docker Compose and Kubernetes manifests.
                </p>
                <div className="text-[var(--micro)] font-mono text-gray-500 pt-1">
                  Docker · Docker Compose · Kubernetes
                </div>
              </div>

              {/* Project 2: TradeIQ */}
              <div className="p-3.5 border border-gray-200 rounded-md space-y-2 hover:border-gray-400 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.5 bg-emerald-100 text-emerald-800 font-medium rounded">
                    LIVE
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://tradeiq-ai.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-700 font-medium hover:underline flex items-center gap-1"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <span className="text-gray-300">·</span>
                    <a
                      href="https://github.com/Ashish7889"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-600 hover:text-black flex items-center gap-1"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <h3 className="font-semibold text-sm uppercase text-black">
                  TradeIQ AI
                </h3>
                <p className="text-[var(--body)] text-gray-700 leading-snug">
                  Stock analysis platform deployed on Render. Dual-LLM pipeline (LangChain) cross-checked against live Yahoo Finance data, rule-based fallback when LLM quota runs out, PDF reports.
                </p>
                <div className="text-[var(--micro)] font-mono text-gray-500 pt-1">
                  Python · FastAPI · SQLite · Render
                </div>
              </div>

              {/* Project 3: AquaPulse */}
              <div className="p-3.5 border border-gray-200 rounded-md space-y-2 hover:border-gray-400 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                    FULL-STACK
                  </span>
                  <a
                    href="https://github.com/Ashish7889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-600 hover:text-black flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <h3 className="font-semibold text-sm uppercase text-black">
                  AquaPulse
                </h3>
                <p className="text-[var(--body)] text-gray-700 leading-snug">
                  Water park booking platform with JWT auth and Razorpay payments.
                </p>
                <div className="text-[var(--micro)] font-mono text-gray-500 pt-1">
                  Next.js · FastAPI · PostgreSQL
                </div>
              </div>

              {/* Project 4: DoJ Legal AI */}
              <div className="p-3.5 border border-gray-200 rounded-md space-y-2 hover:border-gray-400 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                    AI / RAG
                  </span>
                  <a
                    href="https://github.com/Ashish7889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-600 hover:text-black flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <h3 className="font-semibold text-sm uppercase text-black">
                  DoJ Legal AI Assistant
                </h3>
                <p className="text-[var(--body)] text-gray-700 leading-snug">
                  Multi-LLM RAG legal aid assistant over real government documents with traceable answers.
                </p>
                <div className="text-[var(--micro)] font-mono text-gray-500 pt-1">
                  LangChain · FAISS · Gemini API
                </div>
              </div>

              {/* Project 5: Agentic Resort */}
              <div className="p-3.5 border border-gray-200 rounded-md space-y-2 hover:border-gray-400 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                    AGENTS
                  </span>
                  <a
                    href="https://github.com/Ashish7889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-600 hover:text-black flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <h3 className="font-semibold text-sm uppercase text-black">
                  Agentic Resort Booking Assistant
                </h3>
                <p className="text-[var(--body)] text-gray-700 leading-snug">
                  Salesforce Agentforce agent that carries a full booking workflow with validation before confirming.
                </p>
                <div className="text-[var(--micro)] font-mono text-gray-500 pt-1">
                  Agentforce · Prompt Builder
                </div>
              </div>
            </div>
          )}

          {/* CONTACT DRAWER */}
          {activeDrawer === "CONTACT" && (
            <div className="space-y-5 text-black">
              <p className="text-[var(--body)] text-gray-700 leading-relaxed">
                Open to DevOps and AI engineering roles. Best way to reach me is email.
              </p>

              {/* Email with copy button */}
              <div className="p-3 border border-gray-200 rounded-md bg-gray-50 flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm text-black truncate select-all">
                  ashishbhosle7889@gmail.com
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-medium bg-black text-white rounded hover:bg-gray-800 transition-colors cursor-pointer shrink-0"
                >
                  Copy
                </button>
              </div>

              {/* Full-width Social Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href="https://www.linkedin.com/in/ashish-bhosle-404755371/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-md border border-gray-300 hover:border-black flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2">
                    <LinkedInIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/Ashish7889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-md border border-gray-300 hover:border-black flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2">
                    <GitHubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="pt-4 border-t border-gray-100 text-center">
          <p className="text-[var(--micro)] text-gray-400 uppercase tracking-widest font-mono">
            ASHISH BHOSLE © 2026
          </p>
        </div>
      </aside>
    </>
  );
}
