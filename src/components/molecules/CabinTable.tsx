import useCabins from '../../hooks/useCabins';
import useDeleteCabins from '../../hooks/useDeleteCabins';
import Button from '../atoms/Button';
import Spinner from '../atoms/Spinner';

// interface Props {
//   Cabin: React.ReactNode;
//   Capasity: React.ReactNode;
//   Price: React.ReactNode;
//   Discount: React.ReactNode;
//   image?: string;
// }

function CabinTable() {
  const { cabins, error, isLoading } = useCabins();
  const { deleteCabinMutation, deleteError, isPending } = useDeleteCabins();

  if (isLoading) return <Spinner />;
  if (error) return <p>error</p>;

  return (
    <div>
      {cabins?.map((cabin) => (
        <div
          key={cabin.id}
          className="grid grid-cols-[100px_2fr_1fr_1fr_1fr_1fr] items-center border-b py-4"
        >
          <img src={cabin?.image} alt="" className="w-20" />
          <p>{cabin?.name}</p>
          <p>{cabin?.discount}</p>
          <p>{cabin?.regularPrice}</p>
          <p>{cabin?.discount}</p>
          <Button onclick={() => deleteCabinMutation(cabin.id)} variant="secondary">
            delete
          </Button>
        </div>
      ))}
    </div>
  );
}

export default CabinTable;
