import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enactus CUT Zimbabwe",
  description:
    "Empowering students through entrepreneurship, innovation and sustainable community impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
