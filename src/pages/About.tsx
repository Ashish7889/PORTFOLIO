import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CornerTL, CornerTR, CornerBL, CornerBR } from "../components/SvgIcons";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function About() {
  useScrollReveal();

  const stackCategories = [
    {
      code: "DEVOPS // 01",
      title: "Deployment & Orchestration",
      items: [
        { name: "Docker", desc: "Multi-stage builds, minimal alpine images" },
        { name: "Docker Compose", desc: "Multi-container local testing and network bridges" },
        { name: "Kubernetes", desc: "YAML manifests, Deployments, Services, health probes" },
        { name: "Render PaaS", desc: "Public cloud deployments, secrets, and healthchecks" },
        { name: "Git & GitHub Actions", desc: "Version control and automated CI workflows" },
      ],
    },
    {
      code: "BACKEND // 02",
      title: "Backend & Systems",
      items: [
        { name: "Python", desc: "AsyncIO, type hinting, Pydantic data schemas" },
        { name: "FastAPI", desc: "High-speed async APIs and automatic OpenAPI docs" },
        { name: "Java", desc: "Object-oriented systems and data structures" },
        { name: "Node.js & Express", desc: "RESTful middleware services and microservices" },
        { name: "JWT & HMAC Auth", desc: "Token rotation, RBAC, and webhook verification" },
      ],
    },
    {
      code: "STORAGE // 03",
      title: "Databases & Storage",
      items: [
        { name: "PostgreSQL", desc: "Relational modeling, indexing, connection pooling" },
        { name: "SQLite", desc: "Embedded deterministic persistence and fast caching" },
        { name: "MySQL", desc: "Relational queries, ACID transactions, and constraints" },
      ],
    },
    {
      code: "CLOUD // 04",
      title: "Cloud Infrastructure",
      items: [
        { name: "Microsoft Azure", desc: "AZ-900 certified: Virtual Networks, compute, IAM" },
        { name: "IBM Cloud", desc: "Cloud computing fundamentals and virtualization" },
      ],
    },
    {
      code: "AI_RAG // 05",
      title: "AI & LLM Workflows",
      items: [
        { name: "LangChain", desc: "Prompt chains, output parsers, and retrieval flows" },
        { name: "RAG Architecture", desc: "Hierarchical chunking and grounded semantic search" },
        { name: "FAISS Vector DB", desc: "Cosine similarity indexing and high-dimensional search" },
        { name: "Google Gemini API", desc: "Multimodal LLMs, function calling, structured output" },
      ],
    },
    {
      code: "PLATFORMS // 06",
      title: "Enterprise AI Platforms",
      items: [
        { name: "Salesforce Agentforce", desc: "Certified autonomous agents and action topics" },
        { name: "Prompt Builder", desc: "Grounded context injection and dynamic templates" },
        { name: "Einstein Trust Layer", desc: "Zero data retention and input sanitization" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="border-b-2 border-black pb-6">
        <div className="text-xs uppercase font-mono tracking-widest text-gray-500 font-bold">
          [IDENTITY PROFILE // BIOGRAPHY]
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold tracking-tight text-black mt-1">
          About Ashish Bhosle
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mt-2 max-w-2xl font-normal">
          Computer Science graduate focused on backend systems, container orchestration, and production AI pipelines.
        </p>
      </div>

      {/* Main Narrative with Proportionate HUD Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-reveal">
        {/* Left Column: Portrait Card */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <div className="relative max-w-xs w-full">
            <CornerTL className="absolute -top-3 -left-3 w-4 h-4 text-black" />
            <CornerTR className="absolute -top-3 -right-3 w-4 h-4 text-black" />
            <CornerBL className="absolute -bottom-3 -left-3 w-4 h-4 text-black" />
            <CornerBR className="absolute -bottom-3 -right-3 w-4 h-4 text-black" />

            <div className="border-2 border-black bg-white p-3.5 rounded-xl shadow-md">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 relative">
                <img
                  src="/photo.png"
                  alt="Ashish Bhosle"
                  className="w-full h-full object-cover object-[50%_15%]"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-white font-mono text-[10px] uppercase">
                  ID: AB-2026
                </div>
              </div>
              <div className="mt-3.5 text-center space-y-1">
                <div className="font-bold text-base text-black">Ashish Bhosle</div>
                <div className="text-xs font-mono text-gray-600 font-semibold">REVA University (2026)</div>
                <div className="text-xs text-gray-500 font-mono">Bengaluru, India · UTC+5:30</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative */}
        <div className="lg:col-span-8 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
          <h2 className="text-2xl font-bold text-black font-orbitron">
            Engineering Philosophy
          </h2>
          <p>
            I am a Computer Science student at <strong className="text-black font-semibold">REVA University, Bengaluru</strong> (graduating in 2026). My technical focus is rooted in getting services to run reliably outside of a local development environment.
          </p>
          <p>
            I treat deployment and operational reliability as primary requirements rather than afterthoughts. In distributed applications, a model or API is only as dependable as the network boundary, container configuration, and failover policy beneath it. I enjoy tracing issues to root cause, profiling latency bottlenecks, and designing deterministic fallback paths.
          </p>
          <p>
            My work spans the full execution path: provisioning containerized environments with Docker and Kubernetes, creating typed RESTful APIs with FastAPI and PostgreSQL, and building Retrieval-Augmented Generation (RAG) and autonomous agent workflows on top of enterprise platforms like Salesforce Agentforce and LangChain.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-xs"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/experience"
              className="px-6 py-3 rounded-md border-2 border-gray-300 text-black hover:border-black transition-colors bg-white"
            >
              View Work Experience
            </Link>
          </div>
        </div>
      </div>

      {/* Comprehensive Tech Stack Section */}
      <div className="space-y-8 pt-8 border-t-2 border-black scroll-reveal">
        <div>
          <div className="text-xs uppercase font-mono tracking-widest text-gray-500 font-bold">
            [SYSTEM REPERTOIRE // TOOLING]
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-bold tracking-tight text-black mt-1">
            Technical Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 border-2 border-gray-200 rounded-xl space-y-3 bg-white hover:border-black transition-all hover:-translate-y-1 shadow-2xs"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                <h3 className="font-bold text-base text-black">
                  {cat.title}
                </h3>
                <span className="text-[10px] font-mono text-gray-500 font-bold">
                  {cat.code}
                </span>
              </div>
              <ul className="space-y-2 pt-1">
                {cat.items.map((item) => (
                  <li key={item.name} className="text-xs sm:text-sm">
                    <span className="font-bold font-mono text-black">{item.name}</span>
                    <span className="text-gray-600"> — {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
