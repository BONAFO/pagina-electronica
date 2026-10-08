"use client";

import t from "../translations/Services"; // Importamos las traducciones
import useServicesHook from "../hooks/main/Services";

export default function Services() {
  const { contactPath, navigate } = useServicesHook();
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
            <span className="text-orange-400">{t.hero.titleHighlight}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.list.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-zinc-900 sm:p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-2xl transition duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/20">
                {service.icon}
              </div>

              <h2 className="mt-6 text-xl font-bold">{service.title}</h2>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {service.description}
              </p>

              <div className="mt-6 h-px bg-zinc-800 transition duration-300 group-hover:bg-orange-500/30" />

              <button
                type="button"
                onClick={() => navigate(contactPath)}
                className="mt-5 cursor-pointer text-sm font-semibold text-orange-400 transition hover:text-orange-300"
              >
                {t.serviceCta}
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              {t.processSection.badge}
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {t.processSection.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-500 sm:text-base">
              {t.processSection.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.processSection.steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <span className="text-4xl font-bold text-orange-500/30">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {step.description}
                </p>
              </div>
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

              <p className="mt-4 text-zinc-400">{t.ctaBox.description}</p>
            </div>

            <button
              type="button"
              onClick={() => navigate(contactPath)}
              className="shrink-0 cursor-pointer rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              {t.ctaBox.button}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
