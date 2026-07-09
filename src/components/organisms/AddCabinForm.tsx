import { useForm } from 'react-hook-form';

import useCreateCabin from '../../hooks/useCreateCabin';
import useModalStore from '../../store/useModalStore';
import Button from '../atoms/Button';
import Spinner from '../atoms/Spinner';

type CabinFormData = {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: FileList;
};

function AddCabinForm() {
  const toggleModal = useModalStore((state) => state.modalToggle);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CabinFormData>();

  const { mutate, error, isPending } = useCreateCabin();

  function onSubmit(data: CabinFormData) {
    const image = data.image[0];
    mutate(
      { ...data, image: image },
      {
        onSuccess: () => {
          reset();
          toggleModal();
        },
      },
    );
  }
  if (error) return <p>{error.message}</p>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[500px] flex-col gap-5 rounded-lg bg-white"
    >
      <div>
        <div className="flex items-center">
          <label className="w-32">name : </label>

          <input
            {...register('name', { required: 'Cabin name is required' })}
            className="w-64 rounded border border-gray-300 px-4 py-2"
            type="text"
          />
        </div>
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}
      </div>
      <div>
        <div className="flex items-center">
          <label className="w-32">maxCapacity : </label>
          <input
            className="w-64 rounded border border-gray-300 px-4 py-2"
            {...register('maxCapacity', {
              required: 'maxCapacity name is required',
              valueAsNumber: true,
            })}
            type="number"
          />
        </div>
        {errors.maxCapacity && <p className="text-red-700">{errors.maxCapacity.message}</p>}
      </div>
      <div>
        <div className="flex items-center">
          <label className="w-32">regularPrice : </label>
          <input
            className="w-64 rounded border border-gray-300 px-4 py-2"
            {...register('regularPrice', {
              required: 'regularPrice is required',
              valueAsNumber: true,
            })}
            type="number"
          />
        </div>
        {errors.regularPrice && <p className="text-red-700">{errors.regularPrice.message}</p>}
      </div>

      <div>
        <div className="flex items-center">
          <label className="w-32">discount : </label>
          <input
            className="w-64 rounded border border-gray-300 px-4 py-2"
            {...register('discount', { required: 'discount is required', valueAsNumber: true })}
            type="number"
          />
        </div>
        {errors.discount && <p className="text-red-700">{errors.discount.message}</p>}
      </div>
      <div>
        <div className="flex items-center">
          <label className="w-32">description : </label>
          <input
            className="w-64 rounded border border-gray-300 px-4 py-2"
            {...register('description', { required: 'description is required' })}
            type="text"
          />
        </div>
        {errors.description && <p className="text-red-700">{errors.description.message}</p>}
      </div>

      <div>
        <div className="flex items-center">
          <label className="w-32">image : </label>
          <input
            className="w-64 rounded border border-gray-300 px-4 py-2"
            {...register('image', {
              required: 'upload file',
            })}
            type="file"
            placeholder="image"
          />
        </div>
        {errors.image && <p className="text-red-700">{errors.image.message}</p>}
      </div>

      <Button variant="primary" buttonType="submit">
        {isPending ? <Spinner /> : 'add cabin'}
      </Button>
    </form>
  );
}

export default AddCabinForm;
