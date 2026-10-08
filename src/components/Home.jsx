"use client";

import { useRef, useEffect } from "react";
import t from "../translations/Home";
import useRoutesHook from "../hooks/main/Routes";
import { useNavigate } from "../hooks/Navigation";
import useHomeHook from "../hooks/main/Home";

export default function Home() {
  const {
    productsPath,
    contactPath,
    servicesPath,
    aboutPath,
    navigate,
    carouselRef,
  } = useHomeHook();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative min-h-[720px] overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(249,115,22,0.16),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(249,115,22,0.07),transparent_30%)]" />

        <div className="absolute right-[-100px] top-[120px] h-[400px] w-[400px] rounded-full border border-orange-500/10" />

        <div className="absolute right-[-40px] top-[180px] h-[280px] w-[280px] rounded-full border border-orange-500/10" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-orange-400" />

              <span className="text-xs font-medium text-orange-300 sm:text-sm">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              {t.hero.titlePrimary} <br />
              empieza con una&nbsp;
              <span className="text-orange-400">{t.hero.titleHighlight}</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              {t.hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate(productsPath)}
                className="cursor-pointer rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                {t.hero.buttons.explore}
              </button>

              <button
                type="button"
                onClick={() => navigate(servicesPath)}
                className="cursor-pointer rounded-xl border border-zinc-700 bg-zinc-900/70 px-7 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-orange-500/50 hover:text-white"
              >
                {t.hero.buttons.services}
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-zinc-800 pt-7">
              <div>
                <p className="text-2xl font-bold text-white">
                  {t.hero.stats.productsCount}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  {t.hero.stats.productsLabel}
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  {t.hero.stats.categoriesCount}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  {t.hero.stats.categoriesLabel}
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  {t.hero.stats.orientedPercent}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  {t.hero.stats.orientedLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías (Carrusel de 1 en mobile) */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              {t.categoriesSection.badge}
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {t.categoriesSection.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => navigate(productsPath)}
            className="w-fit cursor-pointer text-sm font-semibold text-orange-400 transition hover:text-orange-300"
          >
            {t.categoriesSection.viewAll}
          </button>
        </div>

        {/* Carrusel Horizontal */}
        <div
          ref={carouselRef}
          className="mt-10 flex gap-4 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
        >
          {t.categoriesSection.items.map((category) => {
            const categorySlug = category.name
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/\s+/g, "-");

            const categoryUrl = `${productsPath}?category=${categorySlug}`;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => navigate(categoryUrl)}
                // w-[calc(100%-2.5rem)] -> 1 tarjeta exacta en mobile
                // sm:w-[calc(50%-0.75rem)] -> 2 tarjetas en tablets
                // lg:w-[calc(25%-0.75rem)] -> 4 tarjetas en desktop
                className="group shrink-0 snap-start w-[calc(100%-2.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-0.75rem)] cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-zinc-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 text-2xl transition group-hover:bg-orange-500/10">
                  {category.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500 line-clamp-2">
                  {category.description}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Presentación */}
      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              {t.presentationSection.badge}
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {t.presentationSection.titlePrimary} <br />
              <span className="text-zinc-500">
                {t.presentationSection.titleHighlight}
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              {t.presentationSection.description}
            </p>

            <button
              type="button"
              onClick={() => navigate(aboutPath)}
              className="mt-7 cursor-pointer rounded-xl border border-zinc-700 bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-500/50"
            >
              {t.presentationSection.button}
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {t.presentationSection.benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
                    {benefit.icon}
                  </div>

                  <div>
                    <span className="text-xs text-zinc-600">0{index + 1}</span>

                    <h3 className="font-semibold text-white">
                      {benefit.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-7 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                {t.servicesSection.badge}
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
                {t.servicesSection.title}
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                {t.servicesSection.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate(servicesPath)}
              className="cursor-pointer rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              {t.servicesSection.button}
            </button>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-orange-500/30 bg-orange-500/10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative px-7 py-14 text-center sm:px-12 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              {t.ctaSection.badge}
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl">
              {t.ctaSection.title}
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
              {t.ctaSection.description}
            </p>

            <button
              type="button"
              onClick={() => navigate(contactPath)}
              className="mt-8 cursor-pointer rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              {t.ctaSection.button}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
