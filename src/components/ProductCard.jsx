export default function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-orange-500/10">
      
      {/* Imagen */}
      <div className="relative aspect-square overflow-hidden bg-zinc-950">
        
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-105"
        />
        {/* Estado */}
        <span
          className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${product.stock ? "border-green-500/20 bg-green-500/10 text-green-400" : "border-red-500/20 bg-red-500/10 text-red-400"}`}
        >
          
          {product.stock ? "En stock" : "Sin stock"}
        </span>
      </div>
      {/* Información */}
      <div className="border-t border-zinc-800 p-4 sm:p-5">
        
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-orange-400">
          
          {product.brand}
        </p>
        <h2 className="min-h-[40px] text-sm font-semibold leading-5 text-white sm:text-base">
          
          {product.name}
        </h2>
        <div className="mt-4 flex items-end justify-between gap-2">
          
          <div>
            
            <p className="text-xs text-zinc-500">Precio</p>
            <p className="text-lg font-bold text-white sm:text-xl">
              
              ${product.price.toLocaleString("es-AR")}
            </p>
          </div>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/10 text-orange-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            aria-label={`Ver ${product.name}`}
          >
            
            →
          </button>
        </div>
      </div>
    </article>
  );
}
