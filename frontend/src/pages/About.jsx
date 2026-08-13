import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Factory, FlaskConical, Truck } from "lucide-react";
import EditorialMarquee from "@/components/Marquee";
import { FadeUp, KineticLines, Overline } from "@/components/Reveal";
import { COMPANY } from "@/lib/data";

const SPEC_ROWS = [
  ["Legal Entity", COMPANY.name],
  ["Plant Location", "Bhiwadi, Rajasthan 301019, India"],
  ["Core Materials", "Isophthalic / Vinyl-Ester Resins · E-Glass Fibre"],
  ["Processes", "Hand Lay-Up · Filament Winding · Spray-Up"],
  ["Quality Regime", "Laminate Inspection · Hydro-Testing · Dimensional QA"],
  ["Dispatch", "Pan-India · Site Installation Support"],
];

const PILLARS = [
  {
    icon: FlaskConical,
    title: "Material First",
    body: "We start from the chemistry of your process — medium, concentration, temperature — and select the resin system that survives it. The laminate follows the duty, never the other way around.",
  },
  {
    icon: Factory,
    title: "Made in Bhiwadi",
    body: "Our plant sits in one of North India's densest industrial corridors. Pickling lines, plating shops, pharma and chemical units are our neighbours — and our proving ground.",
  },
  {
    icon: Truck,
    title: "Delivered Complete",
    body: "Tanks, ducting, blowers and scrubbers leave our floor as one integrated system. We support transport, site erection and commissioning across India.",
  },
];

const About = () => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <main className="pt-20">
      <section data-testid="about-hero" className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
          <FadeUp>
            <Overline>Chapter 00 — Who We Are</Overline>
          </FadeUp>
          <KineticLines
            className="mt-8"
            delay={0.2}
            lineClassName="font-display uppercase leading-[0.92] tracking-tight text-slate-50 text-[clamp(2.6rem,8vw,7.5rem)]"
            lines={[
              <>Built in <span className="text-orange-600">Bhiwadi.</span></>,
              <>Specified across India.</>,
            ]}
          />
          <FadeUp delay={0.5} className="mt-10 max-w-2xl">
            <p data-testid="about-intro" className="text-base leading-relaxed text-slate-300">
              {COMPANY.name} is an FRP composites manufacturer serving the
              industries where corrosion is a daily cost — chemicals, metal
              finishing, water treatment and pollution control. We fabricate
              tanks, fittings, blowers and complete fume-handling systems from
              fibre-reinforced polymer: a material that outlives steel in the
              very environments that consume it.
            </p>
          </FadeUp>
        </div>
      </section>

      <EditorialMarquee />

      <section data-testid="about-spec-sheet" className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <FadeUp>
              <Overline>Company Spec Sheet</Overline>
              <h2 className="mt-6 font-display text-4xl uppercase leading-tight text-slate-50 lg:text-5xl">
                The data behind<br />the name.
              </h2>
            </FadeUp>
            <div className="mt-12 border border-white/10" data-testid="spec-table">
              {SPEC_ROWS.map(([k, v], i) => (
                <FadeUp key={k} delay={i * 0.06}>
                  <div
                    className={`grid gap-2 px-6 py-5 sm:grid-cols-[180px_1fr] sm:gap-6 ${
                      i > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <span className="font-mono text-[10px] uppercase leading-5 tracking-[0.3em] text-orange-500">{k}</span>
                    <span className="text-sm leading-relaxed text-slate-200">{v}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div ref={imgRef} className="relative min-h-[420px] overflow-hidden border border-white/10 lg:min-h-full">
            <motion.img
              src="/images/tanks.jpg"
              alt="Industrial storage tanks"
              style={{ y: imgY }}
              className="absolute inset-0 h-[125%] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-300">
                Fig. 01 — Composite storage duty
              </span>
              <span className="h-2.5 w-2.5 rotate-45 bg-orange-600" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section data-testid="about-pillars" className="relative border-t border-white/10">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <img src="/images/texture.jpg" alt="" className="h-full w-full object-cover opacity-[0.12]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/75 to-slate-950" />
        </div>
        <div className="relative mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <FadeUp>
            <Overline>Operating Principles</Overline>
          </FadeUp>
          <KineticLines
            inView
            className="mt-6"
            lineClassName="font-display uppercase leading-[0.95] text-slate-50 text-[clamp(2rem,5vw,4rem)]"
            lines={[<>How we work.</>]}
          />
          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.12} className="h-full">
                <article data-testid={`pillar-${i + 1}`} className="group h-full bg-slate-950 p-8 transition-colors duration-500 hover:bg-slate-900 lg:p-10">
                  <p.icon className="h-7 w-7 text-orange-600" />
                  <span className="mt-10 block font-mono text-xs tracking-[0.3em] text-slate-500">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-2xl uppercase tracking-wide text-slate-50">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.body}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
