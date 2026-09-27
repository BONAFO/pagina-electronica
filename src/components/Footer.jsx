export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 text-lg font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-lg">
                ⚡
              </span>

              <span>
                ELECTRO <span className="text-orange-400">TEC</span>
              </span>
            </div>

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
              <a
                href="/"
                className="w-fit text-sm text-zinc-500 transition hover:text-orange-400"
              >
                Inicio
              </a>

              <a
                href="/products/"
                className="w-fit text-sm text-zinc-500 transition hover:text-orange-400"
              >
                Productos
              </a>

              <a
                href="/services/"
                className="w-fit text-sm text-zinc-500 transition hover:text-orange-400"
              >
                Servicios
              </a>

              <a
                href="/about/"
                className="w-fit text-sm text-zinc-500 transition hover:text-orange-400"
              >
                Nosotros
              </a>

              <a
                href="/contact/"
                className="w-fit text-sm text-zinc-500 transition hover:text-orange-400"
              >
                Contacto
              </a>
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
