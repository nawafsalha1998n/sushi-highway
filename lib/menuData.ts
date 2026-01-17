// lib/menuData.ts
// Full Sushi Highway menu data with categories and items.
// You can edit prices/names here لاحقاً بكل سهولة.

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
  price: string;
  description?: {
    en: string;
    ar: string;
  };
  subSection?: string; // for Drinks groups etc (e.g. "Beverages", "Fresh Juice")
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
  nameAr?: string;
  price: string;
  descEn?: string;
  descAr?: string;
  subSection?: string;
  isSignature?: boolean;
}): MenuItem => ({
  id: args.id,
  categoryId: args.categoryId,
  name: {
    en: args.nameEn,
    ar: args.nameAr ?? args.nameEn // مؤقتاً نخلي العربي نفس الإنجليزي لو ما في ترجمة
  },
  price: args.price,
  description:
    args.descEn || args.descAr
      ? {
          en: args.descEn ?? '',
          ar: args.descAr ?? args.descEn ?? ''
        }
      : undefined,
  subSection: args.subSection,
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
    'Fresh and colourful salads.',
    'سلطات طازجة وغنية بالنكهات.'
  ),
  makeCategory(
    'temaki',
    '🍣',
    'Temaki – 1 pc',
    'تيمّاكي – قطعة واحدة',
    'Hand-rolled sushi cones.',
    'كون سوشي ملفوف باليد.'
  ),
  makeCategory(
    'hoso',
    '🍣',
    'Hoso Maki – 4 pcs',
    'هوسو ماكي – 4 قطع',
    'Thin rolls with classic fillings.',
    'رولات رفيعة بحشوات كلاسيكية.'
  ),
  makeCategory(
    'futo',
    '🍱',
    'Futo Maki – 4 pcs',
    'فوتو ماكي – 4 قطع',
    'Thick, satisfying rolls.',
    'رولات سميكة ومشبعة.'
  ),
  makeCategory(
    'ura_tuna',
    '🐟',
    'Uramaki Tuna – 4 pcs',
    'أوراماكي تونا – 4 قطع',
    'Inside-out rolls with tuna.',
    'رولات مقلوبة بحشوة التونا.'
  ),
  makeCategory(
    'ura_crab',
    '🦀',
    'Uramaki Crab – 4 pcs',
    'أوراماكي كراب – 4 قطع',
    'Inside-out rolls with crab.',
    'رولات مقلوبة بحشوة الكراب.'
  ),
  makeCategory(
    'ura_salmon',
    '🐠',
    'Uramaki Salmon – 4 pcs',
    'أوراماكي سلمون – 4 قطع',
    'Salmon rolls with different twists.',
    'رولات سلمون بنكهات متعددة.'
  ),
  makeCategory(
    'ura_shrimp',
    '🦐',
    'Uramaki Shrimp – 4 pcs',
    'أوراماكي روبيان – 4 قطع',
    'Shrimp rolls, crispy and saucy.',
    'رولات روبيان مقرمشة ولذيذة.'
  ),
  makeCategory(
    'sashimi',
    '🍥',
    'Sashimi – 2 pcs',
    'ساشيمي – قطعتان',
    'Pure slices of fresh fish.',
    'شرائح سمك طازج بدون رز.'
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
    'Special roll combining salmon, tuna and avocado.',
    'رول مميز يجمع السلمون والتونا والأفوكادو.'
  ),
  makeCategory(
    'vegetarian',
    '🥒',
    'Vegetarian Maki – 4 pcs',
    'ماكي نباتي – 4 قطع',
    'Colourful veggie rolls.',
    'رولات خضار طازجة.'
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
    'Creamy / Smoked / Salmon Crab Maki',
    'كريمي / سموكد / سلمون كراب ماكي',
    'Rich creamy and smoked special rolls.',
    'رولات خاصة بنكهات كريمية ومدخنة.'
  ),
  makeCategory(
    'platters',
    '🍱',
    'Platters',
    'بلاترز وتشكيلات',
    'Mixed sushi platters to share.',
    'تشكيلات سوشي مثالية للمشاركة.'
  ),
  makeCategory(
    'special_rolls',
    '🔥',
    'Special Rolls',
    'رولز خاصة',
    'House special creative rolls.',
    'رولات مميزة من ابتكار المطعم.'
  ),
  makeCategory(
    'boat_mini',
    '⛵',
    'Mini Boat – 25 pcs',
    'ميني بوت – 25 قطعة',
    'A compact sushi boat.',
    'قارب سوشي صغير متنوع.'
  ),
  makeCategory(
    'boat_big',
    '🚤',
    'Big Boat – 50 pcs',
    'بيغ بوت – 50 قطعة',
    'A big feast of 50 pieces.',
    'قارب كبير يضم 50 قطعة سوشي متنوعة.'
  ),
  makeCategory(
    'pizza',
    '🍕',
    'Italian Pizza',
    'بيتزا إيطالية',
    'Thin crust Italian-style pizza.',
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
    'Comforting pasta dishes.',
    'أطباق باستا لذيذة.'
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
    'Soft drinks, juices, shakes, mojitos and coffee.',
    'مشروبات غازية، عصائر، ميلكشيك، سموذي، موهيتو ومشروبات ساخنة.'
  )
];

