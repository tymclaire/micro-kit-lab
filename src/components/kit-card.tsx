import { Link } from "@tanstack/react-router";
import type { Kit } from "@/data/kits";

export function KitCard({ kit }: { kit: Kit }) {
  return (
    <Link
      to="/kits/$kitId"
      params={{ kitId: kit.id }}
      className="group flex flex-col border border-ink/30 bg-card transition hover:border-ink"
    >
      <div className="flex items-center justify-between border-b border-ink/20 px-4 py-2.5">
        <span className="label-mono text-ink">KIT NO. {kit.series}</span>
        {kit.status && <span className="label-mono text-ink/60">{kit.status}</span>}
      </div>

      <div className="relative aspect-[5/4] overflow-hidden bg-kraft-hatch">
        <img
          src={kit.image}
          alt={`${kit.name} kit, overhead photo`}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-[1.02]"
        />
        <span aria-hidden className="absolute right-3 top-3 h-3 w-3 bg-leaf" />
      </div>

      <div className="flex flex-1 flex-col gap-3 border-t border-ink/20 p-5">
        <h3 className="font-display text-2xl font-bold leading-tight tracking-tight">{kit.name}</h3>
        <p className="text-sm text-ink/75">{kit.shortDesc}</p>

        <dl className="mt-2 grid grid-cols-3 gap-2 border-t border-ink/15 pt-3 text-[11px]">
          <Meta k="AGES" v={kit.ages} />
          <Meta k="LESSON" v={kit.lessonLength} />
          <Meta k="SOLDER" v={kit.soldering} />
        </dl>

        <div className="mt-auto flex items-end justify-between pt-3">
          <div>
            <div className="label-mono text-ink/60">USD</div>
            <div className="font-display text-2xl font-bold leading-none">${kit.price}</div>
          </div>
          <span className="label-mono text-ink underline-offset-4 group-hover:underline">
            View kit →
          </span>
        </div>
      </div>
    </Link>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="label-mono text-ink/55">{k}</dt>
      <dd className="font-mono mt-1 text-xs text-ink">{v}</dd>
    </div>
  );
}
