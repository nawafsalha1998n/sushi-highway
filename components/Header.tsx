'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import {
  RESTAURANT_NAME,
  WHATSAPP_LINK,
  INSTAGRAM_URL
} from '@/lib/config';
import LanguageToggle from './LanguageToggle';

const navLinks = [
  { href: '/', key: 'home' as const },
  { href: '/menu', key: 'menu' as const },
  { href: '/about', key: 'about' as const },
  { href: '/contact', key: 'contact' as const }
];

export default function Header() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-amber-400 shadow-lg shadow-rose-900/40">
            <span className="text-xs font-bold tracking-tight text-white">
              SH
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold sm:text-base">
              {RESTAURANT_NAME}
            </span>
            <span className="hidden text-[11px] text-slate-400 sm:block">
              {t.brandTagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? 'text-rose-300'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {t.nav[link.key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center justify-center rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white shadow-md shadow-emerald-800/40 transition hover:bg-emerald-400 sm:inline-flex"
          >
            <FaWhatsapp className="mr-1.5" />
            <span>WhatsApp</span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-amber-400 px-3 py-1 text-xs font-semibold text-white shadow-md shadow-pink-800/40 transition hover:from-pink-400 hover:to-amber-300 sm:inline-flex"
          >
            <FaInstagram className="mr-1.5" />
            <span>Instagram</span>
          </a>
          <LanguageToggle />
        </div>
      </div>

      {/* Mobile nav */}
      <div className="border-t border-slate-800 md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
          <nav className="flex items-center gap-4 text-xs">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium ${
                    active ? 'text-rose-300' : 'text-slate-200'
                  }`}
                >
                  {t.nav[link.key]}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-pink-500 px-2.5 py-1 text-[11px] text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
