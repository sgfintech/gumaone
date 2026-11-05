import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-ghost dark:bg-obsidian">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading font-black text-4xl md:text-5xl text-obsidian dark:text-ghost mb-4">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-steel mb-10">
            Last updated: July 2026
          </p>

          <div className="space-y-6 text-slate-600 dark:text-steel leading-relaxed">
            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                1. Overview
              </h2>
              <p>
                This policy explains how cancellations and refunds are handled
                for services and products provided by SGG IT Services
                (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). The
                specific terms for any engagement are set out in the individual
                service agreement, proposal, or order you accept; where a signed
                agreement differs from this page, that agreement prevails.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                2. Custom Services &amp; Development
              </h2>
              <p>
                Consultancy, design, and development work is billed by scope and
                milestones. Because work begins on a reserved schedule:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  A deposit of 30% is required to begin and is non-refundable
                  once work has commenced.
                </li>
                <li>
                  You may cancel an active engagement with 15 days&apos; written
                  notice to info@sggwebs.com.
                </li>
                <li>
                  On cancellation, you are billed for all work completed and
                  approved up to the cancellation date; any prepaid amount
                  beyond that is refunded.
                </li>
                <li>
                  Completed and delivered milestones are non-refundable.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                3. Subscriptions &amp; SaaS Products
              </h2>
              <p>
                Where a product is offered on a recurring subscription, you may
                cancel at any time and your subscription will remain active
                until the end of the current billing period. Recurring fees
                already charged for the current period are non-refundable except
                where required by law. We do not provide pro-rated refunds for
                partial periods unless stated in your plan.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                4. Requesting a Refund
              </h2>
              <p>
                To request a cancellation or refund, email info@sggwebs.com with
                your name, the service or order reference, and the reason for
                your request. We aim to acknowledge requests within 3 business
                days and to process approved refunds within 15 business days to
                the original payment method.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                5. Exceptions
              </h2>
              <p>
                Third-party costs already incurred on your behalf (for example
                cloud hosting, domains, paid licenses, or payment-processing
                fees) are non-refundable. Nothing in this policy limits any
                rights you may have under the applicable consumer-protection
                laws of the Republic of the Philippines.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                6. Contact
              </h2>
              <p>
                Questions about this policy? Email us at info@sggwebs.com or
                write to us at B1 L2 Phase 3 Fiesta Communities 2, Manibaug
                Paralaya, Porac, 2008, Pampanga, Philippines.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

