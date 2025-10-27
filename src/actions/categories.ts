'use server';

import { CategoriesWithProductsResponse } from "@/app/admin/categories/categories.types";
import { createClient } from "@/supabase/server";

export const getCategoriesWithProducts = async (): Promise<CategoriesWithProductsResponse> => {
    const supabase = await createClient();
    
    const { data, error } = await (await supabase)
    .from('category')
    .select('*, products:product(*)')
    .returns<CategoriesWithProductsResponse>();
    if (error) {
        console.log(`Error fetching categories: ${error.message}`);
    }
    return data || [];
};