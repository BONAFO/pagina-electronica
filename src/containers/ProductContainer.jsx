import products from "@/src/db/Products.db.json";
import Product from "@/src/components/Product";

export default async function ProductContainer({ searchParams }) {
  const params = await searchParams;
  const productId = Number(params.id);
  const product = products.find((item) => item.id === productId);
  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-5">
        <div className="text-center">
          <div className="mb-4 text-5xl">🔎</div>
          <h1 className="text-2xl font-bold text-white">
            Producto no encontrado
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            El producto que estás buscando no existe.
          </p>
        </div>
      </main>
    );
  }
  return <Product product={product} />;
}
