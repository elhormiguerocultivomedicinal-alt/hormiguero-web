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

      <section className="relative mx-auto w-full max-w-6xl px-6 pt-12">
        <h1 className="font-display text-5xl text-papaya sm:text-6xl">Productos</h1>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pt-10 pb-20">
        <ProductsShowcase products={products} />
      </section>
    </DarkZone>
  );
}
