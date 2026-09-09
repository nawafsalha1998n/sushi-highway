'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { menuCategories, menuItems } from '@/lib/menuData';

const WHATSAPP_BASE = 'https://wa.me/9613823005';
const BEST_TAB_ID = 'best';
const BEST_SELLER_MATCHERS = [
  'mini boat', 'mini-boat', 'mini  boat', 'ميني بوت', 'مينى بوت',
  'big boat', 'big-boat', 'big  boat', 'بيغ بوت', 'بيج بوت',
  'sushi cake big', 'sushi cake large', 'كيك سوشي كبير', 'كيك السوشي الكبير'
];

function buildItemWhatsAppLink(itemName: string, isArabic: boolean) {
  const message = isArabic
    ? `مرحبا، أود طلب (${itemName}) من منيو سوشي هايواي في صور - الحوش.`
    : `Hello, I would like to order (${itemName}) from Sushi Highway menu in Sour - Al Hosh.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

function getItemImageFileName(item: any): string {
  return `/menu/${item.id.replace(/_/g, '-')}.PNG`;
}

function isBestSellerItem(item: any) {
  const en = (item?.name?.en ?? '').toString().toLowerCase();
  const ar = (item?.name?.ar ?? '').toString().toLowerCase();
  const hay = `${en} ${ar}`;
  return BEST_SELLER_MATCHERS.some((key) => hay.includes(key.toLowerCase()));
}

function MenuImage({ src, alt, onClick, large = false }: { src: string; alt: string; onClick: () => void; large?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative shrink-0 overflow-hidden rounded-[1.15rem] bg-[#171717] text-left ${large ? 'h-24 w-24 sm:h-28 sm:w-28' : 'h-20 w-20 sm:h-24 sm:w-24'}`}
      aria-label={alt}
    >
      <Image src={src} alt={alt} fill className="object-cover transition duration-300 hover:scale-105" onError={(event) => { (event.target as HTMLImageElement).src = '/menu/default.PNG'; }} />
    </button>
  );
}

