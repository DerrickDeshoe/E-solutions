import React from "react";
import Image from "next/image";
import ServiceArrow from "../../public/images/ServicesImages/rightArrowService.png";

interface CoreServices {
  title: string;
  description: string;
}

const CoreServices = (props: CoreServices) => {
  return (
    <div className="flex flex-col items-end bg-lightGray p-5 rounded-md lg:w-[32%] text-blue space-y-3">
      <div className="w-[100%]">
        <h3 className="font-bold lg:text-lg leading-5 tracking-normal">
          {props.title}
        </h3>
      </div>
      <p className="text-xs lg:text-[14px] leading-5 tracking-normal">
        {props.description}
      </p>
      <div className="w-[10%] bg-redShade p-2 rounded-lg">
        <Image src={ServiceArrow} alt="Arrow" />
      </div>
    </div>
  );
};

export default CoreServices;
