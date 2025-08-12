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
      "Jezus verijst uit de doden",
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
      "Jezus wordt geboren in een stal van Betlehem.",
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

const findMysteries = (dayIndex) =>
  mysteries.find((v) => v.dagen.includes(dayIndex));

const huidigeDag = new Date().getDay();
const huidigeMysteries = findMysteries(huidigeDag);

let text = `De geheimen voor ${dagnamen[huidigeDag]}: ${huidigeMysteries.naam}\n`;
for (let i = 0; i < huidigeMysteries.geheimen.length; i++) {
  text += `${i + 1}. ${huidigeMysteries.geheimen[i]}\n`;
}

text +=
  [
    "",
    "Hier volgt een overzicht van de hele Rozenkrans:",
    "",
    "In de naam van de Vader, en de Zoon en de Heilige Geest. Amen.",
    "Ik geloof in God... (De twaalf artikelen van het geloof (geloofsbelijdenis))",
    "Onze Vader...",
    "Wij groeten U, Dochter van God de Vader; Wees gegroet Maria...",
    "Wij groeten U, Moeder van God de Zoon; Wees gegroet Maria...",
    "Wij groeten U, Bruid van God de Heilige Geest; Wees gegroet Maria...",
    "Eer aan de Vader...",
    "<intenties>",
    "",
  ].join("\n") + "\n";

for (let i = 0; i < huidigeMysteries.geheimen.length; i++) {
  text +=
    [
      `${nummering[i]} ${huidigeMysteries.midtext}: ${huidigeMysteries.geheimen[i]}`,
      "Onze Vader... (op de grote kralen)",
      "Wees gegroet... (op de kleine kralen)",
      "(Na de kleine kralen door met:)",
      "Eer aan de Vader...",
      "O Mijn Jezus, vergeef ons onze zonden, bewaar ons voor het vuur van de hel, breng alle zielen naar de hemel, vooral degenen die uw barmhartigheid het meeste nodig hebben.",
    ].join("\n") + "\n\n";
}

text += [
  "(Slotgebeden)",
  "Keuze 1: Toewijdingsgebed:",
  "Mijn koningin, mijn Moeder,",
  "Ik geef mezelf volledig aan U en toon U mijn aanhankelijkheid.",
  "Ik offer U deze dag mijn ogen, mijn oren, mijn mond, mijn hart, geheel mijzelf, zonder voorbehoud.",
  "Daarom goede Moeder, omdat ik de Uwe ben, neem mij en bewaar mij als Uw eigendom en bezit. Amen.",
  "",
  "Keuze 2: Gebed tot de Heilige Geest",
  "Kom Heilig Geest, verlicht mijn hart om de dingen te zien die van God zijn.",
  "Kom H. Geest, verlicht mijn verstand, om de dingen te kennen die van God zijn.",
  "Kom H. Geest, in mijn ziel, dat ik alleen God toebehoor.",
  "Heilig al wat ik denk, zeg en doe, opdat alles moge zijn voor de Glorie van God.",
  "Amen.",
  "",
  "Keuze 3: Gebed tot de Aartsengel Michaël",
  "Heilige Aartsengel Michaël, verdedig ons in de strijd, wees onze bescherming tegen de boosheid en de listen van de duivel.",
  "Wij smeken ootmoedig dat God hem zijn macht doe gevoelen.",
  "En Gij, vorst der hemelse legerscharen, drijf saten en de andere boze geesten, die tot verderf van de zielen over de wereld rondgaan, door de goddelijkse kracht in de hel terug.",
  "Amen.",
  "",
  "Keuze 4: Salve Regina",
  "Salve, Regina, Mater misericordiae, vita, dulcedo, et spes nostra, salve.",
  "Ad te clamamus, exsules filii Evae.",
  "Ad te suspiramus, gementes et flentes in hac lacrimarum valle.",
  "Eia, ergo, advocata nostra, illos tuos misericordes oculos ad nos converte; et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende.",
  "O clemens, O pia, O dulcis Virgo Maria.",
  "",
  "(Vertaling Salve Regina)",
  "Wees gegroet Koningin, Moeder van barmhartigheid; ons leven, onze vreugde en onze hoop, wees gegroet.",
  "Tot u roepen wij, ballingen, kinderen van Eva; tot u smeken wij, zuchtend en wenend in dit dal van tranen.",
  "Daarom dan, onze voorspreekster, sla op ons uw barmhartige ogen; en toon ons, na deze ballingschap, Jezus, de gezegende vrucht van uw schoot.",
  "O zachtmoedige, o liefdevolle, o zoete maagd Maria.",
].join("\n");

const preElement = document.createElement("pre");
preElement.innerText = text;
document.body.appendChild(preElement);
