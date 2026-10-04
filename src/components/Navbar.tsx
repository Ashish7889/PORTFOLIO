import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GitHubIcon, LinkedInIcon } from "./SvgIcons";
import { FileDown, Menu, X } from "lucide-react";

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "PROJECTS", path: "/projects" },
    { label: "EXPERIENCE", path: "/experience" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-2xs transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand Area: Full Name + Title */}
        <Link
          to="/"
          className="flex flex-col group cursor-pointer text-left"
          aria-label="Ashish Bhosle — Home"
        >
          <div className="flex items-center gap-2">
            <span className="font-orbitron font-[900] tracking-[0.14em] text-base sm:text-lg lg:text-xl text-black group-hover:opacity-80 transition-opacity">
              ASHISH BHOSLE
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="System Operational" />
          </div>
          <span className="font-mono text-[11px] sm:text-xs text-gray-600 font-medium tracking-wide mt-0.5">
            Backend, DevOps &amp; AI Systems Engineer · Bengaluru, India
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-jakarta font-semibold text-xs sm:text-[13px] tracking-[0.16em] uppercase text-black">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 transition-all ${
                  isActive
                    ? "text-black font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <span className="text-gray-300 select-none">|</span>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Ashish7889"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-black hover:text-black transition-all p-2 hover:bg-gray-100 rounded-lg flex items-center justify-center border border-transparent hover:border-gray-200"
              title="GitHub Profile"
            >
              <GitHubIcon className="w-5.5 h-5.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-bhosle-404755371/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-[#0a66c2] hover:text-[#004182] transition-all p-2 hover:bg-blue-50/80 rounded-lg flex items-center justify-center border border-transparent hover:border-blue-100"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-5.5 h-5.5" />
            </a>
          </div>

          {/* Resume Download CTA */}
          <a
            href="/Ashish_Bhosle_Resume.pdf"
            download="Ashish_Bhosle_Resume.pdf"
            className="px-3.5 py-2 border-2 border-black rounded-md text-xs font-bold tracking-wider hover:bg-black hover:text-white transition-all flex items-center gap-1.5 shadow-2xs"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-5 space-y-4 font-jakarta">
          <div className="flex flex-col space-y-3 text-xs tracking-widest font-semibold uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 ${
                  location.pathname === link.path ? "text-black font-bold" : "text-gray-600 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Ashish7889"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black p-2 bg-gray-100 rounded-lg"
                title="GitHub"
              >
                <GitHubIcon className="w-5.5 h-5.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashish-bhosle-404755371/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0a66c2] p-2 bg-blue-50 rounded-lg"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-5.5 h-5.5" />
              </a>
            </div>

            <a
              href="/Ashish_Bhosle_Resume.pdf"
              download="Ashish_Bhosle_Resume.pdf"
              className="px-3 py-1.5 border border-black rounded text-xs font-semibold hover:bg-black hover:text-white transition-all flex items-center gap-1.5"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
