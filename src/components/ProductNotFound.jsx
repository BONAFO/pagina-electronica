"use client";

import t from "../translations/Product"; // Importamos las traducciones
import useProductNotFoundHook from "../hooks/main/ProductNotFound";

export default function ProductNotFound() {
  const { homePath, navigate, productsPath } = useProductNotFoundHook();
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(249,115,22,0.12),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(249,115,22,0.06),transparent_30%)]" />

        {/* Decorative circles */}
        <div className="absolute right-[-180px] top-[15%] h-[400px] w-[400px] rounded-full border border-orange-500/10 sm:right-[-120px]" />

        <div className="absolute bottom-[-180px] left-[-180px] h-[400px] w-[400px] rounded-full border border-orange-500/10 sm:left-[-120px]" />

        {/* Content */}
        <div className="relative mx-auto w-full max-w-2xl text-center">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-3xl sm:h-20 sm:w-20 sm:text-4xl">
            🔎
          </div>

          {/* Eyebrow */}
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:mt-8 sm:text-sm sm:tracking-widest">
            {t.notFound.badge}
          </p>

          {/* Title */}
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {t.notFound.titlePrimary}
            <br className="hidden sm:block" />
            <span className="text-zinc-500">{t.notFound.titleHighlight}</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-zinc-400 sm:mt-6 sm:text-base sm:leading-7">
            {t.notFound.description}
          </p>

          {/* Actions */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => navigate(productsPath)}
              className="min-h-12 w-full cursor-pointer rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400 active:bg-orange-600 sm:w-auto"
            >
              {t.notFound.buttons.viewProducts}
            </button>

            <button
              type="button"
              onClick={() => navigate(homePath)}
              className="min-h-12 w-full cursor-pointer rounded-xl border border-zinc-700 bg-zinc-900/70 px-7 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-orange-500/50 hover:text-white active:bg-zinc-800 sm:w-auto"
            >
              {t.notFound.buttons.goHome}
            </button>
          </div>

          {/* Divider */}
          <div className="mx-auto mt-12 flex max-w-md items-center gap-4 sm:mt-14">
            <div className="h-px flex-1 bg-zinc-800" />

            <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600 sm:text-xs">
              {t.notFound.brandDivider}
            </span>

            <div className="h-px flex-1 bg-zinc-800" />
          </div>
        </div>
      </section>
    </main>
  );
}
