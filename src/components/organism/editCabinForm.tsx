import useForm from 'react-hook-form';

function editCabinForm() {
  const {
    register,
    handleSubmit,
    foemState: { errors },
  } = useForm();

  return (
    <form className="flex w-125 flex-col gap-5 rounded-lg bg-white">
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
              required: true,
            })}
            type="file"
            placeholder="image"
          />
        </div>
        {errors.image && <p className="text-red-700">{errors.image.message}</p>}
      </div>

      <Button disabled={isPending} variant="primary" buttonType="submit">
        {isPending ? <Spinner color="white" size={10} /> : 'add cabin'}
      </Button>
    </form>
  );
}

export default editCabinForm;
