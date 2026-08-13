import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, NAV_LINKS, PRODUCTS } from "@/lib/data";

const Footer = () => (
  <footer data-testid="site-footer" className="relative overflow-hidden border-t border-white/10 bg-slate-950">
    <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-60" aria-hidden="true" />

    <div className="relative mx-auto max-w-[1600px] px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-28">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-slate-400">
            Manufacturer of FRP tanks, fittings, blowers and complete air pollution
            control systems. Built in Bhiwadi, specified across India.
          </p>
          <Link
            to="/contact"
            data-testid="footer-cta"
            className="group mt-8 inline-flex items-center gap-2 bg-orange-600 px-6 py-3.5 font-mono text-xs tracking-[0.25em] uppercase text-slate-950 transition-colors duration-300 hover:bg-orange-500"
          >
            Start an Enquiry
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-mono text-[10px] tracking-[0.35em] uppercase text-slate-500">Contact</h4>
          <ul className="mt-6 space-y-4 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
              <span data-testid="footer-address">{COMPANY.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
              <a href={`tel:${COMPANY.phoneRaw}`} data-testid="footer-phone" className="transition-colors hover:text-orange-500">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
              <a href={`mailto:${COMPANY.email}`} data-testid="footer-email" className="break-all transition-colors hover:text-orange-500">
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-mono text-[10px] tracking-[0.35em] uppercase text-slate-500">Pages</h4>
          <ul className="mt-6 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  data-testid={`footer-link-${l.label.toLowerCase()}`}
                  className="text-sm text-slate-300 transition-colors hover:text-orange-500"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-mono text-[10px] tracking-[0.35em] uppercase text-slate-500">Products</h4>
          <ul className="mt-6 space-y-3">
            {PRODUCTS.slice(0, 5).map((p) => (
              <li key={p.id}>
                <Link
                  to="/products"
                  data-testid={`footer-product-${p.id}`}
                  className="text-sm text-slate-300 transition-colors hover:text-orange-500"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 select-none overflow-hidden" aria-hidden="true">
        <div className="text-outline whitespace-nowrap font-display text-[13.5vw] leading-[0.85] tracking-tight lg:text-[11vw]">
          DHARMA COMPOSITE
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[10px] tracking-[0.25em] uppercase text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span data-testid="footer-copyright">© 2026 {COMPANY.name}</span>
        <span>Bhiwadi · Rajasthan · India</span>
      </div>
    </div>
  </footer>
);

export default Footer;
