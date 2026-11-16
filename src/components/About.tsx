"use client";

import {
  MapPin,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="tentang" className="py-16 sm:py-24 border-t-2 border-black bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          tag="// 01. PROFIL"
          title="TENTANG SAYA"
          desc="Perjalanan akademis di UPN 'Veteran' Yogyakarta, ketertarikan pada rekayasa web, dan eksplorasi visual melalui lensa kamera."
          tagBg="bg-yellow-300"
          sideBadge="BIOGRAFI"
        />

        {/* Cohesive Bento Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Creative Bio (Span 2 cols on lg) */}
          <div className="border-2 border-black bg-[#FAF9F5] p-6 sm:p-7 neo-shadow lg:col-span-2">
            <div className="flex items-center justify-between border-b border-black/20 pb-3">
              <span className="border border-black bg-black px-2 py-0.5 font-mono text-xs font-bold text-yellow-300">
                PROFIL LENGKAP
              </span>
              <span className="font-mono text-xs font-bold text-black/60">
                INFORMATIKA UPNVY
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-black leading-snug text-black sm:text-3xl">
              Memadukan Presisi Logika Komputasi dengan Kekuatan Visual Lensa.
            </h3>

            <div className="mt-3.5 space-y-3 font-sans text-sm sm:text-base leading-relaxed text-black/80">
              <p>
                Saya <strong>Muhammad Luthfi Shofari</strong>, mahasiswa <strong>S1 Informatika di Universitas Pembangunan Nasional &quot;Veteran&quot; Yogyakarta</strong>. Ketertarikan saya berkembang di persimpangan dua dunia: <strong>rekayasa perangkat lunak</strong> yang sistematis dan <strong>karya visual (fotografi &amp; videografi)</strong> yang ekspresif.
              </p>
              <p>
                Bagi saya, menulis baris kode dan membidik komposisi kamera memiliki esensi yang sama: ketelitian detail, pemecahan masalah yang kreatif, dan kemampuan menyampaikan cerita secara jernih serta berkesan bagi audiens.
              </p>
            </div>

            {/* Tags Strip */}
            <div className="mt-5 flex flex-wrap gap-2 pt-2 border-t border-black/15">
              {[
                "Informatics_Engineering",
                "Photography",
                "Cinematography",
                "UPNVY_2026",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-black bg-white px-2.5 py-0.5 font-mono text-xs font-semibold text-black neo-shadow-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Lokasi & Kanvas Visual */}
          <div className="border-2 border-black bg-[#FAF9F5] p-6 neo-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-black/20 pb-3">
                <span className="font-mono text-xs font-bold text-black/70">
                  {"// DOMISILI & KANVAS"}
                </span>
                <MapPin className="size-4 text-red-600" />
              </div>

              <div className="mt-4">
                <span className="border border-black bg-white px-2 py-0.5 font-mono text-[11px] font-bold text-black">
                  INDONESIA 🇮🇩
                </span>
                <h4 className="mt-2 text-2xl font-black text-black">Yogyakarta</h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-black/75">
                  Kota pelajar yang kaya budaya dan inspirasi visual. Dari koridor kampus Babarsari hingga sudut hangat jalanan Titik Nol.
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-black/20 pt-3 font-mono text-xs text-black/70">
              <p className="font-bold text-black">Kampus:</p>
              <p className="mt-0.5">UPN &quot;Veteran&quot; Yogyakarta, Condongcatur / Babarsari, Sleman.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
