import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { Stagger, Item } from "./Payong";
import { AgentPanel, LedgerPanel, RoutePanel, DossierPanel } from "./Fragments";

const PILLARS = [
  { title: "GUMA ABIOS", tl: "the brain", Panel: AgentPanel, body: "A proposed AI layer for intake, quoting and follow-up, with clear permission boundaries and human review." },
  { title: "Shared identity and payments", tl: "the pocket", Panel: LedgerPanel, body: "A roadmap for simpler sign-in, payment integrations and reconciliation across participating products—not a claim that a universal wallet is live." },
  { title: "BayanGo", tl: "the legs", Panel: RoutePanel, body: "BayanGo is being developed as a local-delivery option for merchants and marketplaces, subject to service coverage and partner capacity." },
  { title: "Guma Intelligence", tl: "the eyes", Panel: DossierPanel, body: "A proposed business intelligence capability to support merchant discovery, onboarding and relevant sales workflows." },
];

/* Open one part of the engine and its screen appears beside it. Turns by itself until touched. */
export default function Engine() {
  const [open, setOpen] = useState(0);
  const [auto, setAuto] = useState(true);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!auto || reduce) return;
    const t = setInterval(() => !document.hidden && setOpen((v) => (v + 1) % PILLARS.length), 6500);
    return () => clearInterval(t);
  }, [auto, reduce]);

  return (
    <section id="inside" className="bg-tone text-night scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40 grid lg:grid-cols-12 gap-14 lg:gap-10 items-start">
        <div className="lg:col-span-6">
          <Stagger>
            <Item as="h2" className="t-head max-w-[14ch]">What’s inside the engine.</Item>
            <Item as="p" className="mt-6 max-w-[44ch]">
              Four parts, built once and shared by every app. AI screens, speeds up and automates; when everything is ready, a person takes over.
            </Item>
          </Stagger>
          <div className="mt-10 space-y-2">
            {PILLARS.map((p, i) => {
              const on = open === i;
              return (
                <div key={p.title} className={`rounded-2xl transition-colors duration-300 ${on ? "bg-white" : "bg-transparent hover:bg-tone-2"}`}>
                  <button
                    aria-expanded={on}
                    onClick={() => { setOpen(i); setAuto(false); }}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                  >
                    <span className="t-lead font-semibold">
                      {p.title} <span className="text-sunink">· {p.tl}</span>
                    </span>
                    <Plus size={20} className={`shrink-0 transition-transform duration-300 ${on ? "rotate-45" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 max-w-[50ch]">{p.body}</p>
                        {auto && !reduce && (
                          <div className="mx-5 mb-5 h-1 rounded-full bg-tone-2 overflow-hidden">
                            <motion.div key={open} className="h-full bg-sun origin-left" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 6.5, ease: "linear" }} />
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <div className="relative rounded-[28px] bg-night p-6 sm:p-10 min-h-[520px] flex items-center justify-center overflow-hidden">
            <span className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-sun g1-spin" style={{ animationDuration: "40s" }} aria-hidden="true">
              <span className="absolute bottom-6 left-6 w-6 h-6 rounded-full bg-mango" />
            </span>
            {/* every screen is mounted in the same cell, so switching crossfades with no empty frame */}
            <div className="relative w-full grid">
              {PILLARS.map(({ Panel: P, title }, i) => (
                <motion.div
                  key={title}
                  aria-hidden={i !== open}
                  initial={false}
                  animate={i === open ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", visibility: "visible" } : { opacity: 0, y: 16, scale: 0.98, filter: "blur(6px)", transitionEnd: { visibility: "hidden" } }}
                  transition={{ duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={`[grid-area:1/1] flex justify-center items-center ${i === open ? "relative z-10" : "pointer-events-none z-0"}`}
                >
                  <P />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
