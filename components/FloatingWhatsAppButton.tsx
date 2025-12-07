'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { buildMainOrderWhatsAppLink } from '@/lib/whatsapp';

export default function FloatingWhatsAppButton() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const href = buildMainOrderWhatsAppLink(lang);
  const label = isArabic ? 'اطلب الآن عبر واتساب' : 'Order now on WhatsApp';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-4 right-4 z-40
        flex items-center gap-2 rounded-full
        bg-emerald-500 px-3 py-2 text-xs md:text-sm font-semibold text-white
        shadow-lg shadow-emerald-500/30
        hover:bg-emerald-600 hover:shadow-xl
        active:scale-95 transition-all
      "
      aria-label={label}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-lg">
        🟢
      </span>
      {/* النص يظهر من حجم شاشة sm وما فوق، على الموبايل تبقى الأيقونة فقط لو حاب تخف الزحمة */}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
