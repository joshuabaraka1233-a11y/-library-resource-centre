import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Library And Resource Centre | Nairobi",
    template: "%s | Library And Resource Centre",
  },
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
  openGraph: {
    title: "Library And Resource Centre | Nairobi",
    description:
      "A place for knowledge, reading and discovery along Ngong Road, Nairobi.",
    type: "website",
    locale: "en_KE",
  },
  robots: { index: true, follow: true },
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
