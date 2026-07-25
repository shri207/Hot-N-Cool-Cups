import type { Metadata } from 'next';
import { Bebas_Neue, Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HOT N COOL CUPS | Industrial Neon & Urban Street Café Hyderabad',
  description: 'Your favorite neighborhood urban café serving freshly brewed chai, artisanal coffee, refreshing coolers, and crispy snacks in Quthbullapur, Hyderabad.',
  keywords: ['Hot N Cool Cups', 'Hyderabad Cafe', 'Chai Hyderabad', 'Quthbullapur Cafe', 'Sharjah Shake', 'Kulhad Chai', 'Street Cafe Hyderabad'],
  openGraph: {
    title: 'HOT N COOL CUPS | Hot Tea. Cold Drinks. Endless Vibes.',
    description: 'Freshly brewed chai, rich espresso, icy Sharjah, and crispy bites served in an industrial neon setting in Quthbullapur.',
    url: 'https://hotncoolcups.com',
    siteName: 'HOT N COOL CUPS',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: 'HOT N COOL CUPS',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',
    '@id': 'https://hotncoolcups.com',
    url: 'https://hotncoolcups.com',
    telephone: '+919876543210',
    priceRange: '₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bank Colony, Quthbullapur',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500055',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.5023,
      longitude: 78.4682,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '06:00',
      closes: '23:30',
    },
    servesCuisine: ['Chai', 'Coffee', 'Juices', 'Fast Food', 'Snacks'],
  };

  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${manrope.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#121212] text-white font-sans antialiased selection:bg-[#FF6A00] selection:text-black overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
