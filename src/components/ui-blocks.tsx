import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: {
  eyebrow?: string; title: ReactNode; subtitle?: ReactNode; children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse" /> {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] max-w-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl">{subtitle}</p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-20 md:py-28 ${className}`}>{children}</section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: {
  eyebrow?: string; title: ReactNode; subtitle?: ReactNode;
}) {
  return (
    <div className="max-w-3xl mb-14">
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.25em] text-electric mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
      {subtitle && <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function FeatureCard({ icon: Icon, title, children }: {
  icon: React.ComponentType<{ className?: string }>; title: string; children: ReactNode;
}) {
  return (
    <div className="group relative rounded-2xl bg-gradient-card border border-border/60 p-7 shadow-card hover:border-electric/40 transition-all hover:-translate-y-1">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric ring-1 ring-electric/30">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}

export function CTA({ to, children, variant = "primary" }: {
  to: string; children: ReactNode; variant?: "primary" | "ghost";
}) {
  if (variant === "ghost") {
    return (
      <Link to={to} className="inline-flex items-center justify-center rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground hover:border-electric/50 hover:text-electric transition">
        {children}
      </Link>
    );
  }
  return (
    <Link to={to} className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
      {children}
    </Link>
  );
}

export function FinalCTA({ title, subtitle, primary, secondary }: {
  title: string; subtitle?: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-electric/30 bg-gradient-card p-10 md:p-16 shadow-glow">
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-electric/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
          {subtitle && <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA to={primary.to}>{primary.label}</CTA>
            {secondary && <CTA to={secondary.to} variant="ghost">{secondary.label}</CTA>}
          </div>
        </div>
      </div>
    </Section>
  );
}
