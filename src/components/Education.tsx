"use client";

import { GraduationCap, School, Calendar, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const educationList = [
  {
    step: "01",
    period: "2026 – SEKARANG",
    statusBadge: "SEDANG BERJALAN",
    statusColor: "bg-emerald-200 text-emerald-950",
    title: "S1 Informatika",
    institution: "Universitas Pembangunan Nasional \"Veteran\" Yogyakarta",
    location: "Yogyakarta, D.I. Yogyakarta",
    icon: GraduationCap,
    desc: "Mendalami fondasi ilmu komputasi, algoritma, rekayasa perangkat lunak modern, dan arsitektur web skala besar. Aktif mengasah keterampilan praktis melalui proyek mandiri dan praktikum lab.",
    highlights: [
      "Struktur Data & Pemrograman Berorientasi Objek (OOP)",
      "Basis Data Relasional & Manajemen SQL",
      "Rekayasa Perangkat Lunak & Desain Sistem",
      "Pengembangan Aplikasi Web & Antarmuka Interaktif",
    ],
    tags: ["Mahasiswa Aktif", "Kampus Condongcatur", "Fakultas Teknik Industri", "Angkatan 2026"],
  },
  {
    step: "02",
    period: "2023 – 2026",
    statusBadge: "ALUMNI",
    statusColor: "bg-yellow-200 text-yellow-950",
    title: "Sekolah Menengah Atas (SMA)",
    institution: "SMA IT Al Irsyad Al Islamiyyah Purwokerto",
    location: "Purwokerto, Jawa Tengah",
    icon: School,
    desc: "Menempuh peminatan MIPA dengan fokus pada pemecahan masalah analitis, logika matematika terapan, dan awal mula ketertarikan mendalam pada pembuatan website interaktif.",
    highlights: [
      "Pondasi logika matematika dan pemecahan masalah algoritmis",
      "Eksplorasi awal HTML, CSS, JavaScript, dan teknologi internet",
      "Pengembangan soft skills: kerja kelompok, kedisiplinan, & kepemimpinan",
    ],
    tags: ["Angkatan 2023–2026", "Peminatan MIPA", "Purwokerto"],
  },
];

export default function Education() {
  return (
    <section id="pendidikan" className="py-16 sm:py-24 border-t-2 border-black bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          tag="// 03. JEJAK AKADEMIS"
          title="JENJANG PENDIDIKAN"
          desc="Riwayat formal perjalanan pendidikan yang membentuk cara berpikir analitis dan fondasi keteknikan saya."
          tagBg="bg-yellow-300"
          sideBadge="TIMELINE"
        />

        {/* Clean Vertical Timeline Container */}
        <div className="relative mt-10 pl-6 sm:pl-12">
          {/* Solid Vertical Black Line */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-3 sm:left-6 w-0.5 bg-black"
          />

          <div className="space-y-10">
            {educationList.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.step} className="relative">
                  {/* Numbered Block Icon attached to timeline */}
                  <div
                    className="absolute -left-6 sm:-left-12 top-2 flex size-6 sm:size-8 items-center justify-center border-2 border-black bg-yellow-300 font-display text-xs sm:text-sm font-black text-black select-none neo-shadow-sm"
                  >
                    {item.step}
                  </div>

                  {/* High Contrast Education Card */}
                  <div className="border-2 border-black bg-white p-5 sm:p-7 neo-shadow">
                    {/* Header Strip */}
                    <div className="-mx-5 -mt-5 flex flex-wrap items-center justify-between gap-2.5 border-b-2 border-black bg-yellow-300 px-5 pb-3 pt-4 sm:-mx-7 sm:-mt-7 sm:px-7 sm:pb-3.5 sm:pt-5">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-6 items-center justify-center gap-1.5 border border-black bg-white px-2 text-center font-mono text-[11px] font-bold leading-6 text-black">
                          <Calendar className="size-3 shrink-0 " />
                          <span className="mt-0.5" >{item.period}</span>
                        </span>
                        <span
                          className={`h-6 items-center justify-center border border-black ${item.statusColor} px-2 text-center font-mono text-[11px] font-bold leading-6`}
                        >
                          {item.statusBadge}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 mb-1 font-mono text-xs text-black">
                        <MapPin className="size-3 text-red-600" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Degree & Institution */}
                    <div className="mt-4">
                      <div className="flex items-center gap-3">
                        <div className="grid size-9 sm:size-10 place-items-center border-2 border-black bg-white neo-shadow-sm shrink-0">
                          <Icon className="size-4 sm:size-5 text-black" />
                        </div>
                        <div>
                          <h3 className="font-display mt-2 text-xl sm:text-2xl font-black text-black leading-none">
                            {item.title}
                          </h3>
                          <p className="font-mono text-xs sm:text-sm font-bold text-black/80 mt-0.5">
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed font-medium text-black/80">
                        {item.desc}
                      </p>
                    </div>

                    {/* Highlights & Coursework */}
                    <div className="mt-5 border-t border-black/15 pt-3.5">
                      <p className="font-mono text-[11px] font-bold uppercase text-black/70">
                        {"// FOKUS STUDI & PENGALAMAN:"}
                      </p>
                      <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2">
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-1.5 border border-black/30 bg-white p-2 font-sans text-xs font-semibold text-black/85"
                          >
                            <span className="text-yellow-600 font-bold">&bull;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-black bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-black"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
