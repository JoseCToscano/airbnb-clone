"use client";

import Container from '../Container';
import Logo from './Logo';
import Search from './Search'
import UserMenu from './UserMenu'
import React from "react";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="w-full bg-yellow-400 py-2">
                <p className="text-center text-white">This website is currently in progress. All data is hardcoded.</p>
            </div>
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <UserMenu />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar