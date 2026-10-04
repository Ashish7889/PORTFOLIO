import { Calendar, MapPin, ArrowUpRight, Award, GraduationCap, Briefcase } from "lucide-react";
import { GitHubIcon, CornerTL, CornerTR, CornerBL, CornerBR } from "../components/SvgIcons";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Experience() {
  useScrollReveal();

  const experiences = [
    {
      company: "Navodita Infotech",
      role: "AI / Software Engineering Intern",
      period: "2024",
      location: "Remote",
      tag: "DoJ Legal Project & IEEE Paper",
      badge: "PRODUCTION RAG SYSTEM",
      summary:
        "Engineered an enterprise Retrieval-Augmented Generation assistant for the Department of Justice (DoJ) and co-authored academic research on the hybrid retrieval architecture.",
      bullets: [
        "Architected an end-to-end legal AI assistant for the Department of Justice using LangChain, RAG pipelines, FAISS vector indexing, and Google Gemini API over real statutory documents.",
        "Built the high-concurrency backend integration layer so non-technical DoJ stakeholders and legal researchers could query the retrieval pipeline with instant citation tracing and audit logs.",
        "Tuned semantic retrieval parameters (chunk overlap, cosine similarity thresholds, and hybrid reranking) to eliminate hallucinations and ground answers strictly in legal source texts.",
        "Co-authored an IEEE-formatted research paper detailing the hybrid retrieval architecture alongside REVA University Computer Science faculty.",
      ],
      tech: ["Python", "FastAPI", "LangChain", "RAG", "FAISS", "Gemini API", "Vector Embeddings", "IEEE Research"],
      githubUrl: "https://github.com/Ashish7889/AI-VOICE-CHAT-ASSISTANT-FOR-DEPARTMENT-OF-JUSTICE",
    },
    {
      company: "REVA University",
      role: "B.Tech in Computer Science & Engineering",
      period: "2022 – 2026",
      location: "Bengaluru, India",
      tag: "Graduating 2026",
      badge: "ACADEMIC & SYSTEMS FOUNDATIONS",
      summary:
        "Rigorous technical curriculum in systems engineering, distributed architectures, database internals, and machine learning systems.",
      bullets: [
        "Core architectural coursework in Operating Systems, Computer Networks, Database Internals, and Cloud Computing.",
        "Led university engineering teams in competitive hackathons, winning 1st Place at AI Nexus Enigma Hackathon against 20 teams.",
        "Earned verified industry certifications from Salesforce (Agentforce Specialist), Microsoft (Azure AZ-900), and IBM (Cloud & Big Data).",
      ],
      tech: ["Linux Systems", "Docker", "Kubernetes", "Distributed Systems", "Cloud Architecture"],
    },
  ];

  const certifications = [
    {
      title: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      id: "CERT // SF-AF-01",
      desc: "Verified mastery in creating, configuring, and deploying autonomous agents using Salesforce Agentforce, Prompt Builder, and the Einstein Trust Layer.",
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      id: "CERT // MS-AZ-900",
      desc: "Cloud infrastructure concepts, Azure Virtual Networks, storage tiers, compute scalability, IAM policies, and governance boundaries.",
    },
    {
      title: "IBM Cloud Computing Fundamentals",
      issuer: "IBM",
      id: "CERT // IBM-CC-01",
      desc: "Cloud architecture models (IaaS/PaaS/SaaS), virtualized container runtimes, hybrid infrastructure, and enterprise deployment.",
    },
    {
      title: "IBM Big Data 101",
      issuer: "IBM",
      id: "CERT // IBM-BD-101",
      desc: "High-velocity data ingestion patterns, distributed file storage, batch processing, and analytics pipelines.",
    },
    {
      title: "Advanced Python Programming",
      issuer: "IBM",
      id: "CERT // IBM-PY-ADV",
      desc: "Object-oriented architecture, metaprogramming, memory management, asynchronous execution, and performance profiling.",
    },
  ];

  const achievements = [
    {
      title: "1st Place Winner — AI Nexus Enigma Hackathon",
      organization: "AI Nexus / REVA University",
      rank: "CHAMPION // 20 TEAMS",
      desc: "Competed against 20 university teams. Designed, containerized, and deployed an AI decision prototype under strict time constraints, winning 1st place.",
    },
    {
      title: "Finalist — Avinaya Hackathon",
      organization: "Avinaya Tech Summit",
      rank: "FINALIST // HIGH THROUGHPUT",
      desc: "Built and pitched a high-throughput backend architecture handling real-time data streaming and AI-assisted automation.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="border-b border-gray-200 pb-8 scroll-reveal">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black text-white text-xs font-mono tracking-widest uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>SYS // TRACK_RECORD</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-orbitron font-extrabold tracking-tight text-black mt-2">
          Experience &amp; Qualifications
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mt-3 max-w-3xl leading-relaxed">
          Industry internship deliverables, academic research, verified enterprise cloud credentials, and competitive hackathon wins.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8 scroll-reveal">
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-black" />
            <h2 className="text-xl sm:text-2xl font-bold font-orbitron text-black">
              Engineering Work &amp; Education
            </h2>
          </div>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider hidden sm:inline">
            [VERIFIED HISTORY]
          </span>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="relative p-6 sm:p-8 border border-gray-200 rounded-xl bg-white hover:border-black transition-all space-y-5 shadow-xs scroll-reveal"
            >
              <CornerTL />
              <CornerTR />
              <CornerBL />
              <CornerBR />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-gray-600 uppercase tracking-wider">
                      {exp.company}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-gray-100 text-gray-800 font-medium">
                      {exp.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mt-1 font-orbitron">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-gray-600">
                  <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded border border-gray-200">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded border border-gray-200">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
                {exp.summary}
              </p>

              <ul className="space-y-2.5 text-sm sm:text-base text-gray-700 leading-relaxed pl-1">
                {exp.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-gray-100 border border-gray-200 text-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {exp.githubUrl && (
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-black hover:bg-black hover:text-white transition-colors px-3 py-1.5 rounded border border-black bg-white"
                  >
                    <GitHubIcon className="w-5 h-5" />
                    <span>View Project Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="space-y-6 pt-4 border-t border-gray-200 scroll-reveal">
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-black" />
            <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-black">
              Industry Certifications
            </h2>
          </div>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider hidden sm:inline">
            [SYS // AUTH: 5 CREDENTIALS]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="relative p-6 border border-gray-200 rounded-xl space-y-3 bg-white hover:border-black transition-all shadow-2xs scroll-reveal"
            >
              <div className="flex items-center justify-between text-xs font-mono text-gray-500 border-b border-gray-100 pb-2">
                <span className="font-semibold text-black uppercase">{cert.issuer}</span>
                <span>{cert.id}</span>
              </div>
              <h3 className="font-bold text-base text-black font-orbitron">{cert.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="space-y-6 pt-4 border-t border-gray-200 scroll-reveal">
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-black" />
            <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-black">
              Competitive Hackathons &amp; Awards
            </h2>
          </div>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider hidden sm:inline">
            [SYS // RECOGNITION]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="relative p-6 sm:p-7 border border-gray-200 rounded-xl space-y-3 bg-white hover:border-black transition-all shadow-xs scroll-reveal"
            >
              <CornerTL />
              <CornerTR />
              <CornerBL />
              <CornerBR />

              <div className="flex items-center justify-between text-xs font-mono text-gray-500 border-b border-gray-100 pb-2">
                <span>{item.organization}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-[11px]">
                  {item.rank}
                </span>
              </div>
              <h3 className="font-bold text-lg text-black font-orbitron">{item.title}</h3>
              <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
