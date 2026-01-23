'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { menuCategories, menuItems } from '@/lib/menuData';

const WHATSAPP_BASE = 'https://wa.me/9613823005';

function buildItemWhatsAppLink(itemName: string, isArabic: boolean) {
  const message = isArabic
    ? `مرحبا، أود طلب (${itemName}) من منيو سوشي هايواي في صور - الحوش.`
    : `Hello, I would like to order (${itemName}) from Sushi Highway menu in Sour - Al Hosh.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

// ✅ دالة جديدة تستخدم item.id لتوليد اسم ملف الصورة
function getItemImageFileName(item: any): string {
  let fileName = item.id.replace(/_/g, '-');
  fileName = fileName + '.PNG'; // ✅ .PNG بالكبير
  return `/menu/${fileName}`;
}

// ✅ Tab جديد للأكثر طلبًا
const BEST_TAB_ID = 'best';

// كلمات مفتاحية للأكثر طلبًا (EN + AR) — مرنة على اختلاف التسمية
const BEST_SELLER_MATCHERS = [
  // Mini Boat
  'mini boat',
  'mini-boat',
  'mini  boat',
  'ميني بوت',
  'مينى بوت',
  // Big Boat
  'big boat',
  'big-boat',
  'big  boat',
  'بيغ بوت',
  'بيج بوت',
  // Sushi Cake (Big فقط)
  'sushi cake big',
  'sushi cake large',
  'كيك سوشي كبير',
  'كيك السوشي الكبير'
];

function isBestSellerItem(item: any) {
  const en = (item?.name?.en ?? '').toString().toLowerCase();
  const ar = (item?.name?.ar ?? '').toString().toLowerCase();
  const hay = `${en} ${ar}`;

  return BEST_SELLER_MATCHERS.some((k) => hay.includes(k.toLowerCase()));
}

export default function MenuPage() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';

  const [searchTerm, setSearchTerm] = useState('');
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  // ✅ افتراضيًا: نفتح "الأكثر طلبًا" أول شي
  const defaultCategoryId = BEST_TAB_ID;
  const [activeCategoryId, setActiveCategoryId] = useState<string>(defaultCategoryId);

  // ✅ ref لتبويب الأقسام (سكرول جانبي واضح)
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const scrollTabsBy = (dx: number) => {
    if (!tabsRef.current) return;
    tabsRef.current.scrollBy({ left: dx, behavior: 'smooth' });
  };

  // زر للأعلى على الجوال
  const [showToTop, setShowToTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pageTitle = isArabic ? 'منيو سوشي هاي واي' : 'Sushi Highway Menu';
  const pageSubtitle = isArabic
    ? 'اختر القسم بسرعة واطلب مباشرة عبر واتساب.'
    : 'Pick a category fast and order instantly via WhatsApp.';

  // فلترة عامة حسب البحث
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredItems = useMemo(() => {
    return (menuItems as any[]).filter((item) => {
      if (!normalizedSearch) return true;
      const nameEn = item.name.en.toLowerCase();
      const nameAr = item.name.ar.toLowerCase();
      return nameEn.includes(normalizedSearch) || nameAr.includes(normalizedSearch);
    });
  }, [normalizedSearch]);

  // ✅ إذا في بحث: اعرض نتائج من كل الأقسام
  const showAllBecauseSearching = !!normalizedSearch;

  const bestSellerItems = useMemo(() => {
    return (menuItems as any[]).filter((item) => isBestSellerItem(item));
  }, []);

  // ✅ دالة للحصول على صنفين من أعلى سعر
  const getTwoMostExpensiveItems = useMemo(() => {
    const excludedIds = new Set(bestSellerItems.map(item => item.id));
    
    const remainingItems = (menuItems as any[])
      .filter(item => !excludedIds.has(item.id))
      .sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
        return priceB - priceA;
      })
      .slice(0, 2);
      
    return remainingItems;
  }, [bestSellerItems]);

  // ✅ دمج الأصناف الأكثر طلباً مع الصنفين الأغلى
  const combinedBestSellerItems = useMemo(() => {
    return [...bestSellerItems, ...getTwoMostExpensiveItems];
  }, [bestSellerItems, getTwoMostExpensiveItems]);

  const activeCategoryName = useMemo(() => {
    if (activeCategoryId === BEST_TAB_ID) return isArabic ? 'الأكثر طلبًا' : 'Best Sellers';
    if (activeCategoryId === 'all') return isArabic ? 'الكل' : 'All';
    const cat = menuCategories.find((c) => c.id === activeCategoryId);
    return cat ? cat.name[lang] : isArabic ? 'الكل' : 'All';
  }, [activeCategoryId, isArabic, lang]);

  const totalResultsCount = filteredItems.length;

  const handleSelectCategory = (categoryId: string | 'all') => {
    setActiveCategoryId(categoryId);

    // سكرول لبداية المنيو بعد التبديل
    requestAnimationFrame(() => {
      const root = document.getElementById('menu-root');
      if (root) root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const scrollToTop = () => {
    const top = document.getElementById('menu-top');
    if (top) top.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // بناء أقسام مرئية حسب الحالة
  const visibleCategories = useMemo(() => {
    if (showAllBecauseSearching) return menuCategories;
    if (activeCategoryId === BEST_TAB_ID) return [];
    return menuCategories.filter((category) => {
      if (activeCategoryId === 'all') return true;
      return category.id === activeCategoryId;
    });
  }, [activeCategoryId, showAllBecauseSearching]);

  // إذا في بحث: نخلي "All" فعال تلقائيًا
  useEffect(() => {
    if (showAllBecauseSearching && activeCategoryId !== 'all') {
      setActiveCategoryId('all');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAllBecauseSearching]);

  return (
    <main
      id="menu-top"
      dir={dir}
      className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden"
    >
      {/* Header */}
      <section className="border-b border-slate-900 bg-slate-950/80">
        <div className="mx-auto w-full max-w-none flex flex-col gap-3 px-4 py-6 sm:px-6 sm:py-8">
          <div className={isArabic ? 'text-right' : 'text-left'}>
            <h1 className="text-2xl font-semibold sm:text-3xl">{pageTitle}</h1>
            <p className="mt-1 text-sm text-slate-400">{pageSubtitle}</p>
          </div>

          {/* Search */}
          <div>
            <input
              type="text"
              placeholder={isArabic ? 'ابحث عن صنف بسرعة...' : 'Quick search...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-rose-400 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* ✅ Tabs ثابتة - مربعات مع صور */}
      <section className="sticky top-0 z-20 border-b border-slate-900 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto w-full max-w-none px-4 py-3 sm:px-6">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-[11px] text-slate-300">
              {isArabic ? 'اسحب الأقسام ← →' : 'Swipe categories ← →'}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollTabsBy(isArabic ? 260 : -260)}
                className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-[11px] text-slate-200 hover:border-rose-400 hover:text-rose-200"
                aria-label="Scroll categories left"
              >
                {isArabic ? '→' : '←'}
              </button>
              <button
                type="button"
                onClick={() => scrollTabsBy(isArabic ? -260 : 260)}
                className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-[11px] text-slate-200 hover:border-rose-400 hover:text-rose-200"
                aria-label="Scroll categories right"
              >
                {isArabic ? '←' : '→'}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-slate-950/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-slate-950/90 to-transparent" />

            <div
              ref={tabsRef}
              className="flex gap-3 overflow-x-auto pb-3 pr-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* ⭐ الأكثر طلبًا */}
              <button
                type="button"
                onClick={() => handleSelectCategory(BEST_TAB_ID)}
                className={`flex-shrink-0 w-24 h-28 flex flex-col items-center justify-center rounded-2xl border transition-all
                  ${activeCategoryId === BEST_TAB_ID
                    ? 'border-rose-400 bg-rose-500/20 shadow-lg shadow-rose-500/20'
                    : 'border-slate-800 bg-slate-900/90 hover:border-rose-400 hover:bg-slate-800'
                  }`}
              >
                <div className="relative w-12 h-12 mb-2 rounded-full overflow-hidden border border-slate-700">
                  <Image
                    src="/menu/category-best.PNG" {/* ✅ .PNG بالكبير */}
                    alt={isArabic ? 'الأكثر طلبًا' : 'Best Sellers'}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-[10px] font-medium text-slate-100 text-center px-1">
                  ⭐ {isArabic ? 'الأكثر طلبًا' : 'Best'}
                </span>
              </button>

              {/* الكل */}
              <button
                type="button"
                onClick={() => handleSelectCategory('all')}
                className={`flex-shrink-0 w-24 h-28 flex flex-col items-center justify-center rounded-2xl border transition-all
                  ${activeCategoryId === 'all'
                    ? 'border-rose-400 bg-rose-500/20 shadow-lg shadow-rose-500/20'
                    : 'border-slate-800 bg-slate-900/90 hover:border-rose-400 hover:bg-slate-800'
                  }`}
              >
                <div className="relative w-12 h-12 mb-2 rounded-full overflow-hidden border border-slate-700">
                  <Image
                    src="/menu/category-all.PNG" {/* ✅ .PNG بالكبير */}
                    alt={isArabic ? 'الكل' : 'All'}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-[10px] font-medium text-slate-100 text-center px-1">
                  {isArabic ? 'الكل' : 'All'}
                </span>
              </button>

              {/* الأقسام */}
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`flex-shrink-0 w-24 h-28 flex flex-col items-center justify-center rounded-2xl border transition-all
                    ${activeCategoryId === cat.id
                      ? 'border-rose-400 bg-rose-500/20 shadow-lg shadow-rose-500/20'
                      : 'border-slate-800 bg-slate-900/90 hover:border-rose-400 hover:bg-slate-800'
                    }`}
                >
                  <div className="relative w-12 h-12 mb-2 rounded-full overflow-hidden border border-slate-700">
                    <Image
                      src={`/menu/category-${cat.id}.PNG`} {/* ✅ .PNG بالكبير */}
                      alt={cat.name[lang]}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/menu/default.PNG';
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-medium text-slate-100 text-center px-1">
                    {cat.name[lang]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
            <span>
              {showAllBecauseSearching
                ? isArabic
                  ? `🔎 نتائج البحث: ${totalResultsCount} صنف`
                  : `🔎 Search results: ${totalResultsCount} items`
                : isArabic
                ? `القسم الحالي: ${activeCategoryName}`
                : `Current category: ${activeCategoryName}`}
            </span>

            {!showAllBecauseSearching && activeCategoryId !== 'all' && activeCategoryId !== BEST_TAB_ID && (
              <button
                type="button"
                onClick={() => handleSelectCategory('all')}
                className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-[11px] text-slate-200 hover:border-rose-400 hover:text-rose-200"
              >
                {isArabic ? 'عرض الكل' : 'Show all'}
              </button>
            )}
          </div>

          {showAllBecauseSearching && (
            <p className="mt-2 text-[11px] text-slate-500">
              {isArabic
                ? 'نلاحظ: عند البحث نعرض نتائج من كل الأقسام حتى لا تفوتك أي صنف.'
                : 'Note: while searching, we show results from all categories so you don\'t miss anything.'}
            </p>
          )}
        </div>
      </section>

      {/* محتوى المنيو */}
      <section id="menu-root" className="bg-slate-950">
        <div className="mx-auto w-full max-w-none px-4 py-6 sm:px-6 sm:py-8">
          {/* Empty state */}
          {totalResultsCount === 0 && (
            <div className="rounded-3xl border border-slate-900 bg-slate-950/80 p-6 text-center">
              <p className="text-sm font-semibold text-slate-100">
                {isArabic ? 'لا يوجد نتائج مطابقة' : 'No matching results'}
              </p>
              <p className="mt-2 text-xs text-slate-400">
                {isArabic ? 'جرّب كلمة أخرى أو امسح البحث.' : 'Try a different keyword or clear the search.'}
              </p>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="rounded-full bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-100 border border-slate-700 hover:border-rose-400 hover:text-rose-200"
                >
                  {isArabic ? 'مسح البحث' : 'Clear search'}
                </button>
              </div>
            </div>
          )}

          {/* ⭐ عرض الأكثر طلبًا */}
          {!showAllBecauseSearching && activeCategoryId === BEST_TAB_ID && (
            <section className="mb-8 rounded-3xl border border-slate-900/80 bg-slate-950/80 p-4 shadow-sm shadow-slate-900 sm:p-5">
              <header className={`mb-4 flex flex-col gap-1 ${isArabic ? 'text-right' : 'text-left'}`}>
                <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-50">
                  <span className="text-xl">⭐</span>
                  <span>{isArabic ? 'الأكثر طلبًا' : 'Best Sellers'}</span>
                </h2>
                <p className="text-xs text-slate-400">
                  {isArabic 
                    ? 'Mini Boat • Big Boat • Sushi Cake Big • إضافة صنفين من الأعلى سعراً' 
                    : 'Mini Boat • Big Boat • Sushi Cake Big • Plus 2 highest priced items'}
                </p>
              </header>

              <div className="space-y-2">
                {combinedBestSellerItems.map((item: any) => {
                  const imgSrc = getItemImageFileName(item);

                  return (
                    <article
                      key={item.id}
                      className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-xs text-slate-200 md:text-sm"
                    >
                      <div 
                        className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/80 cursor-pointer"
                        onClick={() => setEnlargedImage(imgSrc)}
                      >
                        {imgSrc && (
                          <Image
                            src={imgSrc}
                            alt={item.name?.[lang] ?? 'Menu item'}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/menu/default.PNG';
                            }}
                          />
                        )}
                      </div>

                      <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div className={isArabic ? 'text-right md:ml-3' : 'text-left md:mr-3'}>
                          <p className="font-semibold text-slate-50">{item.name?.[lang] ?? ''}</p>
                          {item.description?.[lang] && (
                            <p className="mt-0.5 text-[11px] text-slate-400 md:text-xs">
                              {item.description[lang]}
                            </p>
                          )}
                          {item.isSignature && (
                            <span className="mt-1 inline-block rounded-full bg-amber-900/30 px-2 py-0.5 text-[10px] text-amber-200">
                              {isArabic ? '⭐ صنف مميز' : '⭐ Signature Item'}
                            </span>
                          )}
                          {getTwoMostExpensiveItems.some(expItem => expItem.id === item.id) && (
                            <span className="mt-1 inline-block rounded-full bg-purple-900/30 px-2 py-0.5 text-[10px] text-purple-200">
                              {isArabic ? '💎 من الأعلى سعراً' : '💎 Premium Pick'}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between gap-3 md:justify-end">
                          <span className="whitespace-nowrap rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-rose-200 md:text-xs">
                            {item.price}
                          </span>
                          <a
                            href={buildItemWhatsAppLink(item.name?.[lang] ?? '', isArabic)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whitespace-nowrap rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-white hover:bg-emerald-400 md:text-xs"
                          >
                            {isArabic ? 'اطلب هذا الصنف' : 'Order this item'}
                          </a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {/* عرض الأقسام العادية */}
          {visibleCategories.map((category) => {
            const itemsForCategory = filteredItems.filter((item: any) => item.categoryId === category.id);
            if (!itemsForCategory.length) return null;

            const groups: Record<string, typeof itemsForCategory> = {};
            itemsForCategory.forEach((item: any) => {
              const key = item.subSection ?? '_default';
              if (!groups[key]) groups[key] = [];
              groups[key].push(item);
            });

            const groupNames = Object.keys(groups);

            return (
              <section
                key={category.id}
                id={`menu-section-${category.id}`}
                className="mb-8 rounded-3xl border border-slate-900/80 bg-slate-950/80 p-4 shadow-sm shadow-slate-900 sm:p-5"
              >
                <header className={`mb-4 flex flex-col gap-1 ${isArabic ? 'text-right' : 'text-left'}`}>
                  <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-50">
                    <span className="text-xl">{category.emoji}</span>
                    <span>{category.name[lang]}</span>
                  </h2>
                  <p className="text-xs text-slate-400">{category.description[lang]}</p>
                </header>

                {groupNames.map((groupName) => {
                  const groupItems = groups[groupName];

                  return (
                    <div key={groupName} className="mt-2 space-y-2">
                      {groupName !== '_default' && (
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          {groupName}
                        </p>
                      )}

                      <div className="space-y-2">
                        {groupItems.map((item: any) => {
                          const imgSrc = getItemImageFileName(item);

                          return (
                            <article
                              key={item.id}
                              className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-xs text-slate-200 md:text-sm"
                            >
                              <div 
                                className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/80 cursor-pointer"
                                onClick={() => setEnlargedImage(imgSrc)}
                              >
                                {imgSrc && (
                                  <Image
                                    src={imgSrc}
                                    alt={item.name?.[lang] ?? 'Menu item'}
                                    fill
                                    className="object-cover"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = '/menu/default.PNG';
                                    }}
                                  />
                                )}
                              </div>

                              <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center md:justify-between">
                                <div className={isArabic ? 'text-right md:ml-3' : 'text-left md:mr-3'}>
                                  <p className="font-semibold text-slate-50">{item.name?.[lang] ?? ''}</p>
                                  {item.description?.[lang] && (
                                    <p className="mt-0.5 text-[11px] text-slate-400 md:text-xs">
                                      {item.description[lang]}
                                    </p>
                                  )}
                                  {item.isSignature && (
                                    <span className="mt-1 inline-block rounded-full bg-amber-900/30 px-2 py-0.5 text-[10px] text-amber-200">
                                      {isArabic ? '⭐ صنف مميز' : '⭐ Signature Item'}
                                    </span>
                                  )}
                                </div>

                                <div className="flex items-center justify-between gap-3 md:justify-end">
                                  <span className="whitespace-nowrap rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-rose-200 md:text-xs">
                                    {item.price}
                                  </span>
                                  <a
                                    href={buildItemWhatsAppLink(item.name?.[lang] ?? '', isArabic)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whitespace-nowrap rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-white hover:bg-emerald-400 md:text-xs"
                                  >
                                    {isArabic ? 'اطلب هذا الصنف' : 'Order this item'}
                                  </a>
                                </div>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </section>
            );
          })}
        </div>
      </section>

      {/* ✅ Modal للصورة المكبرة */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <button
              type="button"
              onClick={() => setEnlargedImage(null)}
              className="absolute -top-10 right-0 rounded-full bg-slate-800/80 p-2 text-white hover:bg-slate-700"
              aria-label={isArabic ? 'إغلاق' : 'Close'}
            >
              ✕
            </button>
            <Image
              src={enlargedImage}
              alt="Zoomed menu item"
              width={600}
              height={600}
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      )}

      {showToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-5 z-30 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-100 shadow-lg shadow-slate-950/40 hover:border-rose-400 hover:text-rose-200"
          aria-label="Back to top"
        >
          {isArabic ? '⬆️ للأعلى' : '⬆️ Top'}
        </button>
      )}
    </main>
  );
}
