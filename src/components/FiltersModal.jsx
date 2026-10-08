"use client";

import categories from "../db/Categories.db.json";
import useFiltersModalHook from "../hooks/main/FiltersModal";

export default function FiltersModal() {
  const {
    clearFilters,
    getCategorySlug,
    handleCategory,
    currentCategory,
    setModalVisible,
  } = useFiltersModalHook();

  return (
    <>
      {/* Fondo */}
      <div
        className="fixed inset-0 z-40 cursor-pointer bg-black/60 backdrop-blur-sm"
        onClick={() => {
          setModalVisible("");
        }}
      />

      {/* Panel */}
      <aside className="fixed left-0 top-0 z-50 h-full w-full max-w-sm border-r border-orange-500/40 bg-zinc-950 shadow-2xl shadow-black/50 animate-[slideIn_0.25s_ease-out]">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-zinc-800 px-5">
          <h2 className="text-lg font-semibold text-white">Filtros</h2>

          <button
            type="button"
            onClick={() => {
              setModalVisible("");
            }}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:border-orange-500/60 hover:bg-zinc-800 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Categorías */}
        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-300">Categorías</h3>

            {currentCategory && (
              <button
                type="button"
                onClick={clearFilters}
                className="cursor-pointer text-xs font-medium text-orange-400 transition hover:text-orange-300"
              >
                Limpiar
              </button>
            )}
          </div>

          <div className="space-y-2">
            {categories.map((category) => {
              const slug = getCategorySlug(category.name);
              const isActive = currentCategory === slug;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategory(category)}
                  className={`flex w-full cursor-pointer items-center rounded-xl border px-4 py-3 text-left text-sm transition ${
                    isActive
                      ? "border-orange-500/60 bg-orange-500/10 font-semibold text-orange-400"
                      : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-orange-500/40 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <span className="flex-1">{category.name}</span>

                  {isActive && <span className="text-orange-400">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }

          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
