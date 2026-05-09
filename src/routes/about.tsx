import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sparkbit" },
      { name: "description", content: "Sparkbit makes micro:bit extension kits for students, teachers and parents — built around real, working projects." },
      { property: "og:title", content: "About Sparkbit" },
      { property: "og:description", content: "Why we build smart electronics kits for curious kids and the grown-ups who help them." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Sparkbit</span>
          <h1 className="mt-2 font-display text-5xl font-extrabold tracking-tight">
            We build kits that make
            <span className="text-gradient-sunset"> code feel real.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Sparkbit is a small studio designing micro:bit extension kits for students, teachers and parents.
            We pick projects you can actually use — a smart home that turns lights on, a planter that waters itself, a weather station you can leave on the windowsill.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-3">
        <Pillar title="For students" body="Every kit ends with something you can show off — not a pile of disconnected parts." />
        <Pillar title="For teachers" body="Lesson-ready guides with learning objectives. Bulk pricing for classes of 10+." />
        <Pillar title="For parents" body="Screen time that creates something. Build alongside your kid in an afternoon." />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-sunset p-10 text-primary-foreground shadow-glow md:p-14">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Want kits for your classroom?</h2>
          <p className="mt-3 text-primary-foreground/90">
            Email us about bulk orders, lesson plans and teacher training.
          </p>
          <Link to="/kits" className="mt-6 inline-flex rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90">
            Browse the kits →
          </Link>
        </div>
      </section>
    </div>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
      <h3 className="font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
