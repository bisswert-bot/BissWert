/* =========================================================
   BissWert – legal-content.js
   =========================================================
   HIER TRÄGST DU SPÄTER DEINE ECHTEN RECHTSTEXTE EIN.

   Einfach den Platzhaltertext zwischen den Backticks (`...`)
   durch deinen fertigen Text ersetzen (per Copy & Paste aus
   Word, einem Impressum-Generator o. Ä.). Zeilenumbrüche im
   Text bleiben automatisch erhalten.

   WICHTIG: Diese Vorlage ersetzt keine Rechtsberatung. Lass
   Impressum, AGB, Datenschutzerklärung und Widerrufsbelehrung
   im Zweifel von einem Anwalt / Fachanwalt für IT-Recht oder
   einem seriösen Generator (z. B. IHK, eRecht24) prüfen oder
   erstellen – insbesondere weil BissWert mit Affiliate-Links
   arbeitet und personenbezogene Daten (Lieferadresse) verarbeitet.
   ========================================================= */

const LEGAL_CONTENT = {
  impressum: {
    title: "Impressum",
    updated: "Platzhalter – Datum nach Veröffentlichung eintragen",
    blocks: [
      {
        heading: "Angaben gemäß § 5 TMG",
        text: `[ Hier Firmenname / Betreiber, ladungsfähige Anschrift einfügen ]
[ Vertretungsberechtigte Person(en) ]
[ Handelsregister, Registergericht, Registernummer – falls vorhanden ]`,
      },
      {
        heading: "Kontakt",
        text: `Telefon: [ Nummer einfügen ]
E-Mail: [ E-Mail-Adresse einfügen ]`,
      },
      {
        heading: "Umsatzsteuer-ID",
        text: `Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
[ USt-IdNr. einfügen, falls vorhanden ]`,
      },
      {
        heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        text: `[ Name, Anschrift ]`,
      },
      {
        heading: "Streitschlichtung",
        text: `Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: [ Link zur OS-Plattform einfügen ].
Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. [ ggf. anpassen ]`,
      },
      {
        heading: "Hinweis zu verlinkten Anbieterseiten",
        text: `BissWert verlinkt auf die Angebote Dritter (u. a. Lieferando, Wolt, Uber Eats) über Partner-/Affiliate-Links. Für die Inhalte, die Verfügbarkeit, Preise und die Vertragsabwicklung dieser externen Anbieter ist ausschließlich der jeweilige Anbieter verantwortlich.`,
      },
    ],
  },

  agb: {
    title: "Allgemeine Geschäftsbedingungen",
    updated: "Platzhalter – Datum nach Veröffentlichung eintragen",
    blocks: [
      {
        heading: "§ 1 Geltungsbereich",
        text: `[ Platzhalter: Beschreibe hier, dass BissWert ein kostenloses Vergleichsportal ist, über das Nutzer auf die Angebote Dritter (Lieferdienstportale) weitergeleitet werden, und für welche Nutzung diese AGB gelten. ]`,
      },
      {
        heading: "§ 2 Leistungsbeschreibung",
        text: `[ Platzhalter: BissWert selbst verkauft keine Speisen und schließt keine Lieferverträge ab. BissWert vermittelt lediglich den Überblick über Restaurants und leitet per Klick zu den Partnerportalen weiter. Der Liefervertrag kommt ausschließlich zwischen Nutzer und dem jeweiligen Drittanbieter zustande. ]`,
      },
      {
        heading: "§ 3 Registrierung / Nutzerkonto",
        text: `[ Platzhalter – falls BissWert später Konten anbietet: Voraussetzungen, Pflichten des Nutzers usw. Falls (noch) kein Konto-System existiert, diesen Abschnitt entsprechend anpassen oder entfernen. ]`,
      },
      {
        heading: "§ 4 Verfügbarkeit, Preise und Aktualität der Angaben",
        text: `[ Platzhalter: Hinweis, dass Preise, Liefergebühren, Lieferzeiten und Verfügbarkeiten von den Partnerportalen stammen, sich kurzfristig ändern können und auf der jeweiligen Anbieterseite final bestätigt werden. Keine Gewähr für Vollständigkeit/Aktualität. ]`,
      },
      {
        heading: "§ 5 Haftung",
        text: `[ Platzhalter: Haftungsregelung für eigene Inhalte vs. verlinkte Drittinhalte gemäß den gesetzlichen Vorgaben (§§ 7–10 TMG) einfügen bzw. anwaltlich prüfen lassen. ]`,
      },
      {
        heading: "§ 6 Änderungen dieser AGB",
        text: `[ Platzhalter: Regelung, wie und mit welcher Ankündigungsfrist BissWert diese AGB ändern kann. ]`,
      },
      {
        heading: "§ 7 Schlussbestimmungen",
        text: `[ Platzhalter: Anwendbares Recht, Gerichtsstand (bei Verbrauchern eingeschränkt), Salvatorische Klausel. ]`,
      },
    ],
  },

  datenschutz: {
    title: "Datenschutzerklärung",
    updated: "Platzhalter – Datum nach Veröffentlichung eintragen",
    blocks: [
      {
        heading: "1. Verantwortlicher",
        text: `[ Name, Anschrift, Kontaktdaten des Verantwortlichen gemäß Art. 4 Nr. 7 DSGVO einfügen ]`,
      },
      {
        heading: "2. Welche Daten wir verarbeiten",
        text: `[ Platzhalter: z. B. eingegebene Lieferadresse, IP-Adresse, Browser-/Gerätedaten, Cookie-/Consent-Status, ggf. Kontaktformular-Daten. Bitte konkret auflisten, sobald der finale Funktionsumfang feststeht. ]`,
      },
      {
        heading: "3. Zwecke der Verarbeitung und Rechtsgrundlagen",
        text: `[ Platzhalter: z. B. Bereitstellung der Vergleichsfunktion (Art. 6 Abs. 1 lit. b DSGVO), Reichweitenmessung/Statistik nach Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), berechtigtes Interesse an sicherem Betrieb (Art. 6 Abs. 1 lit. f DSGVO). ]`,
      },
      {
        heading: "4. Weiterleitung zu Partnerportalen (Affiliate-Links)",
        text: `Beim Klick auf ein Restaurant wirst du über einen Affiliate-Link zur Seite des jeweiligen Lieferdienstportals (z. B. Lieferando, Wolt, Uber Eats) weitergeleitet. Dabei können Tracking-Parameter übertragen werden, damit BissWert eine Provision erhält. [ Platzhalter: hier ergänzen, welche Tracking-Anbieter/Netzwerke genutzt werden und worauf sich das jeweils bezieht. ] Für die Datenverarbeitung auf den verlinkten Seiten gelten die Datenschutzerklärungen der jeweiligen Anbieter.`,
      },
      {
        heading: "5. Cookies und ähnliche Technologien",
        text: `[ Platzhalter: Liste der eingesetzten Cookies/Speichertechnologien (technisch notwendig vs. optional/Analyse/Marketing), Speicherdauer, Widerrufsmöglichkeit über die Cookie-Einstellungen. ]`,
      },
      {
        heading: "6. Empfänger und Auftragsverarbeiter",
        text: `[ Platzhalter: z. B. Hosting-Anbieter, Analyse-Dienste, Affiliate-Netzwerke. Jeweils mit Verweis auf bestehende AV-Verträge, sofern zutreffend. ]`,
      },
      {
        heading: "7. Speicherdauer",
        text: `[ Platzhalter: konkrete oder kriterienbasierte Speicherfristen je Datenkategorie einfügen. ]`,
      },
      {
        heading: "8. Deine Rechte",
        text: `Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung deiner personenbezogenen Daten. Zudem steht dir ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu. [ Platzhalter: zuständige Aufsichtsbehörde ergänzen. ]`,
      },
    ],
  },

  widerruf: {
    title: "Widerrufsrecht",
    updated: "Platzhalter – Datum nach Veröffentlichung eintragen",
    blocks: [
      {
        heading: "Hinweis zur Anwendbarkeit",
        text: `[ Platzhalter: Klarstellen, dass BissWert selbst keine Verträge über Speisen/Lieferungen schließt, sondern nur vermittelt/verlinkt. Ein Widerrufsrecht gegenüber BissWert besteht daher grundsätzlich nicht für Bestellungen – maßgeblich sind die Widerrufs-/AGB-Regelungen des jeweiligen Partnerportals (z. B. Lieferando, Wolt, Uber Eats), bei dem der Liefervertrag tatsächlich zustande kommt. Diese Einschätzung bitte juristisch prüfen lassen, insbesondere falls BissWert perspektivisch eigene kostenpflichtige Leistungen (z. B. Konto, Premium) anbietet – dafür separat eine vollständige Widerrufsbelehrung mit Muster-Widerrufsformular ergänzen. ]`,
      },
    ],
  },

  cookies: {
    title: "Cookie-Einstellungen",
    updated: "Platzhalter – Datum nach Veröffentlichung eintragen",
    blocks: [
      {
        heading: "Wie wir Cookies einsetzen",
        text: `[ Platzhalter: kurze, verständliche Erklärung für Endnutzer, welche Cookie-Kategorien es gibt (notwendig / Statistik / Marketing-Affiliate) und dass die Auswahl jederzeit über den Cookie-Banner bzw. diese Seite geändert werden kann. ]`,
      },
      {
        heading: "Notwendige Cookies",
        text: `[ Platzhalter: Auflistung, z. B. Speicherung der Cookie-Zustimmung selbst, Session-/Sicherheitscookies. ]`,
      },
      {
        heading: "Statistik-Cookies",
        text: `[ Platzhalter: falls genutzt – Anbieter, Zweck, Speicherdauer. Falls (noch) nicht genutzt, Abschnitt entsprechend anpassen. ]`,
      },
      {
        heading: "Affiliate-/Marketing-Cookies",
        text: `[ Platzhalter: Cookies/Parameter, die beim Klick auf ein Partnerportal gesetzt werden, um BissWert die Provision zuzuordnen. ]`,
      },
    ],
  },
};
