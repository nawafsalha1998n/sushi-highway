'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { menuItems } from '@/lib/menuData';
import { buildWhatsAppOrderLink } from '@/lib/whatsapp';

export default function MenuPage() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

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
              : 'A wide selection of sushi & dishes'}
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            {isArabic
              ? 'الأسعار بالدولار الأميركي (أو ما يعادلها). التوصيل متوفر ضمن مدينة صور - الحوش، جانب المستشفى اللبناني الإيطالي.'
              : 'Prices are in USD (or local equivalent). Delivery is available within Sour – Al Hosh, next to the Lebanese Italian Hospital.'}
          </p>
        </header>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {menuItems.map((item: any) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm shadow-slate-950/50"
            >
              <div className={isArabic ? 'text-right' : 'text-left'}>
                <h2 className="text-sm font-semibold text-slate-50 md:text-base">
                  {item.name?.[lang] ?? ''}
                </h2>
                {item.description?.[lang] && (
                  <p className="mt-1 text-[11px] text-slate-400 md:text-xs">
                    {item.description[lang]}
                  </p>
                )}
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-200">
                  {item.price}
                </span>
                <a
                  href={buildWhatsAppOrderLink?.(
                    item.name?.[lang] ?? ''
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-white hover:bg-emerald-400"
                >
                  {isArabic ? 'اطلب هذا الصنف' : 'Order this item'}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
