'use server';

import { CategoriesWithProductsResponse } from "@/app/admin/categories/categories.types";
import { createClient } from "@/supabase/client";

const supabase = createClient();

export const getCategoriesWithProducts = async (): Promise<CategoriesWithProductsResponse> => {
    const { data, error } = await supabase
    .from('category')
    .select('*, products:product(*)')
    .returns<CategoriesWithProductsResponse>();
    if (error) {
        console.log(`Error fetching categories: ${error.message}`);
    }
    return data || [];
};