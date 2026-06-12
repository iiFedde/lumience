import { useEffect, useRef, type ReactNode } from "react";

export function Tilt3D({
  children,
  max = 8,
  className = "",
}: {
  children: ReactNode;
  max?: number;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const target = inner.current;
    if (!el || !target) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    let frame = 0;
    const state = { rx: 0, ry: 0, trx: 0, try: 0, gx: 50, gy: 50, tgx: 50, tgy: 50 };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        state.trx = 0;
        state.try = 0;
        return;
      }
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      state.try = (x - 0.5) * max * 2;
      state.trx = -(y - 0.5) * max * 2;
      state.tgx = x * 100;
      state.tgy = y * 100;
    };

    const tick = () => {
      state.rx += (state.trx - state.rx) * 0.12;
      state.ry += (state.try - state.ry) * 0.12;
      state.gx += (state.tgx - state.gx) * 0.15;
      state.gy += (state.tgy - state.gy) * 0.15;
      target.style.transform = `perspective(1000px) rotateX(${state.rx}deg) rotateY(${state.ry}deg)`;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [max]);

  return (
    <div ref={root} className={className} style={{ perspective: 1000 }}>
      <div ref={inner} className="relative will-change-transform" style={{ transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </div>
  );
}
