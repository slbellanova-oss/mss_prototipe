import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, ArrowUpRight, Grid, ArrowUpDown, ArrowRight, ArrowLeftRight, Zap, Scroll, Shield, Sun, Settings, SlidersHorizontal, X } from "lucide-react";
import { products, categories, type Product } from "@/data/catalog";
import { cn } from "@/utils/cn";

const iconMap: Record<string, React.ElementType> = {
  Grid, ArrowUpDown, ArrowRight, ArrowLeftRight, Zap, Scroll, Shield, Sun, Settings,
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const } },
};

const productImages: Record<string, string> = {
  "sec-std": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80",
  "sec-premium": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80",
  "sec-ind": "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  "slg-std": "https://images.unsplash.com/photo-1622457910877-999c2f9c9a25?w=800&q=80",
  "slg-premium": "https://images.unsplash.com/photo-1622457910877-999c2f9c9a25?w=800&q=80",
  "slg-console": "https://images.unsplash.com/photo-1622457910877-999c2f9c9a25?w=800&q=80",
  "swg-std": "https://images.unsplash.com/photo-1568607473042-10e5a4ec6750?w=800&q=80",
  "swg-premium": "https://images.unsplash.com/photo-1568607473042-10e5a4ec6750?w=800&q=80",
  "ind-highspeed": "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  "ind-strip": "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  "ind-dock": "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  "roll-std": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80",
  "roll-premium": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80",
  "roll-protection": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80",
  "fire-ei60": "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  "fire-ei30": "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
  "awn-fabric": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  "awn-aluminum": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  "auto-swing": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  "auto-slide": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  "auto-gsm": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  "auto-wifi": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
};

