'use client';

import {
  DELIVERY_AREA_AR,
  DELIVERY_AREA_EN,
  OPENING_HOURS_AR,
  OPENING_HOURS_EN,
  RESTAURANT_ADDRESS_AR,
  RESTAURANT_ADDRESS_EN
} from '@/lib/config';
import { useLanguage } from '@/lib/LanguageContext';
import { buildMainOrderWhatsAppLink } from '@/lib/whatsapp';

export default function ContactPage() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const whatsappLink = buildMainOrderWhatsAppLink(lang);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-28 md:px-6 lg:px-8">
        {/* العنوان الرئيسي */}
        <header className="max-w-2xl space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-400">
            {isArabic ? 'تواصل معنا' : 'Contact us'}
          </p>
          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            {isArabic ? 'نحن هنا لخدمتكم في صور' : 'We are here for you in Sour'}
          </h1>
          <p className="text-sm text-slate-300 md:text-base">
            {isArabic
              ? 'مطعم Sushi Highway متواجد في صور - الحوش، بجانب المستشفى اللبناني الإيطالي. التوصيل وخدماتنا ضمن مدينة صور فقط.'
              : 'Sushi Highway is located in Sour (Tyre) – Al Housh, next to the Lebanese Italian Hospital. Delivery and service are available within Sour only.'}
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          {/* معلومات المكان + البوكس اللي يمثل خريطة */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:p-5">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-300">
                {isArabic ? 'الموقع' : 'Location'}
              </h2>
              <p className="text-sm text-slate-100">
                {isArabic ? RESTAURANT_ADDRESS_AR : RESTAURANT_ADDRESS_EN}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {isArabic ? DELIVERY_AREA_AR : DELIVERY_AREA_EN}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {isArabic ? OPENING_HOURS_AR : OPENING_HOURS_EN}
              </p>

              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-400">
                {isArabic
                  ? 'سيتم إضافة خريطة تفاعلية (Google Maps) هنا لاحقاً.'
                  : 'An interactive Google Map can be embedded here later.'}
              </div>
            </div>
          </div>

          {/* نموذج التواصل */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:p-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">
              {isArabic ? 'ارسِل لنا رسالة' : 'Send us a message'}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  isArabic
                    ? 'تم إرسال رسالتك شكلياً (يمكن ربط النموذج ببريد إلكتروني لاحقاً).'
                    : 'Your message is captured locally (you can wire this form to email later).'
                );
              }}
              className="space-y-3 text-sm"
            >
              <div className="space-y-1">
                <label className="block text-xs text-slate-300">
                  {isArabic ? 'الاسم الكامل' : 'Full name'}
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-rose-500"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs text-slate-300">
                  {isArabic ? 'رقم الهاتف' : 'Phone number'}
                </label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-rose-500"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs text-slate-300">
                  {isArabic ? 'الرسالة' : 'Message'}
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-rose-500"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-rose-600"
              >
                {isArabic ? 'إرسال' : 'Send'}
              </button>

              <div className="mt-3 text-center text-xs text-slate-400">
                {isArabic ? 'أو تواصل مباشرة عبر' : 'Or contact us directly on'}{' '}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  WhatsApp
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
