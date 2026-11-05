import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PayongMark } from "./Payong";
import CountUp from "./CountUp";
import { BayanGoTrack, WalletCard, PhoneSale, Chip, ShoppingBag, Wrench, Printer, Bike } from "./Fragments";
import { APPS } from "@/lib/apps";

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
const EASE = [0.22, 1, 0.36, 1];
const url = (key) => APPS.find((a) => a.key === key)?.url;

/* The phone sits under the payong; the apps float around it on slowly turning rings. */
const FLOATERS = [
  { kind: "chip", icon: ShoppingBag, label: "Guma Kart", tint: "bg-sun", pos: "left-[0%] top-[18%]", delay: 0, href: url("gumakart") },
  { kind: "chip", icon: Wrench, label: "Kuya Eddie", tint: "bg-mango", pos: "right-[0%] top-[22%]", delay: 1.1, href: url("kuyaeddie") },
  { kind: "chip", icon: Printer, label: "PrintAir", tint: "bg-night", pos: "left-[2%] top-[48%]", delay: 2.2, href: url("printair") },
  { kind: "chip", icon: Bike, label: "BayanGo", tint: "bg-sun", pos: "right-[2%] top-[54%]", delay: 0.7, href: url("bayango") },
  { kind: "card", C: WalletCard, pos: "left-[-4%] bottom-[0%]", delay: 1.6, desk: true },
  { kind: "card", C: BayanGoTrack, pos: "right-[-4%] bottom-[2%]", delay: 2.8, desk: true },
];

const DOTS = [
  ["top-[1%] left-1/2", "bg-sun", "w-4 h-4"],
  ["bottom-[6%] left-[18%]", "bg-mango", "w-3 h-3"],
  ["top-[38%] right-[0%]", "bg-night", "w-2.5 h-2.5"],
];

function Orbit() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-[620px] aspect-[1/1.02]">
      <div className="absolute inset-[4%] rounded-full bg-tone g1-spin">
        {DOTS.map(([p, c, sz]) => (
          <span key={p} className={`absolute ${p} ${c} ${sz} rounded-full`} />
        ))}
      </div>
      <div className="absolute inset-[20%] rounded-full bg-tone-2 g1-spin-rev">
        <span className="absolute top-[8%] left-[12%] w-3 h-3 rounded-full bg-sun" />
        <span className="absolute bottom-[10%] right-[14%] w-2.5 h-2.5 rounded-full bg-mango" />
      </div>

      <div className="absolute left-1/2 top-[3%] -translate-x-1/2">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.25 }}
        >
          <div className="flex flex-col items-center origin-top scale-[0.66] sm:scale-[0.86] lg:scale-[0.88] xl:scale-100">
            <PayongMark className="w-[270px] -mb-5 relative z-10" />
            <PhoneSale />
          </div>
        </motion.div>
      </div>

      {FLOATERS.map((f, i) => {
        const Tag = f.href ? "a" : "div";
        const link = f.href ? { href: f.href, target: "_blank", rel: "noopener" } : {};
        return (
          <motion.div
            key={i}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.6 + i * 0.12 }}
            className={`absolute z-20 ${f.pos} ${f.desk ? "hidden sm:block" : ""}`}
          >
            <div className={f.kind === "card" ? "origin-center scale-[0.8] lg:scale-[0.86] xl:scale-[0.92]" : "origin-center scale-[0.85] sm:scale-100"}>
              <div className="g1-float" style={{ animationDelay: `-${f.delay}s` }}>
                <Tag {...link} data-ui className="block transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.04]">
                  {f.kind === "chip" ? <Chip icon={f.icon} label={f.label} tint={f.tint} /> : <f.C />}
                </Tag>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const live = APPS.filter((a) => a.url && (a.status === "live" || a.status === "beta"));
  const fade = (d) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.8, ease: EASE } });
  return (
    <section className="relative bg-white text-night pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-12 lg:pt-20 pb-24 lg:pb-32 grid lg:grid-cols-12 gap-14 lg:gap-8 items-center">
        <div className="lg:col-span-6">
          <motion.h1 {...fade(0.1)} className="t-display lg:!text-[clamp(3rem,1.6rem+3.2vw,4.75rem)] max-w-[16ch]">
            Practical technology for the businesses powering the Philippines.
          </motion.h1>
          <motion.p {...fade(0.2)} className="mt-8 t-lead text-night max-w-[34ch]">
            Guma One develops connected commerce, services and logistics ventures for underserved markets. Each product solves a specific problem; shared technology is designed to make the portfolio more efficient as it grows.
          </motion.p>
          <motion.div {...fade(0.3)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <button onClick={() => scrollTo("#apps")} className="group inline-flex items-center gap-2 rounded-full bg-sunink text-white px-7 py-4 font-semibold transition-[transform,background-color] duration-200 hover:bg-night hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]">
              Find your app <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button onClick={() => scrollTo("#engine")} className="font-semibold text-night underline decoration-sun decoration-2 underline-offset-[6px] hover:decoration-night transition-colors">
              How it works
            </button>
          </motion.div>
          <motion.div {...fade(0.4)} className="mt-12">
            <p className="text-slate2">
              <span className="font-spartan font-bold t-lead tracking-[-0.03em] text-night"><CountUp to={APPS.length} /></span> ventures in the portfolio
              <span className="mx-3 text-tone-3" aria-hidden="true">·</span>
              <span className="font-spartan font-bold t-lead tracking-[-0.03em] text-night"><CountUp to={live.length} /></span> live or in beta
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {live.map((a) => (
                <a key={a.key} href={a.url} target="_blank" rel="noopener" className="group inline-flex items-center gap-1.5 rounded-full bg-tone px-4 py-2 font-semibold text-night transition-colors hover:bg-night hover:text-white">
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-leaf text-leaf g1-pulse" aria-hidden="true" />
                  {a.name}
                  <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <Orbit />
        </div>
      </div>
    </section>
  );
}
