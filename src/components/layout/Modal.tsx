// import React from 'react';
// import { IoMdClose } from 'react-icons/io';

// interface Props {
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   children: React.ReactNode;
// }

// function Modal({ setIsOpen, children }: Props) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
//       <div className="relative rounded-lg bg-white p-8 shadow-xl">
//         <button className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsOpen(false)}>
//           <IoMdClose size={24} />
//         </button>

//         {children}
//       </div>
//     </div>
//   );
// }

// export default Modal;
import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  children: React.ReactNode;
}

function Modal({ setIsOpen, isOpen, children }: Props) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 transition-all duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div
        className={`relative rounded-lg bg-white p-8 transition-all duration-300 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
      >
        <button className="absolute top-3 right-3 cursor-pointer" onClick={() => setIsOpen(false)}>
          <IoMdClose />
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
