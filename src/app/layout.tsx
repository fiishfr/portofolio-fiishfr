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
    google: "google-site-verification=6g0k1r8J7X2x3z5y6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2",
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
