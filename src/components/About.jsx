"use client";

import useAboutHook from "../hooks/main/About";
import t from "../translations/About"; // Importamos las traducciones

export default function About() {
  const { contactPath, productsPath, navigate } = useAboutHook();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            {t.hero.badge}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {t.hero.titlePrimary}
            <span className="text-orange-400">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Presentación */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              {t.companySection.badge}
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {t.companySection.title}
            </h2>

            <p className="mt-6 leading-7 text-zinc-400">
              {t.companySection.paragraph1}
            </p>

            <p className="mt-4 leading-7 text-zinc-400">
              {t.companySection.paragraph2}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {t.companySection.cards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
                <span className="text-3xl">{card.icon}</span>

                <h3 className="mt-4 font-semibold text-white">{card.title}</h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              {t.valuesSection.badge}
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {t.valuesSection.title}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.valuesSection.items.map((item) => (
              <article key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-orange-500/10 p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                {t.ctaBox.badge}
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                {t.ctaBox.title}
              </h2>

              <p className="mt-4 text-zinc-400">
                {t.ctaBox.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate(productsPath)}
                className="cursor-pointer rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                {t.ctaBox.buttons.products}
              </button>

              <button
                type="button"
                onClick={() => navigate(contactPath)}
                className="cursor-pointer rounded-xl border border-zinc-700 bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-orange-500/60 hover:text-white"
              >
                {t.ctaBox.buttons.contact}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}