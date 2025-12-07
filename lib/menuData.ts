// lib/menuData.ts
// Simple, stable menu data structure used by the Menu page and MenuPreview.

export type CategoryId =
  | 'starters'
  | 'salads'
  | 'temaki'
  | 'hoso'
  | 'futo'
  | 'ura_tuna'
  | 'ura_crab'
  | 'ura_salmon'
  | 'ura_shrimp'
  | 'sashimi'
  | 'sushi'
  | 'duo_maki'
  | 'vegetarian'
  | 'regina'
  | 'creamy'
  | 'platters'
  | 'special_rolls'
  | 'boat_mini'
  | 'boat_big'
  | 'pizza'
  | 'kumpir'
  | 'pasta'
  | 'hot_plates'
  | 'drinks';

export type MenuCategory = {
  id: CategoryId;
  emoji: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
};

export type MenuItem = {
  id: string;
  categoryId: CategoryId;
  name: {
    en: string;
    ar: string;
  };
  description?: {
    en: string;
    ar: string;
  };
  price: string; // e.g. "5$"
  isSignature?: boolean;
};

const makeCategory = (
  id: CategoryId,
  emoji: string,
  nameEn: string,
  nameAr: string,
  descEn: string,
  descAr: string
): MenuCategory => ({
  id,
  emoji,
  name: { en: nameEn, ar: nameAr },
  description: { en: descEn, ar: descAr }
});

const makeItem = (args: {
  id: string;
  categoryId: CategoryId;
  nameEn: string;
  nameAr: string;
  price: string;
  descEn?: string;
  descAr?: string;
  isSignature?: boolean;
}): MenuItem => ({
  id: args.id,
  categoryId: args.categoryId,
  name: { en: args.nameEn, ar: args.nameAr },
  description:
    args.descEn || args.descAr
      ? {
          en: args.descEn ?? '',
          ar: args.descAr ?? ''
        }
      : undefined,
  price: args.price,
  isSignature: args.isSignature
});

