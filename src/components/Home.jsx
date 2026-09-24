"use client";
import { useRouter } from "next/navigation";
const categories = [
  {
    icon: "🔌",
    title: "Placas",
    description: "Arduino, ESP32, Raspberry Pi y más.",
  },
  {
    icon: "📡",
    title: "Sensores",
    description: "Sensores para medir, detectar y experimentar.",
  },
  {
    icon: "🖥️",
    title: "Displays",
    description: "Pantallas y soluciones de visualización.",
  },
  {
    icon: "⚙️",
    title: "Módulos",
    description: "Módulos listos para integrar en tus proyectos.",
  },
  {
    icon: "🔧",
    title: "Herramientas",
    description: "Equipamiento para trabajar con electrónica.",
  },
  {
    icon: "📐",
    title: "Instrumental",
    description: "Medición, diagnóstico y pruebas.",
  },
];
const benefits = [
  {
    icon: "⚡",
    title: "Todo en un solo lugar",
    description:
      "Componentes, herramientas e instrumental para tus proyectos electrónicos.",
  },
  {
    icon: "🎯",
    title: "Para cada proyecto",
    description:
      "Desde prototipos y aprendizaje hasta reparación y desarrollo.",
  },
  {
    icon: "🤝",
    title: "Asesoramiento",
    description:
      "Si no sabés qué necesitás, podemos ayudarte a encontrar la solución.",
  },
];
export default function Home() {
  const router = useRouter();
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
                Componentes · Herramientas · Instrumental
              </span>
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              La electrónica <br /> empieza con una
              <span className="text-orange-400">idea.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Encontrá todo lo que necesitás para crear, reparar y experimentar.
              Componentes y herramientas para llevar tus ideas del papel a la
              realidad.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => router.push("/products/")}
                className="rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Explorar productos
              </button>
              <button
                type="button"
                onClick={() => router.push("/services/")}
                className="rounded-xl border border-zinc-700 bg-zinc-900/70 px-7 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-orange-500/50 hover:text-white"
              >
                Conocé nuestros servicios
              </button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-zinc-800 pt-7">
              <div>
                <p className="text-2xl font-bold text-white">50+</p>
                <p className="mt-1 text-xs text-zinc-500">
                  Productos disponibles
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">10</p>
                <p className="mt-1 text-xs text-zinc-500"> Categorías </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="mt-1 text-xs text-zinc-500">
                  Orientado a proyectos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categorías */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Explorá nuestro catálogo
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Encontrá lo que necesitás.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => router.push("/products/")}
            className="w-fit text-sm font-semibold text-orange-400 transition hover:text-orange-300"
          >
            Ver todos los productos →
          </button>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category.title}
              type="button"
              onClick={() => router.push("/products/")}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-zinc-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 text-2xl transition group-hover:bg-orange-500/10">
                {category.icon}
              </div>
              <h3 className="mt-5 text-sm font-semibold text-white">
                {category.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-zinc-500">
                {category.description}
              </p>
            </button>
          ))}
        </div>
      </section>
      {/* Presentación */}
      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              ELECTRO TEC
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Más que componentes. <br />
              <span className="text-zinc-500">Soluciones para crear.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Trabajamos para que encontrar componentes electrónicos,
              herramientas e instrumental sea simple. Ya sea que estés empezando
              un proyecto, reparando un equipo o desarrollando una solución,
              queremos acompañarte.
            </p>
            <button
              type="button"
              onClick={() => router.push("/about/")}
              className="mt-7 rounded-xl border border-zinc-700 bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-500/50"
            >
              Conocé más sobre nosotros
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {benefits.map((benefit, index) => (
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
                También podemos ayudarte
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
                Reparación, diagnóstico, prototipado y mucho más.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                Si no estás buscando solamente un componente, conocé los
                servicios que ofrecemos para acompañar tus proyectos
                electrónicos.
              </p>
            </div>
            <button
              type="button"
              onClick={() => router.push("/services/")}
              className="rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Ver servicios
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
              ¿Tenés un proyecto?
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl">
              Hagamos que esa idea se convierta en realidad.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
              Contanos qué necesitás y te ayudamos a encontrar la solución
              adecuada.
            </p>
            <button
              type="button"
              onClick={() => router.push("/contact/")}
              className="mt-8 rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Contactarnos
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
