import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const projects = [
  {
    image: "/images/project-1.jpg",
    object: "Частный дом",
    city: "Москва",
    type: "Секционные ворота + откатные",
    size: "large",
  },
  {
    image: "/images/project-2.jpg",
    object: "Логистический центр",
    city: "Санкт-Петербург",
    type: "Промышленные ворота",
    size: "tall",
  },
  {
    image: "/images/project-3.jpg",
    object: "Таунхаус-комплекс",
    city: "Казань",
    type: "Распашные ворота",
    size: "medium",
  },
  {
    image: "/images/sectional-gate.jpg",
    object: "Гаражный комплекс",
    city: "Екатеринбург",
    type: "Секционные ворота",
    size: "medium",
  },
  {
    image: "/images/industrial-gate.jpg",
    object: "Производственный цех",
    city: "Новосибирск",
    type: "Промышленные ворота",
    size: "large",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 xl:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-sm font-medium tracking-[0.2em] text-[#e34a05] uppercase"
            >
              Портфолио
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 font-sora text-3xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              Реализованные{" "}
              <span className="text-gradient">проекты</span>
            </motion.h2>
          </div>
          <motion.a
            href="#contacts"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group inline-flex items-center gap-2 font-manrope font-semibold text-white transition-colors hover:text-[#e34a05]"
          >
            Обсудить проект
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </motion.a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={`${project.object}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl ${
                project.size === "large"
                  ? "md:col-span-2 lg:col-span-2"
                  : project.size === "tall"
                  ? "lg:row-span-2"
                  : ""
              }`}
            >
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.object}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-end p-6 md:p-8 lg:min-h-[400px]">
                <div className="mb-auto flex justify-end">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>

                <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 font-inter text-xs text-white/70 backdrop-blur-sm">
                  {project.type}
                </span>
                <h3 className="mt-3 font-manrope text-xl font-bold text-white md:text-2xl">
                  {project.object}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 font-inter text-sm text-white/60">
                  <MapPin className="h-4 w-4 text-[#e34a05]" />
                  {project.city}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
