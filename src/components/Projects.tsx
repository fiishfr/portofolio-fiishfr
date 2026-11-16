"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type Project = {
  id: string;
  title: string;
  category: "Web App" | "UI/UX" | "Full-Stack";
  badgeBg: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  tech: string[];
  demoUrl?: string;
  featured?: boolean;
};

const projectsData: Project[] = [
  {
    id: "scafo",
    title: "SCAFO — SMA IT Campus Info",
    category: "Web App",
    badgeBg: "bg-yellow-200 text-yellow-950",
    shortDesc:
      "Portal kegiatan informasi kampus berbasis web untuk SMA IT Al Irsyad Al Islamiyyah Purwokerto, menampilkan berita, pengumuman, dan galeri kegiatan.",
    fullDesc:
      "SCAFO adalah portal web yang dirancang untuk menampilkan informasi kegiatan kampus SMA IT Al Irsyad Al Islamiyyah Purwokerto. Aplikasi ini menyajikan berita terkini, pengumuman penting, dan galeri foto kegiatan, memberikan akses mudah bagi siswa, guru, dan orang tua untuk tetap terinformasi.",
    features: [
      "Berita & Pengumuman: Menampilkan informasi terbaru tentang kegiatan sekolah.",
      "Galeri Kegiatan: Menyediakan tampilan visual dari berbagai acara sekolah.",
      "Responsif & User-Friendly: Antarmuka yang mudah digunakan di berbagai perangkat.",
    ],
    tech: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    demoUrl: "https://smaitcampusinfo.ikasa.web.id",
    featured: true,
  },
  {
    id: "bpri",
    title: "BPRI — Badan Percepatan Revitalisasi IKASA",
    category: "Web App",
    badgeBg: "bg-yellow-200 text-yellow-950",
    shortDesc:
      "Portal web untuk Badan Percepatan Revitalisasi IKASA, menampilkan informasi, berita, dan pengumuman terkait revitalisasi ikatan alumni.",
    fullDesc:
      "BPRI adalah portal web yang dirancang untuk Badan Percepatan Revitalisasi IKASA, sebuah badan yang bertujuan untuk memperkuat ikatan alumni. Web ini menyediakan informasi terkini, berita, dan pengumuman terkait kegiatan revitalisasi, memfasilitasi komunikasi dan keterlibatan anggota alumni.",
    features: [
      "Informasi & Berita: Menyediakan update terbaru tentang kegiatan revitalisasi.",
      "Pengumuman Resmi: Menyampaikan informasi penting dari BPRI kepada anggota.",
      "Desain Responsif: Akses mudah melalui berbagai perangkat, termasuk mobile.",
    ],
    tech: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    demoUrl: "https://bpri.ikasa.web.id",
    featured: true,
  },
  {
    id: "ashatara",
    title: "Ashatara 26 — SMA IT Al Irsyad Al Islamiyyah Purwokerto",
    category: "Web App",
    badgeBg: "bg-yellow-200 text-yellow-950",
    shortDesc:
      "Portal web untuk Ashatara 26, menampilkan informasi angkatan, kegiatan, berita, galeri, dan pengumuman terkait angkatan 2026 SMA IT Al Irsyad Al Islamiyyah Purwokerto.",
    fullDesc:
      "Ashatara 26 adalah portal web yang dirancang untuk angkatan 2026 SMA IT Al Irsyad Al Islamiyyah Purwokerto. Web ini menyajikan informasi kegiatan, berita, galeri foto, dan pengumuman penting, memfasilitasi komunikasi dan keterlibatan antar anggota angkatan.",
    features: [
      "Informasi Angkatan: Menyediakan data dan informasi tentang angkatan 2026.",
      "Kegiatan & Berita: Menampilkan update terbaru tentang kegiatan dan berita sekolah.",
      "Galeri Foto: Menyajikan koleksi foto dari berbagai kegiatan sekolah.",
      "Pengumuman: Menyampaikan informasi penting dari sekolah kepada anggota angkatan.",
      "Kontak & Informasi: Menyediakan data kontak dan informasi penting untuk anggota angkatan.",
      "Database Terpusat: Menyimpan data anggota angkatan secara aman dan terstruktur.",
      "Desain Responsif: Akses mudah melalui berbagai perangkat, termasuk mobile.",
    ],
    tech: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    demoUrl: "https://ashatara-app.vercel.app",
    featured: true,
  },
];

