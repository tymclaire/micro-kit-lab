import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getKit, kits, type Kit } from "@/data/kits";

export const Route = createFileRoute("/kits/$kitId")({
  loader: ({ params }): { kit: Kit } => {
    const kit = getKit(params.kitId);
    if (!kit) throw notFound();
    return { kit };
  },
  head: ({ loaderData }) => {
    const k = loaderData?.kit;
    if (!k) return { meta: [{ title: "Kit not found — PATCH" }] };
    return {
      meta: [
        { title: `${k.series} · ${k.name} — PATCH` },
        { name: "description", content: k.shortDesc },
        { property: "og:title", content: `${k.series} · ${k.name} — PATCH` },
        { property: "og:description", content: k.shortDesc },
        { property: "og:image", content: k.image },
        { name: "twitter:image", content: k.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Kit not found</h1>
      <Link to="/kits" className="label-mono mt-4 inline-flex hover:underline">← All kits</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <p className="text-ink/70">{error.message}</p>
    </div>
  ),
  component: KitDetail,
});

function KitDetail() {
  const { kit } = Route.useLoaderData();
  const others = kits.filter((k) => k.id !== kit.id);

  return (
    <div>
      {/* TOP STRIP */}
      <div className="border-b border-ink/20">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
          <Link to="/kits" className="label-mono hover:underline">← Catalog</Link>
          <span className="label-mono text-ink/60">{kit.series} · {kit.name.toUpperCase()}</span>
          <span className="label-mono text-ink/60">{kit.status}</span>
        </div>
      </div>

      {/* HERO */}
      <section className="border-b border-ink/20">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <figure className="border border-ink/30 bg-card">
              <figcaption className="flex items-center justify-between border-b border-ink/20 px-4 py-2.5">
                <span className="label-mono">KIT NO. {kit.series}</span>
                <span className="label-mono text-ink/60">OVERHEAD · ASSEMBLED</span>
              </figcaption>
              <div className="relative bg-kraft-hatch">
                <img src={kit.image} alt={kit.name} width={1024} height={1024} className="aspect-[5/4] w-full object-cover mix-blend-multiply" />
                <span aria-hidden className="absolute right-4 top-4 h-3 w-3 bg-leaf" />
              </div>
            </figure>
          </div>

          <div className="md:col-span-5">
            <div className="label-mono text-ink/60">Series {kit.series}</div>
            <h1 className="mt-2 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
              {kit.name}
            </h1>
            <p className="mt-5 max-w-md text-base text-ink/80">{kit.shortDesc}</p>
            <p className="mt-3 max-w-md text-sm text-ink/70">{kit.longDesc}</p>

            <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-ink/20 py-4">
              <Meta k="AGES" v={kit.ages} />
              <Meta k="LESSON" v={kit.lessonLength} />
              <Meta k="SOLDER" v={kit.soldering} />
            </dl>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <div className="label-mono text-ink/60">USD</div>
                <div className="font-display text-4xl font-black leading-none">${kit.price}</div>
              </div>
              <button className="inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:bg-paper hover:text-ink">
                <span className="label-mono">Add to cart</span>
                <span aria-hidden>→</span>
              </button>
            </div>
            <div className="label-mono mt-3 text-ink/60">Free shipping over $75 · Bulk pricing for class sets</div>
          </div>
        </div>
      </section>

      {/* INSIDE THE BOX */}
      <section className="border-b border-ink/20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="label-mono text-ink/60">04B / What's inside</div>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Everything in the box, on the box.
            </h2>
            <p className="mt-4 max-w-sm text-sm text-ink/75">
              Quantities, lengths and voltages aren't an afterthought. They're part of the design — printed on the panel and listed below.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="border border-ink/25">
              <div className="grid grid-cols-12 border-b border-ink/20 bg-card px-4 py-2.5">
                <div className="label-mono col-span-2 text-ink/60">QTY</div>
                <div className="label-mono col-span-6 text-ink/60">ITEM</div>
                <div className="label-mono col-span-4 text-ink/60">NOTE</div>
              </div>
              {kit.contents.map((c, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-12 px-4 py-3 text-sm ${i !== kit.contents.length - 1 ? "border-b border-ink/10" : ""}`}
                >
                  <div className="font-mono col-span-2 text-ink">{c.qty}</div>
                  <div className="col-span-6">{c.item}</div>
                  <div className="font-mono col-span-4 text-xs text-ink/60">{c.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL BUILD + SPECS */}
      <section className="border-b border-ink/20 bg-card/60">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="label-mono text-ink/60">You'll build</div>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">Four lessons, four projects.</h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {kit.build.map((b, i) => (
                <li key={b} className="flex items-start gap-3 border border-ink/20 bg-paper p-4">
                  <span className="label-mono mt-1 inline-flex h-6 w-6 items-center justify-center bg-ink text-paper">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="md:col-span-5">
            <div className="label-mono text-ink/60">Specs</div>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">Printed on the panel.</h3>
            <dl className="mt-6 border-t border-ink/20">
              {kit.specs.map((s) => (
                <div key={s.label} className="grid grid-cols-3 border-b border-ink/15 py-3">
                  <dt className="label-mono col-span-1 text-ink/60">{s.label}</dt>
                  <dd className="font-mono col-span-2 text-sm">{s.value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-3 border-b border-ink/15 py-3">
                <dt className="label-mono col-span-1 text-ink/60">DIM</dt>
                <dd className="font-mono col-span-2 text-sm">{kit.dimensions}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* OTHERS */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="flex items-end justify-between border-b border-ink/15 pb-4">
            <h2 className="font-display text-2xl font-bold tracking-tight">More in the series</h2>
            <Link to="/kits" className="label-mono hover:underline">All kits →</Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((k) => (
              <Link
                key={k.id}
                to="/kits/$kitId"
                params={{ kitId: k.id }}
                className="group flex gap-4 border border-ink/25 bg-card p-4 transition hover:border-ink"
              >
                <div className="relative h-28 w-28 shrink-0 overflow-hidden bg-kraft-hatch">
                  <img src={k.image} alt={k.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex-1">
                  <div className="label-mono text-ink/60">{k.series}</div>
                  <div className="font-display text-xl font-bold leading-tight">{k.name}</div>
                  <div className="mt-1 text-sm text-ink/75">{k.shortDesc}</div>
                  <div className="font-mono mt-2 text-sm">${k.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="label-mono text-ink/55">{k}</dt>
      <dd className="font-mono mt-1 text-sm">{v}</dd>
    </div>
  );
}
