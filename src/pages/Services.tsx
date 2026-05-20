import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Server,
  Mail,
  Wrench,
  Shield,
  Gauge,
  TrendingUp,
} from "lucide-react";
import { SplitText } from "../components/SplitText";
import { Reveal } from "../components/Reveal";
import { services, serviceBentoSpans } from "../data/services";

const hostingFeatures = [
  {
    icon: Server,
    title: "Razendsnel & altijd online",
    desc: "Moderne servers, gratis SSL, dagelijkse back-ups en 24/7 monitoring. Jouw site is in goede handen.",
    items: ["99,9% uptime", "Gratis SSL", "Dagelijkse back-ups"],
  },
  {
    icon: Mail,
    title: "Alles op je eigen naam",
    desc: "Domeinregistratie en professionele mailadressen op je eigen domein. Werkt overal — Outlook, Gmail, je telefoon.",
    items: ["Eigen mailadres", "Onbeperkt aliassen", "Eén factuur"],
  },
  {
    icon: Wrench,
    title: "Altijd betrokken",
    desc: "Updates, kleine wijzigingen, nieuwe pagina's — één appje en het is geregeld. Geen ticketsysteem, vast aanspreekpunt.",
    items: ["Vaste contactpersoon", "Snelle wijzigingen", "Veilig & up-to-date"],
  },
  {
    icon: Shield,
    title: "Beveiligd op elk niveau",
    desc: "Automatische updates, firewall en monitoring. Kwetsbaarheden worden aangepakt voordat ze problemen worden.",
    items: ["Firewall", "Auto updates", "Malware scans"],
  },
  {
    icon: Gauge,
    title: "Sub-seconde laadtijden",
    desc: "Caching, image-optimalisatie en een CDN zorgen dat je site overal ter wereld supersnel laadt.",
    items: ["CDN wereldwijd", "Image optimization", "Edge caching"],
  },
  {
    icon: TrendingUp,
    title: "Doorlopend doorontwikkelen",
    desc: "Je site groeit mee met je bedrijf. Nieuwe functies, frisse content, jouw merk altijd actueel.",
    items: ["Maandelijkse review", "Nieuwe features", "Content updates"],
  },
];

const steps = [
  {
    title: "Intake",
    desc: "Ik luister. Wat wil je merk uitstralen, wie is je klant, wat moet de site bereiken?",
  },
  {
    title: "Ontwerp",
    desc: "Eerst een template — jouw merk, jouw stijl.",
  },
  {
    title: "Bouw",
    desc: "Schone code, snel en schaalbaar. Jij denkt mee tijdens de hele rit.",
  },
  {
    title: "Live & Onderhoud",
    desc: "Ik zet 'm live, regel hosting & mail, en blijf betrokken voor updates en groei.",
  },
];

const principles = [
  {
    title: "Schone code",
    desc: "Nette, onderhoudbare en schaalbare basis. Toekomstbestendig opgebouwd.",
  },
  {
    title: "Razendsnel",
    desc: "Laadtijden onder de seconde — overal en altijd.",
  },
  {
    title: "Met aandacht",
    desc: "Beslissingen op basis van jouw merk, niet op basis van trends.",
  },
];

export function Services() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-32 md:pt-40">
      <div className="container relative px-6 pb-16">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
            Diensten
          </span>
        </Reveal>
        <h1
          className="display mt-6 max-w-4xl text-balance text-3xl uppercase leading-[1.05] sm:text-4xl md:text-6xl lg:text-7xl"
        >
          <SplitText splitBy="word" stagger={70}>
            ALLES WAT JE NODIG HEBT,
          </SplitText>
          <br />
          <SplitText
            splitBy="word"
            stagger={70}
            delay={300}
            className="accent-serif normal-case text-[hsl(var(--muted-foreground))]"
          >
            netjes onder één dak.
          </SplitText>
        </h1>
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
            Van eerste schets tot live-zetten, hosting, mailadressen en alles
            daarna — ik denk mee, bouw mee, en blijf betrokken.
          </p>
        </Reveal>
      </div>

      <section className="container relative px-6 pt-8 md:pt-16">
        <Reveal>
          <div className="mb-12">
            <div className="eyebrow mb-4">01 — Wat ik doe</div>
            <h2
              className="display max-w-2xl text-balance text-2xl uppercase sm:text-3xl md:text-5xl"
            >
              Zes diensten,{" "}
              <span className="accent-serif normal-case text-[hsl(var(--muted-foreground))]">
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
                    <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative border-t border-white/10 py-16 md:py-20">
        <div className="container px-6">
          <Reveal>
            <div className="eyebrow mb-4">02 — Onder één dak</div>
            <h2 className="display mb-12 max-w-3xl text-balance text-2xl uppercase sm:text-3xl md:text-5xl">
              Hosting, domein, mail & onderhoud —{" "}
              <span className="accent-serif normal-case text-[hsl(var(--muted-foreground))]">
                alles geregeld.
              </span>
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hostingFeatures.map((f) => (
              <Reveal key={f.title}>
                <div className="bento-card p-8">
                  <f.icon className="mb-4 h-6 w-6 text-white/70" />
                  <h3 className="text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                    {f.desc}
                  </p>
                  <ul className="mt-4 space-y-1 text-sm text-[hsl(var(--muted-foreground))]">
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

      <section className="relative border-t border-white/10 py-24 md:py-32">
        <div className="container px-6">
          <Reveal>
            <div className="eyebrow mb-4">03 — Hoe ik werk</div>
            <h2 className="display mb-16 max-w-2xl text-balance text-2xl uppercase sm:text-3xl md:text-5xl">
              Van idee naar live in{" "}
              <span className="accent-serif normal-case text-[hsl(var(--muted-foreground))]">
                vier stappen.
              </span>
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title}>
                <div className="bento-card p-8">
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container border-t border-white/10 px-6 py-24 md:py-32">
        <Reveal>
          <div className="eyebrow mb-4">04 — Principes</div>
          <h2 className="display mb-16 max-w-2xl text-balance text-2xl uppercase sm:text-3xl md:text-5xl">
            Drie principes waar ik{" "}
            <span className="accent-serif normal-case text-[hsl(var(--muted-foreground))]">
              niet aan torn.
            </span>
          </h2>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          {principles.map((p) => (
            <Reveal key={p.title}>
              <h3 className="display text-2xl uppercase">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container border-t border-white/10 px-6 py-24 text-center md:py-32">
        <h2 className="display mx-auto max-w-3xl text-balance text-3xl uppercase leading-tight sm:text-4xl md:text-6xl">
          <SplitText splitBy="word" stagger={120}>
            Klinkt als
          </SplitText>{" "}
          <span className="accent-serif normal-case text-[hsl(var(--muted-foreground))]">
            <SplitText splitBy="word" stagger={140} delay={400}>
              jouw soort samenwerking?
            </SplitText>
          </span>
        </h2>
        <Reveal delay={400}>
          <Link
            to="/contact"
            className="pill-light mt-10 inline-flex"
          >
            Laten we praten
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
