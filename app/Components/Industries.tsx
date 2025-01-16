import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface Industries {
  image: StaticImageData;
  title: string;
}

const Industries = (props: Industries) => {
  return (
    <div className="flex flex-col w-[16%] items-center space-y-2">
      <div className="flex justify-center border border-blue rounded-full p-7 lg:w-[70%]">
        <Image src={props.image} alt="Retail" className="" />
      </div>
      <p className="text-sm w-[80%] text-center">{props.title}</p>
    </div>
  );
};

export default Industries;
