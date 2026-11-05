import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/*
  The payong (market umbrella) is the one shape on the home page.
  - <Canopy>: the big orange-and-mango canopy, cropped by the screen.
  - <PayongMark>: the same canopy at text size (list bullets, band).
  - <PayongClipDefs>: the umbrella outline used to cut every photograph.
  - <Stagger>/<Item>: section entrances (text rises, media opens from a blur).
*/

const SUN = "#F25A26";
const MANGO = "#F2A93B";

function canopyPanels({ width, height, panels, sag, dip, inset = 24 }) {
  const apex = { x: width / 2, y: -height * 4 };
  const over = width * 0.04;
  const span = width + over * 2;
  const tips = Array.from({ length: panels + 1 }, (_, i) => {
    const x = -over + (i * span) / panels;
    const y = height - inset - sag * ((x - width / 2) / (width / 2)) ** 2;
    return { x, y };
  });
  return tips.slice(0, -1).map((t, i) => {
    const n = tips[i + 1];
    const mx = (t.x + n.x) / 2;
    const my = (t.y + n.y) / 2 - dip;
    return {
      d: `M${apex.x} ${apex.y} L${t.x} ${t.y} Q${mx} ${my} ${n.x} ${n.y} Z`,
      fill: i % 2 ? MANGO : SUN,
    };
  });
}

export function Canopy({ className = "", panels = 8 }) {
  const reduce = useReducedMotion();
  const shapes = canopyPanels({ width: 1440, height: 360, panels, sag: 70, dip: 46 });
  return (
    <svg viewBox="0 0 1440 360" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <motion.g
        initial={reduce ? false : { y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {shapes.map((s, i) => (
          <path key={i} d={s.d} fill={s.fill} stroke={s.fill} strokeWidth="1.5" strokeLinejoin="round" />
        ))}
      </motion.g>
    </svg>
  );
}

export function PayongMark({ className = "", two = true }) {
  const shapes = canopyPanels({ width: 48, height: 30, panels: 4, sag: 4, dip: 4, inset: 3 });
  return (
    <svg viewBox="0 0 48 30" className={className} aria-hidden="true">
      <clipPath id="pm-dome">
        <path d="M0 30 L0 22 C0 9 11 1 24 1 C37 1 48 9 48 22 L48 30 Z" />
      </clipPath>
      <g clipPath="url(#pm-dome)">
        {shapes.map((s, i) => (
          <path key={i} d={s.d} fill={two ? s.fill : MANGO} />
        ))}
      </g>
    </svg>
  );
}

/* Arch-topped, scallop-bottomed umbrella outline in objectBoundingBox units. */
export function PayongClipDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="payong-clip" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.42 C0,0.19 0.224,0 0.5,0 C0.776,0 1,0.19 1,0.42 L1,1 Q0.875,0.95 0.75,1 Q0.625,0.95 0.5,1 Q0.375,0.95 0.25,1 Q0.125,0.95 0,1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const EASE = [0.22, 1, 0.36, 1];

/* For grids: <Stagger> is the container, each <Item> keeps its own layout classes. */
export function Stagger({ as = "div", className = "", children, stagger = 0.09 }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Tag>
  );
}

/* Text rises into place; media ("reveal") opens from a soft blur with a slight scale. */
const VARIANTS = {
  rise: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } } },
  reveal: {
    hidden: { opacity: 0, scale: 0.94, filter: "blur(10px)" },
    show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
  },
};

export function Item({ as = "div", className = "", children, kind = "rise", ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      variants={reduce ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : VARIANTS[kind]}
      {...rest}
    >
      {children}
    </Tag>
  );
}
