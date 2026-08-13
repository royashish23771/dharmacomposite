import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group" data-testid="logo-link">
    <div className="flex h-11 items-center border border-white/15 bg-white px-2.5 transition-colors duration-300 group-hover:border-orange-600">
      <img
        src="/images/logo-mark.png"
        alt="Dharma Composite logo"
        className="h-7 w-auto"
      />
    </div>
    <div className="leading-none">
      <div className="font-display text-lg tracking-wide text-slate-50">DHARMA</div>
      <div className="mt-1 font-mono text-[9px] tracking-[0.32em] text-slate-400">COMPOSITE PVT LTD</div>
    </div>
  </Link>
);

export default Logo;
