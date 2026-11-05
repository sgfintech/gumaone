import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { APPS, STATUS } from "@/lib/apps";

export default function AppPreview() {
  const { key } = useParams();
  const app = APPS.find(item => item.key === key);
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Early investor");
  const [consent, setConsent] = useState(false);
  if (!app) return <main className="min-h-screen flex flex-col items-center justify-center gap-4"><h1 className="text-3xl font-bold">App not found</h1><Link to="/#apps" className="underline">Explore Guma One apps</Link></main>;
  const subject = encodeURIComponent(`${app.name} — ${interest} interest`);
  const body = encodeURIComponent(`Hello Guma One,\n\nI would like to receive updates about ${app.name}.\nInterest: ${interest}\nEmail: ${email}\n\nI consent to being contacted about this inquiry.`);
  const mailto = `mailto:hello@guma.one?subject=${subject}&body=${body}`;
  const canSend = email.trim() && consent;
  return <main className="min-h-screen bg-white text-night">
    <div className="max-w-5xl mx-auto px-6 pt-12 pb-24">
      <Link to="/#apps" className="inline-flex items-center gap-2 text-sm font-semibold text-slate2 hover:text-night"><ArrowLeft size={16}/> Explore Guma One apps</Link>
      <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-tone px-4 py-2 text-sm font-semibold">{STATUS[app.status]?.label || "In development"}</span>
          <h1 className="mt-7 text-5xl md:text-6xl font-bold tracking-tight">{app.name}</h1>
          <p className="mt-5 text-2xl font-semibold">{app.tagline}</p>
          <p className="mt-5 text-lg leading-relaxed text-slate2">{app.description}</p>
          <p className="mt-8 text-lg font-semibold">A more direct way to do business is taking shape.</p>
          <p className="mt-3 text-slate2">We’re developing practical, AI-capable, human-led solutions for the people and businesses this market serves. Be among the first to hear about progress, pilot opportunities, and future launches.</p>
        </div>
        <div className="rounded-3xl bg-tone p-8 md:p-12 flex flex-col items-center justify-center min-h-[280px]">
          <img src={app.logo || (app.image?.startsWith('/logos/') ? app.image : '')} alt={`${app.name} logo`} className="w-full max-h-52 object-contain" onError={e=>{e.currentTarget.style.display='none';e.currentTarget.nextElementSibling.style.display='block'}} />
          <span style={{display:'none'}} className="text-4xl font-bold text-center">{app.name}</span>
        </div>
      </div>
      <section className="mt-16 max-w-xl border border-slate-200 rounded-3xl p-7 md:p-10">
        <div className="flex gap-3 items-center"><Mail size={24}/><h2 className="text-2xl font-bold">Get priority updates</h2></div>
        <p className="mt-3 text-slate2">Interested in early access, a commercial partnership, or an introductory investor conversation? Tell us where to reach you.</p>
        <form className="mt-7 space-y-4" onSubmit={e=>{e.preventDefault();if(canSend)window.location.href=mailto}}>
          <label className="block text-sm font-semibold" htmlFor="interest">I'm interested as a</label>
          <select id="interest" value={interest} onChange={e=>setInterest(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 bg-white"><option>Early investor</option><option>Potential customer</option><option>Business or distribution partner</option></select>
          <label className="block text-sm font-semibold" htmlFor="email">Email address</label>
          <input id="email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="w-full rounded-xl border border-slate-300 p-3" />
          <label className="flex gap-3 text-sm text-slate2"><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)}/> I agree to be contacted about this inquiry.</label>
          <button disabled={!canSend} className="w-full rounded-full bg-night text-white font-semibold py-4 disabled:opacity-50">Prepare my inquiry <ArrowUpRight size={16} className="inline"/></button>
        </form>
        <p className="mt-4 text-xs text-slate2">This opens your email application; it does not automatically register you in a database or guarantee investment access. Investment discussions are subject to eligibility and applicable law.</p>
      </section>
    </div>
  </main>;
}
