"use client";
import React from "react";
import {HiOutlineArrowRightOnRectangle, HiArrowTopRightOnSquare, HiOutlineShare, VscGraphLine} from "react-icons/all";
import {BadgeDelta, Divider, Flex, Legend, Metric, Text, Title} from "@tremor/react";
import useTradeSummarySidebar from "@/app/hooks/useTradeSummarySidebar";
import dayjs from "dayjs";
import useChartSidebar from "@/app/hooks/useChartSidebar";


const TradeSummarySidebar = () => {
    const sidebar = useTradeSummarySidebar();
    const chartSidebar = useChartSidebar();
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
                    onClick={()=>{
                        sidebar.onClose();
                        chartSidebar.onClose();
                    }
                }
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-1/2 bg-white z-50 ${
                    sidebar.isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out shadow-md`}
            >
                {/* Header */}
                <div className="w-full bg-gray-100 flex items-center justify-start h-16 px-4 border-b border-gray-200">
                        <div className="flex flex-row items-center gap-2">
                            <div
                                className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-lg cursor-pointer hover:shadow-md hover:bg-gray-300 transition"
                                onClick={()=>{
                                    sidebar.onClose();
                                    chartSidebar.onClose();
                                }
                                }
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
                            <div
                                className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-lg cursor-pointer hover:shadow-md hover:bg-gray-300 transition"
                                onClick={()=>chartSidebar.onOpen(ticker)}
                            >
                                < VscGraphLine /> Show chart for {chartSidebar.ticker} on {dayjs(openedAt).format('YYYY, MMM-DD @ h:mm')}
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
                {/* Bottom section */}
                <div className="h-1/2 overflow-y-scroll">

                    {/* Comments section */}
                    <div className="red-200 p-4 mb-4">
                        <h3 className="text-lg font-bold mb-2">Comments</h3>
                        <ul>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 1</li>
                            <li className="mb-2">Comment 2</li>
                            <li className="mb-2">Comment 3</li>
                            {/* Add more comments here */}
                        </ul>
                    </div>
            </div>
            </div>
        </>
    );
};

export default TradeSummarySidebar;
