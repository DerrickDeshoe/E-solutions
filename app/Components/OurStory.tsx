"use client";

import React from "react";
import Image from "next/image";
import Award1 from "../../public/images/AboutPageImages/Award1.png";
import Award2 from "../../public/images/AboutPageImages/Award2.png";
import Award3 from "../../public/images/AboutPageImages/Award3.png";
import Progress2 from "../Components/Progress2";
import ourStory from "../../public/images/AboutPageImages/OurStoryImage.png";

const OurStory = () => {
  return (
    <div className="flex flex-wrap lg:justify-between lg:items-center relative bg-lightGray p-[3%] lg:px-[8%] lg:pb-[22%]  text-blue">
      <div className="lg:pt-[10%] lg:w-[60%]">
        <Image src={ourStory} alt="OurStoryImage" className="" />
      </div>
      <div className="flex flex-wrap space-y-5 lg:w-[55%] absolute top-[15%] ">
        <h2 className="font-semibold text-2xl lg:w-[70%]">
          Empowering Businesses with Strategic Consulting: Zimbabwe's Top
          Software Development Company
        </h2>
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-1xl">OUR STORY</h3>
          <p className="text-xs lg:text-[14px] leading-5 tracking-normal lg:w-[90%]">
            Since our founding in 2000 in Harare, Zimbabwe, e-Solutions has been
            dedicated to becoming the leading software development company in
            the country. Our commitment to excellence is reflected in our
            collaborative approach, working alongside our clients to provide
            technology leadership and strategic consulting. We strive to turn
            your ideas into reality, driving innovation and success in the
            digital age
          </p>
        </div>
        <div className="flex space-x-3">
          <div className="flex flex-col space-y-3 bg-gray py-5 items-center w-[30%] rounded-md">
            <Image src={Award1} alt="awardImage" className="" />
            <p className="text-center text-xs  w-[70%]">
              qualified IBM Business Partner
            </p>
          </div>
          <div className="flex flex-col space-y-3 bg-gray py-5 items-center w-[30%] rounded-md">
            <Image src={Award2} alt="awardImage" className="" />
            <p className="text-center text-xs  w-[86%]">
              qualified & Certified Consultants.
            </p>
          </div>
          <div className="flex flex-col space-y-3 bg-gray py-5 items-center w-[30%] rounded-md">
            <Image src={Award3} alt="awardImage" className="" />
            <p className="text-center text-xs  w-[80%]">Regional player</p>
          </div>
        </div>
      </div>
      <div className="lg:w-[35%] flex flex-wrap space-y-2 lg:space-y-0 lg:justify-center absolute top-[25%] right-[5%]">
        <Progress2 digit="20" statement="Years of Experience" />
        <Progress2 digit="20" statement="Heroes Made" />
        <Progress2 digit="15" statement="Qualified Developers" />
        <Progress2 digit="40" statement="Happy Customers" />
      </div>
    </div>
  );
};

export default OurStory;
