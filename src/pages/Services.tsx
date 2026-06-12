import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Download,
  Layers,
  Palette,
  RefreshCw,
  Sparkles,
  Zap,
} from "lucide-react";
import { SplitText } from "../components/SplitText";
import { Reveal } from "../components/Reveal";
import { ServicesVisualHero } from "../components/VisualShowcase";
import { services, serviceBentoSpans } from "../data/services";

const deliverables = [
  {
    icon: Download,
    title: "Export-ready bestanden",
    desc: "Clips in 4K, artwork in hoge resolutie en logo's in alle formaten die je nodig hebt.",
    items: ["4K video export", "Print & digital covers", "SVG + PNG logo's"],
  },
  {
    icon: RefreshCw,
    title: "Revisierondes",
    desc: "Feedback verwerken tot het beeld klopt — zonder gedoe of eindeloze e-mailthreads.",
    items: ["Duidelijke milestones", "Snelle turnaround", "Direct contact met Astro"],
  },
  {
    icon: Palette,
    title: "Coherente esthetiek",
    desc: "Clip, cover en logo die bij elkaar passen — één visuele wereld voor je release.",
    items: ["Kleur & typografie", "Moodboards", "Brand consistency"],
  },
  {
    icon: Sparkles,
    title: "Concept & richting",
    desc: "Niet alleen uitvoeren — meedenken over sfeer, verhaal en wat opvalt in je niche.",
    items: ["Creative direction", "Referentie-analyse", "Storyboarding"],
  },
  {
    icon: Zap,
    title: "Release-ready",
    desc: "Bestanden geoptimaliseerd voor YouTube, Spotify, Instagram en print.",
    items: ["Platform specs", "Thumbnail formats", "Social crops"],
  },
  {
    icon: Layers,
    title: "Flexibele pakketten",
    desc: "Alleen een cover, alleen een clip, of alles in één — jij kiest wat past bij je budget.",
    items: ["Modulaire offertes", "Combinatiekorting", "Transparante prijs"],
  },
];

const steps = [
  {
    title: "Brief",
    desc: "Je deelt je track, merk, referenties en wat je wilt uitstralen — Astro luistert en stelt de juiste vragen.",
  },
  {
    title: "Concept",
    desc: "Moodboards, schetsen of storyboard — je ziet de richting voordat de echte productie start.",
  },
  {
    title: "Productie",
    desc: "Design, edit en grading. Je krijgt tussentijdse updates en kunt feedback geven per ronde.",
  },
  {
    title: "Oplevering",
    desc: "Final files, klaar voor release. Astro blijft beschikbaar voor kleine aanpassingen na oplevering.",
  },
];

const principles = [
  {
    title: "Bold & memorabel",
    desc: "Beeld dat opvalt — geen generieke templates die iedereen al gezien heeft.",
  },
  {
    title: "Muziek-first",
    desc: "Elke keuze ondersteunt je sound: pacing, kleur en compositie op maat van de track.",
  },
  {
    title: "Persoonlijk",
    desc: "Rechtstreeks contact met Astro — geen account managers, geen wachtrijen.",
  },
];

export function Services() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-32 md:pt-40">
      <section className="container relative px-6 pb-16">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Diensten
              </span>
            </Reveal>
            <h1 className="display mt-6 mb-8 text-balance text-3xl uppercase leading-[1.05] sm:text-4xl md:text-6xl lg:text-7xl">
              <SplitText splitBy="word" stagger={70}>
                Alles visueel,
              </SplitText>
              <br />
              <SplitText
                splitBy="word"
                stagger={70}
                delay={300}
                className="accent-serif normal-case text-muted-foreground"
              >
                één creatieve lijn.
              </SplitText>
            </h1>
            <Reveal delay={400}>
              <p className="max-w-xl text-lg text-muted-foreground">
                Van videoclip tot album cover en logo — Astro Visuals helpt
                artiesten en merken een sterke, herkenbare look neer te zetten.
              </p>
            </Reveal>
          </div>
          <div className="relative flex h-[360px] items-center justify-center sm:h-[460px] md:col-span-5 md:h-[620px] lg:h-[680px]">
            <ServicesVisualHero />
          </div>
        </div>
      </section>

      <section className="container relative px-6 pt-8 md:pt-16">
        <Reveal>
          <div className="mb-12">
            <div className="eyebrow mb-4">01 — Wat Astro doet</div>
            <h2 className="display max-w-2xl text-balance text-2xl uppercase sm:text-3xl md:text-5xl">
              Zes diensten,{" "}
              <span className="accent-serif normal-case text-muted-foreground">
                één maker.
              </span>
            </h2>
          </div>
        </Reveal>
        <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.id}
                className={`${serviceBentoSpans[i]} min-h-[42vh]`}
              >
                <div className="bento-card flex h-full flex-col justify-between p-8 md:p-10">
                  <Icon className="h-6 w-6 text-white/70" />
                  <div>
                    <h3 className="display mt-8 text-2xl uppercase md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative border-t border-border/60 py-16 md:py-20">
        <div className="container px-6">
          <Reveal>
            <div className="eyebrow mb-4">02 — Wat je krijgt</div>
            <h2 className="display mb-12 max-w-3xl text-balance text-2xl uppercase sm:text-3xl md:text-5xl">
              Meer dan alleen files —{" "}
              <span className="accent-serif normal-case text-muted-foreground">
                een complete visuele lijn.
              </span>
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((f) => (
              <Reveal key={f.title}>
                <div className="bento-card p-8">
                  <f.icon className="mb-4 h-6 w-6 text-white/70" />
                  <h3 className="text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                  <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                    {f.items.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-border/60 py-24 md:py-32">
        <div className="container px-6">
          <Reveal>
            <div className="eyebrow mb-4">03 — Hoe Astro werkt</div>
            <h2 className="display mb-16 max-w-2xl text-balance text-2xl uppercase sm:text-3xl md:text-5xl">
              Van brief naar final in{" "}
              <span className="accent-serif normal-case text-muted-foreground">
                vier stappen.
              </span>
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title}>
                <div className="bento-card p-8">
                  <span className="text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container border-t border-border/60 px-6 py-24 md:py-32">
        <Reveal>
          <div className="eyebrow mb-4">04 — Principes</div>
          <h2 className="display mb-16 max-w-2xl text-balance text-2xl uppercase sm:text-3xl md:text-5xl">
            Drie principes waar Astro{" "}
            <span className="accent-serif normal-case text-muted-foreground">
              niet aan torn.
            </span>
          </h2>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          {principles.map((p) => (
            <Reveal key={p.title}>
              <h3 className="display text-2xl uppercase">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container border-t border-border/60 px-6 py-24 text-center md:py-32">
        <h2 className="display mx-auto max-w-3xl text-balance text-3xl uppercase leading-tight sm:text-4xl md:text-6xl">
          <SplitText splitBy="word" stagger={120}>
            Klaar voor
          </SplitText>{" "}
          <span className="accent-serif normal-case text-muted-foreground">
            <SplitText splitBy="word" stagger={140} delay={400}>
              je volgende release?
            </SplitText>
          </span>
        </h2>
        <Reveal delay={400}>
          <Link to="/contact" className="pill-light mt-10 inline-flex">
            Laten we praten
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
