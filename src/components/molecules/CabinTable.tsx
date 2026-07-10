import useCabins from '../../hooks/useCabins';
import Spinner from '../atoms/Spinner';

import CabinRow from './CabinRow';

function CabinTable() {
  const { cabins, error, isLoading } = useCabins();
  if (error) return <p>error</p>;
  if (isLoading)
    return (
      <div className="flex h-20 items-center justify-center">
        <Spinner color="black" size={20} />
      </div>
    );

  return (
    <div>
      {cabins?.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinTable;
