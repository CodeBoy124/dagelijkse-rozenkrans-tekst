const ZO = 0;
const MA = 1;
const DI = 2;
const WO = 3;
const DO = 4;
const VR = 5;
const ZA = 6;

const dagnamen = [
  "zondag",
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag",
];

const nummering = [
  "Het eerste",
  "Het tweede",
  "Het derde",
  "Het vierde",
  "Het vijfde",
];

const mysteries = [
  {
    naam: "De Glorievolle Geheimen",
    midtext: "Glorievolle mysterie",
    dagen: [ZO, WO],
    geheimen: [
      "Jezus verrijst uit de doden",
      "Jezus stijgt op ten hemel",
      "De Heilige Geest daalt neer over de apostelen",
      "Maria wordt met ziel en lichaam in de hemel opgenomen",
      "Maria wordt gekroond tot Koningin van hemel en aarde",
    ],
  },
  {
    naam: "De Blijde Geheimen",
    midtext: "Blijde mysterie",
    dagen: [MA, ZA],
    geheimen: [
      "De engel Gabriël brengt de blijde boodschap aan Maria",
      "Maria bezoekt haar nicht Elisabeth",
      "Jezus wordt geboren in een stal van Betlehem",
      "Jezus wordt in de tempel aan God opgedragen",
      "Jezus wordt in de tempel wedergevonden",
    ],
  },
  {
    naam: "De Geheimen van het Licht",
    midtext: "Geheim van het Licht",
    dagen: [DO],
    geheimen: [
      "De doop van Jezus in de Jordaan",
      "De openbaring van Jezus op de bruiloft van Kana",
      "Jezus' aankondiging van het Rijk Gods",
      "De gedaanteverandering van Jezus op de berg",
      "Jezus stelt de eucharistie in tijdens het Laatste Avondmaal",
    ],
  },
  {
    naam: "De Droevige Geheimen",
    midtext: "Droevige Geheim",
    dagen: [DI, VR],
    geheimen: [
      "Jezus bidt in doodsangst tot Zijn hemelse Vader",
      "Jezus wordt gegeseld",
      "Jezus wordt met doornen gekroond",
      "Jezus draagt zijn kruis naar de berg van Calverië",
      "Jezus sterft aan het kruis",
    ],
  },
];

const usePrayer = (prayer) => (fullParam ? prayer.full : prayer.summary);
const Prayer = {
  GeloofsBelijdenis: usePrayer({
    summary:
      "Ik geloof in God... (De twaalf artikelen van het geloof (geloofsbelijdenis))",
    full: txt([
      "Ik geloof in God, de almachtige Vader, Schepper van hemel en aarde.",
      "En in Jezus Christus, zijn enige Zoon, onze Heer, die ontvangen is van de heilige Geest, geboren uit de maagd Maria, die geleden heeft onder Pontius Pilatus, is gekruisigd, gestorven en begraven, die nedergedaald is ter helle, de derde dag verrezen uit de doden, die opgestegen is ten hemel, zit aan de rechterhand van God, de almachtige Vader, vandaar zal hij komen oordelen de levenden en de doden.",
      "Ik geloof in de heilige Geest; de heilige katholieke kerk, de gemeenschap van de heiligen; de vergeving van de zonden; de verrijzenis van het lichaam; en het eeuwig leven.",
      "Amen.",
    ]),
  }),
  OnzeVader: usePrayer({
    summary: "Onze Vader...",
    full: txt([
      "Onze Vader, die in de hemel zijt, Uw Naam worde geheiligd, Uw Rijk kome, Uw wil geschiede op aarde zoals in de hemel, Geef ons heden ons dagelijks brood en vergeef ons onze schuld zoals ook wij aan anderen hun schuld vergeven, en leid ons niet in bekoring, maar verlos ons van het kwade",
    ]),
  }),
  Weesgegroet: usePrayer({
    summary: "Wees gegroet Maria...",
    full: txt([
      "Wees gegroet Maria, vol van genade, de Heer is met u.",
      "Gij zijt de gezegende onder de vrouwen en gezegend is Jezus, de vrucht van uw schoot.",
      "Heilige Maria, Moeder van God, bid voor ons, zondaars, nu en in het uur van onze dood.",
      "Amen.",
    ]),
  }),
  EerAanDe: usePrayer({
    summary: "Eer aan de Vader...",
    full: txt([
      "Eer aan de Vader en de Zoon en de heilige Geest.",
      "Zoals het was in het begin, en nu en altijd, tot in de eeuwen der eeuwen.",
      "Amen.",
    ]),
  }),
};
