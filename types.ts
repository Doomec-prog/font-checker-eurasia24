export interface NewsItem {
  id: number;
  title: string;
}

export interface Article {
  title: string;
  image: string;
  excerpt: string;
  author?: string;
  date?: string;
}

export interface FontOption {
  name: string;
  value: string;
  type: 'serif' | 'sans-serif';
}