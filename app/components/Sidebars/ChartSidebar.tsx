"use client";

import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/all";
import useChartSidebar from "@/app/hooks/useChartSidebar";
import TradingViewWidget from "@/app/components/Widgets/TradingViewWidget";


const ChartSidebar = () => {
    const chartSidebar = useChartSidebar();

    return (
        <>
            {/* Backdrop */}
            {chartSidebar.isOpen && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50 z-40"
                    onClick={chartSidebar.onClose}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 bottom-0 w-1/2 bg-white z-50 ${
                    chartSidebar.isOpen ? "translate-y-0" : "translate-y-full"
                } transition-transform duration-300 ease-in-out shadow-md`}
            >
                {/* Header */}
                <div className="w-full bg-gray-100 flex items-center justify-start h-16 px-4 border-b border-gray-200">
                    <div className="flex flex-row items-center gap-2">
                        <div
                            className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-lg cursor-pointer hover:shadow-md hover:bg-gray-300 transition"
                            onClick={chartSidebar.onClose}
                        >
                            < MdKeyboardDoubleArrowDown />
                            Hide chart for {chartSidebar.ticker}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <TradingViewWidget tickerSymbol={chartSidebar.ticker as string} />
            </div>
        </>
    );
};

export default ChartSidebar;
