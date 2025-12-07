'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-amber-400 shadow-2xl shadow-rose-900/60">
              <span className="text-2xl font-black tracking-tight text-white">
                SH
              </span>
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
