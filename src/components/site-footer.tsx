import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink/20 bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span aria-hidden className="grid h-7 w-7 grid-cols-2 grid-rows-2 gap-[2px]">
                <span className="bg-ink" />
                <span className="bg-ink" />
                <span className="bg-ink" />
                <span className="bg-leaf" />
              </span>
              <span className="font-display text-lg font-bold">Hack'it</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-ink/75">
              Hack'it makes sensor kits for young makers. Hands-on, inventive, yours — every part named, every circuit documented, every build a real invention.
            </p>
          </div>

          <div>
            <div className="label-mono text-ink/60">Series</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/kits/plant-watering" className="hover:underline">P—01 · Plant Watering</Link></li>
              <li><Link to="/kits/smart-home" className="hover:underline">P—02 · Smart Home</Link></li>
              <li><Link to="/kits/weather-station" className="hover:underline">P—03 · Weather Station</Link></li>
            </ul>
          </div>

          <div>
            <div className="label-mono text-ink/60">More</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/tutorials" className="hover:underline">Tutorials</Link></li>
              <li><Link to="/about" className="hover:underline">About Hack'it</Link></li>
              <li><a href="https://makecode.microbit.org" target="_blank" rel="noreferrer" className="hover:underline">MakeCode ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-6 text-xs text-ink/60">
          <div className="label-mono">© {new Date().getFullYear()} · Hack'it · Sensor Kits for Young Makers</div>
          <div className="label-mono">Designed for young makers · Micro:bit not made by Hack'it</div>
        </div>
      </div>
    </footer>
  );
}
