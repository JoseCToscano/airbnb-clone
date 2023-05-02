"use client";

import {Card, Metric, Text, Flex, Grid } from '@tremor/react';
import Chart from './chart';
import dayjs from "dayjs";
import 'dayjs/locale/es';
import PositionCard from "@/app/components/AcoountOverview/Cards/PositionCard";
import DailyTracker from "@/app/components/AcoountOverview/DailyTracker/DailyTracker";
import DayResultsCard from "@/app/components/AcoountOverview/DayResultsCard";
import {useEffect, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";

const website = [
    { name: '/home', value: 1230 },
    { name: '/contact', value: 751 },
    { name: '/gallery', value: 471 },
    { name: '/august-discount-offer', value: 280 },
    { name: '/case-studies', value: 78 }
];

const shop = [
    { name: '/home', value: 453 },
    { name: '/imprint', value: 351 },
    { name: '/shop', value: 271 },
    { name: '/pricing', value: 191 }
];

const app = [
    { name: '/shop', value: 789 },
    { name: '/product-features', value: 676 },
    { name: '/about', value: 564 },
    { name: '/login', value: 234 },
    { name: '/downloads', value: 191 }
];

const data = [
    {
        category: 'Website',
        stat: '10,234',
        data: website
    },
    {
        category: 'Online Shop',
        stat: '12,543',
        data: shop
    },
    {
        category: 'Mobile App',
        stat: '2,543',
        data: app
    }
];

const dataFormatter = (number: number) =>
    Intl.NumberFormat('us').format(number).toString();

const categories: {
    title: string;
    metric: string;
    metricPrev: string;
    prevMetricLabel: string;
}[] = [
    {
        title: `Mes actual: ${dayjs().locale('es').format('MMMM') }`,
        metric: '$ 12,699',
        metricPrev: '$ 9,456',
        prevMetricLabel: 'prev'
    },
    {
        title: 'Profit YTD',
        metric: '$ 40,598',
        metricPrev: '$ 45,564',
        prevMetricLabel: 'prev'

    },
    {
        title: 'Open positions',
        metric: '3',
        metricPrev: '17',
        prevMetricLabel: `Today's positions`
    }
];

type DayTrade = {
    ticker: string,
    positionBlance: number,
    positionSize: number,
    openedAt: string | Date,
    closedAt?: string | Date,
    openPrice: number,
    closePrice?: number;
    orderType: 'PUT' | 'CALL',
}
export default function Dashboard() {

    const [dayTrades, setDayTrades] = useState<DayTrade[]>([]);

    useEffect(() => {
        axios.get<{trades: DayTrade[]}>('/api/trade-history').then((res) => {
            console.log(res);
            setDayTrades(res.data.trades);
        }).catch((e)=>{
            toast.error(  'Something went wrong');
        })
    },[]);

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Grid className="gap-6" numColsSm={2} numColsLg={2}>
                <DailyTracker selectedDate='2022-10-02' PLPercentage={0.12} ordersTotal={23}/>
                <DayResultsCard dailyBalance={23456.234} accountBalance={150000.14}/>
            </Grid>
            <Grid className="mt-4 gap-6" numColsSm={2} numColsLg={3}>
                {categories.map((item) => (
                    <Card key={item.title}>
                        <Flex alignItems="start">
                            <Text>{item.title}</Text>
                        </Flex>
                        <Flex
                            className="space-x-3 truncate"
                            justifyContent="start"
                            alignItems="baseline"
                        >
                            <Metric>{item.metric}</Metric>
                            <Text className="truncate">{item.prevMetricLabel} {item.metricPrev}</Text>
                        </Flex>
                    </Card>
                ))}
            </Grid>
            <Grid className="mt-4 gap-6 flex overflow-x-scroll" numCols={4}>
                {dayTrades.map((dayTrade, idx) => (
                <PositionCard key={idx}
                              tickerSymbol={dayTrade.ticker}
                              positionBalance={dayTrade.positionBlance}
                              openPrice={dayTrade.openPrice}
                              positionType={dayTrade.orderType}
                              positionSize={dayTrade.positionSize}
                              closePrice={dayTrade.closePrice}
                              closedAt={dayTrade.closedAt}
                              openedAt={dayTrade.openedAt}
                />
                ))}
            </Grid>
            <Chart />
        </main>
    );
}