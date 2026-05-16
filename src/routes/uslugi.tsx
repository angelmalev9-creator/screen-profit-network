import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { PageHero, Section, CTA, FinalCTA } from "@/components/ui-blocks";
import { Monitor, PackageCheck, Network, Check } from "lucide-react";

export const Route = createFileRoute("/uslugi")({
  head: () => ({
    meta: [
      { title: "Услуги — Медия Груп" },
      { name: "description", content: "Дигитален екран за Вашия бизнес, екран с монтаж и инсталация, рекламен екран за локации с висок трафик." },
      { property: "og:title", content: "Услуги — Медия Груп" },
      { property: "og:description", content: "Три услуги за бизнеси и собственици на локации." },
    ],
    links: [{ rel: "canonical", href: "/uslugi" }],
  }),
  component: Page,
});

const services = [
  {
    icon: Monitor,
    title: "Дигитален екран за Вашия бизнес",
    desc: "Подходящо за обекти, които искат да промотират собствени продукти, услуги, оферти, менюта, промоции и кампании.",
    bullets: ["Качване на собствено съдържание", "Менюта и промоции", "График на кампании", "Дистанционно управление"],
  },
  {
    icon: PackageCheck,
    title: "Екран + монтаж + инсталация",
    desc: "За бизнеси, които нямат собствен телевизор или екран. Медия Груп осигурява цялото решение — от оборудване до работеща система.",
    bullets: ["Доставка на оборудване", "Професионален монтаж", "Конфигурация и тест", "Готово решение от ден първи"],
  },
  {
    icon: Network,
    title: "Рекламен екран за локации с висок трафик",
    desc: "За собственици на локации, през които минават много хора. Поставяме екран, включваме го в рекламна мрежа и създаваме нов приходен канал.",
    bullets: ["Безплатно поставяне на екран", "Включване в рекламна мрежа", "Привличане на рекламодатели", "Процент от приходите"],
  },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Услуги"
        title={<>Цялостни решения за <span className="text-gradient">дигитална реклама</span></>}
        subtitle="Изберете решението, което отговаря на Вашия бизнес — от един екран в магазина до цяла рекламна мрежа."
      />
      <Section>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.title} className="group relative grid md:grid-cols-[1fr_2fr] gap-8 rounded-2xl bg-gradient-card border border-border/60 p-8 md:p-10 shadow-card hover:border-electric/40 transition">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-electric mb-3">0{idx + 1} / Услуга</div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-electric/10 text-electric ring-1 ring-electric/30 mb-5">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
              </div>
              <div>
                <p className="text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-electric shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <FinalCTA
        title="Не сте сигурни кое решение е за Вас?"
        subtitle="Ще Ви консултираме безплатно и ще Ви предложим най-подходящия пакет."
        primary={{ to: "/kontakti", label: "Поискай консултация" }}
        secondary={{ to: "/paketi", label: "Виж пакетите" }}
      />
    </PageShell>
  );
}
