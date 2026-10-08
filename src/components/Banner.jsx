"use client";
import t from "../translations/Banner";
import useBannerHook from "../hooks/main/Banner";

export default function Banner() {
  const {
    contactPath,
    current,
    navigate,
    nextSlide,
    prevSlide,
    productsPath,
    setCurrent,
    slide,
    
  } = useBannerHook();

  return (
    <section className="relative h-[430px] w-full overflow-hidden sm:h-[520px] lg:h-[650px]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        {t.slides.map((item, index) => (
          <div
            key={item.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
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
              {t.badge}
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
                onClick={() => navigate(productsPath)}
                className="cursor-pointer rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400 sm:px-7 sm:py-3.5"
              >
                {t.buttons.products}
              </button>

              <button
                type="button"
                onClick={() => navigate(contactPath)}
                className="cursor-pointer rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:px-7 sm:py-3.5"
              >
                {t.buttons.contact}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PREVIOUS - DESKTOP */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/60 sm:flex sm:left-5 sm:h-11 sm:w-11 sm:text-2xl"
        aria-label={t.ariaLabels.prevSlide}
      >
        ‹
      </button>

      {/* NEXT - DESKTOP */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/60 sm:flex sm:right-5 sm:h-11 sm:w-11 sm:text-2xl"
        aria-label={t.ariaLabels.nextSlide}
      >
        ›
      </button>

      {/* CONTROLES MOBILE */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4 sm:hidden">
        <button
          type="button"
          onClick={prevSlide}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/60"
          aria-label={t.ariaLabels.prevSlide}
        >
          ‹
        </button>

        <div className="flex items-center gap-2">
          {t.slides.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={t.ariaLabels.goToSlide(index + 1)}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-orange-400"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white backdrop-blur-sm transition hover:bg-black/60"
          aria-label={t.ariaLabels.nextSlide}
        >
          ›
        </button>
      </div>

      {/* DOTS DESKTOP */}
      <div className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 sm:flex sm:bottom-8 sm:gap-2.5">
        {t.slides.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={t.ariaLabels.goToSlide(index + 1)}
            className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-orange-400"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
