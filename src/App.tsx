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
import { CatalogPage } from "./components/CatalogPage";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const goToMain = () => { setShowPrivacy(false); setShowCatalog(false); window.scrollTo({ top: 0, behavior: "smooth" }); };

  if (showPrivacy) return (
    <>
      <Navbar onCatalogClick={() => { setShowPrivacy(false); setShowCatalog(true); }} onLogoClick={goToMain} />
      <PrivacyPolicy onBack={() => setShowPrivacy(false)} />
    </>
  );

  if (showCatalog) return (
    <>
      <Navbar onCatalogClick={() => setShowCatalog(true)} onLogoClick={goToMain} />
      <CatalogPage onBack={() => setShowCatalog(false)} />
    </>
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#121212] text-white">
      <LoadingScreen />
      {isLoaded && (
        <>
          <Navbar onCatalogClick={() => setShowCatalog(true)} onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <main>
            <Hero />
            <Services />
            <Catalog onCatalogClick={() => setShowCatalog(true)} />
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
