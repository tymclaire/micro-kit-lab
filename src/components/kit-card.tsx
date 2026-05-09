import { Link } from "@tanstack/react-router";
import type { Kit } from "@/data/kits";

export function KitCard({ kit }: { kit: Kit }) {
  return (
    <Link
      to="/kits/$kitId"
      params={{ kitId: kit.id }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={kit.image}
          alt={kit.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {kit.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-foreground/90 px-3 py-1 text-xs font-semibold text-background">
            {kit.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <span>{kit.level}</span>
          <span>•</span>
          <span>{kit.ageRange}</span>
          <span>•</span>
          <span>{kit.buildTime}</span>
        </div>
        <h3 className="font-display text-xl font-bold">{kit.name}</h3>
        <p className="text-sm text-muted-foreground">{kit.tagline}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-2xl font-bold">${kit.price}</span>
          <span className="text-sm font-semibold text-primary group-hover:underline">
            View kit →
          </span>
        </div>
      </div>
    </Link>
  );
}
