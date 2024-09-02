import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MortaComply: Simplified Mortgage Compliance Solutions",
  description:
    "Streamline your mortgage compliance process with MortaComply. Ensure audit readiness, minimize downtime, and enhance regulatory adherence with our innovative, easy-to-use platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
