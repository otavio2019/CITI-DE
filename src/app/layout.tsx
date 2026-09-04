import type { Metadata } from "next";
import type { ReactNode } from "react";
import {  Joan, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const joan = Joan({
    variable: "--font-joan",
    subsets: ["latin"],
    weight: "400"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portal CiTI-DE | Patos - PB",
  description:
    "Serviços, programas e informações para impulsionar o desenvolvimento de Patos.",
  icons: {
    icon: "/icons/logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
       className={`${joan.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}