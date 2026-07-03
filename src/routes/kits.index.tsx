import { createFileRoute } from "@tanstack/react-router";
import { kits } from "@/data/kits";
import { KitCard } from "@/components/kit-card";

export const Route = createFileRoute("/kits/")({
  head: () => ({
    meta: [
      { title: "The series — Hack'it" },
      { name: "description", content: "Every Hack'it sensor kit: P—01 Plant Watering, P—02 Smart Home, P—03 Weather Station. Built for the BBC micro:bit." },
      { property: "og:title", content: "Hack'it · The series" },
      { property: "og:description", content: "Three classroom sensor kits for the BBC micro:bit." },
    ],
  }),
  component: KitsPage,
});

function KitsPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-6">
      <div className="flex items-center justify-between border-b border-ink/15 pb-3">
        <span className="label-mono text-ink">HACK'IT · CATALOG</span>
        <span className="label-mono text-ink/60">CAT / 01</span>
      </div>

      <header className="mt-12 max-w-2xl">
        <div className="label-mono text-ink/60">The series</div>
        <h1 className="mt-3 font-display text-5xl font-black leading-[1] tracking-tight md:text-6xl">
          Every kit you can teach today.
        </h1>
        <p className="mt-5 text-base text-ink/80">
          Three kits — two sensor kits for the BBC micro:bit and a 3D printed wireless mouse you snap together yourself. All under $50, no soldering.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {kits.map((kit) => (
          <KitCard key={kit.id} kit={kit} />
        ))}
      </div>
    </div>
  );
}