export const menuCategories: MenuCategory[] = [
  makeCategory(
    'starters',
    '🥟',
    'Starters',
    'المقبلات',
    'Light bites to start your sushi journey.',
    'لقيمات خفيفة لتبدأ رحلتك مع السوشي.'
  ),
  makeCategory(
    'salads',
    '🥗',
    'Salads',
    'السلطات',
    'Fresh, colourful salads with seafood and greens.',
    'سلطات طازجة وغنية بالمأكولات البحرية والخضار.'
  ),
  makeCategory(
    'temaki',
    '🍣',
    'Temaki – 1 pc',
    'تيمّاكي – قطعة واحدة',
    'Hand-rolled cones filled with your favourite flavours.',
    'كون سوشي ملفوف باليد بحشوات متنوعة.'
  ),
  makeCategory(
    'hoso',
    '🍣',
    'Hoso Maki – 4 pcs',
    'هوسو ماكي – 4 قطع',
    'Classic thin rolls with simple fillings.',
    'رولات رفيعة بحشوات كلاسيكية.'
  ),
  makeCategory(
    'futo',
    '🍱',
    'Futo Maki – 4 pcs',
    'فوتو ماكي – 4 قطع',
    'Thick, satisfying rolls packed with flavour.',
    'رولات سميكة مليئة بالنكهات.'
  ),
  makeCategory(
    'ura_tuna',
    '🐟',
    'Uramaki Tuna – 4 pcs',
    'أوراماكي تونا – 4 قطع',
    'Inside-out rolls featuring tuna.',
    'رولات مقلوبة بحشوة التونا.'
  ),
  makeCategory(
    'ura_crab',
    '🦀',
    'Uramaki Crab – 4 pcs',
    'أوراماكي كراب – 4 قطع',
    'Inside-out rolls with crab and creative toppings.',
    'رولات مقلوبة بحشوة الكراب وتوبينغ مميز.'
  ),
  makeCategory(
    'ura_salmon',
    '🐠',
    'Uramaki Salmon – 4 pcs',
    'أوراماكي سلمون – 4 قطع',
    'Rich salmon rolls with different twists.',
    'رولات سلمون غنية بنكهات متعددة.'
  ),
  makeCategory(
    'ura_shrimp',
    '🦐',
    'Uramaki Shrimp – 4 pcs',
    'أوراماكي روبيان – 4 قطع',
    'Crispy and saucy shrimp creations.',
    'رولات روبيان مقرمشة مع صلصات مميزة.'
  ),
  makeCategory(
    'sashimi',
    '🍥',
    'Sashimi – 2 pcs',
    'ساشيمي – قطعتان',
    'Pure slices of fresh fish.',
    'شرائح نقية من السمك الطازج.'
  ),
  makeCategory(
    'sushi',
    '🍣',
    'Sushi – 2 pcs',
    'سوشي – قطعتان',
    'Nigiri sushi with fresh toppings.',
    'سوشي نيجيري مع توبينغ طازج.'
  ),
  makeCategory(
    'duo_maki',
    '🧡',
    'Duo Maki – 4 pcs',
    'ديو ماكي – 4 قطع',
    'Special roll with salmon, tuna and avocado.',
    'رول مميز يجمع بين السلمون والتونا والأفوكادو.'
  ),
  makeCategory(
    'vegetarian',
    '🥒',
    'Vegetarian Maki – 4 pcs',
    'ماكي نباتي – 4 قطع',
    'Fresh veggie rolls full of colour.',
    'رولات خضار طازجة وغنية بالألوان.'
  ),
  makeCategory(
    'regina',
    '👑',
    'Regina Special Maki – 4 pcs',
    'ريجينا سبيشل ماكي – 4 قطع',
    'Grilled salmon wrapped in avocado.',
    'سلمون مشوي ملفوف بالأفوكادو.'
  ),
  makeCategory(
    'creamy',
    '💮',
    'Creamy / Smoked / Salmon Crab',
    'كريمي / سموكد / سلمون كراب',
    'Rich, creamy special rolls.',
    'رولات خاصة بكريما غنية ونكهات مدخنة.'
  ),
  makeCategory(
    'platters',
    '🍱',
    'Platters',
    'بوكسات وبلاترز',
    'Perfect combinations to share.',
    'تشكيلات مثالية للمشاركة.'
  ),
  makeCategory(
    'special_rolls',
    '🔥',
    'Special Rolls',
    'رولز خاصة',
    'House specials with bold flavours.',
    'رولات خاصة بنكهات جريئة.'
  ),
  makeCategory(
    'boat_mini',
    '⛵',
    'Mini Boat',
    'ميني بوت',
    'A compact boat of mixed sushi.',
    'قارب صغير من السوشي المتنوع.'
  ),
  makeCategory(
    'boat_big',
    '🚤',
    'Big Boat',
    'بيغ بوت',
    'A big feast of 50 pcs.',
    'قارب كبير يضم 50 قطعة.'
  ),
  makeCategory(
    'pizza',
    '🍕',
    'Italian Pizza',
    'بيتزا إيطالية',
    'Crispy thin crust pizzas.',
    'بيتزا إيطالية بعجينة رفيعة ومقرمشة.'
  ),
  makeCategory(
    'kumpir',
    '🥔',
    'Kumpir Potato',
    'كمبير بطاطا',
    'Loaded baked potatoes.',
    'بطاطا مشوية محشوة بالكامل.'
  ),
  makeCategory(
    'pasta',
    '🍝',
    'Pasta',
    'باستا',
    'Comforting Italian pasta dishes.',
    'أطباق باستا إيطالية مريحة.'
  ),
  makeCategory(
    'hot_plates',
    '🍗',
    'Hot Plates',
    'أطباق ساخنة',
    'Chicken, burgers and hot dishes.',
    'دجاج، برغر وأطباق ساخنة متنوعة.'
  ),
  makeCategory(
    'drinks',
    '🥤',
    'Drinks',
    'المشروبات',
    'Soft drinks, juices, coffee and more.',
    'مشروبات غازية، عصائر، قهوة وغيرها.'
  )
];

