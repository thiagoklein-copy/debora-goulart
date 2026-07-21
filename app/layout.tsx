import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  /* CONFIRMAR com print real da identidade visual antes de finalizar */
  themeColor: "#6B4E8E",
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

const title = "Psicóloga Greice Berlitz | TCC em Novo Hamburgo - RS";

const description =
  "Psicóloga especialista em Terapia Cognitivo-Comportamental, com 16 anos de experiência no tratamento de ansiedade, pânico, depressão e transtornos alimentares. Atendimento em Novo Hamburgo - RS.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    siteName: "Psicóloga Greice Berlitz",
  },
  twitter: {
    card: "summary_large_image",
    title,
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
