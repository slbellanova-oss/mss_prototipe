import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const footerLinks = {
  catalog: {
    title: "Каталог",
    links: [
      { label: "Секционные ворота", href: "#catalog" },
      { label: "Откатные ворота", href: "#catalog" },
      { label: "Распашные ворота", href: "#catalog" },
      { label: "Промышленные ворота", href: "#catalog" },
      { label: "Автоматика", href: "#catalog" },
    ],
  },
  services: {
    title: "Услуги",
    links: [
      { label: "Монтаж ворот", href: "#services" },
      { label: "Ремонт ворот", href: "#services" },
      { label: "Обслуживание", href: "#services" },
      { label: "Автоматизация", href: "#services" },
      { label: "Замер", href: "#services" },
    ],
  },
  company: {
    title: "Компания",
    links: [
      { label: "О нас", href: "#about" },
      { label: "Проекты", href: "#projects" },
      { label: "Отзывы", href: "#reviews" },
      { label: "Контакты", href: "#contacts" },
      { label: "Политика конфиденциальности", href: "#" },
    ],
  },
};

interface FooterProps {
  onPrivacyClick?: () => void;
}

export function Footer({ onPrivacyClick }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0a] pt-20">
      <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#e34a05]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm font-inter text-sm leading-relaxed text-white/50">
              Проектирование, поставка и монтаж премиальных ворот и автоматики
              для частных домов, бизнеса и промышленных объектов.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+79995606503"
                className="group flex items-center gap-3 text-white transition-colors hover:text-[#e34a05]"
              >
                <Phone className="h-4 w-4 text-[#e34a05]" />
                <span className="font-manrope font-semibold">
                  +7 999 560 65 03
                </span>
              </a>
              <a
                href="mailto:info@mcc-vorota.ru"
                className="group flex items-center gap-3 text-white transition-colors hover:text-[#e34a05]"
              >
                <Mail className="h-4 w-4 text-[#e34a05]" />
                <span className="font-inter">info@mcc-vorota.ru</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-4 w-4 text-[#e34a05]" />
                <span className="font-inter text-sm">
                  Москва, ул. Строителей, 25
                </span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://wa.me/79995606503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#e34a05]/50 hover:bg-[#e34a05]/20"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://t.me/mcc_vorota"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#e34a05]/50 hover:bg-[#e34a05]/20"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="lg:col-span-2"
            >
              <h4 className="font-manrope text-sm font-bold tracking-wider text-white uppercase">
                {section.title}
              </h4>
              <ul className="mt-6 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.label === "Политика конфиденциальности" ? (
                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); onPrivacyClick?.(); }}
                        className="group inline-flex items-center gap-1 font-inter text-sm text-white/60 transition-colors hover:text-[#e34a05] active:text-[#e34a05]"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1 font-inter text-sm text-white/60 transition-colors hover:text-[#e34a05] active:text-[#e34a05]"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h4 className="font-manrope text-sm font-bold tracking-wider text-white uppercase">
              Режим работы
            </h4>
            <ul className="mt-6 space-y-3 font-inter text-sm text-white/60">
              <li>Пн—Пт: 9:00 — 20:00</li>
              <li>Сб: 10:00 — 18:00</li>
              <li>Вс: выходной</li>
              <li className="pt-2 text-[#e34a05]">
                Сервисная служба: 24/7
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 md:flex-row">
          <p className="font-inter text-xs text-white/40">
            © 2026 MCC — Монтаж Строй Сервис. Все права защищены.
          </p>
          <p className="font-inter text-xs text-white/40">
            ООО «МСС». ИНН: 6685040059
          </p>
        </div>
      </div>
    </footer>
  );
}
