"use client";
import Footer from "../components/Footer";
import BannerContainer from "../containers/BannerContainer";
import { ScreenProvider } from "../context/ScreenContext";

export default function MainLayout({ children }) {
  return (
    <ScreenProvider>
      <BannerContainer></BannerContainer>
      {children}
      <Footer />
    </ScreenProvider>
  );
}
