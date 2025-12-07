export type Lang = 'en' | 'ar';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type Translations = {
  brandTagline: string;
  nav: {
    home: string;
    menu: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    subNote: string;
    imageLabel: string;
    imageSubLabel: string;
    badge: string;
  };
  home: {
    signatureTitle: string;
    signatureSubtitle: string;
    viewFullMenuCta: string;
    aboutTitle: string;
    aboutSubtitle: string;
    aboutBullets: string[];
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    testimonials: Testimonial[];
  };
  menuPage: {
    title: string;
    subtitle: string;
    orderHint: string;
  };
  aboutPage: {
    title: string;
    subtitle: string;
    storyTitle: string;
    storyBody1: string;
    storyBody2: string;
    highlightTitle: string;
    highlights: string[];
  };
  contactPage: {
    title: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    hoursLabel: string;
    mapTitle: string;
    formTitle: string;
    formNameLabel: string;
    formPhoneLabel: string;
    formMessageLabel: string;
    formSubmit: string;
    formSuccess: string;
    formErrorRequired: string;
  };
  footer: {
    rights: string;
    openingHours: string;
    openingHoursValue: string;
    followUs: string;
    quickLinks: string;
    builtBy: string;
  };
  common: {
    orderOnWhatsApp: string;
    orderItemOnWhatsApp: string;
    whatsappCtaShort: string;
  };
};

