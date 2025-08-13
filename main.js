const params = new URLSearchParams(document.location.search);
const useFull = params.get("full") == "yes"; // is the string "Jonathan"

function usePrayer(prayer, useFull) {
  return useFull ? prayer.full : prayer.summary;
}

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
    useFull
      ? "Hier volgt de volledige Rozenkrans"
      : "Hier volgt een overzicht van de hele Rozenkrans:",
    "",
    "In de naam van de Vader, en de Zoon en de Heilige Geest. Amen.",
    usePrayer(Prayer.GeloofsBelijdenis, useFull),
    usePrayer(Prayer.OnzeVader, useFull),
    `Wij groeten U, Dochter van God de Vader; ${usePrayer(
      Prayer.Weesgegroet,
      useFull
    )}`,
    `Wij groeten U, Moeder van God de Zoon; ${usePrayer(
      Prayer.Weesgegroet,
      useFull
    )}`,
    `Wij groeten U, Bruid van God de Heilige Geest; ${usePrayer(
      Prayer.Weesgegroet,
      useFull
    )}`,
    usePrayer(Prayer.EerAanDe, useFull),
    "<Persoonlijke intenties>",
    "",
  ].join("\n") + "\n";

for (let i = 0; i < huidigeMysteries.geheimen.length; i++) {
  text +=
    [
      `${nummering[i]} ${huidigeMysteries.midtext}: ${huidigeMysteries.geheimen[i]}`,
      `(Op de grote kralen) ${usePrayer(Prayer.OnzeVader, useFull)}`,
      `(Op de kleine kralen) ${usePrayer(Prayer.Weesgegroet, useFull)}`,
      "(Na de kleine kralen door met:)",
      usePrayer(Prayer.EerAanDe, useFull),
      "O Mijn Jezus, vergeef ons onze zonden, bewaar ons voor het vuur van de hel, breng alle zielen naar de hemel, vooral degenen die uw barmhartigheid het meeste nodig hebben.",
    ].join("\n") + "\n\n";
}

text +=
  [
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
  ].join("\n") + "\n\n";

document.getElementById("text").innerText = text;

document
  .getElementById(useFull ? "action-volledig" : "action-overzicht")
  .classList.add("current");

document
  .getElementById(useFull ? "link-overzicht" : "link-volledig")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set("full", useFull ? "no" : "yes");
    window.location.href = url.toString();
  });
