import { useState } from 'react';
import useDeleteCabins from '../../hooks/useDeleteCabins';
import type { CabinType } from '../../services/apiCabins';
import Button from '../atoms/Button';
import Spinner from '../atoms/Spinner';
import CabinForm from '../organisms/CabinForm';

export interface Prop {
  cabin: CabinType;
}
function CabinRow({ cabin }: Prop) {
  const [showForm, setShowForm] = useState<boolean>(false);

  const { deleteCabinMutation, deleteError, isPending } = useDeleteCabins();

  if (isPending) return <Spinner color="blue" size={30} />;
  if (deleteError) return <p>error</p>;
  return (
    <div className="grid grid-cols-[100px_2fr_1fr_1fr_1fr_1fr] items-center py-4">
      <img src={cabin?.image} alt="" className="w-20" />
      <p>{cabin?.name}</p>
      <p>{cabin?.discount}</p>
      <p>{cabin?.regularPrice}</p>
      <p>{cabin?.discount}</p>
      <div className="flex items-center justify-between gap-2">
        <Button onClick={() => deleteCabinMutation(cabin.id)} variant="secondary">
          delete
        </Button>

        <Button onClick={() => setShowForm((prev) => !prev)} variant="secondary">
          edit
        </Button>
      </div>
      {showForm && <CabinForm />}
    </div>
  );
}

export default CabinRow;
