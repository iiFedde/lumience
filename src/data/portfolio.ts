export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  url: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Midnight Drive",
    description:
      "Een nachtelijke videoclip voor een R&B-artiest — neon reflecties, slow motion en montage op de beat van de chorus. Het concept draaide om isolatie en beweging door de stad; Astro regisseerde de kleurgrading en pacing zodat elke cut de melancholie van de track versterkt.",
    image: "/assets/portfolio/drifter.png",
    category: "Videoclip",
    url: "#",
  },
  {
    id: "2",
    title: "Neon Pulse",
    description:
      "Album cover voor een electronic release — bold typografie, glitch-textures en een palet dat balanceert tussen cyberpunk en minimal. Ontworpen voor streaming thumbnails én vinyl print, met varianten voor single en deluxe edition.",
    image: "/assets/portfolio/energycandy.png",
    category: "Album cover",
    url: "#",
  },
  {
    id: "3",
    title: "Static Waves",
    description:
      "Logo en visuele identity voor een indie label. Het monogram combineert golfvormen met strakke lettervormen — herkenbaar op social avatars, watermark en merchandise. Inclusief kleurenpalet en basis brand guidelines.",
    image: "/assets/portfolio/merelsdierenkliniek.png",
    category: "Logo & identity",
    url: "#",
  },
  {
    id: "4",
    title: "Afterglow",
    description:
      "Performance clip op locatie met dynamische camerabewegingen en grainy film-look. Astro monteerde de ruwe footage tot een energieke release die de live vibe van de artiest vastlegt — klaar voor YouTube en Instagram Reels.",
    image: "/assets/portfolio/zillerstadl.png",
    category: "Videoclip",
    url: "#",
  },
];
