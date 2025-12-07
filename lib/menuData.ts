// lib/menuData.ts
// بيانات المنيو مع دعم عربي/إنجليزي واستخدامها في صفحة المنيو والـ Preview

export type CategoryKey =
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

export type MenuItem = {
  id: string;
  categoryKey: CategoryKey;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  price: string; // مثال "5$"
  isSignature?: boolean;
};

type MakeItemArgs = {
  id: string;
  categoryKey: CategoryKey;
  nameEn: string;
  nameAr: string;
  price: string;
  descEn?: string;
  descAr?: string;
  isSignature?: boolean;
};

function makeItem({
  id,
  categoryKey,
  nameEn,
  nameAr,
  price,
  descEn,
  descAr,
  isSignature
}: MakeItemArgs): MenuItem {
  return {
    id,
    categoryKey,
    name: { en: nameEn, ar: nameAr },
    description: {
      en: descEn ?? '',
      ar: descAr ?? ''
    },
    price,
    isSignature
  };
}

// ملاحظة: ليس بالضرورة 100% من منيو HTML الأصلي، لكن الأساس كله موجود
// ويمكنك إضافة/تعديل الأصناف بسهولة باتّباع نفس النمط.

const menuItems: MenuItem[] = [
  // STARTERS
  makeItem({
    id: 'starters-edamame',
    categoryKey: 'starters',
    nameEn: 'Edamame',
    nameAr: 'إدامامي',
    price: '5$'
  }),
  makeItem({
    id: 'starters-cheese-rolls',
    categoryKey: 'starters',
    nameEn: 'Cheese Rolls',
    nameAr: 'روول جبنة',
    price: '4.6$'
  }),
  makeItem({
    id: 'starters-spring-rolls',
    categoryKey: 'starters',
    nameEn: 'Spring Rolls',
    nameAr: 'سبرنغ رولز',
    price: '3.5$'
  }),

  // SALADS
  makeItem({
    id: 'salads-crab',
    categoryKey: 'salads',
    nameEn: 'Crab Salad',
    nameAr: 'سلطة كابوريا',
    price: '12$',
    descEn: 'Crab, avocado, mango, crispy topping',
    descAr: 'كابوريا، أفوكادو، مانغو، كريسبي'
  }),
  makeItem({
    id: 'salads-salmon',
    categoryKey: 'salads',
    nameEn: 'Salmon Salad',
    nameAr: 'سلطة سلمون',
    price: '16$',
    descEn: 'Salmon 180g, avocado, mango, crispy topping',
    descAr: 'سلمون 180غ، أفوكادو، مانغو، كريسبي'
  }),
  makeItem({
    id: 'salads-shrimp',
    categoryKey: 'salads',
    nameEn: 'Shrimp Salad',
    nameAr: 'سلطة روبيان',
    price: '15$',
    descEn: 'Shrimp 180g, avocado, mango, crispy topping',
    descAr: 'روبيان 180غ، أفوكادو، مانغو، كريسبي'
  }),
  makeItem({
    id: 'salads-tuna',
    categoryKey: 'salads',
    nameEn: 'Tuna Salad',
    nameAr: 'سلطة تونا',
    price: '16$',
    descEn: 'Tuna 180g, avocado, mango, crispy topping',
    descAr: 'تونا 180غ، أفوكادو، مانغو، كريسبي'
  }),
  makeItem({
    id: 'salads-mixed-seafood',
    categoryKey: 'salads',
    nameEn: 'Mixed Sea Food Salad',
    nameAr: 'سلطة مأكولات بحرية مشكلة',
    price: '16$',
    descEn: 'Crab, salmon, tuna, shrimp mix',
    descAr: 'خلطة كابوريا، سلمون، تونا، روبيان'
  }),
  makeItem({
    id: 'salads-greek',
    categoryKey: 'salads',
    nameEn: 'Greek Salad',
    nameAr: 'سلطة يونانية',
    price: '6$'
  }),
  makeItem({
    id: 'salads-lebanese',
    categoryKey: 'salads',
    nameEn: 'Lebanese Salad',
    nameAr: 'سلطة لبنانية',
    price: '5.5$'
  }),

  // TEMAKI
  makeItem({
    id: 'temaki-tuna',
    categoryKey: 'temaki',
    nameEn: 'Tuna Temaki',
    nameAr: 'تونا تيمّاكي',
    price: '6$'
  }),
  makeItem({
    id: 'temaki-salmon',
    categoryKey: 'temaki',
    nameEn: 'Salmon Temaki',
    nameAr: 'سلمون تيمّاكي',
    price: '6$'
  }),
  makeItem({
    id: 'temaki-crab',
    categoryKey: 'temaki',
    nameEn: 'Crab Temaki',
    nameAr: 'كراب تيمّاكي',
    price: '4$'
  }),
  makeItem({
    id: 'temaki-shrimp',
    categoryKey: 'temaki',
    nameEn: 'Shrimp Temaki',
    nameAr: 'روبيان تيمّاكي',
    price: '4$'
  }),
  makeItem({
    id: 'temaki-hawaiian',
    categoryKey: 'temaki',
    nameEn: 'Hawaiian Temaki',
    nameAr: 'هاوايان تيمّاكي',
    price: '4$'
  }),
  makeItem({
    id: 'temaki-california',
    categoryKey: 'temaki',
    nameEn: 'California Temaki',
    nameAr: 'كاليفورنيا تيمّاكي',
    price: '4$'
  }),

  // HOSO MAKI
  makeItem({
    id: 'hoso-salmon',
    categoryKey: 'hoso',
    nameEn: 'Salmon Hoso Maki',
    nameAr: 'هوسو ماكي سلمون',
    price: '5$'
  }),
  makeItem({
    id: 'hoso-crab',
    categoryKey: 'hoso',
    nameEn: 'Crab Hoso Maki',
    nameAr: 'هوسو ماكي كراب',
    price: '4$'
  }),
  makeItem({
    id: 'hoso-tuna',
    categoryKey: 'hoso',
    nameEn: 'Tuna Hoso Maki',
    nameAr: 'هوسو ماكي تونا',
    price: '4.5$'
  }),
  makeItem({
    id: 'hoso-avocado',
    categoryKey: 'hoso',
    nameEn: 'Avocado Hoso Maki',
    nameAr: 'هوسو ماكي أفوكادو',
    price: '4$'
  }),
  makeItem({
    id: 'hoso-mango',
    categoryKey: 'hoso',
    nameEn: 'Mango Hoso Maki',
    nameAr: 'هوسو ماكي مانغو',
    price: '4$'
  }),
  makeItem({
    id: 'hoso-cucumber',
    categoryKey: 'hoso',
    nameEn: 'Cucumber Hoso Maki',
    nameAr: 'هوسو ماكي خيار',
    price: '3.5$'
  }),
  makeItem({
    id: 'hoso-shrimp',
    categoryKey: 'hoso',
    nameEn: 'Shrimp Hoso Maki',
    nameAr: 'هوسو ماكي روبيان',
    price: '3.5$'
  }),

  // FUTO MAKI
  makeItem({
    id: 'futo-hawaiian',
    categoryKey: 'futo',
    nameEn: 'Hawaiian Futo Maki',
    nameAr: 'فوتو ماكي هاوايان',
    price: '6$'
  }),
  makeItem({
    id: 'futo-mixed',
    categoryKey: 'futo',
    nameEn: 'Mixed Futo Maki',
    nameAr: 'فوتو ماكي مشكل',
    price: '7$'
  }),

  // URAMAKI TUNA
  makeItem({
    id: 'ura-tuna-volcano',
    categoryKey: 'ura_tuna',
    nameEn: 'Volcano Tuna',
    nameAr: 'فولكينو تونا',
    price: '7$'
  }),
  makeItem({
    id: 'ura-tuna-wrap',
    categoryKey: 'ura_tuna',
    nameEn: 'Tuna Wrap',
    nameAr: 'تونا رابس',
    price: '7$'
  }),

  // URAMAKI CRAB
  makeItem({
    id: 'ura-crab-california',
    categoryKey: 'ura_crab',
    nameEn: 'California',
    nameAr: 'كاليفورنيا',
    price: '3$'
  }),
  makeItem({
    id: 'ura-crab-california-ebiko',
    categoryKey: 'ura_crab',
    nameEn: 'California Ebiko',
    nameAr: 'كاليفورنيا إبيكو',
    price: '5$'
  }),
  makeItem({
    id: 'ura-crab-crispy-california',
    categoryKey: 'ura_crab',
    nameEn: 'Crispy California',
    nameAr: 'كريسبي كاليفورنيا',
    price: '3$'
  }),
  makeItem({
    id: 'ura-crab-crispy-crazy',
    categoryKey: 'ura_crab',
    nameEn: 'Crispy Crazy',
    nameAr: 'كريسبي كريزي',
    price: '4$',
    isSignature: true
  }),
  makeItem({
    id: 'ura-crab-crunchy-crab',
    categoryKey: 'ura_crab',
    nameEn: 'Crunchy Crab',
    nameAr: 'كرانشي كراب',
    price: '3.5$'
  }),
  makeItem({
    id: 'ura-crab-spicy-crab',
    categoryKey: 'ura_crab',
    nameEn: 'Spicy Crab',
    nameAr: 'سبايسي كراب',
    price: '4$'
  }),
  makeItem({
    id: 'ura-crab-fruity-crab',
    categoryKey: 'ura_crab',
    nameEn: 'Fruity Crab',
    nameAr: 'فروتي كراب',
    price: '5$'
  }),
  makeItem({
    id: 'ura-crab-rainbow-kani',
    categoryKey: 'ura_crab',
    nameEn: 'Rainbow Kani',
    nameAr: 'رينبو كاني',
    price: '5$'
  }),
  makeItem({
    id: 'ura-crab-avocado-wrap',
    categoryKey: 'ura_crab',
    nameEn: 'Crab Avocado Wrap',
    nameAr: 'كراب أفوكادو رابس',
    price: '4$'
  }),

  // URAMAKI SALMON
  makeItem({
    id: 'ura-salmon-volcano',
    categoryKey: 'ura_salmon',
    nameEn: 'Volcano Salmon',
    nameAr: 'فولكينو سلمون',
    price: '8$',
    isSignature: true
  }),
  makeItem({
    id: 'ura-salmon-ebiko',
    categoryKey: 'ura_salmon',
    nameEn: 'Salmon Ebiko',
    nameAr: 'سلمون إبيكو',
    price: '7$'
  }),
  makeItem({
    id: 'ura-salmon-fruity',
    categoryKey: 'ura_salmon',
    nameEn: 'Fruity Salmon',
    nameAr: 'فروتي سلمون',
    price: '6$'
  }),
  makeItem({
    id: 'ura-salmon-wrap',
    categoryKey: 'ura_salmon',
    nameEn: 'Salmon Wrap',
    nameAr: 'سلمون رابس',
    price: '6$'
  }),
  makeItem({
    id: 'ura-salmon-avocado',
    categoryKey: 'ura_salmon',
    nameEn: 'Salmon Avocado',
    nameAr: 'سلمون أفوكادو',
    price: '4$'
  }),
  makeItem({
    id: 'ura-salmon-mango',
    categoryKey: 'ura_salmon',
    nameEn: 'Salmon Mango',
    nameAr: 'سلمون مانغو',
    price: '6$'
  }),
  makeItem({
    id: 'ura-salmon-philadelphia',
    categoryKey: 'ura_salmon',
    nameEn: 'Salmon Philadelphia',
    nameAr: 'سلمون فيلادلفيا',
    price: '6$'
  }),

  // URAMAKI SHRIMP
  makeItem({
    id: 'ura-shrimp-volcano',
    categoryKey: 'ura_shrimp',
    nameEn: 'Volcano Shrimp',
    nameAr: 'فولكينو روبيان',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-crispy',
    categoryKey: 'ura_shrimp',
    nameEn: 'Shrimp Crispy',
    nameAr: 'روبيان كريسبي',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-mango',
    categoryKey: 'ura_shrimp',
    nameEn: 'Shrimp Mango',
    nameAr: 'روبيان مانغو',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-fruity',
    categoryKey: 'ura_shrimp',
    nameEn: 'Fruity Shrimp',
    nameAr: 'فروتي روبيان',
    price: '5$'
  }),
  makeItem({
    id: 'ura-shrimp-ebiko',
    categoryKey: 'ura_shrimp',
    nameEn: 'Shrimp Ebiko',
    nameAr: 'روبيان إبيكو',
    price: '5$'
  }),

  // SASHIMI
  makeItem({
    id: 'sashimi-salmon',
    categoryKey: 'sashimi',
    nameEn: 'Salmon Sashimi (2 pcs)',
    nameAr: 'سلمون ساشيمي (قطعتان)',
    price: '4$'
  }),
  makeItem({
    id: 'sashimi-tuna',
    categoryKey: 'sashimi',
    nameEn: 'Tuna Sashimi (2 pcs)',
    nameAr: 'تونا ساشيمي (قطعتان)',
    price: '4$'
  }),
  makeItem({
    id: 'sashimi-crab',
    categoryKey: 'sashimi',
    nameEn: 'Crab Sashimi (2 pcs)',
    nameAr: 'كابوريا ساشيمي (قطعتان)',
    price: '2.5$'
  }),
  makeItem({
    id: 'sashimi-shrimp',
    categoryKey: 'sashimi',
    nameEn: 'Shrimp Sashimi (2 pcs)',
    nameAr: 'روبيان ساشيمي (قطعتان)',
    price: '4$'
  }),

  // SUSHI
  makeItem({
    id: 'sushi-salmon',
    categoryKey: 'sushi',
    nameEn: 'Salmon Sushi (2 pcs)',
    nameAr: 'سلمون سوشي (قطعتان)',
    price: '4$'
  }),
  makeItem({
    id: 'sushi-tuna',
    categoryKey: 'sushi',
    nameEn: 'Tuna Sushi (2 pcs)',
    nameAr: 'تونا سوشي (قطعتان)',
    price: '4$'
  }),
  makeItem({
    id: 'sushi-shrimp',
    categoryKey: 'sushi',
    nameEn: 'Shrimp Sushi (2 pcs)',
    nameAr: 'روبيان سوشي (قطعتان)',
    price: '3$'
  }),
  makeItem({
    id: 'sushi-crab',
    categoryKey: 'sushi',
    nameEn: 'Crab Sushi (2 pcs)',
    nameAr: 'كابوريا سوشي (قطعتان)',
    price: '2.5$'
  }),

  // DUO MAKI
  makeItem({
    id: 'duo-maki',
    categoryKey: 'duo_maki',
    nameEn: 'Duo Maki (4 pcs)',
    nameAr: 'ديو ماكي (4 قطع)',
    price: '6.5$',
    descEn: 'Salmon, tuna, avocado roll wrapped in salmon & tuna',
    descAr: 'رول سلمون وتونا وأفوكادو ملفوف بسلمون وتونا'
  }),

  // VEGETARIAN MAKI
  makeItem({
    id: 'vegetarian-maki',
    categoryKey: 'vegetarian',
    nameEn: 'Vegetarian Maki (4 pcs)',
    nameAr: 'فيجيتيريان ماكي (4 قطع)',
    price: '4$',
    descEn: 'Mango, avocado, cucumber, lettuce roll wrapped in parsley',
    descAr: 'مانغو، أفوكادو، خيار، خس ملفوف ببقدونس'
  }),

  // REGINA SPECIAL MAKI
  makeItem({
    id: 'regina-special',
    categoryKey: 'regina',
    nameEn: 'Regina Special Maki (4 pcs)',
    nameAr: 'ريجينا سبيشل ماكي (4 قطع)',
    price: '4.75$',
    descEn: 'Grilled salmon wrapped in avocado',
    descAr: 'سلمون مشوي ملفوف بأفوكادو'
  }),

  // CREAMY / SMOKED / SALMON CRAB MAKI
  makeItem({
    id: 'creamy-shrimp',
    categoryKey: 'creamy',
    nameEn: 'Creamy Shrimp (4 pcs)',
    nameAr: 'كريمي روبيان (4 قطع)',
    price: '5.5$',
    descEn: 'Shrimp with Philadelphia & avocado wrapped in avocado',
    descAr: 'روبيان مع جبنة فيلادلفيا وأفوكادو ملفوف بأفوكادو'
  }),
  makeItem({
    id: 'smoked-salmon-maki',
    categoryKey: 'creamy',
    nameEn: 'Smoked Salmon Maki (4 pcs)',
    nameAr: 'سموك سلمون ماكي (4 قطع)',
    price: '6.5$',
    descEn: 'Smoked salmon and avocado roll wrapped in smoked salmon',
    descAr: 'سلمون مدخن وأفوكادو، ملفوف بسلمون مدخن'
  }),
  makeItem({
    id: 'salmon-crab-maki',
    categoryKey: 'creamy',
    nameEn: 'Salmon Crab Maki (4 pcs)',
    nameAr: 'سلمون كراب ماكي (4 قطع)',
    price: '6.5$',
    descEn: 'Salmon and mango roll wrapped in crab',
    descAr: 'رول سلمون ومانغو ملفوف بكابوريا'
  }),

  // PLATTERS (نبسّط شوي)
  makeItem({
    id: 'platter-crab-mix',
    categoryKey: 'platters',
    nameEn: 'Crab Mix – 12 pcs',
    nameAr: 'كراب مكس – 12 قطعة',
    price: '12$',
    descEn: 'Crazy maki, avocado wrap, fruity crab',
    descAr: 'كريزي ماكي، أفوكادو رابس، فروتي كراب'
  }),
  makeItem({
    id: 'platter-salmon-mix',
    categoryKey: 'platters',
    nameEn: 'Salmon Mix – 12 pcs',
    nameAr: 'سلمون مكس – 12 قطعة',
    price: '18$'
  }),
  makeItem({
    id: 'platter-shrimp-mix',
    categoryKey: 'platters',
    nameEn: 'Shrimp Mix – 12 pcs',
    nameAr: 'روبيان مكس – 12 قطعة',
    price: '14$'
  }),
  makeItem({
    id: 'platter-special-mix',
    categoryKey: 'platters',
    nameEn: 'Special Mix – 12 pcs',
    nameAr: 'سبيشل مكس – 12 قطعة',
    price: '17$'
  }),
  makeItem({
    id: 'platter-special-sashimi',
    categoryKey: 'platters',
    nameEn: 'Special Sashimi Mix – 8 pcs',
    nameAr: 'سبيشل ساشيمي مكس – 8 قطع',
    price: '13$'
  }),

  // SPECIAL ROLLS
  makeItem({
    id: 'special-dynamite',
    categoryKey: 'special_rolls',
    nameEn: 'Dynamite Shrimp Roll – 8 pcs',
    nameAr: 'داينامايت روبيان رول – 8 قطع',
    price: '12$'
  }),
  makeItem({
    id: 'special-dragon',
    categoryKey: 'special_rolls',
    nameEn: 'Dragon Roll – 8 pcs',
    nameAr: 'دراجون رول – 8 قطع',
    price: '10$'
  }),

  // MINI BOAT
  makeItem({
    id: 'boat-mini',
    categoryKey: 'boat_mini',
    nameEn: 'Mini Boat – 25 pcs',
    nameAr: 'ميني بوت – 25 قطعة',
    price: '32$',
    descEn: 'Selection of crispy crazy, volcano, California, sashimi & sushi',
    descAr: 'تشكيلة من كريسبي كريزي، فولكينو، كاليفورنيا، ساشيمي وسوشي'
  }),

  // BIG BOAT
  makeItem({
    id: 'boat-big',
    categoryKey: 'boat_big',
    nameEn: 'Big Boat – 50 pcs',
    nameAr: 'بيغ بوت – 50 قطعة',
    price: '60$'
  }),

  // PIZZA
  makeItem({
    id: 'pizza-vegetarian',
    categoryKey: 'pizza',
    nameEn: 'Vegetarian Pizza',
    nameAr: 'بيتزا خضار',
    price: '10$'
  }),
  makeItem({
    id: 'pizza-margharita',
    categoryKey: 'pizza',
    nameEn: 'Margharita Pizza',
    nameAr: 'بيتزا مارغريتا',
    price: '10$'
  }),
  makeItem({
    id: 'pizza-shrimp',
    categoryKey: 'pizza',
    nameEn: 'Shrimp Pizza',
    nameAr: 'بيتزا روبيان',
    price: '12$'
  }),
  makeItem({
    id: 'pizza-pepperoni',
    categoryKey: 'pizza',
    nameEn: 'Pepperoni Pizza',
    nameAr: 'بيتزا ببروني',
    price: '12$'
  }),
  makeItem({
    id: 'pizza-smoked-salmon',
    categoryKey: 'pizza',
    nameEn: 'Smoked Salmon Pizza',
    nameAr: 'بيتزا سلمون مدخن',
    price: '14$'
  }),

  // KUMPIR POTATO
  makeItem({
    id: 'kumpir-loaded',
    categoryKey: 'kumpir',
    nameEn: 'Loaded Kumpir',
    nameAr: 'كمبير محشوة',
    price: '7$',
    descEn: 'Mushroom, cabbage, pickles, corn, carrots, olives',
    descAr: 'فطر، ملفوف، مخلل، ذرة، جزر، زيتون'
  }),
  makeItem({
    id: 'kumpir-mortadella',
    categoryKey: 'kumpir',
    nameEn: 'Add Mortadella',
    nameAr: 'إضافة مرتديلا',
    price: '1.5$'
  }),
  makeItem({
    id: 'kumpir-chicken',
    categoryKey: 'kumpir',
    nameEn: 'Add Chicken',
    nameAr: 'إضافة دجاج',
    price: '1.5$'
  }),
  makeItem({
    id: 'kumpir-shrimp',
    categoryKey: 'kumpir',
    nameEn: 'Add Shrimp',
    nameAr: 'إضافة روبيان',
    price: '2$'
  }),

  // PASTA
  makeItem({
    id: 'pasta-chicken-fettuccine',
    categoryKey: 'pasta',
    nameEn: 'Chicken Fettuccine',
    nameAr: 'فيتوتشيني دجاج',
    price: '12.5$'
  }),
  makeItem({
    id: 'pasta-bolognese',
    categoryKey: 'pasta',
    nameEn: 'Pasta Bolognese',
    nameAr: 'باستا بولونيز',
    price: '11$'
  }),
  makeItem({
    id: 'pasta-arrabiata',
    categoryKey: 'pasta',
    nameEn: 'Pasta Arrabiata',
    nameAr: 'باستا أرابياتا',
    price: '6.5$'
  }),
  makeItem({
    id: 'pasta-shrimp',
    categoryKey: 'pasta',
    nameEn: 'Shrimp Pasta',
    nameAr: 'باستا روبيان',
    price: '12.5$'
  }),
  makeItem({
    id: 'pasta-pesto',
    categoryKey: 'pasta',
    nameEn: 'Pasta al Pesto',
    nameAr: 'باستا بيستو',
    price: '8$'
  }),

  // HOT PLATES
  makeItem({
    id: 'hot-chicken-scallop',
    categoryKey: 'hot_plates',
    nameEn: 'Chicken Scallop (with fries & salad)',
    nameAr: 'سكالوب دجاج (مع بطاطا وسلطة)',
    price: '11$'
  }),
  makeItem({
    id: 'hot-crispy-strips',
    categoryKey: 'hot_plates',
    nameEn: 'Crispy Chicken Strips (with fries & salad)',
    nameAr: 'ستربس دجاج مقرمش (مع بطاطا وسلطة)',
    price: '9$'
  }),
  makeItem({
    id: 'hot-chicken-burger',
    categoryKey: 'hot_plates',
    nameEn: 'Chicken Burger (with fries & salad)',
    nameAr: 'تشكن برغر (مع بطاطا وسلطة)',
    price: '9$'
  }),
  makeItem({
    id: 'hot-beef-burger',
    categoryKey: 'hot_plates',
    nameEn: 'Beef Burger (with fries & salad)',
    nameAr: 'بيف برغر (مع بطاطا وسلطة)',
    price: '11$'
  }),
  makeItem({
    id: 'hot-shrimp-tempura',
    categoryKey: 'hot_plates',
    nameEn: 'Shrimp Tempura (with fries & salad)',
    nameAr: 'روبيان تيمبورا (مع بطاطا وسلطة)',
    price: '12$'
  }),
  makeItem({
    id: 'hot-grilled-salmon',
    categoryKey: 'hot_plates',
    nameEn: 'Grilled Salmon (with vegetables)',
    nameAr: 'سلمون مشوي (مع خضار)',
    price: '25$'
  }),
  makeItem({
    id: 'hot-fries',
    categoryKey: 'hot_plates',
    nameEn: 'Fries',
    nameAr: 'بطاطا مقلية',
    price: '2$'
  }),

  // DRINKS (نبسّط شوية)
  makeItem({
    id: 'drinks-water-big',
    categoryKey: 'drinks',
    nameEn: 'Water (Big)',
    nameAr: 'مياه كبيرة',
    price: '1.1$'
  }),
  makeItem({
    id: 'drinks-water-small',
    categoryKey: 'drinks',
    nameEn: 'Water (Small)',
    nameAr: 'مياه صغيرة',
    price: '0.5$'
  }),
  makeItem({
    id: 'drinks-pepsi',
    categoryKey: 'drinks',
    nameEn: 'Pepsi',
    nameAr: 'بيبسي',
    price: '1.75$'
  }),
  makeItem({
    id: 'drinks-7up',
    categoryKey: 'drinks',
    nameEn: '7Up',
    nameAr: 'سفن أب',
    price: '1.75$'
  }),
  makeItem({
    id: 'drinks-mirinda',
    categoryKey: 'drinks',
    nameEn: 'Mirinda',
    nameAr: 'ميريندا',
    price: '1.75$'
  }),
  makeItem({
    id: 'drinks-orange-juice',
    categoryKey: 'drinks',
    nameEn: 'Fresh Orange Juice',
    nameAr: 'عصير برتقال طازج',
    price: '3.7$'
  }),
  makeItem({
    id: 'drinks-strawberry-juice',
    categoryKey: 'drinks',
    nameEn: 'Strawberry Juice',
    nameAr: 'عصير فراولة',
    price: '3.7$'
  }),
  makeItem({
    id: 'drinks-lemonade',
    categoryKey: 'drinks',
    nameEn: 'Lemonade',
    nameAr: 'ليموناضة',
    price: '2.65$'
  }),
  makeItem({
    id: 'drinks-mango-juice',
    categoryKey: 'drinks',
    nameEn: 'Mango Juice',
    nameAr: 'عصير مانغو',
    price: '4.2$'
  }),
  makeItem({
    id: 'drinks-mint-lemon',
    categoryKey: 'drinks',
    nameEn: 'Minted Lemonade',
    nameAr: 'ليموناضة بالنعناع',
    price: '2.85$'
  }),
  makeItem({
    id: 'drinks-espresso',
    categoryKey: 'drinks',
    nameEn: 'Espresso',
    nameAr: 'إسبريسو',
    price: '1.5$'
  }),
  makeItem({
    id: 'drinks-double-espresso',
    categoryKey: 'drinks',
    nameEn: 'Double Espresso',
    nameAr: 'دبل إسبريسو',
    price: '1.5$'
  }),
  makeItem({
    id: 'drinks-cappuccino',
    categoryKey: 'drinks',
    nameEn: 'Cappuccino',
    nameAr: 'كابتشينو',
    price: '1.9$'
  }),
  makeItem({
    id: 'drinks-nescafe',
    categoryKey: 'drinks',
    nameEn: 'Nescafe',
    nameAr: 'نسكافيه',
    price: '1.9$'
  }),
  makeItem({
    id: 'drinks-hot-chocolate',
    categoryKey: 'drinks',
    nameEn: 'Hot Chocolate',
    nameAr: 'هوت تشوكليت',
    price: '3.3$'
  }),
  makeItem({
    id: 'drinks-americano',
    categoryKey: 'drinks',
    nameEn: 'Americano',
    nameAr: 'أمريكانو',
    price: '1.9$'
  }),
  makeItem({
    id: 'drinks-flat-white',
    categoryKey: 'drinks',
    nameEn: 'Flat White',
    nameAr: 'فلات وايت',
    price: '2.2$'
  }),
  makeItem({
    id: 'drinks-tea',
    categoryKey: 'drinks',
    nameEn: 'Tea (Black / Green / Herbal)',
    nameAr: 'شاي (أسود / أخضر / أعشاب)',
    price: '1.8$'
  })
];

export default menuItems;
