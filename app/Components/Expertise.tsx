import React from "react";
import Image from "next/image";
import IndustriesBack from "../../public/images/AboutPageImages/Industries.png";
import Retail from "../../public/images/AboutPageImages/Retail.png";
import Industries from "../Components/Industries";

const Expertise = () => {
  return (
    <div className="flex flex-col lg:space-y-[6%] lg:px-[8%] text-blue py-[5%]">
      <div className="relative">
        <div className="w-[56%]">
          <Image src={IndustriesBack} alt="Industries" />
        </div>

        <div className="flex flex-col space-y-3 absolute bottom-[-15%] left-0">
          <h3 className="font-semibold text-1xl">
            Expertise across industries
          </h3>
          <p className="w-[70%] text-xs lg:text-[14px] leading-5 tracking-normal">
            Best Apps Business Solutions follows a customer-first and
            result-oriented methodology, serving industries of all sizes and
            across all domains.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap lg:gap-y-9">
        <Industries image={Retail} title="Retail" />
        <Industries image={Retail} title="Consumer Products" />
        <Industries image={Retail} title="Engineering & Construction" />
        <Industries image={Retail} title="High Tech" />
        <Industries image={Retail} title="Health Care" />
        <Industries image={Retail} title="Transportation" />
        <Industries image={Retail} title="Real Estate & Housing" />
        <Industries image={Retail} title="Education" />
        <Industries image={Retail} title="Banking & Finance" />
        <Industries image={Retail} title="Energy & Utilities" />
        <Industries image={Retail} title="Media & Entertainment" />
        <Industries image={Retail} title="Gems & Jewelry" />
      </div>
    </div>
  );
};

export default Expertise;
