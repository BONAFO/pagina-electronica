"use client";

import ProductCard from "../components/ProductCard";
import ProductFilterMenu from "../components/ProductFilterMenu";
import { useProductsModal } from "../context/ProductsModalContext";
import useProductsHook from "../hooks/main/Products";

export default function ProductsContainer() {
  const { modalVisible } = useProductsModal();

  const { filteredProducts } = useProductsHook();

  return (
    <>
      <ProductFilterMenu />

      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/60 px-6 py-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 text-3xl">
              🔎
            </div>

            <h2 className="mt-5 text-xl font-bold text-white">
              No encontramos productos
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
              No hay productos que coincidan con los filtros seleccionados.
              Probá modificando la búsqueda o limpiando los filtros.
            </p>
          </div>
        )}

        {modalVisible}
      </div>
    </>
  );
}
