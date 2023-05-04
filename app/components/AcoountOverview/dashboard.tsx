"use client";

import {Card, Metric, Text, Flex, Grid } from '@tremor/react';
import Chart from './chart';
import dayjs from "dayjs";
import 'dayjs/locale/es';
import PositionCard from "@/app/components/AcoountOverview/Cards/PositionCard";
import DailyTracker from "@/app/components/AcoountOverview/DailyTracker/DailyTracker";
import DayResultsCard from "@/app/components/AcoountOverview/DayResultsCard";
import {api} from "@/app/utils/api";
import {LoadingSpinner} from "@/app/components/Loading/loading";

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
export default function Dashboard() {
    const trades = api.trades.getAll.useQuery();

    if (!trades.data) {
        return <LoadingSpinner />;
    }

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
                {trades.data.trades.map((dayTrade, idx) => (
                <PositionCard key={idx}
                              tickerSymbol={dayTrade.ticker}
                              positionBalance={dayTrade.positionBalance}
                              openPrice={dayTrade.openPrice}
                              positionType={dayTrade.orderType as "CALL" | "PUT"}
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