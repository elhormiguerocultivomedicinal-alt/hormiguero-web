import DarkZone from "@/components/DarkZone";
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
    <DarkZone image={IMAGES.budMacroAmbient}>
      <TranslucentMark />

      <section className="relative mx-auto w-full max-w-6xl px-6 pt-16 sm:pt-20">
        <h1 className="text-shadow-strong font-display text-4xl text-papaya sm:text-5xl">
          Productos
        </h1>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pt-10 pb-20">
        <ProductsShowcase products={products} />
      </section>
    </DarkZone>
  );
}
