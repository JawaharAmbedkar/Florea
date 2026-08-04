import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // Aurora Petal Collection Items
  {
    id: 'aurora-1',
    name: 'Petal Solitaire Ring',
    category: 'engagement',
    subCategory: 'Rings',
    price: 1200,
    carat: '1.25 ct',
    metalOptions: ['18k White Gold', '18k Yellow Gold', '18k Rose Gold', 'Platinum'],
    image: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY6NzF8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwcmluZ3xlbnwwfHx8fDE3ODU3NTYyNjZ8MA&ixlib=rb-4.1.0&q=85',
    hoverImage: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY6NzF8MHwxfHNlYXJjaHw0fHxlbmdhZ2VtZW50JTIwcmluZ3xlbnwwfHx8fDE3ODU3NTYyNjZ8MA&ixlib=rb-4.1.0&q=85',
    collection: 'AURORA PETAL',
    badge: 'BEST SELLER',
    description: 'An iconic flower-inspired halo encircling a brilliant round lab-grown diamond, set on an intricate dual-metal band.',
    details: [
      '1.25 Carat Ideal Cut Lab-Grown Diamond (VVS1, Color E)',
      'Hand-finished in 18k White and Rose Gold',
      'Conflict-free and eco-certified provenance',
      'Comes with IGI Certificate & Lifetime Atelier Warranty'
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 48
  },
  {
    id: 'aurora-2',
    name: 'Aurora Halo Ring',
    category: 'engagement',
    subCategory: 'Rings',
    price: 2450,
    carat: '1.75 ct',
    metalOptions: ['18k White Gold', '18k Yellow Gold', 'Platinum'],
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=1000',
    collection: 'AURORA PETAL',
    badge: 'NEW · EDITORS CHOICE',
    description: 'The AuroraPetal™ Ceremony collection reimagines the fine ring silhouette; interlocking a captivating flower-inspired diamond bloom atop a hand-finished band.',
    details: [
      '1.75 Carat Center Lab-Grown Diamond with 0.40 ct accent pavé',
      'Solid Platinum band with signature Floréa floral lattice underside',
      'Laser-engraved certification serial number'
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 32
  },
  {
    id: 'aurora-3',
    name: 'Cathedral Brilliant Necklace',
    category: 'jewelry',
    subCategory: 'Necklaces & Sets',
    price: 1890,
    carat: '1.50 ct',
    metalOptions: ['18k Yellow Gold', '18k White Gold', 'Rose Gold'],
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000',
    collection: 'AURORA PETAL',
    description: 'Sophisticated cathedral arch setting with teardrop diamond drop necklace accents, celebrating French high jewelry tradition.',
    details: [
      'Recycled 18k Yellow Gold chain and ring housing',
      'Teardrop brilliant cut lab diamond, Color D / Flawless',
      'Handcrafted in Parisian atelier'
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 21
  },
  {
    id: 'aurora-4',
    name: 'Golden Band Classic',
    category: 'gemstones',
    subCategory: 'Rings',
    price: 990,
    carat: '2.10 ct',
    metalOptions: ['18k Rose Gold', '18k Yellow Gold'],
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000',
    collection: 'AURORA PETAL',
    badge: 'ETHICAL PICK',
    description: 'Radiant emerald-cut pink sapphire surrounded by a micro-pavé halo of lab-grown diamonds on a warm 18k rose gold band.',
    details: [
      '2.10 ct Natural-identical ethically grown Pink Sapphire',
      '0.30 ct Micro-pavé lab diamonds',
      'Stamped with hallmark of provenance'
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 19
  },

  // Trending Style Items
  {
    id: 'trend-1',
    name: 'Eternity Diamond Studs',
    category: 'jewelry',
    subCategory: 'Earrings',
    price: 780,
    carat: '1.00 ct tw',
    metalOptions: ['18k Yellow Gold', '18k White Gold'],
    image: 'https://images.unsplash.com/photo-1717605877049-71f077db5b8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000',
    badge: 'NEW · EDITORS CHOICE',
    description: 'Timeless round lab diamond studs set in a delicate sunburst gold halo. Designed for effortless daily elegance.',
    details: [
      '0.50 ct each ear (1.00 ct total weight)',
      'Double-notched safety screw backs',
      '18k Recycled Yellow Gold'
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 56
  },
  {
    id: 'trend-3',
    name: 'Pear Brilliant Solitaire',
    category: 'engagement',
    subCategory: 'Rings',
    price: 1290,
    carat: '1.50 ct',
    metalOptions: ['18k Yellow Gold', 'Platinum'],
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=1000',
    description: 'Stacked woven gold ring with heart and circle diamond pavé discs, forming an iconic architectural band.',
    details: [
      'Solid 18k Yellow Gold hand-woven weave',
      '0.85 ct round brilliant lab diamonds',
      'High polish mirror finish'
    ],
    inStock: true,
    rating: 4.7,
    reviewsCount: 15
  },
  {
    id: 'trend-4',
    name: 'Duo Drop Earrings',
    category: 'diamonds',
    subCategory: 'Earrings',
    price: 1050,
    carat: '1.20 ct',
    metalOptions: ['Platinum', '18k White Gold'],
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    hoverImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000',
    description: 'Pure, loose lab-grown diamonds arranged with reflecting facets that capture light from every angle.',
    details: [
      'Ideal cut loose diamond pair',
      'Includes gemstone authenticity passport',
      'Sustainably grown using zero-emission solar energy'
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 29
  },
  {
    id: 'trend-2',
    name: 'Celestine Riviera Necklace',
    category: 'jewelry',
    subCategory: 'Necklaces',
    price: 3200,
    carat: '3.50 ct',
    metalOptions: ['18k White Gold', 'Platinum'],
    image: 'https://images.pexels.com/photos/10215179/pexels-photo-10215179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    hoverImage: 'https://images.unsplash.com/photo-1611591475171-87201c10d3e5?auto=format&fit=crop&q=80&w=1000',
    badge: 'BEST SELLER',
    description: 'A cluster bloom of 7 central lab diamonds dangling gracefully from a solid silver-beaded riviera chain.',
    details: [
      '3.50 ct Total Lab Diamond Weight',
      'Adjustable 16-18 inch chain length',
      'Custom Floréa clasp with hidden diamond accent'
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 41
  },
  {
    id: 'trend-5',
    name: 'Vintage Marquise Ring',
    category: 'gemstones',
    subCategory: 'Rings',
    price: 1450,
    carat: '1.80 ct',
    metalOptions: ['18k White Gold', '18k Yellow Gold'],
    image: 'https://images.unsplash.com/photo-1719559746390-57f3af2794ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hoverImage: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=1000',
    description: 'An alluring deep blue marquise-cut sapphire surrounded by an ornate halo of brilliant lab diamonds.',
    details: [
      '1.80 ct Marquise Ocean Sapphire',
      '0.45 ct halo pavé',
      'Vintage milgrain edge work'
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 38
  },

  // Additional Categories Items
  {
    id: 'wedding-1',
    name: 'Blue Sapphire Drop Earrings',
    category: 'jewelry',
    subCategory: 'Earrings',
    price: 1150,
    carat: '1.10 ct',
    metalOptions: ['18k White Gold', '18k Yellow Gold', '18k Rose Gold', 'Platinum'],
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200',
    badge: 'BEST SELLER',
    description: 'Elegant blue sapphire drop earrings accented by brilliant-cut lab-grown diamonds.',
    details: ['1.10 ct Total Sapphire & Diamond Weight', 'Drop earring setting', '18k Solid Gold posts and backs'],
    inStock: true,
    rating: 5.0,
    reviewsCount: 64
  },
  {
    id: 'gifts-1',
    name: 'Floréa Signature Pendant',
    category: 'gifts',
    subCategory: 'Necklaces',
    price: 650,
    carat: '0.50 ct',
    metalOptions: ['18k Yellow Gold', '18k White Gold'],
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000',
    badge: 'ETHICAL PICK',
    description: 'Delicate floral medallion with center lab diamond, presented in signature Floréa olive velvet gift box.',
    details: ['0.50 ct Center Diamond', '18-inch adjustable chain', 'Complimentary gift wrapping & card'],
    inStock: true,
    rating: 4.9,
    reviewsCount: 88
  }
];
