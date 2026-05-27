/* ─────────────────────────────────────────────────────────────────
   UGCSections.tsx
   Four sections extracted from Paula's Canva portfolio:
     1. WhatIsUGC   — ¿Qué es UGC? / ¿Por qué UGC?
     2. Stats        — 79 % / 90 % stat cards
     3. WhyMe        — ¿Por qué elegirme a mí?
     4. Brands       — infinite-scroll logo marquee
   ───────────────────────────────────────────────────────────────── */

/* ─── 1 · ¿Qué es UGC? / ¿Por qué UGC? ─────────────────────────── */
export function WhatIsUGC() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section label */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Qué ofrezco
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">El contenido UGC</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* ¿Qué es UGC? */}
          <div
            className="rounded-3xl p-10 md:p-12 flex flex-col gap-5"
            style={{
              background: "linear-gradient(135deg, oklch(0.91 0.07 145), oklch(0.87 0.06 172))",
            }}
          >
            <h3
              className="font-display text-4xl md:text-5xl leading-tight"
              style={{ color: "oklch(0.22 0.08 160)" }}
            >
              ¿Qué es UGC?
            </h3>
            <div
              className="space-y-4 text-base md:text-lg leading-relaxed font-medium"
              style={{ color: "oklch(0.25 0.07 160)" }}
            >
              <p>
                Las siglas UGC significan <strong>"El Contenido Generado por el Usuario"</strong> o{" "}
                <strong>"User Generated Content"</strong>.
              </p>
              <p>
                Este contenido es aparentemente generado por los clientes que consumen un
                producto/servicio de una determinada marca y muestran su experiencia con este.
              </p>
              <p>
                El contenido que se crea debe ser <strong>cercano</strong> para poder crear vínculos
                con la audiencia.
              </p>
            </div>
          </div>

          {/* ¿Por qué UGC? */}
          <div
            className="rounded-3xl p-10 md:p-12 flex flex-col gap-5"
            style={{
              background: "linear-gradient(135deg, oklch(0.89 0.04 285), oklch(0.86 0.05 310))",
            }}
          >
            <h3
              className="font-display text-4xl md:text-5xl leading-tight"
              style={{ color: "oklch(0.22 0.07 265)" }}
            >
              ¿Por qué UGC?
            </h3>
            <div
              className="space-y-4 text-base md:text-lg leading-relaxed font-medium"
              style={{ color: "oklch(0.25 0.06 265)" }}
            >
              <p>
                El contenido UGC es una <strong>nueva metodología de marketing</strong> asequible y
                eficiente para que el negocio prospere adecuadamente.
              </p>
              <p>
                Los clientes buscan <strong>autenticidad y confianza</strong>, aspectos que a veces
                los influencers no consiguen. Es crucial que se sientan identificados con el
                producto y con quién se los vende.
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
          "linear-gradient(135deg, oklch(0.86 0.07 350), oklch(0.82 0.06 310), oklch(0.80 0.05 285))",
      }}
    >
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-12 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "oklch(0.96 0.01 350 / 0.75)" }}
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

        <div className="grid gap-10 md:grid-cols-2">
          {STATS.map(({ pct, text }) => (
            <div key={pct} className="flex flex-col items-center text-center gap-4">
              <span
                className="font-display leading-none"
                style={{
                  fontSize: "clamp(4.5rem, 12vw, 7rem)",
                  color: "oklch(0.97 0.01 40)",
                  letterSpacing: "-0.03em",
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
export function WhyMe() {
  const points = [
    { emoji: "💼", text: "Trabajadora, responsable y creativa — siempre entrego a tiempo." },
    { emoji: "🌍", text: "Inglés fluido gracias a mi experiencia viviendo en el extranjero." },
    { emoji: "🎨", text: "Perspectiva multicultural que enriquece cada pieza de contenido." },
    { emoji: "📲", text: "Contenido orgánico y estético diseñado para conectar y vender." },
  ];

  return (
    <section
      className="py-24 md:py-32"
      style={{
        background: "linear-gradient(135deg, oklch(0.90 0.05 290), oklch(0.87 0.04 310))",
      }}
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "oklch(0.30 0.08 265)" }}
          >
            Mi propuesta de valor
          </p>
          <h2
            className="mt-3 font-display text-4xl md:text-6xl leading-tight"
            style={{ color: "oklch(0.20 0.08 255)" }}
          >
            ¿Por qué
            <br />
            elegirme a mí?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Main paragraph */}
          <div
            className="md:col-span-2 rounded-2xl p-8"
            style={{ background: "oklch(1 0 0 / 0.35)" }}
          >
            <p
              className="text-lg md:text-xl leading-relaxed font-medium"
              style={{ color: "oklch(0.22 0.08 260)" }}
            >
              Me considero una persona{" "}
              <strong>trabajadora, responsable y creativa</strong>. El inglés para mí no es problema,
              ya que estuve viviendo en el extranjero. Además, considero que esto es un punto a favor
              a la hora de ver el mundo desde distintas perspectivas, ya que he aprendido y continúo
              acercándome a otras culturas.
            </p>
          </div>

          {/* Feature pills */}
          {points.map(({ emoji, text }) => (
            <div
              key={emoji}
              className="flex items-start gap-4 rounded-2xl p-6"
              style={{ background: "oklch(1 0 0 / 0.28)" }}
            >
              <span className="text-2xl leading-none mt-0.5" aria-hidden>{emoji}</span>
              <p
                className="text-base leading-relaxed font-medium"
                style={{ color: "oklch(0.22 0.08 260)" }}
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

/* ─── 4 · Brands marquee ─────────────────────────────────────────── */
const BRANDS = [
  "CREU", "BYROKKO", "Mäka Lash", "BAHALA NA", "MAYBELLINE", "DIA",
  "Carolina Herrera", "WELEDA", "eggo.", "hismile", "MUK BARCELONA",
  "L'ORÉAL", "NYX Professional Makeup", "BIOTHERM", "GLOWFILTER",
  "MATCHA & CO", "elinor", "waynabox", "KÉRASTASE", "Mixa", "LANCÔME",
  "Niche Beauty Lab", "Velandia", "Mitchilla", "Dermocracy",
  "McDonald's", "Fini", "ARMANI beauty",
];

export function Brands() {
  // Duplicate list so the CSS loop is seamless
  const row = [...BRANDS, ...BRANDS];

  return (
    <section
      className="py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, oklch(0.90 0.08 145), oklch(0.87 0.07 172))",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 mb-14">
        <div className="text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "oklch(0.28 0.08 160)" }}
          >
            Trayectoria
          </p>
          <h2
            className="mt-3 font-display text-4xl md:text-6xl"
            style={{ color: "oklch(0.18 0.09 160)" }}
          >
            Marcas que han
            <br />
            confiado en mí
          </h2>
        </div>
      </div>

      {/* Infinite marquee — two rows, opposite directions */}
      <div className="flex flex-col gap-5 select-none">

        {/* Row 1 → left */}
        <div className="flex gap-5 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
          <div
            className="flex gap-5 shrink-0"
            style={{ animation: "marqueeLeft 28s linear infinite" }}
          >
            {row.map((brand, i) => (
              <BrandPill key={`a-${i}`} name={brand} />
            ))}
          </div>
        </div>

        {/* Row 2 → right */}
        <div className="flex gap-5 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
          <div
            className="flex gap-5 shrink-0"
            style={{ animation: "marqueeRight 32s linear infinite" }}
          >
            {row.map((brand, i) => (
              <BrandPill key={`b-${i}`} name={brand} />
            ))}
          </div>
        </div>

      </div>

      {/* Animated badge */}
      <div className="mt-12 flex justify-center">
        <div
          className="rounded-full px-6 py-3 text-sm font-semibold"
          style={{
            background: "oklch(0.18 0.09 160)",
            color: "oklch(0.91 0.07 145)",
            letterSpacing: "0.04em",
          }}
        >
          Tu marca, la siguiente ✦
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function BrandPill({ name }: { name: string }) {
  return (
    <span
      className="whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold shrink-0"
      style={{
        background: "oklch(1 0 0 / 0.55)",
        color: "oklch(0.20 0.09 160)",
        border: "1.5px solid oklch(0.22 0.09 160 / 0.18)",
        backdropFilter: "blur(6px)",
        letterSpacing: "0.02em",
      }}
    >
      {name}
    </span>
  );
}
