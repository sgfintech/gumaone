import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, MapPin, ShoppingBag, Wrench, Printer, Wallet, Gift, Bike, Bot, Radar } from "lucide-react";
export { ShoppingBag, Wrench, Printer, Wallet, Gift, Bike, Bot, Radar };

/*
  Small, real-looking screens from the Guma apps. Sample data only — swap for
  live numbers when you have them. Each root carries data-ui (product UI keeps
  its own panels and small type).
*/

function Head({ icon: Icon, app, tint = "bg-sun" }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-7 h-7 rounded-full ${tint} text-white flex items-center justify-center`}>
        <Icon size={15} />
      </span>
      <span className="text-[13px] font-semibold text-night">{app}</span>
    </div>
  );
}

export function KartCheckout({ className = "" }) {
  return (
    <div data-ui className={`ui-card p-4 w-[232px] ${className}`}>
      <Head icon={ShoppingBag} app="Guma Kart" />
      <p className="mt-3 text-[13px] text-slate2">Aling Nena’s Store · order #1042</p>
      <div className="mt-2 space-y-1 text-[14px] text-night">
        <div className="flex justify-between"><span>Longganisa, 1 kg</span><span>₱320</span></div>
        <div className="flex justify-between"><span>Ube halaya</span><span>₱180</span></div>
      </div>
      <div className="mt-2 pt-2 flex justify-between text-[14px] font-semibold text-night bg-tone -mx-4 px-4 pb-2">
        <span>Total</span><span>₱500</span>
      </div>
      <div className="mt-3 rounded-full bg-[#0A5BFF] text-white text-[13px] font-semibold text-center py-2">Pay with GCash</div>
    </div>
  );
}

export function EddieBooking({ className = "" }) {
  return (
    <div data-ui className={`ui-card p-4 w-[220px] ${className}`}>
      <Head icon={Wrench} app="Kuya Eddie" tint="bg-mango" />
      <p className="mt-3 text-[14px] font-semibold text-night">Aircon cleaning</p>
      <p className="text-[13px] text-slate2">Thu, 9:00 AM · Quezon City</p>
      <div className="mt-3 flex items-center gap-2 text-[13px] text-leaf font-semibold">
        <span className="w-5 h-5 rounded-full bg-leaf-soft flex items-center justify-center"><Check size={12} /></span>
        Pro confirmed
      </div>
    </div>
  );
}

export function BayanGoTrack({ className = "" }) {
  return (
    <div data-ui className={`ui-card p-4 w-[236px] ${className}`}>
      <Head icon={Bike} app="BayanGo" tint="bg-night" />
      <p className="mt-3 text-[14px] font-semibold text-night">Rider on the way</p>
      <p className="text-[13px] text-slate2">Porac → Angeles City</p>
      <div className="mt-3 h-2 rounded-full bg-tone-2 overflow-hidden">
        <div className="h-full w-[62%] rounded-full bg-sun" />
      </div>
      <div className="mt-2 flex justify-between text-[13px] text-slate2">
        <span className="flex items-center gap-1"><MapPin size={12} /> 6.4 km left</span>
        <span className="font-semibold text-night">18 min</span>
      </div>
    </div>
  );
}

export function PrintQuote({ className = "" }) {
  return (
    <div data-ui className={`ui-card p-4 w-[216px] ${className}`}>
      <Head icon={Printer} app="PrintAir" tint="bg-sun" />
      <p className="mt-3 text-[14px] text-night">500 product labels, 2 × 3 in, matte</p>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-[20px] font-semibold text-night">₱1,850</span>
        <span className="text-[13px] text-slate2">quoted in 4 min</span>
      </div>
    </div>
  );
}

export function WalletCard({ className = "" }) {
  return (
    <div data-ui className={`ui-card p-4 w-[224px] ${className}`}>
      <Head icon={Wallet} app="Guma wallet" tint="bg-night" />
      <p className="mt-3 text-[13px] text-slate2">Available balance</p>
      <p className="text-[22px] font-semibold text-night leading-tight">₱12,480.00</p>
      <div className="mt-2 space-y-1 text-[13px]">
        <div className="flex justify-between"><span className="text-slate2">Kart sale #1042</span><span className="text-leaf font-semibold">+₱500</span></div>
        <div className="flex justify-between"><span className="text-slate2">Payout to bank</span><span className="text-night">−₱5,000</span></div>
      </div>
    </div>
  );
}

export function PadalaReceipt({ className = "" }) {
  return (
    <div data-ui className={`ui-card p-4 w-[220px] ${className}`}>
      <Head icon={Gift} app="Kuya Eddie Padala" tint="bg-mango" />
      <p className="mt-3 text-[14px] font-semibold text-night">Delivered to Nanay</p>
      <p className="text-[13px] text-slate2">Groceries · Dasmariñas, Cavite</p>
      <p className="mt-2 text-[13px] text-night">Photo receipt sent to Dubai ✓</p>
    </div>
  );
}

/* Larger panels for the engine accordion */
export function AgentPanel() {
  const rows = [
    ["Customer", "Magkano po 500 stickers?"],
    ["ABIOS agent", "500 die-cut stickers, 3 in: ₱1,250. Ready Friday. Shall I book it?"],
    ["Customer", "Sige po, book na."],
    ["ABIOS agent", "Booked. Payment link sent, and a rider is set for Friday."],
  ];
  return (
    <div data-ui className="ui-card p-5 w-full max-w-[460px]">
      <Head icon={Bot} app="GUMA ABIOS · Messenger intake" tint="bg-sun" />
      <div className="mt-4 space-y-2.5">
        {rows.map(([who, text], i) => (
          <div key={i} className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[14px] ${who === "Customer" ? "bg-tone text-night" : "ml-auto bg-night text-white"}`}>
            <p className={`text-[13px] font-semibold ${who === "Customer" ? "text-slate2" : "text-mango"}`}>{who}</p>
            {text}
          </div>
        ))}
      </div>
      <p className="mt-4 text-[13px] text-slate2">Owner rule applied: quotes under ₱5,000 auto-approve.</p>
    </div>
  );
}

