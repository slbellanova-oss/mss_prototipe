import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Ruler, RotateCcw } from "lucide-react";

const gateTypes = [
  { id: "sectional", label: "Секционные", basePrice: 45000 },
  { id: "sliding", label: "Откатные", basePrice: 55000 },
  { id: "swing", label: "Распашные", basePrice: 35000 },
  { id: "industrial", label: "Промышленные", basePrice: 85000 },
];

export function PriceCalculator() {
  const [type, setType] = useState("sectional");
  const [width, setWidth] = useState(3000);
  const [height, setHeight] = useState(2500);
  const [withAutomation, setWithAutomation] = useState(true);
  const [withInstall, setWithInstall] = useState(true);

  const selected = gateTypes.find((g) => g.id === type)!;
  const area = (width / 1000) * (height / 1000);
  const areaPrice = Math.round(selected.basePrice * Math.max(area, 1));
  const automationPrice = withAutomation ? Math.round(areaPrice * 0.3) : 0;
  const installPrice = withInstall ? Math.round(areaPrice * 0.2) : 0;
  const total = areaPrice + automationPrice + installPrice;

  const reset = () => {
    setType("sectional");
    setWidth(2000);
    setHeight(2000);
    setWithAutomation(false);
    setWithInstall(false);
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32 xl:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]" />
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#e34a05]/5 blur-[200px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-16 text-center md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-sm font-medium tracking-[0.2em] text-[#e34a05] uppercase"
          >
            Калькулятор
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mt-4 max-w-3xl font-sora text-3xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Рассчитайте стоимость{" "}
            <span className="text-[#e34a05]">ворот</span>
          </motion.h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <p className="mb-4 font-manrope text-sm font-semibold tracking-wider text-white/60 uppercase">
                    Тип ворот
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {gateTypes.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => setType(g.id)}
                        className={`rounded-xl border px-4 py-3 text-left font-manrope text-sm font-medium transition-all duration-300 ${
                          type === g.id
                            ? "border-[#e34a05] bg-[#e34a05]/10 text-white"
                            : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <label className="font-manrope text-sm font-semibold tracking-wider text-white/60 uppercase">
                        Ширина: {width} мм
                      </label>
                      <span className="font-inter text-xs text-white/40">
                        {width >= 5000 ? "+ добор" : ""}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="2000"
                      max="8000"
                      step="100"
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#e34a05] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#e34a05] [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(227,74,5,0.5)]"
                    />
                    <div className="mt-1 flex justify-between font-inter text-xs text-white/30">
                      <span>2000</span>
                      <span>8000</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <label className="font-manrope text-sm font-semibold tracking-wider text-white/60 uppercase">
                        Высота: {height} мм
                      </label>
                    </div>
                    <input
                      type="range"
                      min="2000"
                      max="6000"
                      step="100"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#e34a05] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#e34a05] [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(227,74,5,0.5)]"
                    />
                    <div className="mt-1 flex justify-between font-inter text-xs text-white/30">
                      <span>2000</span>
                      <span>6000</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="font-manrope text-sm font-semibold tracking-wider text-white/60 uppercase">
                    Дополнительно
                  </p>
                  <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-all hover:border-[#e34a05]/30">
                    <input
                      type="checkbox"
                      checked={withAutomation}
                      onChange={() => setWithAutomation(!withAutomation)}
                      className="h-5 w-5 rounded border-white/20 bg-white/10 text-[#e34a05] accent-[#e34a05]"
                    />
                    <div>
                      <p className="font-manrope font-semibold text-white">
                        Автоматика и управление
                      </p>
                      <p className="font-inter text-sm text-white/50">
                        Привод, пульты, фотоэлементы
                      </p>
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-all hover:border-[#e34a05]/30">
                    <input
                      type="checkbox"
                      checked={withInstall}
                      onChange={() => setWithInstall(!withInstall)}
                      className="h-5 w-5 rounded border-white/20 bg-white/10 text-[#e34a05] accent-[#e34a05]"
                    />
                    <div>
                      <p className="font-manrope font-semibold text-white">
                        Монтаж под ключ
                      </p>
                      <p className="font-inter text-sm text-white/50">
                        Замер, доставка, установка
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="glass flex h-full flex-1 flex-col rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-4 border-b border-white/5 pb-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e34a05] to-[#c43e04] shadow-lg shadow-[#e34a05]/20">
                      <Calculator className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-manrope text-sm font-semibold text-white/60 uppercase">
                        Смета
                      </p>
                      <p className="font-inter text-xs text-white/40">
                        Предварительный расчёт
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex-1 space-y-3 md:mt-6">
                    <div className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.03] px-3 py-3 md:px-4">
                      <span className="font-inter text-xs text-white/60 md:text-sm">
                        {selected.label} <span className="text-white/30">({area.toFixed(1)} м²)</span>
                      </span>
                      <span className="shrink-0 font-manrope text-sm font-semibold text-white tabular-nums md:text-base">
                        {areaPrice.toLocaleString()} ₽
                      </span>
                    </div>
                    {withAutomation && (
                      <div className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.03] px-3 py-3 md:px-4">
                        <span className="font-inter text-xs text-white/60 md:text-sm">
                          Автоматика
                        </span>
                        <span className="shrink-0 font-manrope text-sm font-semibold text-white tabular-nums md:text-base">
                          +{automationPrice.toLocaleString()} ₽
                        </span>
                      </div>
                    )}
                    {withInstall && (
                      <div className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.03] px-3 py-3 md:px-4">
                        <span className="font-inter text-xs text-white/60 md:text-sm">
                          Монтаж
                        </span>
                        <span className="shrink-0 font-manrope text-sm font-semibold text-white tabular-nums md:text-base">
                          +{installPrice.toLocaleString()} ₽
                        </span>
                      </div>
                    )}
                    {!withAutomation && !withInstall && (
                      <div className="rounded-xl bg-white/[0.02] px-4 py-3">
                        <p className="font-inter text-sm text-white/30 italic">
                          Без дополнительных услуг
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mb-4 mt-6 rounded-2xl border border-[#e34a05]/20 bg-[#e34a05]/5 px-5 py-4 md:px-6 md:py-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-manrope text-sm font-bold text-white md:text-base">
                        Итого
                      </span>
                      <span className="font-sora text-2xl font-bold text-[#e34a05] tabular-nums md:text-3xl">
                        {total.toLocaleString()} ₽
                      </span>
                    </div>
                    <p className="mt-2 font-inter text-xs text-white/40">
                      Цена ориентировочная. Точная — после замера.
                    </p>
                  </div>

                  <a
                    href="#contacts"
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#e34a05] to-[#c43e04] py-4 font-manrope font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,74,5,0.4)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Ruler className="h-5 w-5" />
                      Точный расчёт
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                  </a>

                  <button
                    onClick={reset}
                    className="mt-3 flex items-center justify-center gap-2 font-inter text-sm text-white/30 transition-colors hover:text-white/60"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Сбросить параметры
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
