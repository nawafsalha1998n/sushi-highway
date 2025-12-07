import Link from 'next/link';
import {
  DELIVERY_AREA_AR,
  DELIVERY_AREA_EN,
  INSTAGRAM_URL,
  OPENING_HOURS_AR,
  OPENING_HOURS_EN,
  RESTAURANT_ADDRESS_AR,
  RESTAURANT_ADDRESS_EN,
  RESTAURANT_NAME
} from '@/lib/config';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:justify-between md:px-6">
        {/* Brand & address */}
        <div className="max-w-sm space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-400">
            {RESTAURANT_NAME}
          </h3>
          <p className="text-sm">
            {isArabic ? RESTAURANT_ADDRESS_AR : RESTAURANT_ADDRESS_EN}
          </p>
          <p className="text-xs text-slate-400">
            {isArabic ? DELIVERY_AREA_AR : DELIVERY_AREA_EN}
          </p>
          <p className="text-xs text-slate-400">
            {isArabic ? OPENING_HOURS_AR : OPENING_HOURS_EN}
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-2 text-sm md:text-xs">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
            {isArabic ? 'روابط سريعة' : 'Quick links'}
          </h4>
          <Link href="/" className="hover:text-rose-300">
            {isArabic ? 'الرئيسية' : 'Home'}
          </Link>
          <Link href="/menu" className="hover:text-rose-300">
            {isArabic ? 'المنيو' : 'Menu'}
          </Link>
          <Link href="/about" className="hover:text-rose-300">
            {isArabic ? 'من نحن' : 'About'}
          </Link>
          <Link href="/contact" className="hover:text-rose-300">
            {isArabic ? 'تواصل معنا' : 'Contact'}
          </Link>
        </div>

        {/* Social */}
        <div className="space-y-2 text-sm md:text-xs">
          <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
            {isArabic ? 'تابعنا' : 'Follow us'}
          </h4>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-rose-300"
          >
            <span>📸</span>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800 py-3 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} {RESTAURANT_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
