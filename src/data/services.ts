import {
  Clapperboard,
  Disc3,
  Film,
  Layers,
  Palette,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  sort_order: number;
};

export const services: Service[] = [
  {
    id: "1",
    title: "Videoclips",
    description:
      "Music videos die je track laten voelen, niet alleen horen. Astro ontwikkelt het visuele concept, monteert op beat en levert een clip die klaar is voor YouTube, socials en release day. Van performance tot narrative — altijd afgestemd op jouw artistieke richting.",
    icon: Clapperboard,
    sort_order: 1,
  },
  {
    id: "2",
    title: "Logo design",
    description:
      "Een logo moet in één oogopslag blijven hangen. Astro ontwerpt markante identiteiten voor artiesten, labels en creatieve merken — schaalbaar van favicon tot merch, met aandacht voor typografie, contrast en karakter.",
    icon: Sparkles,
    sort_order: 2,
  },
  {
    id: "3",
    title: "Album covers",
    description:
      "Cover art is het eerste contact met je muziek. Astro bouwt sterke composities, kleurpaletten en typografie die passen bij genre en verhaal. Je krijgt bestanden die werken op Spotify, Apple Music, vinyl en promo.",
    icon: Disc3,
    sort_order: 3,
  },
  {
    id: "4",
    title: "Motion graphics",
    description:
      "Lyric videos, teasers, intro's en loop-animaties voor releases. Korte, krachtige beweging die je merk consistent houdt over platforms — ideaal tussen single drops en volledige videoclips.",
    icon: Film,
    sort_order: 4,
  },
  {
    id: "5",
    title: "Brand identity",
    description:
      "Meer dan één logo: een complete visuele taal. Kleuren, fonts, social templates en richtlijnen zodat alles wat je uitbrengt voelt als één wereld — professioneel, coherent en herkenbaar.",
    icon: Palette,
    sort_order: 5,
  },
  {
    id: "6",
    title: "Social & promo",
    description:
      "Snippets, story formats, release banners en visuele assets voor je campagne. Astro levert content die opvalt in de feed zonder je esthetiek te breken — klaar om direct te posten.",
    icon: Layers,
    sort_order: 6,
  },
];

export const serviceBentoSpans = [
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-8",
  "md:col-span-4",
];
