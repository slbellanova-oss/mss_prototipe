import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

interface CookieConsentProps {
  onPrivacyClick?: () => void;
}

export function CookieConsent({ onPrivacyClick }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-4 px-6 py-5 md:flex-row md:gap-6 md:px-10 lg:px-16">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e34a05]/20">
                <Cookie className="h-5 w-5 text-[#e34a05]" />
              </div>
              <div>
                <p className="font-manrope text-sm font-semibold text-white">
                  Куки
                </p>
                <p className="font-inter text-xs text-white/50">
                  Сайт использует cookies для аналитики
                </p>
              </div>
            </div>

            <p className="flex-1 font-inter text-xs leading-relaxed text-white/40 md:text-sm">
              Продолжая использовать сайт, вы соглашаетесь на обработку
              персональных данных в соответствии с{" "}
              <button onClick={onPrivacyClick} className="text-[#e34a05] underline underline-offset-2 transition-colors hover:text-white">
                политикой конфиденциальности
              </button>.
            </p>

            <div className="flex w-full shrink-0 items-center gap-3 md:w-auto">
              <button
                onClick={() => setIsVisible(false)}
                className="group relative w-full overflow-hidden rounded-full bg-[#e34a05] px-6 py-2.5 font-manrope text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,74,5,0.4)] md:w-auto"
              >
                <span className="relative z-10">Принять</span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-white/20 hover:text-white/70"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
