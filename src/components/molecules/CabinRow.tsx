import useDeleteCabins from '../../hooks/useDeleteCabins';
import type { CabinType } from '../../services/apiCabins';
import Button from '../atoms/Button';
import Spinner from '../atoms/Spinner';

interface Prop {
  cabin: CabinType;
}
function CabinRow({ cabin }: Prop) {
  const { deleteCabinMutation, deleteError, isPending } = useDeleteCabins();

  if (isPending) return <Spinner />;
  if (deleteError) return <p>error</p>;
  return (
    <div className="grid grid-cols-[100px_2fr_1fr_1fr_1fr_1fr] items-center py-4">
      <img src={cabin?.image} alt="" className="w-20" />
      <p>{cabin?.name}</p>
      <p>{cabin?.discount}</p>
      <p>{cabin?.regularPrice}</p>
      <p>{cabin?.discount}</p>

      <Button onClick={() => deleteCabinMutation(cabin.id)} variant="secondary">
        delete
      </Button>
    </div>
  );
}

export default CabinRow;
