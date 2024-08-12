import { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/widgets/header";
import Nosotros from "@/components/widgets/nosotros/Nosotros";
import CarouselApp from "@/components/widgets/carouselCards/CarrouselApp";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dulces SK",
  description: "El toque dulce para tus celebraciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#ACE1E8] text-gray-400 ${montserrat.className}`}>{children}
      <Header/>
      <Nosotros/>
      <CarouselApp/>
      
      </body>
    </html>
  );
}
