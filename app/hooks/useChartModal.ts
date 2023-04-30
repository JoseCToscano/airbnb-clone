import { create } from 'zustand';

interface ChartModalStore {
    isOpen: boolean;
    onOpen: (ticker: string) => void;
    onClose: () => void;
    tickerSymbol: string;
}

const useChartModal = create<ChartModalStore>((set) => ({
    isOpen: false,
    tickerSymbol: '',
    onOpen: (ticker: string) => {
        console.log(`Opening chart modal for ${ticker}`);
        set({isOpen: true, tickerSymbol: ticker})
    },
    onClose: () => set({isOpen: false}),
}));

export default useChartModal;