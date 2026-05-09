import { createFileRoute, Link } from "@tanstack/react-router";
import { kits } from "@/data/kits";

export const Route = createFileRoute("/tutorials")({
  head: () => ({
    meta: [
      { title: "Tutorials — Build your Sparkbit kit step by step" },
      { name: "description", content: "Free build guides for every Sparkbit micro:bit kit. From wiring diagrams to MakeCode and Python examples." },
      { property: "og:title", content: "Sparkbit tutorials" },
      { property: "og:description", content: "Step-by-step build guides for micro:bit smart-home, plant-watering and weather kits." },
    ],
  }),
  component: TutorialsPage,
});

const steps = [
  { n: "01", t: "Wire it up", d: "Match the colored jumper wires to the labeled pins on the shield. Diagrams included for every project." },
  { n: "02", t: "Flash the code", d: "Open MakeCode, drag in our example program, and click Download to send it to your micro:bit." },
  { n: "03", t: "Test & tweak", d: "Watch your hardware react. Adjust thresholds, sounds and timing to make it your own." },
  { n: "04", t: "Remix it", d: "Try the challenge prompts at the end of each guide — turn the smart home into a smart greenhouse, etc." },
];

export default function _noop() {}

function TutorialsPage() {
  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Tutorials</span>
          <h1 className="mt-2 max-w-3xl font-display text-5xl font-extrabold tracking-tight">
            Step-by-step guides for every kit.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Beginner-friendly. Every guide includes a wiring diagram, drag-and-drop MakeCode blocks, and a Python version for kids ready to level up.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-bold">How a build session works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="font-display text-3xl font-bold text-gradient-sunset">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 pb-20">
        <h2 className="font-display text-3xl font-bold">Build guides by kit</h2>
        <div className="mt-8 grid gap-6">
          {kits.map((kit) => (
            <article key={kit.id} className="grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-card md:grid-cols-[260px_1fr]">
              <img src={kit.image} alt={kit.name} loading="lazy" width={1024} height={1024} className="h-48 w-full rounded-2xl object-cover md:h-full" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">{kit.level} · {kit.buildTime}</div>
                <h3 className="mt-1 font-display text-2xl font-bold">{kit.name} — Build guide</h3>
                <p className="mt-2 text-muted-foreground">{kit.description}</p>
                <ol className="mt-4 grid gap-2 sm:grid-cols-2">
                  {kit.projects.map((p, i) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-warm text-[10px] font-bold text-primary-foreground">{i + 1}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link to="/kits/$kitId" params={{ kitId: kit.id }} className="inline-flex rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90">
                    See the kit
                  </Link>
                  <a href="https://makecode.microbit.org" target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-muted">
                    Open MakeCode ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
