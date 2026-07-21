/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardsGrid from "./components/CardsGrid";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div id="app-root" className="min-h-screen flex flex-col selection:bg-warm-terracotta selection:text-white antialiased">
      {/* Premium Header */}
      <Header onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenContact={handleOpenContact} />
        <CardsGrid onOpenContact={handleOpenContact} />
        <About />
        <Testimonials />
        <FAQ />
        <Services onOpenContact={handleOpenContact} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Contact & Appointment Request Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />

      {/* Floating Back to Top button */}
      <BackToTop />
    </div>
  );
}
