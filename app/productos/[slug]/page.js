import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { getProductBySlug, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — El Hormiguero`,
    description: product.flavor,
  };
}

export default async function ProductoPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
