import { Link } from "react-router-dom";

export function PhoneMockupStudio() {
  return (
    <div className="w-[220px] rounded-[2.25rem] border border-white/12 bg-gradient-to-b from-[hsl(0_0%_14%)] to-[hsl(0_0%_8%)] p-2.5 shadow-2xl">
      <div className="overflow-hidden rounded-[1.85rem] bg-[hsl(0_0%_8%)]">
        <div className="flex items-center justify-between px-4 py-2.5 text-[10px] text-[hsl(var(--muted-foreground))]">
          <span>9:41</span>
          <span className="font-semibold text-white">Stanicdesign</span>
          <span className="w-8" />
        </div>
        <div className="px-4 pb-8 pt-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
            Studio · NL
          </p>
        </div>
      </div>
    </div>
  );
}

export function PhoneMockupPortfolio() {
  return (
    <div className="w-[220px] rounded-[2.25rem] border border-white/12 bg-gradient-to-b from-[hsl(0_0%_14%)] to-[hsl(0_0%_8%)] p-2.5 shadow-2xl">
      <div className="overflow-hidden rounded-[1.85rem] bg-[hsl(0_0%_8%)]">
        <div className="flex items-center justify-between px-4 py-2.5 text-[10px] text-[hsl(var(--muted-foreground))]">
          <span>9:41</span>
          <span className="font-semibold text-white">Stanicdesign</span>
          <span className="w-8" />
        </div>
        <div className="px-4 pb-8 pt-2 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
            Studio · NL
          </p>
          <Link
            to="/portfolio"
            className="mt-6 inline-block rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white"
          >
            Bekijk werk
          </Link>
        </div>
      </div>
    </div>
  );
}
