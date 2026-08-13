import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, KineticLines, Overline } from "@/components/Reveal";
import { PRODUCTS } from "@/lib/data";

const Products = () => {
  const [active, setActive] = useState(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 160, damping: 22, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 160, damping: 22, mass: 0.4 });

  const onMove = (e) => {
    mx.set(e.clientX + 28);
    my.set(e.clientY - 130);
  };

  return (
    <main className="pt-20">
      <section data-testid="products-hero" className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-5 pb-16 pt-20 sm:px-8 lg:px-12 lg:pb-24 lg:pt-28">
          <FadeUp>
            <Overline>Catalogue — FRP / GRP</Overline>
          </FadeUp>
          <KineticLines
            className="mt-8"
            delay={0.2}
            lineClassName="font-display uppercase leading-[0.92] tracking-tight text-slate-50 text-[clamp(2.6rem,8vw,7.5rem)]"
            lines={[<>Product lines</>, <><span className="text-outline-orange">01 — 07</span></>]}
          />
          <FadeUp delay={0.5} className="mt-8 max-w-xl">
            <p className="text-base leading-relaxed text-slate-300">
              Every line below is fabricated in fibre-reinforced polymer at our
              Bhiwadi plant. Hover a line to preview it — then send us your duty
              conditions for a specification.
            </p>
          </FadeUp>
        </div>
      </section>

      <section
        data-testid="products-list"
        className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
        onMouseMove={onMove}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
          style={{ x: sx, y: sy }}
        >
          <AnimatePresence mode="wait">
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="clip-frame h-64 w-80 border border-orange-600/60"
              >
                <img
                  src={PRODUCTS[active].image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-slate-950/80 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-orange-500 backdrop-blur">
                  Fig. {PRODUCTS[active].num}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="border-t border-white/10">
          {PRODUCTS.map((p, i) => (
            <FadeUp key={p.id} delay={i * 0.05}>
              <Link
                to="/contact"
                data-testid={`product-row-${p.id}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.03] sm:gap-8 lg:py-10"
              >
                <span className="w-12 font-mono text-sm tracking-[0.25em] text-slate-500 transition-colors duration-300 group-hover:text-orange-500 sm:w-16">
                  {p.num}
                </span>
                <div>
                  <h2 className="font-display text-2xl uppercase leading-tight tracking-wide text-slate-50 transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                    {p.name}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                    {p.desc}
                  </p>
                  <span className="mt-4 inline-block border border-white/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-slate-400">
                    {p.tag}
                  </span>
                </div>
                <span className="flex h-12 w-12 items-center justify-center border border-white/15 transition-all duration-500 group-hover:border-orange-600 group-hover:bg-orange-600">
                  <ArrowUpRight className="h-5 w-5 text-slate-400 transition-colors duration-500 group-hover:text-slate-950" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-16 flex flex-col items-start justify-between gap-6 border border-white/10 bg-slate-900/40 p-8 lg:flex-row lg:items-center lg:p-10">
          <div>
            <h3 className="font-display text-2xl uppercase text-slate-50 lg:text-3xl">
              Need a custom duty?
            </h3>
            <p className="mt-2 max-w-lg text-sm text-slate-400">
              Non-standard capacities, nozzle schedules, chemical exposures —
              tell us the conditions and we will spec the composite.
            </p>
          </div>
          <Link
            to="/contact"
            data-testid="products-cta"
            className="group inline-flex items-center gap-2 bg-orange-600 px-7 py-4 font-mono text-xs tracking-[0.25em] uppercase text-slate-950 transition-colors duration-300 hover:bg-orange-500"
          >
            Request Specification
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </FadeUp>
      </section>
    </main>
  );
};

export default Products;
