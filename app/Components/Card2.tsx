import React from "react";
import Image, { StaticImageData } from "next/image";

interface Card2 {
  image: StaticImageData;
  title: string;
  description: string;
  bgColor: string;
  text: string
}

const Card2 = (props: Card2) => {
  return (
    <div
      className={`flex justify-between items-start rounded-md p-5 shadow-lg text-${props.text}`}
      style={{ backgroundColor: props.bgColor }} // Dynamic inline style for bgColor
    >
      <Image src={props.image} alt="Card2Image" className="w-[13%] lg:w-[8%]" />

      <div className="flex flex-col space-y-2 w-[80%]">
        <h4 className="font-bold lg:text-[18px]">{props.title}</h4>
        <p className="lg:w-[80%] text-xs lg:text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export default Card2;
