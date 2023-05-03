"use client";

import {Card, Title, Tracker, Text, Color, BadgeDelta, Flex} from "@tremor/react";
import React from "react";
import dayjs from "dayjs";

interface DailyTracker {
    color: Color;
    tooltip: string;
}

const values = [
    {date: '2022-10-20', value: 0.12},
    {date: '2022-10-19', value: 0.32},
    {date: '2022-10-18', value: 0.32},
    { date: '2022-10-17', value: - 0.10},
{
    date: '2022-10-16', value: 0.32
},
{
    date: '2022-10-15', value: -0.10
},
{
    date: '2022-10-14', value: 0.32
},
{
    date: '2022-10-13', value: -0.10
},
{
    date: '2022-10-12', value: -0.10
},
{
    date: '2022-10-11', value: 0.32
},
{
    date: '2022-10-10', value: 0.05
},
{
    date: '2022-10-09', value: 0.32
},
{
    date: '2022-10-08', value: 0.32
},
{
    date: '2022-10-07', value: 0.05
},
{
    date: '2022-10-06', value: 0.43
},
{
    date: '2022-10-05', value: 0.05
},
{
    date: '2022-10-04', value: 0.05
},
{
    date: '2022-10-03', value: -0.1
},
{
    date: '2022-10-02', value: 0.34
},
{
    date: '2022-10-01', value: 0.43
},
{
    date: '2022-09-30', value: 0.34
},
{
    date: '2022-09-29', value: -0.1
},
{
    date: '2022-09-28', value: 0.43
},
{
    date: '2022-09-27', value: 0.43
},
{
    date: '2022-09-26', value: 0.43
},
]

const getDate = (value: string | Date): string => dayjs(value).format('MMM D');
const getColor = (value: number): "emerald" | "rose" | "yellow" =>{
    if (value > 0.2) return "emerald";
    if (value < 0) return "rose";
    return "yellow";
}

const getPercentage = (value: number): string => {
    return `${(value*100).toLocaleString('es-US',{minimumFractionDigits: 1, maximumFractionDigits: 1})}%`;
}

const getTooltip = ({date, value}: {date: string, value: number}): string => {
    return `${getDate(date)} • ${getPercentage(value)}`;
}

const data: DailyTracker[] = values.map(item => ({color: getColor(item.value), tooltip: getTooltip(item)}));


interface DailyTrackerProps {
    selectedDate: Date | string;
    ordersTotal: number;
    PLPercentage: number;
}
const DailyTracker: React.FC<DailyTrackerProps> = ({
        selectedDate,
        PLPercentage,
        ordersTotal
    }) => (
    <Card className="max-w mx-auto ">
        <Flex>
        <Title>Day trading</Title>
        <BadgeDelta deltaType={`${PLPercentage > 0 ? "moderateIncrease" :"moderateDecrease"}`}>{PLPercentage}%</BadgeDelta>
        </Flex>
        <Text>Executed orders: {ordersTotal} &bull; {dayjs(selectedDate).format('MMM D, YYYY')}</Text>
        <Flex justifyContent="end" className="mt-4">
            <Text>Uptime 92%</Text>
        </Flex>
        <Tracker data={data} className="mt-2" />
    </Card>
);

export default DailyTracker;