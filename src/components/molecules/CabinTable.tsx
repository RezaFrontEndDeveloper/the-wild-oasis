import useCabins from '../../hooks/useCabins';
import Spinner from '../atoms/Spinner';

import CabinRow from './CabinRow';

function CabinTable() {
  const { cabins, error, isLoading } = useCabins();
  if (isLoading) return <Spinner />;
  if (error) return <p>error</p>;

  return (
    <div>
      {cabins?.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinTable;
