import { useEffect, useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Catalog } from "./components/Catalog";
import { PriceCalculator } from "./components/PriceCalculator";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { Reviews } from "./components/Reviews";
import { CTA } from "./components/CTA";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (showPrivacy) return (
    <>
      <Navbar />
      <PrivacyPolicy onBack={() => setShowPrivacy(false)} />
    </>
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#121212] text-white">
      <LoadingScreen />
      {isLoaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Catalog />
            <PriceCalculator />
            <Projects />
            <Process />
            <About />
            <Reviews />
            <CTA />
            <ContactForm />
          </main>
          <Footer onPrivacyClick={() => setShowPrivacy(true)} />
          <CookieConsent onPrivacyClick={() => setShowPrivacy(true)} />
        </>
      )}
    </div>
  );
}
