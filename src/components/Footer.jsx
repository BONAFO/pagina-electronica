"use client";

import t from "../translations/Footer"; // Importamos las traducciones
import useFooterHook from "../hooks/main/Footer";

export default function Footer() {
  const { homePath, navigate, pages } = useFooterHook();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <button
              type="button"
              onClick={() => navigate(homePath)}
              className="flex cursor-pointer items-center gap-2 text-lg font-bold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-lg">
                ⚡
              </span>

              <span>
                {t.brand.nameFirst}
                <span className="text-orange-400">{t.brand.nameHighlight}</span>
              </span>
            </button>

            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
              {t.brand.description}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.navigation.title}
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {pages
                .filter((page) => page.inFoot)
                .map((page) => (
                  <button
                    key={page.name}
                    type="button"
                    onClick={() => navigate(page.path)}
                    className="w-fit cursor-pointer text-sm text-zinc-500 transition hover:text-orange-400"
                  >
                    {page.slug}
                  </button>
                ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.contact.title}
            </h3>

            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <p>{t.contact.location}</p>
              <p>{t.contact.phone}</p>
              <p>{t.contact.email}</p>
              <p>{t.contact.schedule}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6">
          <p className="text-center text-xs text-zinc-600">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
