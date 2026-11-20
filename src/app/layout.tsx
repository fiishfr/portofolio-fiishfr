import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Muhammad Luthfi Shofari | Mahasiswa Informatika UPN \"Veteran\" Yogyakarta",
    template: "%s | Muhammad Luthfi Shofari",
  },
  description:
    "Portofolio Muhammad Luthfi Shofari — Mahasiswa Informatika UPN \"Veteran\" Yogyakarta. Web Development, Rekayasa Perangkat Lunak, Desain UI/UX, dan Fotografi/Videografi.",
  keywords: [
    "Muhammad Luthfi Shofari",
    "Luthfi Shofari",
    "Muhammad Luthfi",
    "Mahasiswa Informatika UPN Veteran Yogyakarta",
    "Web Development",
    "Rekayasa Perangkat Lunak",
    "Desain UI/UX",
    "Fotografi",
    "Videografi",
  ],
  authors: [
    {
      name: "Muhammad Luthfi Shofari",
      url: "https://fishfr.my.id",
    },
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Muhammad Luthfi Shofari | Mahasiswa Informatika UPN \"Veteran\" Yogyakarta",
    description: "Portofolio Muhammad Luthfi Shofari — Mahasiswa Informatika UPN \"Veteran\" Yogyakarta. Web Development, Rekayasa Perangkat Lunak, Desain UI/UX, dan Fotografi/Videografi.",
    url: "https://fishfr.my.id",
    siteName: "Muhammad Luthfi Shofari",
    locale: "id_ID",
    type: "website",
  },

  verification: {
    google: "google-site-verification=nI8yq2aGEX8bKzdCQWOaYWMbRQ090KDHSpDd4IVY7U4",
  },
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
