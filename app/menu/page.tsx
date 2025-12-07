// app/menu/page.tsx
'use client';

import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/lib/LanguageContext';
import { menuCategories, menuItems, type MenuItem } from '@/lib/menuData';

function groupByCategory(items: MenuItem) {
  return;
}

function groupItemsByCategory(items: MenuItem[]) {
  const grouped: Record<string, MenuItem[]> = {};
  for (const item of items) {
    if (!grouped[item.categoryId]) {
      grouped[item.categoryId] = [];
    }
    grouped[item.categoryId].push(item);
  }
  return grouped;
}

export default function MenuPage() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const grouped = groupItemsByCategory(menuItems);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-28 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow={isArabic ? 'منيو سوشي هايواي' : 'Sushi Highway menu'}
          title={
            isArabic
              ? 'تشكيلة مختارة من السوشي والأطباق الساخنة'
              : 'A curated selection of sushi & hot dishes'
          }
          align={isArabic ? 'right' : 'left'}
        />

        <p className="mt-2 text-sm text-slate-300">
          {isArabic
            ? 'الأسعار بالدولار الأميركي (أو ما يعادلها). التوصيل متوفر ضمن مدينة صور والحوش بجانب المستشفى اللبناني الإيطالي.'
            : 'Prices are in USD (or local equivalent). Delivery is available within Sour (Tyre) – Al Hosh, near the Lebanese Italian Hospital.'}
        </p>

        <div className="mt-8 space-y-8">
          {menuCategories.map((cat) => {
            const items = grouped[cat.id] ?? [];
            if (!items.length) return null;

            const title = cat.name[lang];
            const desc = cat.description[lang];

            return (
              <section
                key={cat.id}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 md:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-50 md:text-xl">
                      <span className="text-2xl">{cat.emoji}</span>
                      <span>{title}</span>
                    </h2>
                    {desc && (
                      <p className="mt-1 text-xs text-slate-400 md:text-sm">
                        {desc}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-2 rounded-2xl bg-slate-950/70 p-3 shadow-sm shadow-slate-900/40"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1">
                          <p className="text-[13px] font-semibold md:text-sm">
                            {item.name[lang]}
                          </p>
                          {item.description && item.description[lang] && (
                            <p className="mt-0.5 text-[11px] text-slate-400 md:text-xs">
                              {item.description[lang]}
                            </p>
                          )}
                        </div>
                        <span className="whitespace-nowrap rounded-full bg-rose-500/10 px-2 py-1 text-[11px] font-semibold text-rose-200 md:text-xs">
                          {item.price}
                        </span>
                      </div>
                      {item.isSignature && (
                        <span className="inline-flex w-fit items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-300 md:text-xs">
                          ⭐ {isArabic ? 'صنف مميز' : 'Signature item'}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
