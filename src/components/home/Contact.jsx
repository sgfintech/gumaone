import React, { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Stagger, Item } from "./Payong";

const INTERESTS = ["Partner or reseller", "I want to sell (merchant)", "Investor", "Press", "Something else"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", interest: INTERESTS[0], message: "" });
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return setError("Please tell us your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError("Please enter a valid email address.");
    if (!form.message.trim()) return setError("Tell us a little about what you have in mind.");
    setError("");
    const subject = `[guma.one] ${form.interest} — ${form.name}`;
    const body = `${form.message}\n\n— ${form.name}\n${form.email}`;
    window.location.href = `mailto:info@sggwebs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const field = "w-full bg-sun-2 text-night placeholder:text-night/70 px-4 h-[54px] font-semibold focus:outline-none focus-visible:ring-[3px] focus-visible:ring-night";

  return (
    <section id="contact" className="bg-white text-night scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <Stagger>
          <Item className="coupon bg-sun text-night grid lg:grid-cols-[46%_1fr]">
            <div className="p-8 md:p-12 flex flex-col justify-between gap-10 lg:border-r-[5px] lg:border-dotted lg:border-night">
              <div>
                <h2 className="t-head max-w-[12ch]">Bring your business in.</h2>
                <p className="mt-5 max-w-[36ch]">
                  Vendor, printer, rider, fisher, farmer or investor: if one of these apps should be running your business, we want to hear from you.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail size={20} className="mt-1 shrink-0" />
                  <a href="mailto:info@sggwebs.com" className="font-semibold hover:underline underline-offset-4">info@sggwebs.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0" />
                  <a href="tel:+639766594357" className="font-semibold hover:underline underline-offset-4">+63 976 659 4357</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0" />
                  <span>B1 L2 Phase 3 Fiesta Communities 2, Manibaug Paralaya, Porac 2008, Pampanga</span>
                </li>
              </ul>
            </div>

            <form onSubmit={submit} className="p-8 md:p-12 flex flex-col gap-2.5 border-t-[5px] border-dotted border-night lg:border-t-0" noValidate>
              <label className="block">
                <span className="sr-only">Name</span>
                <input value={form.name} onChange={set("name")} className={field} placeholder="Name" autoComplete="name" />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input value={form.email} onChange={set("email")} type="email" className={field} placeholder="Email" autoComplete="email" />
              </label>
              <label className="block">
                <span className="sr-only">I am a</span>
                <select value={form.interest} onChange={set("interest")} className={field}>
                  {INTERESTS.map((i) => (
                    <option key={i}>{i}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea value={form.message} onChange={set("message")} rows={4} className={`${field} h-auto py-3.5 font-normal`} placeholder="What do you sell or do, and which app fits?" />
              </label>
              {error && <p className="text-night font-semibold" role="alert">{error}</p>}
              <button type="submit" className="mt-2 h-14 w-full rounded-full inline-flex items-center justify-center gap-2 bg-night text-white font-semibold transition-[transform,background-color] duration-200 hover:bg-night-3 active:scale-[0.99]">
                Send message <ArrowRight size={18} />
              </button>
              <p className="t-small">This opens your mail app with the message ready to send.</p>
            </form>
          </Item>
        </Stagger>
      </div>
    </section>
  );
}
