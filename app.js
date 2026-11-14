const CONFIG = {
  brandName: "ШАШЛИК СМІЛА (@shashlik_vasya_chebureki)",
  address: "м. Сміла, вул. Богдана Хмельницького, 7",
  phonePrimary: "+380933030400",
  phoneSecondary: "+380937729935",
  openHour: 9,
  closeHour: 21,
  // Адреса, куди відправляється замовлення (POST JSON). Порожньо — бекенду немає, замовлення лише формується як чек.
  orderEndpoint: "",
  zones: {
    zone1: { name: "Зона 1 (Вокзал Шевченка / Богдана / вул. Шевченка / Лікарня)", cost: 60, freeFrom: 700 },
    zone2: { name: "Зона 2 (Центр / Незалежності / Машбуд)", cost: 80, freeFrom: 900 },
    zone3: { name: "Зона 3 (РПЗ / Гречківка / Загребля / віддалені)", cost: 100, freeFrom: 1100 }
  }
};

const MENU_ITEMS = [
  {
    id: "pork-neck",
    category: "mangal",
    title: "Шашлик зі свинячого ошийка",
    badge: "🔥 Хіт мангала",
    unitLabel: "80 ₴ / за 100 г",
    image: "assets/hd-pork-shashlik.webp",
    desc: "Добірний соковитий свинячий ошийок із власної розрубки свіжини у фірмовому маринаді від Василя, смажений на живому вугіллі.",
    variants: [
      { id: "250g", label: "250 г (~1 шампур)", price: 200 },
      { id: "300g", label: "300 г", price: 240 },
      { id: "500g", label: "500 г (пів кіло)", price: 400 },
      { id: "1000g", label: "1 кг (на компанію)", price: 800 }
    ],
    addons: [
      { id: "sauce", label: "+ Соус червоний", price: 20 },
      { id: "cheese-sauce", label: "+ Сирний соус", price: 20 },
      { id: "onion", label: "+ Цибуля маринована", price: 30 }
    ]
  },
  {
    id: "pork-ribs-bbq",
    category: "mangal",
    title: "Соковиті реберця BBQ та хрящові",
    badge: "🍖 Хіт з TikTok · 70 ₴/100 г",
    unitLabel: "70 ₴ / за 100 г",
    image: "assets/hd-pork-ribs.webp",
    desc: "Карамелізовані свинячі реберця BBQ та соковиті хрящові реберця з димком, подаються у термолотку з маринованою цибулькою.",
    variants: [
      { id: "300g", label: "300 г (порція)", price: 210 },
      { id: "500g", label: "500 г (пів кіло)", price: 350 },
      { id: "1000g", label: "1 кг (на компанію)", price: 700 }
    ],
    addons: [
      { id: "sauce", label: "+ Соус BBQ / червоний", price: 20 },
      { id: "onion", label: "+ Цибуля маринована", price: 30 }
    ]
  },
  {
    id: "pork-shoulder",
    category: "mangal",
    title: "Шашлик зі свинячої лопатки",
    badge: "🥩 Менш жирний · 70 ₴/100 г",
    unitLabel: "70 ₴ / за 100 г",
    image: "assets/hd-pork-shashlik.webp",
    desc: "Ніжна м'ясна свиняча лопатка на вугіллі для тих, хто любить постніше м'ясо з насиченим ароматом багаття.",
    variants: [
      { id: "250g", label: "250 г (~1 шампур)", price: 175 },
      { id: "500g", label: "500 г (пів кіло)", price: 350 },
      { id: "1000g", label: "1 кг (на компанію)", price: 700 }
    ],
    addons: [
      { id: "sauce", label: "+ Соус", price: 20 },
      { id: "onion", label: "+ Цибуля маринована", price: 30 }
    ]
  },
  {
    id: "chicken-shashlik",
    category: "mangal",
    title: "Шашлик з курки",
    badge: "🍗 Ніжний з вогню",
    unitLabel: "50 ₴ / за 100 г",
    image: "assets/hd-chicken-shashlik.webp",
    desc: "Рум'яний курячий шашлик з димком та хрусткою скоринкою. Ідеальний для легкого обіду або вечері.",
    variants: [
      { id: "250g", label: "250 г (~1 шампур)", price: 125 },
      { id: "300g", label: "300 г", price: 150 },
      { id: "500g", label: "500 г (пів кіло)", price: 250 },
      { id: "1000g", label: "1 кг (на компанію)", price: 500 }
    ],
    addons: [
      { id: "sauce", label: "+ Соус", price: 20 },
      { id: "onion", label: "+ Цибуля маринована", price: 30 }
    ]
  },
  {
    id: "mangal-wings",
    category: "mangal",
    title: "Крила курячі на мангалі",
    badge: "🔥 25 ₴ / 100 г",
    unitLabel: "25 ₴ / за 100 г",
    image: "assets/hd-chicken-shashlik.webp",
    desc: "Ароматні курячі крильця у маринаді, запечені на шампурах над живим вугіллям до золотистої скоринки.",
    variants: [
      { id: "400g", label: "400 г (порція)", price: 100 },
      { id: "1000g", label: "1 кг (великий сет)", price: 250 }
    ],
    addons: [
      { id: "sauce", label: "+ Соус", price: 20 },
      { id: "cheese-sauce", label: "+ Сирний соус", price: 20 }
    ]
  },
  {
    id: "shaurma-firmova",
    category: "mangal",
    title: "Шаурма фірмова з мангала",
    badge: "🌯 Свинина або Курка",
    unitLabel: "1 шт · з вугілля",
    image: "assets/hd-shaurma-mangal.webp",
    desc: "Щільна порція смаженого на мангалі м'яса (свинина або курка на вибір), свіжі овочі, авторський соус та лаваш з решітки над вугіллям.",
    variants: [
      { id: "pork", label: "Зі свининою з мангала", price: 150 },
      { id: "chicken", label: "З куркою з мангала", price: 150 }
    ],
    addons: [
      { id: "cut-half", label: "✂️ Розрізати навпіл", price: 0 },
      { id: "cheese", label: "+ Сир", price: 20 },
      { id: "mushrooms", label: "+ Гриби", price: 30 },
      { id: "sauce", label: "+ Додатковий соус", price: 20 }
    ]
  },
  {
    id: "lyulya-kebab",
    category: "mangal",
    title: "Люля-кебаб на мангалі",
    badge: "🔥 На шампурі",
    unitLabel: "На шампурі з вогню",
    image: "assets/hd-lyulya-kebab.webp",
    desc: "Соковитий рублений люля-кебаб зі спеціями за рецептом Василя, запечений на шампурі над вугіллям.",
    variants: [
      { id: "250g", label: "Порція (~250 г)", price: 180 },
      { id: "500g", label: "Подвійна (500 г)", price: 350 }
    ],
    addons: [
      { id: "sauce", label: "+ Соус", price: 20 },
      { id: "onion", label: "+ Цибуля маринована", price: 30 }
    ]
  },
  {
    id: "khachapuri-mangal",
    category: "mangal",
    title: "Хачапурі на мангалі (на шампурі)",
    badge: "🧀 Тягучий сулугуні",
    unitLabel: "1 шт · гарячий сир",
    image: "assets/hd-khachapuri-mangal.webp",
    basePrice: 100,
    desc: "Рум'яне хачапурі на шампурі з тягучим розплавленим сиром сулугуні та золотистою скоринкою з димком.",
    addons: [
      { id: "cheese", label: "+ Подвійний сир", price: 20 },
      { id: "sauce", label: "+ Соус", price: 20 }
    ]
  },
  {
    id: "plov-kazan",
    category: "mangal",
    title: "Плов у казані з вогню",
    badge: "🍲 19 ₴ / 100 г",
    unitLabel: "З казана на дровах",
    image: "assets/hd-plov-kazan.webp",
    desc: "Ароматний розсипчастий плов із соковитим м'ясом, морквою та часником, приготований у чавунному казані на вогні.",
    variants: [
      { id: "320g", label: "Стандарт (~320 г)", price: 60 },
      { id: "500g", label: "Велика порція (500 г)", price: 95 }
    ],
    addons: [
      { id: "onion", label: "+ Цибуля маринована", price: 30 }
    ]
  },
  {
    id: "cheburek-classic",
    category: "chebureki",
    title: "Чебурек Класичний (зі свинини)",
    badge: "🥟 Легенда · у коробці",
    unitLabel: "200 г · за 1 шт",
    image: "assets/hd-chebureki-classic.webp",
    basePrice: 80,
    desc: "Той самий гігантський чебурек 200 г ручної розкатки: пухирчасте тісто у свіжій олії, багато соковитого фаршу та бульйон. Подаємо у крафтовій коробці!",
    addons: [
      { id: "cheese", label: "+ Сир (м'ясо + сир)", price: 20 },
      { id: "mushrooms", label: "+ Гриби", price: 30 }
    ]
  },
  {
    id: "cheburek-chicken",
    category: "chebureki",
    title: "Чебурек з курки",
    badge: "🥟 200 г · ручна ліпка",
    unitLabel: "200 г · за 1 шт",
    image: "assets/hd-chebureki-classic.webp",
    basePrice: 80,
    desc: "Ніжна та соковита куряча начинка зі свіжою зеленню та спеціями у золотистому хрусткому тісті.",
    addons: [
      { id: "cheese", label: "+ Сир", price: 20 },
      { id: "mushrooms", label: "+ Гриби", price: 30 }
    ]
  },
  {
    id: "cheburek-4cheese",
    category: "chebureki",
    title: "Чебурек 4 Сира",
    badge: "🧀 Сирний хіт",
    unitLabel: "200 г · за 1 шт",
    image: "assets/hd-chebureki-cheese.webp",
    basePrice: 100,
    desc: "Щедра начинка з чотирьох видів розплавленого тягучого сиру в гарячому хрусткому чебуреці.",
    addons: [
      { id: "mushrooms", label: "+ Гриби", price: 30 },
      { id: "cheese", label: "+ Ще сиру", price: 20 }
    ]
  },
  {
    id: "cheburek-lamb",
    category: "chebureki",
    title: "Чебурек з баранини",
    badge: "🥩 Фірмовий · 200 г",
    unitLabel: "200 г · за 1 шт",
    image: "assets/hd-chebureki-classic.webp",
    basePrice: 110,
    desc: "Ароматна соковита баранина з пряними травами та цибулькою за авторським рецептом Василя.",
    addons: [
      { id: "cheese", label: "+ Сир", price: 20 },
      { id: "mushrooms", label: "+ Гриби", price: 30 }
    ]
  },
  {
    id: "cheburek-salami",
    category: "chebureki",
    title: "Чебурек Салямі",
    badge: "🍕 Пікантний · 200 г",
    unitLabel: "200 г · за 1 шт",
    image: "assets/hd-chebureki-cheese.webp",
    basePrice: 100,
    desc: "Пікантне поєднання салямі та тягучої сирної начинки у фірмовому хрусткому тісті.",
    addons: [
      { id: "cheese", label: "+ Сир", price: 20 },
      { id: "mushrooms", label: "+ Гриби", price: 30 }
    ]
  },
  {
    id: "myslyvska-tisto",
    category: "chebureki",
    title: "Мисливська в тісті з сулугуні",
    badge: "🌭 Ексклюзив з TikTok",
    unitLabel: "З червоним соусом і сулугуні",
    image: "assets/hd-myslyvska-tisto.webp",
    basePrice: 110,
    desc: "Фірмовий хіт: копчена мисливська ковбаска, тягучий сир сулугуні та авторський червоний соус у пухирчастому золотистому тісті.",
    addons: [
      { id: "cheese", label: "+ Додатковий сулугуні", price: 20 },
      { id: "cheese-sauce", label: "+ Сирний соус", price: 20 }
    ]
  },
  {
    id: "kfc-wings",
    category: "snacks",
    title: "Хрусткі крильця у казані",
    badge: "🍗 Ідеально до пива",
    unitLabel: "від 250–300 ₴ / 1 кг",
    image: "assets/hd-wings.webp",
    desc: "Хрусткі золотисті курячі крильця у фірмовій паніровці, смажені в казані у свіжій олії. Чудова закуска для компанії.",
    variants: [
      { id: "500g", label: "500 г (пів кіло)", price: 150 },
      { id: "1kg", label: "1 кг (великий фольгований бокс)", price: 300 }
    ],
    addons: [
      { id: "cheese-sauce", label: "+ Фірмовий сирний соус", price: 20 },
      { id: "sauce", label: "+ Червоний соус", price: 20 }
    ]
  },
  {
    id: "country-potatoes",
    category: "snacks",
    title: "Картопля по-селянськи (300–400 г)",
    badge: "🥔 60 ₴ або 80 ₴ з сирним соусом",
    unitLabel: "У фольгованому термолотку",
    image: "assets/hd-potatoes.webp",
    desc: "Рум'яна картопля часточками із золотистою скоринкою. Обирайте класичну (300 г+) або велику порцію 400 г з домашнім сирним соусом!",
    variants: [
      { id: "300g", label: "Класична порція (300 г+)", price: 60 },
      { id: "400g-cheese", label: "400 г + фірмовий сирний соус", price: 80 }
    ],
    addons: [
      { id: "sauce", label: "+ Червоний соус", price: 20 }
    ]
  },
  {
    id: "fried-moyva",
    category: "snacks",
    title: "Смажена мойва «Наша Мойвочка»",
    badge: "🐟 Хіт до пива",
    unitLabel: "Хрустка золотиста рибка",
    image: "assets/hd-moyva.webp",
    desc: "Свіжосмажена золотиста мойва у легкій хрусткій паніровці — улюблена гаряча закуска постійних гостей.",
    variants: [
      { id: "300g", label: "Порція (300 г)", price: 90 },
      { id: "600g", label: "Велика порція (600 г)", price: 175 }
    ],
    addons: [
      { id: "cheese-sauce", label: "+ Сирний соус", price: 20 }
    ]
  },
  {
    id: "craft-tushonka",
    category: "craft",
    title: "Домашня тушонка зі свинини (0,5 л)",
    badge: "🏡 Сміла + Нова Пошта по Україні",
    unitLabel: "140–150 ₴ / банка 0,5 л",
    image: "assets/hd-tushonka.webp",
    desc: "Справжня домашня тушонка з добірного м'яса власної розрубки: великі шматки свинини, лавровий лист, перець. Відправляємо Новою Поштою по всій Україні!",
    variants: [
      { id: "1jar", label: "1 банка (0,5 л)", price: 150 },
      { id: "3jars", label: "Набір 3 банки (по 140 ₴)", price: 420 },
      { id: "6jars", label: "Ящик 6 банок (по 140 ₴)", price: 840 }
    ],
    addons: []
  },
  {
    id: "craft-pashtet",
    category: "craft",
    title: "Домашній крафтовий паштет",
    badge: "🏡 Ручна робота · Нова Пошта",
    unitLabel: "Домашня консервація",
    image: "assets/hd-pashtet.webp",
    basePrice: 120,
    desc: "Ніжний домашній паштет за фірмовим рецептом Василя. Доступний на точці у Смілі та для замовлення Новою Поштою разом із тушонкою.",
    addons: []
  },
  {
    id: "marinated-bucket",
    category: "craft",
    title: "Маринований шашлик у відерці (для пікніка)",
    badge: "🪣 700 ₴ / 2,5 кг",
    unitLabel: "Замариноване свіже м'ясо",
    image: "assets/hd-marinated-bucket.webp",
    desc: "Любите смажити шашлик самі? Забирайте свіжий ошийок у фірмовому маринаді Василя з цибулею у зручному герметичному відерці!",
    variants: [
      { id: "2.5kg", label: "Відерце 2,5 кг (хіт на природу)", price: 700 },
      { id: "1kg", label: "Порція 1 кг на виніс", price: 300 }
    ],
    addons: [
      { id: "sauce", label: "+ Фірмовий соус", price: 20 }
    ]
  },
  {
    id: "combo-ribs-shashlik",
    category: "combos",
    title: "Бокс у лаваші «Соковиті реберця + шашличок»",
    badge: "🔥 Хіт з TikTok",
    unitLabel: "Реберця BBQ + Ошийок у лаваші",
    image: "assets/hd-pork-ribs.webp",
    basePrice: 380,
    desc: "Комбінований гарячий бокс у лаваші: соковиті реберця BBQ + шашлик зі свинячого ошийка + маринована червона капуста та цибулька.",
    addons: [
      { id: "sauce", label: "+ Додатковий соус", price: 20 },
      { id: "cheese-sauce", label: "+ Сирний соус", price: 20 }
    ]
  },
  {
    id: "combo-company",
    category: "combos",
    title: "Сет «Дружня компанія з вогню»",
    badge: "🍻 Безкоштовна доставка (Зона 1)",
    unitLabel: "На 3–4 особи (~1.4 кг)",
    image: "assets/hd-combo-feast.webp",
    basePrice: 810,
    desc: "500 г шашлику зі свинячого ошийка + 500 г шашлику з курки + 2 порції картоплі по-селянськи + 2 соуси + маринована цибуля.",
    addons: []
  },
  {
    id: "combo-beer",
    category: "combos",
    title: "Сет «П'ятниця до пива»",
    badge: "🍗 Хіт на вечір",
    unitLabel: "1 кг крилець + 3 чебуреки",
    image: "assets/hd-wings-potatoes.webp",
    basePrice: 560,
    desc: "1 кг хрустких крилець + 3 класичні чебуреки (по 200 г у коробках) + 2 фірмові соуси.",
    addons: []
  },
  {
    id: "vip-tabaka-rulka",
    category: "combos",
    title: "VIP-Замовлення «На завтра» (Курча табака / Рулька / Стейк)",
    badge: "👨‍🍳 Приготуємо те, чого немає в меню",
    unitLabel: "Попереднє замовлення",
    image: "assets/hd-tabaka.webp",
    desc: "Замовте сьогодні на завтра: соковите курча табака на мангалі, запечена рулька з казана або великі свинячі стейки на кістці!",
    variants: [
      { id: "tabaka", label: "Соковите курча табака на мангалі (~1 шт)", price: 280 },
      { id: "steak", label: "Стейк на кістці з мангала (~400 г)", price: 280 },
      { id: "rulka", label: "Запечена рулька під замовлення (~1.2 кг)", price: 420 }
    ],
    addons: [
      { id: "sauce", label: "+ Фірмовий соус", price: 20 },
      { id: "onion", label: "+ Цибуля маринована", price: 30 }
    ]
  },
  {
    id: "addon-sauce",
    category: "addons",
    title: "Фірмовий червоний соус до шашлику",
    badge: "🥫 Додаток",
    unitLabel: "Порція",
    image: "assets/hd-onion-sauce.webp",
    basePrice: 20,
    desc: "Насичений томатно-пряний соус із зеленню, що ідеально підкреслює смак м'яса з вугілля.",
    addons: []
  },
  {
    id: "addon-cheese-sauce",
    category: "addons",
    title: "Домашній сирний соус (варимо самі)",
    badge: "🧀 Крафтовий соус",
    unitLabel: "Порція",
    image: "assets/hd-potatoes.webp",
    basePrice: 20,
    desc: "Густий вершково-сирний соус власного приготування — хіт до картоплі по-селянськи, крилець та шаурми.",
    addons: []
  },
  {
    id: "addon-onion",
    category: "addons",
    title: "Цибуля маринована з зеленню",
    badge: "🧅 До шашлику",
    unitLabel: "Порція",
    image: "assets/hd-onion-sauce.webp",
    basePrice: 30,
    desc: "Хрустка маринована червона цибулька зі свіжою петрушкою та спеціями — обов'язкове доповнення до гарячого шашлику.",
    addons: []
  },
  {
    id: "drink-cold",
    category: "addons",
    title: "Холодні напої (Сік томатний / Каркаде)",
    badge: "🥤 Прохолодні напої",
    unitLabel: "Склянка / Пляшка",
    image: "assets/hd-combo-feast.webp",
    desc: "Освіжаючий холодний напій каркаде або насичений томатний сік — ідеально смакують до гарячого шашлику та чебуреків.",
    variants: [
      { id: "tomato", label: "Сік томатний", price: 35 },
      { id: "karkade", label: "Холодний каркаде", price: 35 }
    ],
    addons: []
  }
];

