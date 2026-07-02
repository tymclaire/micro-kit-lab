export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center font-mono font-bold tracking-tight text-ink select-none ${className ?? ""}`}>
      Hack
      <span className="inline-flex items-center mx-[3px]">
        <svg viewBox="0 0 16 16" width="0.72em" height="0.72em" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="8" cy="8" r="8" fill="var(--leaf)" />
          <line x1="8" y1="3" x2="8" y2="13" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="3" y1="8" x2="13" y2="8" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      </span>
      it
    </span>
  );
}
