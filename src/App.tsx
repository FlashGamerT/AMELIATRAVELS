/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Destinations from "./components/Destinations";
import Reviews from "./components/Reviews";
import EnquiryForm from "./components/EnquiryForm";
import AdminPanel from "./components/AdminPanel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";

export default function App() {
  // Shared state to let the Admin Panel database checker listen to new form submissions
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleEnquirySubmitted = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div id="amelia-app" className="bg-gradient-to-br from-[#f0f9ff] via-[#ecfdf5] to-[#fefce8] min-h-screen text-slate-800 font-sans relative antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Decorative Top header background glow */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-100/30 via-transparent to-transparent pointer-events-none" />

      {/* Floating Sparkles decorative items */}
      <div className="absolute top-44 left-10 w-4 h-4 bg-amber-400 rounded-full blur-[2px] opacity-40 animate-pulse pointer-events-none" />
      <div className="absolute top-96 right-16 w-3 h-3 bg-blue-400 rounded-full blur-[1px] opacity-40 animate-pulse pointer-events-none" />

      {/* Primary Landing Header Navigation */}
      <Header />

      {/* Main Sections */}
      <main className="relative">
        
        {/* Hero Area */}
        <Hero />

        {/* Why Choose Us & About details */}
        <AboutUs />

        {/* Core Services catalog with click interactions */}
        <Services />

        {/* Elite fleet selections with specifications features */}
        <Fleet />

        {/* Famous Sightseeings coverage */}
        <Destinations />

        {/* Customer Experience Reviews block */}
        <Reviews />

        {/* Stored submission-driven enquiry form block */}
        <EnquiryForm onSuccessSubmit={handleEnquirySubmitted} />

        {/* Fully operational management table logs */}
        <AdminPanel refreshTrigger={refreshTrigger} />

        {/* Maps Coordinates & Telephone Details Section */}
        <Contact />

      </main>

      {/* Footer copyright, social mockups, and quicklinks */}
      <Footer />

      {/* Persistent floating click-to-WhatsApp badge */}
      <WhatsAppFloating />

    </div>
  );
}
