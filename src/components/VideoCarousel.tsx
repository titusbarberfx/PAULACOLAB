import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import v1 from "@/assets/videos/paula-video-1.mp4";
import v2 from "@/assets/videos/paula-video-2.mp4";
import v3 from "@/assets/videos/paula-video-3.mp4";
import v4 from "@/assets/videos/paula-video-4.mp4";

const VIDEOS = [v1, v2, v3, v4];
const AUTO_DELAY = 4500; // ms between auto-advances

/* ─── Per-card 3D transform ──────────────────────────────────────── */
interface CardStyle {
  transform: string;
  opacity: number;
  zIndex: number;
  pointerEvents: "auto" | "none";
  transition: string;
}

function getCardStyle(offset: number): CardStyle {
  const abs = Math.abs(offset);
  const sign = Math.sign(offset) || 1;
  const TRANSITION = "transform 0.65s cubic-bezier(0.34,1.10,0.64,1), opacity 0.5s ease";

  if (abs === 0) {
    return {
      transform: "translateX(0%) translateZ(0px) rotateY(0deg) scale(1)",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "none",
      transition: TRANSITION,
    };
  }
  if (abs === 1) {
    return {
      transform: `translateX(${sign * 58}%) translateZ(-140px) rotateY(${-sign * 38}deg) scale(0.80)`,
      opacity: 0.72,
      zIndex: 7,
      pointerEvents: "auto",
      transition: TRANSITION,
    };
  }
  if (abs === 2) {
    return {
      transform: `translateX(${sign * 96}%) translateZ(-260px) rotateY(${-sign * 52}deg) scale(0.60)`,
      opacity: 0.38,
      zIndex: 4,
      pointerEvents: "auto",
      transition: TRANSITION,
    };
  }
  // Hidden
  return {
    transform: `translateX(${sign * 130}%) translateZ(-320px) rotateY(${-sign * 60}deg) scale(0.45)`,
    opacity: 0,
    zIndex: 0,
    pointerEvents: "none",
    transition: TRANSITION,
  };
}

/* ─── Component ──────────────────────────────────────────────────── */
export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = VIDEOS.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      setCurrent((c) => (c + dir + total) % total);
    },
    [total],
  );

  const goTo = useCallback((idx: number) => setCurrent(idx), []);

  /* Auto-advance */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(1), AUTO_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, go]);

  /* Play active video, pause all others */
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

  /* Touch / drag support */
  const touchStartX = useRef<number | null>(null);
  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  }

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
          className="relative mx-auto"
          style={{ height: "clamp(340px, 60vw, 560px)", perspective: "1100px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {VIDEOS.map((src, i) => {
            const offset = ((i - current + total + Math.floor(total / 2)) % total) - Math.floor(total / 2);
            const style = getCardStyle(offset);

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
                  ...style,
                  willChange: "transform, opacity",
                }}
              >
                {/* Card shell */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    boxShadow:
                      offset === 0
                        ? "0 32px 80px -16px oklch(0.18 0.04 350 / 0.45), 0 0 0 1px oklch(0.88 0.02 350 / 0.6)"
                        : "0 16px 40px -12px oklch(0.18 0.04 350 / 0.25)",
                    background: "oklch(0.20 0.01 350)",
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

                  {/* Play-indicator overlay on active card */}
                  {offset === 0 && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, oklch(0.10 0.02 350 / 0.55) 0%, transparent 50%)",
                        borderRadius: "inherit",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </div>

                {/* Reflection */}
                {offset === 0 && (
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      bottom: "-18%",
                      left: 0,
                      right: 0,
                      height: "18%",
                      background: "inherit",
                      transform: "scaleY(-1)",
                      opacity: 0.12,
                      filter: "blur(3px)",
                      maskImage: "linear-gradient(to bottom, black, transparent)",
                      WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                      borderRadius: "0 0 1.5rem 1.5rem",
                      overflow: "hidden",
                    }}
                  />
                )}
              </div>
            );
          })}

          {/* Prev arrow */}
          <button
            aria-label="Anterior"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-background/80 border border-border/60 backdrop-blur-sm shadow-md transition-all duration-200 hover:scale-110 hover:bg-background active:scale-95"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          {/* Next arrow */}
          <button
            aria-label="Siguiente"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-background/80 border border-border/60 backdrop-blur-sm shadow-md transition-all duration-200 hover:scale-110 hover:bg-background active:scale-95"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir al video ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? "2rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                background:
                  i === current
                    ? "var(--primary)"
                    : "oklch(0.88 0.02 350)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "width 0.4s cubic-bezier(0.34,1.10,0.64,1), background 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
