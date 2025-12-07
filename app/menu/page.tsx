'use client';

import React from 'react';
import MenuSection from '@/components/menu/MenuSection';
import { menuCategories } from '@/lib/menuData';
import { useLanguage } from '@/lib/LanguageContext';

const MenuPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-16 pt-28 md:px-6 lg:px-8">
        {/* عنوان المنيو */}
        <header className="mb-2 md:mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-400">
            SUSHI HIGHWAY
          </p>
          <h1 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight">
            {lang === 'ar' ? 'قائمة الطعام' : 'Our Menu'}
          </h1>
          <p className="mt-2 max-w-2xl text-sm md:text-base text-slate-300">
            {lang === 'ar'
              ? 'اكتشف تشكيلتنا الكاملة من السوشي، البوكسات، الأطباق الساخنة والمشروبات.'
              : 'Discover our full selection of sushi, platters, hot dishes and drinks.'}
          </p>
        </header>

        {/* الأكورديون لكل قسم */}
        <div className="flex flex-col gap-4">
          {menuCategories.map((cat) => (
            <MenuSection key={cat.id} categoryId={cat.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
