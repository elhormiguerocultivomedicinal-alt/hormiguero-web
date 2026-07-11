import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import ArrowIcon from "./ArrowIcon";
import ProductCard from "./ProductCard";

function FeaturedProductCard({ product }) {
  const image = IMAGES[product.image];

  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group grid overflow-hidden rounded-2xl border border-army/40 bg-army/10 transition-colors hover:border-olive/60 sm:grid-cols-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto">
        <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_1px_0_rgba(255,240,217,0.08)]" />
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="photo-tone object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10">
        <p className="font-heading text-xs uppercase tracking-wide text-olive">
          {product.dominance}
        </p>
        <h3 className="mt-2 font-display text-3xl text-papaya">{product.name}</h3>
        <p className="mt-4 text-sm leading-relaxed text-papaya/70 font-body">
          {product.flavor}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-papaya/70 font-body">
          {product.effect}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wide text-olive">
          Ver ficha completa
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-olive/50 transition-colors group-hover:bg-olive group-hover:text-forest">
            <ArrowIcon />
          </span>
        </span>
      </div>
    </Link>
  );
}

/**
 * A grid of 3+ products looks broken with only 1-2 real entries (a lonely
 * card in a mostly-empty row) — spotlight the few we have instead of
 * padding out a grid built for a catalog that doesn't exist yet.
 */
export default function ProductsShowcase({ products }) {
  if (products.length >= 3) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 ${
        products.length === 2 ? "sm:grid-cols-2" : "mx-auto max-w-2xl"
      }`}
    >
      {products.map((product) => (
        <FeaturedProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
