import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { FadeUp, KineticLines, Overline } from "@/components/Reveal";
import { COMPANY, PRODUCTS } from "@/lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
  "w-full border border-white/15 bg-slate-950 px-4 py-3.5 text-sm text-slate-50 placeholder:text-slate-600 outline-none transition-colors duration-300 focus:border-orange-600";

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", requirement: "" });
  const [status, setStatus] = useState("idle");
  const [refId, setRefId] = useState(null);
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await axios.post(`${API}/enquiries`, form);
      setRefId(res.data.id);
      setStatus("done");
    } catch (err) {
      setStatus("idle");
      setError("Submission failed. Please try again or call us directly.");
    }
  };

  return (
    <main className="pt-20">
      <section data-testid="contact-hero" className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-5 pb-16 pt-20 sm:px-8 lg:px-12 lg:pb-24 lg:pt-28">
          <FadeUp>
            <Overline>Enquiry Desk</Overline>
          </FadeUp>
          <KineticLines
            className="mt-8"
            delay={0.2}
            lineClassName="font-display uppercase leading-[0.92] tracking-tight text-slate-50 text-[clamp(2.6rem,8vw,7.5rem)]"
            lines={[<>Talk to</>, <><span className="text-orange-600">engineering.</span></>]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FadeUp>
              <h2 className="font-display text-3xl uppercase text-slate-50 lg:text-4xl">
                Direct lines.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
                Prefer a conversation? Reach the plant office directly — or send
                the form and we will call you back with a specification.
              </p>
            </FadeUp>

            <div className="mt-10 border border-white/10" data-testid="contact-details">
              {[
                { icon: MapPin, label: "Plant & Office", value: COMPANY.address, testid: "contact-address" },
                { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}`, testid: "contact-phone" },
                { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}`, testid: "contact-email" },
              ].map((row, i) => (
                <FadeUp key={row.label} delay={i * 0.08}>
                  <div className={`flex items-start gap-5 px-6 py-6 ${i > 0 ? "border-t border-white/10" : ""}`}>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-orange-600/50">
                      <row.icon className="h-4 w-4 text-orange-500" />
                    </span>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">{row.label}</span>
                      {row.href ? (
                        <a href={row.href} data-testid={row.testid} className="mt-1 block break-all text-sm text-slate-100 transition-colors hover:text-orange-500">
                          {row.value}
                        </a>
                      ) : (
                        <span data-testid={row.testid} className="mt-1 block text-sm text-slate-100">{row.value}</span>
                      )}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.2} className="mt-8 border border-white/10 bg-slate-900/40 p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-500">We manufacture</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {PRODUCTS.map((p) => (
                  <span key={p.id} className="border border-white/15 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-300">
                    {p.name}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-7">
            {status === "done" ? (
              <motion.div
                data-testid="enquiry-success"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full min-h-[480px] flex-col items-start justify-center border border-orange-600/50 bg-slate-900/40 p-10 lg:p-14"
              >
                <CheckCircle2 className="h-12 w-12 text-orange-500" />
                <h2 className="mt-8 font-display text-4xl uppercase leading-tight text-slate-50 lg:text-5xl">
                  Request received.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-300">
                  Our engineering team will contact you shortly. Keep your duty
                  conditions handy — medium, concentration, temperature and
                  capacity.
                </p>
                {refId && (
                  <span className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                    Ref — {refId.slice(0, 8).toUpperCase()}
                  </span>
                )}
              </motion.div>
            ) : (
              <FadeUp delay={0.1}>
                <form
                  onSubmit={submit}
                  data-testid="enquiry-form"
                  className="border border-white/10 bg-slate-900/40 p-8 lg:p-12"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="enq-name" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        Name *
                      </label>
                      <input
                        id="enq-name"
                        data-testid="enquiry-name-input"
                        required
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Your full name"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="enq-company" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        Company
                      </label>
                      <input
                        id="enq-company"
                        data-testid="enquiry-company-input"
                        value={form.company}
                        onChange={set("company")}
                        placeholder="Organisation name"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="enq-phone" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        Phone *
                      </label>
                      <input
                        id="enq-phone"
                        data-testid="enquiry-phone-input"
                        required
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="+91"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="enq-email" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        Email
                      </label>
                      <input
                        id="enq-email"
                        data-testid="enquiry-email-input"
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="you@company.com"
                        className={inputCls}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="enq-req" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        Requirement *
                      </label>
                      <textarea
                        id="enq-req"
                        data-testid="enquiry-requirement-input"
                        required
                        rows={6}
                        value={form.requirement}
                        onChange={set("requirement")}
                        placeholder="e.g. 20 KL HCl storage tank, vertical, outdoor installation…"
                        className={`${inputCls} resize-none`}
                      />
                    </div>
                  </div>

                  {error && (
                    <p data-testid="enquiry-error" className="mt-5 font-mono text-xs tracking-[0.15em] text-red-400">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    data-testid="enquiry-submit-button"
                    disabled={status === "sending"}
                    className="group mt-8 inline-flex items-center gap-2 bg-orange-600 px-8 py-4 font-mono text-xs tracking-[0.25em] uppercase text-slate-950 transition-colors duration-300 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        Sending <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              </FadeUp>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
