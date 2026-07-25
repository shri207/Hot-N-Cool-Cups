export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
  verifiedVisit: boolean;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Vikram Reddy',
    location: 'Quthbullapur, Hyderabad',
    rating: 5,
    date: '2 days ago',
    comment: 'The aroma of Irani chai here is amazing... highly recommended for chai lovers! Paired with hot Osmania biscuits, it is bliss after work.',
    tag: 'Chai Enthusiast',
    verifiedVisit: true,
  },
  {
    id: 'rev-2',
    author: 'Ananya Sharma',
    location: 'Bank Colony, Hyderabad',
    rating: 5,
    date: '1 week ago',
    comment: 'Good quality, tasty food and super fast service! The neon ambiance is so energetic, perfect for photos and evening tea with friends.',
    tag: 'Regular Hangout',
    verifiedVisit: true,
  },
  {
    id: 'rev-3',
    author: 'Mohd. Faisal',
    location: 'Jeddah / Hyderabad',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Coffee and Sharjah are a MUST TRY! The Sharjah shake is ultra thick and authentic south Indian style with loads of nuts.',
    tag: 'Foodie',
    verifiedVisit: true,
  },
  {
    id: 'rev-4',
    author: 'Priya Sundaram',
    location: 'Suchitra, Hyderabad',
    rating: 4.5,
    date: '3 weeks ago',
    comment: 'Best double egg Maggi & Peri Peri fries in Quthbullapur area! Super clean open kitchen and pocket-friendly prices.',
    tag: 'Snack Lover',
    verifiedVisit: true,
  },
  {
    id: 'rev-5',
    author: 'Karthik Rao',
    location: 'Balanagar, Hyderabad',
    rating: 5,
    date: '1 month ago',
    comment: 'Open early morning at 6 AM! My go-to stop after morning cycling sessions for hot Kulhad Ginger Tea.',
    tag: 'Early Bird',
    verifiedVisit: true,
  },
];
