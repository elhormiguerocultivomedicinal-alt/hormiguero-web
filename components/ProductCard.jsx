import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

/** @param {{ product: import("@/lib/products").Product }} props */
export default function ProductCard({ product }) {
  const image = IMAGES[product.image];

  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group block overflow-hidden rounded-2xl border border-army/40 bg-army/10 transition-colors hover:border-olive/60"
    >
      <div className="relative aspect-[4/3] overflow-hidden p-1.5">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_1px_0_rgba(255,240,217,0.08)]" />
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="photo-tone object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <p className="font-heading text-[0.65rem] uppercase tracking-wide text-olive sm:text-xs">
          {product.dominance}
        </p>
        <h3 className="mt-1 font-display text-lg text-papaya sm:text-2xl">{product.name}</h3>
        {product.flavor && (
          <p className="mt-2 text-sm text-papaya/70 font-body line-clamp-2">
            {product.flavor}
          </p>
        )}
      </div>
    </Link>
  );
}
