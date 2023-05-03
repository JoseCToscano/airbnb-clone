"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm} from "react-hook-form";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import useAddTradeModal from "@/app/hooks/useAddTradeModal";
import DropdownInput from "@/app/components/Inputs/DropdownInput";

const AddTradeModal = () => {
    const addTradeModal = useAddTradeModal();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            ticker: "",
            positionSize: "",
            openedAt: "",
            closedAt: "",
            openPrice: "",
            closePrice: "",
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post("/api/trade-history", data)
            .then(()=>{
                addTradeModal.onClose();
            })
            .catch((e)=>{
            toast.error(  'Something went wrong');
            })
            .finally(()=>{
                setIsLoading(false);
            })
    };

    const bodyContent = (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <Input
                    id="ticker"
                    label="Company's ticker symbol (e.g. AAPL)"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div>
                <Input
                    id="positionSize"
                    label="Number of shares/contracts"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div>
                <DropdownInput
                    id={"typeOfTrade"}
                    label={"Trade type"}
                    options={[{value: "call", text: "CALL"}, {value: "put", text: "PUT"}]}
                    register={register}
                    placeholder={"Select a trade type"}
                    errors={errors} />
            </div>
            <div>
                <Input
                    id={"openedAt"}
                    label="Opened at"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div>
                <Input
                    id={"closedAt"}
                    label="Closed at"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div>
                <Input
                    id={"openPrice"}
                    label="Open price"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div>
                <Input
                    id={"closePrice"}
                    label="Close price"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr/>
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className="justify-center flex flex-row items-center gap-2">
                   <div>
                      Some copyright text here...
                   </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal disabled={isLoading}
               isOpen={addTradeModal.isOpen}
               title={"Register a new Trade"}
               actionLabel={isLoading ? "Saving trade..." : "Save trade"}
               onClose={addTradeModal.onClose}
               onSubmit={handleSubmit(onSubmit)}
               body={bodyContent}
               footer={footerContent}
        />
    )
}

export default AddTradeModal;