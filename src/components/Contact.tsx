"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  Instagram,
  Send,
  MessageSquare,
  ArrowUp,
  MapPin,
  GraduationCap,
  AlertCircle,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const EMAIL_ADDRESS = "fiishfr@gmail.com";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@fiishfr",
    url: "https://github.com/fiishfr",
    icon: Github,
    desc: "Repositori kode & kontribusi",
  },
  {
    name: "LinkedIn",
    handle: "Muhammad Luthfi Shofari",
    url: "https://linkedin.com/in/fiishfr",
    icon: Linkedin,
    desc: "Jejaring profesional & karier",
  },
  {
    name: "Instagram",
    handle: "@fiishfr",
    url: "https://instagram.com/fii.shfr",
    icon: Instagram,
    desc: "Aktivitas harian & fotografi",
  },
];

const categoryOptions = [
  "Tawaran Magang (Internship)",
  "Proyek Web Freelance",
  "Kolaborasi & Riset",
  "Tanya-Tanya Santai",
];

type Errors = {
  nama?: string;
  email?: string;
  pesan?: string;
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const nama = String(formData.get("nama") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const pesan = String(formData.get("pesan") || "").trim();

    const newErrors: Errors = {};
    if (nama.length < 2) newErrors.nama = "Nama wajib diisi minimal 2 karakter!";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Format alamat email tidak valid!";
    if (pesan.length < 8) newErrors.pesan = "Isi pesan minimal 8 karakter!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus(null);
      return;
    }

    const subject = encodeURIComponent(`[Portofolio] ${selectedCategory} — dari ${nama}`);
    const body = encodeURIComponent(
      `Halo Luthfi,\n\nNama: ${nama}\nEmail: ${email}\nKategori: ${selectedCategory}\n\nPesan:\n${pesan}\n\n— Dikirim via Form Portofolio Neobrutalism`
    );

    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;

    setStatus("Aplikasi email Anda dibuka! Silakan kirimkan surel tersebut untuk menyelesaikan.");
    form.reset();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="kontak" className="pt-16 sm:pt-24 border-t-2 border-black bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          tag="// 06. MARI BERKOLABORASI"
          title="HUBUNGI SAYA"
          desc="Tertarik bekerja sama atau ingin berdiskusi seputar dunia informatika? Jangan ragu menyapa!"
          tagBg="bg-yellow-300"
          sideBadge="KONTAK"
        />

        {/* Main Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Direct Info & Social Link Cards */}
          <div className="space-y-5 lg:col-span-5">
            <div>
              <h3 className="text-2xl font-black text-black sm:text-3xl">
                Ayo Bikin Sesuatu Bersama!
              </h3>
              <p className="mt-2.5 font-sans text-sm sm:text-base leading-relaxed font-medium text-black/75">
                Saya selalu terbuka untuk berdiskusi mengenai kesempatan magang, pembuatan aplikasi web, atau sekadar bertukar wawasan tentang teknologi.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="border-2 border-black bg-[#FAF9F5] p-5 neo-shadow">
              <div className="flex items-center justify-between border-b border-black/15 pb-2">
                <span className="font-mono text-xs font-bold text-black uppercase">
                  {"// SUREL LANGSUNG"}
                </span>
                <Mail className="size-4 text-black/70" />
              </div>

              <p className="mt-3 font-mono text-sm sm:text-base font-black text-black break-all">
                {EMAIL_ADDRESS}
              </p>

              <button
                onClick={handleCopyEmail}
                className="mt-3.5 neo-btn flex items-center justify-center gap-2 w-full bg-yellow-300 py-2 font-display text-xs sm:text-sm font-black text-black"
              >
                {copied ? (
                  <>
                    <Check className="size-4 text-emerald-700" />
                    <span>Tersalin ke Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-4" />
                    <span>Salin Alamat Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Social Media Cards */}
            <div>
              <p className="font-mono text-xs font-bold uppercase text-black/70 mb-2.5">
                {"// MEDIA SOSIAL:"}
              </p>
              <div className="space-y-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between border-2 border-black bg-[#FAF9F5] p-3 neo-shadow-sm transition-all duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none hover:bg-yellow-50"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="grid size-8 place-items-center border border-black bg-white neo-shadow-sm">
                          <Icon className="size-4 text-black" />
                        </div>
                        <div>
                          <p className="font-display text-sm font-black text-black mt-1">
                            {s.name}
                          </p>
                          <p className="font-mono text-[11px] text-black/60">
                            {s.handle}
                          </p>
                        </div>
                      </div>

                      <span className="border border-black bg-white px-2 py-0.5 font-mono text-[11px] font-bold text-black group-hover:bg-black group-hover:text-yellow-300 transition-colors">
                        Kunjungi ↗
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* University & Location Stamp */}
            <div className="border-2 border-black bg-[#FAF9F5] p-3.5 neo-shadow-sm font-mono text-xs space-y-1">
              <p className="flex items-center gap-1.5 font-bold text-black">
                <GraduationCap className="size-3.5" />
                <span>Teknik Informatika — UPN &quot;Veteran&quot; Yogyakarta</span>
              </p>
              <p className="flex items-center gap-1.5 text-black/70 font-medium">
                <MapPin className="size-3.5 text-red-600" />
                <span>Condongcatur, Sleman, D.I. Yogyakarta</span>
              </p>
            </div>
          </div>

          {/* Right Column: Clean Brutalist Feedback Form */}
          <div className="lg:col-span-7">
            <div className="border-2 border-black bg-[#FAF9F5] p-5 sm:p-7 neo-shadow">
              {/* Form Window Top Bar */}
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-black">
                  <MessageSquare className="size-3.5" />
                  <span>KIRIM_PESAN.FORM</span>
                </div>
                <span className="border border-black bg-yellow-300 px-1.5 py-0.2 font-mono text-[10px] font-bold">
                  DIRECT FORM
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Field: Nama Lengkap */}
                <div>
                  <label htmlFor="nama" className="block font-mono text-xs font-black uppercase text-black mb-1">
                    Nama Lengkap Anda *
                  </label>
                  <input
                    id="nama"
                    name="nama"
                    type="text"
                    placeholder="Contoh: Budi Pratama"
                    className="w-full border-2 border-black bg-white px-3.5 py-2.5 font-sans text-xs sm:text-sm font-medium text-black placeholder:text-black/40 focus:bg-yellow-50 focus:outline-none neo-shadow-sm"
                  />
                  {errors.nama && (
                    <p className="mt-1 flex items-center gap-1 font-mono text-[11px] font-bold text-red-600">
                      <AlertCircle className="size-3" />
                      <span>{errors.nama}</span>
                    </p>
                  )}
                </div>

                {/* Field: Alamat Email */}
                <div>
                  <label htmlFor="email" className="block font-mono text-xs font-black uppercase text-black mb-1">
                    Alamat Email Aktif *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nama@perusahaan.com"
                    className="w-full border-2 border-black bg-white px-3.5 py-2.5 font-sans text-xs sm:text-sm font-medium text-black placeholder:text-black/40 focus:bg-yellow-50 focus:outline-none neo-shadow-sm"
                  />
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1 font-mono text-[11px] font-bold text-red-600">
                      <AlertCircle className="size-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Field: Kategori Pesan */}
                <div>
                  <label className="block font-mono text-xs font-black uppercase text-black mb-1.5">
                    Kategori Keperluan *
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {categoryOptions.map((cat) => {
                      const isSelected = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setSelectedCategory(cat)}
                          className={`border border-black p-2 text-left font-mono text-[11px] font-bold transition-all ${
                            isSelected
                              ? "bg-yellow-300 text-black neo-shadow-sm font-black"
                              : "bg-white text-black hover:bg-zinc-100"
                          }`}
                        >
                          <span className="mr-1">{isSelected ? "●" : "○"}</span>
                          <span>{cat}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Field: Pesan */}
                <div>
                  <label htmlFor="pesan" className="block font-mono text-xs font-black uppercase text-black mb-1">
                    Isi Pesan / Rincian Ide *
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows={4}
                    placeholder="Ceritakan gambaran proyek, lowongan magang, atau ajakan diskusi Anda..."
                    className="w-full border-2 border-black bg-white px-3.5 py-2.5 font-sans text-xs sm:text-sm font-medium text-black placeholder:text-black/40 focus:bg-yellow-50 focus:outline-none neo-shadow-sm"
                  />
                  {errors.pesan && (
                    <p className="mt-1 flex items-center gap-1 font-mono text-[11px] font-bold text-red-600">
                      <AlertCircle className="size-3" />
                      <span>{errors.pesan}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="neo-btn-lg flex items-center justify-center gap-2 w-full bg-yellow-300 py-3 font-display text-sm sm:text-base font-black text-black"
                >
                  <Send className="size-4 stroke-[2.5]" />
                  <span>Kirim Pesan Sekarang</span>
                </button>

                {/* Status Message */}
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-black bg-emerald-200 p-3 font-mono text-xs font-bold text-black neo-shadow-sm flex items-start gap-2"
                  >
                    <Check className="size-3.5 shrink-0 mt-0.5 text-black" />
                    <span>{status}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Footer Bar */}
      <footer className="mt-16 border-t-2 border-black bg-black py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
          <div>
            <p className="font-display text-base font-black text-yellow-300 tracking-tight">
              MUHAMMAD LUTHFI SHOFARI
            </p>
            <p className="mt-0.5 font-mono text-xs text-white/70">
              Mahasiswa S1 Informatika — Universitas Pembangunan Nasional &quot;Veteran&quot; Yogyakarta
            </p>
            <p className="mt-1 font-mono text-[11px] text-white/40">
              © 2026. All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 border border-white bg-yellow-300 px-3.5 py-1.5 font-mono text-xs font-bold text-black neo-shadow-sm transition-all hover:bg-yellow-400"
          >
            <ArrowUp className="size-3.5" />
            <span>Ke Atas</span>
          </button>
        </div>
      </footer>
    </section>
  );
}
