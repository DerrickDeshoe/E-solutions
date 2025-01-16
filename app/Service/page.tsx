import React from "react";
import Image from "next/image";
import Arrow from "../../public/images/AboutPageImages/ArrowDouble.png";
import ServiceBack from "../../public/images/ServicesImages/OurServices.png";
import CoreServices from "../Components/CoreServices";
import Services1 from "../../public/images/ServicesImages/Services1.png";
import Link from "next/link";
import Call from "../../public/images/ServicesImages/call.png";
import Expertise from "../Components/Expertise";

const page = () => {
  return (
    <div>
      <div className="bg-service1Back bg-cover bg-center bg-no-repeat w-[100%] h-[80vh]">
        <div className="absolute top-0 w-full h-[80vh] bg-blue bg-opacity-70 flex items-center justify-center px-[5%]">
          <div className="flex flex-col space-y-2 items-center mt-[5%]">
            <h1 className="text-white font-bold text-3xl">Services</h1>
            <div className="flex space-x-1">
              <p className="text-white">Home</p>
              <Image src={Arrow} alt="Arrow" />
              <p className="text-orange">Services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap lg:justify-between lg:px-[7%] py-[5%]">
        <div className="w-[48%] text-blue flex flex-col space-y-[7%]">
          <div className="relative">
            <div className=" w-[75%]">
              <Image src={Services1} alt="Services1Image" />
            </div>
            <p className="absolute bottom-[-40%] font-bold text-3xl">
              Transform Business Growth with Innovative Services
            </p>
          </div>
          <p className="text-xs lg:text-[16px] leading-5 tracking-normal">
            Our unwavering commitment to innovation and customer satisfaction
            drives us to deliver transformative services that effectively
            address the ever-evolving demands of businesses in the digital
            world. At e-Solutions, we ensure exceptional results and drive
            impactful transformations through our comprehensive offerings:
          </p>
          <div className="flex flex-col space-y-3 text-xs lg:text-[15px] leading-5 tracking-normal">
            <div className="flex justify-between">
              <p>Digital Strategy Development</p>
              <p>Fintech Solutions</p>
            </div>
            <div className="flex justify-between">
              <p>Integration Services</p>
              <p>Custom Software Development</p>
            </div>
          </div>
        </div>
        <div className="w-[35%]">
          <div className="p-5 flex flex-col items-center rounded-lg shadow-2xl space-y-[7%] lg:mt-[8%]">
            <div className="w-[100%]">
              <div className="flex flex-col space-y-1">
                <p className="text-blue lg:text-3xl font-bold leading-5 tracking-wide">
                  Book a Free
                </p>
                <p className="text-orange lg:text-3xl font-bold leading-5 tracking-wide">
                  Consultation
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-[8%] w-[100%]">
              <input
                type="text"
                placeholder="Full Name"
                className="border-b-2 border-blue outline-none pb-2"
              />
              <input
                type="text"
                placeholder="Email"
                className="border-b-2 border-blue outline-none pb-2"
              />
              <input
                type="text"
                placeholder="Number"
                className="border-b-2 border-blue outline-none pb-2"
              />
              <input
                type="text"
                placeholder="Describe your project need"
                className="border-b-2 border-blue outline-none pb-2"
              />
            </div>
            <Link
              href="/Donate"
              className="flex space-x-2 justify-center items-center bg-orange rounded-md p-2 w-[35%]"
            >
              <button className="text-xs text-white">Get In Touch</button>
              <Image src={Call} alt="Call" className="w-[16%]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:px-[7%] flex flex-col space-y-5 py-[3%] relative">
        <div className="flex flex-col items-center justify-center">
          <div className="lg:w-[65%] relative">
            <Image src={ServiceBack} alt="ServicesBackground" />
          </div>
          <h2 className="font-bold lg:text-3xl text-blue absolute top-[9%] leading-5 tracking-wide">
            Our Core Services
          </h2>
        </div>
        <div className="flex flex-wrap justify-between lg:gap-y-6">
          <CoreServices
            title="Payment Solutions"
            description="Our comprehensive payment solutions are designed 
                         to streamline financial transactions, enhance security, 
                         and provide convenience for businesses."
          />
          <CoreServices
            title="Payment Solutions"
            description="Our comprehensive payment solutions are designed 
                         to streamline financial transactions, enhance security, 
                         and provide convenience for businesses."
          />
          <CoreServices
            title="Payment Solutions"
            description="Our comprehensive payment solutions are designed 
                         to streamline financial transactions, enhance security, 
                         and provide convenience for businesses."
          />
          <CoreServices
            title="Payment Solutions"
            description="Our comprehensive payment solutions are designed 
                         to streamline financial transactions, enhance security, 
                         and provide convenience for businesses."
          />
          <CoreServices
            title="Payment Solutions"
            description="Our comprehensive payment solutions are designed 
                         to streamline financial transactions, enhance security, 
                         and provide convenience for businesses."
          />
          <CoreServices
            title="Payment Solutions"
            description="Our comprehensive payment solutions are designed 
                         to streamline financial transactions, enhance security, 
                         and provide convenience for businesses."
          />
          <CoreServices
            title="Payment Solutions"
            description="Our comprehensive payment solutions are designed 
                         to streamline financial transactions, enhance security, 
                         and provide convenience for businesses."
          />
          <CoreServices
            title="Payment Solutions"
            description="Our comprehensive payment solutions are designed 
                         to streamline financial transactions, enhance security, 
                         and provide convenience for businesses."
          />
          <CoreServices
            title="Payment Solutions"
            description="Our comprehensive payment solutions are designed 
                         to streamline financial transactions, enhance security, 
                         and provide convenience for businesses."
          />
        </div>
      </div>

      <div>
        <Expertise />
      </div>
    </div>
  );
};

export default page;
