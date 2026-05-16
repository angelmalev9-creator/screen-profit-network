import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { PageHero, Section, FinalCTA, SeoArticle } from "@/components/ui-blocks";
import { Train, ShoppingBag, Store, Coffee, Clock, Dumbbell, Building2, Scissors, GraduationCap } from "lucide-react";
import screenStore from "@/assets/screen-store.jpg";
import screenGym from "@/assets/screen-gym.jpg";
import screenInstall from "@/assets/screen-install.jpg";

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
      {/* Реални кадри от мрежата */}
      <Section className="!py-16 md:!py-20">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-electric mb-3">Реални обекти</p>
          <h2 className="text-3xl md:text-4xl font-bold">Екрани, които вече работят в мрежата</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {[
            { src: screenStore, t: "Магазин — вход" },
            { src: screenGym, t: "Спортен клуб" },
            { src: screenInstall, t: "Монтаж на обект" },
          ].map((m) => (
            <figure key={m.t} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 aspect-[4/3]">
              <img src={m.src} alt={m.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-4 text-sm font-semibold">
                {m.t}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-5">
          {["/media/screens-1.mp4", "/media/screens-2.mp4", "/media/screens-3.mp4"].map((src) => (
            <div key={src} className="overflow-hidden rounded-2xl border border-electric/30 bg-black shadow-glow flex items-center justify-center">
              <video
                src={src}
                className="h-auto w-full max-h-[80vh] object-contain"
                autoPlay muted loop playsInline preload="metadata"
              />
            </div>
          ))}
        </div>
      </Section>

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
      <SeoArticle
        eyebrow="Локациите в мрежата"
        title="Защо локациите с висок трафик са най-силният рекламен канал днес"
        blocks={[
          { h: "Магазини и търговски обекти", p: "Дигиталният екран в магазина работи в момента, в който клиентът държи продукта в ръка или избира между конкуренти. Това е точката на покупка — мястото с най-висока конверсия за реклама." },
          { h: "Заведения и кафенета", p: "Хората престояват средно над 30 минути в заведение. Това превръща екрана в идеален канал за брандиране, представяне на нови продукти и партньорски кампании." },
          { h: "Фитнеси и спортни клубове", p: "Лоялна, активна аудитория с високи доходи, която посещава обекта няколко пъти седмично. Подходящо за здравословни марки, спортно хранене, услуги и финансови продукти." },
          { h: "Чакални и медицински центрове", p: "Зони с фокусирано внимание и нула конкуренция за погледа. Реклама в чакалня често постига по-висока запомняемост от много онлайн формати." },
          { h: "Офис сгради", p: "Бизнес аудитория всеки работен ден, в едно и също време. Идеално за B2B услуги, корпоративни оферти и брандове, ориентирани към професионалисти." },
          { h: "Метростанции и улици с трафик", p: "Десетки хиляди преминаващи дневно превръщат тези точки в основа за всяка градска рекламна мрежа — масов обхват, висока честота, силна видимост." },
        ]}
      />

      <FinalCTA
        title="Искате Вашата локация в мрежата?"
        primary={{ to: "/kontakti", label: "Предложете локация" }}
        secondary={{ to: "/za-reklamodateli", label: "Искам да рекламирам" }}
      />
    </PageShell>
  );
}
