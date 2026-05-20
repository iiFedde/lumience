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
    title: "Chalet Zillerstadl",
    description:
      "Deze website heb ik mogen ontwikkelen voor twee geweldige mensen. Hun wens was in eerste instantie simpel: een overzichtelijke en gebruiksvriendelijke website waarop alle belangrijke informatie makkelijk te vinden was. Wat begon als een relatief klein project, groeide uiteindelijk uit tot veel meer dan alleen een simpele website.\n\nAchter de schermen heb ik namelijk een uitgebreid boekingssysteem gebouwd waarmee zij vrijwel alles eenvoudig kunnen beheren. Met slechts een paar klikken kunnen zij informatie versturen, boekingen verwerken en hun gasten op de hoogte houden. Ondanks de mogelijkheden van volledige automatisering, vonden zij het belangrijk om het persoonlijke contact te behouden.\n\nZe wilden bewust geen volledig geautomatiseerd bedrijf, maar juist een klein en knus verblijf waar hun eigen persoonlijkheid en gastvrijheid centraal blijven staan. Dat persoonlijke karakter heb ik geprobeerd terug te laten komen in zowel het ontwerp als de functionaliteit van de website.",
    image: "/assets/portfolio/zillerstadl.png",
    category: "Website + Booking Systeem",
    url: "https://zillerstadl.nl",
  },
  {
    id: "2",
    title: "Drifter",
    description:
      "Deze website heb ik als preview ontworpen voor een klant, omdat hun oude website er verouderd uitzag en ik hen graag een frisse, moderne uitstraling wilde geven. Het doel was om een vernieuwde look te creëren die beter aansloot bij deze tijd en een professionelere indruk zou achterlaten bij bezoekers.\n\nHoewel ik uiteindelijk helaas geen reactie meer van de klant heb ontvangen, kijk ik alsnog met trots terug op het eindresultaat. Het project heeft mij de kans gegeven om mijn creativiteit en ontwerpstijl verder te ontwikkelen, en ik heb er uiteindelijk een mooie preview aan overgehouden waar ik nog steeds tevreden mee ben.",
    image: "/assets/portfolio/drifter.png",
    category: "Webshop",
    url: "https://drifter.stanicdesign.nl",
  },
  {
    id: "3",
    title: "Merels Dierenkliniek",
    description:
      "Voor Merels Dierenkliniek mocht ik werken aan een compleet vernieuwde uitstraling van de website. De wens was duidelijk: geen overbodige functies of ingewikkelde toevoegingen, maar simpelweg een frisse en moderne look die beter bij het bedrijf past.\n\nDaarnaast wilden zij de bestaande structuur van de website graag behouden, zodat bezoekers nog steeds op dezelfde vertrouwde manier door de site konden navigeren. Mijn focus lag daarom vooral op het moderniseren van het design, zonder de gebruiksvriendelijkheid of herkenbaarheid te verliezen.\n\nMet die wensen als uitgangspunt heb ik het ontwerp verder uitgewerkt, wat uiteindelijk heeft geleid tot het eindresultaat dat hier te zien is.",
    image: "/assets/portfolio/merelsdierenkliniek.png",
    category: "Website",
    url: "https://www.merelsdierenkliniek.nl/",
  },
  {
    id: "4",
    title: "Energy Candy",
    description:
      "Energy Candy is een website die ik heb gemaakt voor een schoolproject. Voor mijn examen moest ik een product ontwikkelen en dit uiteindelijk presenteren aan beoordelaars en publiek. Om de focus volledig op de presentatie en uitstraling te leggen, heb ik ervoor gekozen om de website bewust simpel te houden in de vorm van een one-page design.\n\nHoewel de website technisch niet heel uitgebreid was, lag de nadruk juist op de visuele uitstraling en de eerste indruk. Het doel van de site was om het concept op een aantrekkelijke en professionele manier over te brengen en daarmee indruk te maken op zowel de beoordelaars als het publiek.\n\nUiteindelijk is dat erg goed gelukt. De combinatie van een strak ontwerp, duidelijke presentatie en sterke uitstraling zorgde ervoor dat het project professioneel overkwam en precies deed wat het moest doen.",
    image: "/assets/portfolio/energycandy.png",
    category: "Onepage Website",
    url: "https://energycandy.nl/",
  },
];
