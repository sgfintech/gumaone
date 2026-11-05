import React from "react";
import { Check } from "lucide-react";
import { Stagger, Item } from "./Payong";

/* Three steps, each shown as the small screen the merchant actually sees. */
function SignUp() {
  return (
    <div data-ui className="ui-card p-4 space-y-2">
      <div className="rounded-lg bg-tone px-3 py-2.5 text-[14px] text-slate2">Mobile number</div>
      <div className="rounded-lg bg-tone px-3 py-2.5 text-[14px] text-night">0976 659 ••••</div>
      <div className="rounded-full bg-sunink text-white text-[14px] font-semibold text-center py-2.5">Create Guma account</div>
    </div>
  );
}
function Pick() {
  const apps = [["Guma Kart", true], ["PrintAir", true], ["Kuya Eddie", false], ["BayanGo", false]];
  return (
    <div data-ui className="ui-card p-4 flex flex-wrap gap-2">
      {apps.map(([n, on]) => (
        <span key={n} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[14px] font-semibold ${on ? "bg-night text-white" : "bg-tone text-night"}`}>
          {on && <Check size={14} />} {n}
        </span>
      ))}
    </div>
  );
}
function Paid() {
  return (
    <div data-ui className="ui-card p-4 space-y-2 text-[14px]">
      <div className="flex justify-between"><span className="text-slate2">Order #1042 paid</span><span className="font-semibold text-leaf">+₱500</span></div>
      <div className="flex justify-between"><span className="text-slate2">Rider picked up</span><span className="font-semibold text-night">2:14 PM</span></div>
      <div className="flex justify-between"><span className="text-slate2">Payout to GCash</span><span className="font-semibold text-night">Friday</span></div>
    </div>
  );
}

const STEPS = [
  { title: "Create one Guma account", body: "A shared sign-in experience is planned as more products connect to Guma Core.", Shot: SignUp, tile: "bg-sun" },
  { title: "Pick the apps for your work", body: "A store, a print desk, home services or delivery. Turn on what you need, add more later.", Shot: Pick, tile: "bg-mango" },
  { title: "Sell, get paid, get it delivered", body: "Accept orders through supported payment options and arrange fulfillment where delivery coverage is available.", Shot: Paid, tile: "bg-night" },
];

export default function Steps() {
  return (
    <section id="start" className="bg-white text-night scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <Stagger className="max-w-3xl">
          <Item as="h2" className="t-head">Get started in three steps.</Item>
          <Item as="p" className="mt-6 max-w-[48ch]">Start with the tool that fits your business. Our goal is to make commerce software practical for everyday Filipino merchants.</Item>
        </Stagger>
        <Stagger className="mt-16 grid md:grid-cols-3 gap-6">
          {STEPS.map(({ title, body, Shot, tile }) => (
            <Item key={title} className="group">
              <div className={`${tile} rounded-[24px] p-6 sm:p-8 aspect-[5/4] hidden sm:flex items-center transition-transform duration-500 group-hover:-translate-y-1.5`}>
                <div className="w-full g1-float" style={{ animationDuration: "7s" }}>
                  <Shot />
                </div>
              </div>
              <h3 className="sm:mt-6 t-lead">{title}</h3>
              <p className="mt-2 max-w-[36ch]">{body}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
