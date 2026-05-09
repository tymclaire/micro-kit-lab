import { createFileRoute } from "@tanstack/react-router";
import { kits } from "@/data/kits";
import { KitCard } from "@/components/kit-card";

export const Route = createFileRoute("/kits")({
  head: () => ({
    meta: [
      { title: "All kits — Sparkbit" },
      { name: "description", content: "Browse every Sparkbit micro:bit extension kit — smart home, plant watering, weather station and more." },
      { property: "og:title", content: "All Sparkbit kits" },
      { property: "og:description", content: "Hands-on micro:bit kits priced around $40, with step-by-step build guides." },
    ],
  }),
  component: KitsPage,
});

function KitsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">The kits</span>
        <h1 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">
          Every kit you can build today
        </h1>
        <p className="mt-3 text-muted-foreground">
          Three starter sets, all built around the micro:bit V2. Around $40 each, with everything you need in the box.
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
