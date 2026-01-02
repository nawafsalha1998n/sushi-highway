'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { menuCategories, menuItems } from '@/lib/menuData';

const WHATSAPP_BASE = 'https://wa.me/9613823005';

/* =========================
   IMAGE EXTENSIONS SUPPORT
   ========================= */
const MENU_IMAGE_EXTENSIONS = ['png', 'PNG', 'jpg', 'JPG'] as const;

// نبني كل الاحتمالات للصورة (حسب الترتيب)
const itemImageMap: Record<string, string[]> = {};
(menuItems as any[]).forEach((item, index) => {
  itemImageMap[item.id] = MENU_IMAGE_EXTENSIONS.map(
    (ext) => `/menu/${index + 1}.${ext}`
  );
});

function buildItemWhatsAppLink(itemName: string, isArabic: boolean) {
  const message = isArabic
    ? `مرحبا، أود طلب (${itemName}) من منيو سوشي هايواي في صور - الحوش.`
    : `Hello, I would like to order (${itemName}) from Sushi Highway menu in Sour - Al Hosh.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

// ✅ Tab جديد للأكثر طلبًا
const BEST_TAB_ID = 'best';

// كلمات مفتاحية للأكثر طلبًا
const BEST_SELLER_MATCHERS = [
  'mini boat',
  'mini-boat',
  'mini  boat',
  'ميني بوت',
  'مينى بوت',
  'big boat',
  'big-boat',
  'big  boat',
  'بيج بوت',
  'pizza'
];

function isBestSellerItem(item: any) {
  const en = (item?.name?.en ?? '').toLowerCase();
  const ar = (item?.name?.ar ?? '').toLowerCase();
  return BEST_SELLER_MATCHERS.some((k) => `${en} ${ar}`.includes(k));
}

/* =========================
   IMAGE WITH FALLBACK
   ========================= */
function MenuItemImage({ sources, alt }: { sources: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  if (!sources || sources.length === 0) return null;

  return (
    <Image
      src={sources[index]}
      alt={alt}
      fill
      className="object-cover"
      onError={() => {
        if (index < sources.length - 1) {
          setIndex(index + 1);
        }
      }}
    />
  );
}

export default function MenuPage() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';

  const [searchTerm, setSearchTerm] = useState('');
  const defaultCategoryId = BEST_TAB_ID;
  const [activeCategoryId, setActiveCategoryId] = useState<string>(defaultCategoryId);

  const tabsRef = useRef<HTMLDivElement | null>(null);
  const scrollTabsBy = (dx: number) => {
    tabsRef.current?.scrollBy({ left: dx, behavior: 'smooth' });
  };

  const [showToTop, setShowToTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredItems = useMemo(() => {
    return (menuItems as any[]).filter((item) => {
      if (!normalizedSearch) return true;
      return (
        item.name.en.toLowerCase().includes(normalizedSearch) ||
        item.name.ar.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [normalizedSearch]);

  const showAllBecauseSearching = !!normalizedSearch;

  const bestSellerItems = useMemo(
    () => (menuItems as any[]).filter((item) => isBestSellerItem(item)),
    []
  );

  const visibleCategories = useMemo(() => {
    if (showAllBecauseSearching) return menuCategories;
    if (activeCategoryId === BEST_TAB_ID) return [];
    return menuCategories.filter(
      (c) => activeCategoryId === 'all' || c.id === activeCategoryId
    );
  }, [activeCategoryId, showAllBecauseSearching]);

  return (
    <main dir={dir} className="min-h-screen bg-slate-950 text-slate-50">
      {/* BEST SELLERS */}
      {!showAllBecauseSearching && activeCategoryId === BEST_TAB_ID && (
        <section className="p-4 space-y-2">
          {bestSellerItems.map((item: any) => (
            <article
              key={item.id}
              className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-xs"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-slate-700">
                <MenuItemImage
                  sources={itemImageMap[item.id]}
                  alt={item.name?.[lang] ?? 'Menu item'}
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold">{item.name?.[lang]}</p>
                <span className="text-rose-200">{item.price}</span>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* CATEGORIES */}
      {visibleCategories.map((category) => {
        const itemsForCategory = filteredItems.filter(
          (item: any) => item.categoryId === category.id
        );
        if (!itemsForCategory.length) return null;

        return (
          <section key={category.id} className="p-4 space-y-2">
            <h2 className="font-semibold">{category.name[lang]}</h2>

            {itemsForCategory.map((item: any) => (
              <article
                key={item.id}
                className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-xs"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-slate-700">
                  <MenuItemImage
                    sources={itemImageMap[item.id]}
                    alt={item.name?.[lang] ?? 'Menu item'}
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{item.name?.[lang]}</p>
                  <span className="text-rose-200">{item.price}</span>
                </div>
              </article>
            ))}
          </section>
        );
      })}
    </main>
  );
}
