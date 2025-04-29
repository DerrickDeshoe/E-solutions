import React from "react";
import Arrow from "../../public/images/AboutPageImages/ArrowDouble.png";
import Image from "next/image";
import PaymentSolutions from "../../public/images/PaymentImages/PaymentSolutions.png";
import BlueTick from "../../public/images/PaymentImages/ServiceMark.svg";
import InfoBanner from "../Components/InfoBanner";
import BannerImage1 from "../../public/images/PaymentImages/InfoBanner1.png";
import MarketTrends from '../../public/images/PaymentImages/MarketTrend.png'
import Expertise from "../Components/Expertise";

const page = () => {
  return (
    <div>
      <div className="bg-paymentBack bg-cover bg-center bg-no-repeat w-[100%] h-[80vh]">
        <div className="absolute top-0 w-full h-[80vh] bg-blue bg-opacity-80 flex items-center justify-center px-[5%]">
          <div className="flex flex-col space-y-2 items-center mt-[5%]">
            <h1 className="text-white font-bold text-3xl">Payment Solutions</h1>
            <div className="flex space-x-1">
              <p className="text-white">Home</p>
              <Image src={Arrow} alt="Arrow" />
              <p className="text-white">Services</p>
              <Image src={Arrow} alt="Arrow" />
              <p className="text-orange">Payment Solutions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-[7%] py-[4%] lg:h-[50vh]">
        <div className="lg:w-[70%] relative">
          <Image src={PaymentSolutions} alt="PaymentSolutions" />
        </div>
        <div className="flex flex-wrap text-blue absolute bottom-[-22%]">
          <div className="lg:w-[48%] flex flex-col space-y-5">
            <h3 className="lg:text-3xl font-bold w-[88%]">
              Unlock Efficiency and Security with Advanced Payment Solutions
            </h3>
            <p className="text-xs lg:text-[14px] leading-relaxed tracking-normal lg:w-[90%]">
              Our innovative payment solutions are designed to enhance
              efficiency, security, and convenience. Catering to the diverse
              needs of businesses and individuals, we ensure smooth and reliable
              transactions every time. Discover our comprehensive suite of
              services, tailored to meet your specific requirements and elevate
              your financial operations.
            </p>
          </div>
          <div className="lg:w-[50% pt-[2%] flex flex-col space-y-2">
            <h3 className="font-bold ">Why Choose Our Payment Solutions?</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-1 items-center">
                <Image
                  src={BlueTick}
                  alt="BlueTick"
                  className="w-[5%] lg:w-[3%]"
                />
                <div className="flex space-x-1 text-xs lg:text-sm leading-5 tracking-normal">
                  <p className="font-bold">Efficiency:</p>
                  <p>
                    Optimize your payment processes with our seamless
                    transaction systems.
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
                  <p className="font-bold"> Security: </p>
                  <p>
                    Protect your financial data with advanced security measures.
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
                  <p className="font-bold">Convenience:</p>
                  <p>
                    Enjoy flexible payment options that suit your unique
                    requirements.
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
                  <p className="font-bold"> Reliability:</p>
                  <p>
                    Ensure consistent and dependable transaction processing.
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
                  <p className="font-bold"> Scalability:</p>
                  <p>
                    Easily adapt to your growing business needs with our
                    scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <InfoBanner
          image={BannerImage1}
          width={20}
          heading="Driving Solutions in Payment Systems"
          paragraph="we turn every transaction into an opportunity for growth. By leveraging advanced payment 
                     technologies, we empower businesses and individuals with seamless, secure, and efficient 
                     payment processes. Our comprehensive suite of Payment Solutions is designed to meet 
                     diverse financial needs, providing the foundation for financial freedom and informed 
                     decision-making."
        />
      </div>

      <div className="lg:p-[4%]">
        <Image src={MarketTrends} alt='MarketTrends'/>
      </div>

      <div>
        < Expertise/>
      </div>
    </div>
  );
};

export default page;
