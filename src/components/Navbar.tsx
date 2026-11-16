"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Send, GraduationCap } from "lucide-react";

const links = [
  { name: "Tentang", href: "#tentang" },
  { name: "Keahlian", href: "#keahlian" },
  { name: "Pendidikan", href: "#pendidikan" },
  { name: "Karya Web", href: "#karya" },
  { name: "Visual", href: "#visual" },
  { name: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" }
    );

    links.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 transition-all sm:px-6 sm:py-3.5">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between border-2 border-black bg-[#FAF9F5]/95 backdrop-blur-md px-4 py-2 transition-all sm:px-5 ${
          scrolled ? "neo-shadow" : "neo-shadow-sm"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-1.5 border-2 border-black bg-yellow-300 px-2.5 py-1 font-display text-sm sm:text-base font-black tracking-tight text-black neo-shadow-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
        >
          <span>LUTHFI</span>
          <span className="inline-flex h-4 items-center justify-center bg-black px-1 text-[11px] font-bold leading-1 text-white">
            DEV
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 lg:flex lg:gap-1.5">
          {links.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block border-2 px-3 py-1 font-display text-xs sm:text-sm font-bold tracking-tight transition-all duration-100 ${
                    isActive
                      ? "border-black bg-yellow-300 neo-shadow-sm text-black"
                      : "border-transparent text-black/80 hover:border-black hover:bg-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action & Status Badge */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="hidden items-center gap-1.5 border-2 border-black bg-emerald-100 px-2 py-0.5 text-xs font-bold text-black lg:flex">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <GraduationCap className="size-3.5" />
            <span className="font-mono text-[11px]">UPNVY &apos;26</span>
          </div>

          <a
            href="#kontak"
            className="neo-btn flex items-center gap-1.5 bg-yellow-300 px-3 py-1 text-xs font-black text-black sm:px-3.5 sm:py-1.5"
          >
            <Send className="size-3" />
            <span>Kontak</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Tutup Menu Navigasi" : "Buka Menu Navigasi"}
            aria-expanded={open}
            className="grid size-8 place-items-center border-2 border-black bg-white text-black neo-shadow-sm transition-all hover:bg-yellow-100 lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.12 }}
            className="mx-auto mt-2 max-w-6xl border-2 border-black bg-[#FAF9F5] p-3 neo-shadow lg:hidden"
          >
            <div className="mb-2 flex items-center justify-between border-b-2 border-black pb-1.5">
              <span className="font-mono text-[11px] font-bold text-black/60">{"// NAVIGASI"}</span>
              <span className="border border-black bg-emerald-200 px-1.5 py-0.2 font-mono text-[10px] font-bold">
                ● Aktif Kuliah
              </span>
            </div>
            <ul className="flex flex-col gap-1.5">
              {links.map((link, idx) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-2 border-black bg-white px-3.5 py-2 font-display text-sm font-bold text-black neo-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-[10px] text-black/40">0{idx + 1} →</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
