'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { buildMainOrderWhatsAppLink } from '@/lib/whatsapp';
import { RESTAURANT_NAME } from '@/lib/config';

export default function Hero() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const whatsappHref = buildMainOrderWhatsAppLink(lang);

  const title = isArabic
    ? 'سوشي هايواي في قلب صور'
    : `${RESTAURANT_NAME} in Sour (Tyre)`;
  const subtitle = isArabic
    ? 'لفائف سوشي طازجة، نكهات جريئة، وتوصيل سريع ضمن مدينة صور.'
    : 'Fresh sushi rolls, bold flavours and fast service within Sour (Tyre).';
  const secondaryText = isArabic
    ? 'اطلب الآن عبر واتساب أو اكتشف منيو السوشي والبوكسات والأطباق الساخنة.'
    : 'Order now via WhatsApp or explore our sushi, boxes and hot dishes menu.';

  const primaryCtaLabel = isArabic ? 'شاهد المنيو' : 'View menu';
  const secondaryCtaLabel = isArabic ? 'اطلب عبر واتساب' : 'Order on WhatsApp';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* خلفية زخرفية بسيطة */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[-4rem] h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 pb-16 pt-28 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        {/* النص */}
        <div className={`max-w-xl space-y-4 ${isArabic ? 'text-right md:ml-auto' : ''}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
            {isArabic ? 'مطعم سوشي في صور' : 'Sushi restaurant in Sour'}
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            {title}
          </h1>

          <p className="text-sm text-slate-200 md:text-base">{subtitle}</p>

          <p className="text-xs text-slate-400 md:text-sm">{secondaryText}</p>

          <div
            className={`
              mt-4 flex flex-wrap items-center gap-3
              ${isArabic ? 'justify-end' : 'justify-start'}
            `}
          >
            {/* زر المنيو */}
            <Link
              href="/menu"
              className="
                inline-flex items-center justify-center rounded-full
                bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white
                shadow-lg shadow-rose-500/30
                hover:bg-rose-600 hover:shadow-xl
                active:scale-95 transition-all
              "
            >
              {primaryCtaLabel}
            </Link>

            {/* زر واتساب */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2 rounded-full
                border border-emerald-400/60 bg-slate-950/60 px-4 py-2.5
                text-sm font-semibold text-emerald-200
                hover:bg-emerald-500/10 hover:border-emerald-400
                active:scale-95 transition-all
              "
            >
              <span className="text-lg">🟢</span>
              <span>{secondaryCtaLabel}</span>
            </a>
          </div>

          <div
            className={`
              mt-3 flex flex-wrap items-center gap-3 text-[11px] text-slate-400
              ${isArabic ? 'justify-end' : 'justify-start'}
            `}
          >
            <span>• {isArabic ? 'توصيل ضمن مدينة صور' : 'Delivery within Sour only'}</span>
            <span>• {isArabic ? 'سوشي طازج محضّر عند الطلب' : 'Fresh sushi prepared to order'}</span>
          </div>
        </div>

        {/* جانب شكلي (مكان لصورة أطباق لاحقاً إن حبيت) */}
        <div className="mt-6 w-full max-w-sm md:mt-0 md:max-w-md">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.8)]">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,250,252,0.04),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(248,250,252,0.06),transparent_55%)]" />
            </div>
            <div className="relative flex h-full flex-col justify-between p-4 md:p-5">
              <div className="space-y-1 text-xs text-slate-200">
                <p className="text-[11px] uppercase tracking-[0.2em] text-rose-400">
                  {isArabic ? 'تجربة سوشي' : 'Sushi experience'}
                </p>
                <p className="text-sm font-semibold">
                  {isArabic
                    ? 'لفائف مختارة، ساشيمي وسوشي كلاسيك'
                    : 'Curated rolls, sashimi & classic sushi'}
                </p>
                <p className="text-[11px] text-slate-400">
                  {isArabic
                    ? 'جاهزون لاستقبالكم في صور - الحوش، أو لخدمتكم بالتوصيل.'
                    : 'Ready to welcome you in Sour – Al Housh, or serve you via delivery.'}
                </p>
              </div>

              <div className="space-y-2 text-[11px] text-slate-300">
                <div className="flex items-center justify-between gap-2">
                  <span>{isArabic ? 'بوكسات مكس سوشي' : 'Sushi mix platters'}</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                    {isArabic ? 'مناسبة للعائلة' : 'Family-friendly'}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>{isArabic ? 'أطباق ساخنة ومقبلات' : 'Hot plates & starters'}</span>
                  <span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] text-rose-200">
                    {isArabic ? 'لجميع الأذواق' : 'For every taste'}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>{isArabic ? 'مشروبات وعصائر طازجة' : 'Drinks & fresh juices'}</span>
                  <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-200">
                    {isArabic ? 'تكمّل التجربة' : 'Complete the experience'}
                  </span>
                </div>
              </div>

              <div className="mt-2 text-[10px] text-slate-500">
                {isArabic
                  ? 'الصور هنا مكان مخصص لاحقاً لصور أطباق حقيقية من المطعم.'
                  : 'This block can later be replaced with real photos from the restaurant.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
