import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Luthfi Shofari | Mahasiswa Informatika UPN \"Veteran\" Yogyakarta",
  description:
    "Portofolio Neobrutalisme Muhammad Luthfi Shofari — Mahasiswa Informatika UPN \"Veteran\" Yogyakarta. Web Development, Rekayasa Perangkat Lunak, dan Desain UI/UX.",
};

export const viewport: Viewport = {
  themeColor: "#FDE047",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
