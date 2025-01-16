"use client";

import Card1 from "./Components/Card1";
import CardImage1 from "../public/images/HomeImages/Card1.svg";
import CardImage2 from "../public/images/HomeImages/Card2.svg";
import CardImage3 from "../public/images/HomeImages/Card3.svg";
import Card2Image from "../public/images/HomeImages/Cardd1.svg";
import Card2Image2 from "../public/images/HomeImages/Cardd2.svg";
import Card2Image3 from "../public/images/HomeImages/Cardd3.svg";
import Card2Image4 from "../public/images/HomeImages/Cardd4.svg";
import Card2 from "./Components/Card2";
import Link from "next/link";
import Image from "next/image";
import RightArrow from "../public/images/HomeImages/RightArrow.svg";
import Line from "../public/images/HomeImages/OrangLine.svg";
import Client from "../public/images/HomeImages/Client.svg";
import PaymentSolutions from "./Components/PaymentSolutions";
import { FaArrowRight } from "react-icons/fa6";
import GroupImages from "../public/images/HomeImages/GroupImages.svg";
import Progress from "./Components/Progress";
import Partners from "./Components/Partners";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-7">
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
              <Image src={RightArrow} alt="Arrow" className="w-[18%]" />
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Version Landing End */}

      <div className="hidden lg:flex bg-home w-full lg:bg-cover lg:bg-center lg:bg-no-repeat lg:h-[100vh]">
        <div className="absolute top-0 w-full h-full bg-blue bg-opacity-70 flex flex-col justify-center text-white px-[7%] ">
          <div className="flex flex-col space-y-4 mt-[7%]">
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl font-bold w-[%]">
                Redefining Innovation
              </h1>
              <h1 className="text-4xl font-bold w-[%]">
                In Software Development
              </h1>
            </div>
            <p className="w-[48%]">
              If giving your business an instantaneous boost using the dynamic
              web and mobile technology, is on your plans, e-Solutions should be
              your pick to get started.
            </p>
            <Link
              href="/Donate"
              className="flex space-x-2 justify-center items-center bg-orange rounded-md p-2 w-[12%]"
            >
              <button className="text-xs text-white">Explore Now</button>
              <Image src={RightArrow} alt="Arrow" className="w-[18%]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between space-y-5 lg:space-y-0 px-[5%] lg:px-[7%] absolute bottom-[-60%] lg:bottom-[-10%]">
        <Card1
          image={CardImage1}
          title="Future-proof your business"
          description="Empower your enterprise business with the 
                       true agility to fast-track digital transformation
                       and remain future-proofed"
        />

        <Card1
          image={CardImage2}
          title="Be continuously transforming"
          description="Gain the ability to continuously transform
                       your business as your market dictates,
                       without being held back by technology"
        />
        <Card1
          image={CardImage2}
          title="Do it your way"
          description="Don't settle for having to adjust your business
                       processes to software. Adjust your software 
                       to your business process, affordably"
        />
      </div>

      <div className="flex flex-wrap justify-between lg:pt-[10%] px-[6%] lg:px-[7%] pt-[110%]">
        <div className="lg:w-[45%] flex flex-col space-y-[5%]">
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-2 items-center">
              <h3 className="text-orange font-bold lg:text-[19px]">
                Our Services
              </h3>
              <Image
                src={Line}
                alt="OrangeLine"
                className=" w-[40%] lg:w-[30%]"
              />
            </div>
            <h3 className="text-blue font-bold text-[26px] lg:text-4xl">
              We are here for you
            </h3>
          </div>
          <div className="flex flex-wrap space-y-5">
            <Card2
              image={Card2Image}
              title="Payment Solutions"
              description="enhance security, and provide convenience 
                           for businesses and consumers alike"
              bgColor="#283891"
              text="white"
            />
            <Card2
              image={Card2Image2}
              title="Mobile Advertising"
              description="Harness the power of mobile technology to 
                           reach your target audience with precision 
                           and impact."
              bgColor="white"
              text="blue"
            />
            <Card2
              image={Card2Image3}
              title="Utilities"
              description=" efficient, and innovative solutions for managing
                            and delivering essential services."
              bgColor="white"
              text="blue"
            />
            <Card2
              image={Card2Image4}
              title="UI/UX Design"
              description="dedicated to creating intuitive, engaging, and 
                           aesthetically pleasing digital experiences."
              bgColor="white"
              text="blue"
            />
          </div>
        </div>
        <div className="lg:w-[45%] flex flex-col text-blue space-y-[4%]">
          <Image src={Client} alt="Client" />
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold lg:text-[20px]">Payment Solutions</h3>
            <p className=" text-xs lg:text-[13px] leading-normal tracking-wide">
              Welcome to our comprehensive payment solutions hub, where we cater
              to all your transaction needs with cutting-edge technology and
              seamless integration. Explore our range of services designed to
              make financial transactions effortless and secure.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="text-[15px] font-bold">Our Range of services</h3>
            <PaymentSolutions
              title="Payments Gateway"
              description="Secure Online Transactions: Facilitate smooth and secure online payments with robust 
                           encryption and fraud prevention."
            />
            <PaymentSolutions
              title="Mobile POS"
              description="On-the-Go Payments: Transform mobile devices into powerful point-of-sale systems for 
                           real-time sales tracking and inventory management."
            />
          </div>
          <Link href="#" className="flex space-x-2 text-orange items-center">
            <p className="text-[13px] font-bold">Read More</p>
            <FaArrowRight />
          </Link>
        </div>
      </div>

      <div className="hidden bg-employee bg-cover bg-no-repeat bg-center w-[100%] h-[100vh] relative lg:flex">
        <div className="absolute flex flex-col top-0 w-full h-full bg-blue bg-opacity-70 ">
          <div className="flex flex-wrap-reverse text-white px-[7%] py-[3%] justify-between">
            <div className="lg:w-[45%]">
              <Image src={GroupImages} alt="GroupImage" className="w-[85%]" />
            </div>
            <div className="lg:w-[45%] flex flex-col space-y-[15%]">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-2 items-center">
                  <h3 className="text-white font-bold lg:text-[19px]">
                    About Us
                  </h3>
                  <Image
                    src={Line}
                    alt="OrangeLine"
                    className=" w-[40%] lg:w-[30%]"
                  />
                </div>
                <div className="flex flex-col space-y-5">
                  <h3 className="font-bold lg:text-[20px]">
                    Connect. Innovate. Transform
                  </h3>
                  <p className=" text-xs lg:text-[13px] leading-normal tracking-wider">
                    If giving your business an instantaneous boost using the
                    dynamic web and mobile technology, is on your plans,
                    e-Solutions should be your pick to get started.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-3">
                  <h3 className="font-bold lg:text-[20px]">
                    We work with you.
                  </h3>
                  <p className=" text-xs lg:text-[13px] leading-normal tracking-wider">
                    We work with you as thinkers, creators, consultants,
                    designers, and implementers to turn your product into a high
                    quality marketable offering. we welcome your invaluable
                    feedback throughout the design process of continued
                    collaboration that helps us provide powerful business
                    solutions to you.
                  </p>
                </div>
                <Link
                  href="#"
                  className="flex space-x-2 text-white items-center"
                >
                  <p className="text-[13px] font-bold">Read More</p>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between text-white px-[7%] lg:mt-[5%] xl:mt-0">
            <Progress digit="18" statement="Years of Experience" />
            <Progress digit="15" statement="Qualified Developers" />
            <Progress digit="20" statement="Heroes Made!" />
            <Progress digit="40" statement="Happy Customers" />
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="hidden lg:mb-4 lg:flex ">
        <Partners
          heading="Clients / Partners"
          description="A Satisfied Clientele"
          color="orange"
          color2="blue"
          font="light"
          font2="semibold"
          text={2}
        />
      </div>

      {/* Map + Contact */}
      <div className=" hidden lg:flex justify-center bg-map bg-cover bg-no-repeat bg-center h-[80vh] w-[100%] relative">
        <div className="flex flex-col-reverse lg:flex lg:flex-row text-black p-10 w-[50%] bg-white absolute top-[-10%]">
          <div className="lg:w-[40%] flex flex-wrap lg:flex lg:flex-col lg:space-y-[15%] xl:space-y-[10%]">
            <Link href="#" className="h-[5%] w-[50%]"></Link>
            <Link
              href="https://wa.me/+263711311050"
              className="h-[5%] w-[50%]"
            ></Link>
            <Link
              href="https://github.com/DerrickDeshoe"
              className="h-[5%] w-[50%]"
            ></Link>
            <Link
              href="https://www.linkedin.com/in/derrick-deshu-7403672ab"
              className="h-[5%] w-[50%]"
            ></Link>
            <Link href="#" className="h-[5%] w-[50%]"></Link>
          </div>
          <div className="lg:w-[50%] flex flex-col justify-end space-y-3">
            <form
           
              className="space-y-3 flex flex-col items-end"
            >
              <div className="flex justify-between space-x-2 w-[100%]">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border border-white p-2 text-xs lg:text-sm outline-none w-[100%] rounded-lg bg-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-white p-2 text-xs lg:text-sm outline-none w-[100%] rounded-lg bg-transparent"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="border border-white p-2 pr-[113px] text-xs lg:text-sm outline-none rounded-lg bg-transparent w-[100%]"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="border border-white p-2 pb-[100px] pr-[113px] md:pb-[150px] text-xs lg:text-sm outline-none rounded-lg bg-transparent w-[100%]"
                required
              />
              <button
                type="submit"
                className="bg-red hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-xs"
              >
                Submit
              </button>
        
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
