import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, Award, Building2, Clock, Shield } from "lucide-react";

const stats = [
  { Icon: Award, value: "13+", label: "лет опыта" },
  { Icon: Building2, value: "500+", label: "реализованных объектов" },
  { Icon: Clock, value: "24", label: "часа среднее время выезда" },
  { Icon: Shield, value: "5", label: "лет гарантии" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-premium animate-gradient" />

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -left-32 top-1/4 h-[600px] w-[600px] rounded-full bg-[#e34a05]/20 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#e34a05]/20 blur-[100px]"
      />

      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/background_anima_mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/images/background_anima_upscaled.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#121212]/70 via-[#121212]/50 to-[#121212]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#121212]/80 via-transparent to-[#121212]/60" />

      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-20 md:px-10 md:pt-32 lg:px-16"
      >
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#e34a05]" />
              <span className="font-inter text-xs font-medium tracking-wider text-white/80 uppercase">
                Премиальные ворота и автоматика
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="font-sora text-4xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl"
            >
              Ворота, которые{" "}
              <span className="text-gradient">работают</span>{" "}
              десятилетиями
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 max-w-xl font-manrope text-lg leading-relaxed text-white/70 md:text-xl"
            >
              Проектирование, поставка и монтаж ворот для частных домов, бизнеса
              и промышленных объектов.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contacts"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#e34a05] px-8 py-4 font-manrope font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(227,74,5,0.4)]"
              >
                <span className="relative z-10">Получить расчёт</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </a>
              <a
                href="#catalog"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-manrope font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#e34a05]/50 hover:bg-white/10"
              >
                Смотреть каталог
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const isFirst = index === 0;
            const isLast = index === stats.length - 1;
            return (
            <div
              key={stat.label}
               className={`group relative border border-white/[0.06] bg-white/[0.03] px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-[#e34a05]/30 hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(227,74,5,0.15)]${isFirst ? " rounded-s-2xl" : ""}${isLast ? " rounded-e-2xl" : ""}`}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e34a05]/20">
                  <stat.Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-sora text-2xl font-bold text-gradient md:text-3xl leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-manrope text-sm text-white/60">
                    {stat.label}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-full bg-[#e34a05]/20">
                <div className="shimmer-orange h-full w-full" />
              </div>
            </div>
            );
          })}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-[2] h-32 bg-gradient-to-t from-[#121212] to-transparent" />
    </section>
  );
}
