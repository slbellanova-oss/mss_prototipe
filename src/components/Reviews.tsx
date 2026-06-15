import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Play } from "lucide-react";

const reviews = [
  {
    name: "Александр Петров",
    role: "Владелец частного дома",
    text: "Установили секционные ворота и откатные заборы. Качество работы превзошло ожидания. Всё сделано аккуратно, в срок, с гарантией. Рекомендую!",
    rating: 5,
    hasVideo: true,
  },
  {
    name: "Марина Сидорова",
    role: "Директор логистического центра",
    text: "Сотрудничаем с MCC уже третий год. За это время было установлено более 20 промышленных ворот. Надёжный партнёр с профессиональным подходом.",
    rating: 5,
    hasVideo: false,
  },
  {
    name: "Игорь Волков",
    role: "Застройщик",
    text: "Заказывали партию ворот для таунхаусов. Отличные цены, гибкие условия поставки и первоклассный монтаж. Будем обращаться снова.",
    rating: 5,
    hasVideo: true,
  },
  {
    name: "Елена Козлова",
    role: "Владелица гаражного комплекса",
    text: "Очень довольны сервисным обслуживанием. При любой поломке приезжают быстро, ремонтируют качественно. Настоящие профессионалы своего дела.",
    rating: 5,
    hasVideo: false,
  },
];

export function Reviews() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 xl:py-40">
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#e34a05]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-sm font-medium tracking-[0.2em] text-[#e34a05] uppercase"
            >
              Отзывы клиентов
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 font-sora text-3xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Что говорят{" "}
              <span className="text-gradient">наши клиенты</span>
            </motion.h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#e34a05]/50 hover:bg-[#e34a05]/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#e34a05]/50 hover:bg-[#e34a05]/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="grid gap-8 lg:grid-cols-2"
            >
              <div className="group relative aspect-video overflow-hidden rounded-3xl lg:aspect-auto">
                <img
                  src="/images/project-1.jpg"
                  alt="Video review"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#121212]/40 transition-colors duration-300 group-hover:bg-[#121212]/30" />
                {reviews[current].hasVideo && (
                  <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#e34a05] text-white shadow-[0_0_40px_rgba(227,74,5,0.4)] transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 fill-current" />
                  </button>
                )}
                <div className="absolute bottom-6 left-6">
                  <div className="flex gap-1">
                    {[...Array(reviews[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#e34a05] text-[#e34a05]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <Quote className="h-12 w-12 text-[#e34a05]/30" />
                <p className="mt-6 font-manrope text-xl leading-relaxed text-white md:text-2xl lg:text-3xl">
                  {reviews[current].text}
                </p>
                <div className="mt-8">
                  <p className="font-sora text-lg font-bold text-white">
                    {reviews[current].name}
                  </p>
                  <p className="font-inter text-sm text-white/60">
                    {reviews[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-[#e34a05]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
