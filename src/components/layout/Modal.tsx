import React from 'react';
import { IoMdClose } from 'react-icons/io';

import useModalStore from '../../store/useModalStore';

interface Props {
  children: React.ReactNode;
}

function Modal({ children }: Props) {
  const modal = useModalStore((state) => state.modal);
  const modalUpdate = useModalStore((state) => state.modalToggle);
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 transition-all duration-300 ${
        modal ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div
        className={`relative rounded-lg bg-white p-8 transition-all duration-300 ${
          modal ? 'scale-100' : 'scale-95'
        }`}
      >
        <button className="absolute top-3 right-3 cursor-pointer" onClick={modalUpdate}>
          <IoMdClose />
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