export const menuItems: MenuItem[] = [
  // STARTERS
  makeItem({
    id: 'starters-edamame',
    categoryId: 'starters',
    nameEn: 'Edamame',
    price: '5$'
  }),
  makeItem({
    id: 'starters-cheese-rolls',
    categoryId: 'starters',
    nameEn: 'Cheese Rolls',
    price: '4.6$'
  }),
  makeItem({
    id: 'starters-spring-rolls',
    categoryId: 'starters',
    nameEn: 'Spring Rolls',
    price: '3.5$'
  }),

  // SALADS (Removed: Greek Salad, Lebanese Salad)
  makeItem({
    id: 'salads-crab',
    categoryId: 'salads',
    nameEn: 'Crab Salad',
    price: '12$',
    descEn: 'Shrimp 180g, avocado, mango, crispy topping'
  }),
  makeItem({
    id: 'salads-salmon',
    categoryId: 'salads',
    nameEn: 'Salmon Salad',
    price: '16$',
    descEn: 'Salmon 180g, avocado, mango, crispy topping'
  }),
  makeItem({
    id: 'salads-shrimp',
    categoryId: 'salads',
    nameEn: 'Shrimp Salad',
    price: '15$',
    descEn: 'Shrimp 180g, avocado, mango, crispy topping'
  }),
  makeItem({
    id: 'salads-tuna',
    categoryId: 'salads',
    nameEn: 'Tuna Salad',
    price: '16$',
    descEn: 'Tuna 180g, avocado, mango, crispy topping'
  }),
  makeItem({
    id: 'salads-mixed-seafood',
    categoryId: 'salads',
    nameEn: 'Mixed Sea Food Salad',
    price: '16$',
    descEn: 'Crab, salmon, tuna, shrimp mix'
  }),

  // TEMAKI – 1 PC (Removed: Hawaiian ONLY - kept California)
  makeItem({
    id: 'temaki-tuna',
    categoryId: 'temaki',
    nameEn: 'Tuna',
    price: '6$'
  }),
  makeItem({
    id: 'temaki-salmon',
    categoryId: 'temaki',
    nameEn: 'Salmon',
    price: '6$'
  }),
  makeItem({
    id: 'temaki-crab',
    categoryId: 'temaki',
    nameEn: 'Crab',
    price: '4$'
  }),
  makeItem({
    id: 'temaki-shrimp',
    categoryId: 'temaki',
    nameEn: 'Shrimp',
    price: '4$'
  }),
  makeItem({
    id: 'temaki-california',
    categoryId: 'temaki',
    nameEn: 'California',
    price: '4$'
  }),

  // HOSO MAKI – 4 PCS
  makeItem({
    id: 'hoso-salmon',
    categoryId: 'hoso',
    nameEn: 'Salmon',
    price: '5$'
  }),
  makeItem({
    id: 'hoso-crab',
    categoryId: 'hoso',
    nameEn: 'Crab',
    price: '4$'
  }),
  makeItem({
    id: 'hoso-tuna',
    categoryId: 'hoso',
    nameEn: 'Tuna',
    price: '4.5$'
  }),
  makeItem({
    id: 'hoso-avocado',
    categoryId: 'hoso',
    nameEn: 'Avocado',
    price: '4$'
  }),
  makeItem({
    id: 'hoso-mango',
    categoryId: 'hoso',
    nameEn: 'Mango',
    price: '4$'
  }),
  makeItem({
    id: 'hoso-cucumber',
    categoryId: 'hoso',
    nameEn: 'Cucumber',
    price: '3.5$'
  }),
  makeItem({
    id: 'hoso-shrimp',
    categoryId: 'hoso',
    nameEn: 'Shrimp',
    price: '3.5$'
  }),

  // FUTO MAKI – 4 PCS (Removed: Hawaiian Futo Maki ONLY - kept Mixed Futo Maki)
  makeItem({
    id: 'futo-mixed',
    categoryId: 'futo',
    nameEn: 'Mixed Futo Maki',
    price: '7$'
  }),

  // URAMAKI TUNA – 4 PCS
  makeItem({
    id: 'ura-tuna-volcano',
    categoryId: 'ura_tuna',
    nameEn: 'Volcano Tuna',
    price: '7$'
  }),
  makeItem({
    id: 'ura-tuna-wrap',
    categoryId: 'ura_tuna',
    nameEn: 'Tuna Wrap',
    price: '7$'
  }),

  // URAMAKI CRAB – 4 PCS
  makeItem({
    id: 'ura-crab-california',
    categoryId: 'ura_crab',
    nameEn: 'California',
    price: '3$'
  }),
  makeItem({
    id: 'ura-crab-california-ebiko',
    categoryId: 'ura_crab',
    nameEn: 'California Ebiko',
    price: '5$'
  }),
  makeItem({
    id: 'ura-crab-crispy-california',
    categoryId: 'ura_crab',
    nameEn: 'Crispy California',
    price: '3$'
  }),
  makeItem({
    id: 'ura-crab-crispy-crazy',
    categoryId: 'ura_crab',
    nameEn: 'Crispy Crazy',
    price: '4$',
    isSignature: true
  }),
  makeItem({
    id: 'ura-crab-crunchy-crab',
    categoryId: 'ura_crab',
    nameEn: 'Crunchy Crab',
    price: '3.5$'
  }),
  makeItem({
    id: 'ura-crab-spicy-crab',
    categoryId: 'ura_crab',
    nameEn: 'Spicy Crab',
    price: '4$'
  }),
  makeItem({
    id: 'ura-crab-fruity-crab',
    categoryId: 'ura_crab',
    nameEn: 'Fruity Crab',
    price: '5$'
  }),
  makeItem({
    id: 'ura-crab-rainbow-kani',
    categoryId: 'ura_crab',
    nameEn: 'Rainbow Kani',
    price: '5$'
  }),
  makeItem({
    id: 'ura-crab-crab-avocado-wrap',
    categoryId: 'ura_crab',
    nameEn: 'Crab Avocado Wrap',
    price: '4$'
  }),

  // URAMAKI SALMON – 4 PCS
  makeItem({
    id: 'ura-salmon-volcano',
    categoryId: 'ura_salmon',
    nameEn: 'Volcano Salmon',
    price: '8$',
    isSignature: true
  }),
  makeItem({
    id: 'ura-salmon-ebiko',
    categoryId: 'ura_salmon',
    nameEn: 'Salmon Ebiko',
    price: '7$'
  }),
  makeItem({
    id: 'ura-salmon-fruity',
    categoryId: 'ura_salmon',
    nameEn: 'Fruity Salmon',
    price: '6$'
  }),
  makeItem({
    id: 'ura-salmon-wrap',
    categoryId: 'ura_salmon',
    nameEn: 'Salmon Wrap',
    price: '6$'
  }),
  makeItem({
    id: 'ura-salmon-avocado',
    categoryId: 'ura_salmon',
    nameEn: 'Salmon Avocado',
    price: '4$'
  }),
  makeItem({
    id: 'ura-salmon-mango',
    categoryId: 'ura_salmon',
    nameEn: 'Salmon Mango',
    price: '6$'
  }),
  makeItem({
    id: 'ura-salmon-philadelphia',
    categoryId: 'ura_salmon',
    nameEn: 'Salmon Philadelphia',
    price: '6$'
  }),

  // URAMAKI SHRIMP – 4 PCS
  makeItem({
    id: 'ura-shrimp-volcano',
    categoryId: 'ura_shrimp',
    nameEn: 'Volcano Shrimp',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-crispy',
    categoryId: 'ura_shrimp',
    nameEn: 'Shrimp Crispy',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-mango',
    categoryId: 'ura_shrimp',
    nameEn: 'Shrimp Mango',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-fruity',
    categoryId: 'ura_shrimp',
    nameEn: 'Fruity Shrimp',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-ebiko',
    categoryId: 'ura_shrimp',
    nameEn: 'Shrimp Ebiko',
    price: '5$'
  }),

  // SASHIMI – 2 PCS
  makeItem({
    id: 'sashimi-salmon',
    categoryId: 'sashimi',
    nameEn: 'Salmon',
    price: '4$'
  }),
  makeItem({
    id: 'sashimi-tuna',
    categoryId: 'sashimi',
    nameEn: 'Tuna',
    price: '4$'
  }),
  makeItem({
    id: 'sashimi-crab',
    categoryId: 'sashimi',
    nameEn: 'Crab',
    price: '2.5$'
  }),
  makeItem({
    id: 'sashimi-shrimp',
    categoryId: 'sashimi',
    nameEn: 'Shrimp',
    price: '4$'
  }),

  // SUSHI – 2 PCS
  makeItem({
    id: 'sushi-salmon',
    categoryId: 'sushi',
    nameEn: 'Salmon Sushi',
    price: '4$'
  }),
  makeItem({
    id: 'sushi-tuna',
    categoryId: 'sushi',
    nameEn: 'Tuna Sushi',
    price: '4$'
  }),
  makeItem({
    id: 'sushi-shrimp',
    categoryId: 'sushi',
    nameEn: 'Shrimp Sushi',
    price: '3$'
  }),
  makeItem({
    id: 'sushi-crab',
    categoryId: 'sushi',
    nameEn: 'Crab Sushi',
    price: '2.5$'
  }),

  // DUO MAKI – 4 PCS
  makeItem({
    id: 'duo-maki-main',
    categoryId: 'duo_maki',
    nameEn: 'Salmon, Tuna, Avocado roll wrapped in Salmon and Tuna',
    price: '6.5$'
  }),

  // VEGETARIAN MAKI – 4 PCS (Removed ENTIRE category as requested)

  // REGINA SPECIAL MAKI – 4 PCS
  makeItem({
    id: 'regina-main',
    categoryId: 'regina',
    nameEn: 'Grilled Salmon wrapped in Avocado',
    price: '4.75$'
  }),

  // CREAMY / SMOKED / SALMON CRAB MAKI (Removed: Smoked Salmon Maki ONLY)
  makeItem({
    id: 'creamy-creamy-shrimp',
    categoryId: 'creamy',
    nameEn: 'Creamy Shrimp – 4 pcs',
    price: '5.5$',
    descEn: 'Shrimp mixed with Philadelphia and avocado wrapped in avocado.'
  }),
  makeItem({
    id: 'creamy-salmon-crab',
    categoryId: 'creamy',
    nameEn: 'Salmon Crab Maki – 4 pcs',
    price: '6.5$',
    descEn: 'Salmon and mango roll wrapped in crab.'
  }),

  // PLATTERS (Removed: Special Sashimi Mix ONLY)
  makeItem({
    id: 'platters-crab-mix',
    categoryId: 'platters',
    nameEn: 'Crab Mix – 12 pcs',
    price: '12$',
    descEn: 'Crazy maki – 4 pcs, Avocado Wrap – 4 pcs, Fruity Crab – 4 pcs'
  }),
  makeItem({
    id: 'platters-salmon-mix',
    categoryId: 'platters',
    nameEn: 'Salmon Mix – 12 pcs',
    price: '18$',
    descEn: 'Salmon Maki, Fruity Salmon, Volcano Salmon, Salmon Wrap'
  }),
  makeItem({
    id: 'platters-shrimp-mix',
    categoryId: 'platters',
    nameEn: 'Shrimp Mix – 12 pcs',
    price: '14$',
    descEn: 'Shrimp Volcano – 4 pcs, Shrimp Mango – 4 pcs, Shrimp Ebiko – 4 pcs'
  }),
  makeItem({
    id: 'platters-special-mix',
    categoryId: 'platters',
    nameEn: 'Special Mix – 12 pcs',
    price: '17$',
    descEn: 'Avocado Wrap – 4 pcs, Volcano Salmon – 4 pcs, Fruity Shrimp – 4 pcs'
  }),

  // SPECIAL ROLLS
  makeItem({
    id: 'special-dynamite',
    categoryId: 'special_rolls',
    nameEn: 'Dynamite Shrimp Roll – 8 pcs',
    price: '12$',
    isSignature: true
  }),
  makeItem({
    id: 'special-dragon',
    categoryId: 'special_rolls',
    nameEn: 'Dragon Roll – 8 pcs',
    price: '10$'
  }),

  // MINI BOAT – 25 PCS
  makeItem({
    id: 'boat-mini-main',
    categoryId: 'boat_mini',
    nameEn: 'Mini Boat – 25 pcs',
    price: '32$',
    descEn:
      '3 Crispy Crazy Crab, 3 Volcano Salmon, 3 Philadelphia Salmon, 3 Fruity Crab, 3 Volcano Shrimp, 3 California, 3 Ebiko Shrimp, 2 Sashimi, 2 Sashimi Sushi'
  }),

  // BIG BOAT – 50 PCS
  makeItem({
    id: 'boat-big-main',
    categoryId: 'boat_big',
    nameEn: 'Big Boat – 50 pcs',
    price: '60$',
    descEn:
      '2 Tuna Sashimi, 2 Shrimp Sashimi, 2 Crab Sashimi, 4 Salmon Sashimi, 4 Crazy Crab, 4 Fruity Crab, 4 Volcano Shrimp, 4 Salmon Wrap, 4 Avocado Crab, 4 Crunchy Crab, 4 Volcano Salmon, 4 California, 4 Salmon Sushi, 2 Tuna Sushi, 4 California Ebiko'
  }),

  // ITALIAN PIZZA
  makeItem({
    id: 'pizza-vegetarian',
    categoryId: 'pizza',
    nameEn: 'Vegetarian Pizza',
    price: '10$'
  }),
  makeItem({
    id: 'pizza-margharita',
    categoryId: 'pizza',
    nameEn: 'Margharita Pizza',
    price: '10$'
  }),
  makeItem({
    id: 'pizza-shrimp',
    categoryId: 'pizza',
    nameEn: 'Shrimp Pizza',
    price: '12$'
  }),
  makeItem({
    id: 'pizza-pepperoni',
    categoryId: 'pizza',
    nameEn: 'Pepperoni Pizza',
    price: '12$'
  }),
  makeItem({
    id: 'pizza-smoked-salmon',
    categoryId: 'pizza',
    nameEn: 'Smoked Salmon Pizza',
    price: '14$'
  }),

  // KUMPIR POTATO
  makeItem({
    id: 'kumpir-loaded',
    categoryId: 'kumpir',
    nameEn: 'Loaded Kumpir',
    price: '7$',
    descEn: 'Mushroom, cabbage, pickles, corn, carrots, olives'
  }),
  makeItem({
    id: 'kumpir-add-mortadella',
    categoryId: 'kumpir',
    nameEn: 'Add-ons: Mortadella',
    price: '1.5$'
  }),
  makeItem({
    id: 'kumpir-add-chicken',
    categoryId: 'kumpir',
    nameEn: 'Add-ons: Chicken',
    price: '1.5$'
  }),
  makeItem({
    id: 'kumpir-add-shrimp',
    categoryId: 'kumpir',
    nameEn: 'Add-ons: Shrimp',
    price: '2$'
  }),

  // PASTA (Removed: Pasta Bolognese ONLY)
  makeItem({
    id: 'pasta-chicken-fettuccine',
    categoryId: 'pasta',
    nameEn: 'Chicken Fettuccine',
    price: '12.5$'
  }),
  makeItem({
    id: 'pasta-arrabiata',
    categoryId: 'pasta',
    nameEn: 'Pasta Arrabiata',
    price: '6.5$'
  }),
  makeItem({
    id: 'pasta-shrimp',
    categoryId: 'pasta',
    nameEn: 'Shrimp Pasta',
    price: '12.5$'
  }),
  makeItem({
    id: 'pasta-pesto',
    categoryId: 'pasta',
    nameEn: 'Pasta al Pesto',
    price: '8$'
  }),

  // HOT PLATES (Removed: Chicken Scallop ONLY)
  makeItem({
    id: 'hot-crispy-chicken-strips',
    categoryId: 'hot_plates',
    nameEn: 'Crispy Chicken Strips (with fries & salad)',
    price: '9$'
  }),
  makeItem({
    id: 'hot-chicken-burger',
    categoryId: 'hot_plates',
    nameEn: 'Chicken Burger (with fries & salad)',
    price: '9$'
  }),
  makeItem({
    id: 'hot-beef-burger',
    categoryId: 'hot_plates',
    nameEn: 'Beef Burger (with fries & salad)',
    price: '11$'
  }),
  makeItem({
    id: 'hot-shrimp-tempura',
    categoryId: 'hot_plates',
    nameEn: 'Shrimp Tempura (with fries & salad)',
    price: '12$'
  }),
  makeItem({
    id: 'hot-grilled-salmon',
    categoryId: 'hot_plates',
    nameEn: 'Grilled Salmon (with vegetables)',
    price: '25$'
  }),
  makeItem({
    id: 'hot-fries',
    categoryId: 'hot_plates',
    nameEn: 'Fries',
    price: '2$'
  }),

  // DRINKS
  // Beverages
  makeItem({
    id: 'drinks-water-big',
    categoryId: 'drinks',
    subSection: 'Beverages',
    nameEn: 'Water (Big)',
    price: '1.1$'
  }),
  makeItem({
    id: 'drinks-water-small',
    categoryId: 'drinks',
    subSection: 'Beverages',
    nameEn: 'Water (Small)',
    price: '0.5$'
  }),
  makeItem({
    id: 'drinks-pepsi',
    categoryId: 'drinks',
    subSection: 'Beverages',
    nameEn: 'Pepsi',
    price: '1.75$'
  }),
  makeItem({
    id: 'drinks-7up',
    categoryId: 'drinks',
    subSection: 'Beverages',
    nameEn: '7up',
    price: '1.75$'
  }),
  makeItem({
    id: 'drinks-mirinda',
    categoryId: 'drinks',
    subSection: 'Beverages',
    nameEn: 'Mirinda',
    price: '1.75$'
  }),

  // Fresh Juice
  makeItem({
    id: 'drinks-juice-orange',
    categoryId: 'drinks',
    subSection: 'Fresh Juice',
    nameEn: 'Orange',
    price: '3.7$'
  }),
  makeItem({
    id: 'drinks-juice-strawberry',
    categoryId: 'drinks',
    subSection: 'Fresh Juice',
    nameEn: 'Strawberry',
    price: '3.7$'
  }),
  makeItem({
    id: 'drinks-juice-carrot',
    categoryId: 'drinks',
    subSection: 'Fresh Juice',
    nameEn: 'Carrot',
    price: '3.75$'
  }),
  makeItem({
    id: 'drinks-juice-lemonade',
    categoryId: 'drinks',
    subSection: 'Fresh Juice',
    nameEn: 'Lemonade',
    price: '2.65$'
  }),
  makeItem({
    id: 'drinks-juice-mango',
    categoryId: 'drinks',
    subSection: 'Fresh Juice',
    nameEn: 'Mango',
    price: '4.2$'
  }),
  makeItem({
    id: 'drinks-juice-minted-lemonade',
    categoryId: 'drinks',
    subSection: 'Fresh Juice',
    nameEn: 'Minted Lemonade',
    price: '2.85$'
  }),

  // Milkshake
  makeItem({
    id: 'drinks-milkshake-strawberry',
    categoryId: 'drinks',
    subSection: 'Milkshake',
    nameEn: 'Strawberry Milkshake',
    price: '4.4$'
  }),
  makeItem({
    id: 'drinks-milkshake-kinder',
    categoryId: 'drinks',
    subSection: 'Milkshake',
    nameEn: 'Kinder Milkshake',
    price: '4.4$'
  }),
  makeItem({
    id: 'drinks-milkshake-chocolate',
    categoryId: 'drinks',
    subSection: 'Milkshake',
    nameEn: 'Chocolate Milkshake',
    price: '4.4$'
  }),
  makeItem({
    id: 'drinks-milkshake-oreo',
    categoryId: 'drinks',
    subSection: 'Milkshake',
    nameEn: 'Oreo Milkshake',
    price: '4.4$'
  }),
  makeItem({
    id: 'drinks-milkshake-caramel',
    categoryId: 'drinks',
    subSection: 'Milkshake',
    nameEn: 'Caramel Milkshake',
    price: '4.4$'
  }),

  // Smoothie
  makeItem({
    id: 'drinks-smoothie-strawberry',
    categoryId: 'drinks',
    subSection: 'Smoothie',
    nameEn: 'Strawberry Smoothie',
    price: '3.4$'
  }),
  makeItem({
    id: 'drinks-smoothie-mango',
    categoryId: 'drinks',
    subSection: 'Smoothie',
    nameEn: 'Mango Smoothie',
    price: '3.4$'
  }),
  makeItem({
    id: 'drinks-smoothie-peach',
    categoryId: 'drinks',
    subSection: 'Smoothie',
    nameEn: 'Peach Smoothie',
    price: '3.3$'
  }),
  makeItem({
    id: 'drinks-smoothie-passion',
    categoryId: 'drinks',
    subSection: 'Smoothie',
    nameEn: 'Passion Smoothie',
    price: '3.4$'
  }),
  makeItem({
    id: 'drinks-smoothie-mixed-berries',
    categoryId: 'drinks',
    subSection: 'Smoothie',
    nameEn: 'Mixed Berries Smoothie',
    price: '3.4$'
  }),

  // Mojito
  makeItem({
    id: 'drinks-mojito-peach',
    categoryId: 'drinks',
    subSection: 'Mojito',
    nameEn: 'Peach Mojito',
    price: '3.1$'
  }),
  makeItem({
    id: 'drinks-mojito-passion',
    categoryId: 'drinks',
    subSection: 'Mojito',
    nameEn: 'Passion Mojito',
    price: '3.1$'
  }),
  makeItem({
    id: 'drinks-mojito-pomegranate',
    categoryId: 'drinks',
    subSection: 'Mojito',
    nameEn: 'Pomegranate Mojito',
    price: '3.1$'
  }),
  makeItem({
    id: 'drinks-mojito-mango',
    categoryId: 'drinks',
    subSection: 'Mojito',
    nameEn: 'Mango Mojito',
    price: '3.1$'
  }),
  makeItem({
    id: 'drinks-mojito-blue-hawaii',
    categoryId: 'drinks',
    subSection: 'Mojito',
    nameEn: 'Blue Hawaii Mojito',
    price: '3.1$'
  }),

  // Hot Drinks
  makeItem({
    id: 'drinks-hot-espresso',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Espresso',
    price: '1.5$'
  }),
  makeItem({
    id: 'drinks-hot-double-espresso',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Double Espresso',
    price: '1.5$'
  }),
  makeItem({
    id: 'drinks-hot-nescafe',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Nescafe',
    price: '1.9$'
  }),
  makeItem({
    id: 'drinks-hot-cappuccino',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Cappuccino',
    price: '1.9$'
  }),
  makeItem({
    id: 'drinks-hot-latte',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Caffe Latte (caramel / chocolate / hazelnut)',
    price: '2.85$'
  }),
  makeItem({
    id: 'drinks-hot-hot-chocolate',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Hot Chocolate',
    price: '3.3$'
  }),
  makeItem({
    id: 'drinks-hot-americano',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Americano',
    price: '1.9$'
  }),
  makeItem({
    id: 'drinks-hot-flat-white',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Flat White',
    price: '2.2$'
  }),
  makeItem({
    id: 'drinks-hot-tea',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Tea (Black, Green, Herbal)',
    price: '1.8$'
  })
];

export const signatureItems: MenuItem[] = menuItems.filter(
  (item) => item.isSignature
);
