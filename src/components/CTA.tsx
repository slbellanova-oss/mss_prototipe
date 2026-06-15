import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 xl:py-40">
      <div className="absolute inset-0 bg-gradient-premium animate-gradient" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#e34a05]/30 blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#e34a05]/30 blur-[120px]"
      />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10 lg:px-16 xl:px-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 font-inter text-sm font-medium tracking-wider text-white/80 uppercase backdrop-blur-sm"
        >
          Бесплатная консультация
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-sora text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          Рассчитаем стоимость ворот{" "}
          <span className="text-gradient">за 15 минут</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl font-manrope text-lg text-white/70 md:text-xl"
        >
          Оставьте заявку и получите персональный расчёт стоимости с учётом
          размеров, типа конструкции и автоматики.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="#contacts"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#e34a05] px-8 py-4 font-manrope font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(227,74,5,0.4)]"
          >
            <span className="relative z-10">Получить расчёт</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 font-inter text-sm text-white/50"
        >
          Ответим в течение 15 минут в рабочее время
        </motion.p>
      </div>
    </section>
  );
}
