import "./globals.css";

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
      lang="pt-BR"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
