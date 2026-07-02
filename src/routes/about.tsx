import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hack'it" },
      { name: "description", content: "Hack'it makes sensor kits for young makers — hands-on, inventive, yours. For students, teachers and parents." },
      { property: "og:title", content: "About Hack'it" },
      { property: "og:description", content: "Sensor kits for young makers. A maker philosophy: hands-on, inventive, yours." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="border-b border-ink/20">
        <div className="mx-auto max-w-[1200px] px-6 pt-6">
          <div className="flex items-center justify-between border-b border-ink/15 pb-3">
            <span className="label-mono">HACK'IT · ABOUT</span>
            <span className="label-mono text-ink/60">A / 01</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <div className="label-mono text-ink/60">A house style</div>
            <h1 className="mt-3 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Hands-on.<br />Inventive.<br />
              <span className="relative inline-block">
                <span className="relative z-10">Yours.</span>
                <span aria-hidden className="absolute -bottom-1 left-0 z-0 h-[8px] w-full bg-leaf" />
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-ink/80">
              Hack'it is a young maker studio designing sensor kits for the BBC micro:bit.
              We build hands-on kits that turn ideas into real working devices — three of
              them so far — and we name every part, document every circuit, and write
              every booklet so you can build it, then hack it further.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="border border-ink/25 bg-card">
              <div className="flex items-center justify-between border-b border-ink/20 px-4 py-2.5">
                <span className="label-mono">PALETTE</span>
                <span className="label-mono text-ink/60">HACK'IT · 01</span>
              </div>
              <div className="grid grid-cols-5 gap-px bg-ink/15">
                <Swatch name="Paper" hex="#F3EFE7" bg="bg-paper" textDark />
                <Swatch name="Kraft" hex="#D8C5A0" bg="bg-kraft" textDark />
                <Swatch name="Ink" hex="#1A1A1A" bg="bg-ink" />
                <Swatch name="Leaf" hex="ACCENT" bg="bg-leaf" textDark />
                <Swatch name="Leaf·D" hex="0.48 L" bg="" customStyle={{ background: "var(--leaf-d)" }} />
              </div>
              <div className="border-t border-ink/20 px-4 py-3">
                <div className="label-mono text-ink/60">TYPE</div>
                <div className="font-mono mt-1 text-sm">Helvetica Neue · 400 / 700</div>
                <div className="font-mono text-xs text-ink/70">JetBrains Mono · 400 / 500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/20">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="flex items-end justify-between border-b border-ink/15 pb-4">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Who Hack'it is for</h2>
            <span className="label-mono text-ink/60">03 audiences</span>
          </div>
          <div className="mt-8 grid gap-px bg-ink/15 md:grid-cols-3">
            <Pillar tag="STUDENTS" title="Build something that works in one class." body="Open the box, follow the booklet, leave with a real device — not a pile of parts." />
            <Pillar tag="TEACHERS" title="A lesson that fits the period." body="Each kit ships with a 32-page booklet, four lessons, and bulk pricing for class sets of 10+." />
            <Pillar tag="PARENTS" title="Screen time that makes something." body="Recommended ages 9+. Build alongside your kid in an afternoon, with a grown-up guide in every booklet." />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="grid items-end gap-8 border border-ink bg-ink p-10 text-paper md:grid-cols-2 md:p-14">
            <div>
              <div className="label-mono text-paper/60">For schools</div>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">Class sets, lesson plans, teacher training.</h2>
              <p className="mt-3 max-w-md text-sm text-paper/80">Bulk pricing on orders of 10+. Free classroom guide and slides included.</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link to="/kits" className="inline-flex items-center gap-2 border border-paper bg-paper px-6 py-3 text-sm font-medium text-ink transition hover:bg-ink hover:text-paper">
                <span className="label-mono">Browse the series</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Swatch({ name, hex, bg, textDark, customStyle }: { name: string; hex: string; bg: string; textDark?: boolean; customStyle?: React.CSSProperties }) {
  return (
    <div className={`${bg} flex aspect-square flex-col justify-between p-3`} style={customStyle}>
      <div className={`label-mono ${textDark ? "text-ink" : "text-paper"}`}>{name}</div>
      <div className={`font-mono text-[10px] ${textDark ? "text-ink/70" : "text-paper/80"}`}>{hex}</div>
    </div>
  );
}

function Pillar({ tag, title, body }: { tag: string; title: string; body: string }) {
  return (
    <div className="bg-paper p-8">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 bg-leaf" />
        <span className="label-mono text-ink/70">{tag}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight">{title}</h3>
      <p className="mt-3 text-sm text-ink/75">{body}</p>
    </div>
  );
}
