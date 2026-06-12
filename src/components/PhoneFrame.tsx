import type { ReactNode } from "react";

export function PhoneFrame({
  children,
  className = "",
  tilt = 0,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
}) {
  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="relative aspect-[9/19] w-[260px] rounded-[52px] border border-white/[0.07] bg-[#0a0a0a] p-[10px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),inset_0_0_0_1.5px_rgba(255,255,255,0.05)] md:w-[300px]">
        <div className="absolute top-[10px] left-1/2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-[#101010]">
          {children}
          <div className="pointer-events-none absolute inset-0 rounded-[42px] bg-gradient-to-b from-white/5 to-transparent" />
        </div>
        <div className="absolute top-32 -right-[2px] h-16 w-[3px] rounded-l bg-white/[0.08]" />
        <div className="absolute top-24 -left-[2px] h-10 w-[3px] rounded-r bg-white/[0.08]" />
        <div className="absolute top-40 -left-[2px] h-16 w-[3px] rounded-r bg-white/[0.08]" />
      </div>
    </div>
  );
}