export function LedgerPanel() {
  const rows = [
    ["Guma Kart order #1042", "GCash", "+₱500.00"],
    ["Kuya Eddie booking", "Maya", "+₱1,200.00"],
    ["Veyron POS sale", "Cash", "+₱86.00"],
    ["Payout · BPI", "Bank", "−₱5,000.00"],
  ];
  return (
    <div data-ui className="ui-card p-5 w-full max-w-[460px]">
      <Head icon={Wallet} app="One wallet · today" tint="bg-night" />
      <p className="mt-4 text-[13px] text-slate2">Balance across all apps</p>
      <p className="text-[30px] font-semibold text-night leading-tight">₱12,480.00</p>
      <table className="mt-4 w-full text-[14px]">
        <tbody>
          {rows.map(([a, b, c]) => (
            <tr key={a} className="border-t border-tone-2">
              <td className="py-2 text-night">{a}</td>
              <td className="py-2 text-slate2">{b}</td>
              <td className={`py-2 text-right font-semibold ${c.startsWith("+") ? "text-leaf" : "text-night"}`}>{c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RoutePanel() {
  const stops = [
    ["Pickup · Guma Kart seller", "San Fernando", true],
    ["Drop · Kuya Eddie padala", "Porac", true],
    ["Drop · Seafoods GO order", "Angeles City", false],
  ];
  return (
    <div data-ui className="ui-card p-5 w-full max-w-[460px]">
      <Head icon={Bike} app="BayanGo · Route 7, Pampanga" tint="bg-night" />
      <ol className="mt-4 space-y-3">
        {stops.map(([what, where, done]) => (
          <li key={what} className="flex items-start gap-3">
            <span className={`mt-1 w-4 h-4 rounded-full shrink-0 ${done ? "bg-sun" : "bg-tone-3"}`} />
            <span>
              <span className="block text-[14px] font-semibold text-night">{what}</span>
              <span className="block text-[13px] text-slate2">{where}{done ? " · done" : " · next, 18 min"}</span>
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-4 h-2 rounded-full bg-tone-2 overflow-hidden"><div className="h-full w-2/3 bg-sun rounded-full" /></div>
    </div>
  );
}

export function DossierPanel() {
  const rows = [
    ["Facebook page", "Active, 2.1k followers"],
    ["Website", "None"],
    ["Online ordering", "Messenger only"],
    ["Best fit", "GUMAweb + Guma Kart"],
  ];
  return (
    <div data-ui className="ui-card p-5 w-full max-w-[460px]">
      <Head icon={Radar} app="Guma Intelligence · lead dossier" tint="bg-sun" />
      <p className="mt-4 text-[16px] font-semibold text-night">Carinderia ni Aling Puring</p>
      <p className="text-[13px] text-slate2">Mabalacat, Pampanga · food</p>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex-1 h-2 rounded-full bg-tone-2 overflow-hidden"><div className="h-full w-[38%] bg-mango rounded-full" /></div>
        <span className="text-[13px] font-semibold text-night">Digital readiness 38/100</span>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[14px]">
        {rows.map(([k, v]) => (
          <React.Fragment key={k}>
            <dt className="text-slate2">{k}</dt>
            <dd className="text-night font-semibold">{v}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
}

/* A phone running a Messenger sale through Guma Kart: the whole engine in one chat. */
export function PhoneSale({ className = "" }) {
  const reduce = useReducedMotion();
  const msgs = [
    ["in", "MINE po! Longganisa 1 kg + ube halaya"],
    ["out", "Salamat! Your checkout link: kart.guma.one/nena/1042"],
    ["sys", "Paid ₱500 via GCash"],
    ["sys", "BayanGo rider booked · 18 min"],
    ["in", "Ang bilis, salamat!"],
  ];
  return (
    <div data-ui className={`relative w-[236px] h-[468px] rounded-[38px] bg-night p-[9px] ${className}`} style={{ boxShadow: "0 30px 60px -20px rgba(16,24,40,.45)" }}>
      <div className="w-full h-full rounded-[30px] bg-[#F6F7FB] overflow-hidden flex flex-col">
        <div className="bg-white px-4 pt-6 pb-3 flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-sun text-white text-[13px] font-semibold flex items-center justify-center">AN</span>
          <span>
            <span className="block text-[13px] font-semibold text-night">Aling Nena’s Store</span>
            <span className="block text-[13px] text-leaf">Guma Kart · online</span>
          </span>
        </div>
        <div className="flex-1 px-3 py-3 space-y-2">
          {msgs.map(([k, t], i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.7, duration: 0.5 }}
              className={
                k === "sys"
                  ? "mx-auto w-fit rounded-full bg-leaf-soft text-leaf text-[13px] font-semibold px-3 py-1"
                  : `max-w-[82%] rounded-2xl px-3 py-2 text-[13px] ${k === "in" ? "bg-white text-night" : "ml-auto bg-sunink text-white"}`
              }
            >
              {t}
            </motion.div>
          ))}
        </div>
        <div className="m-3 rounded-full bg-white px-4 py-2 text-[13px] text-slate2">Message…</div>
      </div>
    </div>
  );
}

export function Chip({ icon: Icon, label, tint = "bg-sun", className = "" }) {
  return (
    <span data-ui className={`ui-card inline-flex items-center gap-2 rounded-full pl-1.5 pr-4 py-1.5 text-[14px] font-semibold text-night ${className}`}>
      <span className={`w-7 h-7 rounded-full ${tint} text-white flex items-center justify-center`}><Icon size={14} /></span>
      {label}
    </span>
  );
}
