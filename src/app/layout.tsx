import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = { title: "Boarding Pass" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans flex min-h-screen items-center justify-center bg-[var(--bp-page-bg)] p-4`}
      >
        {children}
      </body>
    </html>
  );
}
