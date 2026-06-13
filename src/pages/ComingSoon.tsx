import { Mail } from "lucide-react";
import { LogoMark } from "../components/LogoMark";
import { brand } from "../data/brand";

export function ComingSoon() {
  return (
    <div className="spotlight relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div className="ring-arc" />
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl aurora-drift"
        aria-hidden
      />

      <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
        <LogoMark size={56} />

        <p className="eyebrow mt-10">Opening soon</p>

        <h1
          className="display mt-6 text-balance uppercase"
          style={{ fontSize: "clamp(2rem, 8vw, 3.75rem)" }}
        >
          Binnenkort{" "}
          <span className="accent-serif normal-case text-muted-foreground">
            meer.
          </span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
          {brand.name} komt eraan — {brand.tagline.toLowerCase()} door{" "}
          {brand.designer}. De site wordt op dit moment gebouwd.
        </p>

        <a
          href={`mailto:${brand.email}?subject=${encodeURIComponent("Contact Astro Visuals")}`}
          className="pill-light mt-10 group"
        >
          <Mail className="h-4 w-4" />
          {brand.email}
        </a>

        <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {brand.location} · {brand.since}
        </p>
      </div>
    </div>
  );
}
