import React from "react";
import Photo from "./Photo";
import { Stagger, Item } from "./Payong";
import { PHOTOS } from "@/lib/photos";
import { APPS } from "@/lib/apps";
import CountUp from "./CountUp";

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

/* Who we are, on one inset panel, with the street-cart photograph cut to the payong. */
export default function Bayanihan() {
  const live = APPS.filter((a) => a.status === "live" || a.status === "beta").length;
  const facts = [
    [String(APPS.length), "apps under the umbrella"],
    [String(live), "live or in beta today"],
    ["1", "account, wallet and login"],
  ];
  return (
    <section id="kami" className="bg-white px-3 md:px-5 scroll-mt-24">
      <div className="relative overflow-hidden bg-sun text-night rounded-none">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 grid lg:grid-cols-12 gap-12 lg:gap-6">
          <div className="lg:col-span-7 flex flex-col">
            <Stagger>
              <Item as="h2" className="t-head max-w-[13ch]">Built by Filipinos who sold too.</Item>
            </Stagger>
            <Stagger className="order-last lg:order-none mt-12 lg:mt-16 w-[86%] sm:w-[70%] lg:w-[82%] mx-auto lg:mx-0">
              <Item kind="reveal">
                <Photo src={PHOTOS.cart.src} alt={PHOTOS.cart.alt} shape="payong" className="aspect-[5/4] w-full translate-y-[18%] -mt-[10%]" />
              </Item>
            </Stagger>
          </div>

          <Stagger className="lg:col-span-5 lg:pt-28 pb-4">
            <Item as="h3" className="t-lead">Twelve years in print and Facebook selling</Item>
            <Item as="p" className="mt-3">
              We ran a print shop and sold online long before we built these apps. We know why customers get lost in Messenger and why riders never reach the barangay.
            </Item>
            <Item as="h3" className="mt-12 t-lead">Our problems, not another country’s</Item>
            <Item as="p" className="mt-3">
              We also know why OFWs can’t be sure where their remittance went. Those are the problems Guma One solves, from Porac, Pampanga.
            </Item>
            <Item as="dl" className="mt-12 grid grid-cols-3 gap-4">
              {facts.map(([v, l]) => (
                <div key={l}>
                  <dt className="display t-head"><CountUp to={Number(v)} /></dt>
                  <dd className="mt-1 t-small font-semibold leading-snug">{l}</dd>
                </div>
              ))}
            </Item>
            <Item>
              <button onClick={() => scrollTo("#contact")} className="mt-12 rounded-full bg-night text-white px-7 py-4 font-semibold transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]">
                Partner with us
              </button>
            </Item>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
