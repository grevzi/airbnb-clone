import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";

const InfoCard = ({img, location, title, description, star, price, total}) => {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-200 ease-out">
            <div className="relative w-40 h-24 md:w-80 md:h-52 flex-shrink-0">
                <Image
                    className="rounded-lg"
                    src={img}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="w-7 h-7 cursor-pointer"/>
                </div>
                <h3 className="text-gray-500">{description}</h3>
            </div>
        </div>
    )
}

export default InfoCard