const MENU_VERSION = "20261114";
const CART_STORAGE_KEY = "shashlik-smila-cart-v1";
const CART_MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000;

const state = {
  activeCategory: "all",
  cart: []
};

const prefersReducedMotion = () =>
  typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const scrollBehavior = () => (prefersReducedMotion() ? "auto" : "smooth");

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}

/* Усі комбінації «варіант + добавки», які може створити renderMenu() для страви */
function buildCartVariants(item) {
  const variants = item.variants && item.variants.length ? item.variants : [null];
  const addons = item.addons || [];
  const result = [];
  variants.forEach((v) => {
    for (let mask = 0; mask < 1 << addons.length; mask += 1) {
      const chosen = addons.filter((_, i) => mask & (1 << i));
      const base = v ? v.price : item.basePrice || 0;
      const unitPrice = base + chosen.reduce((sum, a) => sum + a.price, 0);
      const meta = [
        v ? v.label : "",
        chosen.length ? `Додатки: ${chosen.map((a) => a.label.replace(/^\+\s*/, "")).join(", ")}` : ""
      ]
        .filter(Boolean)
        .join(" · ");
      result.push({ key: `${item.id}|${meta}`, meta, unitPrice });
    }
  });
  return result;
}

/* 0. CART PERSISTENCE (localStorage) */
function saveCart() {
  try {
    if (state.cart.length === 0) {
      localStorage.removeItem(CART_STORAGE_KEY);
      return;
    }
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify({ menuVersion: MENU_VERSION, savedAt: Date.now(), items: state.cart })
    );
  } catch {
    // Приватний режим або переповнення сховища — кошик просто не зберігається
  }
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (!data || data.menuVersion !== MENU_VERSION) return [];
    if (!Number.isFinite(data.savedAt) || Date.now() - data.savedAt > CART_MAX_AGE_MS) return [];
    if (!Array.isArray(data.items)) return [];

    const valid = [];
    data.items.forEach((it) => {
      if (!it || typeof it !== "object") return;
      if (typeof it.key !== "string" || typeof it.itemId !== "string") return;
      if (!Number.isInteger(it.qty) || it.qty < 1 || it.qty > 99) return;
      const menuItem = MENU_ITEMS.find((m) => m.id === it.itemId);
      if (!menuItem) return;
      // Назва, опис вибору та ціна завжди беруться з меню, а не зі сховища
      const combo = buildCartVariants(menuItem).find((c) => c.key === it.key);
      if (!combo || !Number.isFinite(combo.unitPrice) || combo.unitPrice <= 0) return;
      if (valid.some((v) => v.key === combo.key)) return;
      valid.push({
        key: combo.key,
        itemId: menuItem.id,
        title: menuItem.title,
        meta: combo.meta,
        unitPrice: combo.unitPrice,
        qty: it.qty
      });
    });
    // Якщо щось відкинули або виправили — синхронізуємо сховище зі станом
    const changed = valid.length !== data.items.length ||
      valid.some((v, i) => {
        const o = data.items[i];
        return !o || o.key !== v.key || o.itemId !== v.itemId || o.title !== v.title ||
          o.meta !== v.meta || o.unitPrice !== v.unitPrice || o.qty !== v.qty;
      });
    if (changed) {
      const prev = state.cart;
      state.cart = valid;
      saveCart();
      state.cart = prev;
    }
    return valid;
  } catch {
    return [];
  }
}

