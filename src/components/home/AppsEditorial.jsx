import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Photo from "./Photo";
import { Stagger, Item } from "./Payong";
import { APPS, FOR_WHOM, STATUS } from "@/lib/apps";

/*
  The one live thing on the page: the visitor says who they are and the apps
  for them appear under the payong. Each app is a menu row with a
  payong-shaped photo where the bullet would be.
*/
const CHOICES = [
  { key: "all", label: "Everything" },
  { key: "tindahan", label: "I sell things" },
  { key: "bahay", label: "For my family" },
  { key: "kalsada", label: "Rider or logistics" },
  { key: "makina", label: "The engine itself" },
];

const STATUS_TONE = { live: "text-leaf", beta: "text-leaf", building: "text-sunink", soon: "text-slate2" };

function AppRow({ app }) {
  const isAvailable = (app.status === "live" || app.status === "beta") && !!app.url;
  const Wrapper = "a";
  const props = isAvailable ? { href: app.url, target: "_blank", rel: "noopener" } : { href: `/apps/${app.key}` };
  return (
    <Wrapper {...props} className="group grid grid-cols-[72px_1fr] gap-x-5 items-start">
      <Photo src={app.image} alt={app.alt} shape="payong" className="w-[72px] aspect-[6/5] mt-1" imgClassName="transition-transform duration-500 group-hover:scale-110" />
      <div className="min-w-0">
        <div className="flex items-baseline justify-between gap-4">
          <h4 className="font-semibold text-night group-hover:text-sunink transition-colors">
            {app.name}
            {<ArrowUpRight size={16} className="inline ml-1 -mt-0.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
          </h4>
          <span className={`t-small font-semibold whitespace-nowrap ${STATUS_TONE[app.status]}`}>{STATUS[app.status].label}</span>
        </div>
        <p className="mt-1 text-night">{app.pitch}</p>
        <p className="hidden sm:block mt-1 t-small text-slate2 leading-relaxed max-w-[52ch]">{app.description}</p>
      </div>
    </Wrapper>
  );
}

export default function AppsEditorial() {
  const [who, setWho] = useState("all");
  const [more, setMore] = useState({});
  const groups = FOR_WHOM.filter((g) => who === "all" || g.key === who);

  return (
    <section id="apps" className="bg-white text-night scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-end">
          <Stagger className="lg:col-span-6">
            <Item as="h2" className="t-head">{APPS.length} apps. One account.</Item>
            <Item as="p" className="mt-6 max-w-[40ch]">
              All built by one team in Porac, Pampanga, and all running on the same Guma One engine.
            </Item>
          </Stagger>
          <div className="lg:col-span-6">
            <p className="t-lead font-semibold" id="who-label">What do you do?</p>
            <div role="radiogroup" aria-labelledby="who-label" className="mt-4 flex flex-wrap gap-2">
              {CHOICES.map((c) => {
                const on = who === c.key;
                return (
                  <button
                    key={c.key}
                    role="radio"
                    aria-checked={on}
                    onClick={() => setWho(c.key)}
                    className={`rounded-full px-5 py-3 font-semibold transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${
                      on ? "bg-sunink text-white" : "bg-tone text-night hover:bg-tone-2"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <AnimatePresence mode="popLayout" initial={false}>
            {groups.map((g) => {
              const apps = APPS.filter((a) => a.forWhom === g.key);
              return (
                <motion.div
                  key={g.key}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-20 md:pt-24"
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="display t-head">{g.label}</h3>
                    <p className="text-slate2 whitespace-nowrap">{apps.length} {apps.length === 1 ? "app" : "apps"}</p>
                  </div>
                  <p className="mt-2 text-slate2">{g.sub}</p>
                  <Stagger className="mt-10 grid md:grid-cols-2 gap-x-16 gap-y-10">
                    {apps.map((a, i) => (
                      <Item key={a.key} className={i >= 2 && !more[g.key] ? "hidden sm:block" : ""}>
                        <AppRow app={a} />
                      </Item>
                    ))}
                  </Stagger>
                  {apps.length > 2 && !more[g.key] && (
                    <button onClick={() => setMore({ ...more, [g.key]: true })} className="sm:hidden mt-6 rounded-full bg-tone px-5 py-3 font-semibold text-night active:scale-[0.98] transition-transform">
                      Show {apps.length - 2} more
                    </button>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
