"use client";
import Main from "../components/MainComponent";
import BannerContainer from "../containers/BannerContainer";
import { ScreenProvider } from "../context/ScreenContext";

export default function MainLayout({ children }) {
  return (
    <ScreenProvider>
      <BannerContainer></BannerContainer>
      {children}
    </ScreenProvider>
  );
}
