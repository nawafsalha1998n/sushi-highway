'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import Hero from '@/components/Hero';
import MenuPreview from '@/components/MenuPreview';
import AboutHighlight from '@/components/AboutHighlight';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  const { lang } = useLanguage();
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <div dir={dir} className={lang === 'ar' ? 'font-arabic' : ''}>
      <Hero />
      <MenuPreview />
      <AboutHighlight />
      <Testimonials />
    </div>
  );
}
