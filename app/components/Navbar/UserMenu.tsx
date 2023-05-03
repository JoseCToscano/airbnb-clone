"use client";

import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'
import { TbPaperclip } from 'react-icons/all'
import { useCallback, useState } from 'react';

import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useAddTradeModal from "@/app/hooks/useAddTradeModal";
import DropdownInput from "@/app/components/Inputs/DropdownInput";
import {FieldValues, useForm} from "react-hook-form";
import LoadTradeHistoryInput from "@/app/components/Navbar/LoadTradeHisttoryInput";

const UserMenu = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const addTradeModal = useAddTradeModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = useCallback((value: boolean) => {
        setIsOpen(!value)
    },[]);

    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            account: "",
        }
    });


    return (
        <div className="relative">

            <div className="flex flex-row itemrs-center gap-3">
                <LoadTradeHistoryInput />
                <div
                    onClick={addTradeModal.onOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                <div className="hidden md:block">
                   Add trade
                </div>
                    <AiOutlinePlus />
                </div>
                <div
                    onClick={()=>toggleIsOpen(isOpen)}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                <AiOutlineMenu />
                <div className="hidden md:block">
                    <Avatar />
                </div>
                </div>
            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem onClick={loginModal.onOpen} label="Login"/>
                            <MenuItem onClick={registerModal.onOpen} label="Sign up"/>
                        </>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu;