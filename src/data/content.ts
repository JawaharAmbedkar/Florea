import { HeroSlide, JournalArticle } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: 'TIMELESS ELEGANCE',
    subtitle: 'CRAFTED FOR EVERLASTING MOMENTS',
    caption: 'CRAFTED FOR EVERLASTING MOMENTS',
    mainImage: '/images/firstbig.jpg',
    insetImage: '/images/firstsmall.jpg',
    collectionName: 'Ceremony & High Jewelry',
    targetCategory: 'engagement'
  },
  {
    id: 2,
    title: 'BRILLIANT BY NATURE',
    subtitle: 'LAB-GROWN DIAMONDS, PURE PERFECTION',
    caption: 'LAB-GROWN DIAMONDS, PURE PERFECTION',
    mainImage: '/images/secondbig.jpg',
    insetImage: '/images/secondsmall.jpg',
    collectionName: 'Solitaire & Halo Rings',
    targetCategory: 'diamonds'
  },
  {
    id: 3,
    title: 'LUXURY REDEFINED',
    subtitle: 'ETHICAL FINE JEWELRY WITHOUT COMPROMISE',
    caption: 'ETHICAL FINE JEWELRY WITHOUT COMPROMISE',
    mainImage: '/images/thirdbig.jpg',
    insetImage: '/images/thirdsmall.avif',
    collectionName: 'Atelier Stacks & Gold',
    targetCategory: 'jewelry'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'journal-1',
    category: 'CRAFTMANSHIP',
    title: 'The Making of a Lab-Grown Diamond',
    excerpt: 'A closer look inside our atelier where science meets artistry.',
    image: 'https://images.pexels.com/photos/5370644/pexels-photo-5370644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    readTime: '4 min read',
    date: 'August 2026',
    author: 'Élodie Laurent, Head Gemologist',
    content: [
      'Lab-grown diamonds are created through advanced technological processes that replicate the natural conditions under which diamonds form deep beneath the Earth’s crust.',
      'Using Chemical Vapor Deposition (CVD) powered by 100% renewable solar energy, carbon atoms carefully crystallize layer by layer over several weeks, resulting in stones chemically, physically, and optically identical to mined diamonds.',
      'Our master lapidaries in Paris hand-cut each gem to exact Ideal proportions to maximize fire, brilliance, and scintillation.'
    ]
  },
  {
    id: 'journal-2',
    category: 'JOURNAL',
    title: 'A Guide to Ethical Engagement Rings',
    excerpt: 'How to choose a stone that celebrates love and the planet.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000',
    readTime: '6 min read',
    date: 'July 2026',
    author: 'Clara Moreau, Sustainability Director',
    content: [
      'Choosing an engagement ring is one of the most meaningful decisions you will ever make. Modern couples are increasingly seeking jewelry that aligns with their personal values.',
      'By choosing lab-grown diamonds set in 100% recycled 18k gold or platinum, you avoid habitat destruction, land displacement, and ethical uncertainties associated with traditional mining.',
      'Every Floréa stone comes certified with complete traceability, proving that beauty and integrity can exist in perfect harmony.'
    ]
  },
  {
    id: 'journal-3',
    category: 'STYLE',
    title: 'Layering Fine Necklaces the Modern Way',
    excerpt: 'Editor-approved combinations for a signature everyday stack.',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwbmVja2xhY2V8ZW58MHx8fHwxNzg1NzU2Mjc0fDA&ixlib=rb-4.1.0&q=85',
    readTime: '5 min read',
    date: 'July 2026',
    author: 'Sophie Vance, Senior Stylist',
    content: [
      'The art of necklace layering begins with playing with varied chain weights, pendant scales, and drop lengths.',
      'Start with a delicate 14-inch choker or beaded chain close to the collarbone as your foundation. Add a 16-inch solitary pendant, and anchor the stack with a 20-inch drop chain with a statement medallion.',
      'Mix warm 18k yellow gold with subtle white gold or pearl accents to add effortless French dimension.'
    ]
  }
];
