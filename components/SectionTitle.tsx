'use client';

import React from 'react';

type Props = {
  eyebrow: string;
  title: string;
  align?: 'left' | 'right' | 'center';
};

export default function SectionTitle({ eyebrow, title, align = 'left' }: Props) {
  const alignment =
    align === 'center'
      ? 'text-center'
      : align === 'right'
      ? 'text-right'
      : 'text-left';

  return (
    <div className={alignment}>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-rose-300">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-lg font-semibold text-slate-50 sm:text-xl">
        {title}
      </h2>
    </div>
  );
}
