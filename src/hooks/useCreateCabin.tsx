import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createCabin } from '../services/apiCabins';
import toast from 'react-hot-toast';

export default function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationKey: ['cabins'],
    mutationFn: createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      toast.success('created cabin');
    },
    onError: () => toast.error('error in create cabin'),
  });
  return { mutate, isPending, error };
}
