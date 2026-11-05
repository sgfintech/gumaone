import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Canopy } from "@/components/home/Payong";
import { APPS, STATUS } from "@/lib/apps";

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

/* The page closes on the payong and the name, built large. */
export default function Footer() {
  return (
    <footer className="bg-night text-paper font-figtree">
      <Canopy className="block w-full h-[16vh] min-h-[90px] max-h-[200px]" panels={10} />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <p className="font-spartan font-bold tracking-[-0.05em] leading-[0.85] text-[clamp(4rem,1rem+14vw,15rem)] text-paper">
          Guma One
        </p>
        <p className="mt-6 t-lead max-w-[32ch]">
          One engine for every Filipino business. Built by SGG IT Services in Porac, Pampanga.
        </p>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12 t-small">
          <div className="col-span-2 md:col-span-5">
            <h4 className="font-semibold text-mango">Apps</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {APPS.map((a) => (
                <li key={a.key}>
                  {a.url ? (
                    <a href={a.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-paper hover:text-mango transition-colors">
                      {a.name} <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="text-haze">{a.name}, {STATUS[a.status].label.toLowerCase()}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-semibold text-mango">Guma One</h4>
            <ul className="mt-4 space-y-2.5">
              {[["The engine", "#engine"], ["Who it’s for", "#para-kanino"], ["Apps", "#apps"], ["Contact", "#contact"]].map(([l, h]) => (
                <li key={l}><button onClick={() => scrollTo(h)} className="text-paper hover:text-mango transition-colors">{l}</button></li>
              ))}
              <li><Link to="/investors" className="text-paper hover:text-mango transition-colors">Investors</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="font-semibold text-mango">Contact</h4>
            <ul className="mt-4 space-y-2.5">
              <li><a href="mailto:info@sggwebs.com" className="hover:text-mango transition-colors">info@sggwebs.com</a></li>
              <li><a href="tel:+639766594357" className="hover:text-mango transition-colors">+63 976 659 4357</a></li>
              <li className="text-haze">Porac, Pampanga, Philippines</li>
              <li className="text-haze">DTI Business Name Reg. No. 4217383</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row md:items-center justify-between gap-6 t-small text-haze">
          <p>© {new Date().getFullYear()} SGG IT Services · Guma One</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-paper transition-colors">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-paper transition-colors">Terms</Link>
            <Link to="/refund-policy" className="hover:text-paper transition-colors">Refunds</Link>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 rounded-full bg-mango text-night px-5 py-2.5 font-semibold transition-transform duration-200 hover:-translate-y-0.5">
              Back to top <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
