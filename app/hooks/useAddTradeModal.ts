import { create } from 'zustand';

interface AddTradeModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useAddTradeModal = create<AddTradeModalStore>((set) => ({
    isOpen: false,
    onOpen: () => {
        set({isOpen: true})
    },
    onClose: () => set({isOpen: false}),
}));

export default useAddTradeModal;