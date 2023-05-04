"use client";

import toast from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm} from "react-hook-form";

import Modal from "./Modal";
import Input from "../Inputs/Input";
import useAddTradeModal from "@/app/hooks/useAddTradeModal";
import {api} from "@/app/utils/api";

const AddTradeModal = () => {
    const addTradeModal = useAddTradeModal();

    const {register, reset, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            ticker: "",
            positionSize: 0,
            openedAt: "",
            closedAt: "",
            openPrice: 0,
            closePrice: "",
            positionBalance: 0,
            orderType: "",
        }
    });
    const ctx = api.useContext();

    const { mutate, isLoading: isPosting } = api.trades.add.useMutation({
        onSuccess: ()=>{
            void ctx.trades.getAll.invalidate();
            toast.success("Trade added successfully!");
            addTradeModal.onClose();
            reset();
        },
        onError: (e)=>{
            const errorMessage = e.data?.zodError?.fieldErrors.content;
            if(errorMessage && errorMessage[0]){
                toast.error(errorMessage[0]);
            } else{
                toast.error( 'Failed to post! Please try again later')
            }
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
       mutate({
              ticker: data.ticker,
                positionSize: Number(data.positionSize),
                openedAt: data.openedAt,
                closedAt: data.closedAt,
                openPrice: Number(data.openPrice),
                closePrice: Number(data.closePrice),
                positionBalance: Number(data.positionBalance),
                orderType: data.orderType,
       });
    };

    const bodyContent = (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <Input
                    id="ticker"
                    label="Company's ticker symbol (e.g. AAPL)"
                    disabled={isPosting}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div>
                <Input
                    id="positionSize"
                    label="Number of shares/contracts"
                    disabled={isPosting}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div>
                {/*<DropdownInput*/}
                {/*    id={"typeOfTrade"}*/}
                {/*    label={"Trade type"}*/}
                {/*    options={[{value: "call", text: "CALL"}, {value: "put", text: "PUT"}]}*/}
                {/*    register={register}*/}
                {/*    placeholder={"Select a trade type"}*/}
                {/*    errors={errors} />*/}
                <Input
                    id={"openedAt"}
                    label="Opened at"
                    disabled={isPosting}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div>
                <Input
                    id={"positionBalance"}
                    label="Position balance"
                    disabled={isPosting}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div>
                <Input
                    id={"closedAt"}
                    label="Closed at"
                    disabled={isPosting}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div>
                <Input
                    id={"openPrice"}
                    label="Open price"
                    disabled={isPosting}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div>
                <Input
                    id={"closePrice"}
                    label="Close price"
                    disabled={isPosting}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div>
                <Input
                    id={"orderType"}
                    label="Order type"
                    disabled={isPosting}
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
        <Modal disabled={isPosting}
               isOpen={addTradeModal.isOpen}
               title={"Register a new Trade"}
               actionLabel={(isPosting) ? "Saving trade..." : "Save trade"}
               onClose={addTradeModal.onClose}
               onSubmit={handleSubmit(onSubmit)}
               body={bodyContent}
               footer={footerContent}
        />
    )
}

export default AddTradeModal;