"use client";

import useTradeSummarySidebar from "@/app/hooks/useTradeSummarySidebar";
import RightSidebar from "@/app/components/SideBars/RightSideBar";

const TradeSummarySidebar = () => {
    const tradeSummaryModal = useTradeSummarySidebar();

    return (
        <RightSidebar
            title={"Trade summary"}
            isOpen={tradeSummaryModal.isOpen}
            onClose={tradeSummaryModal.onClose}
        />
    )

}

export default TradeSummarySidebar;