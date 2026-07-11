import Image from "next/image";
import AmbientPhoto from "./AmbientPhoto";
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
    <article className="relative overflow-hidden">
      <AmbientPhoto image={IMAGES.canopyDarkTexture} />
      <div className="relative mx-auto max-w-4xl px-6 py-16 grid gap-10 md:grid-cols-2 md:items-start">
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

        <div>
          <h1 className="font-display text-4xl text-papaya">{product.name}</h1>

          {product.containsThc && (
            <p className="mt-2 font-heading text-xs uppercase tracking-wide text-olive">
              Contiene THC · Exclusivo pacientes con REPROCANN
            </p>
          )}

          <dl className="mt-8 divide-y divide-army/40 border-t border-army/40">
            {SPECS.map(({ label, key }) => (
              <div key={key} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                <dt className="w-48 shrink-0 font-heading text-xs uppercase tracking-wide text-olive">
                  {label}
                </dt>
                <dd className="text-papaya/90 font-body">{product[key]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}
