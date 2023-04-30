import { Card, Title, LineChart } from "@tremor/react";
import dayjs from "dayjs";

const data: {day: string, balance:number}[] = [];
let balance = 1.0;

for (let i = 100; i >= 1; i--) {
    const rand = Math.random();
    if (rand < 0.2) {
        balance -= parseFloat((Math.random() * 1.0).toFixed(2));
    } else {
        balance += parseFloat((Math.random() * 0.5).toFixed(2));
    }
    const day = dayjs().subtract(i, "day").format("MMM-DD");
    data.push({ day, balance });
}

const dataFormatter = (number: number) =>
    `${(number*1000).toLocaleString("en-US", {currency: "USD", style: "currency"})}`;

const Chart = () => (
    <Card className="mt-4">
        <Title>Account Balance</Title>
        <LineChart
            className="mt-6"
            data={data}
            index="day"
            categories={["balance"]}
            colors={["green"]}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
            autoMinValue
        />
    </Card>
);

export default Chart;