import Image from "next/image";
import DarkZone from "./DarkZone";
import TranslucentMark from "./TranslucentMark";
import { IMAGES } from "@/lib/images";

const SPECS = [
  { label: "Banco", key: "bank" },
  { label: "Parentales genéticos", key: "parentals" },
  { label: "Predominancia", key: "dominance" },
  { label: "Sabor", key: "flavor" },
  { label: "Efecto", key: "effect" },
  { label: "Origen", key: "origin" },
];

/** @param {{ product: import("@/lib/products").Product }} props */
export default function ProductDetail({ product }) {
  const image = IMAGES[product.image];

  return (
    <DarkZone image={IMAGES.canopyDarkTexture}>
      <TranslucentMark />
      <article className="relative mx-auto max-w-4xl px-6 pt-12 grid gap-10 md:grid-cols-2 md:items-start">
        <div className="relative aspect-square overflow-hidden rounded-2xl p-1.5 ring-1 ring-papaya/10">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_1px_0_rgba(255,240,217,0.08)]" />
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="photo-tone object-cover"
              priority
            />
          </div>
        </div>

        <div className="glass-panel rounded-2xl px-8 py-8 ring-1 ring-papaya/10">
          <h1 className="font-display text-4xl uppercase tracking-tight text-papaya">
            {product.name}
          </h1>

          {product.containsThc && (
            <p className="tag-stamp mt-3">Contiene THC · Exclusivo pacientes con REPROCANN</p>
          )}

          <dl className="mt-8 divide-y divide-papaya/15 border-t border-papaya/15">
            {SPECS.filter(({ key }) => product[key]).map(({ label, key }) => (
              <div key={key} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                <dt className="w-48 shrink-0 font-heading text-xs uppercase tracking-wide text-olive">
                  {label}
                </dt>
                <dd className="text-papaya/90 font-body">{product[key]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
    </DarkZone>
  );
}
