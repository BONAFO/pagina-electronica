"use client";

import ProductCard from "./ProductCard";
import useProductsHook from "../hooks/main/Products";
import t from "../translations/Products"; // Importamos las traducciones

export default function Products() {
  const { filteredProducts, productPath, navigate } = useProductsHook();
    
  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
          {t.header.badge}
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t.header.title}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
          {t.header.description}
        </p>
      </div>

      {/* Productos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Estado vacío */
        <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/60 px-6 py-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 text-3xl">
            🔎
          </div>

          <h2 className="mt-5 text-xl font-bold text-white">
            {t.emptyState.title}
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
            {t.emptyState.description}
          </p>

          <button
            type="button"
            onClick={() => {
              navigate(productPath);
            }}
            className="mt-6 cursor-pointer rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            {t.emptyState.button}
          </button>
        </div>
      )}
    </section>
  );
}