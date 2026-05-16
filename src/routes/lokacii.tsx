import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { PageHero, Section, FinalCTA } from "@/components/ui-blocks";
import { Train, ShoppingBag, Store, Coffee, Clock, Dumbbell, Building2, Scissors, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/lokacii")({
  head: () => ({
    meta: [
      { title: "Локации — Медия Груп" },
      { name: "description", content: "Мрежа от дигитални рекламни екрани в метростанции, търговски улици, магазини, заведения и още." },
      { property: "og:title", content: "Локации — Медия Груп" },
      { property: "og:description", content: "Рекламна мрежа в ключови градски точки." },
    ],
    links: [{ rel: "canonical", href: "/lokacii" }],
  }),
  component: Page,
});

const locations = [
  { i: Train, t: "Метростанции", d: "Десетки хиляди преминаващи дневно." },
  { i: ShoppingBag, t: "Търговски улици", d: "Силен пешеходен трафик в центъра." },
  { i: Store, t: "Магазини", d: "Точката на покупка — там, където се вземат решения." },
  { i: Coffee, t: "Заведения", d: "Време за престой = време за реклама." },
  { i: Clock, t: "Чакални", d: "Внимание на 100% — реклама без конкуренция." },
  { i: Dumbbell, t: "Фитнеси", d: "Лоялна аудитория с високи доходи." },
  { i: Building2, t: "Офис сгради", d: "Бизнес аудитория всеки работен ден." },
  { i: Scissors, t: "Салони", d: "Дълъг престой и фокусирано внимание." },
  { i: GraduationCap, t: "Учебни центрове", d: "Млада, активна аудитория." },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Локации"
        title={<>Мрежа от екрани в <span className="text-gradient">ключови градски точки</span></>}
        subtitle="Работим за изграждане на мрежа от екрани в ключови градски точки. Целта ни е всяка реклама да бъде показвана там, където има реално движение на хора."
      />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-gradient-card border border-border/60 p-7 hover:border-electric/40 transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric ring-1 ring-electric/30 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-3xl border border-border/60 bg-surface/50 p-10 md:p-14">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative grid md:grid-cols-3 gap-8 text-center">
            {[
              { n: "100+", l: "Целеви локации" },
              { n: "24/7", l: "Активна мрежа" },
              { n: "1М+", l: "Прогнозни импресии" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-5xl md:text-6xl font-extrabold text-gradient">{s.n}</div>
                <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <FinalCTA
        title="Искате Вашата локация в мрежата?"
        primary={{ to: "/kontakti", label: "Предложете локация" }}
        secondary={{ to: "/za-reklamodateli", label: "Искам да рекламирам" }}
      />
    </PageShell>
  );
}
