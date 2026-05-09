import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-sunset text-primary-foreground">✦</span>
            Sparkbit
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Smart electronics kits that turn micro:bit curiosity into real, working gadgets.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/kits" className="hover:text-foreground">All kits</Link></li>
            <li><Link to="/kits/smart-home" className="hover:text-foreground">Smart Home</Link></li>
            <li><Link to="/kits/plant-watering" className="hover:text-foreground">Plant Watering</Link></li>
            <li><Link to="/kits/weather-station" className="hover:text-foreground">Weather Station</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Learn</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/tutorials" className="hover:text-foreground">Tutorials</Link></li>
            <li><Link to="/about" className="hover:text-foreground">For schools</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Get updates</h4>
          <p className="mt-3 text-sm text-muted-foreground">New kits & free build guides, monthly.</p>
          <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@school.edu"
              className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="rounded-full bg-gradient-warm px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sparkbit Labs. Made for curious kids and the grown-ups who help them.
      </div>
    </footer>
  );
}
