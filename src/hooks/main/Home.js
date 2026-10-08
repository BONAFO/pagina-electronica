import { useEffect, useRef } from "react";
import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";

export default function useHomeHook() {
  const { productsPath, contactPath, servicesPath, aboutPath } =
    useRoutesHook();
  const { navigate } = useNavigate();

  const carouselRef = useRef(null);

  // Efecto para el movimiento automático optimizado
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let intervalId;

    const startAutoplay = () => {
      intervalId = setInterval(() => {
        if (!carousel) return;

        // Si llega al final del scroll, vuelve al principio, sino avanza exactamente el ancho visible
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
        }
      }, 3500); // 3.5 segundos por tarjeta
    };

    startAutoplay();

    // Pausar en Desktop (Mouse)
    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => startAutoplay();

    // Pausar en Mobile (Tacto) cuando el usuario interactúa
    const handleTouchStart = () => clearInterval(intervalId);
    const handleTouchEnd = () => {
      setTimeout(startAutoplay, 5000);
    };

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);
    carousel.addEventListener("touchstart", handleTouchStart, { passive: true });
    carousel.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      clearInterval(intervalId);
      if (carousel) {
        carousel.removeEventListener("mouseenter", handleMouseEnter);
        carousel.removeEventListener("mouseleave", handleMouseLeave);
        carousel.removeEventListener("touchstart", handleTouchStart);
        carousel.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);
  return {
    productsPath, contactPath, servicesPath, aboutPath,
    navigate,
    carouselRef,
  
  }
}