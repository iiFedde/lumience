import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { LogoMark } from "./LogoMark";
import { Tilt3D } from "./Tilt3D";
import { brand } from "../data/brand";

function ShowcaseFrame({
  children,
  className = "",
  aspect = "square",
}: {
  children: ReactNode;
  className?: string;
  aspect?: "square" | "video";
}) {
  const aspectClass =
    aspect === "video" ? "aspect-video w-[280px] md:w-[340px]" : "aspect-square w-[240px] md:w-[280px]";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.05)] ${aspectClass} ${className}`}
    >
      {children}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
    </div>
  );
}

function AlbumCoverScreen() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-violet-950 via-[#0a0a0a] to-indigo-950 p-5">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.45),transparent_55%)]" />
      <div className="relative flex h-full flex-col justify-between">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          Cover art
        </span>
        <div className="float-slow flex flex-col items-center gap-3 text-center">
          <LogoMark size={56} />
          <span className="display text-lg uppercase tracking-tight text-white">
            {brand.name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
            Album · 2026
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
          Astro
        </span>
      </div>
    </div>
  );
}

function VideoClipScreen() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/40 via-transparent to-cyan-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_45%)]" />
      <div className="relative flex h-full flex-col justify-between p-5">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          Music video
        </span>
        <div className="flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
            <Play size={22} className="ml-1 text-white" fill="white" />
          </div>
        </div>
        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              New release
            </p>
            <p className="text-[10px] text-white/45">Directed by Astro</p>
          </div>
          <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/60">
            4K
          </span>
        </div>
      </div>
    </div>
  );
}

function HomeShowcase({ children }: { children: ReactNode }) {
  return <Tilt3D max={8}>{children}</Tilt3D>;
}

export function ShowcaseAlbum() {
  return (
    <HomeShowcase>
      <ShowcaseFrame aspect="square">
        <AlbumCoverScreen />
      </ShowcaseFrame>
    </HomeShowcase>
  );
}

export function ShowcaseVideo() {
  return (
    <HomeShowcase>
      <ShowcaseFrame aspect="video">
        <VideoClipScreen />
      </ShowcaseFrame>
    </HomeShowcase>
  );
}

export function ServicesVisualHero() {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center md:hidden">
        <div className="relative" style={{ transform: "rotate(-4deg)" }}>
          <div className="absolute -inset-6 rounded-[2rem] bg-violet-500/10 blur-2xl" />
          <ShowcaseFrame aspect="square" className="rotate-3">
            <AlbumCoverScreen />
          </ShowcaseFrame>
        </div>
      </div>
      <div className="relative hidden h-full w-full items-center justify-center md:flex">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-2/3 w-2/3 rounded-full bg-violet-500/10 blur-3xl" />
        </div>
        <div className="flex flex-col items-center gap-6" style={{ transform: "rotate(-3deg)" }}>
          <ShowcaseFrame aspect="video">
            <VideoClipScreen />
          </ShowcaseFrame>
          <Link
            to="/portfolio"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground"
          >
            Bekijk werk →
          </Link>
        </div>
      </div>
    </>
  );
}
