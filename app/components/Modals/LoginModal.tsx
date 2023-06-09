"use client";

import { useCallback, useState} from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm} from "react-hook-form";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import Button from "../Button";

const LoginModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            email: "",
            password: "",
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        signIn("credentials", {...data, redirect: false})
        .then((callback)=>{
            setIsLoading(false);
            if(callback?.ok){
                toast.success("Logged in successfully");
                router.refresh();
            }
            registerModal.onClose();
            // TODO: Voy en el minuto:
            2:16:15
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
           <Heading title="Welcome back" subtitle="Log in to your account" />
            <Input id={"email"}
                   label="Email"
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
               isOpen={loginModal.isOpen}
               title={"Log in"}
               actionLabel={"Continue"}
               onClose={loginModal.onClose}
               onSubmit={handleSubmit(onSubmit)}
               body={bodyContent}
               footer={footerContent}
        />
    )
}

export default LoginModal;