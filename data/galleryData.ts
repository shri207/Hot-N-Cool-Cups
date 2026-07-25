export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  heightClass: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Tea Pour',
    category: 'Chai Art',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
    heightClass: 'h-80',
    caption: 'Steam rising as hot spiced Irani chai is poured from height into clay kulhads.',
  },
  {
    id: 'gal-2',
    title: 'Neon Corner Lounge',
    category: 'Interior Vibes',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    heightClass: 'h-96',
    caption: 'Our signature glowing neon sign backdrop illuminating brushed steel tables & raw concrete.',
  },
  {
    id: 'gal-3',
    title: 'Artisanal Espresso Pull',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    heightClass: 'h-72',
    caption: 'Golden crema pouring from our industrial espresso group head.',
  },
  {
    id: 'gal-4',
    title: 'Icy Sharjah & Shakes',
    category: 'Coolers',
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&q=80&w=800',
    heightClass: 'h-80',
    caption: 'Frothy, chilled Sharjah shake topped with roasted nuts and chocolate syrup.',
  },
  {
    id: 'gal-5',
    title: 'Sizzling Double Egg Maggi',
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&q=80&w=800',
    heightClass: 'h-96',
    caption: 'Spicy street style Maggi cooked with butter, eggs & fresh green chilies.',
  },
  {
    id: 'gal-6',
    title: 'Crispy Golden Bites',
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800',
    heightClass: 'h-72',
    caption: 'Freshly fried chicken nuggets served with signature spicy garlic dip.',
  },
  {
    id: 'gal-7',
    title: 'Evening Hangout Vibes',
    category: 'People & Mood',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    heightClass: 'h-80',
    caption: 'Friends relaxing over tea & coffee under warm Edison bulbs in Quthbullapur.',
  },
  {
    id: 'gal-8',
    title: 'Fiery Peri Peri Fries',
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800',
    heightClass: 'h-72',
    caption: 'Crinkle cut fries loaded with red paprika spice and cheese dip.',
  },
];
