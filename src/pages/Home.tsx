import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { SplitText } from "../components/SplitText";
import { CountUp } from "../components/CountUp";
import { Reveal } from "../components/Reveal";
import { TrustBar } from "../components/TrustBar";
import { ShowcaseAlbum, ShowcaseVideo } from "../components/VisualShowcase";
import { homeServices } from "../data/homeServices";

const marqueeItems = [
  "Videoclips",
  "Logo's",
  "Album covers",
  "Motion",
  "Branding",
  "Promo",
  "Art direction",
];

function StickyServiceCard({
  service,
  index,
}: {
  service: (typeof homeServices)[0];
  index: number;
}) {
  return (
    <div
      className="sticky mb-8"
      style={{ top: `calc(5rem + ${index * 20}px)`, zIndex: 10 + index }}
    >
      <Link
        to="/services"
        className="group relative flex min-h-[60vh] flex-col justify-between overflow-hidden rounded-3xl border border-border/40 bg-[hsl(var(--card)/0.6)] p-6 backdrop-blur-xl transition hover:border-white/20 md:min-h-[70vh] md:p-14 lg:p-16"
      >
        <span className="text-xs text-[hsl(var(--muted-foreground))]">
          {service.no}
        </span>
        <div>
          <h3 className="display text-3xl uppercase md:text-4xl lg:text-5xl">
            {service.title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[hsl(var(--muted-foreground))] md:text-base">
            {service.description}
          </p>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium opacity-0 transition group-hover:opacity-100">
            Bekijk dienst
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </div>
  );
}

export function Home() {
  return (
    <>
      <section className="spotlight relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="ring-arc" />
        <div className="container relative z-10 px-6">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <h1
              className="display text-balance uppercase"
              style={{ fontSize: "clamp(1.875rem, 9vw, 5.5rem)" }}
            >
              <SplitText splitBy="char" stagger={26}>
                Jouw visie,
              </SplitText>
              <br />
              <SplitText
                splitBy="char"
                stagger={30}
                delay={350}
                className="accent-serif normal-case text-[hsl(var(--foreground)/0.9)]"
              >
                visueel vertaald
              </SplitText>
              <span className="text-[hsl(var(--muted-foreground))]">.</span>
            </h1>
            <Reveal delay={260}>
              <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[hsl(var(--muted-foreground))] md:text-lg">
                Astro Visuals maakt{" "}
                <span className="font-semibold text-[hsl(var(--foreground))]">
                  videoclips, logo&apos;s en album covers
                </span>{" "}
                — bold, coherent en op maat van artiesten en creatieve merken.
                Eén maker, één visuele lijn.
              </p>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center">
                <Link to="/contact" className="pill-light group justify-center">
                  Start je project
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link to="/portfolio" className="pill-ghost group justify-center">
                  <span>Bekijk portfolio</span>
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
              <p className="mt-4 text-center text-[11px] text-[hsl(var(--muted-foreground))]">
                Gratis kennismaking · reactie binnen 24 uur
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <TrustBar />

      <div className="relative overflow-hidden border-y border-border/60 py-6">
        <div className="marquee-track" style={{ ["--mq" as string]: "40s" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="display inline-flex items-center gap-12 text-3xl uppercase text-foreground/80 md:text-5xl"
            >
              {item}
              <span className="text-muted-foreground/50">·</span>
            </span>
          ))}
        </div>
      </div>

      <section className="spotlight relative overflow-hidden">
        <div className="container relative px-6 py-28 md:py-40">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="relative flex items-center justify-center md:col-span-7 md:h-[560px]">
              <div className="flex w-full flex-col items-center gap-8 md:hidden">
                <div className="breathe" style={{ transform: "rotate(-4deg)" }}>
                  <ShowcaseAlbum />
                </div>
                <div
                  className="breathe"
                  style={{ animationDelay: "1.5s", transform: "rotate(4deg)" }}
                >
                  <ShowcaseVideo />
                </div>
              </div>
              <div
                className="absolute hidden md:block"
                style={{ transform: "translate(-55%, 10px) rotate(-5deg)", zIndex: 1 }}
              >
                <div className="breathe">
                  <ShowcaseAlbum />
                </div>
              </div>
              <div
                className="absolute hidden md:block"
                style={{ transform: "translate(55%, -30px) rotate(5deg)", zIndex: 2 }}
              >
                <div className="breathe" style={{ animationDelay: "1.5s" }}>
                  <ShowcaseVideo />
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <Reveal>
                <div className="eyebrow mb-6">02 — Studio in actie</div>
              </Reveal>
              <h2
                className="display text-balance uppercase"
                style={{ fontSize: "clamp(1.75rem, 7vw, 4rem)" }}
              >
                <SplitText splitBy="word" stagger={70}>
                  Geen stock.
                </SplitText>
                <br />
                <SplitText
                  splitBy="word"
                  stagger={70}
                  delay={300}
                  className="accent-serif normal-case text-[hsl(var(--muted-foreground))]"
                >
                  Echt maatwerk.
                </SplitText>
              </h2>
              <Reveal delay={300}>
                <p className="mt-8 max-w-md leading-relaxed text-[hsl(var(--muted-foreground))]">
                  Elk project begint met jouw sound, merk of verhaal. Astro
                  vertaalt dat naar beeld dat blijft hangen — van eerste schets
                  tot final export.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60">
        <div className="container grid grid-cols-1 gap-0 px-6 py-14 sm:grid-cols-3">
          <Reveal className="flex flex-col gap-2 border-b border-border/60 py-6 sm:border-b-0 sm:py-0">
            <span className="display text-5xl md:text-6xl">
              <CountUp to={45} suffix="+" />
            </span>
            <span className="eyebrow">Projecten afgerond</span>
          </Reveal>
          <Reveal
            delay={120}
            className="flex flex-col gap-2 border-b border-border/60 py-6 sm:border-b-0 sm:border-l sm:py-0 sm:pl-10"
          >
            <span className="display text-5xl md:text-6xl">
              <CountUp to={24} />
              <span className="accent-serif text-3xl normal-case text-[hsl(var(--muted-foreground))]">
                {" "}
                u
              </span>
            </span>
            <span className="eyebrow">Reactietijd</span>
          </Reveal>
          <Reveal
            delay={240}
            className="flex flex-col gap-2 py-6 sm:border-l sm:py-0 sm:pl-10"
          >
            <span className="display text-5xl md:text-6xl">
              <CountUp to={1} />
            </span>
            <span className="eyebrow">Creative director</span>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="container px-6 py-24 md:py-32">
          <Reveal>
            <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="eyebrow mb-6">03 — Wat Astro doet</div>
                <h2
                  className="display uppercase"
                  style={{ fontSize: "clamp(1.875rem, 7vw, 4.5rem)" }}
                >
                  Diensten{" "}
                  <span className="accent-serif normal-case text-[hsl(var(--muted-foreground))]">
                    op maat
                  </span>
                </h2>
              </div>
              <Link
                to="/services"
                className="underline-link text-sm text-[hsl(var(--muted-foreground))] hover:text-white"
              >
                Alle diensten →
              </Link>
            </div>
          </Reveal>
          <div className="relative">
            {homeServices.map((s, i) => (
              <StickyServiceCard key={s.no} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-border/60">
        <div className="container px-6 py-24 md:py-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[hsl(var(--foreground))] p-10 text-[hsl(var(--background))] md:p-16">
              <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl" />
              <div className="relative z-10 max-w-3xl">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em]">
                  Op maat geprijsd
                </div>
                <h2
                  className="display uppercase"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
                >
                  Elk project is anders.{" "}
                  <span className="accent-serif normal-case opacity-70">
                    Jouw offerte ook.
                  </span>
                </h2>
                <p className="mt-6 max-w-xl text-base text-white/70 md:text-lg">
                  Loop in 2 minuten door het stappenplan. Vertel wat je zoekt,
                  deel je referenties — Astro stuurt binnen 24 uur een
                  persoonlijke offerte.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/offerte"
                    className="group inline-flex items-center gap-2 rounded-full bg-[hsl(var(--background))] px-7 py-4 text-sm font-semibold text-[hsl(var(--foreground))] transition hover:scale-[1.03]"
                  >
                    Start je stappenplan
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-sm text-white/60 underline-offset-4 hover:text-white hover:underline"
                  >
                    of neem direct contact op →
                  </Link>
                </div>
                <ul className="mt-10 grid gap-4 text-sm text-white/60 sm:grid-cols-3">
                  <li>✓ Geen verplichtingen</li>
                  <li>✓ Antwoord binnen 24 uur</li>
                  <li>✓ Revisierondes inbegrepen</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
