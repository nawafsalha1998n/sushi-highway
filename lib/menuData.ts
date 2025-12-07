export type MenuCategory =
  | 'starters'
  | 'salads'
  | 'temaki'
  | 'hosoMaki'
  | 'futoMaki'
  | 'uraTuna'
  | 'uraCrab'
  | 'uraSalmon'
  | 'uraShrimp'
  | 'sashimi'
  | 'sushi'
  | 'duoMaki'
  | 'vegetarianMaki'
  | 'reginaSpecialMaki'
  | 'creamySmokedSalmonCrab'
  | 'platters'
  | 'specialRolls'
  | 'miniBoat'
  | 'bigBoat'
  | 'pizza'
  | 'kumpir'
  | 'pasta'
  | 'hotPlates'
  | 'drinks';

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
  { id: 'starters', label: { en: 'Starters', ar: 'المقبلات' } },
  { id: 'salads', label: { en: 'Salads', ar: 'السلطات' } },
  { id: 'temaki', label: { en: 'Temaki (1 pc)', ar: 'تِماكي (قطعة واحدة)' } },
  {
    id: 'hosoMaki',
    label: { en: 'Hoso Maki (4 pcs)', ar: 'هوسو ماكي (٤ قطع)' }
  },
  {
    id: 'futoMaki',
    label: { en: 'Futo Maki (4 pcs)', ar: 'فوتو ماكي (٤ قطع)' }
  },
  {
    id: 'uraTuna',
    label: { en: 'Uramaki Tuna (4 pcs)', ar: 'أوراماكي تونة (٤ قطع)' }
  },
  {
    id: 'uraCrab',
    label: { en: 'Uramaki Crab (4 pcs)', ar: 'أوراماكي كابوريا (٤ قطع)' }
  },
  {
    id: 'uraSalmon',
    label: { en: 'Uramaki Salmon (4 pcs)', ar: 'أوراماكي سالمون (٤ قطع)' }
  },
  {
    id: 'uraShrimp',
    label: { en: 'Uramaki Shrimp (4 pcs)', ar: 'أوراماكي روبيان (٤ قطع)' }
  },
  { id: 'sashimi', label: { en: 'Sashimi (2 pcs)', ar: 'ساشيمي (٢ قطعة)' } },
  { id: 'sushi', label: { en: 'Sushi (2 pcs)', ar: 'سوشي (٢ قطعة)' } },
  { id: 'duoMaki', label: { en: 'Duo Maki (4 pcs)', ar: 'ديو ماكي (٤ قطع)' } },
  {
    id: 'vegetarianMaki',
    label: { en: 'Vegetarian Maki (4 pcs)', ar: 'فيجيتيريان ماكي (٤ قطع)' }
  },
  {
    id: 'reginaSpecialMaki',
    label: { en: 'Regina Special Maki (4 pcs)', ar: 'ريجينا سبيشل ماكي (٤ قطع)' }
  },
  {
    id: 'creamySmokedSalmonCrab',
    label: {
      en: 'Creamy / Smoked / Salmon Crab Maki',
      ar: 'كريمي / سموكد / سالمون كاب ماكي'
    }
  },
  { id: 'platters', label: { en: 'Platters', ar: 'بوكسات / بلايتر' } },
  { id: 'specialRolls', label: { en: 'Special Rolls', ar: 'لفائف خاصة' } },
  { id: 'miniBoat', label: { en: 'Mini Boat', ar: 'ميني بوت' } },
  { id: 'bigBoat', label: { en: 'Big Boat', ar: 'بيغ بوت' } },
  { id: 'pizza', label: { en: 'Italian Pizza', ar: 'بيتزا إيطالية' } },
  { id: 'kumpir', label: { en: 'Kumpir Potato', ar: 'بطاطا كومبير' } },
  { id: 'pasta', label: { en: 'Pasta', ar: 'باستا' } },
  { id: 'hotPlates', label: { en: 'Hot Plates', ar: 'أطباق ساخنة' } },
  { id: 'drinks', label: { en: 'Drinks', ar: 'المشروبات' } }
];

