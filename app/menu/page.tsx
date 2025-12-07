// app/menu/page.tsx
'use client';

import SectionTitle from '@/components/SectionTitle';
import MenuSection from '@/components/menu/MenuSection';
import menuItems, { type CategoryKey, type MenuItem } from '@/lib/menuData';
import { useLanguage } from '@/lib/LanguageContext';

type CategoryMeta = {
  key: CategoryKey;
  emoji: string;
  titleEn: string;
  titleAr: string;
};

const CATEGORIES: CategoryMeta[] = [
  {
    key: 'starters',
    emoji: '🥟',
    titleEn: 'Starters',
    titleAr: 'المقبلات'
  },
  {
    key: 'salads',
    emoji: '🥗',
    titleEn: 'Salads',
    titleAr: 'السلطات'
  },
  {
    key: 'temaki',
    emoji: '🍣',
    titleEn: 'Temaki – 1 pc',
    titleAr: 'تيمّاكي – قطعة'
  },
  {
    key: 'hoso',
    emoji: '🍣',
    titleEn: 'Hoso Maki – 4 pcs',
    titleAr: 'هوسو ماكي – 4 قطع'
  },
  {
    key: 'futo',
    emoji: '🍱',
    titleEn: 'Futo Maki – 4 pcs',
    titleAr: 'فوتو ماكي – 4 قطع'
  },
  {
    key: 'ura_tuna',
    emoji: '🐟',
    titleEn: 'Uramaki Tuna – 4 pcs',
    titleAr: 'أوراماكي تونا – 4 قطع'
  },
  {
    key: 'ura_crab',
    emoji: '🦀',
    titleEn: 'Uramaki Crab – 4 pcs',
    titleAr: 'أوراماكي كراب – 4 قطع'
  },
  {
    key: 'ura_salmon',
    emoji: '🐠',
    titleEn: 'Uramaki Salmon – 4 pcs',
    titleAr: 'أوراماكي سلمون – 4 قطع'
  },
  {
    key: 'ura_shrimp',
    emoji: '🦐',
    titleEn: 'Uramaki Shrimp – 4 pcs',
    titleAr: 'أوراماكي روبيان – 4 قطع'
  },
  {
    key: 'sashimi',
    emoji: '🍥',
    titleEn: 'Sashimi – 2 pcs',
    titleAr: 'ساشيمي – قطعتان'
  },
  {
    key: 'sushi',
    emoji: '🍣',
    titleEn: 'Sushi – 2 pcs',
    titleAr: 'سوشي – قطعتان'
  },
  {
    key: 'duo_maki',
    emoji: '🧡',
    titleEn: 'Duo Maki – 4 pcs',
    titleAr: 'ديو ماكي – 4 قطع'
  },
  {
    key: 'vegetarian',
    emoji: '🥒',
    titleEn: 'Vegetarian Maki – 4 pcs',
    titleAr: 'فوتو ماكي نباتي – 4 قطع'
  },
  {
    key: 'regina',
    emoji: '👑',
    titleEn: 'Regina Special Maki – 4 pcs',
    titleAr: 'ريجينا سبيشل ماكي – 4 قطع'
  },
  {
    key: 'creamy',
    emoji: '💮',
    titleEn: 'Creamy / Smoked / Salmon Crab',
    titleAr: 'كريمي / سموكد / سلمون كراب'
  },
  {
    key: 'platters',
    emoji: '🍱',
    titleEn: 'Platters',
    titleAr: 'بوكسات وبلاترز'
  },
  {
    key: 'special_rolls',
    emoji: '🔥',
    titleEn: 'Special Rolls',
    titleAr: 'رولز خاصة'
  },
  {
    key: 'boat_mini',
    emoji: '⛵',
    titleEn: 'Mini Boat',
    titleAr: 'ميني بوت'
  },
  {
    key: 'boat_big',
    emoji: '🚤',
    titleEn: 'Big Boat',
    titleAr: 'بيغ بوت'
  },
  {
    key: 'pizza',
    emoji: '🍕',
    titleEn: 'Italian Pizza',
    titleAr: 'بيتزا إيطالية'
  },
  {
    key: 'kumpir',
    emoji: '🥔',
    titleEn: 'Kumpir Potato',
    titleAr: 'كمبير بطاطا'
  },
  {
    key: 'pasta',
    emoji: '🍝',
    titleEn: 'Pasta',
    titleAr: 'باستا'
  },
  {
    key: 'hot_plates',
    emoji: '🍗',
    titleEn: 'Hot Plates',
    titleAr: 'أطباق ساخنة'
  },
  {
    key: 'drinks',
    emoji: '🥤',
    titleEn: 'Drinks',
    titleAr: 'المشروبات'
  }
];

function groupItemsByCategory(items: MenuItem[]): Record<CategoryKey, MenuItem[]> {
  const grouped: Record<CategoryKey, MenuItem[]> = {} as Record<
    CategoryKey,
    MenuItem[]
  >;
  for (const item of items) {
    if (!grouped[item.categoryKey]) {
      grouped[item.categoryKey] = [];
    }
    grouped[item.categoryKey].push(item);
  }
  return grouped;
}

export default function MenuPage() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const grouped = groupItemsByCategory(menuItems);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-28 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow={isArabic ? 'منيو سوشي هايواي' : 'Sushi Highway menu'}
          title={
            isArabic
              ? 'اكتشف تشكيلتنا من السوشي والأطباق الساخنة'
              : 'Explore our sushi, platters and hot dishes'
          }
          align={isArabic ? 'right' : 'left'}
        />

        <p className="mt-2 text-sm text-slate-300">
          {isArabic
            ? 'الأسعار بالدولار الأميركي (أو ما يعادلها). يمكنكم الطلب للتناول داخل المطعم أو للتوصيل ضمن مدينة صور.'
            : 'Prices are in USD (or local equivalent). You can dine in or order delivery within Sour (Tyre).'}
        </p>

        <div className="mt-6 space-y-3">
          {CATEGORIES.map((cat) => {
            const items = grouped[cat.key] ?? [];
            if (!items.length) return null;

            return (
              <MenuSection
                key={cat.key}
                emoji={cat.emoji}
                titleEn={cat.titleEn}
                titleAr={cat.titleAr}
                items={items}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
