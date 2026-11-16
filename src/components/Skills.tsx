"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Server,
  Palette,
  Wrench,
  Sparkles,
  Layout,
  Search,
  X,
  Camera,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type SkillCategory = {
  id: string;
  name: string;
  badgeBg: string;
  tagColor: string;
  icon: typeof Code;
  description: string;
  skills: {
    name: string;
    level: string;
    desc: string;
    tag: string;
  }[];
};

const categories: SkillCategory[] = [
  {
    id: "languages",
    name: "Bahasa Pemrograman",
    badgeBg: "bg-violet-100",
    tagColor: "border-violet-600 text-violet-950 bg-violet-50",
    icon: Code,
    description: "Bahasa yang digunakan untuk membangun logika aplikasi dan produk web.",
    skills: [
      { name: "C/C++", level: "Pemula", desc: "Dasar pemrograman, struktur data, dan algoritma", tag: "Programming Language" },
      { name: "SQL", level: "Pemula", desc: "Query, relasi tabel, dan pengelolaan data terstruktur", tag: "Query Language" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    badgeBg: "bg-cyan-100",
    tagColor: "border-cyan-600 text-cyan-900 bg-cyan-50",
    icon: Layout,
    description: "Membangun antarmuka web interaktif, responsif, dan dinamis.",
    skills: [],
  },
  {
    id: "backend",
    name: "Backend",
    badgeBg: "bg-emerald-100",
    tagColor: "border-emerald-600 text-emerald-950 bg-emerald-50",
    icon: Server,
    description: "Perancangan logika server, manajemen basis data, dan integrasi API.",
    skills: [
      { name: "MySQL/MariaDB", level: "Pemula", desc: "Pengelolaan database relasional, query, dan manipulasi data", tag: "Relational Database" },
    ],
  },
  {
    id: "uiux",
    name: "UI/UX",
    badgeBg: "bg-pink-100",
    tagColor: "border-pink-600 text-pink-950 bg-pink-50",
    icon: Palette,
    description: "Merancang pengalaman pengguna yang estetik, intuitif, dan fungsional.",
    skills: [],
  },
  {
    id: "visual-tools",
    name: "Foto & Video",
    badgeBg: "bg-pink-200",
    tagColor: "border-pink-600 text-pink-950 bg-pink-50",
    icon: Camera,
    description: "Produksi visual sinematik, editing video, dan color grading fotografi.",
    skills: [
      { name: "Adobe Premiere Pro", level: "Menengah", desc: "Video editing, color correction, audio mixing", tag: "Video NLE" },
      { name: "Adobe Lightroom", level: "Menengah", desc: "RAW photo processing, tone curve, color balance", tag: "Photo Edit" },
      { name: "Adobe Photoshop", level: "Menengah", desc: "Image manipulation, retouching, compositing", tag: "Photo Edit" },
      { name: "Capcut", level: "Menengah", desc: "Mobile video editing, templates, social media content", tag: "Video NLE" },
],
  },
  {
    id: "tools",
    name: "Tools",
    badgeBg: "bg-amber-100",
    tagColor: "border-amber-600 text-amber-950 bg-amber-50",
    icon: Wrench,
    description: "Perkakas pendukung alur kerja pengembangan modern.",
    skills: [
      { name: "Git & GitHub", level: "Pemula", desc: "Version control, branching, PR, CI/CD basic", tag: "VCS" },
      { name: "VS Code", level: "Menengah", desc: "Extension ecosystem, snippet, debugger", tag: "IDE" },
      { name: "Linux / Bash", level: "Pemula", desc: "Terminal navigation, script dasar, server config", tag: "OS" },
      { name: "Vercel", level: "Pemula", desc: "Deployment otomatis, preview branch, edge", tag: "Deploy" },
      { name: "Microsoft Office", level: "Mahir", desc: "Word, Excel, PowerPoint, basic data analysis", tag: "Office Suite" },
      { name: "Canva", level: "Menengah", desc: "Design grafis, template, kolaborasi", tag: "Design" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = categories.find((c) => c.id === activeTab);
  const baseSkills =
    activeTab === "all"
      ? categories.flatMap((c) => c.skills.map((s) => ({ ...s, catBadgeBg: c.badgeBg, catTagColor: c.tagColor, catName: c.name })))
      : currentCategory
      ? currentCategory.skills.map((s) => ({ ...s, catBadgeBg: currentCategory.badgeBg, catTagColor: currentCategory.tagColor, catName: currentCategory.name }))
      : [];

  const displayedSkills = baseSkills.filter((s) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.desc.toLowerCase().includes(q) ||
      s.tag.toLowerCase().includes(q) ||
      s.catName.toLowerCase().includes(q)
    );
  });

  return (
    <section id="keahlian" className="py-16 sm:py-24 border-t-2 border-black bg-[#FAF9F5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          tag="// 02. STACK & TOOLS"
          title="KEAHLIAN & PERKAKAS"
          desc="Teknologi rekayasa web dan perkakas produksi visual yang saya gunakan dalam mengeksekusi ide."
          tagBg="bg-yellow-300"
          sideBadge="STACK 2026"
        />

        {/* Controls: Category Switcher & Search Bar */}
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist">
            <button
              onClick={() => setActiveTab("all")}
              role="tab"
              aria-selected={activeTab === "all"}
              className={`neo-btn px-3 py-1.5 font-display text-xs sm:text-sm font-bold transition-all ${
                activeTab === "all"
                  ? "bg-yellow-300 text-black neo-shadow-sm font-black"
                  : "bg-white text-black hover:bg-yellow-50"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="size-3.5" />
                <span>Semua ({categories.flatMap((c) => c.skills).length})</span>
              </span>
            </button>

            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`neo-btn flex items-center gap-1.5 px-3 py-1.5 font-display text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? "bg-yellow-300 text-black neo-shadow-sm font-black"
                      : "bg-white text-black hover:bg-zinc-50"
                  }`}
                >
                  <Icon className="size-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Clean Search Input */}
          <div className="relative w-full sm:w-60">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-black/50 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari keahlian / gear..."
              className="w-full border-2 border-black bg-white pl-8 pr-7 py-1.5 font-mono text-xs font-medium text-black placeholder:text-black/40 focus:bg-yellow-50 focus:outline-none neo-shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-black/60 hover:text-black"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Count Indicator */}
        <div className="mt-3 flex items-center justify-between font-mono text-xs text-black/60">
          <span>{displayedSkills.length} keahlian &amp; perkakas ditampilkan</span>
        </div>

        {/* Clean, Straight Neobrutalist Grid */}
        <motion.div layout className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill) => (
              <motion.div
                key={`${skill.name}-${skill.catName}`}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.12 }}
                className="group flex flex-col justify-between border-2 border-black bg-white p-4 neo-shadow transition-all duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
              >
                <div>
                  {/* Top Bar: Category & Level */}
                  <div className="flex items-center justify-between border-b border-black/15 pb-2">
                    <span className="font-mono text-[10px] font-bold uppercase text-black/70">
                      {skill.catName}
                    </span>
                    <span className="border border-black bg-[#FAF9F5] px-1.5 py-0.2 font-mono text-[10px] font-bold text-black">
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h4 className="mt-2.5 font-display text-base font-black text-black">
                    {skill.name}
                  </h4>

                  {/* Description */}
                  <p className="mt-1 font-sans text-xs leading-relaxed text-black/70 font-medium">
                    {skill.desc}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-2 font-mono text-[11px]">
                  <span className="border border-black/30 bg-[#FAF9F5] px-1.5 py-0.2 text-[10px] font-medium text-black/70">
                    #{skill.tag}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700">
                    ● Aktif
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
