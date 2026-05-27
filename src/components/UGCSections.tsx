/* eslint-disable @typescript-eslint/no-unused-vars */

/* ── Logo SVG imports ──────────────────────────────────────────────── */
import logoMaybelline  from "@/assets/logos/maybelline.svg";
import logoLoreal      from "@/assets/logos/loreal.svg";
import logoKerastase   from "@/assets/logos/kerastase.svg";
import logoArmani      from "@/assets/logos/armani.svg";
import logoNyx         from "@/assets/logos/nyx.svg";
import logoBiotherm    from "@/assets/logos/biotherm.svg";
import logoWeleda      from "@/assets/logos/weleda.svg";
import logoMixa        from "@/assets/logos/mixa.svg";
import logoHismile     from "@/assets/logos/hismile.svg";
import logoMcdonalds   from "@/assets/logos/mcdonalds.svg";
import logoDia         from "@/assets/logos/dia.svg";
import logoByrokko     from "@/assets/logos/byrokko.svg";
import logoWaynabox    from "@/assets/logos/waynabox.svg";
import logoDermocracy  from "@/assets/logos/dermocracy.svg";
import logoFini        from "@/assets/logos/fini.svg";
import logoBahala      from "@/assets/logos/bahala.svg";
import logoMatcha      from "@/assets/logos/matcha.svg";
import logoCreu        from "@/assets/logos/creu.svg";
import logoNicheBeauty from "@/assets/logos/nichebeauty.svg";
import logoMatchaflix  from "@/assets/logos/matchaflix.svg";
import logoEggo        from "@/assets/logos/eggo.svg";
import logoMakalash    from "@/assets/logos/makalash.svg";
import logoMukhair     from "@/assets/logos/mukhair.svg";
import logoVelandia    from "@/assets/logos/velandia.svg";
import logoMitchilla   from "@/assets/logos/mitchilla.svg";
import logoGlowfilter  from "@/assets/logos/glowfilter.svg";
import logoElinor      from "@/assets/logos/elinor.svg";

/* ═══════════════════════════════════════════════════════════════════
   UGCSections.tsx  —  All sections adapted to the rose-pastel palette
   ═══════════════════════════════════════════════════════════════════ */

/* ─── 1 · ¿Qué es UGC? / ¿Por qué UGC? ─────────────────────────── */
export function WhatIsUGC() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Qué ofrezco
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl text-foreground">
            El contenido UGC
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* ¿Qué es UGC? */}
          <div
            className="rounded-3xl p-10 md:p-12 flex flex-col gap-5"
            style={{
              background: "linear-gradient(145deg, oklch(0.94 0.025 350), oklch(0.91 0.035 10))",
              border: "1px solid oklch(0.88 0.03 350)",
            }}
          >
            <h3 className="font-display text-4xl md:text-5xl leading-tight text-foreground">
              ¿Qué es UGC?
            </h3>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                Las siglas UGC significan{" "}
                <span className="font-semibold text-foreground">
                  "El Contenido Generado por el Usuario"
                </span>{" "}
                o <span className="font-semibold text-foreground">"User Generated Content"</span>.
              </p>
              <p>
                Este contenido es aparentemente generado por los clientes que consumen un
                producto/servicio de una determinada marca y muestran su experiencia con este.
              </p>
              <p>
                El contenido que se crea debe ser{" "}
                <span className="font-semibold text-foreground">cercano</span> para poder crear
                vínculos con la audiencia.
              </p>
            </div>
          </div>

          {/* ¿Por qué UGC? */}
          <div
            className="rounded-3xl p-10 md:p-12 flex flex-col gap-5"
            style={{
              background: "linear-gradient(145deg, oklch(0.92 0.03 15), oklch(0.89 0.04 5))",
              border: "1px solid oklch(0.86 0.035 15)",
            }}
          >
            <h3 className="font-display text-4xl md:text-5xl leading-tight text-foreground">
              ¿Por qué UGC?
            </h3>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                El contenido UGC es una{" "}
                <span className="font-semibold text-foreground">
                  nueva metodología de marketing
                </span>{" "}
                asequible y eficiente para que el negocio prospere adecuadamente.
              </p>
              <p>
                Los clientes buscan{" "}
                <span className="font-semibold text-foreground">autenticidad y confianza</span>,
                aspectos que a veces los influencers no consiguen. Es crucial que se sientan
                identificados con el producto y con quién se los vende.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 2 · Stats ──────────────────────────────────────────────────── */
