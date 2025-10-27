import { getCategoriesWithProducts } from "@/actions/categories";
import CategoryPageComponent from '@/app/admin/categories/page-component';

export default async function Categories() {
    // Fetch categories
    const categories = await getCategoriesWithProducts();
    // console.log(categories);

    return <CategoryPageComponent categories={categories} />;
    
}