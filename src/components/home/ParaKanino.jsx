import React from "react";
import Photo from "./Photo";
import { Stagger, Item } from "./Payong";
import { PHOTOS } from "@/lib/photos";

const PEOPLE = [
  {
    photo: PHOTOS.tindera,
    tile: "bg-sun",
    who: "Aling Nena, market vendor",
    body: "A seller should be able to turn a customer inquiry into a clear order, payment request and delivery plan—without juggling disconnected tools.",
    apps: "Guma Kart, Veyron POS, GumaPrint",
  },
  {
    photo: PHOTOS.rider,
    tile: "bg-mango",
    who: "Kuya Jun, provincial rider",
    body: "BayanGo aims to connect riders, local merchants and households in places where delivery options remain fragmented.",
    apps: "BayanGo, Kuya Eddie",
  },
  {
    photo: PHOTOS.family,
    tile: "bg-night",
    who: "Ate Marites, working in Dubai",
    body: "Kuya Eddie is exploring service and purchase vouchers so overseas Filipinos can support specific family needs with better visibility.",
    apps: "Kuya Eddie Padala, REKTA, Seafoods GO",
  },
];

export default function ParaKanino() {
  return (
    <section id="para-kanino" className="bg-tone text-night scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40 grid lg:grid-cols-12 gap-12 lg:gap-6">
        <Stagger className="lg:col-span-12 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <Item as="h2" className="t-head max-w-[16ch]">Built around real customers.</Item>
          <Item as="p" className="mt-6 lg:mt-0 text-night max-w-[40ch]">
            Not for Silicon Valley. Every app is made for a real person with a real problem.
          </Item>
        </Stagger>

        <Stagger className="lg:col-span-12 -mx-6 px-6 flex sm:grid sm:mx-0 sm:px-0 sm:grid-cols-3 gap-4 sm:gap-x-4 sm:gap-y-12 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-px-6 no-scrollbar">
          {PEOPLE.map((p) => (
            <Item as="article" key={p.who} className="group w-[82%] shrink-0 sm:w-auto snap-start">
              <div className={`${p.tile} aspect-[3/2] sm:aspect-[4/5] flex items-end justify-center px-[24%] sm:px-[9%] pt-[6%] sm:pt-[12%] overflow-hidden`}>
                <Photo
                  src={p.photo.src}
                  alt={p.photo.alt}
                  shape="payong"
                  className="w-full aspect-[4/5]"
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="mt-5 t-lead">{p.who}</h3>
              <p className="mt-2 text-night">{p.body}</p>
              <p className="mt-3 text-sunink font-semibold">{p.apps}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
