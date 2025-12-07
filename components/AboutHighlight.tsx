'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import SectionTitle from './SectionTitle';

export default function AboutHighlight() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
        <SectionTitle
          eyebrow={t.home.aboutTitle}
          title={t.home.aboutSubtitle}
          align={lang === 'ar' ? 'right' : 'left'}
        />
        <div className="mt-5 grid gap-6 md:grid-cols-3" dir={dir}>
          {t.home.aboutBullets.map((text, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 shadow-soft"
            >
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
