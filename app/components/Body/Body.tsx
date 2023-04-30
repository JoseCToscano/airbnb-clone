"use client";

import React from "react";

interface BodyProps {
    children: React.ReactNode;
}
const Body: React.FC<BodyProps> = ({children}) => {
    return (
        <div className="pt-32 bg-gray-100">
            {children}
        </div>
    )
}

export default Body;