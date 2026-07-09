import { useForm } from 'react-hook-form';

type CabinFormData = {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: FileList;
};

function AddCabinForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CabinFormData>();

  function onSubmit(data: CabinFormData) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[500px] flex-col gap-5 rounded-lg bg-white"
    >
      <div className="flex items-center">
        <label className="w-32">name : </label>

        <input
          {...register('name', { required: 'Cabin name is required' })}
          className="w-64 rounded border border-gray-300 px-4 py-2"
          type="text"
        />
      </div>
      {errors.name && <p>{errors.name.message}</p>}
      <div className="flex items-center">
        <label className="w-32">maxCapacity : </label>
        <input
          className="w-64 rounded border border-gray-300 px-4 py-2"
          {...register('maxCapacity', { required: true, valueAsNumber: true })}
          type="number"
        />
      </div>

      <div className="flex items-center">
        <label className="w-32">regularPrice : </label>
        <input
          className="w-64 rounded border border-gray-300 px-4 py-2"
          {...register('regularPrice', { required: true, valueAsNumber: true })}
          type="number"
        />
      </div>

      <div className="flex items-center">
        <label className="w-32">discount : </label>
        <input
          className="w-64 rounded border border-gray-300 px-4 py-2"
          {...register('discount', { required: true, valueAsNumber: true })}
          type="number"
        />
      </div>

      <div className="flex items-center">
        <label className="w-32">description : </label>
        <input
          className="w-64 rounded border border-gray-300 px-4 py-2"
          {...register('description', { required: true })}
          type="text"
        />
      </div>

      <div className="flex items-center">
        <label className="w-32">image : </label>
        <input
          className="w-64 rounded border border-gray-300 px-4 py-2"
          {...register('image', { required: true })}
          type="file"
          placeholder="image"
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

export default AddCabinForm;
