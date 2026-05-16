import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { Section, SectionHeader, FeatureCard, CTA, FinalCTA, SeoArticle, FaqBlock } from "@/components/ui-blocks";
import heroImg from "@/assets/hero.jpg";
import screenStore from "@/assets/screen-store.jpg";
import {
  Monitor, Tv, MapPin, Wrench, Wallet, Radio, Clock, Wifi,
  TrendingUp, Video, Store, Coffee, Dumbbell, Scissors,
  Building2, Stethoscope, Train, ShoppingBag, Users, Cog, CalendarRange,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Медия Груп — Превърнете всеки екран в машина за продажби" },
      { name: "description", content: "Изграждаме и управляваме мрежа от дигитални рекламни екрани, които показват правилното съдържание на правилното място." },
      { property: "og:title", content: "Медия Груп — Дигитални рекламни екрани" },
      { property: "og:description", content: "Превърнете всеки екран в машина за продажби." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-30" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse" />
            Дигитална рекламна мрежа
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] max-w-5xl">
            Превърнете всеки екран в{" "}
            <span className="text-gradient">машина за продажби</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-3xl">
            Медия Груп изгражда и управлява мрежа от дигитални рекламни екрани, които показват
            правилното съдържание на правилното място — в магазини, заведения, офиси, метростанции
            и локации с висок трафик.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTA to="/kontakti">Искам екран за моя бизнес</CTA>
            <CTA to="/za-sobstvenici" variant="ghost">Искам да печеля от моята локация</CTA>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border/60 bg-border/60">
            {[
              { icon: Clock, label: "24/7 управление на съдържание" },
              { icon: Wifi, label: "Дистанционна поддръжка" },
              { icon: TrendingUp, label: "Локации с висок трафик" },
              { icon: Video, label: "Видео реклами, които продават" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-background/95 p-6">
                <Icon className="h-6 w-6 text-electric mb-3" />
                <p className="text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КАКВО ПРАВИМ */}
      <Section>
        <SectionHeader
          eyebrow="Какво правим"
          title="Три ясни решения за всеки тип бизнес"
          subtitle="Независимо дали имате екран, не разполагате с такъв или притежавате локация с трафик — имаме готово решение."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={Tv} title="Имате телевизор?">
            Превръщаме съществуващия Ви телевизор в професионален рекламен екран. Инсталираме
            системата, качваме съдържанието и управляваме рекламите вместо Вас.
          </FeatureCard>
          <FeatureCard icon={Monitor} title="Нямате екран?">
            Осигуряваме екран, монтаж, инсталация и пълна настройка. Получавате готово решение,
            което започва да работи веднага.
          </FeatureCard>
          <FeatureCard icon={MapPin} title="Имате локация с трафик?">
            Ако през Вашия обект минават много хора, поставяме рекламен екран и го включваме в
            нашата мрежа. Ние намираме рекламодателите, Вие печелите процент.
          </FeatureCard>
        </div>
      </Section>

      {/* ЗАЩО МЕДИЯ ГРУП */}
      <section className="border-y border-border/60 bg-surface/40">
        <Section>
          <SectionHeader
            eyebrow="Защо Медия Груп"
            title="Цялостна рекламна инфраструктура — не просто екран на стената"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { i: Wrench, t: "Пълна инсталация", d: "От доставка до първи показан кадър — всичко е наше задължение." },
              { i: Cog, t: "Управление на съдържанието", d: "Качваме, организираме и обновяваме рекламите Ви централизирано." },
              { i: CalendarRange, t: "Видео реклами по график", d: "Стартирайте кампании в точния час и точния ден." },
              { i: Wifi, t: "Дистанционна поддръжка", d: "Следим състоянието на всеки екран от мрежата 24/7." },
              { i: Wallet, t: "Възможност за пасивен приход", d: "Локациите с трафик получават постоянен процент от рекламите." },
              { i: Radio, t: "Реална рекламна мрежа", d: "Магазини, заведения, офиси, фитнеси, салони, метро входове и чакални." },
            ].map((f) => (
              <FeatureCard key={f.t} icon={f.i} title={f.t}>{f.d}</FeatureCard>
            ))}
          </div>
        </Section>
      </section>

      {/* ЗА КОГО */}
      <Section>
        <SectionHeader
          eyebrow="За кого е услугата"
          title="Подходящо за всеки обект, през който минават хора"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {[
            { i: Store, t: "Магазини" },
            { i: Coffee, t: "Заведения" },
            { i: Dumbbell, t: "Фитнеси" },
            { i: Scissors, t: "Салони" },
            { i: Building2, t: "Офиси" },
            { i: Stethoscope, t: "Медицински центрове" },
            { i: Train, t: "Метростанции" },
            { i: ShoppingBag, t: "Търговски обекти" },
            { i: Users, t: "Локации с голям човекопоток" },
          ].map(({ i: Icon, t }) => (
            <div key={t} className="flex items-center gap-4 rounded-xl border border-border/60 bg-card/50 px-5 py-4 hover:border-electric/40 transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 text-electric ring-1 ring-electric/30">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-medium">{t}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* РЕКЛАМНА МРЕЖА */}
      <section className="border-y border-border/60 bg-surface/40">
        <Section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-electric mb-3">Рекламна мрежа</p>
              <h2 className="text-3xl md:text-5xl font-bold">
                Представете си Вашата реклама на места, където хората{" "}
                <span className="text-gradient">вече гледат</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Нашата цел е да изградим силна мрежа от дигитални екрани в ключови градски точки.
                Така бизнесите получават видимост там, където клиентите реално се движат — без
                нужда от скъпи билбордове и сложни кампании.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/za-reklamodateli">Искам да рекламирам</CTA>
                <CTA to="/lokacii" variant="ghost">Виж локациите</CTA>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-electric/30 shadow-glow">
                <img src={screenStore} alt="Дигитален рекламен екран в магазин" className="h-full w-full object-cover" loading="lazy" width={1600} height={1200} />
              </div>
            </div>
          </div>
        </Section>
      </section>

      <SeoArticle
        eyebrow="Защо работи"
        title="Реклама там, където хората наистина гледат"
        blocks={[
          { h: "Екранът хваща погледа", p: "Когато човек влезе в магазин, кафене или фитнес, погледът му неминуемо попада върху големия светещ екран. За разлика от листовка или билборд, движещата картина задържа вниманието и оставя ясно послание." },
          { h: "Реклама в точния момент", p: "Хората вече са на мястото, готови да изберат продукт или услуга. Една кратка реклама точно тогава влияе много по-силно от пост в социалните мрежи или банер в интернет." },
          { h: "Точно където са Вашите клиенти", p: "Избирате в какви обекти и квартали да се показва Вашата реклама — близо до Вашия магазин, в типове локации с подходяща публика или в целия град. Кампанията стига до точните хора." },
          { h: "Всичко се управлява от нас", p: "Качваме рекламите, сменяме офертите, следим екраните и решаваме проблемите дистанционно. Вие не пипате нищо — само казвате какво искате да се показва." },
          { h: "Видеа, които продават", p: "Помагаме при изработката на кратки и ясни видео реклами — без излишен текст, без звук, с фокус върху офертата и бранда. Реклама, която не може да се «превърти»." },
          { h: "Допълнителен приход за Вашия обект", p: "Ако през Вашия магазин или заведение минават много хора, можете да печелите всеки месец, без да правите нищо. Ние слагаме екрана, ние водим рекламодателите — Вие получавате процент." },
        ]}
      />

      <FaqBlock
        items={[
          { q: "Какво представлява рекламният екран?", a: "Това е телевизор или специален екран, поставен на видно място в обект, на който показваме видео реклами, оферти, менюта и съобщения. Сменяме съдържанието дистанционно — без USB и без идване на място." },
          { q: "Трябва ли да имам собствен телевизор?", a: "Не е задължително. Ако имате — превръщаме го в рекламен екран. Ако нямате — ние осигуряваме телевизор, монтаж и всичко необходимо." },
          { q: "Колко струва?", a: "Месечните пакети започват от 29€ за един екран. За рекламодатели цената зависи от това в колко локации и за колко време искате да се излъчвате — изпращаме персонално предложение." },
          { q: "С какво е по-добре от реклама във Facebook или Google?", a: "Интернет рекламата стига до хора пред телефона. Нашата реклама стига до хора, които вече са в магазина или заведението — в момента, в който избират какво да купят. Двете се допълват чудесно." },
          { q: "Работите ли в цялата страна?", a: "В момента основната ни мрежа е в София и активно се разширяваме в други градове. Свържете се с нас, за да проверим за конкретна локация." },
          { q: "Получавам ли отчет за рекламата си?", a: "Да — изпращаме отчет колко време е работила рекламата Ви, в кои обекти и колко хора приблизително са я видели." },
        ]}
      />

      <FinalCTA
        title="Готови ли сте Вашият екран да работи вместо Вас?"
        subtitle="Свържете се с нас и ще Ви предложим решение, съобразено с Вашия обект и бюджет."
        primary={{ to: "/kontakti", label: "Свържете се с нас" }}
        secondary={{ to: "/paketi", label: "Виж пакетите" }}
      />
    </PageShell>
  );
}
