import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-ghost dark:bg-obsidian">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading font-black text-4xl md:text-5xl text-obsidian dark:text-ghost mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-steel mb-10">
            Last updated: July 2026
          </p>

          <div className="space-y-6 text-slate-600 dark:text-steel leading-relaxed">
            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                1. Introduction
              </h2>
              <p>
                This Privacy Policy explains how SGG IT Services, a business
                registered in the Republic of the Philippines
                (DTI Business Name Registration No. 4217383)
                (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;),
                collects, uses, and protects your personal data. We are
                committed to handling your information in accordance with the
                Data Privacy Act of 2012 (Republic Act No. 10173), its
                Implementing Rules and Regulations, and the issuances of the
                National Privacy Commission (NPC).
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                2. Information We Collect
              </h2>
              <p>
                We collect information you provide directly, such as your name,
                email address, company name, and the details of your inquiry
                when you submit a contact or investor form. We also collect
                technical data including IP address, device and browser type,
                and usage patterns through cookies and analytics tools.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                3. How We Use Your Information
              </h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your inquiries and provide our services</li>
                <li>Operate, maintain, and improve our products and website</li>
                <li>Send relevant updates and service notifications</li>
                <li>Comply with legal obligations and prevent fraud or abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                4. Legal Basis for Processing
              </h2>
              <p>
                We process personal data on the basis of your consent, the
                performance of a contract with you, our legitimate interests in
                operating and growing our business, and compliance with legal
                obligations, as recognized under the Data Privacy Act of 2012.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                5. Cookies &amp; Analytics
              </h2>
              <p>
                Our website uses cookies and similar technologies to keep the
                site functioning, remember your preferences (such as light or
                dark mode), and understand how the site is used. You can control
                or disable cookies through your browser settings; some features
                may not function properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                6. Data Retention
              </h2>
              <p>
                We retain personal data only for as long as necessary to fulfil
                the purposes described in this policy, to comply with our legal
                and regulatory obligations, and to resolve disputes. When data
                is no longer needed, we securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                7. Third-Party Processors
              </h2>
              <p>
                We use trusted third-party providers to operate our website and
                services, including hosting and application infrastructure
                (Base44), cloud infrastructure (Amazon Web Services), and
                website analytics. These providers process data only on our
                instructions and under appropriate safeguards. Some may store or
                process data outside the Philippines; where they do, we take
                steps to ensure your data remains protected.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                8. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your data, including encryption in transit, access
                controls, and regular security reviews. However, no method of
                transmission or storage is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                9. Your Rights
              </h2>
              <p>
                Under the Data Privacy Act of 2012, you have the right to be
                informed, to access, to object, to rectify, to erasure or
                blocking, to data portability, and to lodge a complaint with the
                National Privacy Commission. To exercise these rights, contact us
                at info@sggwebs.com.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Material
                changes will be reflected by updating the &ldquo;Last
                updated&rdquo; date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-obsidian dark:text-ghost mb-2">
                11. Contact Us
              </h2>
              <p>
                For questions about this Privacy Policy or to reach our Data
                Protection Officer, email us at info@sggwebs.com or write to us
                at B1 L2 Phase 3 Fiesta Communities 2, Manibaug Paralaya, Porac,
                2008, Pampanga, Philippines.
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

