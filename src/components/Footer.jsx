
"use client";

import { useRouter } from "next/navigation";
import { useNavigation } from "../context/NavigationContext";

export default function Footer() {
  const router = useRouter();
  const { pages } = useNavigation();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex cursor-pointer items-center gap-2 text-lg font-bold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-lg">
                ⚡
              </span>

              <span>
                ELECTRO <span className="text-orange-400">TEC</span>
              </span>
            </button>

            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
              Componentes, herramientas e instrumental para tus proyectos
              electrónicos.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {pages.map((page) => (
                <button
                  key={page.name}
                  type="button"
                  onClick={() => router.push(page.path)}
                  className="w-fit cursor-pointer text-sm text-zinc-500 transition hover:text-orange-400"
                >
                  {page.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>

            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <p>📍 Centro de la ciudad</p>
              <p>📞 +54 9 0000 0000</p>
              <p>✉️ contacto@electrotec.com</p>
              <p>🕐 Lun - Vie · 9:00 a 18:00</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6">
          <p className="text-center text-xs text-zinc-600">
            © 2026 ELECTRO TEC. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

