import CabinHeader from '../components/atoms/CabinHeader';
import Title from '../components/atoms/Title';
import CabinTable from '../components/molecules/CabinTable';
function Cabins() {
  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="flex items-center justify-between">
        <Title style="text-3xl font-bold"> All Cabins</Title>
        <p>Filter/sort</p>
      </div>

      <div>
        <CabinHeader />
        <CabinTable />
      </div>
    </div>
  );
}

export default Cabins;
