
interface Trade {
    ticker: string;
    positionSize: number;
    openedAt: string;
    closedAt?: string;
    openPrice: number;
    closePrice?: number;
    positionBalance: number;
    orderType: 'CALL' | 'PUT';
}
export const trades: Trade[] = [
    {
        ticker: 'NASDAQ:AAPL',
        positionSize: 150,
        openedAt: '2023-01-01 10:05:00',
        closedAt: '2023-01-01 10:55:00',
        openPrice: 0.56,
        closePrice: 0.89,
        orderType: 'CALL',
        positionBalance: 324560.345
    },
    {
        ticker: 'NASDAQ:TSLA',
        positionSize: 123,
        openedAt: '2023-01-01 10:05:00',
        closedAt: '2023-01-01 10:55:00',
        openPrice: 0.56,
        closePrice: 0.89,
        orderType: 'PUT',
        positionBalance: 360.345
    },
    {
        ticker: 'NASDAQ:TSLA',
        positionSize: 123,
        openedAt: '2023-01-01 10:05:00',
        openPrice: 0.89,
        orderType: 'PUT',
        positionBalance: 360.345
    },
    {
        ticker: 'NASDAQ:QQQ',
        positionSize: 123,
        openedAt: '2023-01-01 10:05:00',
        closedAt: '2023-01-01 10:55:00',
        openPrice: 0.56,
        closePrice: 0.89,
        orderType: 'PUT',
        positionBalance: 360.345
    },
    {
        ticker: 'NASDAQ:MSFT',
        positionSize: 123,
        openedAt: '2023-01-01 10:05:00',
        closedAt: '2023-01-01 10:55:00',
        openPrice: 0.56,
        closePrice: 0.09,
        orderType: 'CALL',
        positionBalance: -360.345
    },
]