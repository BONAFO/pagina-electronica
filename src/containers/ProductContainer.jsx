import products from "@/src/db/Products.db.json";
import Product from "@/src/components/Product";
import ProductNotFound from "@/src/components/ProductNotFound";

export default async function ProductContainer({ searchParams }) {
  const params = await searchParams;

  const productId = Number(params.id);

  const product = products.find(
    (item) => item.id === productId
  );

  if (!product) {
    return <ProductNotFound />;
  }

  return <Product product={product} />;
}
