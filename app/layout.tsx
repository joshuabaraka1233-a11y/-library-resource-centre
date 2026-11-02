
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Library And Resource Centre | Nairobi",
  description:
    "Discover Library And Resource Centre along Ngong Road, Nairobi. Find visitor information, location and contact details.",
  keywords: [
    "Library",
    "Resource Centre",
    "Library Nairobi",
    "Ngong Road",
    "Reading",
    "Learning",
  ],
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
