import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3F4F3D",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Atendimento psicológico humanizado para adultos, adolescentes e famílias, no Centro de Novo Hamburgo. Psicoterapia individual, avaliação psicológica e suporte especializado em TEA e TDAH.";

export const metadata: Metadata = {
  title: "Clínica Psicologar | Psicologia em Novo Hamburgo - RS",
  description,
  openGraph: {
    title: "Clínica Psicologar | Psicologia em Novo Hamburgo - RS",
    description,
    locale: "pt_BR",
    type: "website",
    siteName: "Clínica Psicologar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Psicologar | Psicologia em Novo Hamburgo - RS",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
