import { ArrowUpRight } from "lucide-react";
import { SplitText } from "../components/SplitText";
import { Reveal } from "../components/Reveal";
import { portfolioItems } from "../data/portfolio";

export function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-32 md:pt-40">
      <div className="container relative px-6">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Geselecteerd werk
          </span>
        </Reveal>
        <h1 className="display mt-6 mb-8 max-w-3xl text-balance text-3xl uppercase leading-[1.05] sm:text-4xl md:text-6xl">
          <SplitText splitBy="word" stagger={70}>
            Projecten waar Astro
          </SplitText>{" "}
          <SplitText
            splitBy="word"
            stagger={70}
            delay={550}
            className="accent-serif normal-case text-muted-foreground"
          >
            trots op is.
          </SplitText>
        </h1>
        <Reveal delay={300}>
          <p className="mb-20 max-w-xl text-lg text-muted-foreground">
            Videoclips, album covers en identiteiten — elk project begint met
            een gesprek en eindigt met beeld dat past bij de artiest.
          </p>
        </Reveal>

        <div className="space-y-24 pb-24 md:space-y-32">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.id}>
              <div
                className={`grid items-center gap-8 md:grid-cols-12 md:gap-12 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-md bg-card/40 md:col-span-7">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition duration-[1200ms] ease-out hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="md:col-span-5">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.category}
                  </span>
                  <h2 className="display mt-4 mb-4 text-3xl uppercase text-white md:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    {item.category}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
