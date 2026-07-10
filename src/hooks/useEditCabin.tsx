import { useMutation } from '@tanstack/react-query';
import editCabin from '../components/organism/editCabinForm';
import toast from 'react-hot-toast';
import { updateCabin } from '../services/apiCabins';

export default function useEditForm() {
  const { mutate, error, isPending } = useMutation({
    mutationFn: () => updateCabin(),
    onSuccess: () => {
      toast.success('edited cabin');
    },
  });
  return { mutate, isPending, error };
}
