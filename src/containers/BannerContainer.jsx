"use client";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { useScreen } from "../context/ScreenContext";

export default function BannerContainer() {
    const { isMobile } = useScreen();
  
  return (
    <>
      {isMobile ? (
        <main className="mx-auto w-full px-3 py-4">
          <Navbar />
          <Banner />
        </main>
      ) : (
        <main className="w-full">
          <Navbar />
          <Banner />
        </main>
      )}
    </>
  );
}
