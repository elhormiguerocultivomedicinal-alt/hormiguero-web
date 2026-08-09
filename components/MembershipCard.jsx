import {
  buildWhatsappHref,
  formatPrice,
  pricePerGram,
} from "@/lib/memberships";

/** @param {{ tier: import("@/lib/memberships").MembershipTier }} props */
export default function MembershipCard({ tier }) {
  return (
    <a
      href={buildWhatsappHref(tier)}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel group relative block rounded-2xl border border-papaya/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:rotate-[-0.5deg] hover:border-olive/60 hover:shadow-[0_16px_28px_rgba(0,0,0,0.35)] sm:p-6"
    >
      {tier.featured && (
        <span className="tag-stamp absolute top-4 right-4 sm:top-6 sm:right-6">
          Mejor precio
        </span>
      )}

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-olive font-display text-sm text-forest">
        {tier.id}
      </div>

      <div className="mt-4 font-display text-2xl text-papaya sm:text-3xl">
        {formatPrice(tier.price)}
        <span className="ml-1 font-body text-xs font-normal text-papaya/60">
          /mes
        </span>
      </div>

      <div className="mt-1 text-sm font-body text-papaya/70">
        {tier.grams} g por mes
      </div>

      <p className="tag-stamp mt-4">{formatPrice(pricePerGram(tier))} por gramo</p>

      <div className="mt-5 flex items-center gap-2 border-t border-papaya/10 pt-4 font-heading text-xs uppercase tracking-wide text-olive">
        Elegir por WhatsApp
      </div>
    </a>
  );
}
