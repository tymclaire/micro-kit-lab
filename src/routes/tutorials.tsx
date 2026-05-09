import { createFileRoute, Link } from "@tanstack/react-router";
import { kits } from "@/data/kits";

export const Route = createFileRoute("/tutorials")({
  head: () => ({
    meta: [
      { title: "Tutorials — PATCH" },
      { name: "description", content: "Step-by-step build guides for every PATCH kit. Wiring diagrams, MakeCode and Python examples." },
      { property: "og:title", content: "PATCH · Tutorials" },
      { property: "og:description", content: "Step-by-step build guides for the BBC micro:bit, in plain language." },
    ],
  }),
  component: TutorialsPage,
});

const lessons = [
  { n: "01", t: "Wire it up", d: "Five connections. Sensor to pin 0, driver to pin 1, power and ground." },
  { n: "02", t: "Read the soil", d: "Read pin 0 every second. Show the value on the LED screen." },
  { n: "03", t: "Trigger the pump", d: "Set a moisture threshold. Pump for 1.5 seconds when the soil is dry." },
  { n: "04", t: "Log & share", d: "Save readings to memory. Send them to a second micro:bit by radio." },
];

function TutorialsPage() {
  return (
    <div>
      <section className="border-b border-ink/20">
        <div className="mx-auto max-w-[1200px] px-6 pt-6">
          <div className="flex items-center justify-between border-b border-ink/15 pb-3">
            <span className="label-mono">PATCH · BOOKLET</span>
            <span className="label-mono text-ink/60">06 / 06</span>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <div className="label-mono text-ink/60">Tutorials</div>
            <h1 className="mt-3 font-display text-5xl font-black leading-[1] tracking-tight md:text-6xl">
              Four lessons.<br />
              <span className="relative inline-block">
                <span className="relative z-10">How to keep a plant alive with code.</span>
                <span aria-hidden className="absolute -bottom-1 left-0 z-0 h-[6px] w-full bg-leaf" />
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-ink/80">
              Every PATCH kit ships with a 32-page A5 booklet, saddle-stitched.
              Wiring diagrams. Numbered callouts. Sample code in MakeCode and
              Python. Ready for a 40-minute period.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="border border-ink/25 bg-card">
              <div className="flex items-center justify-between border-b border-ink/20 px-4 py-2.5">
                <span className="label-mono">SAMPLE CODE · MAKECODE</span>
                <span className="label-mono text-ink/60">P—01 / L02</span>
              </div>
              <pre className="font-mono overflow-x-auto bg-paper p-5 text-[12px] leading-relaxed text-ink">
{`forever:
    soil = analog read pin P0
    if soil < 480:
        digital write P1 to 1
        pause 1500 ms
        digital write P1 to 0`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* LESSON STRUCTURE */}
      <section className="border-b border-ink/20">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="flex items-end justify-between border-b border-ink/15 pb-4">
            <div>
              <div className="label-mono text-ink/60">How a build session works</div>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">From box to working device, in 40 minutes.</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-px bg-ink/15 md:grid-cols-4">
            {lessons.map((l) => (
              <div key={l.n} className="bg-paper p-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-leaf" />
                  <span className="label-mono text-ink">LESSON {l.n}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{l.t}</h3>
                <p className="mt-2 text-sm text-ink/75">{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES BY KIT */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="flex items-end justify-between border-b border-ink/15 pb-4">
            <h2 className="font-display text-3xl font-bold tracking-tight">Build guides by kit</h2>
            <span className="label-mono text-ink/60">3 booklets · 12 lessons</span>
          </div>

          <div className="mt-8 grid gap-6">
            {kits.map((kit) => (
              <article key={kit.id} className="grid gap-0 border border-ink/25 bg-card md:grid-cols-12">
                <div className="relative bg-kraft-hatch md:col-span-4">
                  <img src={kit.image} alt={kit.name} loading="lazy" width={1024} height={1024} className="h-full max-h-72 w-full object-cover mix-blend-multiply" />
                  <span aria-hidden className="absolute right-3 top-3 h-3 w-3 bg-leaf" />
                </div>

                <div className="border-t border-ink/20 p-6 md:col-span-8 md:border-l md:border-t-0">
                  <div className="flex items-center justify-between">
                    <span className="label-mono text-ink">{kit.series} · {kit.name.toUpperCase()}</span>
                    <span className="label-mono text-ink/60">{kit.lessonLength} · ages {kit.ages}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">Build guide · {kit.name}</h3>
                  <p className="mt-2 text-sm text-ink/75">{kit.longDesc}</p>

                  <ol className="mt-5 grid gap-2 sm:grid-cols-2">
                    {kit.build.map((p: string, i: number) => (
                      <li key={p} className="flex items-start gap-3 border border-ink/15 bg-paper px-3 py-2 text-sm">
                        <span className="font-mono text-ink/60">{String(i + 1).padStart(2, "0")}</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link to="/kits/$kitId" params={{ kitId: kit.id }} className="inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-sm text-paper transition hover:bg-paper hover:text-ink">
                      <span className="label-mono">See the kit</span>
                      <span aria-hidden>→</span>
                    </Link>
                    <a href="https://makecode.microbit.org" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-ink px-4 py-2 text-sm transition hover:bg-ink hover:text-paper">
                      <span className="label-mono">Open MakeCode ↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
