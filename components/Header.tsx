'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { RESTAURANT_NAME, WHATSAPP_LINK, INSTAGRAM_URL } from '@/lib/config';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isRTL = lang === 'ar';

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/menu" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="relative h-16 w-16 overflow-hidden rounded-full border border-slate-700 bg-slate-900/80 sm:h-20 sm:w-20">
            <Image src="/logo.png" alt={lang === 'ar' ? 'شعار مطعم سوشي هاي واي' : 'Sushi Highway logo'} fill className="object-contain p-1.5" priority />
          </div>
          <div className={`flex flex-col leading-tight ${isRTL ? 'items-end' : 'items-start'}`}>
            <span className="text-sm font-semibold sm:text-base">{RESTAURANT_NAME}</span>
            <span className="hidden text-[11px] text-slate-400 sm:block">{t.brandTagline}</span>
          </div>
        </Link>

        <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <LanguageToggle />
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-white shadow-soft transition hover:bg-emerald-400">
            <FaWhatsapp className="mr-1 h-3 w-3" />
            <span className="hidden sm:inline">{lang === 'ar' ? 'اطلب واتساب' : 'Order on WhatsApp'}</span>
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center rounded-full bg-pink-500 px-2.5 py-1 text-[11px] text-white shadow-soft transition hover:bg-pink-400">
            <FaInstagram className="h-3 w-3" />
          </a>
        </div>
      </div>
      <div className="flex w-full items-center justify-center border-t border-slate-900 bg-slate-950/90 py-2 text-[11px] text-slate-400 sm:hidden">
        <span>{t.brandTagline}</span>
      </div>
    </header>
  );
}
