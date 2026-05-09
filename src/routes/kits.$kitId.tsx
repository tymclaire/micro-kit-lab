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
    if (!k) return { meta: [{ title: "Kit not found — Sparkbit" }] };
    return {
      meta: [
        { title: `${k.name} — Sparkbit` },
        { name: "description", content: k.tagline },
        { property: "og:title", content: `${k.name} — Sparkbit` },
        { property: "og:description", content: k.tagline },
        { property: "og:image", content: k.image },
        { name: "twitter:image", content: k.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Kit not found</h1>
      <Link to="/kits" className="mt-4 inline-flex text-primary hover:underline">Back to all kits →</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: KitDetail,
});

function KitDetail() {
  const { kit } = Route.useLoaderData();
  const others = kits.filter((k) => k.id !== kit.id);

  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-sunset opacity-30 blur-2xl" aria-hidden />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <img src={kit.image} alt={kit.name} width={1024} height={1024} className="h-full w-full object-cover" />
            </div>
          </div>

          <div>
            <Link to="/kits" className="text-sm text-muted-foreground hover:text-foreground">← All kits</Link>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
              <Tag>{kit.level}</Tag>
              <Tag>{kit.ageRange}</Tag>
              <Tag>Build {kit.buildTime}</Tag>
              {kit.badge && <Tag highlight>{kit.badge}</Tag>}
            </div>
            <h1 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">{kit.name}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{kit.tagline}</p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold">${kit.price}</span>
              <span className="text-sm text-muted-foreground">USD · free shipping over $75</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95">
                Add to cart
              </button>
              <Link to="/tutorials" className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-muted">
                See build guide
              </Link>
            </div>

            <p className="mt-8 text-foreground/80">{kit.description}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold">What’s in the box</h2>
          <ul className="mt-5 space-y-3">
            {kit.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-gradient-warm text-[10px] font-bold text-primary-foreground">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold">Projects you’ll build</h2>
          <ul className="mt-5 grid gap-3">
            {kit.projects.map((p, i) => (
              <li key={p} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                <div className="text-xs font-semibold text-primary">Project {i + 1}</div>
                <div className="mt-1 font-medium">{p}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-2xl font-bold">More kits to explore</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((k) => (
              <Link
                key={k.id}
                to="/kits/$kitId"
                params={{ kitId: k.id }}
                className="flex gap-4 rounded-2xl border border-border bg-background p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <img src={k.image} alt={k.name} loading="lazy" width={1024} height={1024} className="h-24 w-24 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="font-display text-lg font-bold">{k.name}</div>
                  <div className="text-sm text-muted-foreground">{k.tagline}</div>
                  <div className="mt-1 text-sm font-semibold">${k.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Tag({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <span
      className={
        highlight
          ? "rounded-full bg-foreground px-3 py-1 text-background"
          : "rounded-full border border-border bg-background px-3 py-1 text-muted-foreground"
      }
    >
      {children}
    </span>
  );
}
