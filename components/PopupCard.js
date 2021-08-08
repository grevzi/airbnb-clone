import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";

const PopupCard = ({img, location, title, description, star, price, total}) => {
    return (
        <div
            className="flex items-center cursor-pointer hover:opacity transition-all duration-200 ease-out max-w-[450px]">
            <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                    className="rounded-md"
                    src={img}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <h4 className="text-md">{title}</h4>
                <div className="border-b w-10 pt-2"/>
                <p className="pt-2 text-xs text-gray-500 flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400"/>
                        {star}
                    </p>

                    <div>
                        <p className="text-md font-semibold pb-2 lg:text-lg">{price}</p>
                        <p className="text-sm text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupCard