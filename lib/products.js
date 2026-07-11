/**
 * @typedef {Object} Product
 * @property {string} slug
 * @property {string} name
 * @property {string} bank
 * @property {string} parentals
 * @property {"Indica"|"Sativa"|"Híbrida"} dominance
 * @property {string} flavor
 * @property {string} effect
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
    parentals: "Watermelon Skittles X Tropicanna Cookies",
    dominance: "Indica",
    flavor: "Cítrico con fondo a cookies/bizcocho",
    effect: "Muy potente y de rápido efecto",
    origin: "Cultivado en Argentina",
    containsThc: true,
    image: "productFancy",
  },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
