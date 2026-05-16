import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { PageHero, Section, FeatureCard, FinalCTA } from "@/components/ui-blocks";
import { Eye, MapPin, Video, CalendarRange, Building2, Wallet } from "lucide-react";

export const Route = createFileRoute("/za-reklamodateli")({
  head: () => ({
    meta: [
      { title: "За рекламодатели — Медия Груп" },
      { name: "description", content: "Рекламирайте на дигитални екрани в реални физически локации с висок трафик." },
      { property: "og:title", content: "За рекламодатели — Медия Груп" },
      { property: "og:description", content: "Локално таргетиране и реална видимост." },
    ],
    links: [{ rel: "canonical", href: "/za-reklamodateli" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="За рекламодатели"
        title={<>Рекламирайте там, където хората <span className="text-gradient">вече минават</span></>}
        subtitle="Показваме Вашата реклама на дигитални екрани в реални физически локации — магазини, заведения, офиси, чакални и места с висок трафик."
      />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Eye} title="Реална видимост">Реклама в обекти, където хората физически прекарват време.</FeatureCard>
          <FeatureCard icon={MapPin} title="Локално таргетиране">Изберете точните локации и квартали за Вашата кампания.</FeatureCard>
          <FeatureCard icon={Video} title="Видео реклама">Динамично съдържание, което привлича внимание и продава.</FeatureCard>
          <FeatureCard icon={CalendarRange} title="Гъвкави кампании">Стартирайте, поставяйте на пауза и променяйте във всеки момент.</FeatureCard>
          <FeatureCard icon={Building2} title="За малки и големи">Подходящо както за локален бизнес, така и за национални брандове.</FeatureCard>
          <FeatureCard icon={Wallet} title="По-достъпно от билбордовете">Силна видимост без високите цени на традиционната външна реклама.</FeatureCard>
        </div>
      </Section>
      <FinalCTA
        title="Готови ли сте Вашата реклама да достигне до реални хора?"
        subtitle="Свържете се с нас и ще изготвим персонално предложение за Вашата кампания."
        primary={{ to: "/kontakti", label: "Искам да рекламирам" }}
        secondary={{ to: "/lokacii", label: "Виж локациите" }}
      />
    </PageShell>
  );
}
