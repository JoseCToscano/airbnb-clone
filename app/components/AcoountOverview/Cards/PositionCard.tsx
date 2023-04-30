"use client";

import React from "react";
import { Card, Metric, Legend, Divider, Title, Flex, Text, BadgeDelta, Badge } from "@tremor/react";
import dayjs from "dayjs";
import useChartModal from "@/app/hooks/useChartModal";

interface PositionCardProps {
    tickerSymbol: string;
    positionBalance: number;
    openPrice: number;
    closePrice?: number;
    positionType: 'CALL' | 'PUT';
    positionSize: number;
}
const PositionCard: React.FC<PositionCardProps> = ({tickerSymbol, positionSize, positionBalance, openPrice, closePrice, positionType}) => {
    const chartModal = useChartModal();
    const decorationColor = positionBalance > 0 ? 'green' : 'red';

    return (
        <Card className={`
        hover:bg-${decorationColor}-100 
        hover:cursor-pointer 
        `} decoration="top" decorationColor={decorationColor} onClick={()=>chartModal.onOpen(tickerSymbol)}>
            <Flex>
                <Title>{tickerSymbol.replace('NASDAQ:','')}</Title>
                <BadgeDelta deltaType={`${positionBalance > 0 ? "moderateIncrease" :"moderateDecrease"}`}>13.2%</BadgeDelta>
            </Flex>
            <Metric className={`
                ${positionBalance > 0 ? 'text-green-500' : 'text-red-500'}
            `}>
                ${positionBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Metric>
            <Divider />
            <Flex className="mt-4">
                <BadgeDelta size="xs" deltaType={`${positionType === 'CALL' ? "moderateIncrease" :"moderateDecrease"}`}>{positionType} x{positionSize}</BadgeDelta>
                <Text> ${(positionSize*openPrice*100).toLocaleString('en-US',{minimumFractionDigits: 2, maximumFractionDigits: 2})} </Text>
            </Flex>
            <Legend
                className="mt-3"
                categories={[`Open ${dayjs().format('h:mm')} @ ${openPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`]}
                colors={['green']}
            />
            {closePrice && <Legend
                className="mt-3"
                categories={[`Closed ${dayjs().format('h:mm')} @ ${openPrice.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                })}`]}
                colors={['red']}
            />}
        </Card>
    )
}
export default PositionCard;