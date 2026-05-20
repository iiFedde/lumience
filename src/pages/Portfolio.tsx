import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SplitText } from "../components/SplitText";
import { Reveal } from "../components/Reveal";
import { supabase } from "../lib/supabase";
import { portfolioItems as fallbackItems, type PortfolioItem } from "../data/portfolio";

export function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>(fallbackItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("portfolio_items")
      .select("*")
      .order("sort_order")
      .then(({ data }) => {
        if (data?.length) {
          setItems(
            data.map((row) => ({
              id: row.id,
              title: row.title,
              description: row.description,
              image: row.image_url.startsWith("http")
                ? row.image_url
                : row.image_url,
              category: row.category,
              url: row.url,
            })),
          );
        }
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden pt-32 md:pt-40">
      <div className="container relative px-6">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
            Geselecteerd werk
          </span>
        </Reveal>
        <h1
          className="display mt-6 mb-8 max-w-3xl text-balance text-3xl uppercase leading-[1.05] sm:text-4xl md:text-6xl"
        >
          <SplitText splitBy="word" stagger={70}>
            Een paar projecten waar ik
          </SplitText>{" "}
          <SplitText
            splitBy="word"
            stagger={70}
            delay={550}
            className="accent-serif normal-case text-[hsl(var(--muted-foreground))]"
          >
            trots op ben.
          </SplitText>
        </h1>
        <Reveal delay={300}>
          <p className="mb-20 max-w-xl text-lg text-[hsl(var(--muted-foreground))]">
            Elk project hieronder is gemaakt met dezelfde aandacht: een echt
            gesprek, een eerlijk plan, en code die ik zelf zou willen erven.
          </p>
        </Reveal>

        {loading ? (
          <div className="space-y-24 pb-24">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-96 animate-pulse rounded-md bg-[hsl(var(--card)/0.4)]"
              />
            ))}
          </div>
        ) : (
          <div className="space-y-24 pb-24 md:space-y-32">
            {items.map((item, index) => (
              <Reveal key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div
                    className={`grid items-center gap-8 md:grid-cols-12 md:gap-12 ${
                      index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="overflow-hidden rounded-md bg-[hsl(var(--card)/0.4)] md:col-span-7">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-top transition duration-[1200ms] ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-5">
                      <span className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
                        {item.category}
                      </span>
                      <h2 className="display mt-4 mb-4 text-3xl uppercase text-white transition group-hover:text-[hsl(var(--muted-foreground))] md:text-4xl">
                        {item.title}
                      </h2>
                      <p className="mb-6 leading-relaxed text-[hsl(var(--muted-foreground))]">
                        {item.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm text-white underline-link">
                        Bekijk project
                        <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
