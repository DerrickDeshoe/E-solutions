"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface Card1 {
  image: StaticImageData;
  title: string;
  description: string;
}

const Card1 = (props: Card1) => {
  return (
    <div className="flex flex-col space-y-3 rounded-md p-5 text-blue shadow-lg lg:w-[32%] bg-white hover:bg-blue hover:text-white transition duration-300 ease-in-out">
      <div className="flex space-x-2">
        <Image src={props.image} alt="CardImage" className="w-[13%]" />
        <h4 className="font-bold lg:text-[18px] w-[60%]">{props.title}</h4>
      </div>
      <div>
        <p className="text-xs lg:text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export default Card1;
