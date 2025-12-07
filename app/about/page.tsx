// app/about/page.tsx

'use client';

import {
  DELIVERY_AREA_AR,
  DELIVERY_AREA_EN,
  RESTAURANT_ADDRESS_AR,
  RESTAURANT_ADDRESS_EN,
  RESTAURANT_NAME
} from '@/lib/config';
import { useLanguage } from '@/lib/LanguageContext';

export default function AboutPage() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-28 md:px-6 lg:px-8">
        <header className="max-w-2xl space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-400">
            {isArabic ? 'من نحن' : 'About us'}
          </p>
          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            {isArabic
              ? `قصة ${RESTAURANT_NAME} في صور`
              : `The story of ${RESTAURANT_NAME} in Sour (Tyre)`}
          </h1>
          <p className="text-sm text-slate-300 md:text-base">
            {isArabic
              ? `${RESTAURANT_NAME} هو مطعم سوشي في صور - الحوش، بجانب المستشفى اللبناني الإيطالي، يقدم لفائف سوشي طازجة وأطباقاً مستوحاة من المطبخ الياباني، مع أجواء مريحة وخدمة تناسب العائلات والشباب.`
              : `${RESTAURANT_NAME} is a sushi restaurant in Sour (Tyre) – Al Housh, next to the Lebanese Italian Hospital. We serve fresh sushi rolls and Japanese-inspired dishes in a cozy atmosphere for families and friends.`}
          </p>
        </header>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* قسم الجودة والتجربة */}
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              {isArabic ? 'جودة وطزاجة' : 'Quality & freshness'}
            </h2>
            <p className="text-sm text-slate-300">
              {isArabic
                ? 'نركز على استخدام مكونات طازجة يتم تحضيرها بشكل يومي، مع عناية بالتفاصيل في كل طبق من لفائف السوشي، الساشيمي، البوكسات والأطباق الساخنة.'
                : 'We focus on using fresh ingredients prepared daily, with attention to detail in every plate – from sushi rolls and sashimi to platters and hot dishes.'}
            </p>
            <p className="text-xs text-slate-400">
              {isArabic
                ? 'هدفنا أن نقدم لكم تجربة سوشي عالية الجودة في صور دون الحاجة للذهاب إلى مدن أخرى.'
                : 'Our goal is to offer a high-quality sushi experience in Sour, so you don&apos;t need to travel to other cities.'}
            </p>
          </div>

          {/* قسم الموقع والخدمة */}
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              {isArabic ? 'الموقع والخدمة' : 'Location & service area'}
            </h2>
            <p className="text-sm text-slate-300">
              {isArabic ? RESTAURANT_ADDRESS_AR : RESTAURANT_ADDRESS_EN}
            </p>
            <p className="text-xs text-slate-400">
              {isArabic ? DELIVERY_AREA_AR : DELIVERY_AREA_EN}
            </p>
            <ul className="mt-3 space-y-1 text-xs text-slate-400">
              <li>
                {isArabic
                  ? 'جلسات داخلية مريحة تناسب العائلات والأصدقاء.'
                  : 'Cozy indoor seating suitable for families and friends.'}
              </li>
              <li>
                {isArabic
                  ? 'إمكانية الطلب للتوصيل ضمن مدينة صور.'
                  : 'Delivery available within Sour (Tyre).'}
              </li>
              <li>
                {isArabic
                  ? 'إمكانية الطلب المسبق عبر واتساب.'
                  : 'Pre-order available via WhatsApp.'}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
