"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-5 text-white">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500 text-4xl">
          ⚡
        </div>

        <p className="mt-8 text-7xl font-bold tracking-tight text-orange-400">
          404
        </p>

        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
          Página no encontrada
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          La página que estás buscando no existe o fue movida.
        </p>

        <button
          type="button"
          onClick={() => router.push("/")}
          className="mt-8 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
        >
          Volver al inicio
        </button>
      </div>
    </main>
  );
}

