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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950">
      <div className="absolute -left-24 -top-40 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 pb-20 pt-28 md:flex-row md:pb-28 md:pt-32">
        <motion.div
          className={`relative z-10 w-full md:w-1/2 ${align}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          dir={dir}
        >
          <p className="mb-3 inline-flex items-center rounded-full border border-rose-500/40 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-100 shadow-soft">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
            {t.hero.eyebrow}
          </p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
            {t.hero.subtitle}
          </p>
          <div
            className={`flex flex-wrap items-center gap-3 ${
              dir === 'rtl' ? 'justify-end' : 'justify-start'
            }`}
          >
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-rose-400"
            >
              {t.hero.primaryCta}
            </Link>
            <a
              href={baseWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-rose-200/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-rose-100 backdrop-blur transition hover:border-rose-200 hover:bg-rose-200/5"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-300">{t.hero.subNote}</p>
        </motion.div>

        <motion.div
          className="relative z-10 w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-soft md:h-80">
            <Image
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
              alt={
                lang === 'ar'
                  ? 'سوشي طازج من سوشي هاي واي'
                  : 'Fresh sushi platter from Sushi Highway'
              }
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-50">
              <div>
                <p className="font-semibold">{t.hero.imageLabel}</p>
                <p className="text-[11px] text-slate-200">
                  {t.hero.imageSubLabel}
                </p>
              </div>
              <div className="rounded-full bg-slate-900/70 px-3 py-1">
                <span className="text-[11px]">{t.hero.badge}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
