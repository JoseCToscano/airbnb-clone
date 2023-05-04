"use client";

import {CgClose, TbPaperclip} from 'react-icons/all'
import React, { useCallback, useState } from 'react';
import Image from "next/image";
import Button from "@/app/components/Button";


const LoadTradeHistoryInput = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState<File | null>(null);

    const toggleIsOpen = useCallback((value: boolean) => {
        setIsOpen(!value)
    },[]);


    return (
        <>
        <div className="relative">

            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={()=>toggleIsOpen(isOpen)}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-lg cursor-pointer hover:shadow-md transition"
                >
                    <div className="hidden md:block">
                        Load trade history
                    </div>
                    <TbPaperclip />
                </div>
            </div>
        </div>
            {isOpen && (
                <div className="bg-white absolute rounded-md shadow-lg h-auto md:w-full top-12 text-sm">
                    <div className="p-4 flex flex-row items-center gap-3">
                        <Image
                            alt="td-logo"
                            className="hidden md:block cursor-pointer rounded-md"
                            height="30"
                            width="30"
                            src="/images/TDAIcon.png"
                        />
                        Insert your trade history file here (CSV format)
                        < CgClose
                            onClick={()=>toggleIsOpen(isOpen)}
                            className="hover:cursor-pointer relative top-0 right-[-10]"/>
                    </div>
                    <div className="flex flex-row items-center justify-between p-4 mt-[-10] w-full">
                        <form>
                            <label htmlFor="file-upload"
                                   className="border-green-500 border-2 text-gray-500 hover:bg-green-500 font-bold py-2 px-4 rounded cursor-pointer flex items-center">
                                <span className="truncate">{"Select file..."}</span>
                            </label>
                            <input id="file-upload" type="file" className="hidden" name="upload" accept=".csv"
                            onChange={(e) => setFile(e.target.files![0])}
                            />
                        </form>
                            {file && <p className="text-gray-600 underline italic text-xl">file: {file.name}</p>}
                        <div>
                            <button type="button"
                                    disabled={!file}
                                    className="ml-2 text-gray-500 hover:text-gray-700"
                                    onClick={()=>setFile(null)}>
                                Clear
                            </button>
                        </div>

                    </div>
                    <div className="p-1 ">
                        <Button
                            disabled={!file}
                            label={file ? `Send ${file.name}` : "Please select a file"}
                            onClick={()=>{}}
                        />
                        </div>
                </div>
            )}
        </>

    )
}

export default LoadTradeHistoryInput;