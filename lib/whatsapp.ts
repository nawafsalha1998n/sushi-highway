// lib/whatsapp.ts

import { RESTAURANT_NAME, WHATSAPP_NUMBER } from './config';

// نحول الرقم لصيغة مناسبة لرابط wa.me
function normalizeWhatsAppNumber(raw: string): string {
  let n = raw.trim();
  if (n.startsWith('+')) n = n.slice(1);
  if (n.startsWith('00')) n = n.slice(2);
  return n;
}

export function getWhatsAppBaseUrl() {
  const normalized = normalizeWhatsAppNumber(WHATSAPP_NUMBER);
  return `https://wa.me/${normalized}`;
}

// رابط واتساب عام بدون رسالة جاهزة
export function buildWhatsAppLink() {
  return getWhatsAppBaseUrl();
}

// رابط واتساب مع رسالة جاهزة لطلب عام
export function buildMainOrderWhatsAppLink(lang: 'en' | 'ar' = 'en') {
  const base = getWhatsAppBaseUrl();
  const text =
    lang === 'ar'
      ? `مرحباً، أود الاستفسار أو الطلب من مطعم ${RESTAURANT_NAME}.`
      : `Hello, I would like to ask or order from ${RESTAURANT_NAME}.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

// رابط واتساب مع رسالة طلب لطبق معيّن من المنيو
export function buildItemOrderWhatsAppLink(
  itemName: string,
  lang: 'en' | 'ar' = 'en'
) {
  const base = getWhatsAppBaseUrl();
  const text =
    lang === 'ar'
      ? `مرحباً، أود طلب هذا الصنف من منيو ${RESTAURANT_NAME}:\n${itemName}`
      : `Hello, I would like to order this item from ${RESTAURANT_NAME} menu:\n${itemName}`;
  return `${base}?text=${encodeURIComponent(text)}`;
}
