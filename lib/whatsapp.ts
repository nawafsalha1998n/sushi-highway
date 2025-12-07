import type { Lang } from './translations';
import { WHATSAPP_NUMBER_E164 } from './config';

export function buildWhatsAppBaseLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER_E164}`;
}

export function buildWhatsAppOrderLink(
  itemName: string,
  lang: Lang
): string {
  const base = buildWhatsAppBaseLink();
  const message =
    lang === 'ar'
      ? `مرحباً، أود طلب: ${itemName} من موقع سوشي هاي واي.`
      : `Hi, I would like to order: ${itemName} from the Sushi Highway website.`;
  const encoded = encodeURIComponent(message);
  return `${base}?text=${encoded}`;
}
