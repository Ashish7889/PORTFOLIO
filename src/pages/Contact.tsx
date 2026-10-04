import { useState, type FormEvent } from "react";
import { Mail, Copy, Check, ArrowUpRight, FileDown, Send, MapPin, Clock } from "lucide-react";
import { GitHubIcon, LinkedInIcon, CornerTL, CornerTR, CornerBL, CornerBR } from "../components/SvgIcons";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Contact() {
  useScrollReveal();

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ashishbhosle7889@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-gray-200 pb-8 scroll-reveal">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black text-white text-xs font-mono tracking-widest uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>SYS // CHANNEL: DIRECT_COMMS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-orbitron font-extrabold tracking-tight text-black mt-2">
          Contact Ashish Bhosle
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mt-3 max-w-3xl leading-relaxed">
          Open to full-time engineering roles, high-impact internships, and technical collaboration in DevOps, backend infrastructure, and AI systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact Info (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 scroll-reveal">
          {/* Email Card */}
          <div className="relative p-6 sm:p-7 border border-gray-200 rounded-xl bg-white space-y-4 shadow-xs">
            <CornerTL />
            <CornerTR />
            <CornerBL />
            <CornerBR />

            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-lg bg-gray-100 text-black">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Direct Email</div>
                <div className="text-base font-semibold font-mono text-black select-all">
                  ashishbhosle7889@gmail.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 py-2.5 px-3 border border-gray-300 rounded text-xs font-mono text-gray-800 hover:text-black hover:border-black transition-colors flex items-center justify-center gap-1.5 cursor-pointer bg-gray-50 hover:bg-white"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gray-500" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href="mailto:ashishbhosle7889@gmail.com"
                className="py-2.5 px-4 rounded bg-black text-white text-xs font-semibold hover:bg-gray-800 transition-colors flex items-center gap-1.5"
              >
                <span>Compose</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-6 border border-gray-200 rounded-xl bg-white space-y-4 shadow-2xs">
            <div className="text-xs font-orbitron uppercase tracking-wider text-black font-bold">
              Engineering Profiles &amp; Repositories
            </div>

            <div className="space-y-3">
              <a
                href="https://github.com/Ashish7889"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 rounded-lg hover:border-black flex items-center justify-between text-base font-medium text-black transition-all bg-white hover:bg-gray-50 group"
              >
                <div className="flex items-center gap-3.5">
                  <GitHubIcon className="w-6 h-6 text-black group-hover:scale-105 transition-transform" />
                  <span className="font-mono text-sm sm:text-base">github.com/Ashish7889</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/ashish-bhosle-404755371/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 rounded-lg hover:border-[#0a66c2] flex items-center justify-between text-base font-medium text-black transition-all bg-white hover:bg-blue-50/50 group"
              >
                <div className="flex items-center gap-3.5">
                  <LinkedInIcon className="w-6 h-6 text-[#0a66c2] group-hover:scale-105 transition-transform" />
                  <span className="font-mono text-sm sm:text-base">linkedin.com/in/ashish-bhosle</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#0a66c2] transition-colors" />
              </a>
            </div>
          </div>

          {/* Resume Download Box */}
          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50 space-y-3">
            <div className="font-orbitron font-bold text-sm text-black">
              Curriculum Vitae / Resume
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Updated single-page technical resume summarizing DevOps projects, Kubernetes orchestration, and AI systems.
            </p>
            <a
              href={`${import.meta.env.BASE_URL}Ashish_Bhosle_Resume.pdf`}
              download="Ashish_Bhosle_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-black text-white text-xs font-semibold rounded hover:bg-gray-800 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>

          {/* Location & Timezone */}
          <div className="p-4 border border-gray-200 rounded-lg text-xs font-mono text-gray-600 space-y-1.5 bg-white">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-black shrink-0" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-black shrink-0" />
              <span>Timezone: Indian Standard Time (UTC+5:30)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Message Form (7 Cols) */}
        <div className="lg:col-span-7 scroll-reveal">
          <div className="relative p-6 sm:p-8 border border-gray-200 rounded-xl bg-white shadow-xs space-y-6">
            <CornerTL />
            <CornerTR />
            <CornerBL />
            <CornerBR />

            <div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">[DIRECT TRANSMISSION]</div>
              <h2 className="text-2xl font-orbitron font-bold text-black">
                Send a Direct Message
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Have a question or role opportunity? Send a message directly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-base">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Message Sent Successfully</span>
                </div>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Thank you for reaching out, {formData.name}. I will review your message and reply via {formData.email} promptly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-3 text-xs font-mono font-semibold underline text-emerald-900 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-semibold text-black uppercase tracking-wider text-xs font-mono">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-3 border border-gray-300 rounded-md text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-semibold text-black uppercase tracking-wider text-xs font-mono">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-3 border border-gray-300 rounded-md text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-semibold text-black uppercase tracking-wider text-xs font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Ashish, we'd like to discuss a DevOps / Backend role on our team..."
                    className="w-full px-3.5 py-3 border border-gray-300 rounded-md text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-black text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Transmit Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
