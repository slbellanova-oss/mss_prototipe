import { motion } from "framer-motion";
import { Award, Users, Target, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Миссия",
    description:
      "Создавать надёжные инженерные решения, которые защищают имущество и повышают комфорт наших клиентов на десятилетия.",
  },
  {
    icon: Shield,
    title: "Ценности",
    description:
      "Качество, прозрачность и ответственность в каждом этапе работы — от консультации до сервисного обслуживания.",
  },
  {
    icon: Users,
    title: "Команда",
    description:
      "Штатные монтажные бригады и инженеры с опытом от 5 лет. Регулярное обучение и сертификация специалистов.",
  },
  {
    icon: Award,
    title: "Сертификаты",
    description:
      "Официальные дилеры ведущих производителей ворот и автоматики. Вся продукция сертифицирована для РФ.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32 xl:py-40">
      <div className="absolute inset-0">
        <img
          src="/images/about-bg.jpg"
          alt="Modern architecture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#121212]/85" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-sm font-medium tracking-[0.2em] text-[#e34a05] uppercase"
            >
              О компании
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 font-sora text-3xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              MCC — надёжность,{" "}
              <span className="text-gradient">подкреплённая опытом</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 font-inter text-base leading-relaxed text-white/70 md:text-lg"
            >
              С 2013 года мы реализуем проекты любой сложности: от монтажа
              гаражных ворот в частных домах до поставки промышленных систем для
              крупных логистических центров.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 font-inter text-base leading-relaxed text-white/70 md:text-lg"
            >
              Работаем официально по договору, предоставляем полный пакет
              документов и гарантируем качество на всех этапах.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contacts"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#e34a05] px-8 py-4 font-manrope font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(227,74,5,0.4)]"
              >
                <span className="relative z-10">Связаться с нами</span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-manrope font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#e34a05]/50 hover:bg-white/10"
              >
                Смотреть проекты
              </a>
            </motion.div>
          </div>

          <div className="grid gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-[#e34a05]/30 hover:shadow-[0_0_40px_rgba(227,74,5,0.15)] md:p-8"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#e34a05]/10 blur-3xl transition-all duration-500 group-hover:bg-[#e34a05]/20" />
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e34a05]/20 text-[#e34a05]">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-manrope text-xl font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 font-inter text-sm leading-relaxed text-white/60 md:text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
