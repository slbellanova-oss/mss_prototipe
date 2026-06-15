import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const gateTypes = [
  "Секционные ворота",
  "Откатные ворота",
  "Распашные ворота",
  "Промышленные ворота",
  "Автоматика",
  "Ремонт/обслуживание",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "",
    comment: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacts" className="relative py-24 md:py-32 xl:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-sm font-medium tracking-[0.2em] text-[#e34a05] uppercase"
            >
              Контакты
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 font-sora text-3xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Свяжитесь с{" "}
              <span className="text-gradient">нами</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 font-inter text-lg leading-relaxed text-white/70"
            >
              Оставьте заявку — мы перезвоним, проконсультируем и рассчитаем
              стоимость вашего проекта.
            </motion.p>

            <div className="mt-10 space-y-6">
              <motion.a
                href="tel:+79995606503"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e34a05]/20 text-[#e34a05] transition-colors group-hover:bg-[#e34a05] group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-inter text-sm text-white/50">Телефон</p>
                  <p className="font-manrope text-lg font-semibold text-white">
                    +7 999 560 65 03
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@mcc-vorota.ru"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e34a05]/20 text-[#e34a05] transition-colors group-hover:bg-[#e34a05] group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-inter text-sm text-white/50">Email</p>
                  <p className="font-manrope text-lg font-semibold text-white">
                    info@mcc-vorota.ru
                  </p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e34a05]/20 text-[#e34a05]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-inter text-sm text-white/50">Адрес</p>
                  <p className="font-manrope text-lg font-semibold text-white">
                    Москва, ул. Строителей, 25
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-4 pt-4"
              >
                <a
                  href="https://wa.me/79995606503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-inter text-sm text-white transition-all duration-300 hover:border-[#e34a05]/50 hover:bg-[#e34a05]/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/mcc_vorota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-inter text-sm text-white transition-all duration-300 hover:border-[#e34a05]/50 hover:bg-[#e34a05]/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  Telegram
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-6 md:p-10"
          >
            <h3 className="font-manrope text-2xl font-bold text-white">
              Оставить заявку
            </h3>
            <p className="mt-2 font-inter text-sm text-white/60">
              Заполните форму — мы перезвоним вам
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  required
                  className="peer w-full border-b-2 border-white/10 bg-transparent px-0 pb-3 pt-2 font-inter text-white outline-none transition-colors focus:border-[#e34a05]"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className={`absolute left-0 top-2 font-inter text-sm transition-all duration-300 ${
                    focused === "name" || formData.name
                      ? "-top-4 text-xs text-[#e34a05]"
                      : "text-white/50"
                  }`}
                >
                  Имя
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  required
                  className="peer w-full border-b-2 border-white/10 bg-transparent px-0 pb-3 pt-2 font-inter text-white outline-none transition-colors focus:border-[#e34a05]"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className={`absolute left-0 top-2 font-inter text-sm transition-all duration-300 ${
                    focused === "phone" || formData.phone
                      ? "-top-4 text-xs text-[#e34a05]"
                      : "text-white/50"
                  }`}
                >
                  Телефон
                </label>
              </div>

              <div className="relative">
                <select
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  onFocus={() => setFocused("type")}
                  onBlur={() => setFocused(null)}
                  className="w-full border-b-2 border-white/10 bg-transparent px-0 pb-3 pt-2 font-inter text-white outline-none transition-colors focus:border-[#e34a05]"
                >
                  <option value="" disabled className="bg-[#121212]">
                    Тип ворот
                  </option>
                  {gateTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#121212]">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <textarea
                  name="comment"
                  id="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  onFocus={() => setFocused("comment")}
                  onBlur={() => setFocused(null)}
                  rows={4}
                  className="peer w-full resize-none border-b-2 border-white/10 bg-transparent px-0 pb-3 pt-2 font-inter text-white outline-none transition-colors focus:border-[#e34a05]"
                  placeholder=" "
                />
                <label
                  htmlFor="comment"
                  className={`absolute left-0 top-2 font-inter text-sm transition-all duration-300 ${
                    focused === "comment" || formData.comment
                      ? "-top-4 text-xs text-[#e34a05]"
                      : "text-white/50"
                  }`}
                >
                  Комментарий
                </label>
              </div>

              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#e34a05] py-4 font-manrope font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(227,74,5,0.4)]"
              >
                <span className="relative z-10">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="h-5 w-5" />
                      Заявка отправлена
                    </motion.span>
                  ) : (
                    <motion.span
                      key="submit"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Получить расчёт
                    </motion.span>
                  )}
                </AnimatePresence>
                </span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </button>

              <p className="text-center font-inter text-xs text-white/40">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden rounded-3xl"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a] sm:aspect-[16/9] md:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2177617535023!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sru!2sru!4v1600000000000!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MCC Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
