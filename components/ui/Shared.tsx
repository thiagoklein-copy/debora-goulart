import type { ReactNode } from "react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-serif text-xl font-semibold tracking-tight sm:text-2xl ${light ? "text-white" : "text-forest"} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width={24}
        height={24}
        className="h-6 w-6 shrink-0"
        aria-hidden="true"
      >
        <path
          d="M12 3C10 7 6 9 6 12c0 2 1.5 4 4 5-1-2-1-4 0-6 2 3 4 4 6 4s4-1 6-4c1 2 1 4 0 6 2.5-1 4-3 4-5 0-3-4-5-6-9z"
          fill={light ? "#F6F2EA" : "#3F4F3D"}
          opacity="0.9"
        />
        <path
          d="M12 8c-1 2-3 3-3 5 0 1.2.8 2.5 2 3-.5-1.2-.5-2.5 0-3.5 1 1.5 2 2 3 2s2-.5 3-2c.5 1 .5 2.3 0 3.5 1.2-.5 2-1.8 2-3 0-2-2-3-3-5z"
          fill={light ? "#B08D57" : "#B08D57"}
        />
      </svg>
      Psicologar
    </span>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`text-accent ${className}`} aria-label="5 estrelas">
      ★★★★★
    </span>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      {eyebrow && <p className={`eyebrow mb-4 ${light ? "text-accent-warm" : ""}`}>{eyebrow}</p>}
      <h2
        className={`font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-forest"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/80" : "text-text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
