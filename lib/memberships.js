import { CONTACT } from "./site-config";

/**
 * @typedef {Object} MembershipTier
 * @property {"A"|"B"|"C"|"D"} id
 * @property {number} price
 * @property {number} grams
 * @property {boolean} [featured]
 */

/** @type {MembershipTier[]} */
export const MEMBERSHIP_TIERS = [
  { id: "A", price: 57500, grams: 5 },
  { id: "B", price: 105000, grams: 10 },
  { id: "C", price: 142500, grams: 15 },
  { id: "D", price: 170000, grams: 20, featured: true },
];

export function pricePerGram(tier) {
  return tier.price / tier.grams;
}

export function formatPrice(value) {
  return `$${Math.round(value).toLocaleString("es-AR")}`;
}

export function buildWhatsappHref(tier) {
  const message = `Hola! Quiero sumarme con la Membresía ${tier.id}: ${formatPrice(
    tier.price
  )}/mes - ${tier.grams} g por mes.`;
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Genéticas en stock — verificado contra la tabla `stock` (Supabase) el
// 2026-08-08. Re-consultar antes de asumir que sigue vigente. `slug` linkea
// a la ficha del producto (lib/products.js) cuando existe.
export const AVAILABLE_GENETICS = [
  { name: "Choco OG", slug: "choco-og" },
  { name: "Fancy", slug: "fancy" },
  { name: "Gorilla Rainbow", slug: "gorilla-r" },
  { name: "OG24K", slug: "og24k" },
  { name: "Z-Kiem", slug: "z-kiem" },
];
