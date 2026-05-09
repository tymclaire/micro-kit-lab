import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/20 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span aria-hidden className="grid h-7 w-7 grid-cols-2 grid-rows-2 gap-[2px]">
            <span className="bg-ink" />
            <span className="bg-ink" />
            <span className="bg-ink" />
            <span className="bg-leaf" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">PATCH</span>
          <span className="label-mono hidden text-muted-foreground sm:inline">Sensor kits for the classroom</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link to="/kits" className="text-ink/70 transition hover:text-ink" activeProps={{ className: "text-ink underline underline-offset-8" }}>Kits</Link>
          <Link to="/tutorials" className="text-ink/70 transition hover:text-ink" activeProps={{ className: "text-ink underline underline-offset-8" }}>Tutorials</Link>
          <Link to="/about" className="text-ink/70 transition hover:text-ink" activeProps={{ className: "text-ink underline underline-offset-8" }}>About</Link>
        </nav>
        <Link
          to="/kits"
          className="inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-paper hover:text-ink"
        >
          <span className="label-mono">Shop</span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
