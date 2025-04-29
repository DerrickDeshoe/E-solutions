import React from "react";
import Image from "next/image";
import Arrow from "../../public/images/AboutPageImages/ArrowDouble.png";
import BlueTick from "../../public/images/AdvertisingImages//ServiceMark.svg";
import MobileAdvertising from "../../public/images/AdvertisingImages/Mobile Advertising.png";
import InfoBanner from "../Components/InfoBanner";
import BannerImage2 from "../../public/images/AdvertisingImages/InfoBanner2.png";

const page = () => {
  return (
    <div>
      <div className="bg-advertisingBack bg-cover bg-center bg-no-repeat w-[100%] h-[80vh]">
        <div className="absolute top-0 w-full h-[80vh] bg-blue bg-opacity-80 flex items-center justify-center px-[5%]">
          <div className="flex flex-col space-y-2 items-center mt-[5%]">
            <h1 className="text-white font-bold text-3xl">Mobile Advertising</h1>
            <div className="flex space-x-1">
              <p className="text-white">Home</p>
              <Image src={Arrow} alt="Arrow" />
              <p className="text-white">Services</p>
              <Image src={Arrow} alt="Arrow" />
              <p className="text-orange">Mobile Advertising</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-[7%] py-[4%] lg:h-[55vh] relative">
        <div className="lg:w-[70%] relative">
          <Image src={MobileAdvertising} alt="Mobile Advertising" />
        </div>
        <div className="flex flex-wrap text-blue absolute bottom-[5%]">
          <div className="lg:w-[48%] flex flex-col space-y-5">
            <h3 className="lg:text-3xl font-bold w-[88%]">
              Expand Your Reach with Our Mobile Advertising Solutions
            </h3>
            <p className="text-xs lg:text-[14px] leading-relaxed tracking-normal lg:w-[90%]">
              Designed to maximize your marketing efforts, our solutions ensure
              that your message gets delivered efficiently and effectively to
              your target audience.
            </p>
          </div>
          <div className="lg:w-[50%] pt-[2%] flex flex-col space-y-2">
            <h3 className="font-bold ">Why Choose Our Mobile Advertising?</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-1 items-center">
                <Image
                  src={BlueTick}
                  alt="BlueTick"
                  className="w-[5%] lg:w-[3%]"
                />
                <div className="flex space-x-1 text-xs lg:text-sm leading-5 tracking-normal">
                  <p className="font-bold w-[45%]"> Targeted Campaigns:</p>
                  <p>
                    Reach the right audience at the right time with our
                    precision-targeted mobile advertising strategies.
                  </p>
                </div>
              </div>
              <div className="flex space-x-1 items-center">
                <Image
                  src={BlueTick}
                  alt="BlueTick"
                  className="w-[5%] lg:w-[3%]"
                />
                <div className="flex space-x-1 text-xs lg:text-sm leading-5 tracking-normal">
                  <p className="font-bold w-[60%]">High Engagement Rates: </p>
                  <p>
                    Engage your audience effectively with personalized and
                    interactive messaging options like 2-Way SMS and USSD
                    Shortcodes.
                  </p>
                </div>
              </div>
              <div className="flex space-x-1 items-center">
                <Image
                  src={BlueTick}
                  alt="BlueTick"
                  className="w-[5%] lg:w-[3%]"
                />
                <div className="flex space-x-1 text-xs lg:text-sm leading-5 tracking-normal">
                  <p className="font-bold w-[45%]">
                    {" "}
                    Cost-Effective Marketing:
                  </p>
                  <p>
                    Maximize your return on investment with cost-effective
                    solutions that deliver measurable results.
                  </p>
                </div>
              </div>
              <div className="flex space-x-1 items-center">
                <Image
                  src={BlueTick}
                  alt="BlueTick"
                  className="w-[5%] lg:w-[3%]"
                />
                <div className="flex space-x-1 text-xs lg:text-sm leading-5 tracking-normal">
                  <p className="font-bold w-[45%]"> Real-Time Analytics: </p>
                  <p>
                    Track the success of your campaigns with real-time analytics
                    and reporting tools, allowing for quick adjustments and
                    optimizations.
                  </p>
                </div>
              </div>
              <div className="flex space-x-1 items-center">
                <Image
                  src={BlueTick}
                  alt="BlueTick"
                  className="w-[5%] lg:w-[3%]"
                />
                <div className="flex space-x-1 text-xs lg:text-sm leading-5 tracking-normal">
                  <p className="font-bold w-[45%]"> Seamless Integration:</p>
                  <p>
                    Easily integrate our mobile advertising solutions into your
                    existing marketing platforms for a streamlined and efficient
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <InfoBanner
          image={BannerImage2}
          heading="Eager to Drive More Revenue On the Go?"
          paragraph="Unlock the full potential of mobile marketing with our tailored Mobile Advertising solutions. Whether 
                     you're looking to reach customers through Bulk SMS, engage them with Interactive SMS, or boost your 
                     brand with SMS Shortcodes, our comprehensive services are designed to help you connect with your 
                     audience anytime, anywhere. With our advanced tools and strategies, you can maximize your reach, 
                     enhance customer engagement, and ultimately drive more revenue—all from the convenience of a 
                     mobile device."
        />
      </div>
    </div>
  );
};

export default page;