function cartChanged() {
  saveCart();
  updateCartUI();
}

/* 1. OPEN/CLOSE REALTIME STATUS */
function updateOpenStatus() {
  const badges = new Set(document.querySelectorAll("[data-open-status]"));
  const mainBadge = document.getElementById("openStatusBadge");
  if (mainBadge) badges.add(mainBadge);
  if (!badges.size) return;

  let isOpen = null;
  try {
    const kyivHour = Number(
      new Intl.DateTimeFormat("uk-UA", {
        timeZone: "Europe/Kyiv",
        hour: "numeric",
        hour12: false
      }).format(new Date())
    );
    if (Number.isFinite(kyivHour)) isOpen = kyivHour >= CONFIG.openHour && kyivHour < CONFIG.closeHour;
  } catch {
    isOpen = null;
  }

  badges.forEach((badge) => {
    const text = badge.querySelector(".status-text");
    if (!text) return;
    if (isOpen === null) {
      badge.classList.remove("is-closed");
      text.textContent = "Щодня 09:00–21:00";
      return;
    }
    badge.classList.toggle("is-closed", !isOpen);
    text.textContent = isOpen ? "Відчинено зараз · до 21:00" : "Зачинено · Приймаємо замовлення на 09:00";
  });
}

/* 2. RENDER MENU CARDS */
function computeCardPrice(item, cardEl) {
  let price = item.basePrice || 0;
  if (item.variants && item.variants.length) {
    const checkedVariant = cardEl.querySelector('input[type="radio"]:checked');
    const found = item.variants.find((v) => v.id === checkedVariant?.value) || item.variants[0];
    price = found.price;
  }
  if (item.addons && item.addons.length) {
    cardEl.querySelectorAll('input[type="checkbox"]:checked').forEach((cb) => {
      const addon = item.addons.find((a) => a.id === cb.value);
      if (addon) price += addon.price;
    });
  }
  return price;
}

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  const filtered =
    state.activeCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === state.activeCategory);

  grid.innerHTML = filtered
    .map((item) => {
      const initialPrice = item.variants ? item.variants[0].price : item.basePrice;
      const variantsHtml = item.variants
        ? `
          <div class="card-options-box">
            <span class="options-label">Оберіть порцію / вагу:</span>
            <div class="weight-pills">
              ${item.variants
                .map(
                  (v, idx) => `
                  <label class="weight-pill-label">
                    <span>
                      <input type="radio" name="var-${item.id}" value="${v.id}" ${idx === 0 ? "checked" : ""}>
                      ${v.label}
                    </span>
                    <strong>${v.price} ₴</strong>
                  </label>
                `
                )
                .join("")}
            </div>
          </div>
        `
        : "";

      const addonsHtml =
        item.addons && item.addons.length
          ? `
          <div class="card-options-box">
            <span class="options-label">Додати до страви:</span>
            <div class="addons-checks">
              ${item.addons
                .map(
                  (a) => `
                  <label class="addon-check-label">
                    <input type="checkbox" value="${a.id}">
                    <span>${a.label} (+${a.price} ₴)</span>
                  </label>
                `
                )
                .join("")}
            </div>
          </div>
        `
          : "";

      return `
        <article class="menu-card" data-item-id="${item.id}">
          <div class="menu-card-media">
            <img src="${item.image}" alt="${item.title}" width="400" height="275" loading="lazy">
            <span class="card-badge">${item.badge}</span>
            <span class="card-weight-pill">${item.unitLabel}</span>
          </div>
          <div class="menu-card-body">
            <h3 class="menu-card-title">${item.title}</h3>
            <p class="menu-card-desc">${item.desc}</p>
            ${variantsHtml}
            ${addonsHtml}
            <div class="menu-card-footer">
              <div class="price-tag">
                <span class="price-main" data-price-display>${initialPrice} ₴</span>
                <span class="price-unit">${item.unitLabel}</span>
              </div>
              <button type="button" class="btn btn-primary" data-add-btn>
                + У кошик
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  grid.querySelectorAll(".menu-card").forEach((cardEl) => {
    const item = MENU_ITEMS.find((m) => m.id === cardEl.dataset.itemId);
    if (!item) return;

    const priceDisplay = cardEl.querySelector("[data-price-display]");
    const updateCardPrice = () => {
      const p = computeCardPrice(item, cardEl);
      if (priceDisplay) priceDisplay.textContent = `${p} ₴`;
    };

    cardEl.querySelectorAll("input").forEach((inp) => {
      inp.addEventListener("change", updateCardPrice);
    });

    const addBtn = cardEl.querySelector("[data-add-btn]");
    addBtn?.addEventListener("click", () => {
      let variantLabel = "";
      if (item.variants && item.variants.length) {
        const checkedVariant = cardEl.querySelector('input[type="radio"]:checked');
        const found = item.variants.find((v) => v.id === checkedVariant?.value) || item.variants[0];
        variantLabel = found.label;
      }
      const chosenAddons = [];
      if (item.addons && item.addons.length) {
        cardEl.querySelectorAll('input[type="checkbox"]:checked').forEach((cb) => {
          const addon = item.addons.find((a) => a.id === cb.value);
          if (addon) chosenAddons.push(addon.label.replace(/^\+\s*/, ""));
        });
      }

      const unitPrice = computeCardPrice(item, cardEl);
      const metaParts = [variantLabel, chosenAddons.length ? `Додатки: ${chosenAddons.join(", ")}` : ""]
        .filter(Boolean)
        .join(" · ");
      const cartKey = `${item.id}|${metaParts}`;

      const existing = state.cart.find((c) => c.key === cartKey);
      if (existing) {
        existing.qty = Math.min(99, existing.qty + 1);
      } else {
        state.cart.push({
          key: cartKey,
          itemId: item.id,
          title: item.title,
          meta: metaParts,
          unitPrice,
          qty: 1
        });
      }

      cartChanged();
      const origText = addBtn.textContent;
      addBtn.textContent = "✓ Додано";
      setTimeout(() => {
        addBtn.textContent = origText;
      }, 900);
    });

    const mediaEl = cardEl.querySelector(".menu-card-media");
    mediaEl?.addEventListener("click", () => {
      addBtn?.click();
    });
  });
}

/* 3. CART & TOTALS MANAGEMENT */
function getCartTotals() {
  const count = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = state.cart.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);

  const fulfillment = document.querySelector('input[name="fulfillment"]:checked')?.value || "pickup";
  const zoneKey = document.getElementById("deliveryZone")?.value || "zone1";
  const zone = CONFIG.zones[zoneKey] || CONFIG.zones.zone1;

  let deliveryCost = 0;
  let deliveryLabel = "0 ₴ (Самовивіз)";

  if (fulfillment === "delivery") {
    if (subtotal >= zone.freeFrom) {
      deliveryCost = 0;
      deliveryLabel = `0 ₴ (Безкоштовно від ${zone.freeFrom} ₴)`;
    } else {
      deliveryCost = zone.cost;
      deliveryLabel = `${zone.cost} ₴ (${zone.name.split(":")[0]})`;
    }
  } else if (fulfillment === "novaposhta") {
    deliveryCost = 0;
    deliveryLabel = "За тарифами Нової Пошти";
  }

  return {
    count,
    subtotal,
    deliveryCost,
    deliveryLabel,
    grandTotal: subtotal + deliveryCost,
    zone
  };
}

function updateCartUI() {
  const { count, subtotal, deliveryLabel, grandTotal, zone } = getCartTotals();

  const headerCount = document.getElementById("headerCartCount");
  const stickyBar = document.getElementById("stickyCartBar");
  const stickyCount = document.getElementById("stickyCartCount");
  const stickyTotal = document.getElementById("stickyCartTotal");
  const stickyHint = document.getElementById("stickyFreeDeliveryHint");

  if (headerCount) headerCount.textContent = String(count);
  if (stickyBar) stickyBar.hidden = count === 0;
  document.body.classList.toggle("has-sticky-cart", count > 0);
  if (stickyCount) stickyCount.textContent = String(count);
  if (stickyTotal) stickyTotal.textContent = `${subtotal} ₴`;

  if (stickyHint) {
    const diff = CONFIG.zones.zone1.freeFrom - subtotal;
    stickyHint.textContent =
      diff > 0
        ? `Ще ${diff} ₴ до безкоштовної доставки по Зоні 1 або забирайте самовивозом без черги`
        : "🎉 Доставка по Зоні 1 для вашого замовлення — БЕЗКОШТОВНА!";
  }

  const container = document.getElementById("cartItemsContainer");
  if (container) {
    if (state.cart.length === 0) {
      container.innerHTML = `<p class="hint">Ваш кошик порожній. Додайте шашлик, шаурму або чебуреки з меню.</p>`;
    } else {
      container.innerHTML = state.cart
        .map(
          (item, idx) => `
          <div class="cart-item-row">
            <div class="cart-item-info">
              <strong>${escapeHtml(item.title)}</strong>
              ${item.meta ? `<small>${escapeHtml(item.meta)}</small>` : ""}
            </div>
            <div class="cart-item-controls">
              <button type="button" class="qty-btn" data-cart-dec="${idx}" aria-label="Зменшити кількість">−</button>
              <span>${item.qty}</span>
              <button type="button" class="qty-btn" data-cart-inc="${idx}" aria-label="Збільшити кількість">+</button>
              <span class="cart-item-price">${item.unitPrice * item.qty} ₴</span>
            </div>
          </div>
        `
        )
        .join("");

      container.querySelectorAll("[data-cart-dec]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const i = Number(btn.dataset.cartDec);
          if (state.cart[i]) {
            state.cart[i].qty -= 1;
            if (state.cart[i].qty <= 0) state.cart.splice(i, 1);
            cartChanged();
          }
        });
      });

      container.querySelectorAll("[data-cart-inc]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const i = Number(btn.dataset.cartInc);
          if (state.cart[i]) {
            state.cart[i].qty = Math.min(99, state.cart[i].qty + 1);
            cartChanged();
          }
        });
      });
    }
  }

  const subEl = document.getElementById("summarySubtotal");
  const delEl = document.getElementById("summaryDeliveryCost");
  const grandEl = document.getElementById("summaryGrandTotal");

  if (subEl) subEl.textContent = `${subtotal} ₴`;
  if (delEl) delEl.textContent = deliveryLabel;
  if (grandEl) grandEl.textContent = `${grandTotal} ₴`;
}

/* 4. DIALOG SETUP & LIGHT-DISMISS FALLBACK (modern-web-guidance: light-dismiss-a-dialog) */
function setupDialogs() {
  const dialogs = document.querySelectorAll("dialog");
  dialogs.forEach((dialog) => {
    // Fallback for browsers without closedby support
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      dialog.addEventListener("click", (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (isDialogContent) return;
        dialog.close();
      });
    }
  });

  document.querySelectorAll("[data-close-dialog]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.closeDialog;
      const dlg = document.getElementById(id);
      dlg?.close();
    });
  });

  const checkoutDialog = document.getElementById("checkoutDialog");
  const postersDialog = document.getElementById("postersDialog");

  const openCheckout = () => {
    updateCartUI();
    document.getElementById("orderConfirmationBox")?.setAttribute("hidden", "");
    checkoutDialog?.showModal();
  };

  document.getElementById("headerCartBtn")?.addEventListener("click", openCheckout);
  document.getElementById("stickyCheckoutBtn")?.addEventListener("click", openCheckout);
  document.getElementById("openPostersBtn")?.addEventListener("click", () => {
    if (!postersDialog) return;
    postersDialog.showModal();
    postersDialog.scrollTop = 0;
  });
}

/* 5. FORM VALIDATION AFTER INTERACTION & ARIA SYNC (modern-web-guidance: validate-input-after-interaction) */
const linkError = (el, shown) => {
  const errorId = el.dataset.error;
  if (!errorId) return;
  const ids = (el.getAttribute("aria-describedby") || "")
    .split(/\s+/)
    .filter((id) => id && id !== errorId);
  if (shown) ids.push(errorId);
  if (ids.length) el.setAttribute("aria-describedby", ids.join(" "));
  else el.removeAttribute("aria-describedby");
};

const announcer = document.createElement("div");
announcer.setAttribute("aria-live", "polite");
announcer.classList.add("visually-hidden");
document.body.append(announcer);
let announceTimer;
let announcedField;

const spokenText = (node) => {
  const copy = node.cloneNode(true);
  copy.querySelectorAll('[aria-hidden="true"]').forEach((n) => n.remove());
  copy.querySelectorAll('[role="img"][aria-label]').forEach((n) =>
    n.replaceWith(`${n.getAttribute("aria-label")}: `)
  );
  return copy.textContent.replace(/\s+/g, " ").trim();
};

const announceError = (el) => {
  const error = document.getElementById(el.dataset.error);
  if (!error) return;
  const label = el.labels?.[0] ? `${spokenText(el.labels[0])}: ` : "";
  clearTimeout(announceTimer);
  announcer.textContent = "";
  announcedField = el;
  announceTimer = setTimeout(() => {
    announcer.textContent = label + spokenText(error);
  }, 500);
};

const flagged = new WeakSet();
const announced = new WeakSet();
const syncAria = (el, announce = false) => {
  if (!el.matches?.("input, select, textarea")) return;
  const invalid = CSS.supports("selector(:user-invalid)")
    ? el.matches(":user-invalid")
    : el.classList.contains("user-invalid-fallback");
  if (invalid) {
    if (announce && !announced.has(el)) {
      announceError(el);
      announced.add(el);
    }
    el.setAttribute("aria-invalid", "true");
    linkError(el, true);
    flagged.add(el);
  } else if (flagged.has(el) || el.getAttribute("aria-invalid") !== "true") {
    el.setAttribute("aria-invalid", "false");
    linkError(el, false);
    flagged.delete(el);
    announced.delete(el);
    if (announcedField === el) {
      clearTimeout(announceTimer);
      announcer.textContent = "";
    }
  }
};

const UserInvalidFallback = (() => {
  const dirtyState = new WeakMap();
  const updateState = (input) => {
    const isValid = input.validity.valid;
    input.classList.toggle("user-invalid-fallback", !isValid);
    input.classList.toggle("user-valid-fallback", isValid);
    input.setAttribute("aria-invalid", isValid ? "false" : "true");
    linkError(input, !isValid);
  };
  const handleEvent = (event) => {
    const input = event.target;
    if (event.type === "reset") {
      const controls = input.elements || [];
      for (const control of controls) {
        dirtyState.delete(control);
        control.classList.remove("user-invalid-fallback", "user-valid-fallback");
        if (control.matches("input, select, textarea")) control.setAttribute("aria-invalid", "false");
        if (control.dataset?.error) linkError(control, false);
      }
      return;
    }
    if (!input.checkValidity) return;
    if (event.type === "invalid") {
      dirtyState.set(input, { hasInteracted: true, hasBlurred: true });
      updateState(input);
      return;
    }
    if (event.type === "input" || event.type === "change") {
      const s = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      s.hasInteracted = true;
      dirtyState.set(input, s);
      if (s.hasBlurred) updateState(input);
    } else if (event.type === "blur") {
      const s = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      s.hasBlurred = true;
      dirtyState.set(input, s);
      if (s.hasInteracted) updateState(input);
    }
  };
  const init = (root = document) => {
    if (CSS.supports("selector(:user-invalid)")) return;
    root.querySelectorAll("input, select, textarea").forEach((el) => {
      if (!el.hasAttribute("aria-invalid")) el.setAttribute("aria-invalid", "false");
    });
    root.addEventListener("blur", handleEvent, true);
    root.addEventListener("input", handleEvent);
    root.addEventListener("change", handleEvent);
    root.addEventListener("invalid", handleEvent, true);
    root.addEventListener("reset", handleEvent, true);
  };
  return { init };
})();

const NOT_SENT_TEXT =
  "Замовлення ще не надіслано. Надішліть чек Васі зручним способом нижче або зателефонуйте — ми підтвердимо час.";

async function copyTextToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // переходимо до запасного варіанта
  }
  let ta;
  try {
    ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;";
    // Усередині модального діалогу решта сторінки inert, тому тимчасове поле додаємо в діалог
    (document.getElementById("checkoutDialog") || document.body).append(ta);
    ta.select();
    ta.setSelectionRange(0, text.length);
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    ta?.remove();
  }
}

function setupConfirmLinks(receiptText) {
  const phone = CONFIG.phonePrimary;
  const callBtn = document.getElementById("confirmCallBtn");
  const viberBtn = document.getElementById("confirmViberShareBtn");
  const tgBtn = document.getElementById("confirmTelegramShareBtn");
  const smsBtn = document.getElementById("confirmSmsBtn");
  if (callBtn) callBtn.href = `tel:${phone}`;
  if (viberBtn) viberBtn.href = `viber://chat?number=${encodeURIComponent(phone)}`;
  if (tgBtn) tgBtn.href = `https://t.me/${phone}`;
  if (smsBtn) smsBtn.href = `sms:${phone}?&body=${encodeURIComponent(receiptText || "")}`;
}

function setupValidationAndForm() {
  document.querySelectorAll("input, select, textarea").forEach((el) => syncAria(el));
  document.addEventListener("blur", (e) => syncAria(e.target, true), true);
  document.addEventListener("input", (e) => {
    if (e.target.hasAttribute("aria-invalid")) syncAria(e.target);
  });
  document.addEventListener("change", (e) => syncAria(e.target, true), true);
  document.addEventListener(
    "invalid",
    (e) => {
      announced.add(e.target);
      syncAria(e.target);
    },
    true
  );
  document.addEventListener(
    "reset",
    (e) => {
      setTimeout(() => [...e.target.elements].forEach((el) => syncAria(el)));
    },
    true
  );

  const form = document.getElementById("orderForm");
  if (!form) return;
  UserInvalidFallback.init(form);

  const deliveryGroup = document.getElementById("deliveryFieldsGroup");
  const smilaZoneField = document.getElementById("smilaZoneField");
  const addressInput = document.getElementById("customerAddress");
  const deliveryZoneSelect = document.getElementById("deliveryZone");

  const applyFulfillmentMode = () => {
    const mode = form.querySelector('input[name="fulfillment"]:checked')?.value || "pickup";
    const needsAddress = mode === "delivery" || mode === "novaposhta";
    if (deliveryGroup) deliveryGroup.hidden = !needsAddress;
    if (smilaZoneField) smilaZoneField.hidden = mode !== "delivery";
    if (addressInput) {
      addressInput.required = needsAddress;
      if (!needsAddress) {
        addressInput.value = "";
        syncAria(addressInput);
      }
    }
    updateCartUI();
  };

  form.querySelectorAll('input[name="fulfillment"]').forEach((radio) => {
    radio.addEventListener("change", applyFulfillmentMode);
  });

  deliveryZoneSelect?.addEventListener("change", updateCartUI);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (state.cart.length === 0) {
      alert("Додайте хоча б одну страву з меню у кошик!");
      return;
    }

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(":invalid");
      firstInvalid?.focus();
      return;
    }

    const fulfillment = form.querySelector('input[name="fulfillment"]:checked')?.value || "pickup";
    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const readyTime = document.getElementById("readyTime").value;
    const payment = document.getElementById("paymentMethod").value;
    const comment = document.getElementById("orderComment").value.trim();
    const address = document.getElementById("customerAddress")?.value.trim() || "";
    const { subtotal, deliveryLabel, grandTotal, zone } = getCartTotals();

    const fulfillmentText =
      fulfillment === "delivery"
        ? `Доставка по Смілі (${zone.name.split(":")[0]} — ${address})`
        : fulfillment === "novaposhta"
        ? `Нова Пошта по Україні (${address})`
        : "Самовивіз (вул. Б. Хмельницького, 7)";

    const orderNum = Math.floor(100 + Math.random() * 900);
    const lines = [
      `🔥 ЗАМОВЛЕННЯ #${orderNum} — ШАШЛИК СМІЛА`,
      `👤 Клієнт: ${name}`,
      `📞 Телефон: ${phone}`,
      `📍 Отримання: ${fulfillmentText}`,
      `🕒 На коли: ${readyTime}`,
      `💳 Оплата: ${payment}`,
      comment ? `💬 Коментар: ${comment}` : "",
      `-------------------------`,
      ...state.cart.map(
        (i, idx) =>
          `${idx + 1}. ${i.title}${i.meta ? ` (${i.meta})` : ""} × ${i.qty} = ${i.unitPrice * i.qty} ₴`
      ),
      `-------------------------`,
      `Сума страв: ${subtotal} ₴`,
      `Доставка: ${deliveryLabel}`,
      `💰 РАЗОМ ДО СПЛАТИ: ${grandTotal} ₴`
    ].filter(Boolean);

    const receiptText = lines.join("\n");

    const confirmBox = document.getElementById("orderConfirmationBox");
    const confirmNum = document.getElementById("confirmOrderNumber");
    const confirmStatus = document.getElementById("confirmServerStatus");
    const copyNote = document.getElementById("confirmCopyStatus");
    const receiptPre = document.getElementById("confirmReceiptText");
    const submitBtn = document.getElementById("submitOrderBtn");

    if (confirmNum) confirmNum.textContent = `📋 Чек №${orderNum} готовий — залишився один крок`;
    if (receiptPre) receiptPre.textContent = receiptText;
    setupConfirmLinks(receiptText);
    if (confirmStatus) confirmStatus.textContent = NOT_SENT_TEXT;

    confirmBox?.removeAttribute("hidden");
    confirmBox?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
    confirmNum?.focus({ preventScroll: true });

    // Автоматично копіюємо чек у буфер обміну
    const copied = await copyTextToClipboard(receiptText);
    if (copyNote) {
      copyNote.textContent = copied
        ? "Чек скопійовано — його можна просто вставити в чат."
        : "Не вдалося скопіювати автоматично — натисніть «Скопіювати чек».";
    }

    // Відправка на сервер — лише якщо налаштовано CONFIG.orderEndpoint
    if (CONFIG.orderEndpoint) {
      if (submitBtn) submitBtn.disabled = true;
      if (confirmStatus) confirmStatus.textContent = "Надсилаємо замовлення на кухню…";
      let sent = false;
      try {
        const res = await fetch(CONFIG.orderEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderNum,
            name,
            phone,
            fulfillment,
            address,
            readyTime,
            payment,
            comment,
            items: state.cart,
            subtotal,
            deliveryLabel,
            grandTotal,
            receiptText
          })
        });
        sent = res.ok;
      } catch {
        sent = false;
      }
      if (confirmStatus) {
        confirmStatus.textContent = sent
          ? "✅ Замовлення надіслано на кухню. Чекайте дзвінка для підтвердження."
          : NOT_SENT_TEXT;
      }
      if (submitBtn) submitBtn.disabled = false;
    }
  });

  document.getElementById("copyReceiptBtn")?.addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    const receiptPre = document.getElementById("confirmReceiptText");
    const copyNote = document.getElementById("confirmCopyStatus");
    if (!receiptPre || !btn) return;
    const ok = await copyTextToClipboard(receiptPre.textContent);
    btn.textContent = ok ? "✓ Чек скопійовано!" : "Не вдалося скопіювати";
    if (copyNote) {
      copyNote.textContent = ok
        ? "Чек скопійовано — його можна просто вставити в чат."
        : "Не вдалося скопіювати автоматично — виділіть текст чека вручну та скопіюйте його.";
    }
    setTimeout(() => {
      btn.textContent = "📋 Скопіювати чек";
    }, 1800);
  });

  document.getElementById("newOrderBtn")?.addEventListener("click", () => {
    state.cart = [];
    saveCart();
    form.reset();
    [...form.elements].forEach((el) => {
      el.classList?.remove("user-invalid-fallback", "user-valid-fallback");
      if (el.matches?.("input, select, textarea")) {
        el.setAttribute("aria-invalid", "false");
        if (el.dataset?.error) linkError(el, false);
      }
    });
    applyFulfillmentMode();
    setTimeout(() => [...form.elements].forEach((el) => syncAria(el)));
    const confirmBox = document.getElementById("orderConfirmationBox");
    confirmBox?.setAttribute("hidden", "");
    const receiptPre = document.getElementById("confirmReceiptText");
    const copyNote = document.getElementById("confirmCopyStatus");
    const confirmStatus = document.getElementById("confirmServerStatus");
    if (receiptPre) receiptPre.textContent = "";
    if (copyNote) copyNote.textContent = "";
    if (confirmStatus) confirmStatus.textContent = NOT_SENT_TEXT;
    const submitBtn = document.getElementById("submitOrderBtn");
    if (submitBtn) submitBtn.disabled = false;
    updateCartUI();
    const dlg = document.getElementById("checkoutDialog");
    if (dlg) {
      dlg.scrollTop = 0;
      dlg.close();
    }
  });
}

