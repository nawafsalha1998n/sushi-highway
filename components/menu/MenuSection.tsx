// components/menu/MenuSection.tsx
'use client';

import { useState } from 'react';
import type { MenuItem } from '@/lib/menuData';
import { useLanguage } from '@/lib/LanguageContext';

type MenuSectionProps = {
  emoji: string;
  titleEn: string;
  titleAr: string;
  items: MenuItem[];
};

export default function MenuSection({
  emoji,
  titleEn,
  titleAr,
  items
}: MenuSectionProps) {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  const title = isArabic ? titleAr : titleEn;

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-900"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{emoji}</span>
          <span className="text-sm font-semibold text-slate-50">{title}</span>
        </div>
        <span
          className={`text-xs text-slate-300 transition-transform ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`
          grid transition-all duration-200
          ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
        `}
      >
        <div className="min-h-0 border-t border-slate-800 bg-slate-950/60 px-4 py-2">
          <ul className="space-y-2 text-sm text-slate-100">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-1 rounded-xl bg-slate-900/80 p-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-[13px] font-semibold">
                      {item.name[lang]}
                    </p>
                    {item.description[lang] && (
                      <p className="mt-0.5 text-[11px] text-slate-400">
                        {item.description[lang]}
                      </p>
                    )}
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-rose-500/10 px-2 py-1 text-[11px] font-semibold text-rose-200">
                    {item.price}
                  </span>
                </div>
                {item.isSignature && (
                  <span className="mt-1 inline-flex w-fit items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-300">
                    ⭐ {isArabic ? 'صنف مميز' : 'Signature item'}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
