'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import {
  INSTAGRAM_URL,
  RESTAURANT_ADDRESS,
  RESTAURANT_NAME
} from '@/lib/config';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div
        className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-300"
        dir={dir}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-semibold text-slate-100">
              {t.footer.openingHours}
            </p>
            <p className="mt-1 text-slate-300">
              {t.footer.openingHoursValue}
            </p>
            <p className="mt-3 text-slate-400">{t.footer.rights}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-100">
              {t.footer.quickLinks}
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link href="/" className="hover:text-slate-100">
                {lang === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
              <Link href="/menu" className="hover:text-slate-100">
                {lang === 'ar' ? 'المنيو' : 'Menu'}
              </Link>
              <Link href="/about" className="hover:text-slate-100">
                {lang === 'ar' ? 'عنّا' : 'About'}
              </Link>
              <Link href="/contact" className="hover:text-slate-100">
                {lang === 'ar' ? 'التواصل' : 'Contact'}
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-slate-100">
              {t.footer.followUs}
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-slate-200 hover:text-slate-50"
            >
              <FaInstagram />
              <span>@sushi.highway</span>
            </a>
            <p className="mt-3 text-slate-400">{RESTAURANT_ADDRESS}</p>
          </div>
        </div>

        <p className="mt-6 text-[11px] text-slate-500">
          {t.footer.builtBy} {lang === 'ar' ? '·' : '·'} {RESTAURANT_NAME}
        </p>
      </div>
    </footer>
  );
}
