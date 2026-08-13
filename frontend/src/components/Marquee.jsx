import Marquee from "react-fast-marquee";
import { PRODUCTS } from "@/lib/data";

const EditorialMarquee = ({ dark = true }) => (
  <div
    data-testid="product-marquee"
    className={`relative overflow-hidden border-y border-white/10 py-6 ${
      dark ? "bg-slate-950" : "bg-orange-600"
    }`}
  >
    <Marquee speed={38} gradient={false} pauseOnHover>
      {PRODUCTS.map((p, i) => (
        <span key={p.id} className="mx-8 flex items-center gap-8">
          <span
            className={`font-display text-3xl uppercase tracking-wide sm:text-4xl ${
              dark
                ? i % 2 === 0
                  ? "text-slate-50"
                  : "text-outline"
                : "text-slate-950"
            }`}
          >
            {p.name}
          </span>
          <span
            className={`h-2.5 w-2.5 rotate-45 ${
              dark ? "bg-orange-600" : "bg-slate-950"
            }`}
            aria-hidden="true"
          />
        </span>
      ))}
    </Marquee>
  </div>
);

export default EditorialMarquee;
