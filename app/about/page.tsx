'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <div
      className={lang === 'ar' ? 'font-arabic bg-slate-950' : 'bg-slate-950'}
      dir={dir}
    >
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:pt-28">
        <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-rose-300">
            {t.aboutPage.title}
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            {t.aboutPage.subtitle}
          </h1>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-100 shadow-soft">
            <h2 className="text-base font-semibold text-slate-50">
              {t.aboutPage.storyTitle}
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-200">
              {t.aboutPage.storyBody1}
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-200">
              {t.aboutPage.storyBody2}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-100 shadow-soft">
            <h2 className="text-base font-semibold text-slate-50">
              {t.aboutPage.highlightTitle}
            </h2>
            <ul className="mt-3 space-y-2 text-[13px] text-slate-200">
              {t.aboutPage.highlights.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-rose-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
