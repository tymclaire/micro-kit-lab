import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-kits.jpg";
import { kits } from "@/data/kits";
import { KitCard } from "@/components/kit-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sparkbit — Smart electronics kits for curious kids" },
      { name: "description", content: "micro:bit extension kits to build a smart home, water a plant, or track the weather. Designed for students, teachers and parents." },
      { property: "og:title", content: "Sparkbit — Smart electronics kits" },
      { property: "og:description", content: "Hands-on micro:bit kits with step-by-step build guides." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="absolute -left-32 top-1/3 -z-0 h-72 w-72 rounded-full bg-gradient-warm opacity-40 blur-3xl" aria-hidden />
        <div className="absolute -right-24 -top-24 -z-0 h-80 w-80 rounded-full bg-gradient-cool opacity-30 blur-3xl" aria-hidden />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              New drop · micro:bit V2 kits
            </span>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Smart electronics that
              <span className="text-gradient-sunset"> spark real curiosity.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Hands-on micro:bit extension kits for students, teachers and parents.
              Build a smart home, water a plant, or track the weather — every kit ships with a step-by-step guide.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/kits" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                Browse kits →
              </Link>
              <Link to="/tutorials" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition hover:bg-muted">
                See how to build
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Stat n="3" label="ready-to-build kits" />
              <Stat n="$40" label="average price" />
              <Stat n="2 hrs" label="from box to first project" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-sunset opacity-40 blur-2xl" aria-hidden />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
              <img
                src={heroImg}
                alt="Hands assembling a colorful micro:bit electronics kit"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured kits */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Pick your first kit</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Each set is self-contained — open the box, follow the guide, and have something working today.
            </p>
          </div>
          <Link to="/kits" className="text-sm font-semibold text-primary hover:underline">
            View all kits →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {kits.map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold md:text-4xl">How a Sparkbit kit works</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            From unboxing to first invention, in four simple steps.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Unbox", d: "Every part labeled. No hunting for the right wire." },
              { n: "02", t: "Plug in", d: "Snap the shield onto your micro:bit — no soldering required." },
              { n: "03", t: "Code it", d: "Drag-and-drop blocks in MakeCode, or level up with Python." },
              { n: "04", t: "Remix", d: "Follow our remix challenges to invent your own version." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-background p-6 shadow-card">
                <div className="font-display text-3xl font-bold text-gradient-sunset">{s.n}</div>
                <h3 className="mt-3 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For teachers/parents */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <Audience
            title="For teachers"
            body="Lesson-ready packs aligned to STEM standards. Free classroom guide and slides included with every order of 10+."
            cta="See classroom plans"
          />
          <Audience
            title="For parents"
            body="A screen-time activity that actually creates something. Recommended ages 9+, with a grown-up guide so you can build together."
            cta="Browse family kits"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-sunset p-10 text-primary-foreground shadow-glow md:p-16">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Build something that beeps, blinks or waters itself.</h2>
            <p className="mt-3 text-primary-foreground/90">
              Pick a kit, follow the build guide, and see your code light up real hardware in under an afternoon.
            </p>
            <Link
              to="/kits"
              className="mt-6 inline-flex items-center rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
            >
              Shop the kits →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-foreground">{n}</div>
      <div className="text-xs uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Audience({ title, body, cta }: { title: string; body: string; cta: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <p className="mt-3 text-muted-foreground">{body}</p>
      <Link to="/about" className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline">
        {cta} →
      </Link>
    </div>
  );
}
