"use client";
import { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado:", form);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload();
  };
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 lg:px-10 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Contacto
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Estamos para ayudarte con tu próximo
            <span className="text-orange-400">proyecto.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            ¿Buscás un producto, necesitás asesoramiento o querés hacer una
            consulta? Ponete en contacto con nosotros.
          </p>
        </div>
      </section>
      {/* Contenido */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Información */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                Hablemos
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                ¿Cómo podemos ayudarte?
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Escribinos y te responderemos con la información que necesites.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
                  📞
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Teléfono
                  </p>
                  <p className="mt-1 font-medium text-white">
                    +54 9 11 0000-0000
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
                  ✉️
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Email
                  </p>
                  <p className="mt-1 font-medium text-white">
                    contacto@electrotec.com
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
                  📍
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Ubicación
                  </p>
                  <p className="mt-1 font-medium text-white">
                    Centro de la ciudad
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6 sm:p-7">
              <p className="text-sm font-semibold text-orange-400">
                Horarios de atención
              </p>
              <div className="mt-4 space-y-2 text-sm text-zinc-400">
                <div className="flex justify-between gap-4">
                  <span>Lunes a viernes</span>
                  <span className="text-zinc-300">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Sábados</span>
                  <span className="text-zinc-300">09:00 - 13:00</span>
                </div>
              </div>
            </div>
          </div>
          {/* Formulario */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8 lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                Enviá tu consulta
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Contanos qué necesitás.
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Completá el formulario y nos pondremos en contacto con vos.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-500/60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-500/60"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+54 9 11 0000-0000"
                  className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-500/60"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Consulta
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  rows={7}
                  className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-500/60"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-950 p-7 text-center shadow-2xl shadow-black/50">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-3xl">
              ✓
            </div>
            <h2 className="mt-5 text-2xl font-bold text-white">
              ¡Consulta enviada!
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Recibimos tu consulta correctamente. Nos pondremos en contacto con
              vos lo antes posible.
            </p>
            <button
              type="button"
              onClick={handleCloseModal}
              className="mt-7 w-full rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
