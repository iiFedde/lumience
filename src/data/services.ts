import {
  AtSign,
  Globe,
  Palette,
  Search,
  Server,
  Wrench,
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
    title: "Webdesign",
    description:
      "Geen enkel bedrijf is hetzelfde, en daarom verdient elk merk een eigen, unieke plek op het internet. Wij geloven niet in standaardoplossingen; per soort website kijken we specifiek naar wat bij u en uw onderneming past. Ons doel is om een site te creëren die zó naadloos aansluit bij uw visie, dat deze direct een warm hart in de kamer vindt en nooit meer weg wil. Het wordt een digitaal thuis waar u trots op bent en waar uw klanten zich direct welkom voelen. Van de eerste schets tot de laatste puntjes op de i: wij zorgen voor een online aanwezigheid die voelt als een verlengstuk van uzelf.",
    icon: Globe,
    sort_order: 1,
  },
  {
    id: "2",
    title: "UI/UX Design",
    description:
      "Echt goed design schreeuwt niet, maar wijst de weg. Ik specialiseer me in het vertalen van complexe bedrijfsprocessen naar een glasheldere gebruikerservaring. Door overbodige ruis weg te filteren en te focussen op de essentie, creëer ik een digitale omgeving waarin jouw bezoekers blindelings hun weg vinden. Het resultaat? Een interface die zo natuurlijk aanvoelt dat het gebruiksgemak bijna onzichtbaar wordt. Bezoekers vinden moeiteloos wat ze zoeken, ervaren geen enkele drempel en houden daardoor een positief gevoel over aan jouw merk - de belangrijkste reden om keer op keer terug te komen.",
    icon: Palette,
    sort_order: 2,
  },
  {
    id: "3",
    title: "SEO Optimalisatie",
    description:
      "Wat heb je aan een prachtige website als niemand hem ziet? Met strategische zoekmachineoptimalisatie (SEO) zetten we jouw bedrijf op de kaart waar het telt: bovenaan de zoekresultaten. We analyseren het zoekgedrag van jouw potentiële klanten en optimaliseren elk onderdeel van jouw site om aan die behoefte te voldoen. Dit gaat verder dan alleen zoekwoorden; het gaat om snelheid, structuur en relevante content die vertrouwen wekt bij zowel Google als de bezoeker. Meer zichtbaarheid leidt tot meer verkeer, en door de juiste mensen aan te trekken, transformeren we die bezoekers moeiteloos in loyale klanten.",
    icon: Search,
    sort_order: 3,
  },
  {
    id: "4",
    title: "Hosting",
    description:
      "Een snelle, betrouwbare website begint bij een rotsvaste basis. Wij hosten jouw site op moderne, supersnelle servers met automatische back-ups, gratis SSL en 24/7 monitoring. Geen gedoe met losse providers, geen verrassingen - gewoon een site die altijd online is en bliksemsnel laadt. Wij regelen alles op de achtergrond, zodat jij je geen seconde druk hoeft te maken om techniek.",
    icon: Server,
    sort_order: 4,
  },
  {
    id: "5",
    title: "Domein & Mail",
    description:
      "Eén plek voor je domeinnaam én professionele mailadressen op je eigen domein. Wij regelen de registratie, verlenging en koppeling - en zetten mailadressen op die overal werken: in Outlook, Gmail of op je telefoon. Alles netjes onder één dak, één aanspreekpunt, één rekening. Geen losse accounts bij vijf verschillende partijen, geen wachtwoorden zoekraken. Gewoon overzicht.",
    icon: AtSign,
    sort_order: 5,
  },
  {
    id: "6",
    title: "Onderhoud & Support",
    description:
      "Een website is nooit af. Updates, kleine aanpassingen, nieuwe foto's of een extra pagina - wij staan klaar. Met een vast onderhoudsabonnement weet je precies waar je aan toe bent: we houden je site veilig, snel en up-to-date, en je hebt één vast aanspreekpunt die je merk kent. Geen ticketsysteem, geen wachtrij. Gewoon een appje, en het is geregeld.",
    icon: Wrench,
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
