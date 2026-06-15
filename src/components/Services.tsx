import { motion } from "framer-motion";
import {
  Grid3X3,
  ArrowRightLeft,
  DoorOpen,
  Warehouse,
  Cpu,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Grid3X3,
    title: "Секционные ворота",
    description:
      "Премиальные подъёмно-секционные ворота для частных домов и коммерческих объектов",
    features: ["Терморазрыв", "Шумоизоляция", "Встроенная калитка"],
  },
  {
    icon: ArrowRightLeft,
    title: "Откатные ворота",
    description:
      "Автоматические откатные ворота с механизмами скольжения повышенной надёжности",
    features: ["Экономия пространства", "Автоматика", "Зимний режим"],
  },
  {
    icon: DoorOpen,
    title: "Распашные ворота",
    description:
      "Классические распашные ворота с современным дизайном и автоматическим приводом",
    features: ["Кованые и металлические", "Двухсторонний датчик", "Дистанционное управление"],
  },
  {
    icon: Warehouse,
    title: "Промышленные ворота",
    description:
      "Высокоскоростные и секционные ворота для складов, производств и логистических центров",
    features: ["До 24 м² проёма", "Интенсивный режим", "Усиленная конструкция"],
  },
  {
    icon: Cpu,
    title: "Автоматика",
    description:
      "Современные системы автоматизации и управления доступом для всех типов ворот",
    features: ["Пульты и приложения", "Фотоэлементы", "Интеграция СКУД"],
  },
  {
    icon: Wrench,
    title: "Монтаж под ключ",
    description:
      "Полный цикл работ: от замера и проектирования до установки и сервисного обслуживания",
    features: ["Выезд за 24 часа", "Гарантия 5 лет", "Сервис 24/7"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative h-full"
    >
      <div className="glass relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-[#e34a05]/40 hover:shadow-[0_0_40px_rgba(227,74,5,0.15)]">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#e34a05]/10 blur-3xl transition-all duration-500 group-hover:bg-[#e34a05]/20" />
        <div className="relative z-10">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e34a05] text-white shadow-lg shadow-[#e34a05]/20">
            <service.icon className="h-7 w-7" />
          </div>

          <h3 className="font-manrope text-xl font-bold text-white md:text-2xl">
            {service.title}
          </h3>
          <p className="mt-3 font-inter text-sm leading-relaxed text-white/60 md:text-base">
            {service.description}
          </p>

          <ul className="mt-6 space-y-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 font-inter text-sm text-white/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#e34a05]" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 font-manrope text-sm font-semibold text-[#e34a05] transition-colors group-hover:text-[#e34a05]"
            >
              Подробнее
              <ArrowRightLeft className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 xl:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-sm font-medium tracking-[0.2em] text-[#e34a05] uppercase"
          >
            Наши услуги
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-sora text-3xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Комплексные решения{" "}
            <span className="text-gradient">для ворот</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
