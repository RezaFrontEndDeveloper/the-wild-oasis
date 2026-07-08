import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { deleteCabin } from '../services/apiCabins';

function useDeleteCabins() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteCabinMutation,
    error: deleteError,
    isPending,
  } = useMutation({
    mutationKey: ['cabins'],
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      toast.success('Cabin deleted');
    },
    onError: () => toast.error('Something went wrong'),
  });

  return { deleteCabinMutation, isPending, deleteError };
}
export default useDeleteCabins;
