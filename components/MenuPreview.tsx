// components/MenuPreview.tsx
'use client';

import { useLanguage } from '@/lib/LanguageContext';
import SectionTitle from './SectionTitle';
import { signatureItems } from '@/lib/menuData';

export default function MenuPreview() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const itemsToShow = signatureItems.slice(0, 3);

  if (!itemsToShow.length) return null;

  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 md:px-6 lg:px-8">
      <SectionTitle
        eyebrow={isArabic ? 'منيو مختارة' : 'Signature picks'}
        title={
          isArabic
            ? 'جرّب أشهر رولات سوشي هايواي'
            : 'Try Sushi Highway’s most loved rolls'
        }
        align="center"
      />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {itemsToShow.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm shadow-slate-950/50 transition-transform hover:-translate-y-1 hover:border-rose-500/60"
          >
            <div>
              <p className="text-sm font-semibold text-slate-50">
                {item.name[lang]}
              </p>
              {item.description && item.description[lang] && (
                <p className="mt-1 text-xs text-slate-400">
                  {item.description[lang]}
                </p>
              )}
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 text-xs">
              <span className="rounded-full bg-rose-500/10 px-3 py-1 font-semibold text-rose-200">
                {item.price}
              </span>
              {item.isSignature && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-medium text-amber-300">
                  ⭐ {isArabic ? 'الأكثر طلباً' : 'Most popular'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
