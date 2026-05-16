import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { PageHero, Section, FinalCTA, SeoArticle } from "@/components/ui-blocks";
import { Target, Eye, Layers } from "lucide-react";

export const Route = createFileRoute("/za-nas")({
  head: () => ({
    meta: [
      { title: "За нас — Медия Груп" },
      { name: "description", content: "Медия Груп изгражда новия стандарт за дигитална реклама на физически локации." },
      { property: "og:title", content: "За нас — Медия Груп" },
      { property: "og:description", content: "Монтаж, софтуер, съдържание и рекламна стратегия в едно." },
    ],
    links: [{ rel: "canonical", href: "/za-nas" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="За нас"
        title={<>Медия Груп изгражда <span className="text-gradient">новия стандарт</span> за дигитална реклама на физически локации</>}
        subtitle="Ние комбинираме монтаж, софтуер, съдържание и рекламна стратегия в едно цялостно решение. Помагаме на бизнесите да използват екраните си по-умно, а на собствениците на локации — да създадат нов приходен канал."
      />
      <Section>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-gradient-card border border-border/60 p-8">
            <Layers className="h-8 w-8 text-electric mb-4" />
            <h3 className="text-xl font-semibold mb-3">Цялостно решение</h3>
            <p className="text-sm text-muted-foreground">Хардуер, софтуер, креативно съдържание и продажба на рекламно време — под един покрив.</p>
          </div>
          <div className="rounded-2xl bg-gradient-card border border-border/60 p-8">
            <Target className="h-8 w-8 text-electric mb-4" />
            <h3 className="text-xl font-semibold mb-3">Реална мрежа</h3>
            <p className="text-sm text-muted-foreground">Не сме просто доставчик на телевизори — изграждаме рекламна инфраструктура в страната.</p>
          </div>
          <div className="rounded-2xl bg-gradient-card border border-border/60 p-8">
            <Eye className="h-8 w-8 text-electric mb-4" />
            <h3 className="text-xl font-semibold mb-3">Нашата визия</h3>
            <p className="text-sm text-muted-foreground">Да изградим силна мрежа от дигитални екрани в България, която свързва бизнесите с клиентите им в реалния свят.</p>
          </div>
        </div>

        <div className="mt-16 relative overflow-hidden rounded-3xl border border-electric/30 bg-gradient-card p-10 md:p-16 shadow-glow">
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-electric/20 blur-3xl" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-electric mb-4">Нашата визия</p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl">
            Екранът работи вместо Вас — а ние се грижим за всичко останало.
          </h2>
        </div>
      </Section>
      <SeoArticle
        eyebrow="За компанията"
        title="Кои сме ние и защо правим това"
        blocks={[
          { h: "Не сме просто доставчик на телевизори", p: "Медия Груп не продава техника. Ние правим така, че екранът на стената наистина да носи резултат — реклами, които се виждат, оферти, които продават, и приход, който идва всеки месец." },
          { h: "Реален опит, не само теория", p: "Зад нас стои екип с опит в техниката, монтажа и рекламата. Разбираме както малкия магазин, така и веригата с десетки обекти и говорим с всеки на разбираем език." },
          { h: "Технологията работи за Вас", p: "Управляваме всички екрани от едно място. Можем да сменим реклама за минути, да следим дали екранът работи и да реагираме веднага при проблем — без да Ви безпокоим." },
          { h: "Започваме от София и растем", p: "Активно изграждаме мрежа от рекламни екрани в София и постепенно се разширяваме в други градове. Целта е силна и надеждна мрежа в цяла България." },
          { h: "Дългосрочни партньори", p: "За собствениците на обекти сме партньор, на който може да се разчита — обслужваме екрана и плащаме коректно. За рекламодателите сме гаранция, че рекламата им ще се вижда." },
          { h: "Част от Елтек Груп", p: "Медия Груп е част от Елтек Груп — компания с опит в техническата работа и инсталациите, което ни дава стабилност и капацитет да поддържаме реална мрежа." },
        ]}
      />

      <FinalCTA
        title="Станете част от мрежата"
        primary={{ to: "/kontakti", label: "Свържете се с нас" }}
      />
    </PageShell>
  );
}