function formatPrice(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)} тыс. ₽` : `${n} ₽`;
}

interface CatalogPageProps {
  onBack: () => void;
}

export function CatalogPage({ onBack }: CatalogPageProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");
  const [showFilter, setShowFilter] = useState(false);

  const filtered = useMemo(() => {
    let result = activeCategory === "all" ? [...products] : products.filter((p) => p.category === activeCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.specs.some((s) => s.toLowerCase().includes(q))
      );
    }

    if (sortBy === "price-asc") result.sort((a, b) => a.priceFrom - b.priceFrom);
    else if (sortBy === "price-desc") result.sort((a, b) => b.priceFrom - a.priceFrom);

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const hasActiveFilters = searchQuery.trim() || sortBy !== "default";

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="fixed left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#e34a05]/5 blur-[150px] pointer-events-none" />

      <div className="fixed left-0 right-0 z-20 border-b border-white/5 bg-[#121212]" style={{ top: "68px" }}>
        <div className="mx-auto max-w-[1600px] px-6 pt-6 pb-2 md:px-10 md:pb-4 lg:px-16 xl:px-20">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="no-scrollbar flex flex-1 gap-2 overflow-x-auto"
            >
              {categories.map((cat) => {
                const Icon = iconMap[cat.icon] || Grid;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 font-manrope text-sm font-medium transition-all duration-300",
                      activeCategory === cat.id
                        ? "border-[#e34a05] bg-[#e34a05] text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {cat.name}
                  </button>
                );
              })}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setShowFilter(!showFilter)}
              className={cn(
                "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                showFilter || hasActiveFilters
                  ? "border-[#e34a05] bg-[#e34a05] text-white"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
              )}
            >
              {showFilter ? (
                <X className="h-4 w-4" />
              ) : (
                <SlidersHorizontal className="h-4 w-4" />
              )}
              {hasActiveFilters && !showFilter && (
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#e34a05]" />
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {showFilter && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:flex-row">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                    <input
                      type="text"
                      placeholder="Поиск по названию или описанию..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-full border border-white/10 bg-[#121212] px-4 py-2.5 pl-10 font-inter text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#e34a05]/50"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    className="w-full rounded-full border border-white/10 bg-[#121212] px-4 py-2.5 font-manrope text-sm text-white outline-none transition-colors focus:border-[#e34a05]/50 sm:w-auto"
                  >
                    <option value="default" className="bg-[#1D1D1D]">По умолчанию</option>
                    <option value="price-asc" className="bg-[#1D1D1D]">Цена: по возрастанию</option>
                    <option value="price-desc" className="bg-[#1D1D1D]">Цена: по убыванию</option>
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-8 md:px-10 md:pb-12 lg:px-16 xl:px-20">

        <div className="pt-24 md:pt-28">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="group mb-4 flex items-center gap-2 font-manrope text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            На главную
          </motion.button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="font-inter text-sm font-medium tracking-[0.2em] text-[#e34a05] uppercase">
              Каталог
            </span>
            <h1 className="mt-3 font-sora text-3xl font-bold md:text-5xl lg:text-6xl">
              Линейка <span className="text-[#e34a05]">ворот</span>
            </h1>
            <p className="mt-4 max-w-2xl font-inter text-white/60">
              Полный ассортимент ворот, рольставней, маркиз и автоматики. Фильтруйте по категориям,
              находите нужное и запрашивайте индивидуальный расчёт.
            </p>
          </motion.div>
        </div>

        <div className="h-[60px] md:h-[68px]" />

        <div className="flex items-center justify-between font-inter text-sm text-white/40">
          <span>
            Найдено: {filtered.length} {filtered.length === 1 ? "позиция" : filtered.length >= 2 && filtered.length <= 4 ? "позиции" : "позиций"}
          </span>
          {hasActiveFilters && (
            <button
              onClick={() => { setSearchQuery(""); setSortBy("default"); }}
              className="text-[#e34a05] underline underline-offset-4 transition-colors hover:text-white"
            >
              Сбросить
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery + sortBy}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} variants={itemAnim} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-24 flex flex-col items-center gap-4 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-white/30">
              <Search className="h-6 w-6" />
            </div>
            <p className="font-manrope text-lg font-semibold text-white/60">Ничего не найдено</p>
            <p className="max-w-xs font-inter text-sm text-white/40">
              Попробуйте изменить параметры поиска или выберите другую категорию.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 border-t border-white/5 pt-8 text-center"
        >
          <p className="font-inter text-sm text-white/40">
            Не нашли подходящее?{" "}
            <a href="#contacts" className="text-[#e34a05] underline underline-offset-4 hover:text-white transition-colors">
              Свяжитесь с нами
            </a>{" "}
            — подберём решение индивидуально.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function ProductCard({ product, variants }: { product: Product; variants: typeof itemAnim }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgSrc = productImages[product.id] || product.image;

  return (
    <motion.div
      variants={variants}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#1D1D1D] transition-all duration-500 hover:border-[#e34a05]/30 hover:shadow-[0_0_40px_rgba(227,74,5,0.1)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {!imgLoaded && (
          <div className="absolute inset-0 shimmer" />
        )}
        <img
          src={imgSrc}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-all duration-700 group-hover:scale-105",
            imgLoaded ? "opacity-100" : "opacity-0"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1D] via-transparent to-transparent" />

        <div className="absolute right-3 top-3 flex gap-2">
          {product.isNew && (
            <span className="rounded-full bg-[#e34a05] px-2.5 py-0.5 font-inter text-[10px] font-bold uppercase tracking-wider text-white">
              Новинка
            </span>
          )}
          {product.isPopular && (
            <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 font-inter text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              Популярное
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-manrope text-base font-bold text-white md:text-lg line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-1.5 font-inter text-sm leading-relaxed text-white/50 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.specs.slice(0, 3).map((spec) => (
            <span
              key={spec}
              className="rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 font-inter text-[11px] text-white/60"
            >
              {spec}
            </span>
          ))}
          {product.specs.length > 3 && (
            <span className="rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 font-inter text-[11px] text-white/40">
              +{product.specs.length - 3}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
          <div>
            <span className="font-inter text-[11px] text-white/30">от</span>
            <p className="font-manrope text-lg font-bold text-[#e34a05]">{formatPrice(product.priceFrom)}</p>
          </div>
          <a
            href="#contacts"
            className="group/btn relative flex items-center gap-1.5 overflow-hidden rounded-full border border-white/10 px-4 py-2 font-manrope text-xs font-semibold text-white transition-all duration-300 hover:border-[#e34a05] hover:bg-[#e34a05]"
          >
            <span className="relative z-10">Запрос</span>
            <ArrowUpRight className="relative z-10 h-3 w-3 transition-transform duration-300 group-hover/btn:rotate-45" />
            <div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover/btn:translate-x-full" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
