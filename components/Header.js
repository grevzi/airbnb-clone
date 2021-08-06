import React from "react";
import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import SearchInput from "./SearchInput";
import { useRouter } from "next/router";

const Header = ({placeholder}) => {
    const router = useRouter()

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
            <button onClick={() => router.push('/')} type="button" className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="/logo.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </button>

            <SearchInput placeholder={placeholder} />

            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden md:inline cursor-pointer text-sm lg:text-base">Become a host</p>
                <GlobeAltIcon className="w-6 h-6"/>

                <div className="flex items-center space-x-2 border p-2 rounded-full">
                    <MenuIcon className="w-6 h-6" />
                    <UserCircleIcon className="w-6 h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header