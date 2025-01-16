import React from "react";
import Image from "next/image";
import Arrow from "../../public/images/AboutPageImages/ArrowDouble.png";
import WWR from "../../public/images/AboutPageImages/WhoWeARe.png";
import MissionVisionValues from "../Components/MissionVisionValues";
import Link from "next/link";
import OurStory from "../Components/OurStory";
import Expertise from "../Components/Expertise";
import Partners from "../Components/Partners";

const page = () => {
  return (
    <div className="flex flex-col">
      {/* Mobile Version */}

      <div className="bg-phoneHome bg-cover bg-center bg-no-repeat w-full h-[100vh] lg:hidden relative">
        <div className="absolute top-0 w-full h-full bg-blue bg-opacity-50 flex items-center justify-center px-[5%]">
          <div className="flex flex-col space-y-4 text-white">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-bold w-[%]">
                Redefining Innovation
              </h1>
              <h1 className="text-2xl font-bold w-[%]">
                In Software Development
              </h1>
            </div>
            <p className="text-sm leading-relaxed tracking-wide">
              If giving your business an instantaneous boost using the dynamic
              web and mobile technology, is on your plans, e-Solutions should be
              your pick to get started.
            </p>
            <Link
              href="/Donate"
              className="flex space-x-2 justify-center items-center bg-orange rounded-md p-2 w-[35%]"
            >
              <button className="text-xs text-white">Explore Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Laptop Version */}
      <div className="hidden lg:flex bg-aboutBack bg-center bg-no-repeat bg-cover w-[100%] h-[80vh] relative">
        <div className=" hidden absolute top-0 w-full h-full bg-blue bg-opacity-80 lg:flex flex-col items-center justify-center px-[5%] ">
          <div className="flex flex-col space-y-2 items-center mt-[5%]">
            <h1 className="text-white font-bold text-3xl">ABOUT Us</h1>
            <div className="flex space-x-1">
              <p className="text-white">Home</p>
              <Image src={Arrow} alt="Arrow" />
              <p className="text-orange">About Us</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-[3%] lg:px-[7%] py-[3%] relative h-[55vh]">
        <Image src={WWR} alt="WhoWeAre Image" className="lg:w-[90%]" />
        <div className="flex flex-col space-y-3 absolute top-[6%] lg:top-[25%] pl-[1%]">
          <h2 className="text-blue font-semibold text-3xl">About Us</h2>
          <div className="flex flex-col space-y-3 w-[90%] lg:w-[55%]">
            <p className="text-blue text-xs lg:text-[14px] leading-5 tracking-normal">
              eSolutions was formed in 2000. Our company is based in Harare,
              Zimabwe. We are the leading software development company in
              Zimbabwe. Our work ethos lies in working alongside you to provide
              technology leadership and strategic consulting to help turn your
              ideas into reality.
            </p>
            <p className="text-blue text-xs lg:text-[14px] leading-5 tracking-normal">
              We atlarge assist the companies release the potential of digital
              technology to gain exact business outcomes, make process fast and
              leading in destructive times. Our innovative products and
              solutions along with our business and resource engagement model,
              guides our clients step along with the current times. After being
              in the market over a decade we are an expert in solving our
              clients' hardest challenges by providing balanced services in
              latest technology, digital, operations, strategy and consulting,
              and technology.
            </p>
          </div>
        </div>
      </div>

      <div className=" px-[3%] lg:px-[8%]">
        <MissionVisionValues />
      </div>

      <div className="">
        <OurStory />
      </div>

      <div>
        <Expertise />
      </div>

      <div className="">
        <Partners
          heading="Our Clients"
          description="We contribute to these partnership programs, supported by global technology experts.
          Partnering with industry leaders, we offer quality technology solutions that meet your business needs."
          color="blue"
          color2="blue"
          font="bold"
          font2="extralight"
          text={2}
        />
      </div>
    </div>
  );
};

export default page;
