import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/data";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-header"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex" data-testid="desktop-nav">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              data-testid={`nav-${link.label.toLowerCase()}`}
              className={({ isActive }) =>
                `group relative font-mono text-xs tracking-[0.25em] uppercase transition-colors duration-300 ${
                  isActive ? "text-orange-500" : "text-slate-400 hover:text-slate-50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="nav-get-quote"
            className="group hidden items-center gap-2 border border-orange-600 px-5 py-2.5 font-mono text-xs tracking-[0.2em] uppercase text-orange-500 transition-colors duration-300 hover:bg-orange-600 hover:text-slate-950 sm:flex"
          >
            Get Quote
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center border border-white/15 text-slate-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 lg:hidden"
          >
            <div className="flex flex-col px-5 py-6">
              {NAV_LINKS.map((link, i) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl uppercase tracking-wide ${
                      isActive ? "text-orange-500" : "text-slate-50"
                    }`
                  }
                >
                  {link.label}
                  <span className="font-mono text-[10px] tracking-[0.3em] text-slate-500">
                    0{i + 1}
                  </span>
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                data-testid="mobile-nav-get-quote"
                className="mt-6 flex items-center justify-center gap-2 bg-orange-600 px-5 py-4 font-mono text-xs tracking-[0.25em] uppercase text-slate-950"
              >
                Get Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
