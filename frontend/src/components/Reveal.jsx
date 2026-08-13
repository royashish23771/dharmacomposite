import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const KineticLines = ({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  inView = false,
}) => (
  <div className={className}>
    {lines.map((line, i) => (
      <div key={i} className="overflow-hidden py-[0.06em]">
        <motion.div
          initial={{ y: "112%" }}
          {...(inView
            ? { whileInView: { y: "0%" }, viewport: { once: true, margin: "-60px" } }
            : { animate: { y: "0%" } })}
          transition={{ duration: 0.9, delay: delay + i * 0.12, ease: EASE }}
          className={lineClassName}
        >
          {line}
        </motion.div>
      </div>
    ))}
  </div>
);

export const FadeUp = ({ children, delay = 0, className = "", ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.75, delay, ease: EASE }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const Overline = ({ children, className = "" }) => (
  <div className={`flex items-center gap-3 font-mono text-[10px] tracking-[0.35em] uppercase text-orange-500 sm:text-xs ${className}`}>
    <span className="h-[6px] w-[6px] rotate-45 bg-orange-600" aria-hidden="true" />
    {children}
  </div>
);
