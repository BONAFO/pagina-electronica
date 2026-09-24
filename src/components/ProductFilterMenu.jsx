"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FiltersModal from "./FiltersModal";
import SortModal from "./SortModal";
import { useProductsModal } from "../context/ProductsModalContext";
import products from "../db/Products.db.json";


export default function ProductFilterMenu() {
  const { setModalVisible } = useProductsModal();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const searchResults =
    search.trim() === ""
      ? []
      : products
          .filter((product) => {
            const value = search.toLowerCase().trim();
            return (
              product.name.toLowerCase().includes(value) ||
              product.brand.toLowerCase().includes(value)
            );
          })
          .slice(0, 10);
  const handleProductClick = (id) => {
    setSearch("");
    router.push(`/product?id=${id}`);
  };
  return (
    <section className="relative w-full rounded-2xl border border-orange-500/40 bg-zinc-950 p-4 sm:p-5">
      {/* Buscador */}
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
          🔎
        </span>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar productos..."
          className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500/60"
        />
        {/* Resultados */}
        {search.trim() !== "" && (
          <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50">
            {searchResults.length > 0 ? (
              <div className="max-h-[500px] overflow-y-auto">
                {searchResults.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => handleProductClick(product.id)}
                    className="flex w-full items-center gap-3 border-b border-zinc-800 px-4 py-3 text-left transition last:border-b-0 hover:bg-zinc-900"
                  >
                    {/* Imagen */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-zinc-900">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain p-1"
                      />
                    </div>
                    {/* Información */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-white">
                        {product.name}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        {product.brand}
                      </p>
                    </div>
                    {/* Precio */}
                    <span className="shrink-0 text-sm font-semibold text-orange-400">
                      ${product.price.toLocaleString("es-AR")}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="px-4 py-6 text-center">
                <p className="text-sm text-zinc-400">
                  No se encontraron productos.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Botones */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {/* Filtros */}
        <button
          type="button"
          onClick={() => setModalVisible(<FiltersModal />)}
          className="flex h-12 items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-sm font-medium text-white transition hover:border-orange-500/60 hover:bg-zinc-800"
        >
          <span className="flex items-center gap-2">
            <span className="text-orange-400">⚙</span> Filtros
          </span>
          <span className="text-xs text-zinc-500"> ▾ </span>
        </button>
        {/* Ordenar */}
        <button
          type="button"
          onClick={() => setModalVisible(<SortModal />)}
          className="flex h-12 items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-sm font-medium text-white transition hover:border-orange-500/60 hover:bg-zinc-800"
        >
          <span className="flex items-center gap-2">
            <span className="text-orange-400">↕</span> Ordenar
          </span>
          <span className="text-xs text-zinc-500"> ▾ </span>
        </button>
      </div>
    </section>
  );
}
