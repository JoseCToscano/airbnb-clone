import {Card, Flex, Metric, Text, Divider, Title} from "@tremor/react";
import React from "react";

interface DayResultsCardProps {
    dailyBalance: number;
    accountBalance: number;
}
const DayResultsCard: React.FC<DayResultsCardProps> = ({dailyBalance, accountBalance}) => {
    return (
        <Card >
            <Flex alignItems="start">
                <Title>$ {dailyBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Title>
            </Flex>
            <Flex
                className="space-x-3 truncate"
                justifyContent="start"
                alignItems="baseline"
            >
                <Metric className={`
                ${dailyBalance > 0 ? 'text-green-500' : 'text-red-500'}
            `}>
                    40.16% P/L Day</Metric>
            </Flex>
                <Divider />

            <Flex
                className="space-x-3 truncate"
                justifyContent="start"
                alignItems="baseline"
            ><Metric>
                $ {accountBalance.toLocaleString('es-US',{minimumFractionDigits: 2, maximumFractionDigits: 2})}</Metric>
                <Text>account balance</Text>
            </Flex>
        </Card>
    )
}

export default DayResultsCard;