import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import v1  from "@/assets/videos/paula-video-1.mp4";
import v2  from "@/assets/videos/paula-video-2.mp4";
import v3  from "@/assets/videos/paula-video-3.mp4";
import v4  from "@/assets/videos/paula-video-4.mp4";
import v5  from "@/assets/videos/paula-video-5.mp4";
import v6  from "@/assets/videos/paula-video-6.mp4";
import v7  from "@/assets/videos/paula-video-7.mp4";
import v8  from "@/assets/videos/paula-video-8.mp4";
import v9  from "@/assets/videos/paula-video-9.mp4";
import v10 from "@/assets/videos/paula-video-10.mp4";
import v11 from "@/assets/videos/paula-video-11.mp4";

const VIDEOS = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11];
const AUTO_DELAY = 4000;

/* ─── 3-D coverflow transform per card ──────────────────────────── */
interface CardTransform {
  transform: string;
  opacity: number;
  zIndex: number;
  pointerEvents: "auto" | "none";
  transition: string;
}

function cardStyle(offset: number): CardTransform {
  const abs  = Math.abs(offset);
  const sign = Math.sign(offset) || 1;
  const T    = "transform 0.65s cubic-bezier(0.34,1.10,0.64,1), opacity 0.45s ease";

  switch (abs) {
    case 0:
      return {
        transform: "translateX(0%) translateZ(0px) rotateY(0deg) scale(1)",
        opacity: 1,
        zIndex: 10,
        pointerEvents: "none",
        transition: T,
      };
    case 1:
      return {
        transform: `translateX(${sign * 58}%) translateZ(-140px) rotateY(${-sign * 38}deg) scale(0.80)`,
        opacity: 0.72,
        zIndex: 7,
        pointerEvents: "auto",
        transition: T,
      };
    case 2:
      return {
        transform: `translateX(${sign * 96}%) translateZ(-260px) rotateY(${-sign * 52}deg) scale(0.60)`,
        opacity: 0.38,
        zIndex: 4,
        pointerEvents: "auto",
        transition: T,
      };
    default:
      return {
        transform: `translateX(${sign * 130}%) translateZ(-320px) rotateY(${-sign * 62}deg) scale(0.42)`,
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none",
        transition: T,
      };
  }
}

/* ─── Component ──────────────────────────────────────────────────── */
export default function VideoCarousel() {
  const total = VIDEOS.length;
  const [current, setCurrent]   = useState(0);
  const [paused,  setPaused]    = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => setCurrent((c) => (c + dir + total) % total),
    [total],
  );
  const goTo = useCallback((i: number) => setCurrent(i), []);

  /* Auto-advance */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(1), AUTO_DELAY);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, go]);

  /* Play active / pause others */
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === current) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
    });
  }, [current]);

  /* Touch swipe */
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-foreground/[0.03]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Contenido UGC
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">Mi trabajo</h2>
        </div>

        {/* Stage */}
        <div
          className="relative mx-auto select-none"
          style={{ height: "clamp(340px, 60vw, 560px)", perspective: "1100px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {VIDEOS.map((src, i) => {
            const half   = Math.floor(total / 2);
            const offset = ((i - current + total + half) % total) - half;
            const style  = cardStyle(offset);

            return (
              <div
                key={i}
                onClick={() => Math.abs(offset) > 0 && goTo(i)}
                style={{
                  position: "absolute",
                  inset: 0,
                  margin: "auto",
                  width: "clamp(200px, 36vw, 340px)",
                  height: "100%",
                  willChange: "transform, opacity",
                  ...style,
                }}
              >
                {/* Card */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    boxShadow:
                      offset === 0
                        ? "0 32px 80px -16px oklch(0.18 0.04 350 / 0.45), 0 0 0 1px oklch(0.88 0.02 350 / 0.55)"
                        : "0 16px 40px -12px oklch(0.18 0.04 350 / 0.22)",
                    background: "oklch(0.15 0.01 350)",
                  }}
                >
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
                    src={src}
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* Bottom gradient on active */}
                  {offset === 0 && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, oklch(0.10 0.02 350 / 0.50) 0%, transparent 55%)",
                        borderRadius: "inherit",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </div>

              </div>
            );
          })}

          {/* ← */}
          <button
            aria-label="Anterior"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-background/80 border border-border/60 backdrop-blur-sm shadow-md transition-all duration-200 hover:scale-110 hover:bg-background active:scale-95"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          {/* → */}
          <button
            aria-label="Siguiente"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-background/80 border border-border/60 backdrop-blur-sm shadow-md transition-all duration-200 hover:scale-110 hover:bg-background active:scale-95"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Dots — counter (n/11) + pill indicators */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <span className="text-xs font-medium tabular-nums text-muted-foreground">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2">
            {VIDEOS.map((_, i) => (
              <button
                key={i}
                aria-label={`Video ${i + 1}`}
                onClick={() => goTo(i)}
                style={{
                  width:  i === current ? "2rem" : "0.4rem",
                  height: "0.4rem",
                  borderRadius: "9999px",
                  background: i === current ? "var(--primary)" : "oklch(0.82 0.02 350)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "width 0.4s cubic-bezier(0.34,1.10,0.64,1), background 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
