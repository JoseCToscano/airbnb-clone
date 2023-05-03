import { create } from 'zustand';

interface ChartSidebarStore {
    isOpen: boolean;
    onOpen: (ticker: string) => void;
    onClose: () => void;
    ticker: string | undefined;
}

const useChartSidebar = create<ChartSidebarStore>((set) => ({
    isOpen: false,
    onOpen: (ticker: string) => set({isOpen: true, ticker}),
    onClose: () => set({isOpen: false}),
    ticker: ''
}));

export default useChartSidebar;