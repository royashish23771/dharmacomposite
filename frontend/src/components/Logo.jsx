import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group" data-testid="logo-link">
    <div className="relative flex h-10 w-10 items-center justify-center border border-white/25 bg-slate-950">
      <span className="font-display text-lg leading-none text-slate-50">DC</span>
      <span className="absolute -bottom-[2px] -right-[2px] h-2.5 w-2.5 bg-orange-600 transition-colors duration-300 group-hover:bg-orange-500" />
    </div>
    <div className="leading-none">
      <div className="font-display text-lg tracking-wide text-slate-50">DHARMA</div>
      <div className="mt-1 font-mono text-[9px] tracking-[0.32em] text-slate-400">COMPOSITE PVT LTD</div>
    </div>
  </Link>
);

export default Logo;
