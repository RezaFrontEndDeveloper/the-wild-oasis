import { supabase } from './supabase';

export interface CabinType {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description: string;
}

export async function getCabins(): Promise<CabinType[]> {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) throw error;

  return data;
}

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
};

export async function createCabin(newCabin: Cabin) {
  const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])

    .select();

  if (error) throw new Error(error.message);
  return data;
}
