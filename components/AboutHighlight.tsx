// components/AboutHighlight.tsx

'use client';

import {
  DELIVERY_AREA_AR,
  DELIVERY_AREA_EN,
  RESTAURANT_ADDRESS_AR,
  RESTAURANT_ADDRESS_EN,
  RESTAURANT_NAME
} from '@/lib/config';
import { useLanguage } from '@/lib/LanguageContext';

export default function AboutHighlight() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 md:p-6">
      <div
        className={`
          flex flex-col gap-4 md:flex-row md:items-center md:justify-between
          ${isArabic ? 'text-right' : 'text-left'}
        `}
      >
        <div className="space-y-2 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
            {isArabic ? 'لمحة سريعة' : 'Quick overview'}
          </p>
          <h2 className="text-lg font-bold text-slate-50 md:text-xl">
            {isArabic
              ? `${RESTAURANT_NAME} — سوشي طازج في صور - الحوش`
              : `${RESTAURANT_NAME} — fresh sushi in Sour – Al Housh`}
          </h2>
          <p className="text-sm text-slate-300">
            {isArabic
              ? 'نقدم تجربة سوشي متكاملة في صور، مع لفائف متنوعة، بوكسات مشتركة وأطباق ساخنة، في أجواء مريحة تناسب العائلة والأصدقاء.'
              : 'We offer a complete sushi experience in Sour, with a variety of rolls, sharing platters and hot plates, in a cozy setting for family and friends.'}
          </p>
          <p className="text-xs text-slate-400">
            {isArabic ? RESTAURANT_ADDRESS_AR : RESTAURANT_ADDRESS_EN}
            <br />
            {isArabic ? DELIVERY_AREA_AR : DELIVERY_AREA_EN}
          </p>
        </div>

        <div className="mt-3 grid gap-2 text-xs text-slate-300 md:mt-0">
          <div className="flex items-center gap-2">
            <span className="text-lg">🍣</span>
            <span>
              {isArabic
                ? 'تشكيلة كبيرة من لفائف السوشي والماكي والساشيمي.'
                : 'Wide selection of sushi rolls, maki and sashimi.'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🔥</span>
            <span>
              {isArabic
                ? 'أطباق ساخنة، بيتزا وباستا لمن لا يفضل السوشي فقط.'
                : 'Hot plates, pizza and pasta for those who want more than sushi.'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🚗</span>
            <span>
              {isArabic
                ? 'توصيل متوفر ضمن مدينة صور.'
                : 'Delivery available within Sour (Tyre).'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
