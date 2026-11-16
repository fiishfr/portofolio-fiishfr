"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Terminal } from "lucide-react";

export default function SiteExperience() {
  const [introVisible, setIntroVisible] = useState(true);
  const [cursor, setCursor] = useState({ x: -40, y: -40 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const introTimer = window.setTimeout(
      () => setIntroVisible(false),
      reducedMotion ? 400 : 3000
    );

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) {
      return () => window.clearTimeout(introTimer);
    }

    document.documentElement.classList.add("has-custom-cursor");

    const handlePointerMove = (event: PointerEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
      setCursorVisible(true);
    };

    const handlePointerLeave = () => setCursorVisible(false);
    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      setCursorActive(Boolean(target.closest("a, button, input, textarea, [role='button']")));
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.clearTimeout(introTimer);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      {introVisible && (
        <div className="site-intro" role="dialog" aria-label="Intro portofolio">
          <div className="site-intro__window">
            <div className="site-intro__bar">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full border border-black bg-red-400" />
                <span className="size-2.5 rounded-full border border-black bg-yellow-400" />
                <span className="size-2.5 rounded-full border border-black bg-emerald-400" />
              </div>
              <span className="font-mono text-[10px] font-bold">WELCOME.SH</span>
            </div>

            <div className="p-5 sm:p-7">
              <div className="site-intro__eyebrow">
                <span className="flex items-center gap-2">
                  <Terminal className="size-3.5" />
                  <span>PORTFOLIO.OS</span>
                </span>
                <span className="site-intro__status">ONLINE</span>
              </div>

              <p className="mt-5 font-mono text-[10px] font-bold tracking-[0.2em] text-black/55">
                {"// KODE • LENSA • CERITA"}
              </p>
              <p className="mt-2 font-display text-3xl font-black leading-none text-black sm:text-5xl">
                Halo, saya
                <br />
                <span className="text-yellow-500">Luthfi</span>
                <span className="animate-pulse">_</span>
              </p>

              <div className="site-intro__stats mt-5">
                <div>
                  <strong>WEB</strong>
                  <span>BUILD</span>
                </div>
                <div>
                  <strong>PHOTO</strong>
                  <span>FRAME</span>
                </div>
                <div>
                  <strong>VIDEO</strong>
                  <span>STORY</span>
                </div>
              </div>

              <div className="site-intro__code mt-4 space-y-1 border-y border-black/15 py-3 font-mono text-[10px] text-black/65">
                <p><span className="text-emerald-700">[ok]</span> load identity.md</p>
                <p><span className="text-emerald-700">[ok]</span> mount creative_stack</p>
                <p><span className="text-yellow-700">[→]</span> enter luthfi.dev</p>
              </div>
              <div className="mt-5 h-3 border-2 border-black bg-white p-0.5">
                <div className="site-intro__progress h-full bg-yellow-300" />
              </div>
              <p className="mt-2 font-mono text-[10px] font-bold text-black/60">
                Menyiapkan kode, lensa, dan karya...
              </p>
              <button
                type="button"
                onClick={() => setIntroVisible(false)}
                className="neo-btn mt-5 flex items-center gap-2 bg-white px-3 py-1.5 font-display text-xs font-bold text-black"
              >
                Lewati intro
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        aria-hidden="true"
        className={`custom-cursor ${cursorVisible ? "custom-cursor--visible" : ""} ${
          cursorActive ? "custom-cursor--active" : ""
        }`}
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) ${
            cursorActive ? "scale(1.45) rotate(8deg)" : ""
          }`,
        }}
      >
        <span className="custom-cursor__dot" />
      </div>
    </>
  );
}
