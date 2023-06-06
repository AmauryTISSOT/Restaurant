import images from "./images";

const wines = [
  {
    title: "Château Latour 2014",
    price: "690 €",
    tags: "FR | Bouteille",
  },
  {
    title: "Château Saint-Pierre 2017",
    price: "52 €",
    tags: "FR | Bouteille",
  },
  {
    title: "Whisper Angel 2019",
    price: "18 €",
    tags: "FR | Bouteille",
  },
  {
    title: "Château Lion & Dragon",
    price: "31 €",
    tags: "CA | Bouteille",
  },
  {
    title: "Irish Guinness",
    price: "14 €",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Sprtiz",
    price: "11 €",
    tags: "Aperol | Villa Marchesi prosecco | Soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "11 €",
    tags: "Rhum brun| Gin | Citron",
  },
  {
    title: "Daiquiri",
    price: "10 €",
    tags: "Rhum | Jus de citron | Sucre",
  },
  {
    title: "Old Fashioned",
    price: "31 €",
    tags: "Bourbon | Sucre canne | Angostura",
  },
  {
    title: "Negroni",
    price: "26 €",
    tags: "Gin | Vermouth | Campari | Orange",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "La petite fourchette",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Les étoiles de Paris",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "Le guide du Routard 2022",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Chef startup",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
