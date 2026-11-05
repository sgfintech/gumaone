import React from "react";
import Photo from "./Photo";
import { APPS, MARQUEE_PHOTOS, MARQUEE_LOGOS } from "@/lib/apps";

/* Photo-led app showcase. Brand marks live BELOW photos, never inside them. */
export default function Marquee() {
  const row = [...APPS, ...APPS];
  return (
    <div className="bg-white py-16 md:py-24 overflow-hidden g1-marquee-wrap" aria-label="Guma One app showcase">
      <div className="flex w-max gap-6 g1-marquee">
        {row.map((app, index) => {
          const logo = MARQUEE_LOGOS[app.key];
          const image = MARQUEE_PHOTOS[app.key] || app.image;
          return (
            <div key={`${app.key}-${index}`} className="w-[150px] sm:w-[200px] shrink-0" aria-hidden={index >= APPS.length ? "true" : undefined}>
              <Photo src={image} alt={app.alt || `${app.name} industry photograph`} shape="payong" className="w-full aspect-[5/4]" />
              <div className="mt-3 h-11 flex items-center justify-start" title={app.name}>
                {logo ? (
                  <img src={logo} alt={`${app.name} logo`} loading="lazy" decoding="async" className="block max-w-full max-h-10 w-auto h-auto object-contain" />
                ) : (
                  <p className="font-semibold text-night leading-tight">{app.name}</p>
                )}
              </div>
              <p className="t-small text-slate2 truncate">{app.categoryLabel}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
