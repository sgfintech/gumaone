import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Rocket,
  Layers,
  Globe,
  TrendingUp,
  Handshake,
  Mail,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const thesis = [
  {
    icon: Layers,
    title: "Direct Access. More Value on Both Sides.",
    desc: "Our D2C-first model aims to shorten the distance between producers, merchants and customers. Fewer unnecessary handoffs can mean stronger seller economics, clearer pricing and better customer value—not a promise to eliminate every intermediary.",
  },
  {
    icon: Globe,
    title: "Built for the Underserved Philippine Economy",
    desc: "From farmers and seafood suppliers to MSMEs and service professionals, Guma One targets markets where fragmented distribution, limited digital tools and costly customer acquisition constrain growth.",
  },
  {
    icon: Rocket,
    title: "AI-Capable. Human-Led.",
    desc: "We intend to use AI for discovery, decision support, business automation and operational efficiency. People remain accountable for commerce, service quality, trust and critical decisions. AI capabilities will be rolled out and validated by product.",
  },
  {
    icon: TrendingUp,
    title: "A Repeatable Commerce Model, Not Just More Apps",
    desc: "Focused ventures test direct selling, service transactions, fulfillment and merchant software. Potential revenues include transaction fees, subscriptions and value-added services; scale follows evidence of customer demand and healthy unit economics.",
  },
];

const seeking = [
  "Validate D2C demand through priority marketplace and service pilots",
  "Activate producers, merchants and service providers with direct customer access",
  "Improve conversion, fulfillment and merchant productivity with practical AI tools",
  "Measure completed transactions, repeat usage, seller earnings and contribution margin",
];

export default function Investors() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-24">
          <div className="absolute inset-0 circuit-bg opacity-30" />
          <div className="absolute top-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-teal/8 blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-teal text-sm font-medium tracking-wide">
                D2C Commerce · AI-Capable · Human-Led
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-black text-4xl md:text-6xl text-ghost leading-[1.05]"
            >
              Disrupting Traditional Commerce Through{" "}
              <span className="text-teal text-glow-teal">
                Direct-to-Consumer Access
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-steel max-w-2xl mx-auto leading-relaxed"
            >
              Guma One is building an AI-capable, human-led ecosystem that connects Philippine producers, merchants and service providers more directly with customers. Our mission: help sellers retain more value, help buyers access better choices and pricing, and make essential commerce simpler. We are starting with focused ventures and scaling only what real transactions validate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <a
                href="mailto:ceo@sggwebs.com?subject=Guma%20One%20Seed%20Investment%20Inquiry"
                className="group flex items-center gap-2 px-7 py-4 rounded-xl bg-teal text-obsidian font-semibold hover:bg-teal/90 transition-all hover:shadow-lg hover:shadow-teal/30"
              >
                <Mail size={18} />
                Discuss Seed Investment
              </a>
              <Link
                to="/#portfolio"
                className="px-7 py-4 rounded-xl border border-white/15 text-ghost font-semibold hover:bg-white/5 transition-all"
              >
                See the Portfolio
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Thesis */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-block text-teal text-sm font-bold tracking-widest uppercase mb-4">
                Why Guma One
              </div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-ghost leading-tight max-w-3xl mx-auto">
                One D2C Thesis. Multiple Markets to Transform.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {thesis.map((t, idx) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group p-7 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-teal/30 hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                      <t.icon className="text-teal" size={22} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-ghost mb-2">
                        {t.title}
                      </h3>
                      <p className="text-sm text-steel leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What we're seeking */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 circuit-bg-dense opacity-20" />
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-teal text-sm font-bold tracking-widest uppercase mb-4">
                  <Handshake size={16} /> The Seed-Stage Opportunity
                </div>
                <h2 className="font-heading font-black text-3xl md:text-4xl text-ghost leading-tight mb-6">
                  Invest in a More Direct Way to Do Business
                </h2>
                <ul className="space-y-4">
                  {seeking.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="text-teal" size={12} />
                      </div>
                      <span className="text-steel">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-teal" size={28} />
                </div>
                <h3 className="font-heading font-black text-2xl text-ghost mb-2">
                  Request the Investor Brief
                </h3>
                <p className="text-steel mb-6">
                  We are exploring an initial ₱5 million seed round to validate priority D2C ventures, strengthen fulfillment and merchant operations, and deploy practical AI capabilities. Funding, valuation and terms remain subject to diligence and agreement. Request the roadmap, proposed allocation and measurable milestones.
                </p>
                <a
                  href="mailto:ceo@sggwebs.com?subject=Guma%20One%20Seed%20Investment%20Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-teal text-obsidian font-semibold hover:bg-teal/90 transition-all w-full justify-center"
                >
                  <Mail size={18} />
                  ceo@sggwebs.com
                </a>
                <Link
                  to="/"
                  className="mt-4 inline-flex items-center gap-1 text-steel hover:text-teal transition-colors text-sm font-medium"
                >
                  <ArrowLeft size={14} /> Back to home
                </Link>
              </motion.div>
            </div>

            <p className="mt-12 text-xs text-steel/60 max-w-3xl leading-relaxed">
              The D2C model, AI roadmap and funding intentions describe strategy and proposed capabilities, not verified revenue, traction or financial forecasts. This page is for
              introductory discussions only; it is not an offer to sell or
              solicitation to buy securities. Any financing is subject to
              diligence, definitive documents and applicable law.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

