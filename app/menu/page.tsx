'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { menuCategories, menuItems } from '@/lib/menuData';

const WHATSAPP_BASE = 'https://wa.me/9613823005';

function buildItemWhatsAppLink(itemName: string, isArabic: boolean) {
  const message = isArabic
    ? `مرحبا، أود طلب (${itemName}) من منيو سوشي هايواي في صور - الحوش.`
    : `Hello, I would like to order (${itemName}) from Sushi Highway menu in Sour - Al Hosh.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

// خريطة تربط كل صنف برقم الصورة بحسب ترتيبه في القائمة
const itemImageMap: Record<string, string> = {};
menuItems.forEach((item, index) => {
  itemImageMap[item.id] = `/menu/${index + 1}.png`;
});

export default function MenuPage() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';

  const [activeCategoryId, setActiveCategoryId] = useState<string | 'all'>(
    'starters'
  );
  const [searchTerm, setSearchTerm] = useState('');

  const pageTitle = isArabic ? 'منيو سوشي هاي واي' : 'Sushi Highway Menu';
  const pageSubtitle = isArabic
    ? 'تشكيلة كاملة من السوشي، الرولز، البوتس والمشروبات.'
    : 'Full selection of sushi, rolls, boats and drinks.';

  // فلترة عامة حسب البحث
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredItems = menuItems.filter((item) => {
    if (!normalizedSearch) return true;
    const nameEn = item.name.en.toLowerCase();
    const nameAr = item.name.ar.toLowerCase();
    return (
      nameEn.includes(normalizedSearch) || nameAr.includes(normalizedSearch)
    );
  });

  return (
    <main dir={dir} className="min-h-screen bg-slate-950 text-slate-50">
      <section className="border-b border-slate-900 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 sm:py-8">
          <div className={isArabic ? 'text-right' : 'text-left'}>
            <h1 className="text-2xl font-semibold sm:text-3xl">{pageTitle}</h1>
            <p className="mt-1 text-sm text-slate-400">{pageSubtitle}</p>
          </div>

          {/* شريط البحث + الفلاتر */}
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <input
                type="text"
                placeholder={
                  isArabic
                    ? 'ابحث عن طبق معيّن...'
                    : 'Search for a specific item...'
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-rose-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategoryId('all')}
                className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                  activeCategoryId === 'all'
                    ? 'bg-rose-500 text-white'
                    : 'bg-slate-900/70 text-slate-200 border border-slate-700'
                }`}
              >
                {isArabic ? 'الكل' : 'All'}
              </button>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                    activeCategoryId === cat.id
                      ? 'bg-rose-500 text-white'
                      : 'bg-slate-900/70 text-slate-200 border border-slate-700'
                  }`}
                >
                  <span className="mr-1">{cat.emoji}</span>
                  <span>{cat.name[lang]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
          {menuCategories.map((category) => {
            // لو الفلتر على كاتيجوري معيّن، نخفي الباقي
            if (activeCategoryId !== 'all' && activeCategoryId !== category.id) {
              const hasAny =
                filteredItems.filter((item) => item.categoryId === category.id)
                  .length > 0;
              if (!hasAny) return null;
            }

            const itemsForCategory = filteredItems.filter(
              (item) => item.categoryId === category.id
            );
            if (!itemsForCategory.length) return null;

            // تجميع حسب subSection إن وجدت
            const groups: Record<string, typeof itemsForCategory> = {};
            itemsForCategory.forEach((item) => {
              const key = item.subSection ?? '_default';
              if (!groups[key]) groups[key] = [];
              groups[key].push(item);
            });

            const groupNames = Object.keys(groups);

            return (
              <section
                key={category.id}
                className="mb-8 rounded-3xl border border-slate-900/80 bg-slate-950/80 p-4 shadow-sm shadow-slate-900 sm:p-5"
              >
                <header
                  className={`mb-4 flex flex-col gap-1 ${
                    isArabic ? 'text-right' : 'text-left'
                  }`}
                >
                  <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-50">
                    <span className="text-xl">{category.emoji}</span>
                    <span>{category.name[lang]}</span>
                  </h2>
                  <p className="text-xs text-slate-400">
                    {category.description[lang]}
                  </p>
                </header>

                {groupNames.map((groupName) => {
                  const groupItems = groups[groupName];

                  return (
                    <div key={groupName} className="mt-2 space-y-2">
                      {groupName !== '_default' && (
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          {groupName}
                        </p>
                      )}

                      <div className="space-y-2">
                        {groupItems.map((item: any) => {
                          const imgSrc = itemImageMap[item.id];

                          return (
                            <article
                              key={item.id}
                              className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-xs text-slate-200 md:text-sm"
                            >
                              {/* صورة الطبق */}
                              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/80">
                                {imgSrc && (
                                  <Image
                                    src={imgSrc}
                                    alt={item.name?.[lang] ?? 'Menu item'}
                                    fill
                                    className="object-cover"
                                  />
                                )}
                              </div>

                              {/* نص الطبق + السعر + زر الطلب */}
                              <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center md:justify-between">
                                <div
                                  className={
                                    isArabic
                                      ? 'text-right md:ml-3'
                                      : 'text-left md:mr-3'
                                  }
                                >
                                  <p className="font-semibold text-slate-50">
                                    {item.name?.[lang] ?? ''}
                                  </p>
                                  {item.description?.[lang] && (
                                    <p className="mt-0.5 text-[11px] text-slate-400 md:text-xs">
                                      {item.description[lang]}
                                    </p>
                                  )}
                                </div>

                                <div className="flex items-center justify-between gap-3 md:justify-end">
                                  <span className="whitespace-nowrap rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-rose-200 md:text-xs">
                                    {item.price}
                                  </span>
                                  <a
                                    href={buildItemWhatsAppLink(
                                      item.name?.[lang] ?? '',
                                      isArabic
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whitespace-nowrap rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-white hover:bg-emerald-400 md:text-xs"
                                  >
                                    {isArabic ? 'اطلب هذا الصنف' : 'Order this item'}
                                  </a>
                                </div>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
