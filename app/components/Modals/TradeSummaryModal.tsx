"use client";

import Modal from "./Modal";
import useTradeSummarySidebar from "@/app/hooks/useTradeSummarySidebar";
import TradingViewWidget from "@/app/components/Widgets/TradingViewWidget";

const TradeSummaryModal = () => {
    const tradeSummaryModal = useTradeSummarySidebar();



    const bodyContent = (
        <div className="flex flex-col gap-4">
            <TradingViewWidget tickerSymbol={tradeSummaryModal.tickerSymbol}/>
        </div>
    )



    return (
        <Modal
               isOpen={tradeSummaryModal.isOpen}
               title={"Trade summary"}
               actionLabel={"Continue"}
               onClose={tradeSummaryModal.onClose}
               onSubmit={()=>{}}
               body={bodyContent}
               adjustToContent
        />
    )
}

export default TradeSummaryModal;