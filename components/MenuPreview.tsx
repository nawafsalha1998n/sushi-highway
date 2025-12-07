// components/MenuPreview.tsx

'use client';

import { useLanguage } from '@/lib/LanguageContext';
import menuItems, { type MenuItem } from '@/lib/menuData';
import SectionTitle from './SectionTitle';
import Link from 'next/link';

function pickFeaturedItems(count: number): MenuItem[] {
  // نحاول اختيار أصناف مميزة، وإن ما في، ناخذ أول عناصر من المنيو
  const signature = menuItems.filter((item) => item.isSignature);
  const base = signature.length >= count ? signature : menuItems;
  return base.slice(0, count);
}

export default function MenuPreview() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const featured = pickFeaturedItems(4);

  return (
    <div className="space-y-4">
      <SectionTitle
        eyebrow={isArabic ? 'لمحة عن المنيو' : 'Menu preview'}
        title={
          isArabic ? 'تشكيلة من أشهر أطباقنا' : 'A selection of our popular items'
        }
        align={isArabic ? 'right' : 'left'}
      />

      <p className="text-sm text-slate-300">
        {isArabic
          ? 'استكشف بعض الأصناف من السوشي، البوكسات والأطباق الساخنة. يمكنك مشاهدة المنيو كاملة من الزر في الأسفل.'
          : 'Take a look at some of our sushi, platters and hot dishes. You can see the full menu using the button below.'}
      </p>

      <div className="mt-2 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-slate-900/70 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.7)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.name[lang]}
                </h3>
                {item.description[lang] && (
                  <p className="mt-1 text-xs text-slate-400">
                    {item.description[lang]}
                  </p>
                )}
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-300">
                {item.price}
              </span>
            </div>
            {item.isSignature && (
              <span className="inline-flex items-center gap-1 self-start rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-300">
                ⭐
                {isArabic ? 'صنف مميز' : 'Signature item'}
              </span>
            )}
          </article>
        ))}
      </div>

      <div
        className={`mt-4 flex ${
          isArabic ? 'justify-end' : 'justify-start'
        }`}
      >
        <Link
          href="/menu"
          className="
            inline-flex items-center justify-center rounded-full
            border border-rose-400/70 bg-slate-950/60 px-5 py-2 text-sm
            font-semibold text-rose-100
            hover:bg-rose-500/10 hover:border-rose-400
            active:scale-95 transition-all
          "
        >
          {isArabic ? 'عرض المنيو كاملة' : 'View full menu'}
        </Link>
      </div>
    </div>
  );
}
