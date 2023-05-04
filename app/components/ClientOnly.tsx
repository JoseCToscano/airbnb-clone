"use client";

import React from "react";

import { useEffect, useState } from "react";
import {trpc} from "@/app/utils/trpc";

interface ClientOnlyProps{
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({children})=>{
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(()=>{
        setHasMounted(true);
    }, []);

    if(!hasMounted){
        return null;
    }
    return (
        <>
        {children}
        </>
    );
}

export default trpc.withTRPC(ClientOnly);