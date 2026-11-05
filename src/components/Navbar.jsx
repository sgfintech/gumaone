import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { liveApps } from "@/lib/apps";

const NAV = [
  { label: "Apps", href: "#apps" },
  { label: "The engine", href: "#engine" },
  { label: "Who it’s for", href: "#para-kanino" },
  { label: "Investors", to: "/investors" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [location.pathname]);

  const go = (item) => {
    setOpen(false);
    if (item.to) return navigate(item.to);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" }), 150);
    } else {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // One plain night bar on every page: wordmark, a few links, one action.
  const onDark = false;
  const link = "text-night hover:text-sunink";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_1px_0_rgba(16,24,40,0.06),0_8px_24px_-12px_rgba(16,24,40,0.18)]" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        <Logo light={onDark} />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <button key={item.label} onClick={() => go(item)} className={`px-3 py-2 text-[15px] font-semibold transition-colors whitespace-nowrap ${link}`}>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a href={liveApps()[0]?.url} target="_blank" rel="noopener" className={`inline-flex items-center gap-1.5 px-3 py-2.5 text-[15px] font-semibold whitespace-nowrap ${link}`}>
            Guma Kart <ArrowUpRight size={15} />
          </a>
          <button onClick={() => go({ href: "#contact" })} className="px-5 py-2.5 rounded-full text-[15px] font-semibold transition-[transform,background-color] duration-200 whitespace-nowrap bg-sunink text-white hover:bg-night hover:-translate-y-0.5 active:scale-[0.97]">
            Partner with us
          </button>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="lg:hidden inline-flex items-center rounded-full bg-tone px-3 py-2 text-night" aria-label="Menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden overflow-hidden bg-white">
            <div className="px-6 py-4 flex flex-col">
              {NAV.map((item) => (
                <button key={item.label} onClick={() => go(item)} className="py-3 text-left text-lg font-semibold text-night">
                  {item.label}
                </button>
              ))}
              <Link to="/" onClick={() => go({ href: "#contact" })} className="mt-4 text-center px-5 py-3 rounded-full bg-sunink text-white font-semibold">
                Partner with us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
