import React from "react";
import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/outline";

const InfoCard = ({img, location, title, description, star, price, total}) => {
    return (
        <div
            className="flex items-center cursor-pointer py-7 border-b first:border-t hover:opacity hover:scale-105 transition-all duration-200 ease-out">
            <div className="relative w-40 h-24 md:w-80 md:h-52 flex-shrink-0">
                <Image
                    className="rounded-lg lg:rounded-2xl"
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
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2"/>
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400"/>
                        {star}
                    </p>

                    <div>
                        <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard