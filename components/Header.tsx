'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageToggle from './LanguageToggle';
import {
  INSTAGRAM_URL,
  RESTAURANT_NAME,
  WHATSAPP_NUMBER_DISPLAY
} from '@/lib/config';
import { buildMainOrderWhatsAppLink } from '@/lib/whatsapp';
import { useLanguage } from '@/lib/LanguageContext';

const navItems = [
  { href: '/', key: 'home' },
  { href: '/menu', key: 'menu' },
  { href: '/about', key: 'about' },
  { href: '/contact', key: 'contact' }
];

function getNavLabel(key: string, lang: 'en' | 'ar') {
  if (lang === 'ar') {
    switch (key) {
      case 'home':
        return 'الرئيسية';
      case 'menu':
        return 'المنيو';
      case 'about':
        return 'من نحن';
      case 'contact':
        return 'تواصل معنا';
      default:
        return key;
    }
  } else {
    switch (key) {
      case 'home':
        return 'Home';
      case 'menu':
        return 'Menu';
      case 'about':
        return 'About';
      case 'contact':
        return 'Contact';
      default:
        return key;
    }
  }
}

export default function Header() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const whatsAppLink = buildMainOrderWhatsAppLink(lang);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-40
        border-b border-white/10
        bg-slate-950/70 backdrop-blur-xl
      `}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-3.5">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-slate-900 shadow-md md:h-11 md:w-11">
              <Image
                src="/sushi-highway-logo.png"
                alt={`${RESTAURANT_NAME} logo`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-400">
                SUSHI
              </span>
              <span className="text-base md:text-lg font-bold text-slate-50">
                {RESTAURANT_NAME}
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation + actions */}
        <div
          className={`
            flex flex-1 items-center justify-end gap-3
            ${isArabic ? 'flex-row-reverse' : ''}
          `}
        >
          {/* Nav links (desktop) */}
          <nav className="hidden items-center gap-3 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs md:flex md:text-sm">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    active
                      ? 'bg-rose-500 text-white shadow-sm'
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {getNavLabel(item.key, lang)}
                </Link>
              );
            })}
          </nav>

          {/* Social + WhatsApp */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* WhatsApp button */}
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-full
                bg-emerald-500 px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm
                font-semibold text-white shadow-sm
                hover:bg-emerald-600 hover:shadow-md
                active:scale-95 transition-all
              "
            >
              <span className="text-base">🟢</span>
              <span>{isArabic ? 'اطلب عبر واتساب' : 'Order on WhatsApp'}</span>
            </a>

            {/* Instagram icon */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex h-9 w-9 items-center justify-center rounded-full
                bg-gradient-to-tr from-yellow-400 via-pink-500 to-indigo-500
                text-white text-lg shadow-md
                hover:brightness-110 active:scale-95 transition
              "
              aria-label="Instagram"
            >
              📸
            </a>

            {/* Language toggle */}
            <LanguageToggle />
          </div>
        </div>
      </div>
      {/* شريط صغير يظهر رقم الواتساب مثلاً (اختياري وحلو) */}
      <div className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-[11px] text-slate-300 md:px-6 md:text-xs">
          <span>
            {isArabic
              ? 'خدمة وتوصيل ضمن مدينة صور'
              : 'Service and delivery within Sour (Tyre) only'}
          </span>
          <span>
            WhatsApp: <strong>{WHATSAPP_NUMBER_DISPLAY}</strong>
          </span>
        </div>
      </div>
    </header>
  );
}
