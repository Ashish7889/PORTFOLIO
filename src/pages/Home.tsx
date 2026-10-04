import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, FileDown, Server, Cpu, Database } from "lucide-react";
import {
  CornerTL,
  CornerTR,
  CornerBL,
  CornerBR,
  Checkerboard,
  WireframeIcon,
} from "../components/SvgIcons";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Home() {
  useScrollReveal();

  return (
    <div className="space-y-20 sm:space-y-28 py-8 sm:py-16 bg-tech-grid">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headlines & Positioning (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Robotic Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-gray-300 bg-white text-xs font-mono tracking-wider text-black shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="font-semibold uppercase text-gray-900">
                OPEN TO DEVOPS &amp; AI ENGINEERING ROLES · BENGALURU, INDIA
              </span>
            </div>

            {/* Headline with HUD Corner Brackets */}
            <div className="relative inline-block">
              <CornerTL className="w-4 h-4 text-black mb-3" />
              <h1 className="font-orbitron font-[900] uppercase tracking-[0.05em] leading-[1.08] text-4xl sm:text-5xl lg:text-[56px] text-black">
                <div>BUILD.</div>
                <div>DEPLOY.</div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span>AUTOMATE.</span>
                  <Checkerboard className="inline-block" />
                </div>
              </h1>
              <CornerBL className="w-4 h-4 text-black mt-3" />
            </div>

            {/* Medium-fit Subline */}
            <p className="text-base sm:text-xl text-gray-700 font-normal leading-relaxed max-w-xl">
              Backend and DevOps engineer building and shipping LLM applications. Focused on reliability, reproducible deployments, and deterministic backend pipelines.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                to="/projects"
                className="px-6 py-3.5 rounded-md bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-all flex items-center gap-2 group shadow-sm cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="px-6 py-3.5 rounded-md border-2 border-gray-300 text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:border-black transition-all cursor-pointer bg-white"
              >
                About Me
              </Link>

              <Link
                to="/contact"
                className="px-5 py-3.5 rounded-md text-gray-700 hover:text-black text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Contact
              </Link>

              <a
                href="/Ashish_Bhosle_Resume.pdf"
                download="Ashish_Bhosle_Resume.pdf"
                className="px-4 py-3.5 text-xs sm:text-sm font-mono text-gray-600 hover:text-black flex items-center gap-1.5 transition-colors"
              >
                <FileDown className="w-4 h-4 text-black" />
                <span>Resume.pdf</span>
              </a>
            </div>

            {/* Robotic Terminal Telemetry Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500">
              <span className="flex items-center gap-1 text-gray-700">
                <span className="text-black font-bold">[SYS]</span> 5G Core &amp; TradeIQ Live
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-gray-700">
                <span className="text-black font-bold">[STACK]</span> K8s · Docker · FastAPI · RAG
              </span>
            </div>
          </div>

          {/* Right Column: Robotic HUD Photo Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              {/* Four HUD Corner Brackets */}
              <CornerTL className="absolute -top-3 -left-3 w-5 h-5 text-black" />
              <CornerTR className="absolute -top-3 -right-3 w-5 h-5 text-black" />
              <CornerBL className="absolute -bottom-3 -left-3 w-5 h-5 text-black" />
              <CornerBR className="absolute -bottom-3 -right-3 w-5 h-5 text-black" />

              {/* Main Framed Card */}
              <div className="border-2 border-black/80 bg-white p-3.5 rounded-xl shadow-lg relative overflow-hidden transition-all duration-300 group-hover:border-black">
                {/* Tech Crosshair Markers */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-gray-400 select-none">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-gray-400 select-none">+</div>

                {/* Photo with Scanning HUD Line */}
                <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-100">
                  <img
                    src="/photo.png"
                    alt="Ashish Bhosle"
                    className="w-full h-full object-cover object-[50%_15%] filter grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Laser scan line overlay */}
                  <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-80 pointer-events-none animate-hud-scan" />

                  {/* HUD Telemetry Tag on Image */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 text-white font-mono text-[10px] uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>SYS // ID: AB-2026</span>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-white font-mono text-[10px] uppercase tracking-wider backdrop-blur-xs">
                    BLR · 12.97° N
                  </div>
                </div>

                {/* Info Bar under photo */}
                <div className="mt-3.5 pt-2.5 border-t border-gray-200 flex items-center justify-between text-xs font-mono text-gray-700">
                  <div className="flex items-center gap-2">
                    <WireframeIcon className="w-4 h-4 text-black" />
                    <span className="font-semibold text-black">B.Tech CSE (2026)</span>
                  </div>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ● ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Disciplines (Scroll Reveal) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 scroll-reveal">
        <div className="pb-6 border-b-2 border-black flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-gray-500 font-bold">
              AREAS OF SPECIALIZATION
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-bold tracking-tight text-black mt-1">
              Engineering Disciplines
            </h2>
          </div>
          <div className="text-xs font-mono text-gray-500">
            [SYS ARCHITECTURE // 01-03]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {/* Card 1 */}
          <div className="p-6 border-2 border-gray-200 rounded-xl space-y-4 bg-white hover:border-black transition-all hover:-translate-y-1 shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="p-2.5 w-fit rounded-lg bg-black text-white">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-gray-500">SPEC: 01</span>
            </div>
            <h3 className="font-bold text-lg text-black">
              DevOps &amp; Infrastructure
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Multi-container isolation with Docker, declarative Kubernetes control-plane manifests, health probes, zero-downtime PaaS deployments, and reproducible staging environments.
            </p>
            <div className="text-xs font-mono text-gray-500 pt-2 border-t border-gray-100">
              Docker · Docker Compose · Kubernetes · Linux
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 border-2 border-gray-200 rounded-xl space-y-4 bg-white hover:border-black transition-all hover:-translate-y-1 shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="p-2.5 w-fit rounded-lg bg-black text-white">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-gray-500">SPEC: 02</span>
            </div>
            <h3 className="font-bold text-lg text-black">
              Backend Systems &amp; APIs
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              High-throughput asynchronous APIs with FastAPI and Node.js, relational modeling with PostgreSQL and SQLite, JWT authorization layers, and HMAC webhook verification.
            </p>
            <div className="text-xs font-mono text-gray-500 pt-2 border-t border-gray-100">
              Python · FastAPI · PostgreSQL · REST APIs
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 border-2 border-gray-200 rounded-xl space-y-4 bg-white hover:border-black transition-all hover:-translate-y-1 shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="p-2.5 w-fit rounded-lg bg-black text-white">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-gray-500">SPEC: 03</span>
            </div>
            <h3 className="font-bold text-lg text-black">
              AI Systems &amp; Grounded RAG
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Grounded Retrieval-Augmented Generation using LangChain and FAISS, Google Gemini multimodal function calling, and multi-turn autonomous agents with Salesforce Agentforce.
            </p>
            <div className="text-xs font-mono text-gray-500 pt-2 border-t border-gray-100">
              LangChain · RAG · FAISS · Agentforce
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight (Scroll Reveal) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 scroll-reveal">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b-2 border-black">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-gray-500 font-bold">
              VERIFIED SYSTEMS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-bold tracking-tight text-black mt-1">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black hover:text-gray-600 flex items-center gap-1.5"
          >
            <span>See All 5 Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {/* Project 1 Preview: 5G Core with Real Link */}
          <div className="p-7 border-2 border-gray-200 rounded-xl space-y-4 bg-white hover:border-black transition-all hover:-translate-y-1 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-wider px-2.5 py-1 bg-black text-white font-bold rounded">
                INFRASTRUCTURE
              </span>
              <a
                href="https://github.com/Ashish7889/END-TO-END-5G-CORE-MANAGEMENT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-gray-600 hover:text-black flex items-center gap-1 font-semibold"
              >
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <h3 className="font-bold text-xl sm:text-2xl text-black">
              5G Core Management Prototype
            </h3>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Multi-service distributed architecture simulating 3GPP 5G core control-plane network functions (AMF, SMF, UPF). Built for high-resilience orchestration, deterministic service discovery, and declarative container management with Docker Compose and Kubernetes manifests.
            </p>

            <div className="text-xs font-mono text-gray-600 pt-2 border-t border-gray-100">
              Docker · Docker Compose · Kubernetes · Linux Networking
            </div>
          </div>

          {/* Project 2 Preview: TradeIQ AI */}
          <div className="p-7 border-2 border-gray-200 rounded-xl space-y-4 bg-white hover:border-black transition-all hover:-translate-y-1 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-wider px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded border border-emerald-200">
                ● LIVE IN PRODUCTION
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://tradeiq-ai.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1 font-mono"
                >
                  <span>Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-gray-300">·</span>
                <a
                  href="https://github.com/Ashish7889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-gray-600 hover:text-black flex items-center gap-1 font-semibold"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <h3 className="font-bold text-xl sm:text-2xl text-black">
              TradeIQ AI: Stock Analysis Platform
            </h3>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Python/FastAPI platform deployed live on Render with dual-LLM consensus pipelines cross-checked against Yahoo Finance market data, sub-second rule-based fallbacks when token quotas expire, and automated ReportLab PDF dossiers.
            </p>

            <div className="text-xs font-mono text-gray-600 pt-2 border-t border-gray-100">
              Python · FastAPI · LangChain · Render · SQLite · ReportLab
            </div>
          </div>
        </div>
      </section>

      {/* Cyber/Robotic Callout Banner (Scroll Reveal) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 scroll-reveal">
        <div className="p-8 sm:p-12 border-2 border-black rounded-2xl bg-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">
              [COMMUNICATION CHANNEL: OPEN]
            </div>
            <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-black">
              Let's Discuss Systems Architecture &amp; Roles
            </h3>
            <p className="text-base text-gray-700 max-w-xl">
              Currently available for DevOps, backend engineering, and AI systems roles. Based in Bengaluru, India.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md hover:bg-gray-800 transition-all shrink-0 cursor-pointer shadow-sm relative z-10"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
