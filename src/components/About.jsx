import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Sobre nosotros
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Electrónica para
            <span className="text-orange-400">
              crear, reparar y experimentar.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Somos una empresa especializada en componentes electrónicos,
            herramientas e instrumental para proyectos, reparación, prototipado
            y desarrollo.
          </p>
        </div>
      </section>
      {/* Presentación */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Nuestra empresa
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Todo lo que necesitás para llevar tus ideas a la práctica.
            </h2>
            <p className="mt-6 leading-7 text-zinc-400">
              En ELECTRO TEC buscamos ofrecer una selección de productos pensada
              para estudiantes, técnicos, profesionales, makers y personas que
              simplemente disfrutan trabajar con electrónica.
            </p>
            <p className="mt-4 leading-7 text-zinc-400">
              Contamos con componentes, placas de desarrollo, sensores, módulos,
              instrumental, herramientas y accesorios para acompañar cada etapa
              de un proyecto.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
              <span className="text-3xl">⚡</span>
              <h3 className="mt-4 font-semibold text-white"> Componentes </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Placas, sensores, módulos y componentes electrónicos.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
              <span className="text-3xl">🔧</span>
              <h3 className="mt-4 font-semibold text-white"> Herramientas </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Equipamiento para montaje, reparación y trabajo electrónico.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
              <span className="text-3xl">📐</span>
              <h3 className="mt-4 font-semibold text-white"> Instrumental </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Equipos para medición, pruebas y diagnóstico.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
              <span className="text-3xl">💡</span>
              <h3 className="mt-4 font-semibold text-white"> Proyectos </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Materiales para prototipos, aprendizaje y desarrollo.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Valores */}
      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Lo que nos importa
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Una forma simple de trabajar.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
                🎯
              </div>
              <h3 className="mt-5 text-lg font-semibold">
                Productos adecuados
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Buscamos ofrecer productos útiles para diferentes tipos de
                proyectos y necesidades.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
                🤝
              </div>
              <h3 className="mt-5 text-lg font-semibold">Atención cercana</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Queremos que consultar por un producto sea rápido, claro y
                sencillo.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
                🚀
              </div>
              <h3 className="mt-5 text-lg font-semibold">Siempre avanzando</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Incorporamos nuevas soluciones para acompañar la evolución de la
                tecnología y los proyectos.
              </p>
            </article>
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
                ¿Tenés un proyecto?
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Encontrá los productos que necesitás.
              </h2>
              <p className="mt-4 text-zinc-400">
                Explorá nuestro catálogo o contactanos para consultar por un
                producto.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => router.push("/products/")}
                className="rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Ver productos
              </button>
              <button
                type="button"
                onClick={() => router.push("/contact/")}
                className="rounded-xl border border-zinc-700 bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-orange-500/60 hover:text-white"
              >
                Contactarnos
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
