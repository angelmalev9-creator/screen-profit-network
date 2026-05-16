import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout";
import { PageHero, Section } from "@/components/ui-blocks";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/kontakti")({
  head: () => ({
    meta: [
      { title: "Контакти — Медия Груп" },
      { name: "description", content: "Свържете се с Медия Груп за дигитални рекламни екрани, рекламна мрежа или партньорска локация." },
      { property: "og:title", content: "Контакти — Медия Груп" },
      { property: "og:description", content: "Телефон, имейл, форма за запитване." },
    ],
    links: [{ rel: "canonical", href: "/kontakti" }],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Контакти"
        title={<>Да поговорим за <span className="text-gradient">Вашия проект</span></>}
        subtitle="Попълнете формата или ни потърсете директно — отговаряме в рамките на работния ден."
      />
      <Section>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          {/* CONTACT INFO */}
          <div className="space-y-5">
            <a href="tel:0895332779" className="group flex items-start gap-4 rounded-2xl bg-gradient-card border border-border/60 p-6 hover:border-electric/40 transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric ring-1 ring-electric/30"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Телефон</div>
                <div className="text-lg font-semibold mt-1">0895 332 779</div>
              </div>
            </a>
            <a href="mailto:support@eltekmedia.com" className="group flex items-start gap-4 rounded-2xl bg-gradient-card border border-border/60 p-6 hover:border-electric/40 transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric ring-1 ring-electric/30"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Имейл</div>
                <div className="text-lg font-semibold mt-1">support@eltekmedia.com</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl bg-gradient-card border border-border/60 p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric ring-1 ring-electric/30"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Адрес</div>
                <div className="text-lg font-semibold mt-1">София, ул. „Билянини извори" №1-3</div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl bg-gradient-card border border-border/60 p-8 space-y-5"
          >
            {sent ? (
              <div className="text-center py-12">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-electric/10 text-electric ring-1 ring-electric/30">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Благодарим Ви!</h3>
                <p className="mt-2 text-sm text-muted-foreground">Получихме Вашето запитване. Ще се свържем с Вас възможно най-скоро.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Име"><input required name="name" className="form-input" /></Field>
                  <Field label="Имейл"><input required type="email" name="email" className="form-input" /></Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Телефон"><input name="phone" className="form-input" /></Field>
                  <Field label="Тип запитване">
                    <select name="type" className="form-input">
                      <option>Искам екран за моя бизнес</option>
                      <option>Искам да рекламирам</option>
                      <option>Имам локация с висок трафик</option>
                      <option>Друго</option>
                    </select>
                  </Field>
                </div>
                <Field label="Съобщение">
                  <textarea required name="message" rows={5} className="form-input resize-none" />
                </Field>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
                  Изпрати запитване <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </Section>
      <style>{`
        .form-input {
          width: 100%;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: var(--foreground);
          font-size: 0.875rem;
          font-family: inherit;
          transition: border-color .15s, box-shadow .15s;
        }
        .form-input:focus { outline: none; border-color: var(--electric); box-shadow: 0 0 0 3px oklch(0.72 0.20 250 / 0.2); }
      `}</style>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">{label}</span>
      {children}
    </label>
  );
}