// Just a representative subset of items.
// You can expand or adjust prices/text freely later.
export const menuItems: MenuItem[] = [
  // Starters
  makeItem({
    id: 'starters-edamame',
    categoryId: 'starters',
    nameEn: 'Edamame',
    nameAr: 'إدامامي',
    price: '5$'
  }),
  makeItem({
    id: 'starters-cheese-rolls',
    categoryId: 'starters',
    nameEn: 'Cheese Rolls',
    nameAr: 'روول جبنة',
    price: '4.6$'
  }),
  makeItem({
    id: 'starters-spring-rolls',
    categoryId: 'starters',
    nameEn: 'Spring Rolls',
    nameAr: 'سبرنغ رولز',
    price: '3.5$'
  }),

  // A few example salads
  makeItem({
    id: 'salads-crab',
    categoryId: 'salads',
    nameEn: 'Crab Salad',
    nameAr: 'سلطة كابوريا',
    price: '12$',
    descEn: 'Crab, avocado, mango, crispy topping',
    descAr: 'كابوريا مع أفوكادو ومانغو وكريسبي'
  }),
  makeItem({
    id: 'salads-salmon',
    categoryId: 'salads',
    nameEn: 'Salmon Salad',
    nameAr: 'سلطة سلمون',
    price: '16$'
  }),

  // Uramaki Crab (some signature items)
  makeItem({
    id: 'ura-crab-crispy-crazy',
    categoryId: 'ura_crab',
    nameEn: 'Crispy Crazy',
    nameAr: 'كريسبي كريزي',
    price: '4$',
    isSignature: true
  }),
  makeItem({
    id: 'ura-crab-fruity-crab',
    categoryId: 'ura_crab',
    nameEn: 'Fruity Crab',
    nameAr: 'فروتي كراب',
    price: '5$'
  }),

  // Uramaki Salmon
  makeItem({
    id: 'ura-salmon-volcano',
    categoryId: 'ura_salmon',
    nameEn: 'Volcano Salmon',
    nameAr: 'فولكينو سلمون',
    price: '8$',
    isSignature: true
  }),
  makeItem({
    id: 'ura-salmon-philadelphia',
    categoryId: 'ura_salmon',
    nameEn: 'Salmon Philadelphia',
    nameAr: 'سلمون فيلادلفيا',
    price: '6$'
  }),

  // Special rolls
  makeItem({
    id: 'special-dynamite',
    categoryId: 'special_rolls',
    nameEn: 'Dynamite Shrimp Roll – 8 pcs',
    nameAr: 'داينامايت روبيان رول – 8 قطع',
    price: '12$'
  }),
  makeItem({
    id: 'special-dragon',
    categoryId: 'special_rolls',
    nameEn: 'Dragon Roll – 8 pcs',
    nameAr: 'دراجون رول – 8 قطع',
    price: '10$'
  }),

  // Boats
  makeItem({
    id: 'boat-mini',
    categoryId: 'boat_mini',
    nameEn: 'Mini Boat – 25 pcs',
    nameAr: 'ميني بوت – 25 قطعة',
    price: '32$'
  }),
  makeItem({
    id: 'boat-big',
    categoryId: 'boat_big',
    nameEn: 'Big Boat – 50 pcs',
    nameAr: 'بيغ بوت – 50 قطعة',
    price: '60$'
  }),

  // A couple of hot plates
  makeItem({
    id: 'hot-chicken-scallop',
    categoryId: 'hot_plates',
    nameEn: 'Chicken Scallop (with fries & salad)',
    nameAr: 'سكالوب دجاج (مع بطاطا وسلطة)',
    price: '11$'
  }),
  makeItem({
    id: 'hot-grilled-salmon',
    categoryId: 'hot_plates',
    nameEn: 'Grilled Salmon (with vegetables)',
    nameAr: 'سلمون مشوي (مع خضار)',
    price: '25$'
  }),

  // Drinks (just examples)
  makeItem({
    id: 'drinks-water-big',
    categoryId: 'drinks',
    nameEn: 'Water (Big)',
    nameAr: 'مياه كبيرة',
    price: '1.1$'
  }),
  makeItem({
    id: 'drinks-pepsi',
    categoryId: 'drinks',
    nameEn: 'Pepsi',
    nameAr: 'بيبسي',
    price: '1.75$'
  }),
  makeItem({
    id: 'drinks-espresso',
    categoryId: 'drinks',
    nameEn: 'Espresso',
    nameAr: 'إسبريسو',
    price: '1.5$'
  })
];

// Items we highlight on the homepage in MenuPreview
export const signatureItems: MenuItem[] = menuItems.filter(
  (item) => item.isSignature
);
