import React from "react";
import Image from "next/image";

const MediumCard = ({img, title}) => {
    return (
        <div className="cursor-pointer hover:scale-105 transition-all duration-300 ease-out">
            <div className="relative w-80 h-80">
                <Image className="rounded-xl" src={img} layout="fill" />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard