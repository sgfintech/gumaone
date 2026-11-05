import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import AppOrbit from "@/components/home/AppOrbit";
import ParaKanino from "@/components/home/ParaKanino";
import Engine from "@/components/home/Engine";
import Marquee from "@/components/home/Marquee";
import AppsEditorial from "@/components/home/AppsEditorial";
import Steps from "@/components/home/Steps";
import Bayanihan from "@/components/home/Bayanihan";
import Contact from "@/components/home/Contact";
import { PayongClipDefs } from "@/components/home/Payong";

export default function Home() {
  return (
    <div className="g1 min-h-screen bg-white text-night overflow-x-hidden">
      <PayongClipDefs />
      <Navbar />
      <main>
        <Hero />
        <AppOrbit />
        <ParaKanino />
        <Engine />
        <Marquee />
        <AppsEditorial />
        <Steps />
        <Bayanihan />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
