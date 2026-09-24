"use client";
import BannerContainer from "../containers/BannerContainer";
import { useScreen } from "../context/ScreenContext";
export default function Main({ children }) {
  const { isMobile } = useScreen();

  return (
    <>
      {isMobile ? (
        <main className="mx-auto w-full px-3 py-4">
          <BannerContainer />
          {children}
        </main>
      ) : (
        <main className="w-full">
          <BannerContainer />
          <section className="mx-auto max-w-7xl px-4 py-16">{children}</section>
        </main>
      )}
    </>
  );
}
