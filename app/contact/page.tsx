'use client';

import React, { FormEvent, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import {
  RESTAURANT_ADDRESS,
  WHATSAPP_NUMBER_RAW
} from '@/lib/config';
import { buildWhatsAppBaseLink } from '@/lib/whatsapp';

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <div
      className={lang === 'ar' ? 'font-arabic bg-slate-950' : 'bg-slate-950'}
      dir={dir}
    >
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:pt-28">
        <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-rose-300">
            {t.contactPage.title}
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            {t.contactPage.subtitle}
          </h1>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-100 shadow-soft">
            <h2 className="mb-3 text-base font-semibold text-slate-50">
              {t.contactPage.formTitle}
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-200">
                  {t.contactPage.formNameLabel}
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none focus:border-rose-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-200">
                  {t.contactPage.formPhoneLabel}
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none focus:border-rose-400"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-200">
                  {t.contactPage.formMessageLabel}
                </label>
                <textarea
                  className="h-28 w-full resize-none rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none focus:border-rose-400"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              {status === 'error' && (
                <p className="text-[11px] text-rose-300">
                  {t.contactPage.formErrorRequired}
                </p>
              )}
              {status === 'success' && (
                <p className="text-[11px] text-emerald-300">
                  {t.contactPage.formSuccess}
                </p>
              )}
              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-rose-500 px-5 py-2 text-xs font-semibold text-white shadow-soft hover:bg-rose-400"
              >
                {t.contactPage.formSubmit}
              </button>
            </form>
          </section>

          <section className="space-y-4 text-sm text-slate-100">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-soft">
              <h2 className="text-base font-semibold text-slate-50">
                {t.contactPage.addressLabel}
              </h2>
              <p className="mt-2 text-slate-200">
                {t.contactPage.addressValue}
                <br />
                {RESTAURANT_ADDRESS}
              </p>
              <p className="mt-3 text-xs text-slate-300">
                {t.contactPage.hoursLabel}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-soft">
              <h2 className="text-base font-semibold text-slate-50">
                {t.contactPage.mapTitle}
              </h2>
              <div className="mt-3 h-40 overflow-hidden rounded-xl border border-slate-800">
                {/* Placeholder Google Maps iframe for Beirut */}
                <iframe
                  title="Sushi Highway location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.2177!2d35.501!3d33.8938"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-200 shadow-soft">
              <p>
                WhatsApp:{' '}
                <span className="font-mono">{WHATSAPP_NUMBER_RAW}</span>
              </p>
              <p className="mt-1">
                <a
                  href={buildWhatsAppBaseLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-rose-200 hover:text-rose-100"
                >
                  {t.common.orderOnWhatsApp}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
