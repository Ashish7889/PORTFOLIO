export function CornerTL({ className = "w-3 h-3 text-black" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M0 11.5V0.5H11.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function CornerTR({ className = "w-3 h-3 text-black" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 0.5H11.5V11.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function CornerBL({ className = "w-3 h-3 text-black" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.5V11.5H11.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function CornerBR({ className = "w-3 h-3 text-black" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 11.5H11.5V0.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Checkerboard({ className = "" }: { className?: string }) {
  // viewBox 0 0 36 18, 4 rows of 3.8x3.8 black squares, even rows shifted by 2.25
  const size = 3.8;
  const cols = [0, 4.5, 9, 13.5, 18, 22.5, 27, 31.5];
  return (
    <svg
      viewBox="0 0 36 18"
      className={`inline-block align-middle ${className}`}
      style={{ width: "var(--checker-w)", height: "var(--checker-h)" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Row 0 */}
      {cols.map((x, i) => (
        <rect key={`r0-${i}`} x={x} y={0} width={size} height={size} fill="currentColor" />
      ))}
      {/* Row 1 (shifted by 2.25) */}
      {cols.map((x, i) => (
        <rect key={`r1-${i}`} x={x + 2.25} y={4.5} width={size} height={size} fill="currentColor" />
      ))}
      {/* Row 2 */}
      {cols.map((x, i) => (
        <rect key={`r2-${i}`} x={x} y={9} width={size} height={size} fill="currentColor" />
      ))}
      {/* Row 3 (shifted by 2.25) */}
      {cols.map((x, i) => (
        <rect key={`r3-${i}`} x={x + 2.25} y={13.5} width={size} height={size} fill="currentColor" />
      ))}
    </svg>
  );
}

export function WireframeIcon({ className = "w-5 h-5 text-black" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Server stack wireframe */}
      <rect x="2" y="2" width="20" height="5" rx="1" />
      <rect x="2" y="9.5" width="20" height="5" rx="1" />
      <rect x="2" y="17" width="20" height="5" rx="1" />
      <line x1="6" y1="4.5" x2="7" y2="4.5" />
      <line x1="6" y1="12" x2="7" y2="12" />
      <line x1="6" y1="19.5" x2="7" y2="19.5" />
      <line x1="18" y1="4.5" x2="19" y2="4.5" />
      <line x1="18" y1="12" x2="19" y2="12" />
      <line x1="18" y1="19.5" x2="19" y2="19.5" />
    </svg>
  );
}

export function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75c.98 0 1.76.78 1.76 1.75s-.78 1.76-1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}
