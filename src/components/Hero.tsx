"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  GraduationCap,
  Mail,
  Github,
  MapPin,
  CheckCircle2,
  Copy,
  Camera,
  Code2,
  UserRound,
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState<"profile" | "dev" | "visual">("profile");
  const [profilePhotoMissing, setProfilePhotoMissing] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("luthfishofari@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Prominent Student & Location Tag */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-2 border-2 border-black bg-yellow-300 px-3 py-1 font-mono text-xs font-bold text-black neo-shadow-sm">
            <GraduationCap className="size-3.5 shrink-0" />
            <span>Mahasiswa Informatika — UPN &quot;Veteran&quot; Yogyakarta</span>
          </div>

          <div className="inline-flex items-center gap-1.5 border-2 border-black bg-white px-2.5 py-1 font-mono text-xs font-medium text-black neo-shadow-sm">
            <MapPin className="size-3 text-red-600" />
            <span>Yogyakarta, ID</span>
          </div>

        </div>

        {/* Main Grid: Headline & Profile Showcase */}
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Bold Headline & Overview */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-black/70 uppercase tracking-widest">
              <span>{"// KODE × LENSA"}</span>
              <span className="text-black/30">&bull;</span>
              <span className="text-emerald-700">TERBUKA KOLABORASI</span>
            </div>

            <h1 className="mt-2 max-w-full text-3xl font-black leading-[1.05] tracking-tight text-black sm:text-6xl md:text-7xl">
              Halo! Saya <br />
              <span className="relative mt-2 inline-block max-w-full break-words border-3 border-black bg-yellow-300 px-3 py-0.5 text-black neo-shadow">
                Muhammad Luthfi Shofari
              </span>
            </h1>

            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed font-medium text-black/80 sm:text-lg">
              Mahasiswa Informatika di <strong>UPN &quot;Veteran&quot; Yogyakarta</strong> yang menggabungkan ketelitian <strong>rekayasa web modern</strong> dengan kepekaan bercerita lewat <strong>fotografi &amp; videografi sinematik</strong>.
            </p>

            {/* Chunky CTA Buttons with Snappy Press Effect */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#karya"
                className="neo-btn-lg flex items-center gap-2 bg-yellow-300 px-5 py-3 font-display text-sm sm:text-base font-black text-black"
              >
                <span>Karya Web</span>
                <ArrowDownRight className="size-4 stroke-[2.5]" />
              </a>

              <a
                href="#visual"
                className="neo-btn-lg flex items-center gap-2 bg-pink-400 px-5 py-3 font-display text-sm sm:text-base font-black text-black"
              >
                <Camera className="size-4" />
                <span>Karya Visual</span>
              </a>

              <a
                href="#kontak"
                className="neo-btn-lg flex items-center gap-2 bg-white px-5 py-3 font-display text-sm sm:text-base font-black text-black"
              >
                <span>Hubungi Saya</span>
                <Mail className="size-4 stroke-[2.5]" />
              </a>

              <a
                href="https://github.com/fiishfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Lihat Profil GitHub"
                className="neo-btn grid size-11 place-items-center bg-white text-black hover:bg-yellow-100"
                title="Profil GitHub"
              >
                <Github className="size-5" />
              </a>
            </div>

            {/* Quick Email Pill */}
            <div className="mt-6 flex items-center gap-2.5 font-mono text-xs">
              <span className="font-bold text-black/60">Surel:</span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 border border-black bg-white px-2.5 py-1 font-bold text-black neo-shadow-sm transition-all hover:bg-yellow-100"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="size-3 text-emerald-600" />
                    <span className="text-emerald-700">Tersalin ke clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3" />
                    <span>luthfishofari@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Facet Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Card */}
              <div className="border-3 border-black bg-white neo-shadow-lg">
                {/* Header Bar with Tabs */}
                <div className="flex items-center justify-between border-b-2 border-black bg-yellow-300 px-3 pt-2">
                  <div className="flex items-center gap-1.5 pb-2">
                    <span className="size-2.5 rounded-full border border-black bg-red-400" />
                    <span className="size-2.5 rounded-full border border-black bg-yellow-400" />
                    <span className="size-2.5 rounded-full border border-black bg-emerald-400" />
                  </div>

                  {/* Tab Selector */}
                  <div className="flex items-center gap-1 font-mono text-xs font-bold">
                    <button
                      onClick={() => setTab("profile")}
                      className={`flex items-center gap-1.5 border-t-2 border-x-2 border-black px-2.5 py-1 transition-all ${
                        tab === "profile"
                          ? "z-10 -mb-[2px] bg-white pb-1.5 text-black"
                          : "bg-yellow-200/80 text-black/70 hover:bg-white/60"
                      }`}
                    >
                      <UserRound className="size-3" />
                      <span>Profil</span>
                    </button>
                    <button
                      onClick={() => setTab("dev")}
                      className={`flex items-center gap-1.5 border-t-2 border-x-2 border-black px-2.5 py-1 transition-all ${
                        tab === "dev"
                          ? "bg-white text-black -mb-[2px] pb-1.5 z-10"
                          : "bg-yellow-200/80 text-black/70 hover:bg-white/60"
                      }`}
                    >
                      <Code2 className="size-3" />
                      <span>Dev</span>
                    </button>
                    <button
                      onClick={() => setTab("visual")}
                      className={`flex items-center gap-1.5 border-t-2 border-x-2 border-black px-2.5 py-1 transition-all ${
                        tab === "visual"
                          ? "bg-white text-black -mb-[2px] pb-1.5 z-10"
                          : "bg-yellow-200/80 text-black/70 hover:bg-white/60"
                      }`}
                    >
                      <Camera className="size-3" />
                      <span>Visual</span>
                    </button>
                  </div>
                </div>

                {/* Content Details */}
                <div className="h-100 p-5 font-mono text-xs leading-relaxed text-black">
                  {tab === "profile" ? (
                    <div className="relative flex h-80 items-center justify-center overflow-hidden border-2 border-black bg-[#d9dcda] text-center">
                      {!profilePhotoMissing && (
                        <img
                          src="/profile.jpg"
                          alt="Foto profil Muhammad Luthfi Shofari"
                          loading="eager"
                          onError={() => setProfilePhotoMissing(true)}
                          className="absolute inset-0 size-full object-cover object-[center_40%]"
                        />
                      )}

                      {profilePhotoMissing && (
                        <div className="relative z-10 flex flex-col items-center px-5 py-6">
                          <div className="grid size-16 place-items-center border-2 border-black bg-pink-300 neo-shadow-sm">
                            <Camera className="size-8 text-black" />
                          </div>
                          <p className="mt-4 font-mono text-sm font-black uppercase text-black">
                            Foto Profil
                          </p>
                          <p className="mt-1 max-w-xs font-mono text-[10px] leading-relaxed text-black/60">
                            Tambahkan foto kamu di{" "}
                            <code className="font-bold text-black">public/profile.jpg</code>
                          </p>
                        </div>
                      )}
                    </div>
                  ) : tab === "dev" ? (
                    <div>
                      <div className="space-y-2 border-b border-black/20 pb-3.5">
                        <div className="flex justify-between">
                          <span className="text-black/60">Nama:</span>
                          <span className="font-bold">Muhammad Luthfi Shofari</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-black/60">Prodi:</span>
                          <span className="font-bold">S1 Informatika UPNVY</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-black/60">Fokus:</span>
                          <span className="font-bold">Full-Stack Web &amp; UI/UX</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-black/60">Lokasi:</span>
                          <span className="font-bold">Yogyakarta, ID</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="space-y-2 border-b border-black/20 pb-3.5">
                        <div className="flex justify-between">
                          <span className="text-black/60">Medium:</span>
                          <span className="font-bold">Fotografi &amp; Videografi</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-black/60">Genre:</span>
                          <span className="font-bold">Street, Arsitektur, Sinematik</span>
                        </div>
                      </div>

                      <div className="mt-3.5 space-y-1.5">
                        <p className="text-black/60">{"// Spesialisasi Visual:"}</p>
                      </div>
                    </div>
                  )}

                  {/* Status Indicator */}
                  <div className="mt-4 flex items-center justify-between border-t border-black/20 pt-3">
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      Aktif Belajar &amp; Berkarya
                    </span>
                    <span className="font-mono text-[10px] text-black/50">Angkatan 2026</span>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="border-t-2 border-black bg-[#FAF9F5] px-4 py-1.5 font-mono text-[11px] font-bold text-black/70 flex justify-between">
                  <span>UPN &quot;VETERAN&quot; YOGYAKARTA</span>
                  <span>INFORMATIKA &bull; 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Single Ticker Tape with Code & Visual Elements */}
      <div className="marquee-viewport mt-12 overflow-hidden border-y-2 border-black bg-yellow-300 py-2.5 select-none">
        <div className="animate-marquee font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-black">
          {[0, 1].map((key) => (
            <div key={key} className="flex shrink-0 items-center gap-6 pr-6">
              <span> UPN &quot;VETERAN&quot; YOGYAKARTA</span>
              <span>&bull;</span>
              <span> S1 TEKNIK INFORMATIKA </span>
              <span>&bull;</span>
              <span> INFORMATICS </span>
              <span>&bull;</span>
              <span> FOTOGRAFI </span>
              <span>&bull;</span>
              <span> VIDEOGRAFI </span>
              <span>&bull;</span>
              <span> C++ &bull; NEXT JS &bull; TYPESCRIPT </span>
              <span>&bull;</span>
              <span> TERBUKA UNTUK KOLABORASI &bull; 2026 </span>
              <span>&bull;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
