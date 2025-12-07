'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import SectionTitle from './SectionTitle';

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
        <SectionTitle
          eyebrow={t.home.testimonialsTitle}
          title={t.home.testimonialsSubtitle}
          align={lang === 'ar' ? 'right' : 'left'}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3" dir={dir}>
          {t.home.testimonials.map((item, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-100 shadow-soft"
            >
              <p className="mb-4 text-[13px] leading-relaxed text-slate-200">
                “{item.quote}”
              </p>
              <p className="text-xs font-semibold text-rose-200">
                {item.name}
              </p>
              <p className="text-[11px] text-slate-400">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
