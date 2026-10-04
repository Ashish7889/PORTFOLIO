import { Link } from "react-router-dom";
import { GitHubIcon, LinkedInIcon } from "./SvgIcons";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-100 bg-white py-12 text-xs font-jakarta text-gray-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-gray-100">
          <div>
            <div className="font-orbitron font-bold text-sm tracking-wider text-black">
              ASHISH BHOSLE
            </div>
            <p className="text-gray-500 text-xs mt-1">
              Backend, DevOps &amp; AI Systems Engineer · Bengaluru, India
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest font-medium">
            <Link to="/" className="text-gray-600 hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-black transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-gray-600 hover:text-black transition-colors">
              Projects
            </Link>
            <Link to="/experience" className="text-gray-600 hover:text-black transition-colors">
              Experience
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-[11px] font-mono">
          <div className="flex items-center gap-4">
            <span>© 2026 ASHISH BHOSLE</span>
            <span>·</span>
            <a
              href="https://github.com/Ashish7889"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black flex items-center gap-1.5 transition-colors font-medium"
            >
              <GitHubIcon className="w-4.5 h-4.5" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/ashish-bhosle-404755371/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0a66c2] flex items-center gap-1.5 transition-colors font-medium"
            >
              <LinkedInIcon className="w-4.5 h-4.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-500 hover:text-black transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
