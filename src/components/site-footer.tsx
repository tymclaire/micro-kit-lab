import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink/20 bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo className="text-xl" />
            <p className="mt-4 max-w-md text-sm text-ink/75">
              Hack'it makes sensor kits for young makers. Hands-on, inventive, yours — every part named, every circuit documented, every build a real invention.
            </p>
          </div>

          <div>
            <div className="label-mono text-ink/60">Kits</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/kits/plant-watering" className="hover:underline">P—01 · Plant Watering</Link></li>
              <li><Link to="/kits/smart-home" className="hover:underline">P—02 · Smart Home</Link></li>
              <li><Link to="/kits/3d-mouse-regular" className="hover:underline">M—01 · 3D Mouse Regular</Link></li>
              <li><Link to="/kits/3d-mouse-mini" className="hover:underline">M—02 · 3D Mouse Mini</Link></li>
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
