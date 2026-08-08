/* =========================================================
   BissWert – config.js
   =========================================================
   HIER TRÄGST DU SPÄTER DEINE ECHTEN AFFILIATE-LINKS EIN.

   1) Unten bei PROVIDERS: für jeden Anbieter dein generelles
      Partnerprogramm-/Tracking-Kürzel (falls vorhanden).
   2) Unten bei RESTAURANTS: für jedes Restaurant und jeden
      Anbieter, über den es verfügbar ist, den Feld-Wert
      "affiliateUrl" durch deinen echten Affiliate-Link ersetzen.
      Alles was noch "PASTE_AFFILIATE_LINK_HERE" enthält, ist
      ein Platzhalter – die Seite markiert das automatisch als
      "Link folgt" und öffnet nichts Kaputtes.
   3) Diese Beispiel-Restaurants sind Demo-/Platzhalterdaten.
      Später ersetzt du sie entweder manuell hier oder bindest
      eine echte Datenquelle/Backend an, das dieses Array befüllt.
   ========================================================= */

// ---------- Anbieter (die großen Lieferdienst-Portale in Deutschland) ----------
const PROVIDERS = {
  lieferando: {
    id: "lieferando",
    name: "Lieferando",
    color: "#ff8000",
    // Optionaler Basis-/Tracking-Link, falls dein Partnerprogramm
    // einen generischen Einstiegslink nutzt (sonst leer lassen).
    baseAffiliateUrl: "",
  },
  wolt: {
    id: "wolt",
    name: "Wolt",
    color: "#00c2e0",
    baseAffiliateUrl: "",
  },
  ubereats: {
    id: "ubereats",
    name: "Uber Eats",
    color: "#06c167",
    baseAffiliateUrl: "",
  },
};

// ---------- Restaurants (Demo-Daten – bitte durch echte Daten ersetzen) ----------
const RESTAURANTS = [
  {
    id: "r1",
    name: "Trattoria Bella Vita",
    cuisine: "Italienisch · Pizza & Pasta",
    rating: 4.7,
    emoji: "🍕",
    gradient: "linear-gradient(135deg,#ffb238,#ff5a36)",
    providers: [
      { providerId: "lieferando", deliveryTimeMin: 30, deliveryFeeEuro: 1.5, minOrderEuro: 12, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
      { providerId: "wolt", deliveryTimeMin: 25, deliveryFeeEuro: 2.9, minOrderEuro: 10, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
      { providerId: "ubereats", deliveryTimeMin: 35, deliveryFeeEuro: 0.99, minOrderEuro: 15, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
    ],
  },
  {
    id: "r2",
    name: "Sushi Kōbo",
    cuisine: "Japanisch · Sushi",
    rating: 4.8,
    emoji: "🍣",
    gradient: "linear-gradient(135deg,#2fb768,#0d0d10)",
    providers: [
      { providerId: "wolt", deliveryTimeMin: 28, deliveryFeeEuro: 1.9, minOrderEuro: 18, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
      { providerId: "ubereats", deliveryTimeMin: 32, deliveryFeeEuro: 1.49, minOrderEuro: 15, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
    ],
  },
  {
    id: "r3",
    name: "Anatolia Grillhaus",
    cuisine: "Türkisch · Grill & Döner",
    rating: 4.5,
    emoji: "🥙",
    gradient: "linear-gradient(135deg,#ff5a36,#7a1f0e)",
    providers: [
      { providerId: "lieferando", deliveryTimeMin: 22, deliveryFeeEuro: 0.99, minOrderEuro: 8, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
      { providerId: "ubereats", deliveryTimeMin: 30, deliveryFeeEuro: 1.99, minOrderEuro: 10, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
    ],
  },
  {
    id: "r4",
    name: "Green Bowl Kitchen",
    cuisine: "Vegan · Bowls & Salate",
    rating: 4.6,
    emoji: "🥗",
    gradient: "linear-gradient(135deg,#2fb768,#ffb238)",
    providers: [
      { providerId: "wolt", deliveryTimeMin: 20, deliveryFeeEuro: 1.5, minOrderEuro: 10, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
      { providerId: "lieferando", deliveryTimeMin: 26, deliveryFeeEuro: 1.99, minOrderEuro: 12, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
      { providerId: "ubereats", deliveryTimeMin: 24, deliveryFeeEuro: 0.49, minOrderEuro: 12, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
    ],
  },
  {
    id: "r5",
    name: "Dragon Wok",
    cuisine: "Chinesisch · Asiatisch",
    rating: 4.3,
    emoji: "🥡",
    gradient: "linear-gradient(135deg,#ff5a36,#ffb238)",
    providers: [
      { providerId: "lieferando", deliveryTimeMin: 35, deliveryFeeEuro: 1.99, minOrderEuro: 12, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
      { providerId: "ubereats", deliveryTimeMin: 33, deliveryFeeEuro: 1.29, minOrderEuro: 12, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
    ],
  },
  {
    id: "r6",
    name: "Burger Society",
    cuisine: "Burger · Fast Food",
    rating: 4.4,
    emoji: "🍔",
    gradient: "linear-gradient(135deg,#0d0d10,#ff5a36)",
    providers: [
      { providerId: "ubereats", deliveryTimeMin: 18, deliveryFeeEuro: 0.49, minOrderEuro: 9, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
      { providerId: "wolt", deliveryTimeMin: 24, deliveryFeeEuro: 1.9, minOrderEuro: 10, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
      { providerId: "lieferando", deliveryTimeMin: 27, deliveryFeeEuro: 1.5, minOrderEuro: 10, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
    ],
  },
  {
    id: "r7",
    name: "Curry Palace",
    cuisine: "Indisch · Curry",
    rating: 4.6,
    emoji: "🍛",
    gradient: "linear-gradient(135deg,#ffb238,#0d0d10)",
    providers: [
      { providerId: "lieferando", deliveryTimeMin: 32, deliveryFeeEuro: 1.5, minOrderEuro: 14, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
      { providerId: "wolt", deliveryTimeMin: 29, deliveryFeeEuro: 2.5, minOrderEuro: 12, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
    ],
  },
  {
    id: "r8",
    name: "Taquería Sol",
    cuisine: "Mexikanisch · Tacos",
    rating: 4.5,
    emoji: "🌮",
    gradient: "linear-gradient(135deg,#2fb768,#ff5a36)",
    providers: [
      { providerId: "ubereats", deliveryTimeMin: 26, deliveryFeeEuro: 0.99, minOrderEuro: 10, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
      { providerId: "lieferando", deliveryTimeMin: 31, deliveryFeeEuro: 1.99, minOrderEuro: 10, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
      { providerId: "wolt", deliveryTimeMin: 27, deliveryFeeEuro: 1.9, minOrderEuro: 10, affiliateUrl: "PASTE_AFFILIATE_LINK_HERE" },
    ],
  },
];
