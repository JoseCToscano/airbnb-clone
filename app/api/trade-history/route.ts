import {NextResponse} from "next/server";
export async function POST(request: Request){
    const body = await request.json();
    const {
        ticker,
        positionSize,
        openedAt,
        closedAt,
        openPrice,
        closePrice,
        positionBlance,
        orderType
    } = body;

    console.log(body);

    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
        ticker,
        positionSize,
        openedAt,
        closedAt,
        openPrice,
        positionBlance,
        orderType,
        closePrice});
}

export async function GET(request: Request){

    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
        trades: [
            {
                ticker: 'NASDAQ:AAPL',
                positionSize: 150,
                openedAt: '2023-01-01 10:05:00',
                closedAt: '2023-01-01 10:55:00',
                openPrice: 0.56,
                closePrice: 0.89,
                orderType: 'CALL',
                positionBlance: 324560.345
            },
            {
                ticker: 'NASDAQ:TSLA',
                positionSize: 123,
                openedAt: '2023-01-01 10:05:00',
                closedAt: '2023-01-01 10:55:00',
                openPrice: 0.56,
                closePrice: 0.89,
                orderType: 'PUT',
                positionBlance: 360.345
            },
            {
                ticker: 'NASDAQ:QQQ',
                positionSize: 123,
                openedAt: '2023-01-01 10:05:00',
                closedAt: '2023-01-01 10:55:00',
                openPrice: 0.56,
                closePrice: 0.89,
                orderType: 'PUT',
                positionBlance: 360.345
            },
            {
                ticker: 'NASDAQ:MSFT',
                positionSize: 123,
                openedAt: '2023-01-01 10:05:00',
                closedAt: '2023-01-01 10:55:00',
                openPrice: 0.56,
                closePrice: 0.09,
                orderType: 'CALL',
                positionBlance: -360.345
            },
        ]
    });
}