/* 6. CATEGORY TABS & INIT */
function setupTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const tabsRow = document.querySelector(".category-tabs");
  const activateCategory = (cat) => {
    state.activeCategory = cat;
    tabs.forEach((t) => {
      const active = t.dataset.category === cat;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
      if (active && tabsRow) {
        const left = t.offsetLeft - (tabsRow.clientWidth - t.offsetWidth) / 2;
        tabsRow.scrollTo({ left: Math.max(0, left), behavior: scrollBehavior() });
      }
    });
    renderMenu();
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateCategory(tab.dataset.category || "all");
      // Якщо вкладки «прилипли» під шапкою — повертаємо початок списку в поле зору
      const grid = document.getElementById("menuGrid");
      if (tabsRow && grid) {
        const headerH = document.querySelector(".site-header")?.offsetHeight || 0;
        const stuck = tabsRow.getBoundingClientRect().top <= headerH + 2;
        if (stuck) {
          const top = window.scrollY + grid.getBoundingClientRect().top - headerH - tabsRow.offsetHeight - 8;
          window.scrollTo({ top: Math.max(0, top), behavior: scrollBehavior() });
        }
      }
    });
  });

  document.querySelectorAll("[data-filter-jump]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activateCategory(btn.dataset.filterJump || "combos");
      document.getElementById("menu")?.scrollIntoView({ behavior: scrollBehavior() });
    });
  });

  const jumpToMenuItem = (itemId) => {
    if (!itemId) return;
    const item = MENU_ITEMS.find((m) => m.id === itemId);
    if (!item) {
      console.warn(`[menu] Страву з id "${itemId}" не знайдено у MENU_ITEMS — перехід скасовано.`);
      return;
    }

    const postersDialog = document.getElementById("postersDialog");
    if (postersDialog?.open) {
      postersDialog.close();
    }

    if (state.activeCategory !== "all" && state.activeCategory !== item.category) {
      activateCategory("all");
    }

    const cardEl = document.querySelector(`.menu-card[data-item-id="${itemId}"]`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: scrollBehavior(), block: "center" });
      cardEl.classList.remove("highlight-flash");
      void cardEl.offsetWidth;
      cardEl.classList.add("highlight-flash");
      const addBtn = cardEl.querySelector("[data-add-btn]");
      addBtn?.focus({ preventScroll: true });
      setTimeout(() => {
        cardEl.classList.remove("highlight-flash");
      }, 3300);
    }
  };

  document.querySelectorAll("[data-jump-item]").forEach((el) => {
    if (!MENU_ITEMS.some((m) => m.id === el.dataset.jumpItem)) {
      console.warn(`[menu] Елемент з data-jump-item="${el.dataset.jumpItem}" не має відповідної страви у MENU_ITEMS.`);
    }
    el.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      jumpToMenuItem(el.dataset.jumpItem);
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        if (el.tagName !== "BUTTON") {
          e.preventDefault();
          jumpToMenuItem(el.dataset.jumpItem);
        }
      }
    });
  });
}

function setupHeaderHeightSync() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const apply = () => {
    const h = Math.round(header.getBoundingClientRect().height);
    if (h > 0) document.documentElement.style.setProperty("--header-h", `${h}px`);
  };
  apply();
  if (typeof ResizeObserver === "function") {
    new ResizeObserver(apply).observe(header);
  } else {
    window.addEventListener("resize", apply);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupHeaderHeightSync();
  updateOpenStatus();
  state.cart = loadCart();
  renderMenu();
  updateCartUI();
  setupTabs();
  setupDialogs();
  setupValidationAndForm();
});
