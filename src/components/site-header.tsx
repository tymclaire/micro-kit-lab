import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-sunset text-primary-foreground shadow-glow">
            ✦
          </span>
          <span>Sparkbit</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link to="/kits" className="text-muted-foreground transition hover:text-foreground" activeProps={{ className: "text-foreground" }}>Kits</Link>
          <Link to="/tutorials" className="text-muted-foreground transition hover:text-foreground" activeProps={{ className: "text-foreground" }}>Tutorials</Link>
          <Link to="/about" className="text-muted-foreground transition hover:text-foreground" activeProps={{ className: "text-foreground" }}>About</Link>
        </nav>
        <Link
          to="/kits"
          className="inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90"
        >
          Shop kits
        </Link>
      </div>
    </header>
  );
}