const filterCategories = ["Semua", "Full-Stack", "Web App", "UI/UX"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filterCategories)[number]>("Semua");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "Semua") return true;
    return p.category === filter;
  });

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="karya" className="py-16 sm:py-24 border-t-2 border-black bg-[#FAF9F5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          tag="// 04. PORTOFOLIO"
          title="KARYA & PROYEK PILIHAN"
          desc="Koleksi proyek perangkat lunak dan desain antarmuka yang telah saya rancang dan bangun."
          tagBg="bg-yellow-300"
          sideBadge="SHOWCASE"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2" role="tablist">
          {filterCategories.map((item) => {
            const isSelected = filter === item;
            return (
              <button
                key={item}
                onClick={() => setFilter(item)}
                role="tab"
                aria-selected={isSelected}
                className={`neo-btn px-3 py-1.5 font-display text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? "bg-yellow-300 text-black neo-shadow-sm font-black"
                    : "bg-white text-black hover:bg-zinc-50"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="group flex flex-col justify-between border-2 border-black bg-white neo-shadow transition-all duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
              >
                <div>
                  {/* Browser Window Header */}
                  <div className="flex items-center justify-between border-b-2 border-black bg-yellow-300 px-3.5 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full border border-black bg-red-400" />
                      <span className="size-2.5 rounded-full border border-black bg-yellow-400" />
                      <span className="size-2.5 rounded-full border border-black bg-emerald-400" />
                    </div>

                    <span className="font-mono text-[11px] font-bold text-black/70">
                      demo-{idx + 1}.upnvy.ac.id
                    </span>

                    <span
                      className={`border border-black ${project.badgeBg} px-2 py-0.2 font-mono text-[10px] font-bold`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Live Website Preview */}
                  <div className="border-b-2 border-black bg-[#FAF9F5] p-5">
                    {project.demoUrl ? (
                      <div className="overflow-hidden border-2 border-black bg-white neo-shadow-sm">
                        <div className="flex items-center justify-between border-b border-black bg-zinc-100 px-2.5 py-1.5 font-mono text-[10px]">
                          <span className="truncate text-black/70">{project.demoUrl.replace("https://", "")}</span>
                          <span className="ml-2 shrink-0 font-bold text-emerald-700">LIVE</span>
                        </div>
                        <div className="h-52 overflow-hidden bg-white md:h-72">
                          <iframe
                            src={project.demoUrl}
                            title={`Preview ${project.title}`}
                            loading="lazy"
                            scrolling="no"
                            className="pointer-events-none h-[720px] w-[1280px] origin-top-left scale-[0.27] bg-white md:scale-[0.38]"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="border border-black bg-white p-3 neo-shadow-sm font-mono text-xs">
                        <div className="flex items-center justify-between border-b border-black/15 pb-2">
                          <span className="font-bold text-black">{project.title.split("—")[0].trim()}</span>
                          <span className="text-[10px] text-black/60">ACTIVE v1.0</span>
                        </div>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 3).map((t) => (
                            <span key={t} className="border border-black/30 bg-zinc-50 px-1.5 py-0.5 text-[10px]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-xl sm:text-2xl font-black text-black leading-tight">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 font-sans text-xs sm:text-sm leading-relaxed font-medium text-black/75">
                      {project.shortDesc}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-black bg-yellow-100 px-2 py-0.5 font-mono text-[11px] font-bold text-black"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2 border-t-2 border-black bg-[#FAF9F5] p-3.5 sm:p-4">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="neo-btn flex-1 flex items-center justify-center gap-1.5 bg-yellow-300 py-2 font-display text-xs sm:text-sm font-black text-black"
                  >
                    <span>Detail &amp; Fitur</span>
                    <Sparkles className="size-3.5" />
                  </button>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="neo-btn bg-white px-3 py-2 font-display text-xs sm:text-sm font-bold text-black hover:bg-yellow-100"
                    >
                      Buka Web
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Clean Project Detail Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-xs"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto border-3 border-black bg-white neo-shadow-lg"
              >
                {/* Modal Title Bar */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-black bg-yellow-300 px-4 py-2.5">
                  <span className="font-mono text-xs font-black uppercase text-black">
                    RINCIAN_PROYEK.TXT
                  </span>

                  <button
                    onClick={() => setActiveModalProject(null)}
                    aria-label="Tutup Jendela"
                    className="grid size-7 place-items-center border border-black bg-white text-black transition-all hover:bg-red-400"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span
                      className={`border border-black ${activeModalProject.badgeBg} px-2 py-0.5 font-mono text-[11px] font-bold`}
                    >
                      {activeModalProject.category}
                    </span>
                    <span className="font-mono text-xs text-black/60">
                      ID: #{activeModalProject.id}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-black text-black">
                    {activeModalProject.title}
                  </h3>

                  <p className="mt-3 font-sans text-sm leading-relaxed font-medium text-black/80">
                    {activeModalProject.fullDesc}
                  </p>

                  {/* Features List */}
                  <div className="mt-5 border-2 border-black bg-[#FAF9F5] p-4 neo-shadow-sm">
                    <h4 className="font-mono text-xs font-black uppercase text-black">
                      {"// FITUR & SOLUSI UTAMA:"}
                    </h4>
                    <ul className="mt-2.5 space-y-1.5">
                      {activeModalProject.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 font-sans text-xs font-semibold text-black">
                          <CheckCircle className="size-3.5 shrink-0 text-emerald-600 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="mt-5">
                    <h4 className="font-mono text-xs font-black uppercase text-black">
                      {"// TEKNOLOGI:"}
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {activeModalProject.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-black bg-yellow-100 px-2 py-0.5 font-mono text-xs font-bold text-black"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Modal Action CTA */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-black/20 pt-4">
                    {activeModalProject.demoUrl && (
                      <a
                        href={activeModalProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="neo-btn bg-yellow-300 px-4 py-2 font-display text-xs sm:text-sm font-black text-black"
                      >
                        Buka Website
                      </a>
                    )}
                    <button
                      onClick={() => setActiveModalProject(null)}
                      className="neo-btn bg-white px-4 py-2 font-display text-xs sm:text-sm font-bold text-black"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
