import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import { RESTAURANT_NAME, SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: `${RESTAURANT_NAME} · Fresh Sushi in Beirut`,
  description:
    'Sushi Highway serves fresh sushi, rolls and Japanese-inspired dishes in Beirut, Lebanon. Dine in, takeaway or order via WhatsApp.',
  openGraph: {
    title: `${RESTAURANT_NAME} · Fresh Sushi in Beirut`,
    description:
      'Fresh rolls, bold flavours and fast service. Welcome to Sushi Highway, Beirut.',
    url: SITE_URL,
    siteName: RESTAURANT_NAME,
    locale: 'en_LB',
    type: 'website'
  },
  metadataBase: new URL(SITE_URL)
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <LanguageProvider>
          <SplashScreen />
          <Header />
          <div className="pt-24">{children}</div>
          <FloatingWhatsAppButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
