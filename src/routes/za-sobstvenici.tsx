import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { PageHero, Section, FeatureCard, FinalCTA } from "@/components/ui-blocks";
import { TrendingUp, ShieldCheck, GraduationCap, Cog, Wallet } from "lucide-react";

export const Route = createFileRoute("/za-sobstvenici")({
  head: () => ({
    meta: [
      { title: "За собственици на обекти — Медия Груп" },
      { name: "description", content: "Имате локация с трафик? Превърнете я в приход без технически ангажимент." },
      { property: "og:title", content: "За собственици на обекти — Медия Груп" },
      { property: "og:description", content: "Пасивен приход от трафика на Вашата локация." },
    ],
    links: [{ rel: "canonical", href: "/za-sobstvenici" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="За собственици на обекти"
        title={<>Имате локация с трафик? <span className="text-gradient">Превърнете я в приход.</span></>}
        subtitle="Ако през Вашия обект минават много хора, Медия Груп може да постави дигитален рекламен екран и да го управлява вместо Вас. Вие получавате възможност за допълнителен приход, без да се занимавате с рекламодатели, техника или съдържание."
      />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={TrendingUp} title="Печелете от трафика си">Превърнете преминаващите хора в реален приходен канал.</FeatureCard>
          <FeatureCard icon={ShieldCheck} title="Без технически ангажимент">Ние се грижим за оборудването, връзката и поддръжката.</FeatureCard>
          <FeatureCard icon={GraduationCap} title="Без нужда от опит">Не са Ви нужни знания за реклама, монтаж или софтуер.</FeatureCard>
          <FeatureCard icon={Cog} title="Ние управляваме всичко">Намираме рекламодателите, организираме кампаниите, следим екрана.</FeatureCard>
          <FeatureCard icon={Wallet} title="Получавате процент">Постоянен дял от приходите от всяка реклама на Вашия екран.</FeatureCard>
        </div>
      </Section>
      <FinalCTA
        title="Предложете локация"
        subtitle="Кажете ни повече за Вашия обект — ще преценим заедно дали е подходящ за рекламна мрежа."
        primary={{ to: "/kontakti", label: "Предложете локация" }}
      />
    </PageShell>
  );
}
