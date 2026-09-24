"use client";
import { useProductsModal } from "../context/ProductsModalContext";
import sortOptions from "../db/Sort.db.json";

export default function SortModal() {
  const { setModalVisible } = useProductsModal();
  return (
    <>
      
      {/* Fondo */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={() => {
          setModalVisible("");
        }}
      />
      {/* Panel */}
      <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-sm border-l border-orange-500/40 bg-zinc-950 shadow-2xl shadow-black/50 animate-[slideIn_0.25s_ease-out]">
        
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-zinc-800 px-5">
          
          <h2 className="text-lg font-semibold text-white"> Ordenar </h2>
          <button
            type="button"
            onClick={() => {
              setModalVisible("");
            }}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:border-orange-500/60 hover:bg-zinc-800 hover:text-white"
          >
            
            ✕
          </button>
        </div>
        {/* Opciones */}
        <div className="p-5">
          
          <h3 className="mb-3 text-sm font-semibold text-zinc-300">
            
            Ordenar por
          </h3>
          <div className="space-y-2">
            
            {sortOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className="flex w-full items-center rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-left text-sm text-zinc-300 transition hover:border-orange-500/60 hover:bg-zinc-800 hover:text-white"
              >
                
                {option.name}
              </button>
            ))}
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
