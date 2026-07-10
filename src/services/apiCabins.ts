import { supabase, supabaseUrl } from './supabase';

export interface CabinType {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description: string;
}
// read data from supabase
export async function getCabins(): Promise<CabinType[]> {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) throw error;

  return data;
}

// delete data as supabase

export async function deleteCabin(id: number) {
  const { error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) throw new Error(error.message);
}

type Cabin = {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: File;
};

// add row in data in supabase
export async function createCabin(newCabin: Cabin) {
  const imageName = `${crypto.randomUUID()}-${newCabin.image.name}`.replaceAll('/', '');

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);
  if (storageError) {
    throw new Error(storageError.message);
  }

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from('cabins')
    .insert([
      {
        ...newCabin,
        image: imagePath,
      },
    ])
    .select();

  if (error) {
    await supabase.storage.from('cabin-images').remove([imageName]);

    throw new Error(error.message);
  }

  return data;
}

export async function updateCabin(id: number, updatedCabin: Partial<Cabin>) {
  const { data, error } = await supabase.from('cabins').update(updatedCabin).eq('id', id).select();

  if (error) throw new Error(error.message);

  return data;
}
