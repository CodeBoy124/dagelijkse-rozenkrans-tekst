const findMysteries = (dayIndex) =>
  mysteries.find((v) => v.dagen.includes(dayIndex));
const huidigeDag = new Date().getDay();
const huidigeMysteries = findMysteries(huidigeDag);

const geloofsBelijdenis = Prayer.GeloofsBelijdenis;
const onzeVader = Prayer.OnzeVader;
const weesgegroet = Prayer.Weesgegroet;
const eerAanDe = Prayer.EerAanDe;

const text1 = [
  `De geheimen voor ${dagnamen[huidigeDag]}: ${huidigeMysteries.naam}`,
  ...huidigeMysteries.geheimen.map(
    (mysterie, index) => `${index + 1}. ${mysterie}`,
  ),
  "",
  fullParam
    ? "Hier volgt de volledige Rozenkrans:"
    : "Hier volgt een overzicht van de hele Rozenkrans:",
  "",
  "In de naam van de Vader, en de Zoon en de Heilige Geest. Amen.",
  geloofsBelijdenis,
  onzeVader,
  `Wij groeten U, Dochter van God de Vader; ${weesgegroet}`,
  `Wij groeten U, Moeder van God de Zoon; ${weesgegroet}`,
  `Wij groeten U, Bruid van God de Heilige Geest; ${weesgegroet}`,
  eerAanDe,
].join("\n");

const text2 = [
  "<Eigen gebedsintenties>",
  ...huidigeMysteries.geheimen.map((mysterie, index) =>
    [
      ``,
      `${nummering[index]} ${huidigeMysteries.midtext}: ${mysterie}`,
      `(Op de grote kralen) ${onzeVader}`,
      `(Op de kleine kralen) ${weesgegroet}`,
      `(Na de kleine kralen door met:)`,
      eerAanDe,
      `O Mijn Jezus, vergeef ons onze zonden, bewaar ons voor het vuur van de hel, breng alle zielen naar de hemel, vooral degenen die uw barmhartigheid het meeste nodig hebben.`,
    ].join("\n"),
  ),
  "",
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
  "En Gij, vorst der hemelse legerscharen, drijf Satan en de andere boze geesten, die tot verderf van de zielen over de wereld rondgaan, door de goddelijke kracht in de hel terug.",
  "(optioneel: Heilige aartsengel Michaël, wij stellen onszelf, onze familie en alles wat ons toebehoort onder uw machtige bescherming.",
  "Wil de goddelijke liefde steeds in onze harten doen toenemen.",
  "Gedenk, o engel Gods, dat wij van heden af helemaal onder uw bescherming staan.",
  "Verkrijg voor ons een altijd vuriger liefde tot God, onze Vader, tot Jezus, onze Verlosser, tot de heilige Geest, onze heiligmaker, tot Maria, onze hemelse moeder en tot Jozef, onze beschermer.",
  "Heilige aartsengel Michaël, bid voor ons.",
  "Heilige aartsengel Michaël, red ons land.",
  "Heilige aartsengel Michaël, red de wereld.)",
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

text1Element.innerText = text1;
text2Element.innerText = text2;

gebedsIntentiesElement.value = intentionsParam;

(fullParam
  ? navVolledigButtonElement
  : navOverzichtButtonElement
).classList.add("current");

function getLink(fullMode, prayerIntentions) {
  const url = new URL(window.location.href);
  url.searchParams.set("full", fullMode ? "yes" : "no");
  url.searchParams.set("intentions", prayerIntentions);
  return url.toString();
}

(fullParam ? navOverzichtLinkElement : navVolledigLinkElement).addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    window.location.href = getLink(!fullParam, gebedsIntentiesElement.value);
  },
);

function copyContents() {
  const rawPrayerIntentions = gebedsIntentiesElement.value;
  const prayerIntentions =
    rawPrayerIntentions.length == 0
      ? ""
      : `(Mogelijk de volgende gebedsintenties:)\n${rawPrayerIntentions}`;
  const fullText = [
    text1,
    prayerIntentions,
    text2,
    "",
    "Voor meer uitleg over de rozenrkans, kun je deze video bekijken: https://www.youtube.com/watch?v=TvPcSQ4TtmY",
    // "",
    // `Voor ${
    //   fullParam ? "verkorte" : "volledige"
    // } variant, navigeer naar ${getLink(
    //   !fullParam,
    //   gebedsIntentiesElement.value
    // )}`,
  ].join("\n");
  navigator.clipboard.writeText(fullText);
}