const menuItems: MenuItem[] = [
  // STARTERS
  {
    id: 'starters-edamame',
    category: 'starters',
    name: { en: 'Edamame', ar: 'إدامامي' },
    description: {
      en: 'Steamed soybeans with sea salt.',
      ar: 'فول صويا مطهو على البخار مع ملح بحري.'
    },
    price: '5$',
    isSignature: true
  },
  {
    id: 'starters-cheese-rolls',
    category: 'starters',
    name: { en: 'Cheese Rolls', ar: 'تشيز رولز' },
    description: {
      en: 'Crispy cheese rolls.',
      ar: 'لفائف جبنة مقلية مقرمشة.'
    },
    price: '4.6$'
  },
  {
    id: 'starters-spring-rolls',
    category: 'starters',
    name: { en: 'Spring Rolls', ar: 'سبرينغ رولز' },
    description: {
      en: 'Vegetable spring rolls.',
      ar: 'سبرينغ رولز خضار مقرمشة.'
    },
    price: '3.5$'
  },

  // SALADS
  {
    id: 'salads-crab-salad',
    category: 'salads',
    name: { en: 'Crab Salad', ar: 'سلطة كابوريا' },
    description: {
      en: 'Shrimp 180g, avocado, mango, crispy topping.',
      ar: 'روبيان 180غ، أفوكادو، مانغو، وتوبينغ مقرمش.'
    },
    price: '12$'
  },
  {
    id: 'salads-salmon-salad',
    category: 'salads',
    name: { en: 'Salmon Salad', ar: 'سلطة سالمون' },
    description: {
      en: 'Salmon 180g, avocado, mango, crispy topping.',
      ar: 'سالمون 180غ، أفوكادو، مانغو، وتوبينغ مقرمش.'
    },
    price: '16$',
    isSignature: true
  },
  {
    id: 'salads-shrimp-salad',
    category: 'salads',
    name: { en: 'Shrimp Salad', ar: 'سلطة روبيان' },
    description: {
      en: 'Shrimp 180g, avocado, mango, crispy topping.',
      ar: 'روبيان 180غ، أفوكادو، مانغو، وتوبينغ مقرمش.'
    },
    price: '15$'
  },
  {
    id: 'salads-tuna-salad',
    category: 'salads',
    name: { en: 'Tuna Salad', ar: 'سلطة تونة' },
    description: {
      en: 'Tuna 180g, avocado, mango, crispy topping.',
      ar: 'تونة 180غ، أفوكادو، مانغو، وتوبينغ مقرمش.'
    },
    price: '16$'
  },
  {
    id: 'salads-mixed-seafood',
    category: 'salads',
    name: { en: 'Mixed Sea Food Salad', ar: 'سلطة مأكولات بحرية مشكّلة' },
    description: {
      en: 'Crab, salmon, tuna, shrimp mix.',
      ar: 'خليط من كابوريا، سالمون، تونة، وروبيان.'
    },
    price: '16$',
    isSignature: true
  },
  {
    id: 'salads-greek',
    category: 'salads',
    name: { en: 'Greek Salad', ar: 'سلطة يونانية' },
    description: {
      en: 'Classic Greek salad.',
      ar: 'سلطة يونانية كلاسيكية.'
    },
    price: '6$'
  },
  {
    id: 'salads-lebanese',
    category: 'salads',
    name: { en: 'Lebanese Salad', ar: 'سلطة لبنانية' },
    description: {
      en: 'Fresh Lebanese-style salad.',
      ar: 'سلطة على الطريقة اللبنانية.'
    },
    price: '5.5$'
  },

  // TEMAKI – 1 PC
  {
    id: 'temaki-tuna',
    category: 'temaki',
    name: { en: 'Tuna Temaki', ar: 'تماكي تونة' },
    description: { en: 'Tuna hand roll.', ar: 'تماكي تونة (رول يدوي).' },
    price: '6$'
  },
  {
    id: 'temaki-salmon',
    category: 'temaki',
    name: { en: 'Salmon Temaki', ar: 'تماكي سالمون' },
    description: { en: 'Salmon hand roll.', ar: 'تماكي سالمون (رول يدوي).' },
    price: '6$'
  },
  {
    id: 'temaki-crab',
    category: 'temaki',
    name: { en: 'Crab Temaki', ar: 'تماكي كابوريا' },
    description: { en: 'Crab hand roll.', ar: 'تماكي كابوريا.' },
    price: '4$'
  },
  {
    id: 'temaki-shrimp',
    category: 'temaki',
    name: { en: 'Shrimp Temaki', ar: 'تماكي روبيان' },
    description: { en: 'Shrimp hand roll.', ar: 'تماكي روبيان.' },
    price: '4$'
  },
  {
    id: 'temaki-hawaiian',
    category: 'temaki',
    name: { en: 'Hawaiian Temaki', ar: 'تماكي هاواي' },
    description: { en: 'Hawaiian style hand roll.', ar: 'تماكي هاواي.' },
    price: '4$'
  },
  {
    id: 'temaki-california',
    category: 'temaki',
    name: { en: 'California Temaki', ar: 'تماكي كاليفورنيا' },
    description: { en: 'California style hand roll.', ar: 'تماكي كاليفورنيا.' },
    price: '4$'
  },

  // HOSO MAKI – 4 PCS
  {
    id: 'hoso-salmon',
    category: 'hosoMaki',
    name: { en: 'Salmon Hoso Maki', ar: 'سالمون هوسو ماكي' },
    description: { en: 'Salmon hoso maki (4 pcs).', ar: '٤ قطع هوسو ماكي سالمون.' },
    price: '5$'
  },
  {
    id: 'hoso-crab',
    category: 'hosoMaki',
    name: { en: 'Crab Hoso Maki', ar: 'كابوريا هوسو ماكي' },
    description: { en: 'Crab hoso maki (4 pcs).', ar: '٤ قطع هوسو ماكي كابوريا.' },
    price: '4$'
  },
  {
    id: 'hoso-tuna',
    category: 'hosoMaki',
    name: { en: 'Tuna Hoso Maki', ar: 'تونة هوسو ماكي' },
    description: { en: 'Tuna hoso maki (4 pcs).', ar: '٤ قطع هوسو ماكي تونة.' },
    price: '4.5$'
  },
  {
    id: 'hoso-avocado',
    category: 'hosoMaki',
    name: { en: 'Avocado Hoso Maki', ar: 'أفوكادو هوسو ماكي' },
    description: { en: 'Avocado hoso maki (4 pcs).', ar: '٤ قطع هوسو ماكي أفوكادو.' },
    price: '4$'
  },
  {
    id: 'hoso-mango',
    category: 'hosoMaki',
    name: { en: 'Mango Hoso Maki', ar: 'مانغو هوسو ماكي' },
    description: { en: 'Mango hoso maki (4 pcs).', ar: '٤ قطع هوسو ماكي مانغو.' },
    price: '4$'
  },
  {
    id: 'hoso-cucumber',
    category: 'hosoMaki',
    name: { en: 'Cucumber Hoso Maki', ar: 'خيار هوسو ماكي' },
    description: { en: 'Cucumber hoso maki (4 pcs).', ar: '٤ قطع هوسو ماكي خيار.' },
    price: '3.5$'
  },
  {
    id: 'hoso-shrimp',
    category: 'hosoMaki',
    name: { en: 'Shrimp Hoso Maki', ar: 'روبيان هوسو ماكي' },
    description: { en: 'Shrimp hoso maki (4 pcs).', ar: '٤ قطع هوسو ماكي روبيان.' },
    price: '3.5$'
  },

  // FUTO MAKI – 4 PCS
  {
    id: 'futo-hawaiian',
    category: 'futoMaki',
    name: { en: 'Hawaiian Futo Maki', ar: 'هاواي فوتو ماكي' },
    description: { en: 'Hawaiian style futo maki (4 pcs).', ar: '٤ قطع فوتو ماكي هاواي.' },
    price: '6$'
  },
  {
    id: 'futo-mixed',
    category: 'futoMaki',
    name: { en: 'Mixed Futo Maki', ar: 'فوتو ماكي مشكل' },
    description: { en: 'Mixed futo maki (4 pcs).', ar: '٤ قطع فوتو ماكي مشكل.' },
    price: '7$'
  },

  // URAMAKI TUNA – 4 PCS
  {
    id: 'ura-tuna-volcano',
    category: 'uraTuna',
    name: { en: 'Volcano Tuna', ar: 'فولكانو تونة' },
    description: { en: 'Volcano tuna uramaki (4 pcs).', ar: '٤ قطع فولكانو تونة.' },
    price: '7$'
  },
  {
    id: 'ura-tuna-wrap',
    category: 'uraTuna',
    name: { en: 'Tuna Wrap', ar: 'تونة راب' },
    description: { en: 'Tuna wrap uramaki (4 pcs).', ar: '٤ قطع تونة راب.' },
    price: '7$'
  },

  // URAMAKI CRAB – 4 PCS
  {
    id: 'ura-crab-california',
    category: 'uraCrab',
    name: { en: 'California', ar: 'كاليفورنيا' },
    description: { en: 'California uramaki (4 pcs).', ar: '٤ قطع كاليفورنيا رول.' },
    price: '3$'
  },
  {
    id: 'ura-crab-california-ebiko',
    category: 'uraCrab',
    name: { en: 'California Ebiko', ar: 'كاليفورنيا إبيكو' },
    description: { en: 'California with ebiko (4 pcs).', ar: '٤ قطع كاليفورنيا مع إبيكو.' },
    price: '5$'
  },
  {
    id: 'ura-crab-crispy-california',
    category: 'uraCrab',
    name: { en: 'Crispy California', ar: 'كريسبي كاليفورنيا' },
    description: { en: 'Crispy California roll (4 pcs).', ar: '٤ قطع كريسبي كاليفورنيا.' },
    price: '3$'
  },
  {
    id: 'ura-crab-crispy-crazy',
    category: 'uraCrab',
    name: { en: 'Crispy Crazy', ar: 'كريسبي كرايزي' },
    description: { en: 'Crispy crazy crab roll (4 pcs).', ar: '٤ قطع كريسبي كرايزي.' },
    price: '4$'
  },
  {
    id: 'ura-crab-crunchy-crab',
    category: 'uraCrab',
    name: { en: 'Crunchy Crab', ar: 'كرنشي كابوريا' },
    description: { en: 'Crunchy crab roll (4 pcs).', ar: '٤ قطع كرنشي كابوريا.' },
    price: '3.5$'
  },
  {
    id: 'ura-crab-spicy-crab',
    category: 'uraCrab',
    name: { en: 'Spicy Crab', ar: 'سبايسي كابوريا' },
    description: { en: 'Spicy crab roll (4 pcs).', ar: '٤ قطع سبايسي كابوريا.' },
    price: '4$'
  },
  {
    id: 'ura-crab-fruity-crab',
    category: 'uraCrab',
    name: { en: 'Fruity Crab', ar: 'فروتي كابوريا' },
    description: { en: 'Fruity crab roll (4 pcs).', ar: '٤ قطع فروتي كابوريا.' },
    price: '5$'
  },
  {
    id: 'ura-crab-rainbow-kani',
    category: 'uraCrab',
    name: { en: 'Rainbow Kani', ar: 'رينبو كاني' },
    description: { en: 'Rainbow kani roll (4 pcs).', ar: '٤ قطع رينبو كاني.' },
    price: '5$'
  },
  {
    id: 'ura-crab-avocado-wrap',
    category: 'uraCrab',
    name: { en: 'Crab Avocado Wrap', ar: 'كابوريا أفوكادو راب' },
    description: { en: 'Crab avocado wrap (4 pcs).', ar: '٤ قطع كابوريا أفوكادو راب.' },
    price: '4$'
  },

  // URAMAKI SALMON – 4 PCS
  {
    id: 'ura-salmon-volcano',
    category: 'uraSalmon',
    name: { en: 'Volcano Salmon', ar: 'فولكانو سالمون' },
    description: { en: 'Volcano salmon roll (4 pcs).', ar: '٤ قطع فولكانو سالمون.' },
    price: '8$',
    isSignature: true
  },
  {
    id: 'ura-salmon-ebiko',
    category: 'uraSalmon',
    name: { en: 'Salmon Ebiko', ar: 'سالمون إبيكو' },
    description: { en: 'Salmon ebiko roll (4 pcs).', ar: '٤ قطع سالمون إبيكو.' },
    price: '7$'
  },
  {
    id: 'ura-salmon-fruity',
    category: 'uraSalmon',
    name: { en: 'Fruity Salmon', ar: 'فروتي سالمون' },
    description: { en: 'Fruity salmon roll (4 pcs).', ar: '٤ قطع فروتي سالمون.' },
    price: '6$'
  },
  {
    id: 'ura-salmon-wrap',
    category: 'uraSalmon',
    name: { en: 'Salmon Wrap', ar: 'سالمون راب' },
    description: { en: 'Salmon wrap roll (4 pcs).', ar: '٤ قطع سالمون راب.' },
    price: '6$'
  },
  {
    id: 'ura-salmon-avocado',
    category: 'uraSalmon',
    name: { en: 'Salmon Avocado', ar: 'سالمون أفوكادو' },
    description: { en: 'Salmon avocado roll (4 pcs).', ar: '٤ قطع سالمون أفوكادو.' },
    price: '4$'
  },
  {
    id: 'ura-salmon-mango',
    category: 'uraSalmon',
    name: { en: 'Salmon Mango', ar: 'سالمون مانغو' },
    description: { en: 'Salmon mango roll (4 pcs).', ar: '٤ قطع سالمون مانغو.' },
    price: '6$'
  },
  {
    id: 'ura-salmon-philadelphia',
    category: 'uraSalmon',
    name: { en: 'Salmon Philadelphia', ar: 'سالمون فيلادلفيا' },
    description: {
      en: 'Creamy salmon Philadelphia roll (4 pcs).',
      ar: '٤ قطع سالمون فيلادلفيا.'
    },
    price: '6$'
  },

  // URAMAKI SHRIMP – 4 PCS
  {
    id: 'ura-shrimp-volcano',
    category: 'uraShrimp',
    name: { en: 'Volcano Shrimp', ar: 'فولكانو روبيان' },
    description: { en: 'Volcano shrimp roll (4 pcs).', ar: '٤ قطع فولكانو روبيان.' },
    price: '5$'
  },
  {
    id: 'ura-shrimp-crispy',
    category: 'uraShrimp',
    name: { en: 'Shrimp Crispy', ar: 'كريسبي روبيان' },
    description: { en: 'Crispy shrimp roll (4 pcs).', ar: '٤ قطع رول روبيان كريسبي.' },
    price: '5$'
  },
  {
    id: 'ura-shrimp-mango',
    category: 'uraShrimp',
    name: { en: 'Shrimp Mango', ar: 'روبيان مانغو' },
    description: { en: 'Shrimp mango roll (4 pcs).', ar: '٤ قطع رول روبيان مع مانغو.' },
    price: '5$'
  },
  {
    id: 'ura-shrimp-fruity',
    category: 'uraShrimp',
    name: { en: 'Fruity Shrimp', ar: 'فروتي روبيان' },
    description: { en: 'Fruity shrimp roll (4 pcs).', ar: '٤ قطع فروتي روبيان.' },
    price: '5$'
  },
  {
    id: 'ura-shrimp-ebiko',
    category: 'uraShrimp',
    name: { en: 'Shrimp Ebiko', ar: 'روبيان إبيكو' },
    description: { en: 'Shrimp ebiko roll (4 pcs).', ar: '٤ قطع روبيان إبيكو.' },
    price: '5$'
  },

  // SASHIMI – 2 PCS
  {
    id: 'sashimi-salmon',
    category: 'sashimi',
    name: { en: 'Salmon Sashimi', ar: 'سالمون ساشيمي' },
    description: { en: '2 pcs salmon sashimi.', ar: '٢ قطعة سالمون ساشيمي.' },
    price: '4$'
  },
  {
    id: 'sashimi-tuna',
    category: 'sashimi',
    name: { en: 'Tuna Sashimi', ar: 'تونة ساشيمي' },
    description: { en: '2 pcs tuna sashimi.', ar: '٢ قطعة تونة ساشيمي.' },
    price: '4$'
  },
  {
    id: 'sashimi-crab',
    category: 'sashimi',
    name: { en: 'Crab Sashimi', ar: 'كابوريا ساشيمي' },
    description: { en: '2 pcs crab sashimi.', ar: '٢ قطعة كابوريا ساشيمي.' },
    price: '2.5$'
  },
  {
    id: 'sashimi-shrimp',
    category: 'sashimi',
    name: { en: 'Shrimp Sashimi', ar: 'روبيان ساشيمي' },
    description: { en: '2 pcs shrimp sashimi.', ar: '٢ قطعة روبيان ساشيمي.' },
    price: '4$'
  },

  // SUSHI – 2 PCS
  {
    id: 'sushi-salmon',
    category: 'sushi',
    name: { en: 'Salmon Sushi', ar: 'سالمون سوشي' },
    description: { en: '2 pcs salmon sushi.', ar: '٢ قطعة سالمون سوشي.' },
    price: '4$'
  },
  {
    id: 'sushi-tuna',
    category: 'sushi',
    name: { en: 'Tuna Sushi', ar: 'تونة سوشي' },
    description: { en: '2 pcs tuna sushi.', ar: '٢ قطعة تونة سوشي.' },
    price: '4$'
  },
  {
    id: 'sushi-shrimp',
    category: 'sushi',
    name: { en: 'Shrimp Sushi', ar: 'روبيان سوشي' },
    description: { en: '2 pcs shrimp sushi.', ar: '٢ قطعة روبيان سوشي.' },
    price: '3$'
  },
  {
    id: 'sushi-crab',
    category: 'sushi',
    name: { en: 'Crab Sushi', ar: 'كابوريا سوشي' },
    description: { en: '2 pcs crab sushi.', ar: '٢ قطعة كابوريا سوشي.' },
    price: '2.5$'
  },

  // DUO MAKI – 4 PCS
  {
    id: 'duo-maki',
    category: 'duoMaki',
    name: {
      en: 'Duo Maki',
      ar: 'ديو ماكي'
    },
    description: {
      en: 'Salmon, tuna, avocado roll wrapped in salmon and tuna (4 pcs).',
      ar: 'رول سالمون، تونة وأفوكادو ملفوف بسالمون وتونة (٤ قطع).'
    },
    price: '6.5$'
  },

  // VEGETARIAN MAKI – 4 PCS
  {
    id: 'vegetarian-maki',
    category: 'vegetarianMaki',
    name: { en: 'Vegetarian Maki', ar: 'فيجيتيريان ماكي' },
    description: {
      en: 'Mango, avocado, cucumber, lettuce roll wrapped in parsley (4 pcs).',
      ar: 'لفافة مانغو، أفوكادو، خيار وخس ملفوفة ببقدونس (٤ قطع).'
    },
    price: '4$'
  },

  // REGINA SPECIAL MAKI – 4 PCS
  {
    id: 'regina-special',
    category: 'reginaSpecialMaki',
    name: { en: 'Regina Special Maki', ar: 'ريجينا سبيشل ماكي' },
    description: {
      en: 'Grilled salmon wrapped in avocado (4 pcs).',
      ar: 'سالمون مشوي ملفوف بأفوكادو (٤ قطع).'
    },
    price: '4.75$'
  },

  // CREAMY / SMOKED / SALMON CRAB MAKI
  {
    id: 'creamy-shrimp',
    category: 'creamySmokedSalmonCrab',
    name: { en: 'Creamy Shrimp (4 pcs)', ar: 'كريمي روبيان (٤ قطع)' },
    description: {
      en: 'Shrimp mixed with Philadelphia and avocado wrapped in avocado.',
      ar: 'روبيان مع جبنة فيلادلفيا وأفوكادو، ملفوف بأفوكادو.'
    },
    price: '5.5$'
  },
  {
    id: 'smoked-salmon-maki',
    category: 'creamySmokedSalmonCrab',
    name: { en: 'Smoked Salmon Maki (4 pcs)', ar: 'سموكد سالمون ماكي (٤ قطع)' },
    description: {
      en: 'Smoked salmon and avocado roll wrapped in smoked salmon.',
      ar: 'رول سالمون مدخّن وأفوكادو ملفوف بسالمون مدخّن.'
    },
    price: '6.5$'
  },
  {
    id: 'salmon-crab-maki',
    category: 'creamySmokedSalmonCrab',
    name: { en: 'Salmon Crab Maki (4 pcs)', ar: 'سالمون كاب ماكي (٤ قطع)' },
    description: {
      en: 'Salmon and mango roll wrapped in crab.',
      ar: 'رول سالمون ومانغو ملفوف بكابوريا.'
    },
    price: '6.5$'
  },

  // PLATTERS
  {
    id: 'platter-crab-mix',
    category: 'platters',
    name: { en: 'Crab Mix – 12 pcs', ar: 'كراب ميكس – ١٢ قطعة' },
    description: {
      en: 'Crazy maki 4 pcs, Avocado wrap 4 pcs, Fruity crab 4 pcs.',
      ar: '٤ قطع كرايزي ماكي، ٤ قطع أفوكادو راب، ٤ قطع فروتي كراب.'
    },
    price: '12$',
    isSignature: true
  },
  {
    id: 'platter-salmon-mix',
    category: 'platters',
    name: { en: 'Salmon Mix – 12 pcs', ar: 'سالمون ميكس – ١٢ قطعة' },
    description: {
      en: 'Salmon maki 4 pcs, Fruity salmon 4 pcs, Volcano salmon 4 pcs, Salmon wrap 4 pcs.',
      ar: '٤ سالمون ماكي، ٤ فروتي سالمون، ٤ فولكانو سالمون، ٤ سالمون راب.'
    },
    price: '18$',
    isSignature: true
  },
  {
    id: 'platter-shrimp-mix',
    category: 'platters',
    name: { en: 'Shrimp Mix – 12 pcs', ar: 'روبيان ميكس – ١٢ قطعة' },
    description: {
      en: 'Shrimp volcano 4 pcs, Shrimp mango 4 pcs, Shrimp ebiko 4 pcs.',
      ar: '٤ فولكانو روبيان، ٤ روبيان مانغو، ٤ روبيان إبيكو.'
    },
    price: '14$'
  },
  {
    id: 'platter-special-mix',
    category: 'platters',
    name: { en: 'Special Mix – 12 pcs', ar: 'سبيشل ميكس – ١٢ قطعة' },
    description: {
      en: 'Avocado wrap 4 pcs, Volcano salmon 4 pcs, Fruity shrimp 4 pcs.',
      ar: '٤ أفوكادو راب، ٤ فولكانو سالمون، ٤ فروتي روبيان.'
    },
    price: '17$'
  },
  {
    id: 'platter-special-sashimi',
    category: 'platters',
    name: { en: 'Special Sashimi Mix – 8 pcs', ar: 'سبيشل ساشيمي ميكس – ٨ قطع' },
    description: {
      en: 'Salmon, tuna, shrimp, crab.',
      ar: 'سالمون، تونة، روبيان، كابوريا.'
    },
    price: '13$'
  },

  // SPECIAL ROLLS
  {
    id: 'special-dynamite-shrimp-roll',
    category: 'specialRolls',
    name: { en: 'Dynamite Shrimp Roll – 8 pcs', ar: 'دايناميت روبيان رول – ٨ قطع' },
    description: {
      en: 'Crispy shrimp roll with dynamite sauce.',
      ar: 'رول روبيان مقرمش مع صوص دايناميت.'
    },
    price: '12$',
    isSignature: true
  },
  {
    id: 'special-dragon-roll',
    category: 'specialRolls',
    name: { en: 'Dragon Roll – 8 pcs', ar: 'دراجون رول – ٨ قطع' },
    description: {
      en: 'Layered roll with shrimp and avocado.',
      ar: 'رول مميز بطبقات روبيان وأفوكادو.'
    },
    price: '10$',
    isSignature: true
  },

  // MINI BOAT – 25 PCS
  {
    id: 'mini-boat',
    category: 'miniBoat',
    name: { en: 'Mini Boat – 25 pcs', ar: 'ميني بوت – ٢٥ قطعة' },
    description: {
      en: '3 Crispy Crazy Crab, 3 Volcano Salmon, 3 Philadelphia Salmon, 3 Fruity Crab, 3 Volcano Shrimp, 3 California, 3 Ebiko Shrimp, 2 sashimi, 2 sushi.',
      ar: 'تشكيلة من كريسبي كرايزي كراب، فولكانو سالمون، فيلادلفيا سالمون، فروتي كراب، فولكانو روبيان، كاليفورنيا، إبيكو روبيان، مع قطع ساشيمي وسوشي.'
    },
    price: '32$',
    isSignature: true
  },

  // BIG BOAT – 50 PCS
  {
    id: 'big-boat',
    category: 'bigBoat',
    name: { en: 'Big Boat – 50 pcs', ar: 'بيغ بوت – ٥٠ قطعة' },
    description: {
      en: 'Includes tuna, shrimp, crab and salmon sashimi and sushi, plus a large mix of special rolls.',
      ar: 'قارب كبير فيه ساشيمي وسوشي تونة، روبيان، كابوريا وسالمون مع تشكيلة لفائف مميزة.'
    },
    price: '60$',
    isSignature: true
  },

  // ITALIAN PIZZA
  {
    id: 'pizza-vegetarian',
    category: 'pizza',
    name: { en: 'Vegetarian Pizza', ar: 'بيتزا خضار' },
    description: { en: 'Italian vegetarian pizza.', ar: 'بيتزا إيطالية بالخضار.' },
    price: '10$'
  },
  {
    id: 'pizza-margharita',
    category: 'pizza',
    name: { en: 'Margharita Pizza', ar: 'بيتزا مارغريتا' },
    description: { en: 'Classic margharita pizza.', ar: 'بيتزا مارغريتا كلاسيكية.' },
    price: '10$'
  },
  {
    id: 'pizza-shrimp',
    category: 'pizza',
    name: { en: 'Shrimp Pizza', ar: 'بيتزا روبيان' },
    description: { en: 'Pizza topped with shrimp.', ar: 'بيتزا مع روبيان.' },
    price: '12$'
  },
  {
    id: 'pizza-pepperoni',
    category: 'pizza',
    name: { en: 'Pepperoni Pizza', ar: 'بيتزا ببروني' },
    description: { en: 'Pepperoni pizza.', ar: 'بيتزا ببروني.' },
    price: '12$'
  },
  {
    id: 'pizza-smoked-salmon',
    category: 'pizza',
    name: { en: 'Smoked Salmon Pizza', ar: 'بيتزا سالمون مدخّن' },
    description: { en: 'Pizza with smoked salmon.', ar: 'بيتزا مع سالمون مدخّن.' },
    price: '14$'
  },

  // KUMPIR POTATO
  {
    id: 'kumpir-loaded',
    category: 'kumpir',
    name: { en: 'Loaded Kumpir', ar: 'كومبير محشو' },
    description: {
      en: 'Mushroom, cabbage, pickles, corn, carrots, olives.',
      ar: 'فطر، ملفوف، مخلل، ذرة، جزر، زيتون.'
    },
    price: '7$'
  },
  {
    id: 'kumpir-add-mortadella',
    category: 'kumpir',
    name: { en: 'Add-ons: Mortadella', ar: 'إضافة: مرتديلا' },
    description: {
      en: 'Extra mortadella topping for kumpir.',
      ar: 'إضافة مرتديلا على الكومبير.'
    },
    price: '1.5$'
  },
  {
    id: 'kumpir-add-chicken',
    category: 'kumpir',
    name: { en: 'Add-ons: Chicken', ar: 'إضافة: دجاج' },
    description: {
      en: 'Extra chicken topping for kumpir.',
      ar: 'إضافة دجاج على الكومبير.'
    },
    price: '1.5$'
  },
  {
    id: 'kumpir-add-shrimp',
    category: 'kumpir',
    name: { en: 'Add-ons: Shrimp', ar: 'إضافة: روبيان' },
    description: {
      en: 'Extra shrimp topping for kumpir.',
      ar: 'إضافة روبيان على الكومبير.'
    },
    price: '2$'
  },

  // PASTA
  {
    id: 'pasta-chicken-fettuccine',
    category: 'pasta',
    name: { en: 'Chicken Fettuccine', ar: 'فيتوتشيني دجاج' },
    description: { en: 'Chicken fettuccine pasta.', ar: 'باستا فيتوتشيني مع دجاج.' },
    price: '12.5$'
  },
  {
    id: 'pasta-bolognese',
    category: 'pasta',
    name: { en: 'Pasta Bolognese', ar: 'باستا بولونيز' },
    description: { en: 'Classic bolognese pasta.', ar: 'باستا بلحم على طريقة بولونيز.' },
    price: '11$'
  },
  {
    id: 'pasta-arrabiata',
    category: 'pasta',
    name: { en: 'Pasta Arrabiata', ar: 'باستا أرابياتا' },
    description: { en: 'Spicy arrabiata pasta.', ar: 'باستا بصلصة أرابياتا الحارة.' },
    price: '6.5$'
  },
  {
    id: 'pasta-shrimp',
    category: 'pasta',
    name: { en: 'Shrimp Pasta', ar: 'باستا روبيان' },
    description: { en: 'Pasta with shrimp.', ar: 'باستا مع روبيان.' },
    price: '12.5$'
  },
  {
    id: 'pasta-pesto',
    category: 'pasta',
    name: { en: 'Pasta al Pesto', ar: 'باستا بيستو' },
    description: { en: 'Pasta with pesto sauce.', ar: 'باستا مع صلصة البيستو.' },
    price: '8$'
  },

  // HOT PLATES
  {
    id: 'hot-chicken-scallop',
    category: 'hotPlates',
    name: { en: 'Chicken Scallop', ar: 'تشكن سكالوب' },
    description: {
      en: 'Chicken scallop with fries & salad.',
      ar: 'تشكن سكالوب مع بطاطا مقلية وسلطة.'
    },
    price: '11$'
  },
  {
    id: 'hot-crispy-chicken-strips',
    category: 'hotPlates',
    name: { en: 'Crispy Chicken Strips', ar: 'ستريبس دجاج مقرمش' },
    description: {
      en: 'Crispy chicken strips with fries & salad.',
      ar: 'ستريبس دجاج مقرمش مع بطاطا وسلطة.'
    },
    price: '9$'
  },
  {
    id: 'hot-chicken-burger',
    category: 'hotPlates',
    name: { en: 'Chicken Burger', ar: 'تشكن برغر' },
    description: {
      en: 'Chicken burger with fries & salad.',
      ar: 'برغر دجاج مع بطاطا وسلطة.'
    },
    price: '9$'
  },
  {
    id: 'hot-beef-burger',
    category: 'hotPlates',
    name: { en: 'Beef Burger', ar: 'بيف برغر' },
    description: {
      en: 'Beef burger with fries & salad.',
      ar: 'برغر لحم مع بطاطا وسلطة.'
    },
    price: '11$'
  },
  {
    id: 'hot-shrimp-tempura',
    category: 'hotPlates',
    name: { en: 'Shrimp Tempura', ar: 'روبيان تيمبورا' },
    description: {
      en: 'Shrimp tempura with fries & salad.',
      ar: 'روبيان تيمبورا مع بطاطا وسلطة.'
    },
    price: '12$'
  },
  {
    id: 'hot-grilled-salmon',
    category: 'hotPlates',
    name: { en: 'Grilled Salmon', ar: 'سالمون مشوي' },
    description: {
      en: 'Grilled salmon with vegetables.',
      ar: 'سالمون مشوي مع خضار.'
    },
    price: '25$'
  },
  {
    id: 'hot-fries',
    category: 'hotPlates',
    name: { en: 'Fries', ar: 'بطاطا مقلية' },
    description: { en: 'Portion of fries.', ar: 'طبق بطاطا مقلية.' },
    price: '2$'
  },

  // DRINKS – كلهم تحت نفس الكاتيجوري مع تقسيم بالسطر في الوصف
  // Beverages
  {
    id: 'drinks-water-big',
    category: 'drinks',
    name: { en: 'Water (Big)', ar: 'مياه (كَبيرة)' },
    description: { en: 'Still water (big).', ar: 'مياه معدنية كبيرة.' },
    price: '1.1$'
  },
  {
    id: 'drinks-water-small',
    category: 'drinks',
    name: { en: 'Water (Small)', ar: 'مياه (صغيرة)' },
    description: { en: 'Still water (small).', ar: 'مياه معدنية صغيرة.' },
    price: '0.5$'
  },
  {
    id: 'drinks-pepsi',
    category: 'drinks',
    name: { en: 'Pepsi', ar: 'بيبسي' },
    description: { en: 'Soft drink.', ar: 'مشروب غازي.' },
    price: '1.75$'
  },
  {
    id: 'drinks-7up',
    category: 'drinks',
    name: { en: '7up', ar: 'سفن آب' },
    description: { en: 'Soft drink.', ar: 'مشروب غازي.' },
    price: '1.75$'
  },
  {
    id: 'drinks-mirinda',
    category: 'drinks',
    name: { en: 'Mirinda', ar: 'ميرندا' },
    description: { en: 'Soft drink.', ar: 'مشروب غازي.' },
    price: '1.75$'
  },

  // Fresh Juice
  {
    id: 'drinks-juice-orange',
    category: 'drinks',
    name: { en: 'Orange Juice', ar: 'عصير برتقال' },
    description: { en: 'Fresh orange juice.', ar: 'عصير برتقال طازج.' },
    price: '3.7$'
  },
  {
    id: 'drinks-juice-strawberry',
    category: 'drinks',
    name: { en: 'Strawberry Juice', ar: 'عصير فراولة' },
    description: { en: 'Fresh strawberry juice.', ar: 'عصير فراولة طازج.' },
    price: '3.7$'
  },
  {
    id: 'drinks-juice-carrot',
    category: 'drinks',
    name: { en: 'Carrot Juice', ar: 'عصير جزر' },
    description: { en: 'Fresh carrot juice.', ar: 'عصير جزر طازج.' },
    price: '3.75$'
  },
  {
    id: 'drinks-juice-lemonade',
    category: 'drinks',
    name: { en: 'Lemonade', ar: 'ليموناضة' },
    description: { en: 'Fresh lemonade.', ar: 'ليموناضة طازجة.' },
    price: '2.65$'
  },
  {
    id: 'drinks-juice-mango',
    category: 'drinks',
    name: { en: 'Mango Juice', ar: 'عصير مانغو' },
    description: { en: 'Fresh mango juice.', ar: 'عصير مانغو طازج.' },
    price: '4.2$'
  },
  {
    id: 'drinks-juice-minted-lemonade',
    category: 'drinks',
    name: { en: 'Minted Lemonade', ar: 'ليموناضة بالنعناع' },
    description: { en: 'Lemonade with mint.', ar: 'ليموناضة مع نعناع.' },
    price: '2.85$'
  },

  // Milkshake
  {
    id: 'drinks-milkshake-strawberry',
    category: 'drinks',
    name: { en: 'Strawberry Milkshake', ar: 'ميلك شيك فراولة' },
    description: { en: 'Strawberry milkshake.', ar: 'ميلك شيك فراولة.' },
    price: '4.4$'
  },
  {
    id: 'drinks-milkshake-kinder',
    category: 'drinks',
    name: { en: 'Kinder Milkshake', ar: 'ميلك شيك كيندر' },
    description: { en: 'Kinder chocolate milkshake.', ar: 'ميلك شيك كيندر.' },
    price: '4.4$'
  },
  {
    id: 'drinks-milkshake-chocolate',
    category: 'drinks',
    name: { en: 'Chocolate Milkshake', ar: 'ميلك شيك شوكولا' },
    description: { en: 'Chocolate milkshake.', ar: 'ميلك شيك شوكولا.' },
    price: '4.4$'
  },
  {
    id: 'drinks-milkshake-oreo',
    category: 'drinks',
    name: { en: 'Oreo Milkshake', ar: 'ميلك شيك أوريو' },
    description: { en: 'Oreo milkshake.', ar: 'ميلك شيك أوريو.' },
    price: '4.4$'
  },
  {
    id: 'drinks-milkshake-caramel',
    category: 'drinks',
    name: { en: 'Caramel Milkshake', ar: 'ميلك شيك كراميل' },
    description: { en: 'Caramel milkshake.', ar: 'ميلك شيك كراميل.' },
    price: '4.4$'
  },

  // Smoothie
  {
    id: 'drinks-smoothie-strawberry',
    category: 'drinks',
    name: { en: 'Strawberry Smoothie', ar: 'سموثي فراولة' },
    description: { en: 'Strawberry smoothie.', ar: 'سموثي فراولة.' },
    price: '3.4$'
  },
  {
    id: 'drinks-smoothie-mango',
    category: 'drinks',
    name: { en: 'Mango Smoothie', ar: 'سموثي مانغو' },
    description: { en: 'Mango smoothie.', ar: 'سموثي مانغو.' },
    price: '3.4$'
  },
  {
    id: 'drinks-smoothie-peach',
    category: 'drinks',
    name: { en: 'Peach Smoothie', ar: 'سموثي خوخ' },
    description: { en: 'Peach smoothie.', ar: 'سموثي خوخ.' },
    price: '3.3$'
  },
  {
    id: 'drinks-smoothie-passion',
    category: 'drinks',
    name: { en: 'Passion Smoothie', ar: 'سموثي باشن فروت' },
    description: { en: 'Passion fruit smoothie.', ar: 'سموثي باشن فروت.' },
    price: '3.4$'
  },
  {
    id: 'drinks-smoothie-mixed-berries',
    category: 'drinks',
    name: { en: 'Mixed Berries Smoothie', ar: 'سموثي بيري مشكل' },
    description: { en: 'Mixed berries smoothie.', ar: 'سموثي توت مشكل.' },
    price: '3.4$'
  },

  // Mojito
  {
    id: 'drinks-mojito-peach',
    category: 'drinks',
    name: { en: 'Peach Mojito', ar: 'موهيتو خوخ' },
    description: { en: 'Peach mojito.', ar: 'موهيتو بنكهة الخوخ.' },
    price: '3.1$'
  },
  {
    id: 'drinks-mojito-passion',
    category: 'drinks',
    name: { en: 'Passion Mojito', ar: 'موهيتو باشن فروت' },
    description: { en: 'Passion fruit mojito.', ar: 'موهيتو باشن فروت.' },
    price: '3.1$'
  },
  {
    id: 'drinks-mojito-pomegranate',
    category: 'drinks',
    name: { en: 'Pomegranate Mojito', ar: 'موهيتو رمان' },
    description: { en: 'Pomegranate mojito.', ar: 'موهيتو بنكهة الرمان.' },
    price: '3.1$'
  },
  {
    id: 'drinks-mojito-mango',
    category: 'drinks',
    name: { en: 'Mango Mojito', ar: 'موهيتو مانغو' },
    description: { en: 'Mango mojito.', ar: 'موهيتو بنكهة المانغو.' },
    price: '3.1$'
  },
  {
    id: 'drinks-mojito-blue-hawaii',
    category: 'drinks',
    name: { en: 'Blue Hawaii Mojito', ar: 'بلو هاواي موهيتو' },
    description: { en: 'Blue Hawaii mojito.', ar: 'موهيتو بلو هاواي.' },
    price: '3.1$'
  },

  // Hot Drinks
  {
    id: 'drinks-hot-espresso',
    category: 'drinks',
    name: { en: 'Espresso', ar: 'إسبريسو' },
    description: { en: 'Single espresso.', ar: 'فنجان إسبريسو.' },
    price: '1.5$'
  },
  {
    id: 'drinks-hot-double-espresso',
    category: 'drinks',
    name: { en: 'Double Espresso', ar: 'دبل إسبريسو' },
    description: { en: 'Double espresso.', ar: 'إسبريسو مزدوج.' },
    price: '1.5$'
  },
  {
    id: 'drinks-hot-nescafe',
    category: 'drinks',
    name: { en: 'Nescafe', ar: 'نسكافيه' },
    description: { en: 'Nescafe coffee.', ar: 'نسكافيه.' },
    price: '1.9$'
  },
  {
    id: 'drinks-hot-cappuccino',
    category: 'drinks',
    name: { en: 'Cappuccino', ar: 'كابتشينو' },
    description: { en: 'Cappuccino.', ar: 'كابتشينو.' },
    price: '1.9$'
  },
  {
    id: 'drinks-hot-latte',
    category: 'drinks',
    name: {
      en: 'Caffe Latte (caramel / chocolate / hazelnut)',
      ar: 'كافيه لاتيه (كراميل / شوكولا / بندق)'
    },
    description: {
      en: 'Caffe latte flavored with caramel, chocolate or hazelnut.',
      ar: 'كافيه لاتيه بنكهات كراميل أو شوكولا أو بندق.'
    },
    price: '2.85$'
  },
  {
    id: 'drinks-hot-chocolate',
    category: 'drinks',
    name: { en: 'Hot Chocolate', ar: 'هوت تشوكلت' },
    description: { en: 'Hot chocolate drink.', ar: 'شراب شوكولا ساخن.' },
    price: '3.3$'
  },
  {
    id: 'drinks-hot-americano',
    category: 'drinks',
    name: { en: 'Americano', ar: 'أمريكانو' },
    description: { en: 'Americano coffee.', ar: 'قهوة أمريكانو.' },
    price: '1.9$'
  },
  {
    id: 'drinks-hot-flat-white',
    category: 'drinks',
    name: { en: 'Flat White', ar: 'فلات وايت' },
    description: { en: 'Flat white coffee.', ar: 'قهوة فلات وايت.' },
    price: '2.2$'
  },
  {
    id: 'drinks-hot-tea',
    category: 'drinks',
    name: { en: 'Tea (Black, Green, Herbal)', ar: 'شاي (أسود، أخضر، أعشاب)' },
    description: { en: 'Choice of black, green or herbal tea.', ar: 'شاي أسود أو أخضر أو أعشاب.' },
    price: '1.8$'
  }
];

export default menuItems;
