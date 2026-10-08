"use client";

import sortOptions from "../db/Sort.db.json";
import useSortModalHook from "../hooks/main/SortModal";

export default function SortModal() {
  const { setModalVisible, currentSort, handleSort, clearSort } =
    useSortModalHook();

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
      <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-sm border-l border-orange-500/40 bg-zinc-950 shadow-2xl shadow-black/50 animate-[slideIn_0.25s_ease-out]">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-zinc-800 px-5">
          <h2 className="text-lg font-semibold text-white">Ordenar</h2>

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

        {/* Opciones */}
        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-300">Ordenar por</h3>

            {currentSort && (
              <button
                type="button"
                onClick={clearSort}
                className="cursor-pointer text-xs font-medium text-orange-400 transition hover:text-orange-300"
              >
                Limpiar
              </button>
            )}
          </div>

          <div className="space-y-2">
            {sortOptions.map((option) => {
              const isActive = currentSort === String(option.id);

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSort(option)}
                  className={`flex w-full cursor-pointer items-center rounded-xl border px-4 py-3 text-left text-sm transition ${
                    isActive
                      ? "border-orange-500/60 bg-orange-500/10 font-semibold text-orange-400"
                      : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-orange-500/40 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <span className="flex-1">{option.name}</span>

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
            transform: translateX(100%);
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
