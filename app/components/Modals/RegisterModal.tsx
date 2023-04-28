"use client";

import {useCallback, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {AiFillGithub} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm} from "react-hook-form";

import useRegisterModal from "../../hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import Button from "../Button";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            name: "",
            email: "",
            password: "",
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post("/api/auth/register", data)
            .then(()=>{
                registerModal.onClose();
            })
            .catch((e)=>{
            toast.error(  'Something went wrong');
            })
            .finally(()=>{
                setIsLoading(false);
            })
    };

    const bodyContent = (
        <div className="flex flex-col gap-4">
           <Heading title="Welcome to Airdnd" subtitle="Create an account" />
            <Input id={"email"}
                   label="Email"
                   disabled={isLoading}
                   register={register}
                   errors={errors}
                   required/>
            <Input id={"name"}
                   label="Name"
                   disabled={isLoading}
                   register={register}
                   errors={errors}
                   required/>
            <Input id={"password"}
                   label="Password"
                   type={"password"}
                   disabled={isLoading}
                   register={register}
                   errors={errors}
                   required/>
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr/>
            <Button outline label="Continue with Google"
                    icon={FcGoogle}
                    onClick={()=>{}} />
            <Button outline label="Continue with GitHub"
                    icon={AiFillGithub}
                    onClick={()=>{}} />
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className="justify-center flex flex-row items-center gap-2">
                   <div>
                       Already have an account?
                   </div>
                <div className="text-neutral-800 cursor-pointer hover:underlined"
                     onClick={registerModal.onClose}
                >
                    Log in
                </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal disabled={isLoading}
               isOpen={registerModal.isOpen}
               title={"Register"}
               actionLabel={"Continue"}
               onClose={registerModal.onClose}
               onSubmit={handleSubmit(onSubmit)}
               body={bodyContent}
               footer={footerContent}
        />
    )
}

export default RegisterModal;