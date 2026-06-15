import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Заявка",
    description:
      "Оставьте заявку на сайте или позвоните нам. Мы оперативно свяжемся с вами.",
  },
  {
    number: "02",
    title: "Консультация",
    description:
      "Проведём детальную консультацию, подберём оптимальное решение под ваши задачи.",
  },
  {
    number: "03",
    title: "Замер",
    description:
      "Выезд специалиста на объект в течение 24 часов для точных замеров.",
  },
  {
    number: "04",
    title: "Подбор решения",
    description:
      "Составим коммерческое предложение с учётом вашего бюджета и пожеланий.",
  },
  {
    number: "05",
    title: "Монтаж",
    description:
      "Профессиональная установка собственной монтажной бригадой с гарантией качества.",
  },
  {
    number: "06",
    title: "Сдача объекта",
    description:
      "Финальная проверка, инструктаж и передача документации с гарантийным талоном.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="relative py-24 md:py-32 xl:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-16 text-center md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-sm font-medium tracking-[0.2em] text-[#e34a05] uppercase"
          >
            Как мы работаем
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mt-4 max-w-3xl font-sora text-3xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Прозрачный процесс{" "}
            <span className="text-gradient">от заявки до сдачи</span>
          </motion.h2>
        </div>

        <div ref={containerRef} className="relative mx-auto max-w-4xl">
          <div className="absolute left-6 top-0 h-full w-[2px] bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-6 top-0 h-full w-[2px] bg-[#e34a05] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.number}
                step={step}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  step,
  index,
  isLeft,
}: {
  step: typeof steps[0];
  index: number;
  isLeft: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex items-stretch gap-8 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="ml-16 md:ml-0 md:w-[calc(50%-60px)]">
        <motion.div
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-[#e34a05]/30 hover:shadow-[0_0_40px_rgba(227,74,5,0.15)] md:p-8"
        >
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#e34a05]/10 blur-3xl transition-all duration-500 group-hover:bg-[#e34a05]/20" />
          <div className="relative z-10">
            <span className="font-sora text-5xl font-bold leading-none text-white/10 transition-colors group-hover:text-[#e34a05]/30 md:text-6xl">
              {step.number}
            </span>
            <h3 className="mt-2 font-manrope text-xl font-bold text-[#e34a05] md:text-2xl">
              {step.title}
            </h3>
            <p className="mt-3 font-inter text-sm leading-relaxed text-white/60 md:text-base">
              {step.description}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute left-6 top-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#121212] bg-[#e34a05] shadow-[0_0_20px_rgba(227,74,5,0.5)] md:left-1/2 md:block" />

      <div className="absolute left-6 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#121212] bg-[#e34a05] shadow-[0_0_20px_rgba(227,74,5,0.5)] md:hidden" />

      <div className="hidden md:block md:w-[calc(50%-60px)]" />
    </motion.div>
  );
}
