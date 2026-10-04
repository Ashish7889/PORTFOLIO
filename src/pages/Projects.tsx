import { useState } from "react";
import { ArrowUpRight, RotateCw } from "lucide-react";
import { GitHubIcon } from "../components/SvgIcons";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Projects() {
  useScrollReveal();
  const [tradeiqFallback, setTradeiqFallback] = useState(false);

  const projects = [
    {
      id: "5g-core",
      code: "PROJ // 01",
      title: "5G Core Management Prototype",
      tag: "INFRASTRUCTURE",
      summary:
        "Multi-service prototype of 5G core control-plane functions (AMF, SMF, UPF) containerized and orchestrated with Docker Compose and declarative Kubernetes manifests.",
      details: [
        "Containerized independent 5G network functions using lightweight base images with explicit resource constraints.",
        "Authored declarative Kubernetes manifests specifying Deployments, Services, and liveness/readiness health probes.",
        "Configured Docker Compose topologies with isolated network bridges for deterministic local service discovery and testing.",
        "Simulated control-plane packet routing and failover states between containerized functional nodes.",
      ],
      tech: ["Docker", "Docker Compose", "Kubernetes", "Linux Networking", "YAML"],
      githubUrl: "https://github.com/Ashish7889/END-TO-END-5G-CORE-MANAGEMENT",
    },
    {
      id: "tradeiq-ai",
      code: "PROJ // 02",
      title: "TradeIQ AI: Live Stock Analysis Platform",
      tag: "LIVE IN PRODUCTION",
      isLive: true,
      summary:
        "Production stock analysis service deployed on Render. Features dual-LLM analysis cross-checked with real-time Yahoo Finance market data, an automatic rule-based fallback when token limits expire, and server-side PDF dossier generation.",
      details: [
        "Backend built with Python and FastAPI, deployed as a live cloud service on Render with healthcheck monitoring.",
        "LangChain orchestration pipeline issuing parallel LLM queries cross-verified against live Yahoo Finance ticker metrics.",
        "Deterministic rule-based fallback engine activating if upstream API quotas run out, ensuring zero unhandled 500 errors.",
        "Server-side PDF report compilation engine using ReportLab for instant client report downloads.",
      ],
      tech: ["Python", "FastAPI", "LangChain", "Yahoo Finance", "SQLite", "Render", "ReportLab"],
      liveUrl: "https://tradeiq-ai.onrender.com",
      githubUrl: "https://github.com/Ashish7889",
      hasArchitectureDiagram: true,
    },
    {
      id: "doj-legal-ai",
      code: "PROJ // 03",
      title: "DoJ Legal AI Assistant",
      tag: "AI / RAG · IEEE PAPER",
      summary:
        "Enterprise Retrieval-Augmented Generation (RAG) assistant built for the Department of Justice during internship, answering complex legal queries over authentic statutory documents with traceable citations.",
      details: [
        "Engineered document ingestion, clause normalization, and chunking pipeline over Indian statutory acts and legal texts.",
        "Configured FAISS vector database similarity indexing using cosine metric and threshold filtering.",
        "Integrated Google Gemini API via LangChain with strict source-grounding prompts to eliminate hallucinations.",
        "Co-authored an IEEE-formatted research paper on the hybrid retrieval architecture with REVA University CS faculty.",
      ],
      tech: ["Python", "LangChain", "RAG", "FAISS Vector DB", "Google Gemini API", "IEEE Research"],
      githubUrl: "https://github.com/Ashish7889/AI-VOICE-CHAT-ASSISTANT-FOR-DEPARTMENT-OF-JUSTICE",
    },
    {
      id: "agentic-resort",
      code: "PROJ // 04",
      title: "Agentic Resort Booking Assistant",
      tag: "AUTONOMOUS AGENTS",
      summary:
        "Multi-step conversational decision agent built on Salesforce Agentforce and Prompt Builder, managing end-to-end guest reservation workflows.",
      details: [
        "Constructed autonomous multi-turn conversation topics resolving user intent, date disambiguation, and guest requirements.",
        "Connected custom tool-calling actions into backend reservation logic with automated parameter validation.",
        "Enforced enterprise Einstein Trust Layer policies for strict PII masking, safety guardrails, and zero data retention.",
      ],
      tech: ["Salesforce Agentforce", "Prompt Builder", "Einstein Trust Layer", "Autonomous Agents"],
      githubUrl: "https://github.com/Ashish7889",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b-2 border-black pb-6">
        <div className="text-xs uppercase font-mono tracking-widest text-gray-500 font-bold">
          [SYSTEM CATALOGUE // 05 REPOSITORIES]
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold tracking-tight text-black mt-1">
          Projects &amp; Deployments
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mt-2 max-w-2xl">
          Verified production systems: multi-container 5G control-planes, live cloud deployments on Render, and source-grounded RAG pipelines.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-7 sm:p-9 border-2 border-gray-200 rounded-2xl bg-white hover:border-black transition-all space-y-5 shadow-sm scroll-reveal"
          >
            {/* Top row: tags, title, links */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-gray-100 pb-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono text-xs text-gray-500 font-bold">
                    {project.code}
                  </span>
                  <span
                    className={`text-xs font-mono tracking-wider px-2.5 py-0.5 rounded font-bold ${
                      project.isLive
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.tag}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                  {project.title}
                </h2>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 border-2 border-gray-300 rounded-md text-xs font-mono font-semibold text-gray-800 hover:text-black hover:border-black transition-colors flex items-center gap-2 bg-white"
                  >
                    <GitHubIcon className="w-5 h-5" />
                    <span>Source Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-black text-white text-xs font-bold hover:bg-gray-800 transition-colors flex items-center gap-1.5 shadow-2xs font-mono"
                  >
                    <span>Live App</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Summary */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              {project.summary}
            </p>

            {/* Real implementation bullets */}
            <ul className="pl-5 list-disc space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded bg-gray-50 border border-gray-200 text-xs font-mono font-medium text-gray-800"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* TradeIQ Fallback Architecture Diagram */}
            {project.hasArchitectureDiagram && (
              <div className="mt-6 p-6 border-2 border-gray-200 rounded-xl bg-gray-50/70 font-mono text-xs sm:text-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-200">
                  <div className="font-bold text-black text-sm">
                    TradeIQ Failover Architecture Flow
                  </div>

                  <button
                    onClick={() => setTradeiqFallback(!tradeiqFallback)}
                    className="self-start sm:self-auto px-3 py-1.5 rounded border border-gray-300 bg-white text-gray-800 hover:text-black text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-gray-500" />
                    <span>{tradeiqFallback ? "Mode: Quota Limit Active (Fallback ON)" : "Simulate LLM Quota Limit"}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center text-center">
                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="text-[11px] text-gray-400 uppercase font-semibold">Step 01</div>
                    <div className="font-bold text-black mt-1">Stock Query</div>
                  </div>

                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="text-[11px] text-gray-400 uppercase font-semibold">Step 02</div>
                    <div className="font-bold text-black mt-1">FastAPI (Render)</div>
                  </div>

                  <div
                    className={`p-3 border rounded-lg transition-colors ${
                      tradeiqFallback
                        ? "border-amber-400 bg-amber-50 text-amber-900 font-bold"
                        : "border-black bg-black text-white font-bold"
                    }`}
                  >
                    <div className="text-[11px] uppercase opacity-80">
                      {tradeiqFallback ? "Fallback Rule Path" : "Primary Pipeline"}
                    </div>
                    <div className="mt-1">
                      {tradeiqFallback ? "Rule Indicators" : "Dual-LLM + Yahoo"}
                    </div>
                  </div>

                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="text-[11px] text-gray-400 uppercase font-semibold">Step 04</div>
                    <div className="font-bold text-black mt-1">SQLite DB</div>
                  </div>

                  <div className="p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="text-[11px] text-gray-400 uppercase font-semibold">Step 05</div>
                    <div className="font-bold text-emerald-700 mt-1">PDF Report</div>
                  </div>
                </div>

                <div className="text-xs text-gray-600 pt-1">
                  {tradeiqFallback
                    ? "Status: Upstream LLM token quota depleted → fallback rule engine generates report without throwing 500 error."
                    : "Status: Standard operation → LangChain queries dual models alongside live Yahoo Finance market quotes."}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
