import Image from "next/image";
import AmbientPhoto from "@/components/AmbientPhoto";
import ProductsShowcase from "@/components/ProductsShowcase";
import TranslucentMark from "@/components/TranslucentMark";
import { IMAGES } from "@/lib/images";
import { products } from "@/lib/products";

export const metadata = {
  title: "Productos — El Hormiguero",
  description: "Genéticas cultivadas por El Hormiguero.",
};

export default function ProductosPage() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden">
        <Image
          src={IMAGES.canopyMoody.src}
          alt={IMAGES.canopyMoody.alt}
          fill
          priority
          sizes="100vw"
          className="photo-tone object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/10" />
        <TranslucentMark />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16">
          <h1 className="font-display text-5xl text-papaya sm:text-6xl">Productos</h1>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest">
        <AmbientPhoto image={IMAGES.budMacroAmbient} />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <ProductsShowcase products={products} />
        </div>
      </section>
    </>
  );
}
