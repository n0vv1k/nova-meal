import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVA MEAL",
  description: "Современная доставка здорового питания",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}