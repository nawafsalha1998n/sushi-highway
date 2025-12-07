'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { RESTAURANT_NAME } from '@/lib/config';
import { useLanguage } from '@/lib/LanguageContext';

type SplashScreenProps = {
  minimumDurationMs?: number;
};

export default function SplashScreen({ minimumDurationMs = 2000 }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, minimumDurationMs);
    return () => clearTimeout(timer);
  }, [minimumDurationMs]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <div className="relative flex flex-col items-center gap-4">
        {/* حلقات خلفية بسيطة */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-48 w-48 animate-ping rounded-full bg-rose-500/10" />
          <div className="absolute h-32 w-32 rounded-full bg-slate-900/80 shadow-2xl" />
        </div>

        {/* اللوغو */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="relative h-20 w-20 overflow-hidden rounded-3xl bg-slate-900 shadow-xl ring-2 ring-rose-500/50">
            <Image
              src="/sushi-highway-logo.png"
              alt={`${RESTAURANT_NAME} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">
              SUSHI
            </p>
            <h1 className="text-xl font-bold tracking-tight text-slate-50">
              {RESTAURANT_NAME}
            </h1>
            <p className="mt-1 text-xs text-slate-400">
              {isArabic
                ? 'تحضير تجربة سوشي لا تُنسى في صور...'
                : 'Preparing an unforgettable sushi experience in Sour...'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
