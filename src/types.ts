export interface Product {
  id: string;
  name: string;
  category: 'engagement' | 'wedding' | 'jewelry' | 'diamonds' | 'gemstones' | 'gifts';
  subCategory?: string;
  price: number;
  originalPrice?: number;
  carat?: string;
  metalOptions?: string[];
  image: string;
  hoverImage?: string;
  badge?: 'NEW · EDITORS CHOICE' | 'BEST SELLER' | 'LIMITED EDITION' | 'ETHICAL PICK';
  collection?: string;
  description: string;
  details: string[];
  inStock: boolean;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedMetal: string;
  selectedSize?: string;
  selectedCarat?: string;
}

export interface JournalArticle {
  id: string;
  category: 'CRAFTMANSHIP' | 'JOURNAL' | 'STYLE';
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  date: string;
  author: string;
  content?: string[];
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  caption: string;
  mainImage: string;
  insetImage: string;
  collectionName: string;
  targetCategory: string;
}
