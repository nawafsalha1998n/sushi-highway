// app/page.tsx

import Hero from '@/components/Hero';
import MenuPreview from '@/components/MenuPreview';
import AboutHighlight from '@/components/AboutHighlight';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <Hero />

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-6 lg:px-8">
        <MenuPreview />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 lg:px-8">
        <AboutHighlight />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 lg:px-8">
        <Testimonials />
      </section>
    </main>
  );
}
