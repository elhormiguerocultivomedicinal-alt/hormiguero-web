import ProductCard from "./ProductCard";

/** Fixed 2×3 catalog grid — always 6 genéticas, no special-casing. */
export default function ProductsShowcase({ products }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
