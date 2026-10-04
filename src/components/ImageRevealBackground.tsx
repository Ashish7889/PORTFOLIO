import { useEffect, useRef, useState } from "react";

export function ImageRevealBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const gridPatternRef = useRef<SVGGElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      if (revealRef.current) {
        revealRef.current.style.maskImage = "none";
        revealRef.current.style.webkitMaskImage = "none";
      }
      return;
    }

    let targetX = window.innerWidth * 0.7;
    let targetY = window.innerHeight * 0.5;
    let currentX = targetX;
    let currentY = targetY;

    const baseRadius = Math.round(Math.min(420, Math.max(160, window.innerWidth * 0.16)));
    let targetRadius = baseRadius;
    let currentRadius = 0; // Starts at 0 and eases in

    let targetGridX = 0;
    let targetGridY = 0;
    let currentGridX = 0;
    let currentGridY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      targetRadius = Math.round(Math.min(420, Math.max(160, window.innerWidth * 0.16)));

      // Normalized cursor from -0.5 to 0.5
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      targetGridX = cx * 16;
      targetGridY = cy * 16;
    };

    const onMouseLeave = () => {
      targetRadius = 0;
    };

    const onMouseEnter = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      targetRadius = Math.round(Math.min(420, Math.max(160, window.innerWidth * 0.16)));
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let animationFrameId: number;

    const updateFrame = () => {
      // Ease spotlight position with factor 0.1
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      currentRadius += (targetRadius - currentRadius) * 0.1;

      // Ease grid offset with factor 0.06
      currentGridX += (targetGridX - currentGridX) * 0.06;
      currentGridY += (targetGridY - currentGridY) * 0.06;

      if (revealRef.current) {
        revealRef.current.style.setProperty("--x", `${currentX.toFixed(1)}px`);
        revealRef.current.style.setProperty("--y", `${currentY.toFixed(1)}px`);
        revealRef.current.style.setProperty("--r", `${Math.max(0, currentRadius).toFixed(1)}px`);
      }

      if (gridPatternRef.current) {
        gridPatternRef.current.setAttribute(
          "transform",
          `translate(${currentGridX.toFixed(2)}, ${currentGridY.toFixed(2)})`
        );
      }

      animationFrameId = requestAnimationFrame(updateFrame);
    };

    animationFrameId = requestAnimationFrame(updateFrame);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const [cellSize, setCellSize] = useState(48);

  useEffect(() => {
    const handleResize = () => {
      const cell = Math.round(Math.min(64, Math.max(36, window.innerWidth * 0.028)));
      setCellSize(cell);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="hidden lg:block fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Layer 1: Base grayscale photo */}
      <div
        className="absolute inset-0 bg-no-repeat transition-all duration-300"
        style={{
          backgroundImage: "url(/photo.png)",
          backgroundPosition: "70% center",
          backgroundSize: "cover",
          filter: "grayscale(1) contrast(1.05) brightness(1.08)",
        }}
      />

      {/* Layer 2: Reveal full color photo with cursor radial mask */}
      <div
        ref={revealRef}
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url(/photo.png)",
          backgroundPosition: "70% center",
          backgroundSize: "cover",
          maskImage:
            "radial-gradient(circle var(--r, 200px) at var(--x, 70vw) var(--y, 50vh), rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r, 200px) at var(--x, 70vw) var(--y, 50vh), rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Layer 3: Subtle parallax SVG grid overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.1 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="parallax-grid"
            width={cellSize}
            height={cellSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
              fill="none"
              stroke="#64748b"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <g ref={gridPatternRef}>
          <rect width="100%" height="100%" fill="url(#parallax-grid)" />
        </g>
      </svg>
    </div>
  );
}
