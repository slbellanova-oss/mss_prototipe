import { motion } from "framer-motion";
import { ArrowUpRight, Ruler, Shield, Zap, Thermometer } from "lucide-react";

const catalogItems = [
  {
    title: "Секционные ворота",
    description:
      "Подъёмно-секционные ворота премиум-класса для гаража и промышленных объектов",
    image: "/images/sectional-gate.jpg",
    specs: [
      { icon: Ruler, label: "До 8000 × 6000 мм" },
      { icon: Thermometer, label: "Терморазрыв" },
      { icon: Shield, label: "Взломостойкость" },
    ],
    featured: true,
  },
  {
    title: "Откатные ворота",
    description: "Автоматические откатные системы для частных домов и бизнеса",
    image: "/images/sliding-gate.jpg",
    specs: [
      { icon: Ruler, label: "До 12 м ширины" },
      { icon: Zap, label: "Автоматика" },
      { icon: Shield, label: "Усиленная рама" },
    ],
    featured: true,
  },
  {
    title: "Распашные ворота",
    description: "Классические распашные ворота с современным дизайном",
    image: "/images/swing-gate.jpg",
    specs: [
      { icon: Ruler, label: "До 6 м створки" },
      { icon: Zap, label: "Дистанционное управление" },
      { icon: Shield, label: "Антикоррозия" },
    ],
    featured: false,
  },
  {
    title: "Промышленные ворота",
    description: "Высокопроизводительные ворота для складов и производств",
    image: "/images/industrial-gate.jpg",
    specs: [
      { icon: Ruler, label: "До 24 м² проёма" },
      { icon: Zap, label: "Интенсивный режим" },
      { icon: Shield, label: "Усиленная конструкция" },
    ],
    featured: false,
  },
  {
    title: "Автоматика",
    description: "Системы управления и автоматизации для всех типов ворот",
    image: "/images/automation.jpg",
    specs: [
      { icon: Zap, label: "Wi-Fi управление" },
      { icon: Shield, label: "Безопасность" },
      { icon: Ruler, label: "Интеграция СКУД" },
    ],
    featured: true,
  },
];

interface CatalogProps {
  onCatalogClick?: () => void;
}

export function Catalog({ onCatalogClick }: CatalogProps) {
  return (
    <section id="catalog" className="relative py-24 md:py-32 xl:py-40">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e34a05]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-sm font-medium tracking-[0.2em] text-[#e34a05] uppercase"
            >
              Каталог
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 font-sora text-3xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Линейка{" "}
              <span className="text-gradient">ворот</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md font-inter text-white/60"
          >
            Подбираем решения индивидуально под задачи: от компактного гаража до
            крупного промышленного объекта.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {catalogItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl ${
                item.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
                <div className="absolute inset-0 bg-[#e34a05]/0 transition-colors duration-500 group-hover:bg-[#e34a05]/10" />
              </div>

              <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-end p-6 sm:min-h-[320px] md:min-h-[360px] md:p-8">
                <div className="mb-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#e34a05]"
                  >
                    <ArrowUpRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45" />
                  </motion.div>
                </div>

                <h3 className="font-manrope text-2xl font-bold text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 font-inter text-sm text-white/70 md:text-base">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.specs.map((spec) => (
                    <span
                      key={spec.label}
                      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-inter text-xs text-white/80 backdrop-blur-sm"
                    >
                      <spec.icon className="h-3 w-3 text-[#e34a05]" />
                      {spec.label}
                    </span>
                  ))}
                </div>

                <a
                  href="#contacts"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 font-manrope text-sm font-semibold text-[#121212] opacity-100 transition-all duration-300 hover:bg-white/90 lg:opacity-0 lg:group-hover:opacity-100"
                >
                  Подробнее
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            onClick={onCatalogClick}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-3 font-manrope font-semibold text-white transition-all duration-300 hover:border-[#e34a05] hover:bg-[#e34a05]"
          >
            <span className="relative z-10">Смотреть весь каталог</span>
            <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            <div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
