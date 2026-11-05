import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PayongMark, Stagger, Item } from "./Payong";
import { APPS, STATUS } from "@/lib/apps";
import { SmartImg } from "./Photo";

/*
  Guma One at the centre, every app revolving around it.
  The stage is drawn at a fixed 720px and scaled to fit its column, so the
  geometry stays exact at every width. Rings turn slowly; each card turns the
  other way at the same speed so it stays upright. Hover pauses the turn.
*/
const SIZE = 880;
const C = SIZE / 2;
const TURN = 150; // seconds per revolution; both rings turn together so cards never collide
const RINGS = [
  { r: 160, stack: true, keys: ["gumakart", "kuyaeddie", "printair", "bayango", "veyron"] },
  { r: 345, stack: false, keys: ["gumaprint", "rekta", "seafoodsgo", "farmmer", "abios", "gumadial", "gumaweb", "aistudio"] },
];

function useFit(ref) {
  const [k, setK] = useState(1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // On narrow screens zoom into the middle so the inner ring stays readable;
    // the outer ring passes in and out at the edges.
    const ro = new ResizeObserver(([e]) => {
      const w = e.contentRect.width;
      setK(w / (w < 520 ? 560 : SIZE));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return k;
}

function AppPill({ app, stack }) {
  const Tag = app.url ? "a" : "div";
  const link = app.url ? { href: app.url, target: "_blank", rel: "noopener", "aria-label": `${app.name}, ${STATUS[app.status].label}` } : {};
  const live = app.status === "live" || app.status === "beta";
  const status = (
    <span className={`flex items-center gap-1.5 text-[13px] ${live ? "text-leaf" : "text-slate2"}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${live ? "bg-leaf" : "bg-tone-3"}`} />
      {STATUS[app.status].label}
    </span>
  );
  return (
    <Tag {...link} className="block rounded-[14px] transition-transform duration-300 hover:scale-[1.06] focus-visible:scale-[1.06]">
      {stack ? (
        <span data-ui className="ui-card flex flex-col w-[128px] p-2">
          <span className="block w-full h-[52px] rounded-[10px] overflow-hidden bg-tone-2">
            <SmartImg src={app.image} alt="" loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          </span>
          <span className="mt-1.5 px-0.5 block text-[14px] font-semibold text-night truncate">{app.name}</span>
          <span className="px-0.5">{status}</span>
        </span>
      ) : (
        <span data-ui className="ui-card flex items-center gap-2.5 w-[184px] p-2 pr-3">
          <span className="w-11 h-11 shrink-0 rounded-[10px] overflow-hidden bg-tone-2">
            <SmartImg src={app.image} alt="" loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          </span>
          <span className="min-w-0">
            <span className="block text-[14px] font-semibold text-night truncate">{app.name}</span>
            {status}
          </span>
        </span>
      )}
    </Tag>
  );
}

function Stage() {
  const wrap = useRef(null);
  const k = useFit(wrap);
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const [held, setHeld] = useState(false); // a tap on touch screens holds the orbit still
  const play = reduce || hover || focus || held ? "paused" : "running";

  return (
    <div
      ref={wrap}
      className="relative w-full aspect-square overflow-hidden sm:overflow-visible"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setFocus(false)}
      onTouchStart={() => setHeld((v) => !v)}
    >
      <div className="absolute left-1/2 top-1/2" style={{ width: SIZE, height: SIZE, marginLeft: -SIZE / 2, marginTop: -SIZE / 2, transform: `scale(${k})` }}>
        {/* soft fields and dashed orbits */}
        <div className="absolute rounded-full bg-tone" style={{ inset: C - 262 }} />
        <div className="absolute rounded-full bg-tone-2" style={{ inset: C - 118 }} />
        {RINGS.map(({ r }) => (
          <div key={r} className="absolute rounded-full border-2 border-dashed border-tone-3" style={{ left: C - r, top: C - r, width: r * 2, height: r * 2 }} aria-hidden="true" />
        ))}
        {/* drifting dots */}
        <span className="absolute w-4 h-4 rounded-full bg-sun g1-float" style={{ left: 120, top: 116 }} />
        <span className="absolute w-3 h-3 rounded-full bg-mango g1-float" style={{ left: 742, top: 742, animationDelay: "-2s" }} />
        <span className="absolute w-2.5 h-2.5 rounded-full bg-night g1-float" style={{ left: 780, top: 196, animationDelay: "-4s" }} />

        {/* the engine */}
        <motion.div
          initial={reduce ? false : { scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute rounded-full bg-white flex flex-col items-center justify-center"
          style={{ left: C - 88, top: C - 88, width: 176, height: 176 }}
        >
          <PayongMark className="w-[108px]" />
          <span className="mt-1 font-spartan font-bold tracking-[-0.04em] text-night text-[24px] leading-none">Guma One</span>
        </motion.div>

        {/* the apps, revolving */}
        {RINGS.map(({ r, stack, keys }, ri) => (
          <div
            key={r}
            className="absolute inset-0 g1-spin"
            style={{ animationDuration: `${TURN}s`, animationPlayState: play }}
          >
            {keys.map((key, i) => {
              const app = APPS.find((a) => a.key === key);
              if (!app) return null;
              const a = (i / keys.length) * Math.PI * 2 - Math.PI / 2;
              const x = C + r * Math.cos(a);
              const y = C + r * Math.sin(a);
              return (
                <div key={key} className="absolute" style={{ left: x, top: y }}>
                  <div className="-translate-x-1/2 -translate-y-1/2">
                  <div
                    className="g1-spin"
                    style={{ animationDuration: `${TURN}s`, animationDirection: "reverse", animationPlayState: play }}
                  >
                    <motion.div
                      initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (ri * 5 + i) * 0.04 }}
                    >
                      <AppPill app={app} stack={stack} />
                    </motion.div>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export default function AppOrbit() {
  const points = [
    "One login and one wallet across every app",
    "AI agents that do the work, with a person always on call",
    "Riders that reach the provincial towns others skip",
  ];
  return (
    <section id="engine" className="bg-white text-night scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-16 md:pt-12 md:pb-24 grid lg:grid-cols-12 gap-16 lg:gap-10 items-center">
        <div className="lg:col-span-7 order-last lg:order-first">
          <Stage />
        </div>
        <Stagger className="lg:col-span-5">
          <Item as="h2" className="t-head max-w-[13ch]">Every app runs on one engine.</Item>
          <Item as="p" className="mt-8 text-night max-w-[44ch]">
            Guma One sits at the centre. Guma Kart, Kuya Eddie, PrintAir, BayanGo and every app after them plug into the same account, wallet, AI and rider network, so each new app starts with all of it on day one.
          </Item>
          <Item as="ul" className="mt-10 space-y-5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-4">
                <PayongMark className="w-9 shrink-0 mt-0.5" />
                <span className="font-semibold">{p}</span>
              </li>
            ))}
          </Item>
          <Item>
            <button onClick={() => scrollTo("#apps")} className="group mt-12 inline-flex items-center gap-2 rounded-full bg-night text-white px-7 py-4 font-semibold transition-[transform,background-color] duration-200 hover:bg-sunink hover:-translate-y-0.5 active:scale-[0.98]">
              See all {APPS.length} apps <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </Item>
        </Stagger>
      </div>
    </section>
  );
}
