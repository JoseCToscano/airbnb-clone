import { create } from 'zustand';

interface TradeSummarySideBarStore {
    isOpen: boolean;
    onOpen: (ticker: string) => void;
    onClose: () => void;
    tickerSymbol: string;
}

const useTradeSummarySidebar = create<TradeSummarySideBarStore>((set) => ({
    isOpen: false,
    tickerSymbol: '',
    onOpen: (ticker: string) => {
        set({isOpen: true, tickerSymbol: ticker})
    },
    onClose: () => set({isOpen: false}),
}));

export default useTradeSummarySidebar;