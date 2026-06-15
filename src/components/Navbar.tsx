import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/utils/cn";

const navLinks = [
  { label: "Каталог", href: "#catalog" },
  { label: "Услуги", href: "#services" },
  { label: "Проекты", href: "#projects" },
  { label: "О компании", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#121212]/80 py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-16">
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-manrope text-base font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#e34a05] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="tel:+79995606503"
              className="flex items-center gap-2 font-manrope text-sm font-semibold text-white transition-colors hover:text-[#e34a05]"
            >
              <Phone className="h-4 w-4" />
              +7 999 560 65 03
            </a>
            <a
              href="#contacts"
              className="group relative overflow-hidden rounded-full bg-[#e34a05] px-6 py-2.5 font-manrope text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,74,5,0.4)]"
            >
              <span className="relative z-10">Получить расчёт</span>
              <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#121212]/95 backdrop-blur-xl pt-24 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sora text-2xl font-semibold text-white hover:text-[#e34a05]"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="tel:+79995606503"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 font-manrope text-xl font-semibold text-white hover:text-[#e34a05]"
              >
                <Phone className="h-5 w-5" />
                +7 999 560 65 03
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                href="#contacts"
                onClick={() => setMobileMenuOpen(false)}
                className="group relative mt-2 overflow-hidden rounded-full bg-[#e34a05] px-8 py-3 font-manrope font-semibold text-white"
              >
                <span className="relative z-10">Получить расчёт</span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
