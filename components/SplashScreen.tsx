'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { RESTAURANT_NAME } from '@/lib/config';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-rose-400/60 bg-slate-900/80 shadow-2xl shadow-rose-900/60">
              <Image
                src="/logo.PNG"
                alt="Sushi Highway logo"
                width={80}
                height={80}
                className="object-contain p-1.5"
                priority
              />
            </div>
            <p className="text-sm font-semibold text-slate-50">
              {RESTAURANT_NAME}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Loading your sushi experience…
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