const STATS = [
  {
    pct: "79%",
    text: "de los consumidores afirman que el contenido generado por usuarios influye en su decisión de compra",
  },
  {
    pct: "90%",
    text: "de los consumidores afirman que la autenticidad es importante al decidir qué marcas apoyan",
  },
];

export function Stats() {
  return (
    <section
      className="py-24 md:py-32"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.82 0.08 5), oklch(0.78 0.07 350), oklch(0.76 0.06 340))",
      }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "oklch(0.96 0.015 350 / 0.70)" }}
          >
            Por qué funciona
          </p>
          <h2
            className="mt-3 font-display text-4xl md:text-6xl"
            style={{ color: "oklch(0.97 0.01 40)" }}
          >
            Los datos no mienten
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {STATS.map(({ pct, text }) => (
            <div key={pct} className="flex flex-col items-center text-center gap-5">
              <span
                className="font-display leading-none"
                style={{
                  fontSize: "clamp(5rem, 14vw, 8rem)",
                  color: "oklch(0.97 0.01 40)",
                  letterSpacing: "-0.03em",
                  textShadow: "0 4px 24px oklch(0.30 0.08 10 / 0.30)",
                }}
              >
                {pct}
              </span>
              <p
                className="max-w-xs text-base md:text-lg leading-relaxed font-medium"
                style={{ color: "oklch(0.97 0.01 40 / 0.85)" }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 3 · ¿Por qué elegirme a mí? ───────────────────────────────── */
const POINTS = [
  { emoji: "💼", text: "Trabajadora, responsable y creativa — siempre entrego a tiempo." },
  { emoji: "🌍", text: "Inglés fluido gracias a mi experiencia viviendo en el extranjero." },
  { emoji: "🎨", text: "Perspectiva multicultural que enriquece cada pieza de contenido." },
  { emoji: "📲", text: "Contenido orgánico y estético diseñado para conectar y vender." },
];

export function WhyMe() {
  return (
    <section
      className="py-24 md:py-32"
      style={{
        background: "linear-gradient(135deg, oklch(0.96 0.02 350), oklch(0.93 0.03 10))",
      }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Mi propuesta de valor
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl leading-tight text-foreground">
            ¿Por qué
            <br />
            elegirme a mí?
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Main paragraph — full width */}
          <div
            className="md:col-span-2 rounded-2xl p-8"
            style={{
              background: "oklch(1 0 0 / 0.60)",
              border: "1px solid oklch(0.88 0.03 350)",
            }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Me considero una persona{" "}
              <span className="font-semibold text-foreground">
                trabajadora, responsable y creativa
              </span>
              . El inglés para mí no es problema, ya que estuve viviendo en el extranjero. Además,
              considero que esto es un punto a favor a la hora de ver el mundo desde distintas
              perspectivas, ya que he aprendido y continúo acercándome a otras culturas.
            </p>
          </div>

          {/* Feature pills */}
          {POINTS.map(({ emoji, text }) => (
            <div
              key={emoji}
              className="flex items-start gap-4 rounded-2xl p-6"
              style={{
                background: "oklch(1 0 0 / 0.50)",
                border: "1px solid oklch(0.88 0.03 350)",
              }}
            >
              <span className="text-2xl leading-none mt-0.5" aria-hidden>
                {emoji}
              </span>
              <p className="text-base leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 4 · Colaboraciones — logo marquee ─────────────────────────── */

/** Each brand: name (for alt text) + local SVG import */
const BRANDS: { name: string; logo: string }[] = [
  { name: "Maybelline New York",  logo: logoMaybelline  },
  { name: "L'Oréal Paris",        logo: logoLoreal      },
  { name: "Kérastase",            logo: logoKerastase   },
  { name: "Armani Beauty",        logo: logoArmani      },
  { name: "NYX Professional",     logo: logoNyx         },
  { name: "Biotherm",             logo: logoBiotherm    },
  { name: "WELEDA",               logo: logoWeleda      },
  { name: "mixa",                 logo: logoMixa        },
  { name: "hismile",              logo: logoHismile     },
  { name: "McDonald's",           logo: logoMcdonalds   },
  { name: "DIA",                  logo: logoDia         },
  { name: "BYROKKO",              logo: logoByrokko     },
  { name: "waynabox",             logo: logoWaynabox    },
  { name: "Dermocracy",           logo: logoDermocracy  },
  { name: "Fini",                 logo: logoFini        },
  { name: "BAHALA NA",            logo: logoBahala      },
  { name: "MATCHA & CO",          logo: logoMatcha      },
  { name: "CREU",                 logo: logoCreu        },
  { name: "Niche Beauty Lab",     logo: logoNicheBeauty },
  { name: "Matchaflix",           logo: logoMatchaflix  },
  { name: "eggo.",                logo: logoEggo        },
  { name: "Mäka Lash",            logo: logoMakalash    },
  { name: "MUK Barcelona",        logo: logoMukhair     },
  { name: "Velandia",             logo: logoVelandia    },
  { name: "Mitchilla",            logo: logoMitchilla   },
  { name: "GLOWFILTER",           logo: logoGlowfilter  },
  { name: "elinor",               logo: logoElinor      },
];

/* Duplicate for seamless loop */
const ROW_A = [...BRANDS, ...BRANDS];
const ROW_B = [...[...BRANDS].reverse(), ...[...BRANDS].reverse()];

export function Brands() {
  return (
    <section
      id="colaboraciones"
      className="py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, oklch(0.95 0.02 350), oklch(0.92 0.03 10))",
      }}
    >
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 mb-14 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Colaboraciones
        </p>
        <h2 className="mt-3 font-display text-4xl md:text-6xl text-foreground">
          Marcas que han
          <br />
          confiado en mí
        </h2>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-5 select-none">
        <MarqueeRow items={ROW_A} direction="left"  speed={40} />
        <MarqueeRow items={ROW_B} direction="right" speed={46} />
      </div>

      {/* CTA badge */}
      <div className="mt-14 flex justify-center">
        <div
          className="rounded-full px-8 py-3 text-sm font-semibold"
          style={{
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            letterSpacing: "0.04em",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          Tu marca, la siguiente ✦
        </div>
      </div>

      {/* CSS keyframes */}
      <style>{`
        @keyframes scrollLeft  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes scrollRight { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
      `}</style>
    </section>
  );
}

/* ── Marquee row ───────────────────────────────────────────────────── */
function MarqueeRow({
  items,
  direction,
  speed,
}: {
  items: typeof ROW_A;
  direction: "left" | "right";
  speed: number;
}) {
  return (
    <div
      className="flex overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className="flex gap-4 shrink-0"
        style={{
          animation: `scroll${direction === "left" ? "Left" : "Right"} ${speed}s linear infinite`,
        }}
      >
        {items.map((brand, i) => (
          <BrandCard key={`${direction}-${i}`} name={brand.name} logo={brand.logo} />
        ))}
      </div>
    </div>
  );
}

/* ── Brand card ────────────────────────────────────────────────────── */
function BrandCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div
      className="shrink-0 overflow-hidden rounded-2xl"
      style={{
        height: "5rem",
        width: "12rem",
        boxShadow: "0 2px 12px oklch(0.70 0.04 350 / 0.18)",
        border: "1.5px solid oklch(0.88 0.03 350)",
      }}
    >
      <img
        src={logo}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}

/* ── Legacy (kept for type safety — remove if unused) ───────────────── */
function _LegacyBrandCard({ name }: { name: string }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center rounded-2xl px-5"
      style={{
        height: "5rem",
        minWidth: "8rem",
        maxWidth: "13rem",
        background: "oklch(1 0 0 / 0.80)",
        border: "1.5px solid oklch(0.88 0.03 350)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      <span
        className="text-center font-semibold leading-tight"
        style={{
          fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)",
          color: "oklch(0.35 0.05 350)",
          letterSpacing: "0.02em",
        }}
      >
        {name}
      </span>
    </div>
  );
}
