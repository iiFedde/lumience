import type { ReactNode } from "react";
import { Reveal } from "../components/Reveal";

function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen pb-32 pt-32 md:pt-40">
      <div className="container px-6">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
              Juridisch
            </span>
            <h1 className="display mt-6 mb-4 text-3xl uppercase leading-[1.05] sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mb-12 text-xs text-[hsl(var(--muted-foreground))]">
              Laatst bijgewerkt: {updated}
            </p>
          </Reveal>
          <div className="legal-prose space-y-6 text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Privacy() {
  return (
    <LegalLayout
      title="Privacyverklaring"
      updated="november 2025"
    >
      <Reveal>
        <p>
          Stanicdesign hecht waarde aan jouw privacy. In deze verklaring lees je
          welke persoonsgegevens worden verzameld, waarom, en welke rechten je
          hebt.
        </p>
      </Reveal>
      <Reveal>
        <h2>Verwerkingsverantwoordelijke</h2>
        <p>
          Stanicdesign, gevestigd in Nederland.
          <br />
          E-mail: info@stanicdesign.nl
          <br />
          Tel: 06 36408116
          <br />
          KvK: Binnenkort
        </p>
      </Reveal>
      <Reveal>
        <h2>Welke gegevens</h2>
        <ul>
          <li>
            Naam, e-mailadres en telefoonnummer (via contact- of
            offerteformulier)
          </li>
          <li>Inhoud van je bericht of offerte-aanvraag</li>
          <li>
            Eventuele bedrijfs- en projectinformatie die je zelf deelt
          </li>
        </ul>
      </Reveal>
      <Reveal>
        <h2>Doel</h2>
        <ul>
          <li>Contact opnemen en je vraag beantwoorden</li>
          <li>Een offerte uitbrengen of een opdracht uitvoeren</li>
          <li>
            Wettelijke verplichtingen (zoals administratie en facturatie)
          </li>
        </ul>
      </Reveal>
      <Reveal>
        <h2>Bewaartermijn</h2>
        <p>
          Contactgegevens worden bewaard zolang dat nodig is voor het
          beantwoorden van je vraag of de uitvoering van de opdracht.
          Administratieve gegevens worden 7 jaar bewaard conform de fiscale
          bewaarplicht.
        </p>
      </Reveal>
      <Reveal>
        <h2>Delen met derden</h2>
        <p>
          Gegevens worden niet verkocht. Ze worden alleen gedeeld met
          verwerkers die nodig zijn voor het leveren van de dienst (zoals
          hosting- en mailproviders), en alleen voor zover noodzakelijk.
        </p>
      </Reveal>
      <Reveal>
        <h2>Jouw rechten</h2>
        <p>
          Je hebt recht op inzage, correctie, verwijdering en bezwaar. Stuur
          hiervoor een e-mail naar info@stanicdesign.nl. Klachten kun je
          indienen bij de Autoriteit Persoonsgegevens
          (autoriteitpersoonsgegevens.nl).
        </p>
      </Reveal>
    </LegalLayout>
  );
}

export function Cookies() {
  return (
    <LegalLayout
      title="Cookiebeleid"
      updated="november 2025"
    >
      <Reveal>
        <p>
          Deze website gebruikt alleen functionele en strikt noodzakelijke
          cookies. Er worden geen tracking-, advertentie- of analyticscookies
          geplaatst. Daarom is een cookiebanner niet nodig.
        </p>
      </Reveal>
      <Reveal>
        <h2>Welke cookies</h2>
        <ul>
          <li>
            <strong>Functioneel:</strong> nodig voor het correct werken van de
            site (bijvoorbeeld sessie-opslag en voorkeuren).
          </li>
        </ul>
      </Reveal>
      <Reveal>
        <h2>Derden</h2>
        <p>
          Er worden geen cookies van derden geplaatst voor tracking of
          marketing. Mocht dit in de toekomst veranderen, dan wordt eerst om
          toestemming gevraagd.
        </p>
      </Reveal>
      <Reveal>
        <h2>Cookies wissen</h2>
        <p>
          Je kunt cookies altijd zelf verwijderen via de instellingen van je
          browser (Chrome, Safari, Firefox, Edge).
        </p>
      </Reveal>
    </LegalLayout>
  );
}

export function Voorwaarden() {
  return (
    <LegalLayout
      title="Algemene voorwaarden"
      updated="november 2025"
    >
      <Reveal>
        <h2>1. Definities</h2>
        <p>
          <strong>Opdrachtnemer:</strong> Stanicdesign, gevestigd in Nederland,
          KvK [KvK-nummer]. <strong>Opdrachtgever:</strong> de partij die een
          offerte aanvraagt of een opdracht verstrekt.
        </p>
      </Reveal>
      <Reveal>
        <h2>2. Offertes</h2>
        <p>
          Offertes zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld.
          Een overeenkomst komt tot stand zodra de opdrachtgever de offerte
          schriftelijk of per e-mail accepteert.
        </p>
      </Reveal>
      <Reveal>
        <h2>3. Prijzen en btw</h2>
        <p>
          Alle prijzen zijn in euro&apos;s. Stanicdesign maakt gebruik van de
          kleineondernemersregeling (KOR) en is daarom vrijgesteld van btw — er
          wordt geen btw berekend of vermeld op de factuur. Meerwerk buiten de
          offerte wordt vooraf afgestemd en apart in rekening gebracht.
        </p>
      </Reveal>
      <Reveal>
        <h2>4. Betaling</h2>
        <p>
          Facturen dienen binnen 14 dagen na factuurdatum betaald te worden. Bij
          overschrijding is de wettelijke (handels)rente verschuldigd, plus
          eventuele incassokosten.
        </p>
      </Reveal>
      <Reveal>
        <h2>5. Oplevering</h2>
        <p>
          Opleverdata zijn indicatief, tenzij uitdrukkelijk anders overeengekomen.
          Vertraging door onvolledig of laat aangeleverd materiaal door de
          opdrachtgever is voor diens rekening.
        </p>
      </Reveal>
      <Reveal>
        <h2>6. Intellectueel eigendom</h2>
        <p>
          Na volledige betaling verkrijgt de opdrachtgever het gebruiksrecht op
          de opgeleverde website. Onderliggende ontwerpen, broncode-componenten
          en concepten blijven eigendom van Stanicdesign, tenzij schriftelijk
          anders is afgesproken.
        </p>
      </Reveal>
      <Reveal>
        <h2>7. Aansprakelijkheid</h2>
        <p>
          De aansprakelijkheid van Stanicdesign is beperkt tot het bedrag dat in
          het betreffende project is gefactureerd. Indirecte schade,
          gevolgschade en gederfde winst zijn uitgesloten.
        </p>
      </Reveal>
      <Reveal>
        <h2>8. Overmacht</h2>
        <p>
          Bij overmacht (waaronder ziekte, storingen bij hostingproviders en
          andere onvoorziene omstandigheden) worden verplichtingen opgeschort
          zonder dat een van de partijen schadeplichtig is.
        </p>
      </Reveal>
      <Reveal>
        <h2>9. Klachten</h2>
        <p>
          Klachten dienen binnen 14 dagen na oplevering schriftelijk gemeld te
          worden via info@stanicdesign.nl, zodat samen naar een passende
          oplossing gezocht kan worden.
        </p>
      </Reveal>
      <Reveal>
        <h2>10. Toepasselijk recht</h2>
        <p>
          Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen
          worden voorgelegd aan de bevoegde rechter in het arrondissement van de
          opdrachtnemer.
        </p>
      </Reveal>
    </LegalLayout>
  );
}
