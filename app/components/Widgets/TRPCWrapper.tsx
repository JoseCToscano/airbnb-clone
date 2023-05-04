"use client";

import ClientOnly from "@/app/components/ClientOnly";
import ToasterProvider from "@/app/providers/ToasterProvider";
import RegisterModal from "@/app/components/Modals/RegisterModal";
import LoginModal from "@/app/components/Modals/LoginModal";
import AddTradeModal from "@/app/components/Modals/AddTradeModal";
import Navbar from "@/app/components/Navbar/Navbar";
import ChartSidebar from "@/app/components/Sidebars/ChartSidebar";
import TradeSummarySidebar from "@/app/components/Sidebars/TradeSummarySidebar";
import Body from "@/app/components/Body/Body";
import Dashboard from "@/app/components/AcoountOverview/dashboard";
import React from "react";
import {trpc} from "@/app/utils/trpc";

const TRPCWrapper = () => {
    return (
        <ClientOnly >
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <AddTradeModal />
            <Navbar />
            <ChartSidebar />
            <TradeSummarySidebar />
            <Body>
                <Dashboard />
            </Body>
        </ClientOnly>
  );
};
 export default trpc.withTRPC(TRPCWrapper);