'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { menuCategories, menuItems } from '@/lib/menuData';

const WHATSAPP_BASE = 'https://wa.me/9613823005';

function buildItemWhatsAppLink(itemName: string, isArabic: boolean) {
  const message = isArabic
    ? `مرحبا، أود طلب (${itemName}) من منيو سوشي هايواي في صور - الحوش.`
    : `Hello, I would like to order (${itemName}) from Sushi Highway menu in Sour - Al Hosh.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export default function MenuPage() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  // نسمح بفتح قسم واحد في نفس الوقت (Accordion)
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(
    menuCategories[0]?.id ?? null
  );

  // تجميع الأصناف حسب الكاتيجوري
  const itemsByCategory: Record<string, any[]> = {};
  for (const item of menuItems as any[]) {
    if (!itemsByCategory[item.categoryId]) {
      itemsByCategory[item.categoryId] = [];
    }
    itemsByCategory[item.categoryId].push(item);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-28 md:px-6 lg:px-8">
        <header className={isArabic ? 'text-right' : 'text-left'}>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-rose-400">
            {isArabic ? 'منيو سوشي هايواي' : 'Sushi Highway menu'}
          </p>
          <h1 className="mt-1 text-2xl font-semibold md:text-3xl">
            {isArabic
              ? 'تشكيلة واسعة من السوشي والأطباق'
              : 'A wide selection of sushi, platters & hot dishes'}
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            {isArabic
              ? 'الأسعار بالدولار الأميركي (أو ما يعادلها). التوصيل متوفر ضمن مدينة صور - الحوش، جانب المستشفى اللبناني الإيطالي.'
              : 'Prices are in USD (or local equivalent). Delivery is available within Sour – Al Hosh, next to the Lebanese Italian Hospital.'}
          </p>
        </header>

        <div className="mt-8 space-y-4">
          {menuCategories.map((cat) => {
            const catItems = itemsByCategory[cat.id] ?? [];
            if (!catItems.length) return null;

            const isOpen = openCategoryId === cat.id;

            // نجمع الأصناف في هذا الكاتيجوري حسب subSection لو موجودة
            const groups: Record<string, any[]> = {};
            for (const item of catItems) {
              const key = item.subSection || '_default';
              if (!groups[key]) groups[key] = [];
              groups[key].push(item);
            }

            return (
              <section
                key={cat.id}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-sm shadow-slate-950/40"
              >
                {/* رأس الكاتيجوري (العنوان + الأيقونة + السهم) */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenCategoryId(isOpen ? null : (cat.id as string))
                  }
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-900"
                >
                  <div
                    className={`flex items-center gap-3 ${
                      isArabic ? 'flex-row-reverse text-right' : ''
                    }`}
                  >
                    <span className="text-2xl">{cat.emoji}</span>
                    <div>
                      <p className="text-sm font-semibold md:text-base">
                        {cat.name[lang]}
                      </p>
                      <p className="text-[11px] text-slate-400 md:text-xs">
                        {cat.description[lang]}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-slate-300 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* محتوى الكاتيجوري (الأصناف) */}
                {isOpen && (
                  <div className="border-t border-slate-800 px-4 py-3 md:px-5 md:py-4">
                    <div className="space-y-3">
                      {Object.entries(groups).map(([groupName, groupItems]) => (
                        <div key={groupName}>
                          {groupName !== '_default' && (
                            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                              {groupName}
                            </p>
                          )}

                          <div className="space-y-2">
                            {groupItems.map((item: any) => (
                              <article
                                key={item.id}
                                className="flex flex-col justify-between rounded-2xl bg-slate-950/70 p-3 text-xs text-slate-200 md:flex-row md:items-center md:text-sm"
                              >
                                <div
                                  className={
                                    isArabic ? 'text-right md:ml-3' : 'text-left md:mr-3'
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

                                <div className="mt-2 flex items-center justify-between gap-3 md:mt-0 md:justify-end">
                                  <span className="whitespace-nowrap rounded-full bg-rose-500/10 px-3 py-1 text-[11px] font-semibold text-rose-200 md:text-xs">
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
                              </article>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
