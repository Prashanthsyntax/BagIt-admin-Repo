export type ProductWithCategory = {
  category: number;
  created_at: string;
  hero_image: string;
  id: number;
  image_url: string[];
  maxQuantity: number;
  price: number | null;
  slug: string;
  title: string;
};

export type ProductsWithCategoriesResponse = ProductWithCategory[];

export type UpdateProductSchema = {
  category: number;
  heroImage: string;
  imagesUrl: string[];
  maxQuantity: number;
  price: number;
  slug: string;
  title: string;
};