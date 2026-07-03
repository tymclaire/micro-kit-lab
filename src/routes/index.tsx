import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/patch-hero.jpg";
import { kits } from "@/data/kits";
import { KitCard } from "@/components/kit-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hack'it — Sensor kits for young makers" },
      { name: "description", content: "Hack'it makes hands-on maker kits for young people. Sensor kits for the BBC micro:bit and 3D printed wireless mice — build something real." },
      { property: "og:title", content: "Hack'it — Sensor kits for young makers" },
      { property: "og:description", content: "Sensor kits for the BBC micro:bit. Build real devices. No soldering." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="border-b border-ink/20">
        <div className="mx-auto max-w-[1200px] px-6 pt-6">
          <div className="flex items-center justify-between border-b border-ink/15 pb-3">
            <span className="label-mono text-ink">HACK'IT · BRAND SHEET</span>
            <span className="label-mono text-ink/60">01 / 04</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-12 md:gap-8 md:py-20">
          <div className="md:col-span-6 lg:col-span-5">
            <div className="label-mono text-ink/60">Primary lockup</div>
            <h1 className="mt-3 font-display text-6xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Sensor kits<br />for young<br />
              <span className="relative inline-block">
                makers.
                <span aria-hidden className="absolute -bottom-2 left-0 h-[6px] w-full bg-leaf" />
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base text-ink/80">
              Hack'it makes hands-on maker kits. Sensor kits for the BBC
              micro:bit. Wireless mice you 3D print and snap together yourself.
              Open the box, build something real, keep it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/kits" className="inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:bg-paper hover:text-ink">
                <span className="label-mono">Shop the series</span>
                <span aria-hidden>→</span>
              </Link>
              <Link to="/tutorials" className="inline-flex items-center gap-2 border border-ink px-5 py-3 text-sm font-medium text-ink transition hover:bg-ink hover:text-paper">
                <span className="label-mono">Read the lessons</span>
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 border-t border-ink/20 pt-4 text-xs">
              <Stat k="KITS" v="04" />
              <Stat k="FROM" v="$39" />
              <Stat k="SOLDER" v="None" />
            </dl>
          </div>

          <div className="md:col-span-6 lg:col-span-7">
            <figure className="border border-ink/30 bg-card">
              <figcaption className="flex items-center justify-between border-b border-ink/20 px-4 py-2.5">
                <span className="label-mono text-ink">HERO RENDER · OVERHEAD · KRAFT 350 GSM</span>
                <span className="label-mono text-ink/60">P—01 / 04A</span>
              </figcaption>
              <div className="relative bg-kraft-hatch">
                <img
                  src={heroImg}
                  alt="Overhead photo of an assembled Hack'it plant watering kit on kraft paper"
                  width={1600}
                  height={1024}
                  className="aspect-[16/10] w-full object-cover mix-blend-multiply"
                />
                <span aria-hidden className="absolute right-4 top-4 h-3 w-3 bg-leaf" />
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-ink/20 px-4 py-3 text-xs md:grid-cols-4">
                <Spec k="DIM" v="250 × 180 × 60 mm" />
                <Spec k="BOARD" v="Kraft 350 gsm" />
                <Spec k="SPOT" v="Leaf green" />
                <Spec k="VIEW" v="22° / 12°" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* PALETTE / VOICE — three columns */}
      <section className="border-b border-ink/20">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="flex items-end justify-between border-b border-ink/15 pb-4">
            <div>
              <div className="label-mono text-ink/60">02 / Voice</div>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Hands-on. Inventive. Yours.
              </h2>
            </div>
            <span className="label-mono hidden text-ink/60 md:block">A house style</span>
          </div>

          <div className="mt-8 grid gap-px bg-ink/15 md:grid-cols-3">
            <Pillar n="01" t="Hands-on" body="Real parts, real circuits, real devices. No simulation, no shortcut — just the satisfaction of making something that actually works." />
            <Pillar n="02" t="Inventive" body="Every kit leads to a working invention. Specs on the panel. Code in the booklet. Then hack it further." />
            <Pillar n="03" t="Yours" body="The booklet gets you to working. After that, it's yours — remix it, extend it, teach it to someone else." />
          </div>
        </div>
      </section>

      {/* KITS */}
      <section className="border-b border-ink/20">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="flex items-end justify-between border-b border-ink/15 pb-4">
            <div>
              <div className="label-mono text-ink/60">03 / The series</div>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Four kits. Build something you'll actually use.
              </h2>
            </div>
            <Link to="/kits" className="label-mono hidden text-ink hover:underline md:inline-block">
              View all kits →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {kits.map((k) => (
              <KitCard key={k.id} kit={k} />
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="border-b border-ink/20">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="flex items-end justify-between border-b border-ink/15 pb-4">
            <div>
              <div className="label-mono text-ink/60">04 / Who it's for</div>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Students, teachers, parents.
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Audience tag="STUDENTS" title="Build something that works in one class." body="Open the box, follow the booklet, leave with a real device — not a pile of parts." />
            <Audience tag="TEACHERS" title="A lesson that fits the period." body="Each kit ships with a 32-page booklet, four lessons, and bulk pricing for class sets." />
            <Audience tag="PARENTS" title="Screen time that makes something." body="Recommended ages 9+. Build alongside your kid in an afternoon." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="grid items-end gap-8 border border-ink bg-ink p-10 text-paper md:grid-cols-2 md:p-14">
            <div>
              <div className="label-mono text-paper/60">CTA</div>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                Pick a kit. Teach a class. Keep a plant alive.
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <Link to="/kits" className="inline-flex items-center gap-2 border border-paper bg-paper px-6 py-3 text-sm font-medium text-ink transition hover:bg-ink hover:text-paper">
                <span className="label-mono">Shop the series</span>
                <span aria-hidden>→</span>
              </Link>
              <span className="label-mono text-paper/60">Free shipping over $75 · Bulk pricing for class sets</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="label-mono text-ink/60">{k}</dt>
      <dd className="font-mono mt-1 text-sm text-ink">{v}</dd>
    </div>
  );
}

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="label-mono text-ink/55">{k}</div>
      <div className="font-mono mt-1 text-xs">{v}</div>
    </div>
  );
}

function Pillar({ n, t, body }: { n: string; t: string; body: string }) {
  return (
    <div className="bg-paper p-8">
      <div className="label-mono text-ink/60">{n}</div>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{t}</h3>
      <p className="mt-3 text-sm text-ink/75">{body}</p>
    </div>
  );
}

function Audience({ tag, title, body }: { tag: string; title: string; body: string }) {
  return (
    <div className="border border-ink/25 bg-card p-6">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 bg-leaf" />
        <span className="label-mono text-ink/70">{tag}</span>
      </div>
      <h3 className="mt-4 font-display text-xl font-bold leading-snug">{title}</h3>
      <p className="mt-3 text-sm text-ink/75">{body}</p>
    </div>
  );
}
