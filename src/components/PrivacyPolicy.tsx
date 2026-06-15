import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Building2, User, Phone, MapPin, Mail, Award } from "lucide-react";
import { Footer } from "./Footer";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#121212] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#e34a05]/5 blur-[200px]" />

      <div className="relative mx-auto max-w-[900px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="group mb-12 inline-flex items-center gap-2 font-manrope text-sm font-medium text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          На главную
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-sora text-3xl font-bold text-white md:text-5xl">
            Политика конфиденциальности
          </h1>
          <p className="mt-4 font-inter text-sm text-white/40">
            Редакция от 15 июня 2026 года
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8"
        >
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Building2 className="h-4 w-4 text-[#e34a05]" />
              <span className="font-inter text-sm text-white/60">
                ООО «МОНТАЖСТРОЙСЕРВИС»
              </span>
            </div>
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-[#e34a05]" />
              <span className="font-inter text-sm text-white/60">
                Генеральный директор: Малков Валерий Владимирович
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#e34a05]" />
              <span className="font-inter text-sm text-white/60">
                624003, Свердловская обл., г. Арамиль, ул. 1 Мая, д. 69, кв. 91
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#e34a05]" />
              <a href="tel:+79995606503" className="font-inter text-sm text-white/60 hover:text-[#e34a05]">+7 999 560 65 03</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#e34a05]" />
              <span className="font-inter text-sm text-white/60">info@mcc-vorota.ru</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-4 w-4 text-[#e34a05]" />
              <span className="font-inter text-sm text-white/60">ИНН 6685040059 / ОГРН 1136685018250</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <h2 className="font-sora text-xl font-bold text-white md:text-2xl">
                {index + 1}. {section.title}
              </h2>
              <div className="mt-4 space-y-3">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="font-inter text-base leading-relaxed text-white/60">
                    {p}
                  </p>
                ))}
              </div>
              {section.items && (
                <ul className="mt-3 space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-inter text-sm text-white/50">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e34a05]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 rounded-2xl border border-[#e34a05]/20 bg-[#e34a05]/5 p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <FileText className="mt-1 h-5 w-5 shrink-0 text-[#e34a05]" />
            <div>
              <h3 className="font-manrope font-semibold text-white">
                Согласие на обработку персональных данных
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-white/50">
                Отправляя форму на сайте, вы даёте согласие ООО «МОНТАЖСТРОЙСЕРВИС»
                (ИНН 6685040059) на обработку ваших персональных данных в соответствии
                с Федеральным законом № 152-ФЗ «О персональных данных».
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

const sections = [
  {
    title: "Общие положения",
    paragraphs: [
      "Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты персональных данных пользователей сайта mcc-vorota.ru (далее — Сайт), владельцем которого является Общество с ограниченной ответственностью «МОНТАЖСТРОЙСЕРВИС» (ОГРН 1136685018250, ИНН 6685040059, КПП 668501001), зарегистрированное 2 сентября 2013 года.",
      "Использование Сайта означает безусловное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки его персональных данных. В случае несогласия с этими условиями пользователь должен воздержаться от использования Сайта.",
      "Настоящая Политика применяется ко всей информации, которую Оператор может получить о пользователе во время использования им Сайта.",
    ],
  },
  {
    title: "Какие данные мы собираем",
    paragraphs: [
      "Мы собираем минимально необходимый объём данных для оказания услуг и поддержания работоспособности Сайта:",
    ],
    items: [
      "Имя, фамилия, отчество (при заполнении форм обратной связи)",
      "Номер контактного телефона",
      "Адрес электронной почты",
      "Адрес объекта (при запросе выезда на замер)",
      "IP-адрес и данные о местоположении (обезличенно, для статистики)",
      "Файлы cookie (обезличенные данные для аналитики)",
    ],
  },
  {
    title: "Цели обработки персональных данных",
    paragraphs: [
      "Персональные данные обрабатываются в следующих целях:",
    ],
    items: [
      "Обработка заявок с форм обратной связи (расчёт стоимости, консультация, вызов замерщика)",
      "Связь с пользователем для уточнения деталей заказа",
      "Заключение и исполнение договоров на поставку и монтаж ворот и автоматики",
      "Улучшение качества обслуживания и работы Сайта",
      "Направление информационных сообщений (только с отдельного согласия пользователя)",
    ],
  },
  {
    title: "Правовые основания обработки",
    paragraphs: [
      "Обработка персональных данных осуществляется на основании:",
    ],
    items: [
      "Конституции Российской Федерации",
      "Федерального закона № 152-ФЗ «О персональных данных»",
      "Федерального закона № 149-ФЗ «Об информации, информационных технологиях и о защите информации»",
      "Гражданского кодекса Российской Федерации",
      "Согласия пользователя на обработку персональных данных",
    ],
  },
  {
    title: "Порядок сбора, хранения и обработки",
    paragraphs: [
      "Сбор персональных данных осуществляется только при добровольном заполнении форм на Сайте. Передача данных осуществляется по защищённому протоколу HTTPS.",
      "Хранение персональных данных осуществляется на территории Российской Федерации. Срок хранения — до достижения целей обработки или до момента отзыва согласия пользователем.",
      "Мы принимаем необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования и распространения.",
    ],
  },
  {
    title: "Передача данных третьим лицам",
    paragraphs: [
      "Мы не передаём персональные данные пользователей третьим лицам, за исключением следующих случаев:",
    ],
    items: [
      "Предоставление данных по запросу уполномоченных государственных органов в соответствии с законодательством РФ",
      "Передача данных партнёрам, участвующим в исполнении договора (транспортные компании, поставщики оборудования) — только в объёме, необходимом для исполнения обязательств",
      "Защита прав и законных интересов Оператора",
    ],
  },
  {
    title: "Файлы cookie",
    paragraphs: [
      "Сайт использует файлы cookie и аналогичные технологии для:",
    ],
    items: [
      "Распознавания пользователя при повторных посещениях",
      "Сбора обезличенной статистики (Яндекс.Метрика)",
      "Анализа поведения пользователей для улучшения работы Сайта",
      "Пользователь может отключить cookie в настройках браузера в любой момент. Отключение может повлиять на корректную работу некоторых функций Сайта.",
    ],
  },
  {
    title: "Права пользователя",
    paragraphs: [
      "Пользователь имеет право:",
    ],
    items: [
      "Получить информацию о том, какие персональные данные обрабатываются",
      "Требовать уточнения, блокирования или уничтожения своих персональных данных",
      "Отозвать согласие на обработку персональных данных в любой момент",
      "Обжаловать действия или бездействие Оператора в уполномоченном органе по защите прав субъектов персональных данных",
    ],
  },
  {
    title: "Срок действия и изменения Политики",
    paragraphs: [
      "Настоящая Политика вступает в силу с момента её опубликования на Сайте и действует до замены новой версией.",
      "Оператор имеет право вносить изменения в Политику в одностороннем порядке. Актуальная версия всегда доступна на Сайте.",
      "Продолжение использования Сайта после внесения изменений означает согласие пользователя с новой редакцией Политики.",
    ],
  },
  {
    title: "Реквизиты Оператора",
    paragraphs: [],
    items: [
      "ООО «МОНТАЖСТРОЙСЕРВИС»",
      "ОГРН: 1136685018250",
      "ИНН: 6685040059 / КПП: 668501001",
      "ОКПО: 26430465",
      "Дата регистрации: 2 сентября 2013 года",
      "Юридический адрес: 624003, Свердловская область, Сысертский район, г. Арамиль, ул. 1 Мая, д. 69, кв. 91",
      "Телефон: +7 999 560 65 03",
      "E-mail: info@mcc-vorota.ru",
      "Генеральный директор: Малков Валерий Владимирович",
    ],
  },
];
