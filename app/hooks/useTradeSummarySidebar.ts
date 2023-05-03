import { create } from 'zustand';

interface TradeSummarySideBarStore {
    isOpen: boolean;
    onOpen: (position: Position) => void;
    onClose: () => void;
    position: Position | undefined;
}

export interface Position {
    ticker: string,
    positionSize: number,
    openedAt: string | Date,
    closedAt?: string | Date,
    openPrice: number,
    closePrice?: number,
    positionBalance: number,
    orderType: 'PUT' | 'CALL',
}

const useTradeSummarySidebar = create<TradeSummarySideBarStore>((set) => ({
    isOpen: false,
    onOpen: (position: Position) => {
        set({isOpen: true, position})
    },
    onClose: () => set({isOpen: false}),
    position: undefined,
}));

export default useTradeSummarySidebar;