export type MenuCategory = 'starters' | 'rolls' | 'nigiri' | 'sashimi' | 'combos' | 'specials';

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  price: string;
  isSignature?: boolean;
};

export const menuCategories: {
  id: MenuCategory;
  label: { en: string; ar: string };
}[] = [
  { id: 'starters', label: { en: 'Starters', ar: 'مقبلات' } },
  { id: 'rolls', label: { en: 'Rolls', ar: 'لفائف' } },
  { id: 'nigiri', label: { en: 'Nigiri', ar: 'نيغيري' } },
  { id: 'sashimi', label: { en: 'Sashimi', ar: 'ساشيمي' } },
  { id: 'combos', label: { en: 'Combo Boxes', ar: 'بوكسات' } },
  { id: 'specials', label: { en: 'Specials', ar: 'أطباق خاصة' } }
];

const menuItems: MenuItem[] = [
  {
    id: 'edamame',
    category: 'starters',
    name: {
      en: 'Edamame',
      ar: 'إدامامي'
    },
    description: {
      en: 'Steamed soybeans with sea salt.',
      ar: 'حبّات فول الصويا مطهوة على البخار مع رشة ملح بحري.'
    },
    price: '$5.0',
    isSignature: true
  },
  {
    id: 'crispy-shrimp-bites',
    category: 'starters',
    name: {
      en: 'Crispy Shrimp Bites',
      ar: 'لقيمات روبيان مقرمش'
    },
    description: {
      en: 'Crispy shrimp with spicy mayo.',
      ar: 'روبيان مقرمش مع صوص مايونيز حار خفيف.'
    },
    price: '$7.5',
    isSignature: true
  },
  {
    id: 'highway-salmon-roll',
    category: 'rolls',
    name: {
      en: 'Highway Salmon Roll',
      ar: 'هاي واي سالمون رول'
    },
    description: {
      en: 'Fresh salmon, avocado and cucumber topped with sesame.',
      ar: 'سالمون طازج مع أفوكادو وخيار مغطّى بحبوب السمسم.'
    },
    price: '$12.0',
    isSignature: true
  },
  {
    id: 'spicy-tuna-roll',
    category: 'rolls',
    name: {
      en: 'Spicy Tuna Roll',
      ar: 'سبايسي تونا رول'
    },
    description: {
      en: 'Spicy tuna mix with cucumber and chili flakes.',
      ar: 'تونة حارة مع خيار ورشّة فلفل مجروش.'
    },
    price: '$11.0',
    isSignature: true
  },
  {
    id: 'california-roll',
    category: 'rolls',
    name: {
      en: 'California Roll',
      ar: 'كاليفورنيا رول'
    },
    description: {
      en: 'Crab, avocado and cucumber rolled in sesame seeds.',
      ar: 'كابوريا مع أفوكادو وخيار ملفوفة بحبوب السمسم.'
    },
    price: '$9.5',
    isSignature: false
  },
  {
    id: 'dragon-roll',
    category: 'rolls',
    name: {
      en: 'Dragon Highway Roll',
      ar: 'دراجون هاي واي رول'
    },
    description: {
      en: 'Crispy shrimp, cucumber, topped with avocado and eel sauce.',
      ar: 'روبيان مقرمش وخيار مع طبقة أفوكادو وصوص إيل حلو.'
    },
    price: '$13.5',
    isSignature: true
  },
  {
    id: 'salmon-nigiri',
    category: 'nigiri',
    name: {
      en: 'Salmon Nigiri',
      ar: 'سالمون نيغيري'
    },
    description: {
      en: 'Slices of salmon over seasoned rice.',
      ar: 'شرائح سالمون فوق رز متبّل على الطريقة اليابانية.'
    },
    price: '$6.0',
    isSignature: false
  },
  {
    id: 'tuna-sashimi',
    category: 'sashimi',
    name: {
      en: 'Tuna Sashimi',
      ar: 'تونا ساشيمي'
    },
    description: {
      en: 'Five slices of premium tuna sashimi.',
      ar: 'خمس شرائح من تونة ساشيمي بجودة عالية.'
    },
    price: '$10.0',
    isSignature: false
  },
  {
    id: 'highway-combo-1',
    category: 'combos',
    name: {
      en: 'Highway Combo (2 Persons)',
      ar: 'هاي واي كومبو (لشخصين)'
    },
    description: {
      en: 'Assorted 24 pieces of rolls and nigiri, ideal for sharing.',
      ar: 'تشكيلة 24 قطعة من اللفائف والنيغيري، مثالية للمشاركة.'
    },
    price: '$32.0',
    isSignature: true
  },
  {
    id: 'family-highway-box',
    category: 'combos',
    name: {
      en: 'Family Highway Box',
      ar: 'بوكس هاي واي العائلي'
    },
    description: {
      en: 'Large sushi box for 4–5 people with mixed favourites.',
      ar: 'بوكس سوشي كبير لـ 4–5 أشخاص مع تشكيلة من أشهر الأطباق.'
    },
    price: '$58.0',
    isSignature: true
  },
  {
    id: 'volcano-special',
    category: 'specials',
    name: {
      en: 'Volcano Highway Special',
      ar: 'فولكانو هاي واي سبشل'
    },
    description: {
      en: 'Baked roll with spicy crab, salmon and creamy sauce.',
      ar: 'رول مخبوز مع كابوريا حارة، سالمون، وصوص كريمي غني.'
    },
    price: '$15.0',
    isSignature: true
  }
];

export default menuItems;
