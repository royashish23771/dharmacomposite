import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Beaker, Layers, ShieldCheck } from "lucide-react";
import EditorialMarquee from "@/components/Marquee";
import { FadeUp, KineticLines, Overline } from "@/components/Reveal";
import { PRODUCTS } from "@/lib/data";

const MANIFESTO = [
  {
    num: "01",
    title: "Precision Moulding",
    icon: Layers,
    body: "Every laminate is laid up by hand and verified layer by layer. Glass content, resin ratio and cure cycles are controlled — not guessed. The result is a wall thickness you can specify and trust.",
  },
  {
    num: "02",
    title: "Corrosion Immunity",
    icon: ShieldCheck,
    body: "Steel rusts. Concrete spalls. FRP simply does not care. Isophthalic and vinyl-ester resin systems keep acids, alkalis and saline atmospheres on the outside — for decades, not warranty periods.",
  },
  {
    num: "03",
    title: "Engineered Chemistry",
    icon: Beaker,
    body: "We select the resin system to match your medium, temperature and concentration. HCl storage, chlorine fumes, plating-line exhaust — each duty gets its own composite recipe.",
  },
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const ringY = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-0" aria-hidden="true">
        <img
          src="/images/hero.jpg"
          alt=""
          className="h-[125%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/82" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />
        <div className="absolute inset-0 blueprint-grid opacity-70" />
      </motion.div>

      <motion.div
        style={{ y: ringY }}
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[16%] hidden lg:block"
      >
        <div className="relative h-72 w-72 animate-spin-slow rounded-full border border-dashed border-orange-600/40">
          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-orange-600" />
        </div>
        <div className="absolute inset-8 rounded-full border border-white/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] tracking-[0.4em] text-orange-500/80">FRP · GRP</span>
        </div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-0 pt-40 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Overline data-testid="hero-overline">Dharma Composite Private Limited — Bhiwadi, RJ</Overline>
        </motion.div>

        <KineticLines
          data-testid="hero-title"
          className="mt-8"
          delay={0.25}
          lineClassName="font-display uppercase leading-[0.92] tracking-tight text-slate-50 text-[clamp(3rem,9.5vw,9rem)]"
          lines={[
            <>Engineered</>,
            <>
              <span className="text-orange-600">Composite</span>
            </>,
            <>Solutions</>,
          ]}
        />

        <div className="mt-10 flex flex-col gap-10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            data-testid="hero-subtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-base leading-relaxed text-slate-300"
          >
            FRP tanks, fittings, blowers and complete fume-handling systems —
            designed for the chemistries that destroy steel. Manufactured in
            Bhiwadi, delivered across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/products"
              data-testid="hero-explore-products"
              className="group flex items-center gap-2 bg-orange-600 px-7 py-4 font-mono text-xs tracking-[0.25em] uppercase text-slate-950 transition-colors duration-300 hover:bg-orange-500"
            >
              Explore Products
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              data-testid="hero-contact-link"
              className="flex items-center gap-2 border border-white/25 px-7 py-4 font-mono text-xs tracking-[0.25em] uppercase text-slate-50 transition-colors duration-300 hover:border-orange-600 hover:text-orange-500"
            >
              Talk to Us
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25 }}
          className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4"
          data-testid="hero-spec-bar"
        >
          {[
            ["Plant", "Bhiwadi · Rajasthan"],
            ["Material", "FRP / GRP Composite"],
            ["Process", "Moulding & Winding"],
            ["Scroll", "01 — 04 Sections"],
          ].map(([k, v], i) => (
            <div
              key={k}
              className={`flex items-center justify-between gap-2 border-white/10 px-4 py-5 font-mono text-[10px] tracking-[0.2em] uppercase sm:px-6 ${
                i > 0 ? "border-l" : ""
              }`}
            >
              <span className="text-slate-500">{k}</span>
              <span className="text-right text-slate-200">
                {k === "Scroll" ? (
                  <span className="flex items-center gap-1 text-orange-500">
                    <ArrowDown className="h-3.5 w-3.5 animate-bounce" /> {v}
                  </span>
                ) : (
                  v
                )}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ManifestoSection = () => (
  <section data-testid="manifesto-section" className="relative border-b border-white/10">
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <img src="/images/texture.jpg" alt="" className="h-full w-full object-cover opacity-[0.12]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
    </div>

    <div className="relative mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <FadeUp>
        <Overline>The Manifesto — Why Dharma</Overline>
      </FadeUp>
      <KineticLines
        inView
        className="mt-6"
        lineClassName="font-display uppercase leading-[0.95] text-slate-50 text-[clamp(2.2rem,5.5vw,4.5rem)]"
        lines={[<>Built to outlast</>, <><span className="text-outline">the chemistry.</span></>]}
      />

      <div className="mt-16 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
        {MANIFESTO.map((ch, i) => (
          <FadeUp key={ch.num} delay={i * 0.12} className="h-full">
            <article
              data-testid={`manifesto-chapter-${ch.num}`}
              className="group relative h-full bg-slate-950 p-8 transition-colors duration-500 hover:bg-slate-900 lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-outline-orange font-display text-6xl leading-none transition-colors duration-500 group-hover:text-orange-600 group-hover:[-webkit-text-stroke:0px]">
                  {ch.num}
                </span>
                <ch.icon className="h-6 w-6 text-slate-600 transition-colors duration-500 group-hover:text-orange-500" />
              </div>
              <h3 className="mt-14 font-display text-2xl uppercase tracking-wide text-slate-50 lg:text-3xl">
                {ch.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">{ch.body}</p>
              <span className="mt-8 block h-[2px] w-10 bg-orange-600 transition-all duration-500 group-hover:w-24" />
            </article>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

const ProductsTeaser = () => {
  const featured = [PRODUCTS[0], PRODUCTS[2], PRODUCTS[5], PRODUCTS[3], PRODUCTS[6]];
  return (
    <section data-testid="products-teaser" className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <FadeUp>
            <Overline>Product Lines 01 — 07</Overline>
          </FadeUp>
          <KineticLines
            inView
            className="mt-6"
            lineClassName="font-display uppercase leading-[0.95] text-slate-50 text-[clamp(2.2rem,5.5vw,4.5rem)]"
            lines={[<>One material.</>, <><span className="text-orange-600">Seven weapons.</span></>]}
          />
        </div>
        <FadeUp delay={0.2}>
          <Link
            to="/products"
            data-testid="teaser-all-products"
            className="group inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 font-mono text-xs tracking-[0.25em] uppercase text-slate-50 transition-colors duration-300 hover:border-orange-600 hover:text-orange-500"
          >
            Full Catalogue
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </FadeUp>
      </div>

      <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
        {featured.map((p, i) => (
          <FadeUp key={p.id} delay={i * 0.1} className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}>
            <Link
              to="/products"
              data-testid={`teaser-product-${p.id}`}
              className="group relative block h-full min-h-[280px] overflow-hidden bg-slate-950"
            >
              <img
                src={p.image}
                alt={p.name}
                className={`absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 ${
                  i === 0 ? "" : "grayscale group-hover:grayscale-0"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-7">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.3em] text-orange-500">{p.num}</span>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-500" />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-400">{p.tag}</span>
                  <h3 className={`mt-2 font-display uppercase leading-tight text-slate-50 ${i === 0 ? "text-3xl lg:text-5xl" : "text-2xl"}`}>
                    {p.name}
                  </h3>
                </div>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

const CtaBand = () => (
  <section data-testid="cta-band" className="border-t border-white/10 bg-orange-600">
    <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-24">
      <KineticLines
        inView
        lineClassName="font-display uppercase leading-[0.95] text-slate-950 text-[clamp(2rem,5vw,4.2rem)]"
        lines={[<>Have a corrosion</>, <>problem?</>]}
      />
      <FadeUp delay={0.15}>
        <p className="max-w-sm text-sm leading-relaxed text-slate-950/80">
          Send us your medium, temperature and capacity. Our engineering team
          will return a composite specification — not a sales pitch.
        </p>
        <Link
          to="/contact"
          data-testid="cta-band-button"
          className="group mt-8 inline-flex items-center gap-2 bg-slate-950 px-7 py-4 font-mono text-xs tracking-[0.25em] uppercase text-slate-50 transition-colors duration-300 hover:bg-slate-900"
        >
          Request a Quote
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </FadeUp>
    </div>
  </section>
);

const Home = () => (
  <main>
    <Hero />
    <EditorialMarquee />
    <ManifestoSection />
    <ProductsTeaser />
    <CtaBand />
  </main>
);

export default Home;
