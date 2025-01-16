"use client";

import React, { useState } from "react";
import Image from "next/image";
import VR from "../../public/images/AboutPageImages/VR.png";
import VR2 from "../../public/images/AboutPageImages/VR2.png";
import VR3 from "../../public/images/AboutPageImages/VR3.png";

const KeyStorage = () => {
  const [activeTab, setActiveTab] = useState<"packaging" | "storage" | "value">(
    "packaging"
  );

  return (
    <div className="flex flex-wrap-reverse justify-between lg:pb-[33%] lg:pt-[4%] relative">
      <div className=" flex flex-col justify-center space-y-3 lg:space-y-5">
        {/* Tab Navigation */}
        <div className="flex space-x-3 lg:space-x-10 lg:w-[50%] lg:z-[5]">
          <h5
            className={`font-semibold text-[23px] lg:text-3xl cursor-pointer ${
              activeTab === "packaging"
                ? "text-orange border-b-2 border-gray-500"
                : "text-blue"
            }`}
            onClick={() => setActiveTab("packaging")}
          >
            Mission
          </h5>
          <h5
            className={`font-semibold  text-[23px] lg:text-3xl cursor-pointer ${
              activeTab === "storage"
                ? "text-orange border-b-2 border-gray-500"
                : "text-blue"
            }`}
            onClick={() => setActiveTab("storage")}
          >
            Vision
          </h5>
          <h5
            className={`font-semibold  text-[23px] lg:text-3xl cursor-pointer ${
              activeTab === "value"
                ? "text-orange border-b-2 border-gray-500"
                : "text-blue"
            }`}
            onClick={() => setActiveTab("value")}
          >
            Values
          </h5>
        </div>

        {/* Tab Content */}
        <div className="">
          <div
            className={`${
              activeTab === "packaging"
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-50%]"
            } transition-all duration-500 ease-in-out absolute inset-0`}
          >
            <div className="flex flex-wrap justify-between lg:pt-[9%]">
              <div className="flex flex-col space-y-4 text-blue">
                <p className="font-bold text-1xl">
                  Transforming Visions into Digital Reality
                </p>
                <div className="flex flex-col space-y-5 text-xs lg:text-[14px] lg:w-[50%]">
                  <p>
                    We aspire to create and deliver the best digital solutions
                    for businesses wanting to acquire a competitive edge in the
                    industry and serve their customers through robust digital
                    channels.
                  </p>
                  <p>
                    e-Solutions aims to help startups and organizations
                    recognize their potential and leverage optimum, highly
                    customized solutions for business growth and ROI.
                  </p>
                </div>
              </div>
              <Image
                src={VR}
                alt="Virtual Reality"
                className="w-[50%] lg:hidden"
              />
              <Image
                src={VR}
                alt="Virtual Reality"
                className=" hidden lg:flex absolute top-[3%] right-[3%] w-[45%] lg:z-[-3]"
              />
            </div>
          </div>

          <div
            className={`${
              activeTab === "storage"
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-50%]"
            } transition-all duration-500 ease-in-out absolute inset-0`}
          >
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-col space-y-4 text-blue lg:w-[100%] lg:pt-[9%]">
                <p className="font-bold text-1xl">
                  Transforming the world through technologies that disrupt
                </p>
                <div className="flex flex-col space-y-5 text-xs lg:text-[14px] lg:w-[55%]">
                  <p>
                    We aim to extend the scope of current technologies into
                    societal issues and deliver back to the community for the
                    greater good.
                  </p>
                  <p>
                    We aim to transform lives and businesses by leveraging
                    cutting-edge technology and innovative software solutions.
                    In the next five years, we aim to enhance digital education
                    and employment opportunities for millions, support the
                    growth of numerous ventures, and lead businesses to
                    successful exits.
                  </p>
                </div>
              </div>
              <Image
                src={VR2}
                alt="Virtual Reality"
                className="w-[50%] lg:hidden"
              />
              <Image
                src={VR2}
                alt="Virtual Reality"
                className=" hidden lg:flex absolute top-[5%] right-[3%] w-[40%] lg:z-[-3]"
              />
            </div>
          </div>

          <div
            className={`${
              activeTab === "value"
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-50%]"
            } transition-all duration-500 ease-in-out absolute inset-0`}
          >
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-col space-y-4 text-blue lg:w-[85%] lg:z-10 lg:pt-[9%]">
                <div className="flex flex-col space-y-2">
                  <h3 className="font-bold">Curiosity</h3>
                  <p className=" text-xs lg:text-[14px]">
                    We encourage our team members to question the norm and
                    explore innovative solutions to problems.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="font-bold">Honesty</h3>
                  <p className=" text-xs lg:text-[14px]">
                    We value integrity and ethical behavior in all our
                    interactions, both internally and externally.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="font-bold">Positivity</h3>
                  <p className=" text-xs lg:text-[14px] lg:w-[65%]">
                    We value the power of positivity and believe that it leads
                    to higher productivity, creativity, and job satisfaction.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="font-bold">Impact</h3>
                  <p className=" text-xs lg:text-[14px]">
                    We strive to make a meaningful impact in everything we do at
                    e-Solutions
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="font-bold">Disruption</h3>
                  <p className=" text-xs lg:text-[14px]">
                    We believe that disruptive innovation is the key to solving
                    complex problems and creating new opportunities.
                  </p>
                </div>
              </div>
              <Image
                src={VR3}
                alt="Virtual Reality"
                className="w-[50%] lg:hidden"
              />
              <Image
                src={VR3}
                alt="Virtual Reality"
                className="w-[50%] hidden lg:flex absolute top-[12%] right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyStorage;
