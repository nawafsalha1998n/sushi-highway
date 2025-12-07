'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import menuItems, { menuCategories } from '@/lib/menuData';
import { buildWhatsAppOrderLink } from '@/lib/whatsapp';

export default function MenuPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <div className={lang === 'ar' ? 'font-arabic bg-slate-950' : 'bg-slate-950'} dir={dir}>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:pt-28">
        <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-rose-300">
            {t.menuPage.title}
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            {t.menuPage.subtitle}
          </h1>
          <p className="mt-2 text-xs text-slate-300">{t.menuPage.orderHint}</p>
        </div>

        <div className="mt-8 space-y-8">
          {menuCategories.map((cat) => {
            const items = menuItems.filter((i) => i.category === cat.id);
            if (!items.length) return null;

            return (
              <section key={cat.id}>
                <h2
                  className={`mb-3 text-lg font-semibold text-slate-50 ${
                    dir === 'rtl' ? 'text-right' : 'text-left'
                  }`}
                >
                  {lang === 'ar' ? cat.label.ar : cat.label.en}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {items.map((item) => {
                    const name = lang === 'ar' ? item.name.ar : item.name.en;
                    const description =
                      lang === 'ar'
                        ? item.description.ar
                        : item.description.en;
                    const orderUrl = buildWhatsAppOrderLink(name, lang);
                    return (
                      <article
                        key={item.id}
                        className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-100 shadow-soft"
                      >
                        <div>
                          <h3 className="text-sm font-semibold text-slate-50">
                            {name}
                          </h3>
                          <p className="mt-1 text-[12px] text-slate-300">
                            {description}
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-xs text-slate-200">
                          <span className="font-semibold">{item.price}</span>
                          <a
                            href={orderUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-rose-500 px-3 py-1 text-[11px] font-semibold text-white hover:bg-rose-400"
                          >
                            {t.common.orderItemOnWhatsApp}
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
