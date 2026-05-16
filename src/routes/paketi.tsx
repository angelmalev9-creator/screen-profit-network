import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { PageHero, Section, CTA, FinalCTA, SeoArticle, FaqBlock } from "@/components/ui-blocks";
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
      <SeoArticle
        eyebrow="Какво е включено"
        title="Прозрачно ценообразуване за дигитални рекламни екрани"
        blocks={[
          { h: "Какво плащате всъщност", p: "Месечната такса включва лиценз за софтуера за управление на съдържание, дистанционна поддръжка, мониторинг на екрана и базово обслужване. Няма скрити такси за обновяване на плейлисти или за дребни промени." },
          { h: "Кога е подходящ START", p: "За магазини, салони, малки заведения и обекти, които искат един екран с менюта, оферти и собствено брандово съдържание. Бърз старт без сложна настройка." },
          { h: "Кога е подходящ BUSINESS", p: "За бизнеси, които използват екрана като активен маркетинг инструмент — чести промоции, по-голям обем съдържание, нужда от помощ при изработка на видео и приоритетна поддръжка." },
          { h: "Кога е подходящ NETWORK / CHAIN", p: "За вериги от обекти, мултиобектни бизнеси и партньори, които искат централизирана стратегия за всички екрани и възможност да приемат външни рекламодатели срещу процент." },
          { h: "Индивидуални оферти", p: "За над 10 екрана, нестандартни локации, индорни мрежи и брандови проекти изготвяме персонална оферта с отделно ценообразуване и условия." },
          { h: "Без скъпи първоначални инвестиции", p: "При партньорския модел за локации с трафик не плащате нищо за оборудване — Медия Груп инвестира в екрана срещу дял от рекламните приходи." },
        ]}
      />

      <FaqBlock
        items={[
          { q: "Включена ли е изработката на реклама?", a: "Базови корекции и форматиране на готови материали са включени. Цялостна изработка на видео реклама се таксува отделно или влиза в по-висок пакет." },
          { q: "Мога ли да сменя пакета по-късно?", a: "Да, можете да преминете към по-висок или по-нисък пакет във всеки момент. Промяната влиза в сила от следващия отчетен период." },
          { q: "Какво се случва ако имам няколко обекта?", a: "Препоръчваме пакета NETWORK / CHAIN с централно управление. За големи вериги изготвяме персонална оферта с отстъпка спрямо обема." },
          { q: "Има ли начална такса за инсталация?", a: "При стандартни обекти монтажът е по преференциални условия. За партньорски локации в рекламната мрежа Медия Груп поема изцяло разходите за оборудване и монтаж." },
        ]}
      />

      <FinalCTA
        title="Свържете се с нас за индивидуална оферта"
        subtitle="За вериги, нестандартни обекти и големи мрежи изготвяме персонално предложение."
        primary={{ to: "/kontakti", label: "Получи оферта" }}
      />
    </PageShell>
  );
}
