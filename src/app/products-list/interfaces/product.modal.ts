
export interface Links {
  www: string;
}

export interface Selling {
  high: number;
  low: number;
}

export interface PriceRange {
  selling: Selling;
}
export interface Price {
  regular: string;
  selling: string;
}
export interface Thumbnail {
  size: string;
  meta: string;
  alt: string;
  rel: string;
  width: number;
  href: string;
  height: number;
}

export interface Hero {
  size: string;
  meta: string;
  alt: string;
  rel: string;
  width: number;
  href: string;
  height: number;
}

export interface Image {
  size: string;
  meta: string;
  alt: string;
  rel: string;
  width: number;
  href: string;
  height: number;
}

export interface Flag {
  bopisSuppress: boolean;
  rank: number;
  id: string;
}

export interface Reviews {
  recommendationCount: number;
  likelihood: number;
  reviewCount: number;
  averageRating: number;
  id: string;
  type: string;
}

export interface Group {
  id: string;
  name: string;
  links: Links;
  priceRange?: PriceRange;
  price?: Price;
  thumbnail: Thumbnail;
  hero: Hero;
  images: Image[];
  swatches: any[];
  messages: any[];
  flags: Flag[];
  reviews: Reviews;
}

export interface ProductListResponse {
  id: string;
  name: string;
  categoryType: string;
  groups: Group[];
}
