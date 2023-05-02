"use client";

import React from 'react';
import { Dropdown, DropdownItem, Text } from '@tremor/react';
import { CubeIcon, CubeTransparentIcon } from "@heroicons/react/solid";
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";
import {BiDollar} from "react-icons/all";

interface DropdownInputProps{
    id: string;
    label: string;
    register: UseFormRegister<FieldValues>;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    errors: FieldErrors;
    options: Array<{value: string, text: string}>;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
                                         id,
                                         label,
                                         register,
                                         type ,
                                         disabled,
                                         required,
                                         errors,
                                         options
                                     })=>{
    return (
        <div className="w-full relative">
            <Text>{label}</Text>
            <Dropdown
                id={id}
                className="mt-2"
                onValueChange={(value) => console.log("The selected value is", value)}
                placeholder="Trade type"
                disabled={disabled}
                {...register(id, {required})}
            >
                {options.map((option) => (
                    <DropdownItem key={option.value} value={option.value} text={option.text} />
                ))
                }
            </Dropdown>
        </div>
    )
}

export default DropdownInput;