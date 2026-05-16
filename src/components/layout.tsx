import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Начало" },
  { to: "/uslugi", label: "Услуги" },
  { to: "/paketi", label: "Пакети" },
  { to: "/za-reklamodateli", label: "За рекламодатели" },
  { to: "/za-sobstvenici", label: "За собственици" },
  { to: "/lokacii", label: "Локации" },
  { to: "/za-nas", label: "За нас" },
  { to: "/kontakti", label: "Контакти" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Медия Груп" className="h-9 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/kontakti"
          className="hidden lg:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
        >
          Свържете се
        </Link>
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Меню">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="flex flex-col px-6 py-4 gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/50 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Медия Груп" className="h-10 w-auto mb-4" />
          <p className="text-sm text-muted-foreground max-w-md">
            Медия Груп — дигитални рекламни екрани, управление на съдържание и
            рекламна мрежа за реални бизнеси.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-3">Медия Груп — част от Елтек Груп.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Навигация</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {nav.slice(0, 4).map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-foreground">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Контакти</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>тел: 0895 332 779</li>
            <li>support@eltekmedia.com</li>
            <li>София, ул. „Билянини извори" №1-3</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Медия Груп. Всички права запазени.
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