function OrderLink({ item, lang, isArabic }: { item: any; lang: 'en' | 'ar'; isArabic: boolean }) {
  return (
    <a
      href={buildItemWhatsAppLink(item.name?.[lang] ?? '', isArabic)}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 text-xs font-bold text-[#7b7b7b] underline decoration-1 underline-offset-4 transition hover:text-[#c8102e] sm:text-sm"
    >
      {isArabic ? 'اطلب الآن' : 'Order'}
    </a>
  );
}

export default function MenuPage() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';
  const [searchTerm, setSearchTerm] = useState('');
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>(BEST_TAB_ID);
  const [showToTop, setShowToTop] = useState(false);
  const tabsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setShowToTop(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredItems = useMemo(() => (menuItems as any[]).filter((item) => {
    if (!normalizedSearch) return true;
    return item.name.en.toLowerCase().includes(normalizedSearch) || item.name.ar.toLowerCase().includes(normalizedSearch);
  }), [normalizedSearch]);
  const showAllBecauseSearching = Boolean(normalizedSearch);
  const bestSellerItems = useMemo(() => (menuItems as any[]).filter(isBestSellerItem), []);
  const premiumItems = useMemo(() => {
    const excluded = new Set(bestSellerItems.map((item) => item.id));
    return (menuItems as any[]).filter((item) => !excluded.has(item.id)).sort((a, b) => (parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0) - (parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0)).slice(0, 2);
  }, [bestSellerItems]);
  const combinedBestSellerItems = useMemo(() => [...bestSellerItems, ...premiumItems], [bestSellerItems, premiumItems]);
  const totalResultsCount = filteredItems.length;

  const activeCategoryName = useMemo(() => {
    if (activeCategoryId === BEST_TAB_ID) return isArabic ? 'الأكثر طلبًا' : 'Best Sellers';
    if (activeCategoryId === 'all') return isArabic ? 'الكل' : 'All';
    const category = menuCategories.find((item) => item.id === activeCategoryId);
    return category?.name[lang] ?? (isArabic ? 'الكل' : 'All');
  }, [activeCategoryId, isArabic, lang]);

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    requestAnimationFrame(() => document.getElementById('menu-root')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };
  const scrollTabsBy = (dx: number) => tabsRef.current?.scrollBy({ left: dx, behavior: 'smooth' });
  const visibleCategories = useMemo(() => {
    if (showAllBecauseSearching) return menuCategories;
    if (activeCategoryId === BEST_TAB_ID) return [];
    return menuCategories.filter((category) => activeCategoryId === 'all' || category.id === activeCategoryId);
  }, [activeCategoryId, showAllBecauseSearching]);

  useEffect(() => {
    if (showAllBecauseSearching && activeCategoryId !== 'all') setActiveCategoryId('all');
  }, [showAllBecauseSearching, activeCategoryId]);

  const renderItem = (item: any, signatureBadge = true) => {
    const image = getItemImageFileName(item);
    return (
      <article key={item.id} className="group flex items-center gap-4 border-b border-[#dedede] py-5 last:border-b-0 sm:gap-6 sm:py-6">
        <MenuImage src={image} alt={item.name?.[lang] ?? 'Menu item'} onClick={() => setEnlargedImage(image)} />
        <div className={`min-w-0 flex-1 ${isArabic ? 'text-right' : 'text-left'}`}>
          <h3 className="text-base font-extrabold leading-tight text-[#141414] sm:text-xl">{item.name?.[lang] ?? ''}</h3>
          {item.description?.[lang] && <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#777] sm:text-sm">{item.description[lang]}</p>}
          {signatureBadge && item.isSignature && <span className="mt-2 inline-flex rounded-full bg-[#fff0f1] px-2.5 py-1 text-[10px] font-bold text-[#c8102e]">{isArabic ? 'صنف مميز' : 'Signature'}</span>}
        </div>
        <div className={`flex shrink-0 flex-col items-end gap-2 ${isArabic ? 'items-start' : ''}`}>
          <span className="text-base font-black text-[#b20d27] sm:text-lg">{item.price}</span>
          <OrderLink item={item} lang={lang} isArabic={isArabic} />
        </div>
      </article>
    );
  };

  return (
    <main id="menu-top" dir={dir} className="min-h-screen overflow-x-hidden bg-[#f7f7f6] text-[#151515]">
      <section className="border-b border-[#e4e4e4] bg-[#f7f7f6]">
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-8 sm:pb-12 sm:pt-14">
          <div className="flex items-end justify-between gap-5">
            <div className={isArabic ? 'text-right' : 'text-left'}>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#c8102e]">{isArabic ? 'القائمة' : 'The Menu'}</p>
              <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.06em] text-[#111] sm:text-7xl">{isArabic ? 'اختر المفضل لديك' : 'Choose your favourites'}</h1>
              <p className="mt-5 max-w-xl text-sm text-[#777] sm:text-base">{isArabic ? 'اكتشف كامل الأصناف واطلب مباشرة عبر واتساب.' : 'Explore every dish and order directly through WhatsApp.'}</p>
            </div>
            <div className="hidden rounded-full bg-[#151515] px-4 py-2 text-xs font-bold text-white sm:block">{totalResultsCount} {isArabic ? 'صنف' : 'items'}</div>
          </div>
          <div className="mt-8 flex items-center gap-3 rounded-full border border-[#d8d8d8] bg-white px-4 py-3 shadow-sm focus-within:border-[#c8102e] sm:max-w-xl">
            <span className="text-lg text-[#c8102e]">⌕</span>
            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder={isArabic ? 'ابحث عن صنف...' : 'Search the menu...'} className="w-full bg-transparent text-sm outline-none placeholder:text-[#999]" />
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-20 border-b border-[#dedede] bg-[#f7f7f6]/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => scrollTabsBy(isArabic ? 260 : -260)} className="hidden h-10 w-10 shrink-0 rounded-full border border-[#d8d8d8] bg-white text-lg sm:block">{isArabic ? '→' : '←'}</button>
            <div ref={tabsRef} className="flex min-w-0 gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {[{ id: BEST_TAB_ID, label: isArabic ? 'الأكثر طلبًا' : 'Best', image: '/menu/category-best.PNG' }, { id: 'all', label: isArabic ? 'الكل' : 'All', image: '/menu/category-all.png' }, ...menuCategories.map((category) => ({ id: category.id, label: category.name[lang], image: `/menu/category-${category.id}.png` }))].map((tab) => (
                <button key={tab.id} type="button" onClick={() => handleSelectCategory(tab.id)} className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition ${activeCategoryId === tab.id ? 'border-[#151515] bg-[#151515] text-white' : 'border-[#d8d8d8] bg-white text-[#555] hover:border-[#c8102e] hover:text-[#c8102e]'}`}>
                  <span className="relative h-6 w-6 overflow-hidden rounded-full"><Image src={tab.image} alt="" fill className="object-cover" onError={(event) => { (event.target as HTMLImageElement).src = '/menu/default.PNG'; }} /></span>
                  {tab.label}
                </button>
              ))}
            </div>
            <button type="button" onClick={() => scrollTabsBy(isArabic ? -260 : 260)} className="hidden h-10 w-10 shrink-0 rounded-full border border-[#d8d8d8] bg-white text-lg sm:block">{isArabic ? '←' : '→'}</button>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-[#888]">
            <span>{showAllBecauseSearching ? (isArabic ? `نتائج البحث: ${totalResultsCount} صنف` : `Search results: ${totalResultsCount} items`) : (isArabic ? `القسم: ${activeCategoryName}` : `Category: ${activeCategoryName}`)}</span>
            {!showAllBecauseSearching && activeCategoryId !== 'all' && activeCategoryId !== BEST_TAB_ID && <button type="button" onClick={() => handleSelectCategory('all')} className="font-bold text-[#c8102e]">{isArabic ? 'عرض الكل' : 'Show all'}</button>}
          </div>
        </div>
      </section>

      <section id="menu-root" className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        {totalResultsCount === 0 && <div className="rounded-3xl bg-white p-10 text-center shadow-sm"><p className="font-bold">{isArabic ? 'لا توجد نتائج مطابقة' : 'No matching results'}</p><button type="button" onClick={() => setSearchTerm('')} className="mt-4 font-bold text-[#c8102e] underline">{isArabic ? 'مسح البحث' : 'Clear search'}</button></div>}

        {!showAllBecauseSearching && activeCategoryId === BEST_TAB_ID && <section className="mb-10"><div className="mb-5 flex items-end justify-between border-b-2 border-[#171717] pb-4"><div><p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#c8102e]">{isArabic ? 'اختياراتنا' : 'Popular picks'}</p><h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl">{isArabic ? 'الأكثر طلبًا' : 'Best Sellers'}</h2></div><span className="text-sm font-black uppercase tracking-widest text-[#c8102e]">{combinedBestSellerItems.length} {isArabic ? 'أصناف' : 'items'}</span></div><div className="bg-white px-4 shadow-sm sm:px-8">{combinedBestSellerItems.map((item) => renderItem(item))}</div></section>}

        {visibleCategories.map((category) => {
          const itemsForCategory = filteredItems.filter((item: any) => item.categoryId === category.id);
          if (!itemsForCategory.length) return null;
          const groups: Record<string, any[]> = {};
          itemsForCategory.forEach((item: any) => { const key = item.subSection ?? '_default'; (groups[key] ??= []).push(item); });
          return <section key={category.id} id={`menu-section-${category.id}`} className="mb-10"><div className="mb-5 flex items-end justify-between border-b-2 border-[#171717] pb-4"><div><h2 className="flex items-center gap-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl"><span>{category.emoji}</span>{category.name[lang]}</h2><p className="mt-2 text-sm text-[#777]">{category.description[lang]}</p></div><span className="text-sm font-black uppercase tracking-widest text-[#c8102e]">{itemsForCategory.length} {isArabic ? 'أصناف' : 'items'}</span></div><div className="bg-white px-4 shadow-sm sm:px-8">{Object.entries(groups).map(([groupName, items]) => <div key={groupName}>{groupName !== '_default' && <h3 className="border-b border-[#e7e7e7] py-5 text-xs font-black uppercase tracking-[0.2em] text-[#c8102e]">{groupName}</h3>}{items.map((item) => renderItem(item))}</div>)}</div></section>;
        })}
      </section>

      {enlargedImage && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5" onClick={() => setEnlargedImage(null)}><div className="relative max-h-[90vh] max-w-[90vw]"><button type="button" onClick={() => setEnlargedImage(null)} className="absolute -top-12 right-0 text-2xl text-white" aria-label={isArabic ? 'إغلاق' : 'Close'}>×</button><Image src={enlargedImage} alt="Zoomed menu item" width={700} height={700} className="max-h-[85vh] w-auto rounded-3xl object-contain" /></div></div>}
      {showToTop && <button type="button" onClick={() => document.getElementById('menu-top')?.scrollIntoView({ behavior: 'smooth' })} className="fixed bottom-6 right-5 z-30 rounded-full bg-[#151515] px-5 py-3 text-xs font-bold text-white shadow-xl hover:bg-[#c8102e]" aria-label="Back to top">↑ {isArabic ? 'للأعلى' : 'Top'}</button>}
    </main>
  );
}
