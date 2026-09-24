"use client";
import { useRouter } from "next/navigation";
const services = [
  {
    icon: "🔧",
    title: "Reparación electrónica",
    description:
      "Diagnóstico y reparación de equipos y circuitos electrónicos, buscando identificar la causa de la falla y encontrar una solución.",
  },
  {
    icon: "📐",
    title: "Medición y diagnóstico",
    description:
      "Medición de señales, tensiones y componentes utilizando instrumental adecuado para detectar problemas y verificar circuitos.",
  },
  {
    icon: "🧪",
    title: "Prototipado",
    description:
      "Desarrollo y prueba de prototipos utilizando placas, sensores, módulos y diferentes componentes electrónicos.",
  },
  {
    icon: "🔥",
    title: "Soldadura y montaje",
    description:
      "Trabajos de soldadura, montaje y reparación de placas y componentes electrónicos.",
  },
  {
    icon: "💡",
    title: "Asesoramiento técnico",
    description:
      "Orientación para seleccionar componentes, herramientas e instrumental adecuados para cada proyecto.",
  },
  {
    icon: "⚙️",
    title: "Desarrollo de proyectos",
    description:
      "Soluciones electrónicas adaptadas a las necesidades de cada proyecto, desde la idea inicial hasta las pruebas.",
  },
];

export default function Services() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Servicios
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Soluciones para llevar tus proyectos de la
            <span className="text-orange-400">idea a la práctica.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Además de componentes y herramientas, ofrecemos soluciones y
            asesoramiento para ayudarte a desarrollar, reparar y mejorar tus
            proyectos electrónicos.
          </p>
        </div>
      </section>
      {/* Servicios */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-zinc-900 sm:p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-2xl transition duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/20">
                {service.icon}
              </div>
              <h2 className="mt-6 text-xl font-bold"> {service.title} </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {service.description}
              </p>
              <div className="mt-6 h-px bg-zinc-800 transition duration-300 group-hover:bg-orange-500/30" />
              <button
                type="button"
                onClick={() => router.push("/contact/")}
                className="mt-5 text-sm font-semibold text-orange-400 transition hover:text-orange-300"
              >
                Consultar servicio →
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
              Cómo trabajamos
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Un proceso simple.
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-500 sm:text-base">
              Desde la primera consulta hasta la solución, buscamos mantener el
              proceso claro y directo.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <span className="text-4xl font-bold text-orange-500/30">01</span>
              <h3 className="mt-4 text-lg font-semibold"> Nos contás </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Explicanos qué necesitás, qué problema tenés o qué proyecto
                querés realizar.
              </p>
            </div>
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <span className="text-4xl font-bold text-orange-500/30">02</span>
              <h3 className="mt-4 text-lg font-semibold"> Analizamos </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Evaluamos la necesidad y buscamos los componentes, herramientas
                o solución más adecuada.
              </p>
            </div>
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <span className="text-4xl font-bold text-orange-500/30">03</span>
              <h3 className="mt-4 text-lg font-semibold">
                Lo hacemos realidad
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Avanzamos con la solución y te acompañamos durante el proceso.
              </p>
            </div>
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
                ¿Necesitás ayuda?
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Contanos qué proyecto tenés en mente.
              </h2>
              <p className="mt-4 text-zinc-400">
                Podemos ayudarte a encontrar los componentes y la solución
                adecuada para llevarlo adelante.
              </p>
            </div>
            <button
              type="button"
              onClick={() => router.push("/contact/")}
              className="shrink-0 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Contactarnos
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
