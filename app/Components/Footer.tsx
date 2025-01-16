"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/NavBarImages/Logo.svg";
import Facebook from "../../public/images/NavBarImages/linkedin-icon.svg";
import Instagram from "../../public/Images/NavBarImages/linkedin-icon.svg";
import Twitter from "../../public/Images/NavBarImages/linkedin-icon.svg";

const Footer = () => {
  return (
    <div className=" bg-blue space-y-2">
      <div className="flex flex-wrap justify-between w-[100%] space-y-5 lg:space-y-0 p-5 lg:p-10 text-white">
        <div className=" lg:w-[29%] flex flex-col space-y-5">
          <Link href="./" className="flex items-center">
            <Image src={Logo} alt="Logo" className="w-[5%]" />
            <p className="text-[17px]">Solutions</p>
          </Link>

          <p className=" lg:w-[90%] text-[14px] leading-relaxed tracking-widest">
            Commodo voluptatibus per quis, assumenda lorem! Nullam adipisicing
            praesent, impedit, repudiandae rutrum lacus eveniet.
          </p>
        </div>
        <div className=" lg:w-[22%] flex flex-col space-y-3">
          <h5 className="">Useful Links</h5>
          <div className="flex flex-col space-y-4 lg:text-[14px] ">
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange "
            >
              <p>About</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Service</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Technologies</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Clients</p>
            </Link>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[22%] flex flex-col space-y-3">
          <h5 className="">Support</h5>
          <div className="flex flex-col space-y-4 lg:text-[14px] ">
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange "
            >
              <p>About</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Services</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Technologies</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Clients</p>
            </Link>
          </div>
        </div>
        <div className=" lg:w-[22%] flex flex-col space-y-4">
          <h5 className="">Contact Information</h5>
          <p className="w-[100%] lg:text-[13px] tracking-widest leading-relaxed">
            Commodo voluptatibus per quis, a lorem! Nullam adipisicing praesent.
          </p>
          <div className="w-[100%] lg:w-[100%] flex justify-between">
            <input
              type="email"
              placeholder="Email here"
              className="p-2 text-xs rounded-sm bg-white text-black w-[52%] outline-none"
              required
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity("Please enter a valid email")
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />
            <Link
              href="#"
              className="flex space-x-2 justify-center bg-orange rounded-sm py-1 px-2 w-[40%]"
            >
              <button className="text-xs text-white ">
                Subscribe
              </button>
            </Link>
          </div>
          <div className=" flex space-x-2">
            <Image src={Facebook} alt='Icon' className="w-[7%]"/>
            <Image src={Facebook} alt='Icon' className="w-[7%]"/>
            <Image src={Facebook} alt='Icon' className="w-[7%]"/>
            <Image src={Facebook} alt='Icon' className="w-[7%]"/>
            <Image src={Facebook} alt='Icon' className="w-[7%]"/>
            <Image src={Facebook} alt='Icon' className="w-[7%]"/>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-4 w-[100%] text-xs bg-orange">
        <p className="text-white">© 2024 esolutions.co.zw</p>
      </div>
    </div>
  );
};

export default Footer;
