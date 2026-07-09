import { create } from 'zustand';

interface ModalStore {
  modal: boolean;
  modalToggle: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  modal: false,
  modalToggle: () =>
    set((state) => ({
      modal: !state.modal,
    })),
}));
export default useModalStore;