export const translations: Record<Lang, Translations> = {
  en: {
    brandTagline: 'Fresh sushi, bold flavours, Beirut delivery.',
    nav: {
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'Beirut · Sushi · Delivery & Dine-In',
      title: 'Sushi Highway — fresh rolls at full speed.',
      subtitle:
        'From classic California rolls to bold signature creations, Sushi Highway serves ultra-fresh sushi, bowls and bites made for sharing — dine in or order via WhatsApp.',
      primaryCta: 'View full menu',
      secondaryCta: 'Order on WhatsApp',
      subNote: 'Serving guests across Beirut, with delivery and takeaway options.',
      imageLabel: 'Signature Highway Platter',
      imageSubLabel: 'A mix of our most-loved rolls, perfect for 2–3 people.',
      badge: 'Made fresh, roll by roll'
    },
    home: {
      signatureTitle: 'Signature Rolls',
      signatureSubtitle: 'Fast, fresh and handcrafted to order.',
      viewFullMenuCta: 'See the complete menu',
      aboutTitle: 'Why Sushi Highway?',
      aboutSubtitle: 'A modern sushi experience made for Lebanon.',
      aboutBullets: [
        'Daily fresh ingredients and premium cuts of fish.',
        'Creative rolls and comforting classics you already love.',
        'Delivery, takeaway and dine-in — always with friendly service.'
      ],
      testimonialsTitle: 'What our guests say',
      testimonialsSubtitle: 'Loved by sushi fans across Lebanon',
      testimonials: [
        {
          quote:
            'The rolls are super fresh and the flavours are on point. Our new go-to sushi spot in Beirut.',
          name: 'Maya',
          role: 'Regular guest'
        },
        {
          quote:
            'Delivery is quick, packaging is clean and the platter presentation looks like a restaurant table.',
          name: 'Karim',
          role: 'Delivery customer'
        },
        {
          quote:
            'We brought the family for dinner and everyone found something they liked — even the non-sushi eaters.',
          name: 'Sara',
          role: 'Dine-in guest'
        }
      ]
    },
    menuPage: {
      title: 'Our Menu',
      subtitle:
        'Explore our rolls, bowls and signature platters. Tap any item to order via WhatsApp.',
      orderHint: 'Send us a WhatsApp message with the items you want.'
    },
    aboutPage: {
      title: 'About Sushi Highway',
      subtitle: 'Fresh, modern sushi made for Beirut.',
      storyTitle: 'The story',
      storyBody1:
        'Sushi Highway was created with a simple idea: bring the energy of a late-night city drive to the world of sushi. Fast, vibrant and full of flavour — without ever cutting corners on quality.',
      storyBody2:
        'From our rice to our sauces, we focus on consistency and freshness. Whether you are stopping by for a quick lunch, celebrating with friends or ordering from home, we want every bite to feel special.',
      highlightTitle: 'What we care about',
      highlights: [
        'Freshness first: we prep and roll in small batches throughout the day.',
        'Local community: a Lebanese team serving Lebanese guests.',
        'Comfort + creativity: classic maki next to bold new combinations.'
      ]
    },
    contactPage: {
      title: 'Contact & Location',
      subtitle: 'Find us, say hello or send your order.',
      addressLabel: 'Visit us',
      addressValue: 'Sushi Highway — Beirut, Lebanon (example location)',
      hoursLabel: 'Open daily · 12:00 PM – 11:30 PM',
      mapTitle: 'Map preview',
      formTitle: 'Send us a message',
      formNameLabel: 'Name',
      formPhoneLabel: 'Phone number',
      formMessageLabel: 'Message',
      formSubmit: 'Send message',
      formSuccess: 'Thank you! We received your message and will get back to you soon.',
      formErrorRequired: 'Please fill in all fields before sending.'
    },
    footer: {
      rights: '© Sushi Highway. All rights reserved.',
      openingHours: 'Opening hours',
      openingHoursValue: 'Every day, 12:00 PM – 11:30 PM (including weekends)',
      followUs: 'Follow us',
      quickLinks: 'Quick links',
      builtBy: 'Website built with Next.js · Ready for deployment on Vercel.'
    },
    common: {
      orderOnWhatsApp: 'Order now on WhatsApp',
      orderItemOnWhatsApp: 'Order this item on WhatsApp',
      whatsappCtaShort: 'Order on WhatsApp'
    }
  },

  ar: {
    brandTagline: 'سوشي طازج · نكهات قوية · توصيل داخل بيروت',
    nav: {
      home: 'الرئيسية',
      menu: 'المنيو',
      about: 'عنّا',
      contact: 'التواصل والموقع'
    },
    hero: {
      eyebrow: 'بيروت · سوشي · صالة وتوصيل',
      title: 'سوشي هاي واي — لفائف طازجة بسرعة الطريق.',
      subtitle:
        'من الكاليفورنيا رول الكلاسيكي لأجرأ اللفائف الخاصة، سوشي هاي واي بيقدّم سوشي وأطباق يابانية بطزاجة عالية، للأكل بالمطعم أو الطلب عن طريق واتساب.',
      primaryCta: 'عرض المنيو بالكامل',
      secondaryCta: 'اطلب عبر واتساب',
      subNote: 'نخدم زبائننا في بيروت مع توصيل وسفري وتجربة مميزة داخل المطعم.',
      imageLabel: 'صحن سوشي هاي واي المميز',
      imageSubLabel: 'تشكيلة من أشهر لفائفنا، مناسبة لشخصين أو ثلاثة.',
      badge: 'تُحضَّر طازجة، لفة وراء لفة'
    },
    home: {
      signatureTitle: 'لفائف مميزة',
      signatureSubtitle: 'سريعة، طازجة، ومجهزة حسب الطلب.',
      viewFullMenuCta: 'شاهد المنيو كامل',
      aboutTitle: 'ليش سوشي هاي واي؟',
      aboutSubtitle: 'تجربة سوشي عصرية تناسب جو لبنان.',
      aboutBullets: [
        'مكوّنات طازجة يومياً مع أسماك بجودة عالية.',
        'لفائف مبتكرة جنباً إلى جنب مع الكلاسيكيات اللي بتحبوها.',
        'توصيل، سفري، وصالة مريحة مع خدمة لطيفة.'
      ],
      testimonialsTitle: 'رأي ضيوفنا',
      testimonialsSubtitle: 'محبوب من عشّاق السوشي في لبنان',
      testimonials: [
        {
          quote:
            'اللفائف طعمها فريش جداً والنكهات متوازنة. صار مطعمنا المفضل للسوشي ببيروت.',
          name: 'مايا',
          role: 'زبونة دائمة'
        },
        {
          quote:
            'التوصيل سريع والتغليف مرتب، وطريقة تقديم الأطباق بتحسّسك إنك قاعد بالمطعم.',
          name: 'كريم',
          role: 'زبون توصيل'
        },
        {
          quote:
            'جبت العائلة على العشاء وكل واحد لاقى شي يحبه، حتى اللي ما بيأكل سوشي عادة.',
          name: 'سارة',
          role: 'زبونة في الصالة'
        }
      ]
    },
    menuPage: {
      title: 'منيو سوشي هاي واي',
      subtitle: 'تعرّف على اللفائف، البولات، والبوكسات الخاصة. اضغط على أي طبق للطلب عبر واتساب.',
      orderHint: 'ابعث لنا رسالة واتساب بأسماء الأطباق اللي حابب تطلبها.'
    },
    aboutPage: {
      title: 'عن سوشي هاي واي',
      subtitle: 'سوشي طازج وعصري على طريقة بيروت.',
      storyTitle: 'القصة',
      storyBody1:
        'سوشي هاي واي انولد من فكرة بسيطة: نجيب إحساس مشوار السيارة الليلي لعالم السوشي. سريع، حيوي، ومليان نكهات — من دون ما نساوم على الجودة أبداً.',
      storyBody2:
        'من الرز للصلصات، نهتم بالتفاصيل وبالثبات بالطعم. سواء جاي تتغدى بسرعة، تحتفل مع أصحابك، أو تطلب عالبيت، هدفنا كل لقمة تكون تجربة.',
      highlightTitle: 'شو بهمنّا',
      highlights: [
        'الأولوية للطزاجة: منلفّ على دفعات صغيرة خلال اليوم.',
        'مجتمع محلّي: فريق لبناني يخدم ضيوف لبنانيين.',
        'راحة وإبداع: ماكي كلاسيكي جنب لفائف جديدة وجريئة.'
      ]
    },
    contactPage: {
      title: 'التواصل والموقع',
      subtitle: 'زورنا، احكي معنا، أو ابعت طلبك.',
      addressLabel: 'زورونا',
      addressValue: 'سوشي هاي واي — بيروت، لبنان (عنوان تجريبي)',
      hoursLabel: 'نستقبلكم يومياً · من 12:00 الظهر حتى 11:30 بالليل',
      mapTitle: 'خريطة تقريبية',
      formTitle: 'ابعث لنا رسالة',
      formNameLabel: 'الاسم',
      formPhoneLabel: 'رقم الهاتف',
      formMessageLabel: 'الرسالة',
      formSubmit: 'إرسال الرسالة',
      formSuccess: 'شكراً! استلمنا رسالتك وسنتواصل معك بأقرب وقت.',
      formErrorRequired: 'رجاءً عبّي كل الخانات قبل الإرسال.'
    },
    footer: {
      rights: '© سوشي هاي واي. جميع الحقوق محفوظة.',
      openingHours: 'أوقات العمل',
      openingHoursValue: 'كل يوم من 12:00 ظهراً حتى 11:30 مساءً (مع عطلة نهاية الأسبوع)',
      followUs: 'تابعنا',
      quickLinks: 'روابط سريعة',
      builtBy: 'الموقع مبني بتقنية Next.js وجاهز للنشر على Vercel.'
    },
    common: {
      orderOnWhatsApp: 'اطلب الآن عبر واتساب',
      orderItemOnWhatsApp: 'اطلب هذا الطبق عبر واتساب',
      whatsappCtaShort: 'واتساب مباشر'
    }
  }
};
