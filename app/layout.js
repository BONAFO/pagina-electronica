
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ELECTRO TEC | Electrónica y Componentes",
  description:
    "Componentes electrónicos, herramientas e instrumental para proyectos de electrónica.",

  openGraph: {
    title: "ELECTRO TEC | Electrónica y Componentes",
    description:
      "Componentes electrónicos, herramientas e instrumental para proyectos de electrónica.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

