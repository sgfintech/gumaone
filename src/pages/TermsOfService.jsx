import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-ghost dark:bg-obsidian">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading font-black text-4xl md:text-5xl text-obsidian dark:text-ghost mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 dark:text-steel mb-10">
            Last updated: July 2026
          </p>

          <div className="space-y-6 text-slate-600 dark:text-steel leading-relaxed">
            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                These Terms of Service govern your use of the website and
                services of SGG IT Services, a business registered in the
                Republic of the Philippines
                (DTI Business Name Registration No. 4217383)
                (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By
                accessing or using our website or services, you agree to be
                bound by these Terms. If you do not agree, please do not use our
                website or services.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                2. Services
              </h2>
              <p>
                SGG IT Services is an AI-commerce technology company and venture
                studio. We design, build, launch, and operate software products
                and platforms, and provide related technology and consultancy
                services. Specific deliverables, timelines, and fees are defined
                in individual service agreements, proposals, or orders with each
                client.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                3. Payment Terms
              </h2>
              <p>
                Fees, billing schedules, and accepted payment methods are set out
                in your service agreement, proposal, or order. Unless otherwise
                agreed, invoices are payable within 15 days of the invoice
                date. Engagements may require an upfront
                deposit before work begins. Late payments may result in
                suspension of services. All fees are exclusive of applicable
                taxes unless stated otherwise.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                4. Cancellations &amp; Refunds
              </h2>
              <p>
                Cancellations and refunds are governed by our{" "}
                <Link
                  to="/refund-policy"
                  className="text-teal hover:underline"
                >
                  Refund &amp; Cancellation Policy
                </Link>
                , which forms part of these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                5. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos, and
                software, is the property of SGG IT Services or its licensors and
                is protected by intellectual property laws. You may not reproduce
                or distribute content without prior written permission. Ownership
                of deliverables produced under a client engagement is governed by
                the applicable service agreement.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                6. Client Responsibilities
              </h2>
              <p>
                Clients are responsible for providing accurate information, timely
                feedback, and necessary access to systems during engagements.
                Delays caused by client-side dependencies may affect project
                timelines and costs.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, SGG IT Services shall not
                be liable for indirect, incidental, or consequential damages
                arising from the use of our website or services. Our total
                liability is limited to the fees paid for the specific service
                giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                8. Governing Law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the
                laws of the Republic of the Philippines. Any dispute arising from
                these Terms or our services shall be subject to the exclusive
                jurisdiction of the competent courts of Pampanga, Philippines.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                9. Contact
              </h2>
              <p>
                For questions about these Terms of Service, email us at
                info@sggwebs.com or write to us at B1 L2 Phase 3 Fiesta
                Communities 2, Manibaug Paralaya, Porac, 2008, Pampanga,
                Philippines.
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

