"use client";
import React from "react";
import {HiOutlineArrowRightOnRectangle, HiArrowTopRightOnSquare, HiOutlineShare} from "react-icons/all";
import TradingViewWidget from "@/app/components/Widgets/TradingViewWidget";
import {BadgeDelta, Divider, Flex, Legend, Metric, Text, Title} from "@tremor/react";
import useTradeSummarySidebar from "@/app/hooks/useTradeSummarySidebar";
import dayjs from "dayjs";


const TradeSummarySidebar = () => {
    const sidebar = useTradeSummarySidebar();

    if(!sidebar.position) {
        return <div>Error loading position summary</div>
    }

    const {
        ticker,
        positionSize,
        openedAt,
        closedAt,
        openPrice,
        closePrice,
        positionBalance,
        orderType,
    } = sidebar.position;

    return (
        <>
            {/* Backdrop */}
            {sidebar.isOpen && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50 z-40"
                    onClick={sidebar.onClose}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-5/9 bg-white z-50 ${
                    sidebar.isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out shadow-md overflow-y-scroll`}
            >
                {/* Header */}
                <div className="w-full bg-gray-100 flex items-center justify-start h-16 px-4 border-b border-gray-200">
                        <div className="flex flex-row items-center gap-2">
                            <div
                                className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-lg cursor-pointer hover:shadow-md hover:bg-gray-300 transition"
                                onClick={sidebar.onClose}
                            >
                                < HiOutlineArrowRightOnRectangle />
                            </div>
                            <div
                                className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-lg cursor-pointer hover:shadow-md hover:bg-gray-300 transition"
                            >
                                < HiArrowTopRightOnSquare />
                            </div>
                            <div
                                className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-lg cursor-pointer hover:shadow-md hover:bg-gray-300 transition"
                            >
                                < HiOutlineShare />
                            </div>
                        </div>
                </div>

                {/* Content */}
                <div className="relative p-10 flex-auto">
                    <Flex>
                        <Title>{ticker.replace('NASDAQ:','')}</Title>
                        <BadgeDelta deltaType={`${positionBalance > 0 ? "moderateIncrease" :"moderateDecrease"}`}>13.2%</BadgeDelta>
                    </Flex>
                    <Metric className={`
                ${positionBalance > 0 ? 'text-green-500' : 'text-red-500'}
            `}>
                        ${positionBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Metric>
                    <Divider />
                    <Flex className="mt-4">
                        <BadgeDelta size="xs" deltaType={`${orderType === 'CALL' ? "moderateIncrease" :"moderateDecrease"}`}>{orderType} x{positionSize}</BadgeDelta>
                        <Text> ${(positionSize*openPrice*100).toLocaleString('en-US',{minimumFractionDigits: 2, maximumFractionDigits: 2})} </Text>
                    </Flex>
                    <Legend
                        className="mt-3"
                        categories={[`Open ${dayjs(openedAt).format('h:mm')} @ ${openPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`]}
                        colors={['green']}
                    />
                    {closePrice && closedAt && <Legend
                        className="mt-3"
                        categories={[`Closed ${dayjs(closedAt).format('h:mm')} @ ${openPrice.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        })}`]}
                        colors={['red']}
                    />}
                </div>
                <div className="p-6">
                    <Title>Chart</Title>
                    <TradingViewWidget tickerSymbol={ticker} />
                </div>
            </div>
        </>
    );
};

export default TradeSummarySidebar;
