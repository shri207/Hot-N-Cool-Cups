export interface MenuItem {
  id: string;
  name: string;
  category: 'chai-coffee' | 'coolers' | 'quick-bites' | 'maggi';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  description: string;
  longDescription: string;
  image: string;
  isHot?: boolean;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  prepTime: string;
  customizationOptions?: {
    sugarLevel?: string[];
    spiceLevel?: string[];
    addOns?: { name: string; price: number }[];
  };
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'special-irani-chai',
    name: 'Special Irani Chai',
    category: 'chai-coffee',
    categoryLabel: 'Signature Chai',
    price: 25,
    originalPrice: 30,
    rating: 4.9,
    reviewsCount: 340,
    description: 'Slow-brewed rich milk tea with mawa cardamom aroma, brewed in traditional Hyderabadi style.',
    longDescription: 'Authentic Hyderabadi Irani Chai slow-simmered with reduced condensed milk, aromatic cardamom, and premium tea leaves for a velvety, unforgettable finish.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
    isHot: true,
    isPopular: true,
    isVegetarian: true,
    prepTime: '2 mins',
    customizationOptions: {
      sugarLevel: ['Regular Sugar', 'Less Sugar', 'No Sugar'],
      addOns: [
        { name: 'Osmania Biscuits (2 pcs)', price: 15 },
        { name: 'Extra Malai Shot', price: 10 },
      ],
    },
  },
  {
    id: 'special-kulhad-chai',
    name: 'Clay Pot Kulhad Chai',
    category: 'chai-coffee',
    categoryLabel: 'Signature Chai',
    price: 35,
    rating: 4.8,
    reviewsCount: 280,
    description: 'Fresh ginger & cardamom tea served piping hot in earthen clay pots for that earthy soul-warming flavor.',
    longDescription: 'Infused with freshly crushed ginger, lemongrass, and green cardamom, poured directly into raw clay kulhads that absorb and elevate the tea’s natural aroma.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800',
    isHot: true,
    isPopular: true,
    isVegetarian: true,
    prepTime: '3 mins',
    customizationOptions: {
      sugarLevel: ['Regular', 'Low Sugar', 'Jaggery Sweetened (+₹10)'],
      addOns: [
        { name: 'Extra Ginger Punch', price: 5 },
        { name: 'Bun Maska', price: 35 },
      ],
    },
  },
  {
    id: 'espresso-cappuccino',
    name: 'Urban Espresso Cappuccino',
    category: 'chai-coffee',
    categoryLabel: 'Coffee',
    price: 60,
    rating: 4.7,
    reviewsCount: 195,
    description: 'Double shot dark roast espresso topped with thick microfoam milk and dark cocoa dusting.',
    longDescription: 'Single-origin South Indian Arabica beans dark roasted, pulled as an intense double espresso and steamed into silky foam with cocoa art.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
    isHot: true,
    isVegetarian: true,
    prepTime: '4 mins',
    customizationOptions: {
      sugarLevel: ['Standard', 'Unsweetened'],
      addOns: [
        { name: 'Extra Shot Espresso', price: 25 },
        { name: 'Hazelnut Drizzle', price: 15 },
      ],
    },
  },
  {
    id: 'cold-coffee-icecream',
    name: 'Chilled Cold Coffee with Vanilla Scoop',
    category: 'coolers',
    categoryLabel: 'Cool Refreshments',
    price: 90,
    originalPrice: 105,
    rating: 4.9,
    reviewsCount: 420,
    description: 'Thick blended coffee milkshake topped with a rich vanilla ice cream ball & chocolate drizzle.',
    longDescription: 'A customer favorite! Cold brewed espresso blended with chilled whole milk, cane sugar, and ice, crowned with a heavy scoop of Madagascar vanilla cream.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    isVegetarian: true,
    prepTime: '4 mins',
    customizationOptions: {
      addOns: [
        { name: 'Extra Ice Cream Scoop', price: 25 },
        { name: 'Crushed Oreo Crunch', price: 15 },
      ],
    },
  },
  {
    id: 'signature-sharjah',
    name: 'Special Sharjah Shake',
    category: 'coolers',
    categoryLabel: 'Cool Refreshments',
    price: 80,
    rating: 4.9,
    reviewsCount: 510,
    description: 'The legendary south Indian chilled banana, boost, milk & nut blend with velvety froth.',
    longDescription: 'Cold sweet bananas, Boost/Malted milk, roasted cashew nuts, and thick milk whipped to airy perfection in our industrial high-speed blenders.',
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    isVegetarian: true,
    prepTime: '3 mins',
    customizationOptions: {
      addOns: [
        { name: 'Extra Roasted Almonds & Cashews', price: 20 },
        { name: 'Chocolate Syrup Twist', price: 10 },
      ],
    },
  },
  {
    id: 'fresh-mint-lemonade',
    name: 'Electric Cyan Mint Lime Cooler',
    category: 'coolers',
    categoryLabel: 'Cool Refreshments',
    price: 50,
    rating: 4.7,
    reviewsCount: 160,
    description: 'Ice-crushed fresh lime, crushed mint leaves, blue curaçao splash & sparkling soda.',
    longDescription: 'A sparkling neon blue citrus refresher packed with crushed fresh garden mint, tangy key lime juice, rock salt, and ice-cold soda water.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    prepTime: '3 mins',
  },
  {
    id: 'crispy-chicken-nuggets',
    name: 'Crispy Chicken Nuggets (8 Pcs)',
    category: 'quick-bites',
    categoryLabel: 'Quick Bites',
    price: 130,
    originalPrice: 150,
    rating: 4.8,
    reviewsCount: 310,
    description: 'Golden-fried tender juicy chicken nuggets served with signature garlic mayo & spicy dip.',
    longDescription: 'Succulent seasoned chicken coated in panko breadcrumbs, flash fried until golden and crunchy outside, served hot with house-made garlic dip.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    isVegetarian: false,
    isSpicy: true,
    prepTime: '7 mins',
    customizationOptions: {
      spiceLevel: ['Mild', 'Spicy', 'Extra Hot Mayo'],
      addOns: [
        { name: 'Extra Garlic Mayo Dip', price: 15 },
        { name: 'Cheese Sauce Drizzle', price: 20 },
      ],
    },
  },
  {
    id: 'peri-peri-fries',
    name: 'Peri Peri Crispy French Fries',
    category: 'quick-bites',
    categoryLabel: 'Quick Bites',
    price: 90,
    rating: 4.8,
    reviewsCount: 290,
    description: 'Imported crinkle cut potato fries tossed in fiery African Peri Peri seasoning blend.',
    longDescription: 'Deep fried double-blanched potatoes tossed in a spicy, tangy Peri Peri spice mix with oregano and paprika, served with cheesy dipping sauce.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    isVegetarian: true,
    isSpicy: true,
    prepTime: '6 mins',
    customizationOptions: {
      spiceLevel: ['Medium Peri Peri', 'Super Spicy Peri Peri'],
      addOns: [
        { name: 'Melted Jalapeño Cheese', price: 25 },
      ],
    },
  },
  {
    id: 'spicy-egg-maggi',
    name: 'Street Style Double Egg Maggi',
    category: 'maggi',
    categoryLabel: 'Quick Bites',
    price: 70,
    rating: 4.9,
    reviewsCount: 380,
    description: 'Classic wok-tossed spicy Maggi noodles loaded with scrambled eggs, butter & green chilies.',
    longDescription: 'The quintessential street food comfort dish! Cooked in butter with chopped onions, green chilies, red chili flakes, scrambled farm eggs, and aromatic Maggi masala.',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    isVegetarian: false,
    isSpicy: true,
    prepTime: '5 mins',
    customizationOptions: {
      spiceLevel: ['Medium Spicy', 'Street Fire Spicy'],
      addOns: [
        { name: 'Extra Egg Scramble', price: 15 },
        { name: 'Grated Amul Cheese', price: 20 },
      ],
    },
  },
  {
    id: 'cheese-butter-maggi',
    name: 'Loaded Cheese Butter Maggi',
    category: 'maggi',
    categoryLabel: 'Quick Bites',
    price: 80,
    rating: 4.7,
    reviewsCount: 210,
    description: 'Soupy style noodles cooked with generous Amul butter, sweet corn & melted mozzarella cheese.',
    longDescription: 'Silky cream Maggi noodles bathed in real butter, sweet corn kernels, Italian herbs, and topped with a thick blanket of molten cheese.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    prepTime: '5 mins',
  },
  {
    id: 'paneer-grilled-sandwich',
    name: 'Spicy Paneer Tikka Sandwich',
    category: 'quick-bites',
    categoryLabel: 'Quick Bites',
    price: 110,
    rating: 4.6,
    reviewsCount: 175,
    description: 'Crispy butter grilled jumbo bread stuffed with marinated paneer cubes, capsicum & mint chutney.',
    longDescription: 'Fresh cottage cheese tossed in tandoori spices, capsicum, and onions, grilled with garlic butter and served with green chutney.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    isSpicy: true,
    prepTime: '6 mins',
  },
];
