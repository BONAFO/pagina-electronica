"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const slides = [
  {
    image:
      "https://lahorestore.pk/cdn/shop/articles/EssentialElectronicsComponentsforEngineeringStudents3215image-1763712697730_64eeffde-d379-4ad3-bb4d-a22190d9428d.png?v=1765629081",
    title: "Todo para tu electrónica",
    description: "Componentes, herramientas e instrumental para tus proyectos.",
  },
  {
    image:
      "https://http2.mlstatic.com/D_Q_NP_736871-MLA108156073409_032026-O.webp",
    title: "Componentes para tus proyectos",
    description: "Sensores, módulos, protoboards y mucho más.",
  },
  {
    image:
      "https://dfimg.dfrobot.com/enshop/image/cache3/Blog/13394/ABX00083_09.jpg.jpg",
    title: "Medí. Probá. Creá.",
    description: "Todo lo necesario para desarrollar y experimentar.",
  },
  {
    image: "https://i.imgur.com/SpbAPQd.jpg",
    title: "Herramientas para trabajar",
    description: "Soldadura, medición, reparación y montaje electrónico.",
  },
  {
    image:
      "https://www.babyfriendlyair.com/images/en/technology/many_sensors.jpg",
    title: "Llevá tus ideas a la práctica",
    description: "Sensores, placas y componentes para tus proyectos.",
  },
];
export default function Banner() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="relative h-[430px] w-full overflow-hidden sm:h-[520px] lg:h-[650px]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        {slides.map((item, index) => (
          <div
            key={item.image}
            className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          </div>
        ))}
      </div>
      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-3xl text-white">
            <span className="mb-4 inline-block rounded-full border border-orange-400/40 bg-orange-400/10 px-3 py-1 text-xs font-medium text-orange-300 backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-sm">
              Electrónica & tecnología
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              {slide.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-200 sm:mt-6 sm:text-lg sm:leading-7 lg:text-xl">
              {slide.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <button
                type="button"
                onClick={() => router.push("/products/")}
                className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400 sm:px-7 sm:py-3.5"
              >
                Ver productos
              </button>
              <button
                type="button"
                onClick={() => router.push("/contact/")}
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:px-7 sm:py-3.5"
              >
                Contactanos
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* PREVIOUS - DESKTOP */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/60 sm:flex sm:left-5 sm:h-11 sm:w-11 sm:text-2xl"
        aria-label="Slide anterior"
      >
        ‹
      </button>
      {/* NEXT - DESKTOP */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/60 sm:flex sm:right-5 sm:h-11 sm:w-11 sm:text-2xl"
        aria-label="Slide siguiente"
      >
        ›
      </button>
      {/* CONTROLES MOBILE */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4 sm:hidden">
        <button
          type="button"
          onClick={prevSlide}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/60"
          aria-label="Slide anterior"
        >
          ‹
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Ir al slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-orange-400" : "w-2 bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={nextSlide}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/60"
          aria-label="Slide siguiente"
        >
          ›
        </button>
      </div>
      {/* DOTS DESKTOP */}
      <div className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 sm:flex sm:bottom-8 sm:gap-2.5">
        {slides.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Ir al slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-orange-400" : "w-2 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  );
}
