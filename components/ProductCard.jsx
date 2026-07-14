import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

/** @param {{ product: import("@/lib/products").Product }} props */
export default function ProductCard({ product }) {
  const image = IMAGES[product.image];

  return (
    <Link
      href={`/productos/${product.slug}`}
      className="glass-panel group block overflow-hidden rounded-2xl border border-papaya/10 transition-all duration-300 hover:-translate-y-1 hover:rotate-[-0.5deg] hover:border-olive/60 hover:shadow-[0_16px_28px_rgba(0,0,0,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden p-1.5">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_1px_0_rgba(255,240,217,0.08)]" />
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="photo-tone object-cover"
          />
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <p className="tag-stamp">{product.dominance}</p>
        <h3 className="mt-2 font-display text-lg uppercase tracking-tight text-papaya sm:text-2xl">
          {product.name}
        </h3>
        {product.flavor && (
          <p className="mt-2 text-sm text-papaya/70 font-body line-clamp-2">
            {product.flavor}
          </p>
        )}
      </div>
    </Link>
  );
}
