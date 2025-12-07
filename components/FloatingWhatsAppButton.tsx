'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { buildWhatsAppBaseLink } from '@/lib/whatsapp';

export default function FloatingWhatsAppButton() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <a
      href={buildWhatsAppBaseLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-xl shadow-emerald-900/50 md:hidden"
    >
      <FaWhatsapp />
      <span>{t.common.whatsappCtaShort}</span>
    </a>
  );
}
