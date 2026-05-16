import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { PageHero, Section, CTA, FinalCTA } from "@/components/ui-blocks";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/paketi")({
  head: () => ({
    meta: [
      { title: "Пакети — Медия Груп" },
      { name: "description", content: "START, BUSINESS и NETWORK / CHAIN — пакети за управление на дигитални рекламни екрани." },
      { property: "og:title", content: "Пакети — Медия Груп" },
      { property: "og:description", content: "Прозрачни пакети за всеки бизнес." },
    ],
    links: [{ rel: "canonical", href: "/paketi" }],
  }),
  component: Page,
});

const plans = [
  {
    name: "START",
    price: "29€",
    sub: "За малък бизнес с един екран.",
    features: [
      "1 екран",
      "Базово управление на съдържание",
      "Качване на рекламни клипове",
      "Дистанционна поддръжка",
      "Подходящо за магазини, салони и малки обекти",
    ],
  },
  {
    name: "BUSINESS",
    price: "49€",
    sub: "За бизнеси, които искат по-силно визуално присъствие.",
    featured: true,
    features: [
      "Професионално управление на съдържание",
      "Повече рекламни клипове",
      "Приоритетна поддръжка",
      "Помощ при създаване на видео съдържание",
      "График за кампании и промоции",
    ],
  },
  {
    name: "NETWORK / CHAIN",
    price: "99€",
    sub: "За вериги, мултиобекти и партньорски локации.",
    features: [
      "Управление на няколко екрана",
      "Централна стратегия",
      "Рекламна мрежа",
      "Приходи от външни рекламодатели",
      "Персонална консултация",
    ],
  },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Пакети"
        title={<>Прозрачни цени за <span className="text-gradient">всеки тип бизнес</span></>}
        subtitle="Изберете пакета, който отговаря на Вашия мащаб — от един обект до цяла верига."
      />
      <Section>
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                p.featured
                  ? "border-electric/50 bg-gradient-card shadow-glow"
                  : "border-border/60 bg-card/50"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  <Sparkles className="h-3 w-3" /> Най-избиран
                </div>
              )}
              <div className="text-sm font-bold tracking-[0.25em] text-electric">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold">{p.price}</span>
                <span className="text-muted-foreground">/ месец</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.sub}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-electric shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTA to="/kontakti" variant={p.featured ? "primary" : "ghost"}>Избери {p.name}</CTA>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <FinalCTA
        title="Свържете се с нас за индивидуална оферта"
        subtitle="За вериги, нестандартни обекти и големи мрежи изготвяме персонално предложение."
        primary={{ to: "/kontakti", label: "Получи оферта" }}
      />
    </PageShell>
  );
}
