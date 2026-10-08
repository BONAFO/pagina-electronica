"use client";

import useNavbarHook from "../hooks/main/Navbar";

export default function Navbar() {
  const { isOpen, setIsOpen, pages, navigate, homePath, contactPath } =
    useNavbarHook();

  return (
    <nav className="absolute left-0 top-0 z-50 w-full">
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate(homePath, setIsOpen(false))}
            className="flex cursor-pointer items-center gap-2 text-lg font-bold text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-lg">
              ⚡
            </span>

            <span>
              ELECTRO <span className="text-orange-400">TEC</span>
            </span>
          </button>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {pages
              .filter((page) => page.name !== "contact" && page.inFoot)
              .map((page) => (
                <button
                  key={page.name}
                  type="button"
                  onClick={() => navigate(page.path, setIsOpen(false))}
                  className="cursor-pointer text-sm font-medium text-white/90 transition hover:text-orange-400"
                >
                  {page.slug}
                </button>
              ))}

            <button
              type="button"
              onClick={() => navigate(contactPath, setIsOpen(false))}
              className="cursor-pointer rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Consultar
            </button>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-sm md:hidden"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
          >
            <span className="text-2xl leading-none">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-4">
          {pages
            .filter((page) => page.name !== "contact" && page.inFoot)
            .map((page) => (
              <button
                key={page.name}
                type="button"
                onClick={() => navigate(page.path, setIsOpen(false))}
                className="cursor-pointer border-b border-white/10 py-4 text-left text-sm font-medium text-white transition hover:text-orange-400"
              >
                {page.slug}
              </button>
            ))}

          <button
            type="button"
            onClick={() => navigate(contactPath, setIsOpen(false))}
            className="mt-4 cursor-pointer rounded-xl bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            Consultar
          </button>
        </div>
      </div>
    </nav>
  );
}
