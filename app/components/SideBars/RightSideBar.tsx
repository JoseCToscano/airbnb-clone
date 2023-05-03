"use client";
import React from "react";
import {HiOutlineArrowRightOnRectangle, HiArrowTopRightOnSquare, HiOutlineShare} from "react-icons/all";
import TradingViewWidget from "@/app/components/Widgets/TradingViewWidget";

interface RightSidebarProps {
    isOpen: boolean;
    onClose: ()=>void;
    title: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
}
const RightSidebar: React.FC<RightSidebarProps> = (
    {
       isOpen,
       onClose,
       title,
       body,
       footer
    }) => {
    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50 z-40"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-5/9 bg-white z-50 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out shadow-md`}
            >
                {/* Header */}
                <div className="flex items-center justify-start h-16 px-4 border-b border-gray-200">
                    <div className="relative ">
                        <div className="flex flex-row items-center gap-2">
                            <div
                                className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-lg cursor-pointer hover:shadow-md hover:bg-gray-300 transition"
                                onClick={onClose}
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
                </div>
                    <h2 className="text-lg font-medium">{title}</h2>
                <div className="p-4">
                <TradingViewWidget tickerSymbol={"NASDAQ:AAPL"} />
                </div>


                {/* Content */}
                <div className="relative p-6 flex-auto">
                    {body}
                </div>
                {/* Footer */}
                {footer}
            </div>
        </>
    );
};

export default RightSidebar;
