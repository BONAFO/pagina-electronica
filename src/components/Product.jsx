"use client";
import { useRouter } from "next/navigation";
export default function Product({ product }) {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/95">
        
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          
          <button
            type="button"
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-lg font-bold"
          >
            
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-lg">
              
              ⚡
            </span>
            <span>
              
              ELECTRO <span className="text-orange-400">TEC</span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => router.push("/products/")}
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-orange-500/60 hover:text-white"
          >
            
            ← Productos
          </button>
        </div>
      </header>
      {/* Producto */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-zinc-500">
          
          <button
            type="button"
            onClick={() => router.push("/")}
            className="transition hover:text-orange-400"
          >
            
            Inicio
          </button>
          <span className="mx-2">/</span>
          <button
            type="button"
            onClick={() => router.push("/products/")}
            className="transition hover:text-orange-400"
          >
            
            Productos
          </button>
          <span className="mx-2">/</span>
          <span className="text-zinc-400"> {product.name} </span>
        </div>
        {/* Card principal */}
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70 shadow-2xl shadow-black/30">
          
          <div className="grid lg:grid-cols-2">
            
            {/* Imagen */}
            <div className="relative flex min-h-[320px] items-center justify-center bg-zinc-950 p-8 sm:min-h-[450px] sm:p-12 lg:min-h-[600px]">
              
              <div className="absolute left-5 top-5">
                
                <span
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm ${product.stock ? "border-green-500/20 bg-green-500/10 text-green-400" : "border-red-500/20 bg-red-500/10 text-red-400"}`}
                >
                  
                  {product.stock ? "En stock" : "Sin stock"}
                </span>
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[420px] w-full max-w-[500px] object-contain transition duration-500 hover:scale-105"
              />
            </div>
            {/* Información */}
            <div className="flex flex-col border-t border-zinc-800 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              
              {/* Marca */}
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                
                {product.brand}
              </p>
              {/* Nombre */}
              <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                
                {product.name}
              </h1>
              {/* Separador */} <div className="my-7 h-px bg-zinc-800" />
              {/* Precio */}
              <div>
                
                <p className="text-sm text-zinc-500"> Precio </p>
                <p className="mt-1 text-4xl font-bold text-white sm:text-5xl">
                  
                  ${product.price.toLocaleString("es-AR")}
                </p>
              </div>
              {/* Stock */}
              <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
                
                <div className="flex items-center gap-3">
                  
                  <span
                    className={`h-3 w-3 rounded-full ${product.stock ? "bg-green-400 shadow-lg shadow-green-400/40" : "bg-red-400 shadow-lg shadow-red-400/40"}`}
                  />
                  <div>
                    
                    <p className="text-sm font-medium text-white">
                      
                      {product.stock
                        ? "Disponible"
                        : "Actualmente sin stock"}
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500">
                      
                      {product.stock
                        ? "Podés consultar por este producto."
                        : "Consultanos para conocer disponibilidad."}
                    </p>
                  </div>
                </div>
              </div>
              {/* Acciones */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-400"
                >
                  
                  Consultar producto
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/products/")}
                  className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3.5 font-semibold text-zinc-300 transition hover:border-orange-500/60 hover:text-white"
                >
                  
                  Ver productos
                </button>
              </div>
              {/* Información adicional */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
                  
                  <p className="text-xs text-zinc-500"> Marca </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    
                    {product.brand}
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
                  
                  <p className="text-xs text-zinc-500"> Producto </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    
                    #{product.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
