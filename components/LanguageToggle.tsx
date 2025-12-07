'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-slate-700 bg-slate-900/80 p-0.5 text-[11px]">
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`flex items-center gap-1 rounded-full px-2.5 py-1 transition ${
          lang === 'en'
            ? 'bg-slate-100 text-slate-900'
            : 'text-slate-300 hover:text-slate-100'
        }`}
      >
        <span>🇬🇧</span>
        <span>English</span>
      </button>
      <button
        type="button"
        onClick={() => setLang('ar')}
        className={`flex items-center gap-1 rounded-full px-2.5 py-1 transition ${
          lang === 'ar'
            ? 'bg-slate-100 text-slate-900'
            : 'text-slate-300 hover:text-slate-100'
        }`}
      >
        <span>🇱🇧</span>
        <span>العربية</span>
      </button>
    </div>
  );
}
