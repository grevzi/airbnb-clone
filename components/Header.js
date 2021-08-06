import React from "react";
import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid";

const Header = props => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="/logo.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm ">
                <input
                    className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                    type="text"
                    name="search"
                    placeholder="Start your search"
                />

                <SearchIcon
                    className="hidden md:inline-flex w-8 h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer md:mx-2"/>
            </div>

            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
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