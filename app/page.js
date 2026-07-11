import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import DarkZone from "@/components/DarkZone";
import ProductsShowcase from "@/components/ProductsShowcase";
import TranslucentMark from "@/components/TranslucentMark";
import { IMAGES } from "@/lib/images";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <DarkZone images={[IMAGES.canopyBright, IMAGES.cultivationTrim]}>
      <TranslucentMark />

      <section className="relative mx-auto w-full max-w-6xl px-6 pt-12">
        <h1 className="font-display text-5xl leading-tight text-papaya sm:text-6xl md:text-7xl">
          El Hormiguero
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-papaya/85 font-body">
          Cultivo de cannabis medicinal en Argentina. Inspirados en lo vivo
          y lo cercano — una energía libre, relajada y consciente.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5 font-heading text-sm uppercase tracking-wide">
          <Link
            href="/productos"
            className="group inline-flex items-center gap-3 rounded-full bg-olive py-1 pl-6 pr-1 text-forest transition-opacity hover:opacity-90"
          >
            Ver productos
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-olive transition-transform group-hover:translate-x-0.5">
              <ArrowIcon className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/nosotros"
            className="rounded-full border border-papaya/50 px-6 py-3 text-papaya transition-colors hover:border-olive hover:text-olive"
          >
            Conocenos
          </Link>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl p-1.5 ring-1 ring-papaya/10">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src={IMAGES.cultivationTrim.src}
              alt={IMAGES.cultivationTrim.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="photo-tone object-cover"
            />
          </div>
        </div>

        <div>
          <p className="font-heading text-xs uppercase tracking-wide text-olive">
            Nuestra inspiración
          </p>
          <h2 className="mt-3 font-display text-3xl text-papaya sm:text-4xl">
            Lo simple, lo real y lo natural
          </h2>
          <p className="mt-6 max-w-[60ch] leading-relaxed text-papaya/80 font-body">
            La marca encuentra su inspiración en lo vivo y lo cercano. Su
            identidad se nutre de texturas naturales, verdes profundos y
            patrones orgánicos que evocan conexión y frescura — una
            estética cálida y auténtica, tomada del ritmo y la armonía de
            la naturaleza.
          </p>
          <Link
            href="/nosotros"
            className="mt-6 inline-block font-heading text-sm uppercase tracking-wide text-olive underline decoration-olive underline-offset-4 hover:text-papaya"
          >
            Conocé más sobre nosotros
          </Link>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pt-4 pb-20">
        <h2 className="font-display text-3xl text-papaya sm:text-4xl">
          Nuestros productos
        </h2>
        <div className="mt-10">
          <ProductsShowcase products={products} />
        </div>
      </section>
    </DarkZone>
  );
}
