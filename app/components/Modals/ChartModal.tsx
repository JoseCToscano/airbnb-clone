"use client";

import Modal from "./Modal";
import Heading from "../Heading";
import useChartModal from "@/app/hooks/useChartModal";
import TradingViewWidget from "@/app/components/Widgets/TradingViewWidget";

const LoginModal = () => {
    const chartModal = useChartModal();



    const bodyContent = (
        <div className="flex flex-col gap-4">
            <TradingViewWidget tickerSymbol={chartModal.tickerSymbol}/>
        </div>
    )



    return (
        <Modal
               isOpen={chartModal.isOpen}
               title={"Chart"}
               actionLabel={"Continue"}
               onClose={chartModal.onClose}
               onSubmit={()=>{}}
               body={bodyContent}
               adjustToContent
        />
    )
}

export default LoginModal;