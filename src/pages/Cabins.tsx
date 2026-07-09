import { useState } from 'react';

import Button from '../components/atoms/Button';
import CabinHeader from '../components/atoms/CabinHeader';
import Title from '../components/atoms/Title';
import Modal from '../components/layout/Modal';
import CabinTable from '../components/molecules/CabinTable';
import AddCabinForm from '../components/organisms/AddCabinForm';
import useModalStore from '../store/useModalStore';

function Cabins() {
  const modalUpdate = useModalStore((state) => state.modalToggle);

  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="flex items-center justify-between">
        <Title style="text-3xl font-bold"> All Cabins</Title>
        <p>Filter/sort</p>
      </div>

      <div className="relative transition-all duration-300">
        <CabinHeader />
        <CabinTable />

        <Button variant="primary" onClick={modalUpdate}>
          Add Cabin
        </Button>
        {/* {isOpen && (
          <Modal setIsOpen={setIsOpen}>
            <AddCabinForm />
          </Modal>
        )} */}
        <Modal>
          <AddCabinForm />
        </Modal>
      </div>
    </div>
  );
}

export default Cabins;
