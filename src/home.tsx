import { useEffect } from "react";
import { Instagram, MessageCircle, Music2, Mail, MapPin, Sparkles, ArrowDown } from "lucide-react";
import heroImg from "@/assets/paula-hero.jpeg";
import p1 from "@/assets/paula-1.jpeg";
import p2 from "@/assets/paula-2.jpeg";
import p3 from "@/assets/paula-3.jpeg";
import p4 from "@/assets/paula-4.jpeg";

/* ─── Constants ──────────────────────────────────────────────────── */
const PHONE = "34611477211";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent("¡Hola Paula! Vengo desde tu web ✨")}`;
const INSTAGRAM_URL = "https://www.instagram.com/pauulamartineez";
const TIKTOK_URL = "https://www.tiktok.com/@paulaamaartinezz";

/** Fixed navbar height + comfortable breathing room */
const NAV_OFFSET = 90;

/* ─── Smooth-scroll engine ───────────────────────────────────────── */

/** easeInOutQuint — ultra-smooth, luxury deceleration */
function easeInOutQuint(t: number): number {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
}

/**
 * Scrolls to an element by id with a silky ease.
 * Adaptive duration: 500 ms minimum, scaled up with distance, capped at 950 ms.
 * Automatically skips animation when prefers-reduced-motion is set.
 */
function scrollToId(id: string): void {
  if (id === "top") {
    smoothScrollTo(0);
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  const targetY = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  smoothScrollTo(targetY);
}

function smoothScrollTo(targetY: number): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: targetY });
    return;
  }

  const start = window.scrollY;
  const distance = targetY - start;
  if (Math.abs(distance) < 1) return;

  // Adaptive: ~0.55ms per pixel, min 500ms, max 950ms
  const duration = Math.min(Math.max(Math.abs(distance) * 0.55, 500), 950);
  let startTime: number | null = null;

  function step(ts: number) {
    if (!startTime) startTime = ts;
    const elapsed = ts - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutQuint(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/* ─── Root ───────────────────────────────────────────────────────── */
export default function Home() {
  /**
   * Single delegated listener — intercepts ALL internal anchor clicks
   * (nav links, hero CTAs, etc.) and replaces the default jump with a
   * smooth animated scroll, regardless of where they live in the tree.
   */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const id = href.slice(1); // strip leading #
      const target = id ? document.getElementById(id) : null;

      // Only intercept links that point to an existing section on this page
      if (!id || (!target && id !== "top")) return;

      e.preventDefault();
      scrollToId(id);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Connect />
      <Footer />
    </main>
  );
}

/* ─── Nav ────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-semibold tracking-wide">
          Paula <span className="text-accent">Martínez</span>
        </a>

        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#sobre-mi" className="hover:text-foreground transition-colors duration-200">
            Sobre mí
          </a>
          <a href="#galeria" className="hover:text-foreground transition-colors duration-200">
            Galería
          </a>
          <a href="#contacto" className="hover:text-foreground transition-colors duration-200">
            Contáctame
          </a>
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex btn-3d bg-primary text-primary-foreground text-sm"
          style={{ padding: "0.6rem 1.1rem" }}
        >
          Colaborar
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> UGC Creator
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-balance md:text-7xl">
            Hola, soy <span className="italic text-primary">Paula Martínez</span>.
          </h1>

          <p className="mt-6 max-w-md text-xl font-medium leading-snug text-foreground">
            Soy creadora UGC.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 perspective">
            <a href="#contacto" className="btn-3d bg-primary text-primary-foreground">
              Contáctame <ArrowDown className="h-4 w-4" />
            </a>
            <a href="#sobre-mi" className="btn-3d bg-card text-foreground">
              Conóceme
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-accent/20 blur-2xl" aria-hidden />
          <img
            src={heroImg}
            alt="Retrato de Paula Martínez"
            className="relative aspect-[3/4] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── About ──────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Sobre mí</p>
        </div>

        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          <div className="md:col-span-2 perspective">
            <img
              src={p1}
              alt="Paula Martínez"
              className="aspect-[3/4] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)] transition-transform duration-500 hover:rotate-[-2deg]"
              loading="lazy"
            />
          </div>

          <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">¡Hola!</span> Soy creadora de
              contenido UGC de 23 años residente en Murcia, especializada en los sectores de{" "}
              <span className="text-foreground">moda, belleza, estilo de vida</span>… ¡Y lo que me
              propongas!
            </p>
            <p>
              Me dedico a transformar los valores de tu marca en contenido orgánico, estético y
              dinámico diseñado específicamente para conectar con las audiencias actuales y potenciar
              tus ventas en el entorno digital.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Moda", "Belleza", "Lifestyle", "UGC", "Estilo de vida"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery ────────────────────────────────────────────────────── */
function Gallery() {
  const items = [
    { src: p2, alt: "Paula en Barcelona", span: "md:col-span-2 md:row-span-2" },
    { src: p3, alt: "Paula en la playa", span: "" },
    { src: p4, alt: "Paula al atardecer", span: "" },
    { src: heroImg, alt: "Paula street style", span: "md:col-span-2" },
  ];

  return (
    <section id="galeria" className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Galería</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">Momentos</h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 md:inline-flex items-center gap-2"
          >
            Ver más en Instagram →
          </a>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className={`overflow-hidden rounded-3xl ${it.span}`}>
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Connect ────────────────────────────────────────────────────── */
function Connect() {
  const links = [
    {
      label: "Instagram",
      handle: "@pauulamartineez",
      href: INSTAGRAM_URL,
      icon: Instagram,
      style: {
        background:
          "linear-gradient(135deg, oklch(0.55 0.18 30), oklch(0.5 0.22 340), oklch(0.45 0.20 280))",
        color: "white",
      },
    },
    {
      label: "TikTok",
      handle: "@paulaamaartinezz",
      href: TIKTOK_URL,
      icon: Music2,
      style: {
        background: "linear-gradient(135deg, oklch(0.18 0.02 280), oklch(0.30 0.04 280))",
        color: "white",
      },
    },
    {
      label: "WhatsApp",
      handle: "Escríbeme directamente",
      href: WHATSAPP_URL,
      icon: MessageCircle,
      style: {
        background: "linear-gradient(135deg, oklch(0.65 0.15 150), oklch(0.50 0.16 155))",
        color: "white",
      },
    },
  ];

  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Contáctame</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">Conectemos</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Elige tu canal favorito. Te respondo lo antes posible.
          </p>
        </div>

        <div className="grid gap-6 perspective md:grid-cols-3">
          {links.map(({ label, handle, href, icon: Icon, style }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="btn-3d group flex-col items-start text-left"
              style={{ ...style, padding: "1.75rem", borderRadius: "1.5rem" }}
            >
              <div className="flex w-full items-center justify-between">
                <Icon className="h-8 w-8" />
                <span className="text-xs font-semibold uppercase tracking-widest opacity-80">
                  Abrir →
                </span>
              </div>
              <div className="mt-8">
                <p className="font-display text-3xl">{label}</p>
                <p className="mt-1 text-sm opacity-90">{handle}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" aria-hidden />
            <span>Murcia/Nueva York</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4" aria-hidden />
            <span>colaboraciones@paulamartinez.com</span>
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
      <p>© {year} Paula Martínez · Hecho con cariño.</p>
    </footer>
  );
}
