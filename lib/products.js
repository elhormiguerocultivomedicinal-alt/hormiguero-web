/**
 * @typedef {Object} Product
 * @property {string} slug
 * @property {string} name
 * @property {string} bank
 * @property {string} parentals
 * @property {"Indica"|"Sativa"|"Híbrida"} dominance
 * @property {string|null} flavor
 * @property {string|null} effect
 * @property {string} origin
 * @property {boolean} containsThc
 * @property {keyof import("./images").IMAGES} image
 */

/** @type {Product[]} */
export const products = [
  {
    slug: "fancy",
    name: "Fancy",
    bank: "R-KIEM",
    parentals: "Watermelon Skittles x Tropicana Cookies",
    dominance: "Híbrida",
    flavor: "Cítrico con fondo a cookies/bizcocho",
    effect: "Muy potente y de rápido efecto",
    origin: "Cultivado en Argentina",
    containsThc: true,
    image: "productFancy",
  },
  {
    slug: "og24k",
    name: "OG24K",
    bank: "BSF",
    parentals: "Kosher Tangie x Bubba Kush",
    dominance: "Híbrida",
    flavor: "Tierra húmeda, mandarina",
    effect: "Creatividad, felicidad",
    origin: "Cultivado en Argentina",
    containsThc: true,
    image: "productOg24k",
  },
  {
    slug: "z-kiem",
    name: "Z-KIEM",
    bank: "R-KIEM",
    parentals: "Skittlez x Afghan",
    dominance: "Indica",
    flavor: null,
    effect: null,
    origin: "Cultivado en Argentina",
    containsThc: true,
    image: "productZkiem",
  },
  {
    slug: "gorilla-r",
    name: "Gorilla R.",
    bank: "BSF",
    parentals: "Gorilla Glue x Rainbows",
    dominance: "Indica",
    flavor: "Caramelo, afrutado, terroso",
    effect: "Fuerte, calmante, relajante",
    origin: "Cultivado en Argentina",
    containsThc: true,
    image: "productGorilla",
  },
  {
    slug: "choco-og",
    name: "Choco OG",
    bank: "1439 Criadores",
    parentals: "Chocolate Mint OG x Chocolope",
    dominance: "Indica",
    flavor: "Frutal, con destellos a chocolate y gusto a chicle globo",
    effect: "Efecto equilibrado",
    origin: "Cultivado en Argentina",
    containsThc: true,
    image: "productChocoOg",
  },
  {
    slug: "tropicana",
    name: "Tropicana",
    bank: "Sweet Lab",
    parentals: "Tropi 8 x Face 7",
    dominance: "Híbrida",
    flavor: "Fruta cítrica, tarta de naranjas",
    effect: "Estimulante, lúdico y creativo",
    origin: "Cultivado en Argentina",
    containsThc: true,
    image: "productTropicana",
  },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
