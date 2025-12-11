'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { buildWhatsAppBaseLink } from '@/lib/whatsapp';

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const align = dir === 'rtl' ? 'text-right' : 'text-left';
  const baseWhatsApp = buildWhatsAppBaseLink();

  return (
    <section className="relative overflow-hidden border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-40 -top-40 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-stretch gap-10 px-4 py-10 sm:px-6 md:flex-row md:items-center md:py-16">
        {/* Text column */}
        <motion.div
          className={`w-full md:w-1/2 ${align}`}
          initial={{ opacity: 0, y: 20, x: dir === 'rtl' ? 20 : -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="inline-flex items-center rounded-full border border-rose-400/50 bg-slate-950/60 px-3 py-1 text-[11px] font-medium tracking-wide text-rose-200">
            {t.hero.eyebrow}
          </p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
            {t.hero.title}
          </h1>

          <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-[15px]">
            {t.hero.subtitle}
          </p>

          <div
            className={`mt-6 flex flex-wrap items-center gap-3 ${
              dir === 'rtl' ? 'justify-end' : 'justify-start'
            }`}
          >
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-rose-400"
            >
              {t.hero.primaryCta}
            </Link>
            <a
              href={baseWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-rose-400/80 hover:text-rose-100"
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-400">{t.hero.subNote}</p>
        </motion.div>

        {/* Image column */}
        <motion.div
          className="relative z-10 w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.9, x: dir === 'rtl' ? -60 : 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-soft md:h-80">
            <Image
              src="/big-sushi-boat-50pcs.jpg"
              alt={
                lang === 'ar'
                  ? 'طبق بيغ بوت سوشي متنوع — ٥٠ قطعة'
                  : 'Big mixed sushi boat — 50 pieces'
              }
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/15 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-50">
              <div>
                <p className="font-semibold">{t.hero.imageLabel}</p>
                <p className="text-[11px] text-slate-200">
                  {t.hero.imageSubLabel}
                </p>
              </div>
              <div className="rounded-full bg-slate-900/80 px-3 py-1">
                <span className="text-[11px]">{t.hero.badge}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
