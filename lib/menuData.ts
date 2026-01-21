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
  | 'sushi_cake'
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
    ar: args.nameAr ?? args.nameEn
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
    'Creamy / Salmon Crab Maki',
    'كريمي / سلمون كراب ماكي',
    'Rich creamy and special rolls.',
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
    'sushi_cake',
    '🎂',
    'Sushi Cake',
    'كيك السوشي',
    'Beautiful sushi cakes for celebrations.',
    'كيك سوشي جميل للمناسبات والاحتفالات.'
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
    nameAr: 'إيدامامي',
    price: '5$'
  }),
  makeItem({
    id: 'starters-cheese-rolls',
    categoryId: 'starters',
    nameEn: 'Cheese Rolls',
    nameAr: 'رولات الجبن',
    price: '4.6$'
  }),
  makeItem({
    id: 'starters-spring-rolls',
    categoryId: 'starters',
    nameEn: 'Spring Rolls',
    nameAr: 'سبرينغ رولز',
    price: '3.5$'
  }),

  // SALADS
  makeItem({
    id: 'salads-crab',
    categoryId: 'salads',
    nameEn: 'Crab Salad',
    nameAr: 'سلطة الكراب',
    price: '12$',
    descEn: 'Shrimp 180g, avocado, mango, crispy topping',
    descAr: 'روبيان 180غ، أفوكادو، مانجو، توبينغ مقرمش'
  }),
  makeItem({
    id: 'salads-salmon',
    categoryId: 'salads',
    nameEn: 'Salmon Salad',
    nameAr: 'سلطة السلمون',
    price: '16$',
    descEn: 'Salmon 180g, avocado, mango, crispy topping',
    descAr: 'سلمون 180غ، أفوكادو، مانجو، توبينغ مقرمش'
  }),
  makeItem({
    id: 'salads-shrimp',
    categoryId: 'salads',
    nameEn: 'Shrimp Salad',
    nameAr: 'سلطة الروبيان',
    price: '15$',
    descEn: 'Shrimp 180g, avocado, mango, crispy topping',
    descAr: 'روبيان 180غ، أفوكادو، مانجو، توبينغ مقرمش'
  }),
  makeItem({
    id: 'salads-tuna',
    categoryId: 'salads',
    nameEn: 'Tuna Salad',
    nameAr: 'سلطة التونا',
    price: '16$',
    descEn: 'Tuna 180g, avocado, mango, crispy topping',
    descAr: 'تونا 180غ، أفوكادو، مانجو، توبينغ مقرمش'
  }),
  makeItem({
    id: 'salads-mixed-seafood',
    categoryId: 'salads',
    nameEn: 'Mixed Sea Food Salad',
    nameAr: 'سلطة مأكولات بحرية متنوعة',
    price: '16$',
    descEn: 'Crab, salmon, tuna, shrimp mix',
    descAr: 'مزيج من الكراب، السلمون، التونا، الروبيان'
  }),

  // TEMAKI – 1 PC
  makeItem({
    id: 'temaki-tuna',
    categoryId: 'temaki',
    nameEn: 'Tuna',
    nameAr: 'تونا',
    price: '6$'
  }),
  makeItem({
    id: 'temaki-salmon',
    categoryId: 'temaki',
    nameEn: 'Salmon',
    nameAr: 'سلمون',
    price: '6$'
  }),
  makeItem({
    id: 'temaki-crab',
    categoryId: 'temaki',
    nameEn: 'Crab',
    nameAr: 'كراب',
    price: '4$'
  }),
  makeItem({
    id: 'temaki-shrimp',
    categoryId: 'temaki',
    nameEn: 'Shrimp',
    nameAr: 'روبيان',
    price: '4$'
  }),
  makeItem({
    id: 'temaki-california',
    categoryId: 'temaki',
    nameEn: 'California',
    nameAr: 'كاليفورنيا',
    price: '4$'
  }),

  // HOSO MAKI – 4 PCS
  makeItem({
    id: 'hoso-salmon',
    categoryId: 'hoso',
    nameEn: 'Salmon',
    nameAr: 'سلمون',
    price: '5$'
  }),
  makeItem({
    id: 'hoso-crab',
    categoryId: 'hoso',
    nameEn: 'Crab',
    nameAr: 'كراب',
    price: '4$'
  }),
  makeItem({
    id: 'hoso-tuna',
    categoryId: 'hoso',
    nameEn: 'Tuna',
    nameAr: 'تونا',
    price: '4.5$'
  }),
  makeItem({
    id: 'hoso-avocado',
    categoryId: 'hoso',
    nameEn: 'Avocado',
    nameAr: 'أفوكادو',
    price: '4$'
  }),
  makeItem({
    id: 'hoso-mango',
    categoryId: 'hoso',
    nameEn: 'Mango',
    nameAr: 'مانجو',
    price: '4$'
  }),
  makeItem({
    id: 'hoso-cucumber',
    categoryId: 'hoso',
    nameEn: 'Cucumber',
    nameAr: 'خيار',
    price: '3.5$'
  }),
  makeItem({
    id: 'hoso-shrimp',
    categoryId: 'hoso',
    nameEn: 'Shrimp',
    nameAr: 'روبيان',
    price: '3.5$'
  }),

  // FUTO MAKI – 4 PCS
  makeItem({
    id: 'futo-mixed',
    categoryId: 'futo',
    nameEn: 'Mixed Futo Maki',
    nameAr: 'ميكس فوتو ماكي',
    price: '7$'
  }),

  // URAMAKI TUNA – 4 PCS
  makeItem({
    id: 'ura-tuna-volcano',
    categoryId: 'ura_tuna',
    nameEn: 'Volcano Tuna',
    nameAr: 'فولكانو تونا',
    price: '7$'
  }),
  makeItem({
    id: 'ura-tuna-wrap',
    categoryId: 'ura_tuna',
    nameEn: 'Tuna Wrap',
    nameAr: 'تونا راب',
    price: '7$'
  }),

  // URAMAKI CRAB – 4 PCS
  makeItem({
    id: 'ura-crab-california',
    categoryId: 'ura_crab',
    nameEn: 'California',
    nameAr: 'كاليفورنيا',
    price: '3$'
  }),
  makeItem({
    id: 'ura-crab-california-ebiko',
    categoryId: 'ura_crab',
    nameEn: 'Ebiko California',
    nameAr: 'إيبيكو كاليفورنيا',
    price: '5$'
  }),
  makeItem({
    id: 'ura-crab-crispy-california',
    categoryId: 'ura_crab',
    nameEn: 'Crispy California',
    nameAr: 'كريسبي كاليفورنيا',
    price: '3$'
  }),
  makeItem({
    id: 'ura-crab-crispy-crazy',
    categoryId: 'ura_crab',
    nameEn: 'Crispy Crazy',
    nameAr: 'كريسبي كريزي',
    price: '4$',
    isSignature: true
  }),
  makeItem({
    id: 'ura-crab-crunchy-crab',
    categoryId: 'ura_crab',
    nameEn: 'Crunchy Crab',
    nameAr: 'كرانشي كراب',
    price: '3.5$'
  }),
  makeItem({
    id: 'ura-crab-spicy-crab',
    categoryId: 'ura_crab',
    nameEn: 'Spicy Crab',
    nameAr: 'سبايسي كراب',
    price: '4$'
  }),
  makeItem({
    id: 'ura-crab-fruity-crab',
    categoryId: 'ura_crab',
    nameEn: 'Fruity Crab',
    nameAr: 'فروتي كراب',
    price: '5$'
  }),
  makeItem({
    id: 'ura-crab-rainbow-kani',
    categoryId: 'ura_crab',
    nameEn: 'Rainbow Kani',
    nameAr: 'رينبو كاني',
    price: '5$'
  }),
  makeItem({
    id: 'ura-crab-crab-avocado-wrap',
    categoryId: 'ura_crab',
    nameEn: 'Crab Avocado Wrap',
    nameAr: 'كراب أفوكادو راب',
    price: '4$'
  }),

  // URAMAKI SALMON – 4 PCS
  makeItem({
    id: 'ura-salmon-volcano',
    categoryId: 'ura_salmon',
    nameEn: 'Volcano Salmon',
    nameAr: 'فولكانو سلمون',
    price: '8$',
    isSignature: true
  }),
  makeItem({
    id: 'ura-salmon-ebiko',
    categoryId: 'ura_salmon',
    nameEn: 'Salmon Ebiko',
    nameAr: 'سلمون إيبيكو',
    price: '7$'
  }),
  makeItem({
    id: 'ura-salmon-fruity',
    categoryId: 'ura_salmon',
    nameEn: 'Fruity Salmon',
    nameAr: 'فروتي سلمون',
    price: '6$'
  }),
  makeItem({
    id: 'ura-salmon-wrap',
    categoryId: 'ura_salmon',
    nameEn: 'Salmon Wrap',
    nameAr: 'سلمون راب',
    price: '6$'
  }),
  makeItem({
    id: 'ura-salmon-avocado',
    categoryId: 'ura_salmon',
    nameEn: 'Salmon Avocado',
    nameAr: 'سلمون أفوكادو',
    price: '4$'
  }),
  makeItem({
    id: 'ura-salmon-mango',
    categoryId: 'ura_salmon',
    nameEn: 'Salmon Mango',
    nameAr: 'سلمون مانجو',
    price: '6$'
  }),
  makeItem({
    id: 'ura-salmon-philadelphia',
    categoryId: 'ura_salmon',
    nameEn: 'Salmon Philadelphia',
    nameAr: 'سلمون فيلادلفيا',
    price: '6$'
  }),

  // URAMAKI SHRIMP – 4 PCS
  makeItem({
    id: 'ura-shrimp-volcano',
    categoryId: 'ura_shrimp',
    nameEn: 'Volcano Shrimp',
    nameAr: 'فولكانو روبيان',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-crispy',
    categoryId: 'ura_shrimp',
    nameEn: 'Shrimp Crispy',
    nameAr: 'روبيان كريسبي',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-mango',
    categoryId: 'ura_shrimp',
    nameEn: 'Shrimp Mango',
    nameAr: 'روبيان مانجو',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-fruity',
    categoryId: 'ura_shrimp',
    nameEn: 'Fruity Shrimp',
    nameAr: 'فروتي روبيان',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-ebiko',
    categoryId: 'ura_shrimp',
    nameEn: 'Shrimp Ebiko',
    nameAr: 'روبيان إيبيكو',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-rainbow-kani',
    categoryId: 'ura_shrimp',
    nameEn: 'Fruity Rainbow',
    nameAr: 'فروتي رينبو',
    price: '5.50$'
  }),

  // SASHIMI – 2 PCS
  makeItem({
    id: 'sashimi-salmon',
    categoryId: 'sashimi',
    nameEn: 'Salmon',
    nameAr: 'سلمون',
    price: '4$'
  }),
  makeItem({
    id: 'sashimi-tuna',
    categoryId: 'sashimi',
    nameEn: 'Tuna',
    nameAr: 'تونا',
    price: '4$'
  }),
  makeItem({
    id: 'sashimi-crab',
    categoryId: 'sashimi',
    nameEn: 'Crab',
    nameAr: 'كراب',
    price: '2.5$'
  }),
  makeItem({
    id: 'sashimi-shrimp',
    categoryId: 'sashimi',
    nameEn: 'Shrimp',
    nameAr: 'روبيان',
    price: '4$'
  }),

  // SUSHI – 2 PCS
  makeItem({
    id: 'sushi-salmon',
    categoryId: 'sushi',
    nameEn: 'Salmon Sushi',
    nameAr: 'سوشي سلمون',
    price: '4$'
  }),
  makeItem({
    id: 'sushi-tuna',
    categoryId: 'sushi',
    nameEn: 'Tuna Sushi',
    nameAr: 'سوشي تونا',
    price: '4$'
  }),
  makeItem({
    id: 'sushi-shrimp',
    categoryId: 'sushi',
    nameEn: 'Shrimp Sushi',
    nameAr: 'سوشي روبيان',
    price: '3$'
  }),
  makeItem({
    id: 'sushi-crab',
    categoryId: 'sushi',
    nameEn: 'Crab Sushi',
    nameAr: 'سوشي كراب',
    price: '2.5$'
  }),

  // DUO MAKI – 4 PCS
  makeItem({
    id: 'duo-maki-main',
    categoryId: 'duo_maki',
    nameEn: 'Salmon, Tuna, Avocado roll wrapped in Salmon and Tuna',
    nameAr: 'رول سلمون، تونا، أفوكادو مغلف بالسلمون والتونا',
    price: '6.5$'
  }),

  // VEGETARIAN MAKI – 4 PCS (تمت إزالته كما طلبت)

  // REGINA SPECIAL MAKI – 4 PCS
  makeItem({
    id: 'regina-main',
    categoryId: 'regina',
    nameEn: 'Grilled Salmon wrapped in Avocado',
    nameAr: 'سلمون مشوي ملفوف بالأفوكادو',
    price: '4.75$'
  }),

  // CREAMY / SALMON CRAB MAKI
  makeItem({
    id: 'creamy-creamy-shrimp',
    categoryId: 'creamy',
    nameEn: 'Creamy Shrimp – 4 pcs',
    nameAr: 'كريمي روبيان – 4 قطع',
    price: '5.5$',
    descEn: 'Shrimp mixed with Philadelphia and avocado wrapped in avocado.',
    descAr: 'روبيان مخلوط مع فيلادلفيا وأفوكادو مغلف بالأفوكادو.'
  }),
  makeItem({
    id: 'creamy-salmon-crab',
    categoryId: 'creamy',
    nameEn: 'Salmon Crab Maki – 4 pcs',
    nameAr: 'سلمون كراب ماكي – 4 قطع',
    price: '6.5$',
    descEn: 'Salmon and mango roll wrapped in crab.',
    descAr: 'رول سلمون ومانجو مغلف بالكراب.'
  }),

  // PLATTERS
  makeItem({
    id: 'platters-crab-mix',
    categoryId: 'platters',
    nameEn: 'Crab Mix – 12 pcs',
    nameAr: 'ميكس كراب – 12 قطعة',
    price: '12$',
    descEn: 'Crazy maki – 4 pcs, Avocado Wrap – 4 pcs, Fruity Crab – 4 pcs',
    descAr: 'كريزي ماكي – 4 قطع، أفوكادو راب – 4 قطع، فروتي كراب – 4 قطع'
  }),
  makeItem({
    id: 'platters-salmon-mix',
    categoryId: 'platters',
    nameEn: 'Salmon Mix – 12 pcs',
    nameAr: 'ميكس سلمون – 12 قطعة',
    price: '18$',
    descEn: 'Salmon Maki, Fruity Salmon, Volcano Salmon, Salmon Wrap',
    descAr: 'سلمون ماكي، فروتي سلمون، فولكانو سلمون، سلمون راب'
  }),
  makeItem({
    id: 'platters-shrimp-mix',
    categoryId: 'platters',
    nameEn: 'Shrimp Mix – 12 pcs',
    nameAr: 'ميكس روبيان – 12 قطعة',
    price: '14$',
    descEn: 'Shrimp Volcano – 4 pcs, Shrimp Mango – 4 pcs, Shrimp Ebiko – 4 pcs',
    descAr: 'روبيان فولكانو – 4 قطع، روبيان مانجو – 4 قطع، روبيان إيبيكو – 4 قطع'
  }),
  makeItem({
    id: 'platters-special-mix',
    categoryId: 'platters',
    nameEn: 'Special Mix – 12 pcs',
    nameAr: 'ميكس خاص – 12 قطعة',
    price: '17$',
    descEn: 'Avocado Wrap – 4 pcs, Volcano Salmon – 4 pcs, Fruity Shrimp – 4 pcs',
    descAr: 'أفوكادو راب – 4 قطع، فولكانو سلمون – 4 قطع، فروتي روبيان – 4 قطع'
  }),

  // SPECIAL ROLLS
  makeItem({
    id: 'special-dynamite',
    categoryId: 'special_rolls',
    nameEn: 'Dynamite Shrimp Roll – 8 pcs',
    nameAr: 'ديناميت روبيان رول – 8 قطع',
    price: '12$',
    isSignature: true
  }),
  makeItem({
    id: 'special-dragon',
    categoryId: 'special_rolls',
    nameEn: 'Dragon Roll – 8 pcs',
    nameAr: 'دراغون رول – 8 قطع',
    price: '10$'
  }),

  // MINI BOAT – 25 PCS
  makeItem({
    id: 'boat-mini-main',
    categoryId: 'boat_mini',
    nameEn: 'Mini Boat – 25 pcs',
    nameAr: 'ميني بوت – 25 قطعة',
    price: '32$',
    descEn: '3 Crispy Crazy Crab, 3 Volcano Salmon, 3 Philadelphia Salmon, 3 Fruity Crab, 3 Volcano Shrimp, 3 California, 3 Ebiko Shrimp, 2 Sashimi, 2 Sashimi Sushi',
    descAr: '3 كريسبي كريزي كراب، 3 فولكانو سلمون، 3 فيلادلفيا سلمون، 3 فروتي كراب، 3 فولكانو روبيان، 3 كاليفورنيا، 3 إيبيكو روبيان، 2 ساشيمي، 2 ساشيمي سوشي'
  }),

  // BIG BOAT – 50 PCS
  makeItem({
    id: 'boat-big-main',
    categoryId: 'boat_big',
    nameEn: 'Big Boat – 50 pcs',
    nameAr: 'بيغ بوت – 50 قطعة',
    price: '60$',
    descEn: '2 Tuna Sashimi, 2 Shrimp Sashimi, 2 Crab Sashimi, 4 Salmon Sashimi, 4 Crazy Crab, 4 Fruity Crab, 4 Volcano Shrimp, 4 Salmon Wrap, 4 Avocado Crab, 4 Crunchy Crab, 4 Volcano Salmon, 4 California, 4 Salmon Sushi, 2 Tuna Sushi, 4 California Ebiko',
    descAr: '2 تونا ساشيمي، 2 روبيان ساشيمي، 2 كراب ساشيمي، 4 سلمون ساشيمي، 4 كريزي كراب، 4 فروتي كراب، 4 فولكانو روبيان، 4 سلمون راب، 4 أفوكادو كراب، 4 كرانشي كراب، 4 فولكانو سلمون، 4 كاليفورنيا، 4 سلمون سوشي، 2 تونا سوشي، 4 كاليفورنيا إيبيكو'
  }),

  // SUSHI CAKE - القائمة الجديدة
  makeItem({
    id: 'sushi-cake-mini',
    categoryId: 'sushi_cake',
    nameEn: 'Mini Sushi Cake',
    nameAr: 'ميني كيك سوشي',
    price: '35$',
    isSignature: true
  }),
  makeItem({
    id: 'sushi-cake-medium',
    categoryId: 'sushi_cake',
    nameEn: 'Medium Sushi Cake',
    nameAr: 'ميديم كيك سوشي',
    price: '50$',
    isSignature: true
  }),
  makeItem({
    id: 'sushi-cake-big',
    categoryId: 'sushi_cake',
    nameEn: 'Big Sushi Cake',
    nameAr: 'بيغ كيك سوشي',
    price: '75$',
    isSignature: true
  }),

  // ITALIAN PIZZA
  makeItem({
    id: 'pizza-vegetarian',
    categoryId: 'pizza',
    nameEn: 'Vegetarian Pizza',
    nameAr: 'بيتزا نباتية',
    price: '10$'
  }),
  makeItem({
    id: 'pizza-margharita',
    categoryId: 'pizza',
    nameEn: 'Margharita Pizza',
    nameAr: 'بيتزا مارغاريتا',
    price: '10$'
  }),
  makeItem({
    id: 'pizza-shrimp',
    categoryId: 'pizza',
    nameEn: 'Shrimp Pizza',
    nameAr: 'بيتزا روبيان',
    price: '12$'
  }),
  makeItem({
    id: 'pizza-pepperoni',
    categoryId: 'pizza',
    nameEn: 'Pepperoni Pizza',
    nameAr: 'بيتزا بيبروني',
    price: '12$'
  }),
  makeItem({
    id: 'pizza-smoked-salmon',
    categoryId: 'pizza',
    nameEn: 'Smoked Salmon Pizza',
    nameAr: 'بيتزا سلمون مدخن',
    price: '14$'
  }),

  // KUMPIR POTATO
  makeItem({
    id: 'kumpir-loaded',
    categoryId: 'kumpir',
    nameEn: 'Loaded Kumpir',
    nameAr: 'كمبير محشو كامل',
    price: '7$',
    descEn: 'Mushroom, cabbage, pickles, corn, carrots, olives',
    descAr: 'فطر، ملفوف، مخلل، ذرة، جزر، زيتون'
  }),
  makeItem({
    id: 'kumpir-add-mortadella',
    categoryId: 'kumpir',
    nameEn: 'Add-ons: Mortadella',
    nameAr: 'إضافات: مرتديلا',
    price: '1.5$'
  }),
  makeItem({
    id: 'kumpir-add-chicken',
    categoryId: 'kumpir',
    nameEn: 'Add-ons: Chicken',
    nameAr: 'إضافات: دجاج',
    price: '1.5$'
  }),
  makeItem({
    id: 'kumpir-add-shrimp',
    categoryId: 'kumpir',
    nameEn: 'Add-ons: Shrimp',
    nameAr: 'إضافات: روبيان',
    price: '2$'
  }),

  // PASTA
  makeItem({
    id: 'pasta-chicken-fettuccine',
    categoryId: 'pasta',
    nameEn: 'Chicken Fettuccine',
    nameAr: 'فيتوتشيني دجاج',
    price: '12.5$'
  }),
  makeItem({
    id: 'pasta-arrabiata',
    categoryId: 'pasta',
    nameEn: 'Pasta Arrabiata',
    nameAr: 'باستا أربياتا',
    price: '6.5$'
  }),
  makeItem({
    id: 'pasta-shrimp',
    categoryId: 'pasta',
    nameEn: 'Shrimp Pasta',
    nameAr: 'باستا روبيان',
    price: '12.5$'
  }),
  makeItem({
    id: 'pasta-pesto',
    categoryId: 'pasta',
    nameEn: 'Pasta al Pesto',
    nameAr: 'باستا بستو',
    price: '8$'
  }),

  // HOT PLATES
  makeItem({
    id: 'hot-crispy-chicken-strips',
    categoryId: 'hot_plates',
    nameEn: 'Crispy Chicken Strips (with fries & salad)',
    nameAr: 'شرائح دجاج مقرمشة (مع بطاطس وسلطة)',
    price: '9$'
  }),
  makeItem({
    id: 'hot-chicken-burger',
    categoryId: 'hot_plates',
    nameEn: 'Chicken Burger (with fries & salad)',
    nameAr: 'برجر دجاج (مع بطاطس وسلطة)',
    price: '9$'
  }),
  makeItem({
    id: 'hot-beef-burger',
    categoryId: 'hot_plates',
    nameEn: 'Beef Burger (with fries & salad)',
    nameAr: 'برجر لحم (مع بطاطس وسلطة)',
    price: '11$'
  }),
  makeItem({
    id: 'hot-shrimp-tempura',
    categoryId: 'hot_plates',
    nameEn: 'Shrimp Tempura',
    nameAr: 'تمبورا روبيان',
    price: '12$'
  }),
  makeItem({
    id: 'hot-grilled-salmon',
    categoryId: 'hot_plates',
    nameEn: 'Grilled Salmon (with vegetables)',
    nameAr: 'سلمون مشوي (مع خضار)',
    price: '25$'
  }),
  makeItem({
    id: 'hot-fries',
    categoryId: 'hot_plates',
    nameEn: 'Fries',
    nameAr: 'بطاطس مقلية',
    price: '2$'
  }),

  // DRINKS
  // Beverages
  makeItem({
    id: 'drinks-water-big',
    categoryId: 'drinks',
    subSection: 'Beverages',
    nameEn: 'Water (Big)',
    nameAr: 'مياه (كبير)',
    price: '1.1$'
  }),
  makeItem({
    id: 'drinks-water-small',
    categoryId: 'drinks',
    subSection: 'Beverages',
    nameEn: 'Water (Small)',
    nameAr: 'مياه (صغير)',
    price: '0.5$'
  }),
  makeItem({
    id: 'drinks-pepsi',
    categoryId: 'drinks',
    subSection: 'Beverages',
    nameEn: 'Pepsi',
    nameAr: 'بيبسي',
    price: '1.75$'
  }),
  makeItem({
    id: 'drinks-7up',
    categoryId: 'drinks',
    subSection: 'Beverages',
    nameEn: '7up',
    nameAr: 'سفن أب',
    price: '1.75$'
  }),
  makeItem({
    id: 'drinks-mirinda',
    categoryId: 'drinks',
    subSection: 'Beverages',
    nameEn: 'Mirinda',
    nameAr: 'ميريندا',
    price: '1.75$'
  }),

  // Fresh Juice
  makeItem({
    id: 'drinks-juice-orange',
    categoryId: 'drinks',
    subSection: 'Fresh Juice',
    nameEn: 'Orange',
    nameAr: 'عصير برتقال',
    price: '3.7$'
  }),
  makeItem({
    id: 'drinks-juice-strawberry',
    categoryId: 'drinks',
    subSection: 'Fresh Juice',
    nameEn: 'Strawberry',
    nameAr: 'عصير فراولة',
    price: '3.7$'
  }),
  makeItem({
    id: 'drinks-juice-carrot',
    categoryId: 'drinks',
    subSection: 'Fresh Juice',
    nameEn: 'Carrot',
    nameAr: 'عصير جزر',
    price: '3.75$'
  }),
  makeItem({
    id: 'drinks-juice-lemonade',
    categoryId: 'drinks',
    subSection: 'Fresh Juice',
    nameEn: 'Lemonade',
    nameAr: 'ليمونادة',
    price: '2.65$'
  }),
  makeItem({
    id: 'drinks-juice-mango',
    categoryId: 'drinks',
    subSection: 'Fresh Juice',
    nameEn: 'Mango',
    nameAr: 'عصير مانجو',
    price: '4.2$'
  }),
  makeItem({
    id: 'drinks-juice-minted-lemonade',
    categoryId: 'drinks',
    subSection: 'Fresh Juice',
    nameEn: 'Minted Lemonade',
    nameAr: 'ليمونادة بالنعناع',
    price: '2.85$'
  }),

  // Milkshake
  makeItem({
    id: 'drinks-milkshake-strawberry',
    categoryId: 'drinks',
    subSection: 'Milkshake',
    nameEn: 'Strawberry Milkshake',
    nameAr: 'ميلك شيك فراولة',
    price: '4.4$'
  }),
  makeItem({
    id: 'drinks-milkshake-kinder',
    categoryId: 'drinks',
    subSection: 'Milkshake',
    nameEn: 'Kinder Milkshake',
    nameAr: 'ميلك شيك كيندر',
    price: '4.4$'
  }),
  makeItem({
    id: 'drinks-milkshake-chocolate',
    categoryId: 'drinks',
    subSection: 'Milkshake',
    nameEn: 'Chocolate Milkshake',
    nameAr: 'ميلك شيك شوكولاتة',
    price: '4.4$'
  }),
  makeItem({
    id: 'drinks-milkshake-oreo',
    categoryId: 'drinks',
    subSection: 'Milkshake',
    nameEn: 'Oreo Milkshake',
    nameAr: 'ميلك شيك أوريو',
    price: '4.4$'
  }),
  makeItem({
    id: 'drinks-milkshake-caramel',
    categoryId: 'drinks',
    subSection: 'Milkshake',
    nameEn: 'Caramel Milkshake',
    nameAr: 'ميلك شيك كراميل',
    price: '4.4$'
  }),

  // Smoothie
  makeItem({
    id: 'drinks-smoothie-strawberry',
    categoryId: 'drinks',
    subSection: 'Smoothie',
    nameEn: 'Strawberry Smoothie',
    nameAr: 'سموذي فراولة',
    price: '3.4$'
  }),
  makeItem({
    id: 'drinks-smoothie-mango',
    categoryId: 'drinks',
    subSection: 'Smoothie',
    nameEn: 'Mango Smoothie',
    nameAr: 'سموذي مانجو',
    price: '3.4$'
  }),
  makeItem({
    id: 'drinks-smoothie-peach',
    categoryId: 'drinks',
    subSection: 'Smoothie',
    nameEn: 'Peach Smoothie',
    nameAr: 'سموذي خوخ',
    price: '3.3$'
  }),
  makeItem({
    id: 'drinks-smoothie-passion',
    categoryId: 'drinks',
    subSection: 'Smoothie',
    nameEn: 'Passion Smoothie',
    nameAr: 'سموذي باشن فروت',
    price: '3.4$'
  }),
  makeItem({
    id: 'drinks-smoothie-mixed-berries',
    categoryId: 'drinks',
    subSection: 'Smoothie',
    nameEn: 'Mixed Berries Smoothie',
    nameAr: 'سموذي توت مختلط',
    price: '3.4$'
  }),

  // Mojito
  makeItem({
    id: 'drinks-mojito-peach',
    categoryId: 'drinks',
    subSection: 'Mojito',
    nameEn: 'Peach Mojito',
    nameAr: 'موهيتو خوخ',
    price: '3.1$'
  }),
  makeItem({
    id: 'drinks-mojito-passion',
    categoryId: 'drinks',
    subSection: 'Mojito',
    nameEn: 'Passion Mojito',
    nameAr: 'موهيتو باشن فروت',
    price: '3.1$'
  }),
  makeItem({
    id: 'drinks-mojito-pomegranate',
    categoryId: 'drinks',
    subSection: 'Mojito',
    nameEn: 'Pomegranate Mojito',
    nameAr: 'موهيتو رمان',
    price: '3.1$'
  }),
  makeItem({
    id: 'drinks-mojito-mango',
    categoryId: 'drinks',
    subSection: 'Mojito',
    nameEn: 'Mango Mojito',
    nameAr: 'موهيتو مانجو',
    price: '3.1$'
  }),
  makeItem({
    id: 'drinks-mojito-blue-hawaii',
    categoryId: 'drinks',
    subSection: 'Mojito',
    nameEn: 'Blue Hawaii Mojito',
    nameAr: 'موهيتو بلو هاواي',
    price: '3.1$'
  }),

  // Hot Drinks
  makeItem({
    id: 'drinks-hot-espresso',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Espresso',
    nameAr: 'إسبريسو',
    price: '1.5$'
  }),
  makeItem({
    id: 'drinks-hot-double-espresso',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Double Espresso',
    nameAr: 'دبل إسبريسو',
    price: '1.5$'
  }),
  makeItem({
    id: 'drinks-hot-nescafe',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Nescafe',
    nameAr: 'نسكافيه',
    price: '1.9$'
  }),
  makeItem({
    id: 'drinks-hot-cappuccino',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Cappuccino',
    nameAr: 'كابوتشينو',
    price: '1.9$'
  }),
  makeItem({
    id: 'drinks-hot-latte',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Caffe Latte (caramel / chocolate / hazelnut)',
    nameAr: 'لاتيه (كراميل / شوكولاتة / بندق)',
    price: '2.85$'
  }),
  makeItem({
    id: 'drinks-hot-hot-chocolate',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Hot Chocolate',
    nameAr: 'شوكولاتة ساخنة',
    price: '3.3$'
  }),
  makeItem({
    id: 'drinks-hot-americano',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Americano',
    nameAr: 'أمريكانو',
    price: '1.9$'
  }),
  makeItem({
    id: 'drinks-hot-flat-white',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Flat White',
    nameAr: 'فلت وايت',
    price: '2.2$'
  }),
  makeItem({
    id: 'drinks-hot-tea',
    categoryId: 'drinks',
    subSection: 'Hot Drinks',
    nameEn: 'Tea (Black, Green, Herbal)',
    nameAr: 'شاي (أسود، أخضر، أعشاب)',
    price: '1.8$'
  })
];

export const signatureItems: MenuItem[] = menuItems.filter(
  (item) => item.isSignature
);
