'use client';

import React, { useState } from 'react';
import menuItems, {
  menuCategories,
  type MenuCategory,
  type MenuItem
} from '@/lib/menuData';
import { useLanguage } from '@/lib/LanguageContext';

// نخلي رقم الواتساب هنا مباشرة عشان ما نعتمد على ملف آخر
const WHATSAPP_NUMBER = '009613823005';

type MenuSectionProps = {
  categoryId: MenuCategory;
};

const categoryEmojis: Record<MenuCategory, string> = {
  starters: '🥟',
  salads: '🥗',
  temaki: '🍣',
  hosoMaki: '🍣',
  futoMaki: '🍱',
  uraTuna: '🐟',
  uraCrab: '🦀',
  uraSalmon: '🐠',
  uraShrimp: '🦐',
  sashimi: '🍥',
  sushi: '🍣',
  duoMaki: '🧡',
  vegetarianMaki: '🥒',
  reginaSpecialMaki: '👑',
  creamySmokedSalmonCrab: '💮',
  platters: '🍱',
  specialRolls: '🔥',
  miniBoat: '⛵',
  bigBoat: '🚤',
  pizza: '🍕',
  kumpir: '🥔',
  pasta: '🍝',
  hotPlates: '🍗',
  drinks: '🥤'
};

const MenuSection: React.FC<MenuSectionProps> = ({ categoryId }) => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(true);

  const categoryMeta = menuCategories.find((c) => c.id === categoryId);
  const itemsInCategory: MenuItem[] = menuItems.filter(
    (item) => item.category === categoryId
  );

  if (!categoryMeta || itemsInCategory.length === 0) return null;

  const emoji = categoryEmojis[categoryId] ?? '🍣';
  const title = categoryMeta.label[lang];
  const itemCount = itemsInCategory.length;

  const handleToggle = () => setIsOpen((prev) => !prev);

  const buildWhatsAppLink = (item: MenuItem) => {
    const name = item.name[lang];
    const base = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;
    const text =
      lang === 'ar'
        ? `مرحباً، أود طلب هذا الصنف من منيو Sushi Highway:\n${name}`
        : `Hello, I would like to order this item from Sushi Highway menu:\n${name}`;
    return `${base}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      className="
        rounded-2xl border border-white/10 bg-white/80
        shadow-sm backdrop-blur-sm overflow-hidden
        transition-all duration-300
      "
    >
      {/* Header (click to expand/collapse) */}
      <button
        type="button"
        onClick={handleToggle}
        className="
          flex w-full items-center justify-between
          px-4 py-3 md:px-5 md:py-4
          bg-gradient-to-r from-rose-50 to-orange-50
          hover:from-rose-100 hover:to-orange-50
          transition-colors duration-200
        "
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl md:text-3xl">{emoji}</span>
          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold uppercase tracking-wide text-rose-500">
              {lang === 'ar' ? 'القسم' : 'Category'}
            </span>
            <span className="text-base md:text-lg font-bold text-slate-900">
              {title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-xs md:inline-flex px-2 py-1 rounded-full bg-slate-900 text-white/90">
            {lang === 'ar'
              ? `${itemCount} صنف`
              : `${itemCount} item${itemCount > 1 ? 's' : ''}`}
          </span>

          <span
            className={`
              inline-flex h-8 w-8 items-center justify-center rounded-full
              bg-slate-900 text-white text-sm
              transition-transform duration-200
              ${isOpen ? 'rotate-180' : 'rotate-0'}
            `}
          >
            ▼
          </span>
        </div>
      </button>

      {/* Items */}
      <div
        className={`
          grid gap-3 md:gap-4 px-4 pb-4 md:px-5
          transition-all duration-300
          ${
            isOpen
              ? 'grid-rows-[1fr] opacity-100 pt-3 md:pt-4'
              : 'grid-rows-[0fr] opacity-0 pt-0 pointer-events-none h-0 overflow-hidden'
          }
        `}
      >
        <div className="grid gap-3 md:gap-4 md:grid-cols-2">
          {itemsInCategory.map((item) => (
            <article
              key={item.id}
              className={`
                group rounded-xl border border-slate-100 bg-white
                p-3 md:p-4 shadow-[0_6px_18px_rgba(15,23,42,0.04)]
                hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)]
                transition-transform duration-200
                hover:-translate-y-1
                flex flex-col gap-2
              `}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col">
                  <h3 className="text-sm md:text-base font-semibold text-slate-900">
                    {item.name[lang]}
                  </h3>
                  {item.description[lang] && (
                    <p className="mt-1 text-xs md:text-sm text-slate-500 leading-snug">
                      {item.description[lang]}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                    {item.price}
                  </span>
                </div>
              </div>

              <div className="mt-1 flex items-center justify-between gap-3">
                {item.isSignature && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                    ⭐
                    {lang === 'ar' ? 'صنف مميز' : 'Signature'}
                  </span>
                )}

                <a
                  href={buildWhatsAppLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    ml-auto inline-flex items-center gap-1 rounded-full
                    bg-emerald-500 px-3 py-1.5 text-xs md:text-sm font-semibold
                    text-white shadow-sm
                    hover:bg-emerald-600 hover:shadow-md
                    active:scale-95 transition-all duration-150
                  "
                >
                  <span className="text-[13px]">WhatsApp</span>
                  <span className="text-[13px]">📲</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
