import type { ReactNode } from "react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  return (
    <span
      className={`font-serif text-xl font-semibold tracking-tight sm:text-2xl ${light ? "text-white" : "text-forest"} ${className}`}
    >
      Greice Berlitz | Psicóloga
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
