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
  title: "CompraEmFoco | Compare preços e economize",
  description:
    "Compare preços, encontre promoções e economize nas melhores lojas do Brasil.",
  keywords: [
    "ofertas",
    "promoções",
    "Mercado Livre",
    "Shopee",
    "comparador de preços",
    "CompraEmFoco",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
