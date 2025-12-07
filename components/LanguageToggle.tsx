// components/LanguageToggle.tsx

'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const isArabic = lang === 'ar';

  return (
    <div className="inline-flex items-center rounded-full bg-slate-900/80 p-1 text-xs">
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`flex items-center gap-1 rounded-full px-2 py-1 transition-colors ${
          !isArabic
            ? 'bg-slate-100 text-slate-900'
            : 'text-slate-200 hover:bg-slate-800'
        }`}
      >
        <span className="text-sm">🇬🇧</span>
        <span>English</span>
      </button>
      <button
        type="button"
        onClick={() => setLang('ar')}
        className={`flex items-center gap-1 rounded-full px-2 py-1 transition-colors ${
          isArabic
            ? 'bg-slate-100 text-slate-900'
            : 'text-slate-200 hover:bg-slate-800'
        }`}
      >
        <span className="text-sm">🇱🇧</span>
        <span>العربية</span>
      </button>
    </div>
  );
}
