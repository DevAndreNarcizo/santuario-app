import type { Metadata } from "next";
import { Inter, Merriweather, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configuração da fonte do corpo
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // Usaremos a variável no tailwind.config.ts
});

// Configuração da fonte dos títulos
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Santuário da Fé - Um lugar de propósito e transformação",
  description: "Igreja Santuário da Fé: Conectando pessoas a Deus, umas às outras e ao seu propósito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${merriweather.variable}`}>
      <body className="font-sans bg-background-textured">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}