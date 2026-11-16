"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Video,
  Play,
  Maximize2,
  X,
  MapPin,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type MediaItem = {
  id: string;
  title: string;
  type: "foto" | "video";
  category: "Street" | "Arsitektur" | "Sinematik" | "Human Interest";
  aspect: "landscape" | "portrait";
  gear: string;
  settings: string;
  location: string;
  year: string;
  imageUrl: string;
  videoUrl?: string;
  desc: string;
  tag: string;
  duration?: string;
  accentBg: string;
};

const mediaGalleryData: MediaItem[] = [
  {
    id: "pantai-indah-kapuk",
    title: "La Riviera Senja",
    type: "foto",
    category: "Arsitektur",
    aspect: "landscape",
    gear: "Sony Alpha 7C & 50mm F3.5",
    settings: "1/125s • f/3.5 • ISO 400",
    location: "Pantai Indah Kapuk, Jakarta",
    year: "2026",
    imageUrl: "/images/pantai-indah-kapuk.jpg",
    desc: "Momen senja di Pantai Indah Kapuk, Jakarta.",
    tag: "50mm Street",
    accentBg: "bg-yellow-300",
  },
];

const visualFilters = ["Semua", "Foto", "Video", "Street", "Arsitektur", "Sinematik"] as const;

export default function VisualGallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof visualFilters)[number]>("Semua");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredMedia = mediaGalleryData.filter((item) => {
    if (activeFilter === "Semua") return true;
    if (activeFilter === "Foto") return item.type === "foto";
    if (activeFilter === "Video") return item.type === "video";
    return item.category === activeFilter;
  });

  // ESC to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMedia(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="visual" className="py-20 sm:py-28 border-t-3 border-black bg-[#FFFDF5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          tag="// 05. LENSA & KREATIF"
          title="FOTOGRAFI & VIDEOGRAFI"
          desc="Berekspresi melalui bingkai visual — membekukan dinamika jalanan Yogyakarta, geometri arsitektur, dan narasi sinematik bergerak."
          tagBg="bg-pink-400"
          sideBadge="VISUAL LAB"
        />

        {/* Filter Bar with Category Counts */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2" role="tablist">
            {visualFilters.map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`neo-btn px-3 py-1.5 font-display text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? "bg-yellow-300 text-black neo-shadow-sm font-black -rotate-0.5"
                      : "bg-white text-black hover:bg-yellow-100"
                  }`}
                >
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 border-2 border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black neo-shadow-sm md:flex">
            <Camera className="size-3.5 text-black" />
            <span>Koleksi: {filteredMedia.length} Karya Visual</span>
          </div>
        </div>

        {/* Gallery Grid Styled with Neobrutalist Film Frame Aesthetics */}
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                onClick={() => setSelectedMedia(item)}
                className="group cursor-pointer border-3 border-black bg-white p-3.5 neo-shadow transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:neo-shadow-lg select-none flex flex-col justify-between"
              >
                <div>
                  {/* Film Header Metadata Bar */}
                  <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-black text-black">
                      {item.type === "video" ? (
                        <>
                          <Video className="size-3.5 text-pink-600" />
                          <span className="mt-0.5">VIDEOGRAFI</span>
                        </>
                      ) : (
                        <>
                          <Camera className="size-3.5 text-black" />
                          <span className="mt-0.5">FOTOGRAFI</span>
                        </>
                      )}
                    </div>

                    <span
                      className={`border-2 border-black h-4 ${item.accentBg} px-2 py-0.2 font-mono text-[10px] font-black uppercase text-black`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Visual Image Container with Viewfinder Overlay */}
                  <div className="relative aspect-4/3 w-full overflow-hidden border-2 border-black bg-black">
                    {/* Visual Media Thumbnail */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Camcorder Viewfinder overlay for videos */}
                    {item.type === "video" && (
                      <div className="absolute inset-0 bg-black/35 p-3 flex flex-col justify-between text-white font-mono text-[11px] font-bold">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 bg-red-600 px-1.5 py-0.2 text-[10px] text-white">
                            <span className="size-1.5 rounded-full bg-white animate-pulse" />
                            REC
                          </span>
                          <span className="border border-white/60 bg-black/50 px-1 text-[10px]">
                            {item.duration}
                          </span>
                        </div>

                        {/* Center Play Button */}
                        <div className="mx-auto flex size-12 items-center justify-center border-2 border-black bg-yellow-300 text-black neo-shadow-sm transition-transform group-hover:scale-110">
                          <Play className="size-5 fill-black ml-0.5" />
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-white/90">
                          <span>4K DCI &bull; 24FPS</span>
                          <span>CINELOG</span>
                        </div>
                      </div>
                    )}

                    {/* View overlay for photos */}
                    {item.type === "foto" && (
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-center justify-center">
                        <div className="flex items-center gap-1.5 border-2 border-black bg-white px-3 py-1 font-mono text-xs font-black text-black neo-shadow-sm">
                          <Maximize2 className="size-3.5" />
                          <span>Perbesar Foto</span>
                        </div>
                      </div>
                    )}

                    {/* Location Badge on Image */}
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 border border-black bg-white/95 px-2 py-0.5 font-mono text-[10px] font-bold text-black">
                      <MapPin className="size-2.5 text-red-600" />
                      <span className="truncate max-w-40">{item.location}</span>
                    </div>
                  </div>

                  {/* Caption & EXIF Details */}
                  <div className="pt-3.5">
                    <h3 className="font-display text-lg font-black text-black leading-snug group-hover:text-yellow-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-xs leading-relaxed text-black/75 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom EXIF Technical Strip */}
                <div className="mt-4 border-t-2 border-dashed border-black/40 pt-2.5 font-mono text-[10px] text-black/80 flex flex-wrap items-center justify-between gap-1">
                  <span className="font-bold">{item.gear}</span>
                  <span className="border border-black bg-yellow-100 px-1.5 py-0.2 font-semibold">
                    {item.settings}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Neobrutalist Lightbox / Inspector Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMedia(null)}
              className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 backdrop-blur-xs"
            >
              <motion.div
                initial={{ scale: 0.94, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto border-4 border-black bg-white neo-shadow-xl"
              >
                {/* Modal Title Bar */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b-3 border-black bg-yellow-300 px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="size-3 border-2 border-black bg-red-500" />
                    <span className="font-mono text-xs font-black uppercase text-black">
                      {selectedMedia.type === "video" ? "VIDEO_PLAYER.VIEW" : "PHOTO_INSPECTOR.RAW"}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedMedia(null)}
                    aria-label="Tutup Jendela"
                    className="grid size-7 place-items-center border-2 border-black bg-white text-black neo-shadow-sm transition-all hover:bg-red-400"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-5 sm:p-7">
                  {/* Main Full-Size Media Container */}
                  <div className="relative overflow-hidden border-3 border-black bg-black">
                    {selectedMedia.type === "video" && selectedMedia.videoUrl ? (
                      <video
                        src={selectedMedia.videoUrl}
                        poster={selectedMedia.imageUrl}
                        controls
                        playsInline
                        className="mx-auto max-h-[60vh] w-full object-contain"
                      />
                    ) : (
                      <img
                        src={selectedMedia.imageUrl}
                        alt={selectedMedia.title}
                        className="mx-auto max-h-[60vh] w-full object-contain"
                      />
                    )}

                    {selectedMedia.type === "video" && !selectedMedia.videoUrl && (
                      <div className="absolute inset-0 flex flex-col justify-between bg-black/25 p-4 text-white font-mono text-xs">
                        <div className="flex items-center justify-between">
                          <span className="border-2 border-black bg-red-600 px-2 py-0.5 text-xs font-black">
                            ● 4K CINEMATIC PLAYBACK
                          </span>
                          <span className="bg-black px-2 py-0.5 border border-white">
                            DURASI: {selectedMedia.duration}
                          </span>
                        </div>

                        <div className="mx-auto flex size-16 items-center justify-center border-3 border-black bg-yellow-300 text-black neo-shadow transition-transform hover:scale-105 cursor-pointer">
                          <Play className="size-7 fill-black ml-1" />
                        </div>

                        <div className="flex items-center justify-between text-xs font-bold bg-black/60 p-2 border border-white/30">
                          <span>FORMAT: PRORES / CINELOG</span>
                          <span>COLOR: REC.709 GRADE</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Title & Metadata Details */}
                  <div className="mt-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`border-2 border-black ${selectedMedia.accentBg} px-2.5 py-0.5 font-mono text-xs font-black`}
                      >
                        {selectedMedia.category}
                      </span>
                      <span className="border-2 border-black bg-white px-2.5 py-0.5 font-mono text-xs font-bold text-black">
                        Tahun: {selectedMedia.year}
                      </span>
                      <span className="flex items-center gap-1 border-2 border-black bg-[#FAF9F5] px-2.5 py-0.5 font-mono text-xs font-bold text-black">
                        <MapPin className="size-3 text-red-600" />
                        <span>{selectedMedia.location}</span>
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl sm:text-3xl font-black text-black">
                      {selectedMedia.title}
                    </h3>

                    <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-black/85">
                      {selectedMedia.desc}
                    </p>
                  </div>

                  {/* Technical Lens & Camera Specs */}
                  <div className="mt-6 border-3 border-black bg-[#FAF9F5] p-4 neo-shadow-sm font-mono text-xs">
                    <p className="font-black uppercase text-black mb-2">
                      {"// DATA TEKNIS KAMERA & LENSA:"}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-black/90">
                      <div className="border border-black bg-white p-2">
                        <span className="text-black/60">Perangkat / Kamera:</span>
                        <p className="font-bold">{selectedMedia.gear}</p>
                      </div>
                      <div className="border border-black bg-white p-2">
                        <span className="text-black/60">Pengaturan / Shutter / Aperture:</span>
                        <p className="font-bold">{selectedMedia.settings}</p>
                      </div>
                    </div>
                  </div>

                  {/* Modal Action Buttons */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t-2 border-black pt-4">
                    <span className="font-mono text-xs text-black/60">
                      &copy; Muhammad Luthfi Shofari &bull; Karya Visual
                    </span>

                    <button
                      onClick={() => setSelectedMedia(null)}
                      className="neo-btn bg-black text-yellow-300 px-5 py-2 font-display text-xs sm:text-sm font-black"
                    >
                      Tutup Pratinjau
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
