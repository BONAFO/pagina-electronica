"use client";

import FiltersModal from "../components/FiltersModal";
import { useProductsModal } from "../context/ProductsModalContext";

export default function ProductFilterMenu() {
  const { setModalVisible } = useProductsModal();

  return (
    <section className="relative w-full rounded-2xl border border-orange-500/40 bg-zinc-950 p-4 sm:p-5">
      {/* Buscador */}
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
          🔎
        </span>
        <input
          type="text"
          placeholder="Buscar productos..."
          className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500/60"
        />
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
          <span
            className={`text-xs text-zinc-500 transition-transform`}
          >
            ▾
          </span>
        </button>
        {/* Ordenar */}
        <button
          type="button"
          className="flex h-12 items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-sm font-medium text-white transition hover:border-orange-500/60 hover:bg-zinc-800"
        >
          <span className="flex items-center gap-2">
            <span className="text-orange-400">↕</span> Ordenar
          </span>
          <span className="text-xs text-zinc-500">▾</span>
        </button>
      </div>

    </section>
  );
}
