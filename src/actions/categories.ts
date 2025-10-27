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

export const imageUploadHandler = async (formData: FormData) => {
  const supabase = createClient();
  if (!formData) return;

  const fileEntry = formData.get('file');

  if (!(fileEntry instanceof File)) throw new Error('Expected a file');

  const fileName = fileEntry.name;

  try {
    const { data, error } = await (await supabase).storage
      .from('app-images')
      .upload(fileName, fileEntry, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Error uploading image:', error);
      throw new Error('Error uploading image');
    }

    const {
      data: { publicUrl },
    } = await (await supabase).storage.from('app-images').getPublicUrl(data.path);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Error uploading image');
  }
};