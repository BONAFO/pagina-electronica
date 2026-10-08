import { useEffect, useState } from "react";
import { useNavigate } from "../Navigation";
import useRoutesHook from "./Routes";
import t from "../../translations/Banner";

export default function useBannerHook() {

    const [current, setCurrent] = useState(0);

    const { productsPath, contactPath } = useRoutesHook();
    const { navigate } = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % t.slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % t.slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + t.slides.length) % t.slides.length);
    };

    const slide = t.slides[current];

    return {
        current,
        setCurrent,
        productsPath,
        contactPath,
        navigate,
        nextSlide,
        prevSlide,
        slide,

    }
}