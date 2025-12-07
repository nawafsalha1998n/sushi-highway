'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import menuItems from '@/lib/menuData';
import SectionTitle from './SectionTitle';

export default function MenuPreview() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const featured = menuItems.filter((item) => item.isSignature).slice(0, 6);

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <SectionTitle
          eyebrow={t.home.signatureTitle}
          title={t.home.signatureSubtitle}
          align={lang === 'ar' ? 'right' : 'left'}
        />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" dir={dir}>
          {featured.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-100 shadow-soft"
            >
              <h3 className="mb-1 text-sm font-semibold text-slate-50">
                {lang === 'ar' ? item.name.ar : item.name.en}
              </h3>
              <p className="mb-2 text-[12px] text-slate-300">
                {lang === 'ar' ? item.description.ar : item.description.en}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-200">
                <span className="font-semibold">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
        <div
          className={`mt-6 flex ${
            dir === 'rtl' ? 'justify-start' : 'justify-end'
          }`}
        >
          <Link
            href="/menu"
            className="text-xs font-semibold text-rose-200 hover:text-rose-100"
          >
            {t.home.viewFullMenuCta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
